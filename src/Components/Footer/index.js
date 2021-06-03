import React from 'react'
import { FooterContainer } from './styled'
import {ReactComponent as Dog} from '../../Assets/dogs-footer.svg'

export const Footer = () => {
    return (
        <FooterContainer>
            <Dog/>
            <p>Dogs. Alguns direitos reservados</p>
        </FooterContainer>
    )
}
