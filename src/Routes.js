import React from 'react'
import { Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import LoginScreen from './LoginScreen';
import NodeDetails from './NodeDetails';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <LoginScreen/>} />
                <Route exact path='/nodedetails' render={() => <NodeDetails />} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}
