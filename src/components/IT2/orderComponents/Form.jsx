import { useState } from "react";
import SizeAndCrust from "./SizeAndCrust";
import Submit from "./Submit";
import Text from "./Text";
import Toppings from "./Toppings";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { useFormContext } from "../../../context/FormContext";

export default function Form() {

    let history = useHistory();

    const submitHandler = (event) => {

        history.push("/success")
        

        /* if(isValid === false) {
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
        }  */


            //Kendi Backend'ini yazcağım.
    }

    const { handleSubmit, isValid } = useFormContext();


    return (
        <form className="px-8 flex flex-col items-center pb-20" onSubmit={handleSubmit(submitHandler)}>
            <div>
                <SizeAndCrust />
                <Toppings />
                <Text />
                <Submit />
                <div className="flex flex-col">
                    <button disabled={!isValid} className={`bg-[#FDC913] w-full cursor-pointer rounded-b-md py-2 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`} aria-label="Sipariş Ver" data-cy="form-submit" type="submit">SİPARİŞ VER</button>
                    {!isValid && <span className="text-red-500 text-center text-sm mx-8 mt-4" data-cy="error-message">Lütfen * ile belirtilmiş alanları doldurunuz.</span>}
                </div>
            </div>
        </form>
    )
}