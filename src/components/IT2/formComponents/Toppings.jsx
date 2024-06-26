import { useEffect, useState } from "react"
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
    gap: 5px;
    color: #555555;
    font-weight: bold;
    align-items: center;
`

const ToppingsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
`

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + label::after {
        content: "\\2714";
        color: black;
        font-size: 20px;
        background: #FDC913;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        align-content: center;
        padding-left: .7rem;
    }
`

const NewInput = styled.label`
    background: #FAF7F2;
    height: 40px;
    width: 40px;
    position: relative;
    border-radius: 5px;
    &:hover {
        background: #f8e8bc;
    }
`

export default function Toppings(props) {

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ]

    let initialArray = Array(malzemeler.length).fill(false)

    const [chosen, setChosen] = useState([]);
    const [isCheckedArr, setIsCheckedArr] = useState(initialArray)

    const { formData, setFormData, errors, setErrors } = props;

    const toppingHandler = (event) => {
        if(event.target.checked) {
            setChosen([...chosen, event.target.value])
            let newArr = [...isCheckedArr]
            newArr[event.target.id] = true;
            setIsCheckedArr(newArr)
        } else {
            let updated = chosen.filter(topping => topping !== event.target.value)
            setChosen(updated)
            let newArr = [...isCheckedArr]
            newArr[event.target.id] = false;
            setIsCheckedArr(newArr)
        }
    }

    useEffect(() => {
        setFormData({...formData, "toppings": chosen})
    }, [chosen])

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
                        
                        <Input 
                            onChange={toppingHandler} 
                            checked={isCheckedArr[index]} 
                            value={malzeme} 
                            type="checkbox" 
                            id={index} 
                            name="toppings" />
                        <NewInput htmlFor={index}></NewInput>
                        <label data-cy="topping-label" htmlFor={index}>{malzeme}</label>
                    </Topping>
                })}
            </ToppingsList>
        </ToppingsContainer>
    )
}