import { useState } from "react";
import PizzaInfo from "./formComponents/PizzaInfo";
import SizeAndCrust from "./formComponents/SizeAndCrust";
import Submit from "./formComponents/Submit";
import Text from "./formComponents/Text";
import Toppings from "./formComponents/Toppings";

export default function Form(props) {
    const { pizzas } = props;

    const [toppings, setToppings] = useState([]);
    const [count, setCount] = useState(1);

    return (
        <>
            <PizzaInfo pizzas={pizzas} />
            <SizeAndCrust />
            <Toppings toppings={toppings} setToppings={setToppings} />
            <Text />
            <Submit price={pizzas.price} toppings={toppings} count={count} setCount={setCount} />
        </>
    )
}