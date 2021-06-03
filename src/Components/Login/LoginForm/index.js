import React from 'react'
import useForm from '../../../Hooks/useForm'
import { UserContext, } from '../../../UserContext';
import Button from '../Components/Button'
import Input from '../Components/Input'
import {Link} from 'react-router-dom'

import {Error, FormContainer, H1, LINKLOST, LINKCREATE, CadastroContainer, CadastroP, CadastroSubtitle} from '../styled';

import {SlideInLeft} from 'animate-css-styled-components'

export default function LoginForm(props) {

    const{ userLogin, error, loading } = React.useContext(UserContext);
    
    const username = useForm();
    const password = useForm();

    async function handleSubmit(e){
        e.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value)
        }
    }

    return (
        <div>
            <H1>Login</H1>
            <SlideInLeft duration="0.5s">
                <FormContainer onSubmit={handleSubmit} >
                    <Input name={"usuario"} label={"Usuário"} type={"text"}  {...username} />                
                    <Input name={"senha"} label={"Senha"} type={"password"}  {...password} />
                    {loading ? <Button disabled >Carregando...</Button> : <Button>Entrar</Button>}
                    {error && <Error>Dados incorretos</Error>}          
                </FormContainer>
            </SlideInLeft>
            <LINKLOST to={{ pathname: props.link}}>
                <Link to="/login/lost">Perdeu a senha?</Link>
            </LINKLOST>
            <CadastroContainer>
                <CadastroSubtitle>Cadastre-se</CadastroSubtitle>
                <CadastroP>Ainda não possui conta? cadastre-se no site</CadastroP>
                <LINKCREATE to={{ pathname: props.link}}>
                    <Link to="/login/create/" >Cadastro</Link>
                </LINKCREATE>
            </CadastroContainer>     
        </div>
    )
}
