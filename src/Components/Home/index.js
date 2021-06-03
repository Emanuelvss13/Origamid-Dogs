import React from 'react'
import { Container } from './styled'
import Feed from '../Feed'
import Loading from '../../Helper/Loading'
import Head from '../../Helper/Head'

export default function Home() {
    return (
        <Container>
            <Head title='Fotos' description="Home do site dogs" />
            <Feed/>
        </Container>
    )
}
