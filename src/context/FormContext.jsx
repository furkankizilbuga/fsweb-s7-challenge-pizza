import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {

    const { register, setValue, handleSubmit, getValues, watch, formState: { errors, isValid } } = useForm({
        defaultValues: {
            count: 1,
            size: "",
            crust: "",
            toppings: [],
            total: 0,
            name: "",
            note: "",
            pizza: {}
        }
    });

    let pizzaList = [
        {
            "id": 0,
            "img": "Assets/mile2-aseets/cta/kart-1.png",
            "name": "Position Absolute",
            "mini": "Acı Pizza",
            "price": 85.50,
            "rating": 4.9,
            "ratingCount": 150,
            "description": "Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
        },
        {
            "id": 1,
            "img": "Assets/mile2-aseets/cta/kart-2.png",
            "name": "Hackathlon",
            "mini": "Burger Menü",
            "price": 120.00,
            "rating": 4.3,
            "ratingCount": 200,
            "description": "Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
        },
        {
            "id": 2,
            "img": "Assets/mile2-aseets/cta/kart-3.png",
            "name": "NPM",
            "mini": "Çabuk Pizza",
            "price": 90.00,
            "rating": 4.5,
            "ratingCount": 210,
            "description": "Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
        }
    ]

    const [pizzas, setPizzas] = useState(pizzaList);


    return (
        <FormContext.Provider value={{ register, handleSubmit, errors, isValid, watch, setValue, pizzas, getValues}}>
            {children}
        </FormContext.Provider>
    );
}

export const useFormContext = () => {
    return useContext(FormContext);
}