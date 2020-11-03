import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../Pages';

const Routes = () => (
    <>
        <div className="container text-center">
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    </>
);
export { Routes };