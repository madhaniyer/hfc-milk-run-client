import React from 'react'
import { Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import Login from './Login';
import NodeDet from './NodeDet';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Login />} />
                <Route exact path='/nodedetails' render={() => <NodeDet />} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
