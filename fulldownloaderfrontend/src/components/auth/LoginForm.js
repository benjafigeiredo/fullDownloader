import React, { useState } from "react";
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
            <label>
                Email: 
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
        </AuthForm>
    );
};

export default LoginForm;