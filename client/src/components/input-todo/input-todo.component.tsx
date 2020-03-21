import React, { FormEvent, useState, useEffect } from 'react';
import { createTodoItem } from '../../api/backend/todo-api';

const InputTodo: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', description: '' });

    useEffect(() => {
        if (!formData.name || !formData.description) return;
        createTodoItem(formData)
         .then(resp => {
            //HackyWay to Load Data
            if(resp.success) {
                setTimeout(() => window.location.href = "/", 0);
            }
         }).catch(e => {
             console.warn(e)
             alert('Failed to Create')
         });
    }, [formData])

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Disabling Default Form Behaviour
        const formData = e.target as HTMLFormElement;
        const name = formData["todoName"].value
        const description = formData["todoDesc"].value
        setFormData({ name, description })
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5">Create Todo Task ...</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="todoName">Name:</label>
                    <input type="text" className="form-control" id="todoName" placeholder="Enter Name of the User" />
                </div>
                <div className="form-group">
                    <label htmlFor="todoDesc">Todo Description:</label>
                    <textarea className="form-control" id="todoDesc" placeholder="Enter Desciption" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default InputTodo;