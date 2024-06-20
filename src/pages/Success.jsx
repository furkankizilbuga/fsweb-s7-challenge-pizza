import styled from "styled-components"

const Background = styled.main`
    background: #CE2829;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Title = styled.h1`
    color: white;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    margin-bottom: 60rem;
`
const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
`
const Success1 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;
    margin-bottom: -1.5rem;
`
const Success2 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;
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