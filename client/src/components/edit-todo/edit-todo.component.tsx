import React, { useState, useEffect, Fragment } from 'react';
import { updateTodoList } from '../../api/backend/todo-api';
import { TodoItem } from '../../types/todo.types';

declare var $: any;

interface Props extends TodoItem {
    isSave?: boolean;
}

const EditTodoComponent: React.FC<Props> = ({ ...args }) => {
    const initialiData = args;
    const [modalData, setModalData] = useState<Props>({ ...args, isSave: false });

    useEffect(() => {
        if (!modalData.isSave) return;
        updateTodoList(modalData)
            .then(res => {
                if (res.success) {
                    $(`#dismiss-${modalData.id}`).click();
                    //HackyWay to Load Data
                    setTimeout(() => window.location.href = "/", 0);
                }
            }).catch(e => console.error('Cannot Be saved'));

    }, [modalData]);


    function updateDetails(key: keyof Props, value: string) {
        setModalData(prevData => ({
            ...prevData,
            [key]: value
        }))
    }

    function updateChanges(isSave: boolean) {
        setModalData((prevState) => ({
            ...Object.assign({}, isSave ? prevState : initialiData),
            isSave,
        }))
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning btn-sm"
                data-toggle="modal"
                data-target={`#editModal-${modalData.id}`}
            >&#9998;
            </button>
            <div className="container">
                <div className="modal fade" tabIndex={-1} role="dialog" data-toggle="modal" id={`editModal-${modalData.id}`}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Todo Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={updateChanges.bind(null, false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="todoName">Name:</label>
                                        <input type="text"
                                            className="form-control"
                                            id="todoName"
                                            onChange={(e) => updateDetails('name', e.target.value)}
                                            value={modalData.name}
                                            placeholder="Enter Name of the User"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="todoDesc">Todo Description:</label>
                                        <textarea
                                            className="form-control"
                                            onChange={(e) => updateDetails('description', e.target.value)}
                                            id="todoDesc"
                                            placeholder="Enter Desciption"
                                            value={modalData.description}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" id={`dismiss-${modalData.id}`} onClick={updateChanges.bind(null, false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => updateChanges(true)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodoComponent;