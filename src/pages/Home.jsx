import styled from "styled-components"
import '@fontsource/barlow';
import '@fontsource-variable/roboto-condensed';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Hero from "../components/IT2/homeComponents/Hero";
import Choices from "../components/IT2/homeComponents/Choices";
import Thumbnails from "../components/IT2/homeComponents/Thumbnails";
import Recommended from "../components/IT2/homeComponents/Recommended";
import Footer from "../components/IT2/Footer";
import { useRef } from "react";

export default function Home(props) {

    const { formData, setFormData, pizza } = props;

    let history = useHistory();
    const choicesRef = useRef(null);

    const clickHandler = (event) => {
        history.push("/order")
        window.scrollTo(0, 0);
        setFormData({...formData, "pizza": event.target.pizza})
    }

    const smoothScroll = () => {
        choicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return(
        <div>
            <Hero formData={formData} setFormData={setFormData} pizza={pizza} smoothScroll={smoothScroll} />
            <div ref={choicesRef}>
                <Choices customCSS="bg-ivory" />
            </div>
            <Thumbnails clickHandler={clickHandler} pizza={pizza} />
            <Recommended />
            <Footer />
        </div>
    )
}