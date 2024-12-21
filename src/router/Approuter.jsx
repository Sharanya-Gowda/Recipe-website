import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
import Privaterouter from './Privaterouter';

const Approuter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Grouped Private Routes */}
                <Route element={<Privaterouter />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/detail" element={<Detail />} />
                </Route>

                {/* Fallback Route for 404 */}
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Approuter;
