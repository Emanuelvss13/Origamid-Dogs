import React from 'react'
import {Container, ContainerImg} from './styled'
import Input from '../Login/Components/Input'
import { Button, Error } from '../Login/styled';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router';
export default function UserPhotoPost() {
    
    const nome = useForm();
    const idade = useForm('number');
    const peso = useForm('number');
    const [img, setImg] = React.useState({});
    const {data, error, loading, request} = useFetch()

    const navigate = useNavigate();

    React.useEffect(() => {
        if(data) navigate('/conta');
    }, [data, navigate])
    
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem('token');

        const {url, options} = PHOTO_POST(formData, token)
        request(url, options)

    }

    function handleImgChange({target}){
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        });
    }
    
    return (


        <Container>
            <form onSubmit={handleSubmit} >
                <Input label="nome" type="text" name="nome" {...nome}/>
                <Input label="peso" type="text" name="peso" {...peso} />
                <Input label="idade" type="text" name="idade" {...idade} />
                <input type="file" name="img" onChange={handleImgChange} />
                {loading ? <Button disabled >Enviando...</Button> : <Button >Enviar</Button>}
                <Error error={error} />
            </form>
            {img.preview && <ContainerImg img={img.preview}/>}
        </Container>
    )
}
