import React, { useContext } from 'react'
import {Route, Routes, useNavigate } from 'react-router'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginChange from './LoginChange'
import LoginLost from './LoginLost'
import { UserContext } from '../../UserContext'
import { LoginContainer } from './styled'
import NotFound from '../NotFound'

export default function Login() {
    const {login} = useContext(UserContext);

    const navigate = useNavigate();

    if(login) navigate("/conta");

    return (
        <LoginContainer>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="lost" element={<LoginLost />} />
                <Route path="change" element={<LoginChange />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </LoginContainer>
    )
}
