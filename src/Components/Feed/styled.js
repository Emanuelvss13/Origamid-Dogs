import styled, { keyframes } from 'styled-components'
import view from '../../Assets/visualizacao.svg'
import view_ from '../../Assets/visualizacao-black.svg'

const scaleUp = keyframes`
    to{
        transform: initial;
        opacity: initial;
    }
`

const latir = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const Container = styled.section`
    max-width: 60rem;
    margin: 0 auto;
`

export const ContainerUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-items: center;
    padding-bottom: 2%;

    @media(max-width: 40rem){
        grid-template-columns: repeat(2, 1fr); 
    }

    * > div{
        grid-area: 1/1;
    }
`

export const Acess = styled.span`
    grid-area: 1/1;
    background-color: rgba(0,0,0,0.3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    display: none;
    transition: 2s;

    &:before{
        content: '';
        width: 16px;
        height: 16px;
        display:inline-block;
        margin-right: 0.25rem;
        background: url(${view}) center center;
        background-repeat: no-repeat;
    }
`

export const ContainerLi = styled.li`

    display: grid;
    overflow: hidden;
    border-radius: 0.2rem;
    cursor: pointer;

    img{
        grid-area: 1/1;
    }

    &:nth-child(2){
        grid-column: 2 / 4;
        grid-row: span 2;
    }

    @media(max-width: 40rem){
        &:nth-child(2){
            grid-column: initial;
            grid-row: initial;
        }
    }

    &:hover ${Acess}{
        display: flex;
    }
`

export const ContainerModal = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;

    @media(max-width: 40rem){
        padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
`

export const ContainerPhoto = styled.div`
    margin: auto;
    height: ${props => props.single ? 'auto' : '36rem'};
    border-radius: 0.2rem;
    background: white;
    display: grid;
    grid-template-columns: ${props => props.single ? '1fr' : '36rem 20rem'};
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    transform: scale(0.8);
    opacity: 0;
    animation: ${scaleUp} forwards;
    animation-duration: 0.3s;

    @media(max-width: 64rem){
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;grid-template-columns: 36rem;
    }
`

export const ContainerDetails = styled.div`
    padding: ${props => props.single ? '0px' : '2rem 2rem 0 2rem'};
`

export const ContainerImg = styled.div`
    grid-row: ${props => props.single ? '1' : '1/4'};
    border-radius: ${props => props.single ? '.4rem' : '0'};
    overflow: hidden;
    
    img{
        width: 100%;
        height: 100%;
    }

    @media(max-width: 64rem){
        grid-row: 1;
    }
`

export const ContainerAuthor = styled.div`
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a:hover{
        text-decoration: underline;
    }

    span:before{
        content: '';
        display: inline-block;
        height: 10px;
        width: 16px;
        background: url(${view_}) center center no-repeat;
        margin-right: 0.2rem;
    }
`

export const Attributes = styled.ul`
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li{
        margin-right: 2rem;
    }

    li:before{
        content: '';
        display: inline-block;
        height: 20px;
        margin-right: 0.5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background-color: #333;
    }
`

export const UlContainer = styled.ul`
    overflow-y: auto;
    word-break: break-word;
    padding: 0 2rem;

    li{
        margin-bottom: 0.5rem;
        line-height: 1.2rem;
    }
`

export const ContainerFormComments = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;

    textarea{
        display: block;
        width: 100%;
        font-size: 1rem;
        resize: none;
        border: 1px solid #eee;
        border-radius: 0.2rem;
        padding: 0.5rem;
        background: #eee;
        transition: 0.2s;
    }

    textarea:focus,
    textarea:hover{
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    }

    button{
        border: none;
        cursor: pointer;
        color: #333;
        background: transparent;
        font-size: 1rem;
        padding: 0 1rem;
        overflow: hidden;
    }

    button:focus svg path,
    button:hover svg path{
        fill: #fea;
        stroke: #fb1;
    }

    button:focus svg g,
    button:hover svg g{
        animation: ${latir} 0.6s infinite;
    }
`

export const BtnDelete = styled.button`
    background-color: #ddd;
    padding: 0.3rem 0.6rem;
    line-height: 1rem;
    border: 1px solid transparent;
    font-size: 0.875rem;
    cursor: pointer;
    border-radius: 0.4rem;
    transition: 0.1s;
    color: #333;

    &:hover,
    &:focus{
        outline: none;
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
`