import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import { isLoading } from '../../helpers/api.helpers';
import { useApiEffect } from '../hooks/api.hook';
import { authenticateUser } from '../../api/backend/auth-api';
import { AuthContext } from '../../store/state';
import { tokenStorage } from '../../helpers/token-storage/token-helpers';
import { Redirect } from 'react-router-dom';

function validatePassword(password: string) {
    return password.length >=6;
}

const PasswordComponent: React.FC = (props: any) => {
    const [fetchApi, setFetchApi] = useApiEffect();
    const {state, dispatch} = useContext(AuthContext)
    const [error, setMessage] = useState<string>('');

    useEffect(() => {
        if(isLoading(fetchApi.status)) return;
        if(fetchApi.error || !fetchApi.data.success) {
            const errorMssage = 'Error / Invalid password';
            setMessage(errorMssage);
            return;
        }
        const {payload} = fetchApi.data
        tokenStorage.set(payload.token);
        dispatch({
            type: 'LoginSuccess', 
            payload: {
                isAuthenticated: true
            }
        })
        props.history.push('/');
    }, [fetchApi, dispatch,props.history]);

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Disabling Default Form Behaviour
        const formData = e.target as HTMLFormElement;
        const pass: string = formData["password"].value;
        if(!pass || !validatePassword(pass)) {
            setMessage('Error: Enter Password')
        }
        setMessage('')
        setFetchApi(authenticateUser({
            id: state.id,
            email: state.email,
            password: pass
        }));
    }

    if (!state.email) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="container formclass">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group col-md-6">
                    <h5>Welcome {state.email}</h5>
                    <input type="password" required className="form-control input-sm" name="password" id="password" placeholder="Enter Password"/>
                    <small id="emailHelp" className="form-text text-muted">{error}</small>
                </div>
                <div style={{ paddingLeft: '20%' }}>
                    <button type="submit" className="btn btn-success btn-lg">Login</button>
                </div>
            </form>
        </div>
    )
}

export default PasswordComponent;
