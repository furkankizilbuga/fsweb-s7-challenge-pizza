export default function Text(props) {

    const { setPizzaFinal, pizzaFinal } = props;
    const { name, note } = pizzaFinal; //burayı fixle

    const textInputHandler = (event) => {
        if(event.target.name === "name"){
            setPizzaFinal({...pizzaFinal, [event.target.name]: event.target.value})
        } else {
            setPizzaFinal({...pizzaFinal, [event.target.name]: event.target.value})
        }
    }

    return(
        <>
            <div>
                <label>İsim</label>
                <input id="name" name="name" placeholder="Lütfen isminizi giriniz." type="text" value={name} onChange={textInputHandler} />
            </div>
            <div>
                <label>Sipariş Notu</label>
                <input id="note" name="note" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" value={note} onChange={textInputHandler} />
            </div>
        </>
    )
}