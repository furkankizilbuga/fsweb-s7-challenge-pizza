import { useState } from "react";
import styled from "styled-components"

const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 40px;
    border-bottom: 2px solid #c5c5c5;
    font-family: "Barlow", sans-serif;
`

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`
const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const NameLabel = styled.label`
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
`
const NoteLabel = styled.label`
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
`
const Input = styled.input`
    border: 1px solid #c5c5c5;
    padding: .7rem;
    padding-left: 1rem;
    border-radius: 5px;

    &::placeholder {
        color: #5F5F5F;
        font-weight: bold;
        font-size: .9rem;

    }
`
const ErrorMessage = styled.label`
    color: red;
    margin: -1.5rem 0 1.5rem 0;
`
const Mandatory = styled.span`
    color: red;
`

export default function Text(props) {

    const { setFormData, formData, setErrors, errors, errorMessages } = props;

    const textInputHandler = (event) => {
        if(event.target.name === "name"){
            if(event.target.value === "") {
                setErrors({...errors, [event.target.name]: true})
            } 
            if(event.target.value.length >= 2) {
                setErrors({...errors, [event.target.name]: false})
            }
            setFormData({...formData, [event.target.name]: event.target.value})
        } else {
            setFormData({...formData, [event.target.name]: event.target.value})
        }

        console.log(errors)
    }


    return(
        <TextContainer>
            <NameContainer>
                <NameLabel>İsim<Mandatory> *</Mandatory></NameLabel>
                <Input id="name" name="name" placeholder="Lütfen isminizi giriniz." type="text" value={formData.name} onChange={textInputHandler} /><br />
                {errors.name && <ErrorMessage>{errorMessages.name}</ErrorMessage>}
            </NameContainer>
            <NoteContainer>
                <NoteLabel>Sipariş Notu</NoteLabel>
                <Input id="note" name="note" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" value={formData.note} onChange={textInputHandler} />
            </NoteContainer>
        </TextContainer>
    )
}