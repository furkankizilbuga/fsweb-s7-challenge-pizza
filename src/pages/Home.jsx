import styled from "styled-components"
import '@fontsource/barlow';
import '@fontsource-variable/roboto-condensed';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Hero from "../components/IT2/homeComponents/Hero";
import Choices from "../components/IT2/homeComponents/Choices";
import Thumbnails from "../components/IT2/homeComponents/Thumbnails";
import Recommended from "../components/IT2/homeComponents/Recommended";
import Footer from "../components/IT2/Footer";

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

    @media(max-width: 1500px) {
        margin-bottom: 20rem;
    }
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
        setFormData({...formData, "pizza": event.target.pizza})
    }

    const customCSS = "bg-ivory"

    return(
        <div>
            <Hero formData={formData} setFormData={setFormData} pizza={pizza} />
            <Choices customCSS={customCSS} />
            <Thumbnails clickHandler={clickHandler} pizza={pizza} />
            <Recommended />
            <Footer />
        </div>
    )
}