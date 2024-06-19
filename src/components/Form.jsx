import { useState } from "react";
import SizeAndCrust from "./formComponents/SizeAndCrust";
import Submit from "./formComponents/Submit";
import Text from "./formComponents/Text";
import Toppings from "./formComponents/Toppings";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

const FormContainer = styled.form`
    margin: 0 35vw;
`

const errorMessages = {
    "size": "Lütfen boyut seçiniz.",
    "crust": "Lütfen hamur seçiniz.",
    "toppings": "Lütfen belirtilen miktarda seçiniz.",
    "name": "Lütfen en az 3 haneli bir isim giriniz.",
}

export default function Form(props) {

    const { pizza, setFormData, formData, setErrors, errors, isValid } = props;
    const { price } = pizza

    const [toppings, setToppings] = useState([]);

    let history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault()

        if(!isValid) return;

        const URL = "https://reqres.in/api/pizza"
        axios.post(URL, formData)
        .then((res) => {
            console.log((res))   
        })
        .catch(err => console.warn(err))

        history.push("/success")
    }


    return (
        <FormContainer onSubmit={submitHandler}>
            <SizeAndCrust errorMessages={errorMessages} errors={errors} setErrors={setErrors} setFormData={setFormData} formData={formData} />
            <Toppings errorMessages={errorMessages} setErrors={setErrors} errors={errors} formData={formData} setFormData={setFormData} toppings={toppings} setToppings={setToppings} />
            <Text errorMessages={errorMessages} errors={errors} setErrors={setErrors} formData={formData} setFormData={setFormData} />
            <Submit isValid={isValid} price={price} toppings={toppings} setFormData={setFormData} formData={formData} />
        </FormContainer>
    )
}