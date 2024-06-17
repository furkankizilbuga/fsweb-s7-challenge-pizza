export default function Toppings(props) {

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ]

    const { toppings, setToppings, pizzaFinal, setPizzaFinal } = props;

    const toppingsHandler = (event) => {

        if(event.target.checked) {
            setToppings([...toppings, event.target.name])
            setPizzaFinal({...pizzaFinal, "toppings": toppings})
        } else {
            let filtered = toppings.filter((topping) => topping !== event.target.name);
            setToppings(filtered);
            setPizzaFinal({...pizzaFinal, "toppings": toppings})
        }
    } 

    return(

        <div>
            <h3>Ek Malzemeler<span>*</span></h3>
            <p>En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div>
                {malzemeler.map((malzeme) => {
                    return <>
                        <input onChange={toppingsHandler} disabled={false} type="checkbox" id={malzeme} name="toppings" />
                        <label htmlFor={malzeme}>{malzeme}</label>
                    </>
                })}
            </div>
        </div>
    )
}