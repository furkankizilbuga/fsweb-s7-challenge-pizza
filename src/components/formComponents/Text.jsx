import { useState } from "react";

export default function Text(props) {

    const { setPizzaFinal, pizzaFinal, setErrors, errors } = props;

    const textInputHandler = (event) => {
        if(event.target.name === "name"){
            setPizzaFinal({...pizzaFinal, [event.target.name]: event.target.value})
            if(event.target.value === "") {
                setErrors({...errors, [event.target.name]: true})
            } else {

            }
        } else {
            setPizzaFinal({...pizzaFinal, [event.target.name]: event.target.value})
        }
    }


    return(
        <>
            <div>
                <label>İsim</label>
                <input id="name" name="name" placeholder="Lütfen isminizi giriniz." type="text" value={pizzaFinal.name} onChange={textInputHandler} />
            </div>
            <div>
                <label>Sipariş Notu</label>
                <input id="note" name="note" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" value={pizzaFinal.note} onChange={textInputHandler} />
            </div>
        </>
    )
}