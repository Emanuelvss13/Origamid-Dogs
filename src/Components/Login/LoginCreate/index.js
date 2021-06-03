import React from 'react'

import {FadeInLeft} from 'animate-css-styled-components'
import { Button, Error, FormContainer, H1} from '../styled'
import useForm from '../../../Hooks/useForm'
import Input from '../Components/Input';
import { USER_POST } from '../../../api';
import {UserContext} from '../../../UserContext'
import useFetch from '../../../Hooks/useFetch';

export default function LoginCreate() {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const {userLogin} = React.useContext(UserContext)
    const {request, loading, error} = useFetch();

    async function handleSubmit(e){
        e.preventDefault();
        const {url, options} = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });

        const {response} = await request(url, options);
        if(response.ok) userLogin(username.value, password.value);
        console.log(response);
    }
    return (
        <div>
            <FadeInLeft>
                <H1>Cadastre-se</H1>
                <FormContainer onSubmit={handleSubmit}>
                    <Input label="Usuário" name="username" type="text" {...username} />
                    <Input label="Email" name="email" type="email" {...email} />
                    <Input label="Senha" name="password" type="password" {...password} />
                    {error && <Error>{error}</Error>}
                    {loading ? <Button disabled >Cadastrando...</Button> : <Button>Cadastrar</Button>}
                </FormContainer> 
            </FadeInLeft>
        </div>
    )
}
