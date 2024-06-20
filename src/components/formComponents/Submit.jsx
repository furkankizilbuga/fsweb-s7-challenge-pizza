import { useEffect, useState } from "react";
import styled from "styled-components"

const SubmitContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 120px;
    flex-wrap: wrap;                         //media-query ile düzenlenecek.
`

const CountWrapper = styled.div`

`
const CountButtonMinus = styled.button`
    background: #FDC913;
    padding: 1rem;
    border-radius: 5px 0 0 5px;
    &:hover {
        background-color: #fdab13;
    }
`
const CountButtonPlus = styled.button`
    background: #FDC913;
    padding: 1rem;
    border-radius: 0 5px 5px 0;
    &:hover {
        background-color: #fdab13;
    }
`

const Adet = styled.span`
    padding: 1rem;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
`

const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Barlow", sans-serif;
    
`
const TotalDetails = styled.div`
    width: 20vw;
    height: 11rem;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    border: 1px solid #c5c5c5;
    border-radius: 5px 5px 0 0;
    gap: 15px;
`
const TotalHeader = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
`

const TotalSub = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Secimler = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #636363;

`
const Toplam = styled.div`
    color: #CE2829;
    display: flex;
    justify-content: space-between;
    font-weight: bold;

`
const Button = styled.button`
    background: #FDC913;
    padding: 1rem;
    border-radius: 0 0 5px 5px;
    &:hover {
        background-color: #fdab13;
    }
`
const Mandatory = styled.span`
    padding-top: 10px;
    font-size: 1.1rem;
    text-align: center;
    color: red;
`

export default function Submit(props) {

    const { toppings, price, setFormData, formData, isValid, errors, setErrors } = props;

    const [count, setCount] = useState(1);

    const countHandler = (event) => {

        event.preventDefault();
        
        if(event.target.id === "increase") {
            setCount(count + 1)
        } else {
            if(count > 1) {
                setCount(count - 1) 
            }     
        }
        console.log(errors)
        
        
    }
    
    useEffect(() => {  
        const total = price * count + toppings.length * 5 * count;      
        setFormData({...formData, count, total})
    }, [count, toppings.length])


    console.log(formData)
    return(
        <SubmitContainer>
            <CountWrapper>
                <CountButtonMinus id="decrease" onClick={countHandler} >-</CountButtonMinus>
                <Adet>{count}</Adet>
                <CountButtonPlus id="increase" onClick={countHandler} >+</CountButtonPlus>
            </CountWrapper>
            <TotalWrapper>
                <TotalDetails>
                    <TotalHeader>Sipariş Toplamı</TotalHeader>
                    <TotalSub>
                        <Secimler>
                            <span>Seçimler</span>
                            <span>{toppings.length * 5 * count}₺</span>
                        </Secimler>
                        <Toplam>
                            <span>Toplam</span>
                            <span>{price * count + toppings.length * 5 * count}₺</span>
                        </Toplam>
                    </TotalSub>
                </TotalDetails>
                <Button data-cy="form-submit" disabled={!isValid} type="submit">SİPARİŞ VER</Button>
                {!isValid && <Mandatory data-cy="error-message">Lütfen * ile belirtilmiş alanları doldurunuz.</Mandatory>}
            </TotalWrapper>
        </SubmitContainer>
    )
}