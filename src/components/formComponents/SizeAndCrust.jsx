export default function SizeAndCrust(props) {

    const { setFormData, formData, errors, setErrors, errorMessages } = props;

    const radioHandler = (event) => {
        if(event.target.checked) {
            setFormData({...formData, [event.target.name]: event.target.id})
        }


    }

    const dropDownHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    return(
        <div>
            <div>
                {errors.size && <label>{errorMessages.size}</label>}
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
                {errors.crust && <label>{errorMessages.crust}</label>}
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