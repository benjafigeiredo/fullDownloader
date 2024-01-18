import React, { useState } from "react";
import loginImage from "../../../public/images/fd_1.avif";
import AuthForm from "./AuthForm";

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // add logic to handle login
        onLogin({ email, password });
    }

    return (
        <AuthForm onSubmit={handleSubmit}>
            <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-xl rounded-md w-96">
                <div className="mb-8 text-center">
                    <img
                        src={loginImage}
                        alt="Login"
                        className="mx-auto h-16 md:h-24 lg:h-32"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <div 
                    className="mb-4">
                        <label 
                        htmlFor="email" 
                        className="block text-gray-700 text-sm font-semibold mb-2">
                            Email
                        </label>
                        <input 
                        type="text" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div 
                    className="mb-4">
                        <label 
                        htmlFor="password" 
                        className="block text-gray-700 text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input 
                        type="text" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <button 
                    type="submit" 
                    className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-700">
                        Login
                    </button>

                </div>
            </div>
        </AuthForm>
    );
};

export default LoginForm;