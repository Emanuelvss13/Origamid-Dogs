import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 0 2rem;

    form{
        padding: 1rem;
    }

    @media(max-width: 40rem){
        grid-template-columns: 1fr;
    }
`
export const ContainerImg = styled.div`
    background: url(${props => props.img}) center center;
    background-size: cover;
    background-color: blueviolet;

    &:after{
        border-radius: 1rem;
        height: 0px;
        padding-bottom: 100%;
        
    }
`