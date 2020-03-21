import React, { useEffect, useState } from 'react';
import { getToDoList, deleteTodoList } from '../../api/backend/todo-api';
import { transformDate } from '../../helpers/date.helpers';
import EditTodoComponent from '../edit-todo/edit-todo.component';
import { TodoItem } from '../../types/todo.types';

interface StateProps {
    data: TodoItem[],
    loadData: boolean;
}

function renderEditComponent(props: TodoItem): JSX.Element {
    return (<EditTodoComponent {...props} />)
}

const TodoListComponent: React.FC = () => {
    const [todoList, setTodoList] = useState<StateProps>({ data: [], loadData: true });
    useEffect(() => {
        if (todoList.loadData) {
            getToDoList()
                .then((data) => {
                    reloadList(false, data.payload);
                }).catch(e => setTodoList(prevS => ({ ...prevS, loadData: false })))
        }
    }, [todoList]);

    async function deleteData(id: number): Promise<void> {
        try {
            const waitForDelete = await deleteTodoList(id)
            if (waitForDelete.success) {
                reloadList(true);
            }
        } catch (e) {
            console.error('Item Not Deleted!', e)
        }
    }

    function reloadList(shouldLoad: boolean, data = [] as TodoItem[]) {
        setTodoList((prevState) => ({
            data: shouldLoad ? prevState.data : data,
            loadData: shouldLoad,
        }))
    }

    return (
        <div className="container table-responsive">
            <h1 className="text-center mt-5">Todo List</h1>
            <table className="table table-hover mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created On</th>
                        <th>{/* Edit Todo Item */}</th>
                        <th>{/* Delete TodoITem */}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.data.map((value, index) => {
                            return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td>{transformDate(value.created_at)}</td>
                                <td>{renderEditComponent(value)} </td>
                                <td><button
                                    type="button"
                                    onClick={deleteData.bind(null, value.id)}
                                    className="btn btn-danger btn-sm">X
                                    </button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoListComponent;