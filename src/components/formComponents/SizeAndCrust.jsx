import styled from "styled-components"

const SizeAndCrustContainer = styled.section`
    display: flex;
    gap: 10vw;
    padding-top: 45px;
    font-family: "Barlow", sans-serif;
    color: #5F5F5F;
`
const SizeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const SizeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
const Radio = styled.span`
    display: flex;
    gap: 15px;
    font-weight: 500;
`

const DropDown = styled.select`
    border: 1px solid black;
    font-weight: bold;
`

export default function SizeAndCrust(props) {

    const { setFormData, formData, errors, setErrors, errorMessages } = props;

    const radioHandler = (event) => {
        if(event.target.checked) {
            setFormData({...formData, [event.target.name]: event.target.id})
        }


    }

    const dropDownHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    return(
        <SizeAndCrustContainer>
            <SizeContainer>
                {errors.size && <label>{errorMessages.size}</label>}
                <FormLabel>Boyut Seç<Mandatory> *</Mandatory></FormLabel>
                <SizeWrapper>
                    <Radio>
                        <input onChange={radioHandler} type="radio" name="size" id="küçük" />
                        <label htmlFor="küçük" >Küçük</label>
                    </Radio>
                    <Radio>
                        <input onChange={radioHandler} type="radio" name="size" id="orta" />
                        <label htmlFor="orta" >Orta</label>
                    </Radio>
                    <Radio>
                        <input onChange={radioHandler} type="radio" name="size" id="büyük" />
                        <label htmlFor="büyük" >Büyük</label>
                    </Radio>
                </SizeWrapper>
            </SizeContainer>
            <CrustWrapper>
                {errors.crust && <label>{errorMessages.crust}</label>}
                <FormLabel>Hamur Seç<Mandatory> *</Mandatory></FormLabel>
                <DropDown onChange={dropDownHandler} name="crust" id="crust" required >
                    <option id="default" disabled selected hidden >Hamur Kalınlığı</option>
                    <option id="ince">İnce</option>
                    <option id="orta">Orta</option>
                    <option id="kalın">Kalın</option>
                </DropDown>
            </CrustWrapper>
        </SizeAndCrustContainer>
    )
}