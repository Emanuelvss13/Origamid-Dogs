import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-bottom: 2rem;
    max-width: 60rem;
    margin: 0 auto;
`

export const ContainerNav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    position: relative;
    
`

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: #eee;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    transition: 0.1s;

    &:hover, &:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }

    &.active{
        background-color: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
        svg > *{
            fill: #fb1;
        }
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: #eee;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover, &:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
`

export const MobileButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: #eee;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    transition: 0.1s;
    position: relative;

    &:hover, &:focus{
        background-color: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
        color: #fb1;
    }

    &:after{
        content: '';
        background-color: currentColor;
        width: ${props => props.active ? "4px" : "1.2rem"};
        height: ${props => props.active ? "4px" : "2px"};
        border-radius: 2px;
        transform: rotate(${props => props.active ? "-90deg" : "0deg"});
        box-shadow: 0 6px currentColor, 0 -6px currentColor;
        transition: 0.2s;
    }
`

export const ContainerNavMobile = styled.nav`
    position: absolute;
    top: 140px;
    right: 0px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: auto;
    height: auto;
    background: white;
    box-shadow: 0 0 0 1px #f4f4f4;
`

export const DivMenuMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10rem;
    border-bottom: 0.5px solid #f4f4f4;
`

export const LinkMobile = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 40px;
    width: 100%;
    background: white;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    transition: 0.1s;

    &.active{
        svg > * {
            fill: #fb1;
        }
    }
`

export const ButtonMobile = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 40px;
    width: 100%;
    background: white;
    border-radius: 0.2rem;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 16px;

    &:hover, &:focus{
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
`