import { useEffect, useState } from "react"
import styled from "styled-components"

const SizeAndCrustContainer = styled.section`
    display: flex;
    gap: 7vw;
    padding-top: 45px;
    font-family: "Barlow", sans-serif;
    color: #5F5F5F;

    @media(max-width: 1000px) {
        flex-direction: column;
    }

`
const SizeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const SizeWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

const CrustWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: black;
`
const FormLabel = styled.label`
    font-weight: bold;
    font-size: 1.25rem;
    color: black;
`
const Mandatory = styled.span`
    color: red;
`
const Radio = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    background: #FAF7F2;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: relative;
    &:hover {
        background: #f8e8bc;
    }
`

const RadioInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;

    &:checked + ${Radio} {
        background: #FDC913;
    }
`

const DropDown = styled.select`
    border: 1px solid black;
    font-weight: bold;
    background: #FAF7F2;
    padding: 1rem;
    padding-right: 3vw;
    border: none;
    color: #5F5F5F;
`

export default function SizeAndCrust(props) {
    const { setFormData, formData } = props;

    const [size, setSize] = useState("")
    const [crust, setCrust] = useState("")

    const sizeHandler = (event) => {
        setSize(event.target.value)
    }

    useEffect(() => {
        setFormData({ ...formData, "size": size})
    }, [size])

    
    const crustHandler = (event) => {
        setCrust(event.target.value)
    }

    useEffect(() => {
        setFormData({ ...formData, "crust": crust})
    }, [crust])


    return (
        <SizeAndCrustContainer>
            <SizeContainer>
                <FormLabel aria-label="Boyut Seç">Boyut Seç<Mandatory> *</Mandatory></FormLabel>
                <SizeWrapper>
                    <div>
                        <RadioInput data-cy="radio-kucuk" onChange={sizeHandler} checked={size === "Küçük"} value="Küçük" type="radio" name="size" id="Küçük" />
                        <Radio htmlFor="Küçük">S</Radio>
                    </div>
                    <div>
                        <RadioInput data-cy="radio-orta" onChange={sizeHandler} checked={size === "Orta"} value="Orta" type="radio" name="size" id="Orta" />
                        <Radio htmlFor="Orta">M</Radio>
                    </div>
                    <div>
                        <RadioInput data-cy="radio-buyuk" onChange={sizeHandler} checked={size === "Büyük"} value="Büyük" type="radio" name="size" id="Büyük" />
                        <Radio htmlFor="Büyük">L</Radio>
                    </div>
                </SizeWrapper>
            </SizeContainer>
            <CrustWrapper>
                <FormLabel aria-label="Hamur Seç">Hamur Seç<Mandatory> *</Mandatory></FormLabel>
                <DropDown data-cy="dropdown" onChange={crustHandler} value={crust || "default"} name="crust" id="crust" required >
                    <option id="default" value="default" disabled selected hidden >- Hamur Kalınlığı Seç -</option>
                    <option data-cy="ince" value="İnce" id="ince">İnce</option>
                    <option data-cy="orta" value="Orta" id="orta">Orta</option>
                    <option data-cy="kalin" value="Kalın" id="kalın">Kalın</option>
                </DropDown>
            </CrustWrapper>
        </SizeAndCrustContainer>
    )
}
