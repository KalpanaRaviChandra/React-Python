import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/UserProfile" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;
