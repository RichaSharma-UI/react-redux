import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../Pages';

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </>
);
export { Routes };