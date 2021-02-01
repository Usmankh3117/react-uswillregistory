import React from 'react';
import { Wrapper } from '../Css/authStyle.jsx';

export const AuthWrapper = ({ children }) => (
    <Wrapper>
        <div className="authBlockHolder d-flex h-100">
            {children}
        </div>
        <div className="authLogoholder">
            <img className="img-fluid" src={require('../../../assets/images/logo.png')} alt="Logo" />
        </div>
    </Wrapper>
);