import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import { useApiEffect } from '../hooks/api.hook';
import { authenticateUser } from '../../api/backend/auth-api';
import { AuthContext } from '../../store/state';
import { Redirect, useParams } from 'react-router-dom';

const ConfirmAccount: React.FC = (props: any) => {
    const [fetchApi, setFetchApi] = useApiEffect();
    const params = useParams();
    const {state, dispatch} = useContext(AuthContext)
    const [error, setMessage] = useState<string>('');

    useEffect(() => {
        // Verify Reset Link
    }, [params]);

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Disabling Default Form Behaviour
        const formData = e.target as HTMLFormElement;
        console.log('Acc', formData["password"].value, formData["cpassword"].value)
    }

    if (!state.email) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className="container formclass">
            <form onSubmit={handleFormSubmit}>
                <div className="form-group col-md-6">
                    <h5>Confirm Account/Password</h5>
                    <input type="password" required className="form-control input-sm" name="password" id="password" placeholder="Password"/>
                    <input type="password" required className="form-control input-sm" name="cpassword" id="cpassword" placeholder="Conform Password"/>
                    <small id="emailHelp" className="form-text text-muted">{error}</small>
                </div>
                <div style={{ paddingLeft: '20%' }}>
                    <button type="submit" className="btn btn-success btn-lg">Create</button>
                </div>
            </form>
        </div>
    )
}

export default ConfirmAccount;
