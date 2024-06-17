import { useState } from "react";
import PizzaInfo from "./formComponents/PizzaInfo";
import SizeAndCrust from "./formComponents/SizeAndCrust";
import Submit from "./formComponents/Submit";
import Text from "./formComponents/Text";
import Toppings from "./formComponents/Toppings";

const errorMessages = {
    "size": "Lütfen boyut seçiniz.",
    "crust": "Lütfen hamur seçiniz.",
    "toppings": "Lütfen belirtilen miktarda seçiniz.",
    "name": "Lütfen uygun bir isim seçiniz.",
}

export default function Form(props) {

    const { pizza, setPizzaFinal, pizzaFinal, setErrors, errors } = props;
    const { price } = pizza

    const [toppings, setToppings] = useState([]);
    //count state'i burdaydı.



    return (
        <>
            <PizzaInfo pizza={pizza} />
            <SizeAndCrust setPizzaFinal={setPizzaFinal} pizzaFinal={pizzaFinal} />
            <Toppings pizzaFinal={pizzaFinal} setPizzaFinal={setPizzaFinal} toppings={toppings} setToppings={setToppings} />
            <Text errors={errors} setErrors={setErrors} pizzaFinal={pizzaFinal} setPizzaFinal={setPizzaFinal} />
            <Submit price={price} toppings={toppings} />
        </>
    )
}