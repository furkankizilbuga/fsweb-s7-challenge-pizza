import styled from "styled-components"

const Background = styled.main`
    background: #CE2829;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15rem;
`
const Title = styled.h1`
    color: white;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    margin-top: 2vw;
`
const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Success1 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;
    margin-bottom: -1.5rem;

    @media(max-width: 1000px) {
        font-size: 3rem;
    }
`
const Success2 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;

    @media(max-width: 1000px) {
        font-size: 3rem;
    }
`


export default function Success() {
    return(
        <Background>
            <Title>Teknolojik Yemekler</Title>
            <SuccessContainer>
                <Success1>TEBRİKLER!</Success1>
                <Success2>SİPARİŞİNİZ ALINDI!</Success2>
            </SuccessContainer>
        </Background>
        
    )
}