import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        padding-top: 1.5rem;
    }

    a{
        color: #333;
        text-decoration: none;
    }

    input{
        display: block;
    }

    li{
        list-style-type: none;
    }
`

export const Container = styled.div`
    padding-top: 3rem;
    flex: 1
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
`

export default GlobalStyle;