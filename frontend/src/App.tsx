import React from 'react';
import { HomePage } from "./components/home/home";
import { UserPage } from "./components/users/users";
import { Navbar } from "./components/navbar/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
    return (
        <BrowserRouter className='main-container'>
            <Navbar />
            <Switch style={{width: '100%', height: 'calc(100% - 100px)'}}>
                <Route path="/" exact component={HomePage} />
                <Route path="/users" exact component={UserPage} />
            </Switch>

        </BrowserRouter>
    );
}

export default App;
