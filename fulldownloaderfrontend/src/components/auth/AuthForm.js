import React from "react";

const AuthForm = ({ children, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            { children }
            <button type="submit">Submit</button>
        </form>
    );
};

export default AuthForm;