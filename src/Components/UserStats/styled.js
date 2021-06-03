import styled from 'styled-components'



export const GraphItem = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
`

export const GraphItemTotal = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;

    @media(max-width: 40rem){
        grid-column: 1;
    }
`

export const GraphContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media(max-width: 40rem){
        grid-template-columns: 1fr;
        margin-bottom: 2rem;
    }
`