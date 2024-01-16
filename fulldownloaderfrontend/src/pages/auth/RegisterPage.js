import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import authService from "../../services/AuthService";

const RegisterPage = () => {
    const handleRegister = (newCredentials) => {
        authService.register(newCredentials).then(data => {
            console.log(data);
        });
        console.log("register with: ", newCredentials);
    }

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm onRegister={handleRegister} />
        </div>
    )
};

export default RegisterPage;