import { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import PizzaInfo from "../components/PizzaInfo";

export default function Order(props) {

    const { pizza, formData, setFormData } = props;

    const [isValid, setIsValid] = useState(false)

    const [errors, setErrors] = useState(
        {
            "name": false,
            "size": false,
            "crust": false,
            "toppings": false,
        }
    )

    useEffect(() => {

        if(formData.size === "") {
            setErrors({...errors, "size": true})
        }

        setErrors({...errors, "size": false})

        if(formData.crust === "") {
            setErrors({...errors, "crust": true})
        }

        setErrors({...errors, "crust": false})

        if(errors.name === false && errors.size === false && errors.crust === false && errors.toppings === false) {
            setIsValid(true)
        }

    }, [formData])

    return(
        <>
            <Header />
            <PizzaInfo pizza={pizza} setFormData={setFormData} formData={formData} />
            <Form isValid={isValid} errors={errors} setErrors={setErrors} formData={formData} pizza={pizza} setFormData={setFormData} />
        </>
    )
}