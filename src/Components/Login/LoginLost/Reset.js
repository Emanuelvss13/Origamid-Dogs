import React from 'react'
import { useNavigate } from 'react-router'
import { PASSWORD_RESET } from '../../../api'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import Input from '../Components/Input'
import { Button, Error, H1 } from '../styled'

export default function Reset() {
    const password = useForm()
    const {loading, error, request} = useFetch()

    const navigate = useNavigate()

    const [login, setLogin] = React.useState()
    const [key, setKey] = React.useState()

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const key = params.get('key')
        const login = params.get('login')
        if(key) setKey(key)
        if(login) setLogin(login)
    }, [])

    async function handleSubmit(e){
        e.preventDefault()
        if(password.validate()){
            const {url, options} = PASSWORD_RESET({key, login, password: password.value})
    
            const {response} = await request(url, options)
            if(response.ok) navigate('/login')
        }
    }

    return (
        <div>
            <H1>Resete a senha</H1>
            <form onSubmit={handleSubmit}>
                <Input label="Digite a nova senha:" {...password} />
                {loading ? <Button disabled >Resetar</Button> : <Button>Resetar</Button>}
                <Error>{error}</Error>
            </form>
        </div>
    )
}
