module.exports = [
"[project]/task-manager/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/task-manager/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ejhzotsknqqrorbtzzsb.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqaHpvdHNrbnFxcm9yYnR6enNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3ODM3ODMsImV4cCI6MjA5MjM1OTc4M30.1Rbqpwz4PSWEU_btOkcx1bKQjyDoebTLIQSivwA2K-Q");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
}),
"[project]/task-manager/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task-manager/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task-manager/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task-manager/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTask, setNewTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTasks();
    }, []);
    async function fetchTasks() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('tasks').select('*').order('created_at', {
            ascending: false
        });
        if (error) {
            console.error('Error fetching tasks:', error);
        } else {
            setTasks(data || []);
        }
        setLoading(false);
    }
    async function addTask() {
        if (!newTask.trim()) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('tasks').insert([
            {
                title: newTask.trim()
            }
        ]).select();
        if (error) {
            console.error('Error adding task:', error);
        } else {
            setTasks([
                data[0],
                ...tasks
            ]);
            setNewTask('');
        }
    }
    async function toggleTask(id, completed) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('tasks').update({
            completed: !completed
        }).eq('id', id);
        if (error) {
            console.error('Error updating task:', error);
        } else {
            setTasks(tasks.map((task)=>task.id === id ? {
                    ...task,
                    completed: !completed
                } : task));
        }
    }
    async function deleteTask(id) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('tasks').delete().eq('id', id);
        if (error) {
            console.error('Error deleting task:', error);
        } else {
            setTasks(tasks.filter((task)=>task.id !== id));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-white",
        style: {
            backgroundColor: '#0a0a0a'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-2xl px-8 py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold",
                    children: "Task Manager"
                }, void 0, false, {
                    fileName: "[project]/task-manager/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-zinc-400",
                    children: "A full-stack CRUD app built with Next.js and Supabase"
                }, void 0, false, {
                    fileName: "[project]/task-manager/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: newTask,
                            onChange: (e)=>setNewTask(e.target.value),
                            onKeyDown: (e)=>e.key === 'Enter' && addTask(),
                            placeholder: "Add a new task...",
                            className: "flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                        }, void 0, false, {
                            fileName: "[project]/task-manager/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: addTask,
                            className: "rounded-lg px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90",
                            style: {
                                backgroundColor: '#3b82f6'
                            },
                            children: "Add"
                        }, void 0, false, {
                            fileName: "[project]/task-manager/app/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/task-manager/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 space-y-3",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-500",
                        children: "Loading tasks..."
                    }, void 0, false, {
                        fileName: "[project]/task-manager/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this) : tasks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-500",
                        children: "No tasks yet. Add one above."
                    }, void 0, false, {
                        fileName: "[project]/task-manager/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this) : tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: task.completed,
                                    onChange: ()=>toggleTask(task.id, task.completed),
                                    className: "h-4 w-4 cursor-pointer accent-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/task-manager/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `flex-1 text-sm ${task.completed ? 'text-zinc-500 line-through' : 'text-white'}`,
                                    children: task.title
                                }, void 0, false, {
                                    fileName: "[project]/task-manager/app/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>deleteTask(task.id),
                                    className: "text-xs text-zinc-500 hover:text-red-400 transition-colors",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/task-manager/app/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, task.id, true, {
                            fileName: "[project]/task-manager/app/page.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/task-manager/app/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                tasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task$2d$manager$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-xs text-zinc-600",
                    children: [
                        tasks.filter((t)=>t.completed).length,
                        " of ",
                        tasks.length,
                        " completed"
                    ]
                }, void 0, true, {
                    fileName: "[project]/task-manager/app/page.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/task-manager/app/page.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/task-manager/app/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=task-manager_06f88sx._.js.map