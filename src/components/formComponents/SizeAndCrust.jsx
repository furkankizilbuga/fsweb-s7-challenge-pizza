export default function SizeAndCrust(props) {

    const { setPizzaFinal, pizzaFinal } = props;

    const radioHandler = (event) => {
        if(event.target.checked) {
            setPizzaFinal({...pizzaFinal, [event.target.size]: event.target.id})
        }
    }

    const dropDownHandler = (event) => {
        setPizzaFinal({...pizzaFinal, [event.target.crust]: event.target.value})
    }

    return(
        <div>
            <div>
                <label>Boyut Seç<span>*</span></label>
                <div>
                    <span>
                        <input onChange={radioHandler} type="radio" name="size" id="küçük" />
                        <label htmlFor="küçük" >Küçük</label>
                    </span>
                    <span>
                        <input onChange={radioHandler} type="radio" name="size" id="orta" />
                        <label htmlFor="orta" >Orta</label>
                    </span>
                    <span>
                        <input onChange={radioHandler} type="radio" name="size" id="büyük" />
                        <label htmlFor="büyük" >Büyük</label>
                    </span>
                </div>
            </div>
            <div>
                <label>Hamur Seç<span>*</span></label>
                <select onChange={dropDownHandler} name="crust" id="crust" required >
                    <option id="default" disabled selected hidden >Hamur Kalınlığı</option>
                    <option id="ince">İnce</option>
                    <option id="orta">Orta</option>
                    <option id="kalın">Kalın</option>
                </select>
            </div>
        </div>
    )
}