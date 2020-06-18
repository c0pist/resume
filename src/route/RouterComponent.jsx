import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
import App from '../shared/App';

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <switch>
                        <Route exact path="/users" component={UserListComponent} />

                    </switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;