export default function Toppings(props) {

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ]

    const { toppings, setToppings, formData, setFormData, errors, setErrors, errorMessages } = props;

    const toppingsHandler = (event) => {

        let updated;

        if(event.target.checked) {
            updated = [...toppings, event.target.id]
        } else {
            updated = toppings.filter((topping) => topping !== event.target.id);
        }

        setToppings(updated);
        setFormData({...formData, "toppings": updated})

        if(updated.length < 4 || updated.length > 10) {
            setErrors({...errors, "toppings": true})
        } else {
            setErrors({...errors, "toppings": false})
        }
        console.log(errors)
    } 

    return(

        <div>
            <h3>Ek Malzemeler<span>*</span></h3>
            <p>En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div>
                {malzemeler.map((malzeme) => {
                    return <div key={malzeme}>
                        <input onChange={toppingsHandler} disabled={false} type="checkbox" id={malzeme} name="toppings" />
                        <label htmlFor={malzeme}>{malzeme}</label>
                    </div>
                })}
            </div>
            {errors.toppings && <label>{errorMessages.toppings}</label>}
        </div>
    )
}