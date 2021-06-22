import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ItemListContainer} from '../screens/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';

export const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <ItemListContainer />
            </Route>
            <Route path="/category/:id">
                <ItemListContainer />
            </Route>
            <Route path="/item/:id">
                <ItemDetailContainer />
            </Route>
        </Switch>
    </BrowserRouter>
}

