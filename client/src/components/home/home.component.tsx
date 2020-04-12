import React, { lazy } from 'react';

const InputTodo = lazy(() => import('../input-todo/input-todo.component'));
const TodoList = lazy(() => import('../todo-list/todo-list.component'));

const HomeComponent: React.FC = () => {
    return (
        <>
            <div className='container'>
                <InputTodo />
                <TodoList />
            </div>
        </>
    )
}

export default HomeComponent;