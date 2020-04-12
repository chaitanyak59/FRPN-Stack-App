import React, { Suspense, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { reducer } from '../../store/reducer';
import { initialState, AuthContext } from '../../store/state';

import LoginComponent from '../auth/login.component';
import PasswordComponent from '../auth/password.component';
import HomeComponent from '../home/home.component';
import { NoMatch } from '../404/nomatch-component';
import PrivateRoute from '../routing/routing.component';
import { unloadState, loadState } from '../../store/cache.service';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState, loadState);

    useEffect(() => {
        const callback = unloadState.bind(null, state)
        window.addEventListener('unload', callback);
        return () => window.removeEventListener('unload', callback);
    }, [state]);

    return (
        <>
            <Router>
                <Suspense fallback={<div>Loading Awesomeness...</div>}>
                    <AuthContext.Provider value={{ state, dispatch }}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomeComponent} />
                            <Route exact path="/login" component={LoginComponent} />
                            <Route exact path="/authenticate" component={PasswordComponent} />
                            {/* <Route exact path="/confirm-account/:sessionID" component={ConfirmAccount} /> */}
                            <Route component={NoMatch} />
                        </Switch>
                    </AuthContext.Provider>
                </Suspense>
            </Router>
        </>
    )
}

export default App;