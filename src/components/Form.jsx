import { useState } from "react";
import PizzaInfo from "./formComponents/PizzaInfo";
import SizeAndCrust from "./formComponents/SizeAndCrust";
import Submit from "./formComponents/Submit";
import Text from "./formComponents/Text";
import Toppings from "./formComponents/Toppings";

export default function Form(props) {
    const { pizza, setPizzaFinal, pizzaFinal } = props;

    const { id, name, price, rating, ratingCount, description } = pizza

    const [toppings, setToppings] = useState([]);
    const [count, setCount] = useState(1);



    return (
        <>
            <PizzaInfo name={name} price={price} rating={rating} ratingCount={ratingCount} description={description} />
            <SizeAndCrust />
            <Toppings toppings={toppings} setToppings={setToppings} />
            <Text pizzaFinal={pizzaFinal} setPizzaFinal={setPizzaFinal} />
            <Submit price={price} toppings={toppings} count={count} setCount={setCount} />
        </>
    )
}