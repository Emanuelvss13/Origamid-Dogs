import React from 'react'
import { Container } from './Feed/styled'

import {H1} from './Login/styled'

export default function NotFound() {
    return (
        <Container>
            <H1>Erro: 404</H1>
            <p>Página não encontrada</p>
        </Container>
    )
}
