import { useEffect, useState } from "react";
import styled from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubmitContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 120px;
    flex-wrap: wrap;             

    @media(max-width: 1500px) {
        justify-content: center;
        gap: 35px;
    }
`

const CountWrapper = styled.div`

`
const CountButtonMinus = styled.button`
    background: #FAF7F2;
    padding: 1rem;
    border-radius: 5px 0 0 5px;
    &:hover {
        background-color: #f8e8bc;
    }
`
const CountButtonPlus = styled.button`
    background: #FAF7F2;
    padding: 1rem;
    border-radius: 0 5px 5px 0;
    &:hover {
        background-color: #f8e8bc;
    }
`

const Adet = styled.span`
    padding: 1rem;
    background: #FAF7F2;
`

const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Barlow", sans-serif;

    @media(max-width: 1500px) {
        width: 100%;
    }
    
`
const TotalDetails = styled.div`
    width: 20vw;
    height: 11rem;
    padding: 2vw;
    display: flex;
    flex-direction: column;
    background: #FAF7F2;
    border-radius: 5px 5px 0 0;
    gap: 15px;
    @media(max-width: 1500px) {
        width: 100%;
    }
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
    cursor: pointer;
`
const Mandatory = styled.span`
    padding-top: 10px;
    font-size: 1.1rem;
    text-align: center;
    color: red;
`

export default function Submit(props) {

    const { price, setFormData, formData, isValid, handleClick } = props;

    const [count, setCount] = useState(1);

    const countHandler = (event) => {
        console.log(formData)
        event.preventDefault();
        
        if(event.target.id === "increase") {
            setCount(count + 1)
        } else {
            if(count > 1) {
                setCount(count - 1) 
            }     
        }

        console.log(formData)
        
    }
    
    useEffect(() => {  
        const total = price * count + formData.toppings.length * 5 * count;      
        setFormData({...formData, count, total})
    }, [count, formData.toppings.length])


    return(
        <SubmitContainer>
            <CountWrapper>
                <CountButtonMinus aria-label="Adet azalt" id="decrease" onClick={countHandler} >-</CountButtonMinus>
                <Adet>{count}</Adet>
                <CountButtonPlus aria-label="Adet arttır" id="increase" onClick={countHandler} >+</CountButtonPlus>
            </CountWrapper>
            <TotalWrapper>
                <TotalDetails>
                    <TotalHeader>Sipariş Toplamı</TotalHeader>
                    <TotalSub>
                        <Secimler>
                            <span>Seçimler</span>
                            <span>{formData.toppings.length * 5 * count}₺</span>
                        </Secimler>
                        <Toplam>
                            <span>Toplam</span>
                            <span>{price * count + formData.toppings.length * 5 * count}₺</span>
                        </Toplam>
                    </TotalSub>
                </TotalDetails>
                <Button aria-label="Sipariş Ver" data-cy="form-submit" onClick={handleClick} type="submit">SİPARİŞ VER</Button>
                {!isValid && <Mandatory data-cy="error-message">Lütfen * ile belirtilmiş alanları doldurunuz.</Mandatory>}
            </TotalWrapper>
        </SubmitContainer>
    )
}