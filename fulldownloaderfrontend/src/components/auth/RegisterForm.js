import React, { useState } from "react";
import AuthForm from "./AuthForm";

const RegisterForm = ({ onRegister }) => {
    const [username, setUsername] = useState(""); 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister({ username, firstName, lastName, email, password });
    }

    return (
        <AuthForm onSubmit={handleSubmit}>
            <label>
                Username: 
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                First Name: 
                <input type="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>
                Last Name: 
                <input type="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password: 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
        </AuthForm>
    );
};

export default RegisterForm;