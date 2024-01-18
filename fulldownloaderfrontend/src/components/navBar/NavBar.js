import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <header className="bg-indigo-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Your logo</div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                        <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;