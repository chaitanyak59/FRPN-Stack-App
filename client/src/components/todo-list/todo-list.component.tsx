import React, { useEffect, useState, lazy, Suspense } from 'react';
import { getToDoListRequest, deleteTodoItemRequest } from '../../api/backend/todo-api';
import { transformDate } from '../../helpers/date.helpers';
import { TodoItem } from '../../types/todo.types';
import { useApiEffect } from '../hooks/api.hook';
import { isLoading } from '../../helpers/api.helpers';

const EditTodoComponent = lazy(() => import('../edit-todo/edit-todo.component'));

interface StateProps {
    data: TodoItem[],
    loadData: boolean,
    deleteID?: number | undefined,
}

function renderEditComponent(props: TodoItem): JSX.Element {
    return (<EditTodoComponent {...props} />)
}

const TodoListComponent: React.FC = () => {
    const [todoList, setTodoList] = useState<StateProps>({ data: [], loadData: true, deleteID: undefined });
    const [fetchApi, setApiDetails] = useApiEffect();

    /**Side Actions */
    useEffect(() => {
        if (todoList.loadData) {
            setApiDetails(getToDoListRequest());
        } else if (todoList.deleteID) {
            setApiDetails(deleteTodoItemRequest(todoList.deleteID));
        }
    }, [setApiDetails, todoList.loadData, todoList.deleteID]);

    /**ResponseListener */
    useEffect(() => {
        if (isLoading(fetchApi.status)) {
            return;
        };
        const { data, error } = fetchApi;
        if (data && data.success) {
            const isDeleteRequest = fetchApi.requestConfig.method === 'DELETE';
            const payload = isDeleteRequest ? [] : data.payload;
            reloadList(!!isDeleteRequest, payload);
        } else if (error) {
            console.log('TodoList Error', error)
        }
    }, [fetchApi])


    function reloadList(shouldLoad: boolean, data: TodoItem[]) {
        setTodoList((prevState) => ({
            data: shouldLoad ? prevState.data : data, // Keeping Old data, until new call is made
            loadData: shouldLoad,
            deleteID: undefined,
        }))
    }

    return (
        <>
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
                                    <Suspense fallback={<td>&#8987;</td>}>
                                        <td>{renderEditComponent(value)} </td>
                                    </Suspense>
                                    <td><button
                                        type="button"
                                        onClick={() => setTodoList((prevSt) => ({
                                            ...prevSt,
                                            deleteID: value.id
                                        }))}
                                        className="btn btn-danger btn-sm">X
                                    </button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoListComponent;