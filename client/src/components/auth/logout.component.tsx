import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../store/state';
import './logout.css'
import { tokenStorage } from '../../helpers/token-storage/token-helpers';
const LogoutComponent: React.FC = (props: any) => {
    const [logout, setLogoutAction] = useState<boolean>(false)
    const { dispatch } = useContext(AuthContext)

    useEffect(() => {
        if (!logout) return;
        tokenStorage.clear()
        dispatch({ type: 'LogoutUser' })
        props.history.push('/login');
    }, [logout, dispatch, props.history])

    return (
        <>
            <button type="button"  id="logout" className="btn btn-danger btn-lg" onClick={(e) => setLogoutAction(true)}>Logout</button>
        </>
    )
}

export default LogoutComponent;
