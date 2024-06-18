import styled from "styled-components"
import '@fontsource/barlow';
import '@fontsource-variable/roboto-condensed';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Background = styled.main`
    background-image: url("../Assets/mile1-assets/home-banner.png");
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20vw;
    max-width: 600px;
`

const Title = styled.h1`
    color: white;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
`
const MottoContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Motto1 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;
    margin-bottom: -1.5rem;
`
const Motto2 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;
`

const Button = styled.button`
    background-color: #FDC913;
    font-weight: 490;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-size: 1rem;
    align-self: center;
    padding: .7em 3em;
    padding-bottom: .5em;
    border-radius: 30px;

    &:hover {
        background-color: #fdab13;
    }

`

export default function Home(props) {

    const { formData, setFormData, pizza } = props;

    let history = useHistory();

    const clickHandler = (event) => {
        history.push("/order")
        setFormData({...formData, "pizzaName": event.target.id})
    }

    return(
        <Background>
            <Container>
                <Title>Teknolojik Yemekler</Title>
                <MottoContainer>
                    <Motto1>KOD ACIKTIRIR</Motto1>
                    <Motto2>PİZZA DOYURUR</Motto2>
                </MottoContainer>
                <Button onClick={clickHandler} id={pizza.name} aria-label="order">ACIKTIM</Button>
            </Container>
        </Background>
    )
}