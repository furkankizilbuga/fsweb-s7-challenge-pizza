import { useState } from "react";

export default function Submit(props) {

    const { toppings, price } = props;

    const [count, setCount] = useState(1);

    let total = price * count + toppings.length * 5 * count;

    const countHandler = (event) => {

        event.preventDefault();

        if(event.target.id === "increase") {
            setCount(count + 1)
            setPizzaFinal({...pizzaFinal, "count": count})
            setPizzaFinal({...pizzaFinal, "total": total})
        } else {
            if(count > 1) {
                setCount(count - 1)
                setPizzaFinal({...pizzaFinal, "count": count})
                setPizzaFinal({...pizzaFinal, "total": total})
            }     
        }
    }


    return(
        <div>
            <div>
                <button id="decrease" onClick={countHandler} >-</button>
                <span>{count}</span>
                <button id="increase" onClick={countHandler} >+</button>
            </div>
            <div>
                <div>
                    <h3>Sipariş Toplamı</h3>
                    <div>
                        <div>
                            <span>Seçimler</span>
                            <span>{toppings.length * 5 * count}₺</span>
                        </div>
                        <div>
                            <span>Toplam</span>
                            <span>{total}</span>
                        </div>
                    </div>
                </div>
                <button type="submit">SİPARİŞ VER</button>
            </div>
        </div>
    )
}