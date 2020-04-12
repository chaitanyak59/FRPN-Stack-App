import React, { Suspense, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { reducer } from '../../store/reducer';
import { initialState, AuthContext } from '../../store/state';

import LoginComponent from '../login/login.component';
import PasswordComponent from '../login/password.component';
import HomeComponent from '../home/home.component';
import { NoMatch } from '../404/nomatch-component';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        console.log('State Updated @', new Date().getTime(), state);
    }, [state]);

    return (
        <Router>
            <>
                <Suspense fallback={<div>Loading Awesomeness...</div>}>
                    <AuthContext.Provider value={{ state, dispatch }}>
                        <Switch>
                            <Route exact path="/" component={HomeComponent} />
                            <Route exact path="/login" component={LoginComponent} />
                            <Route exact path="/authenticate" component={PasswordComponent} />
                            <Route component={NoMatch} />
                        </Switch>
                    </AuthContext.Provider>
                </Suspense>
            </>
        </Router>
    )
}

export default App;