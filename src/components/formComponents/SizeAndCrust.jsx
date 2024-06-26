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
                {/* errors.size && <label>{errorMessages.size}</label> */}
                <FormLabel aria-label="Boyut Seç">Boyut Seç<Mandatory> *</Mandatory></FormLabel>
                <SizeWrapper>
                    <Radio data-cy="radio-kucuk">
                        <input onChange={radioHandler} type="radio" name="size" id="Küçük" />
                        <label htmlFor="Küçük" >Küçük</label>
                    </Radio>
                    <Radio data-cy="radio-orta">
                        <input onChange={radioHandler} type="radio" name="size" id="Orta" />
                        <label htmlFor="Orta" >Orta</label>
                    </Radio>
                    <Radio data-cy="radio-buyuk">
                        <input onChange={radioHandler} type="radio" name="size" id="Büyük" />
                        <label htmlFor="Büyük" >Büyük</label>
                    </Radio>
                </SizeWrapper>
            </SizeContainer>
            <CrustWrapper>
                {/* errors.crust && <label>{errorMessages.crust}</label> */}
                <FormLabel aria-label="Hamur Seç">Hamur Seç<Mandatory> *</Mandatory></FormLabel>
                <DropDown data-cy="dropdown" onChange={dropDownHandler} name="crust" id="crust" required >
                    <option id="default" disabled selected hidden >Hamur Kalınlığı</option>
                    <option data-cy="ince" id="ince">İnce</option>
                    <option data-cy="orta" id="orta">Orta</option>
                    <option data-cy="kalin" id="kalın">Kalın</option>
                </DropDown>
            </CrustWrapper>
        </SizeAndCrustContainer>
    )
}