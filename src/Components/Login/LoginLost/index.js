import React from 'react'
import { PASSWORD_LOST } from '../../../api'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import Input from '../Components/Input'
import { Button, Error, H1 } from '../styled'

export default function LoginLost() {

    const login = useForm()

    const {data, loading, error, request} = useFetch()

    async function handleSubmit(e){
        e.preventDefault()

        if(login.validate()){
            const { url, options } = PASSWORD_LOST({login: login.value, url: window.location.href.replace('lost', 'resetar')})
        
            const {json} = await request(url, options)
            console.log(json)
        }

    }

    return (
        <section>
           <H1>Perdeu a senha?</H1>
           {data ? <p>{data}</p> : <form onSubmit={handleSubmit}>
               <Input label="Email / usuário" name="login" {...login} />
               
               {loading ? <Button disabled >Enviar e-mail</Button>
               : <Button>Enviar e-mail</Button>}
           </form>}
           <Error>{error}</Error>
        </section>
    )
}
