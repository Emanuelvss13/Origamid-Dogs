import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    &:before{
        background: url('https://www.chefbob.com.br/wp-content/uploads/2020/01/2020-01-22-racas-de-caes-1280x720.jpg') no-repeat center right;
        background-size: cover;
        display: block;
        content: '';
    }

    @media(max-width: 40rem){
        grid-template-columns: 1fr;
        &:before{
            display: none;
        } 
    }
`

export const ContainerInput = styled.section`
    margin-bottom: 1rem;
`

export const Button = styled.button`
    margin: 1rem 0;
    border: 0;
    background-color: #fb1;
    color: #764701;
    padding: 0.8rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.1s;
    min-width: 8rem;

    &:hover,  &:focus{
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    &:disabled{
        opacity: 0.5;
        cursor: wait;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    border: 1px solid #eee;
    background-color: #eee;
    transition: 0.2s;

    &:hover, &:focus{
        outline: none;
        background-color: white;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }
`

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    padding-bottom: 0.5rem;
`

export const Error =styled.p`
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
`

export const H1 = styled.h1`
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
    font-family: 'Merriweather', serif;

    &:after{
        content: "";
        display: block;
        height: 1.5rem;
        width: 1.5rem;
        background-color: #fb1;
        position: absolute;
        z-index: -1;
        bottom: 5px;
        left: -5px;
        border-radius: 0.2rem;
    }
`

export const LINKLOST = styled(Link)`
    a{
        display: inline-block;
        color: #666;
        padding: 0.5rem 0;
        line-height: 1;
        border-bottom: 2px solid #666;
    }

    
`
export const LINKCREATE = styled(Link)`
    border: 0;
    background-color: #fb1;
    color: #764701;
    padding: 0.8rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.1s;
    min-width: 8rem;

    &:hover,  &:focus{
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    &:disabled{
        opacity: 0.5;
        cursor: wait;
    }
`
export const FormContainer = styled.form`
    max-width: 30rem;
    padding: 1rem;
    margin-bottom: 2rem;

    @media(max-width: 40rem){
        max-width: 100%;
    }
`

export const CadastroContainer = styled.div`
    margin-top: 4rem;
`

export const CadastroP = styled.p`
    margin: 2rem 0;
`

export const CadastroSubtitle = styled.h2`
    line-height: 1;
    font-size: 2rem;
    font-family: 'Merriweather', serif;

    &:after{
        content:"";
        display: block;
        background-color:#ddd;
        height: 0.5rem;
        width: 3rem;
        border-radius: 0.2rem;
    }
`

