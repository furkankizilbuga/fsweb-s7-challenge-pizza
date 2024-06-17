import { useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";

export default function Order(props) {

    const { pizza, pizzaFinal, setPizzaFinal } = props;

    const [errors, setErrors] = useState(
        {
            "name": false,
            "size": false,
            "crust": false,
            "toppings": false,
        }
    )

    return(
        <>
            <Header />
            <Form pizza={pizza} setPizzaFinal={setPizzaFinal} />
        </>
    )
}