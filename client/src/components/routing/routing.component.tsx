import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { tokenStorage } from '../../helpers/token-storage/token-helpers';

interface RouteProps {
    [x: string]: any;
    component: React.FC<any>; //Any Type of Component Accepted
}

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
    const isAuthenticated = tokenStorage.get() !== '';
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    )
}

export default PrivateRoute;