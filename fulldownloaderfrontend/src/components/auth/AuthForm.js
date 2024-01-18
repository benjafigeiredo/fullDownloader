import React from "react";

const AuthForm = ({ children, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            { children }
        </form>
    );
};

export default AuthForm;