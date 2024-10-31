import { useHistory } from "react-router-dom";
import Hero from "../components/IT2/homeComponents/Hero";
import Choices from "../components/IT2/homeComponents/Choices";
import Thumbnails from "../components/IT2/homeComponents/Thumbnails";
import Recommended from "../components/IT2/homeComponents/Recommended";
import { useRef } from "react";
import { useFormContext } from '../context/FormContext';

export default function Home() {

    const { setValue } = useFormContext();

    let history = useHistory();
    const choicesRef = useRef(null);

    const clickHandler = (event, pizza) => {
        setValue('pizza', pizza);
        
        history.push("/order");
        window.scrollTo(0, 0);
    }

    const smoothScroll = () => {
        choicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return(
        <div>
            <Hero smoothScroll={smoothScroll} />
            <div data-cy="choices-section" ref={choicesRef}>
                <Choices customCSS="bg-ivory" />
            </div>
            <Thumbnails clickHandler={clickHandler} />
            <Recommended />
        </div>
    )
}