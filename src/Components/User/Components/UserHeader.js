import React from 'react'
import { Container } from './styled'
import {H1} from '../../Login/styled'
import UserHeaderNav from './UserHeaderNav'
import { useLocation } from 'react-router';

export default function UserHeader() {

    const [title, setTitle] = React.useState('');

    const {pathname} = useLocation();

    React.useEffect(() => {
        switch(pathname){
            case '/conta/estatisticas' :
                setTitle('Estatisticas');
                break;
            case '/conta/posts' :
                setTitle('Poste Fotos');
                break;
            default:
                setTitle('Minha Conta');
        }
    }, [pathname])

    return (
        <Container>
            <H1>{title}</H1>
            <UserHeaderNav/>
        </Container>
    )
}
