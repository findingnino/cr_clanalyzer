import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClanPicker from './ClanPicker.js';
import App from './App.js';
import NotFound from "./NotFound.js";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ClanPicker}/>
            <Route path="/clan/:clanTag" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;