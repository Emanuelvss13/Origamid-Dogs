import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled'
import {ReactComponent as Dogs} from '../../Assets/dogs.svg'
import { UserContext } from '../../UserContext';

export default function Header(){
    const {data, userLogout} = React.useContext(UserContext);
    
    return(
        <>
            <S.Header>
                <S.Container>
                    <Link to='/' aria-label='Home' title='Home'>
                        <Dogs/>
                    </Link>
                    {data ? <Link to='/conta' >{data.nome}</Link> : <Link to='/login' >Login / Criar</Link>}
                </S.Container>
            </S.Header>
        </>
    )
}