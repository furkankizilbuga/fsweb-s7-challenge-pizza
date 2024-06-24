import { Link } from "react-router-dom";
import styled from "styled-components"

const Top = styled.header`
    background: #CE2829;
    padding-top: 1.5rem;
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


export default function Header() {
    return(
        <Top>
            <Title>Teknolojik Yemekler</Title>
        </Top>
    )
}