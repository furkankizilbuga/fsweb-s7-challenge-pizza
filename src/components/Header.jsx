import { Link } from "react-router-dom";
import styled from "styled-components"

const Top = styled.header`
    background: #CE2829;
    padding-top: 2rem;
    padding-bottom: 1.5rem;

    @media(max-width: 1500px) {
        white-space: nowrap;
    }

`
const Title = styled.h1`
    color: white;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    text-align: center;
    margin: 0 35vw;
    @media(max-width: 1500px) {
        margin: 0 30vw;
    }
`
const NavLink1 = styled(Link)`
    color: white;
    position: absolute;
    &:hover {
        font-weight: 600;
    }
`
const NavLink2 = styled(Link)`
    color: white;
    font-weight: bold;
    white-space: nowrap;
`

const Nav = styled.nav`
    margin: 0 35vw;
    padding-top: 2rem;
    position:relative;
    display: flex;
    gap: 70px;

    @media(max-width: 1500px) {
        align-items: center;
        margin: 0 30vw;
    }
`
const Dash = styled.span`
    color: white;
    cursor: default;
`

export default function Header() {
    return(
        <Top>
            <Title>Teknolojik Yemekler</Title>
            <Nav>
                <NavLink1 
                    aria-label="Ana Sayfa" 
                    to="/">Anasayfa</NavLink1>
                <Dash> - </Dash>
                <NavLink2 
                    aria-label="Sipariş Oluştur" 
                    to="/order">Sipariş Oluştur</NavLink2>
            </Nav>
        </Top>
    )
}