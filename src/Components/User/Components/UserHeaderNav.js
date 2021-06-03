import React from 'react'
import {UserContext} from '../../../UserContext';
import { ContainerNav, DivMenuMobile, Link } from './styled';
import {ReactComponent as MinhaFotos} from '../../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../../Assets/estatisticas.svg'
import {ReactComponent as Adicionar} from '../../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../../Assets/sair.svg'
import { Button, MobileButton, ContainerNavMobile, LinkMobile, ButtonMobile } from './styled';
import useMedia from '../../../Hooks/useMedia';
import { useLocation } from 'react-router';

export default function UserHeaderNav() {

    const {userLogout} = React.useContext(UserContext);

    const [mobilemenu, setMobileMenu] = React.useState(false);
    const mobile = useMedia('(max-width: 40rem)');
    console.log(mobilemenu)

    const {pathname} = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
        if(!mobile){
            setMobileMenu(false);
        }
    }, [pathname, mobile]);

    return (
        <>
            {mobile && 
            <MobileButton active={mobilemenu} onClick={() => setMobileMenu(!mobilemenu)} aria-label="Menu" ></MobileButton>
            }
            
            { !mobile && <ContainerNav>
                
                <Link to="/conta" end>
                    <MinhaFotos/>
                    {mobile && "Minhas Fotos"}
                </Link>
                <Link to="/conta/estatisticas" >
                    <Estatisticas/>
                    {mobile && "Estatisticas"}
                </Link>
                <Link to="/conta/posts" >
                    <Adicionar/>
                    {mobile && "Adicionar Fotos"}
                </Link>
                <Button onClick={userLogout} >
                    <Sair/>
                    {mobile && " Sair"}
                </Button>
            </ContainerNav>}
            
            { mobilemenu && <ContainerNavMobile>
                <DivMenuMobile>
                    <LinkMobile to="/conta" end>
                        <MinhaFotos/>
                        <p>Conta</p>
                    </LinkMobile>
                    
                </DivMenuMobile>

                <DivMenuMobile>
                    <LinkMobile to="/conta/estatisticas" >
                        <Estatisticas/>
                        <p>Estatisticas</p>
                    </LinkMobile>
                </DivMenuMobile>

                <DivMenuMobile> 
                    <LinkMobile to="/conta/posts" >
                        <Adicionar/>
                        <p>Adicionar</p>
                    </LinkMobile>
                </DivMenuMobile>

                <DivMenuMobile> 
                    <ButtonMobile onClick={userLogout} >
                        <Sair/>
                        <p>Sair</p>
                    </ButtonMobile>
                </DivMenuMobile>

            </ContainerNavMobile>}
            
        </>
    )
}
