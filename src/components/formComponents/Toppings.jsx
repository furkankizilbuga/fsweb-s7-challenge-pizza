import { useEffect } from "react"
import styled from "styled-components"

const ToppingsContainer = styled.section`
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: "Barlow", sans-serif;
    color: #5F5F5F;
`

const ToppingsHeader = styled.h2`
    font-weight: bold;
    font-size: 1.25rem;
    color: black;
`
const Mandatory = styled.span`
    color: red;
`

const Topping = styled.div`
    display: flex;
    gap: 10px;
    color: #555555;
    font-weight: bold;
`

const ToppingsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
`


export default function Toppings(props) {

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ]

    const { toppings, setToppings, formData, setFormData, errors, setErrors } = props;

    const toppingsHandler = (event) => {

        let updated;

        if(event.target.checked) {
            updated = [...toppings, event.target.id]
        } else {
            updated = toppings.filter((topping) => topping !== event.target.id);
        }

        setToppings(updated);
        setFormData({...formData, "toppings": updated})

    } 

    useEffect(() => {

        if(formData.toppings.length < 4 || formData.toppings.length > 10) {
            setErrors({...errors, "toppings": true})
        } else {
            setErrors({...errors, "toppings": false})
        }


        setErrors(prevErrors => {
            let newErrors = {...prevErrors}
            let { toppings } = newErrors;

            if(formData.toppings.length < 4 || formData.toppings.length > 10) {
                toppings = true;
            } else {
                toppings = false;
            }

            return {...errors, "toppings": toppings}

        }
        
    )
        
    
    }, [formData])


    return(

        <ToppingsContainer>
            <ToppingsHeader aria-label="Ek Malzemeler">Ek Malzemeler<Mandatory> *</Mandatory></ToppingsHeader>
            <p>En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <ToppingsList data-cy="checkbox-container">
                {malzemeler.map((malzeme, index) => {
                    return <Topping data-cy="checkbox-wrapper" key={index}>
                        <input onChange={toppingsHandler} disabled={false} type="checkbox" id={malzeme} name="toppings" />
                        <label data-cy="topping-checkbox" htmlFor={malzeme}>{malzeme}</label>
                    </Topping>
                })}
            </ToppingsList>
            {/* {errors.toppings && <ErrorMessage>{errorMessages.toppings}</ErrorMessage>} */}
        </ToppingsContainer>
    )
}