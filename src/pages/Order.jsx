import { useEffect, useState } from "react";
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

    useEffect(() => {

    }, [pizzaFinal])

    return(
        <>
            <Header />
            <Form errors={errors} setErrors={setErrors} pizzaFinal={pizzaFinal} pizza={pizza} setPizzaFinal={setPizzaFinal} />
        </>
    )
}