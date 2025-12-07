import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import App from '../App';

const Main = () => {
    return (
        <div>
            <App></App>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;