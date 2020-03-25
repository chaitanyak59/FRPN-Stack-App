import React, { lazy, Suspense } from 'react';

const InputTodo = lazy(() => import('../input-todo/input-todo.component'));
const TodoList = lazy(() => import('../todo-list/todo-list.component'));

const App: React.FC = () => {
    return (
        <>
            <Suspense fallback={<div>Loading Awesomeness...</div>}>
                <div className='container'>
                    <InputTodo />
                    <TodoList />
                </div>
            </Suspense>
        </>
    )
}

export default App;