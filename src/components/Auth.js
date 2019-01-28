import React from 'react';

const Auth = ({submitHandler}) => (
    <div className="auth-form">
        <form onSubmit={submitHandler}>
            <input name="email" type="email"/>
            <input id="passwordField" name="password" type="password"/>
            <button type="submit">Войти</button>
        </form>
    </div>
);

export default Auth