'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Task } from '@/types/task'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching tasks:', error)
    } else {
      setTasks(data || [])
    }
    setLoading(false)
  }

  async function addTask() {
    if (!newTask.trim()) return

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title: newTask.trim() }])
      .select()

    if (error) {
      console.error('Error adding task:', error)
    } else {
      setTasks([data[0], ...tasks])
      setNewTask('')
    }
  }

  async function toggleTask(id: string, completed: boolean) {
    const { error } = await supabase
      .from('tasks')
      .update({ completed: !completed })
      .eq('id', id)

    if (error) {
      console.error('Error updating task:', error)
    } else {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !completed } : task
      ))
    }
  }

  async function deleteTask(id: string) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting task:', error)
    } else {
      setTasks(tasks.filter(task => task.id !== id))
    }
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0a0a0a' }}>
      <main className="mx-auto max-w-2xl px-8 py-24">
        <h1 className="text-4xl font-bold">Task Manager</h1>
        <p className="mt-2 text-zinc-400">A full-stack CRUD app built with Next.js and Supabase</p>

        <div className="mt-10 flex gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task..."
            className="flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={addTask}
            className="rounded-lg px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#3b82f6' }}
          >
            Add
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {loading ? (
            <p className="text-zinc-500">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="text-zinc-500">No tasks yet. Add one above.</p>
          ) : (
            tasks.map(task => (
              <div
                key={task.id}
                className="flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id, task.completed)}
                  className="h-4 w-4 cursor-pointer accent-blue-500"
                />
                <span className={`flex-1 text-sm ${task.completed ? 'text-zinc-500 line-through' : 'text-white'}`}>
                  {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {tasks.length > 0 && (
          <p className="mt-6 text-xs text-zinc-600">
            {tasks.filter(t => t.completed).length} of {tasks.length} completed
          </p>
        )}
      </main>
    </div>
  )
}