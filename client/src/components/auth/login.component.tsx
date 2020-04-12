import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import { registerUser, checkUser } from '../../api/backend/auth-api';
import { isLoading } from '../../helpers/api.helpers';
import { useApiEffect } from '../hooks/api.hook';
import { AuthContext } from '../../store/state';

function validateEmail(email: string) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const LoginComponent: React.FC = (props: any) => {
    const [fetchApi, setFetchApi] = useApiEffect();
    const [email, setEmail] = useState<string>('');
    const [error, setMessage] = useState<string>('');
    const { state, dispatch } = useContext(AuthContext);

    useEffect(() => {
        if(isLoading(fetchApi.status)) return;
        if(fetchApi.error || !fetchApi.data.success) {
            const errorMssage = state.isNewUser ? 'User Already Registered' : 'User Not Found'; // NewUser check is for Registration Api
            setMessage(`Error / ${errorMssage}`);
            return;
        }
        const {payload} = fetchApi.data;
        dispatch({ type: 'AuthenticateUser', payload: {
            email: payload.email,
            id: payload.id
        }})
        props.history.push(state.isNewUser ? `/confirm-account/${payload.session}` : '/authenticate')
    }, [fetchApi, state.isNewUser, props.history, dispatch]);

    function handleFormSubmit(submission: 'Login' | 'Signup') {
        if (!email || !validateEmail(email)) {
            setMessage('Enter Valid Email ID');
            return;
        }
        const isNewUser = submission === 'Signup';
        const callback = isNewUser ? registerUser : checkUser;
        dispatch({ type: 'ValidateEmail', payload: { isNewUser, email }})
        setFetchApi(callback(email))
        setMessage('');
    }

    return (
        <div className="container formclass">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group col-md-6">
                    <h3>Hello !</h3>
                    <input type="email" required className="form-control input-sm" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">{error}</small>
                </div>
                <div style={{ paddingLeft: '20%' }}>
                    <button type="button" className="btn btn-success btn-sm" onClick={(e) => handleFormSubmit('Login')}>Proceed</button>
                    <span style={{
                        fontSize: '18px',
                        margin: '12px'
                    }}>|</span>
                    <button type="button" disabled={true} className="btn btn-info btn-sm" onClick={(e) => handleFormSubmit('Signup')}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent;
