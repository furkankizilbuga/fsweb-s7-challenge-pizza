import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});

    const onSubmit = data => {
        console.log(data);
        setFormData(data);
    };

    return (
        <FormContext.Provider value={{ register, handleSubmit, onSubmit, errors, formData }}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormContext = () => {
    return useContext(FormContext);
}