import { Link } from "react-router-dom";
import styled from "styled-components"

const Top = styled.header`
    background: #CE2829;
    padding-top: 2rem;
    padding-bottom: 1.5rem;

`
const Title = styled.h1`
    color: white;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    text-align: center;
`
const NavLink = styled(Link)`
    color: white;
`
const Nav = styled.nav`
    margin: 0 45rem;
    padding-top: 2rem;
`

export default function Header() {
    return(
        <Top>
            <Title>Teknolojik Yemekler</Title>
            <Nav>
                <NavLink to="/">Anasayfa</NavLink>
                <span> - </span>
                <NavLink to="/order">Sipariş Oluştur</NavLink>
            </Nav>
        </Top>
    )
}