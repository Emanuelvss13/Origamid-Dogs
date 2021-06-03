import styled, { keyframes } from 'styled-components'

export const ContainerImage = styled.div`
    display: grid;

    img{
        display: block;
        max-width: 100%;
        grid-area: 1/1;
        opacity: 0;
        transition: 0.2s;
    }
` 

const skeleton = keyframes`
    from{
        background-position: 0px;
    }
    to{
        background-position: -200%;
    }
`

export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${skeleton} 1s infinite;
`

export const ContainerLoading = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    z-index: 1000;
`

export const Background = styled.div`
    margin: auto;
    height: 80px;
    width: 80px;
    display: flex;
    padding-left: 5px;
    background-color: rgba(255,255,255,.5);
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`