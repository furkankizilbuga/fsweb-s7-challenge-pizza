import { useState } from "react";
import SizeAndCrust from "./SizeAndCrust";
import Submit from "./Submit";
import Text from "./Text";
import Toppings from "./Toppings";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Form(props) {

    const { pizza, setFormData, formData, setErrors, errors, isValid, setIsValid } = props;
    const { price } = pizza

    const [toppings, setToppings] = useState([]);

    let history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault()
        

        if(isValid === false) {
            toast.error("Lütfen * ile belirtilmiş alanları istenen şekilde doldurunuz.")
        } else {
            const URL = "https://reqres.in/api/pizza"
            axios.post(URL, formData)
            .then((res) => {
                console.log((res))
                history.push("/success")   
            })
            .catch(err => {
                console.warn(err)
                toast.error("Bir hata oluştu. Lütfen Tekrar deneyiniz.")
            }) 
        } 
    }


    return (
        <div className="px-8 flex flex-col items-center" onSubmit={submitHandler}>
            <div>
                <SizeAndCrust 
                    setFormData={setFormData} 
                    formData={formData} />
                <Toppings 
                    setErrors={setErrors} 
                    errors={errors} 
                    formData={formData} 
                    setFormData={setFormData} 
                    toppings={toppings} 
                    setToppings={setToppings} />
                <Text 
                    errors={errors} 
                    setErrors={setErrors} 
                    formData={formData} 
                    setFormData={setFormData} />
                <Submit 
                    errors={errors} 
                    isValid={isValid} 
                    price={price} 
                    toppings={toppings} 
                    setFormData={setFormData} 
                    formData={formData} />
            </div>
        </div>
    )
}