import React from 'react';
import InputTodo from '../input-todo/input-todo.component';
import TodoList from '../todo-list/todo-list.component';

const App: React.FC = () => {
    return (
        <>
            <div className='container'>
                <InputTodo />
                <TodoList />
            </div>
        </>
    )
}

export default App;