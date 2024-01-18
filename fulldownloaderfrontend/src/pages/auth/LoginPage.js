import React from "react";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
    const handleLogin = (credentials) => {
        // add api call
        console.log("login with: ", credentials);
    };

    return (
        <div>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;