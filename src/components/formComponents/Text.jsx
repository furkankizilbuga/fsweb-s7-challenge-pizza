import { useState } from "react";

export default function Text(props) {

    const { setFormData, formData, setErrors, errors, errorMessages } = props;

    const textInputHandler = (event) => {
        if(event.target.name === "name"){
            if(event.target.value === "") {
                setErrors({...errors, [event.target.name]: true})
            } 
            if(event.target.value.length >= 2) {
                setErrors({...errors, [event.target.name]: false})
            }
            setFormData({...formData, [event.target.name]: event.target.value})
        } else {
            setFormData({...formData, [event.target.name]: event.target.value})
        }

        console.log(errors)
    }


    return(
        <>
            <div>
                <label>İsim</label>
                <input id="name" name="name" placeholder="Lütfen isminizi giriniz." type="text" value={formData.name} onChange={textInputHandler} /><br />
                {errors.name && <label>{errorMessages.name}</label>}
            </div>
            <div>
                <label>Sipariş Notu</label>
                <input id="note" name="note" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" value={formData.note} onChange={textInputHandler} />
            </div>
        </>
    )
}