import { useState } from "react";
import { Link } from "react-router-dom"
import Header from "../components/Header";

export default function Order(props) {

    const { pizzas, pizzaFinal, setPizzaFinal } = props;

    const { id, name, price, rating, ratingCount, description } = pizzas[0]

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ]

    const [count, setCount] = useState(1);
    const [toppings, setToppings] = useState([]);
    const [errors, setErrors] = useState(
        {
            "name": false,
            "size": false,
            "crust": false,
            "toppings": false,
        }
    )

    const countHandler = (event) => {

        event.preventDefault();

        if(event.target.id === "increase") {
            setCount(count + 1)
        } else {
            if(count > 1) {
                setCount(count - 1)
            }     
        }
    }

    const toppingsHandler = (event) => {

        if(event.target.checked) {
            setToppings([...toppings, event.target.name])
        } else {
            let filtered = toppings.filter((topping) => topping !== event.target.name);
            setToppings(filtered);
        }
    } 

    


    return(
        <>
            <Header />
            <form>
                <h2>{name}</h2>
                <div>
                    <p>{price}₺</p>
                    <div>
                        <span>{rating}</span>
                        <span>{ratingCount}</span>
                    </div>
                </div>
                <p>
                    {description}
                </p>
                <div>
                    <div>
                        <label>Boyut Seç<span>*</span></label>
                        <div>
                            <span>
                                <input type="radio" name="boyut" id="küçük" />
                                <label htmlFor="küçük" >Küçük</label>
                            </span>
                            <span>
                                <input type="radio" name="boyut" id="orta" />
                                <label htmlFor="orta" >Orta</label>
                            </span>
                            <span>
                                <input type="radio" name="boyut" id="büyük" />
                                <label htmlFor="büyük" >Büyük</label>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label>Hamur Seç<span>*</span></label>
                        <select name="hamur" id="hamur" required >
                            <option id="default" disabled selected hidden >Hamur Kalınlığı</option>
                            <option id="ince">İnce</option>
                            <option id="orta">Orta</option>
                            <option id="kalın">Kalın</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h3>Ek Malzemeler<span>*</span></h3>
                    <p>En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div>
                        {malzemeler.map((malzeme) => {
                            return <>
                                <input onChange={toppingsHandler} disabled={false} type="checkbox" id={malzeme} name={malzeme} />
                                <label htmlFor={malzeme}>{malzeme}</label>
                            </>
                        })}
                    </div>
                </div>
                <div>
                    <label>İsim</label>
                    <input placeholder="Lütfen isminizi giriniz." type="text" />
                </div>
                <div>
                    <label>Sipariş Notu</label>
                    <input placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" />
                </div>
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
                                    <span>{price * count + toppings.length * 5 * count}</span>
                                </div>
                            </div>
                        </div>
                        <button type="submit">SİPARİŞ VER</button>
                    </div>
                </div>
            </form>
        </>
    )
}