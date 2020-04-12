import React, { lazy } from 'react';

const InputTodo = lazy(() => import('../input-todo/input-todo.component'));
const TodoList = lazy(() => import('../todo-list/todo-list.component'));
const LogoutComponent = lazy(() => import('../auth/logout.component'));

const HomeComponent: React.FC = (props) => {
    return (
        <>
            <div className='container'>
                <LogoutComponent {...props}/>
                <InputTodo {...props}/>
                <TodoList {...props} />
            </div>
        </>
    )
}

export default HomeComponent;