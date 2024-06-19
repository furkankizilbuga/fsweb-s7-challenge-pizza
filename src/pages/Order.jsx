import { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import PizzaInfo from "../components/PizzaInfo";

export default function Order(props) {

    const { pizza, formData, setFormData, initialData } = props;

    const [isValid, setIsValid] = useState(false)

    const [errors, setErrors] = useState(
        {
            "name": true,
            "size": false,
            "crust": false,
            "toppings": false,
        }
    )

    useEffect(() => {
        if(errors.name === false && errors.size === false && errors.crust === false && errors.toppings === false) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [errors])

    useEffect(() => {
        setErrors(prevErrors => {
            let newErrors = {...prevErrors};
            
            if(formData.size === "") {
                newErrors.size = true;
            } else {
                newErrors.size = false;
            }
    
            if(formData.crust === "") {
                newErrors.crust = true;
            } else {
                newErrors.crust = false;
            }
    
           
    
            return newErrors;
        });
    }, [formData]);

    useEffect(() => {
        setFormData(initialData)
    }, [])

    return(
        <>
            <Header />
            <PizzaInfo pizza={pizza} setFormData={setFormData} formData={formData} />
            <Form setIsValid={setIsValid} isValid={isValid} errors={errors} setErrors={setErrors} formData={formData} pizza={pizza} setFormData={setFormData} />
        </>
    )
}