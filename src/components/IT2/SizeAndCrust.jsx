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
const Radio = styled.span`
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
    padding-right: 5rem;
    border: none;
    color: #5F5F5F;
`

export default function SizeAndCrust(props) {
    const { setFormData, formData } = props;

    const radioHandler = (event) => {
        if (event.target.checked) {
            setFormData({ ...formData, [event.target.name]: event.target.id })
        }
    }

    const dropDownHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    return (
        <SizeAndCrustContainer>
            <SizeContainer>
                <FormLabel aria-label="Boyut Seç">Boyut Seç<Mandatory> *</Mandatory></FormLabel>
                <SizeWrapper>
                    <div>
                        <RadioInput data-cy="radio-kucuk" onChange={radioHandler} type="radio" name="size" id="küçük" />
                        <Radio as="label" htmlFor="küçük">S</Radio>
                    </div>
                    <div>
                        <RadioInput data-cy="radio-orta" onChange={radioHandler} type="radio" name="size" id="orta" />
                        <Radio as="label" htmlFor="orta">M</Radio>
                    </div>
                    <div>
                        <RadioInput data-cy="radio-buyuk" onChange={radioHandler} type="radio" name="size" id="büyük" />
                        <Radio as="label" htmlFor="büyük">L</Radio>
                    </div>
                </SizeWrapper>
            </SizeContainer>
            <CrustWrapper>
                <FormLabel aria-label="Hamur Seç">Hamur Seç<Mandatory> *</Mandatory></FormLabel>
                <DropDown data-cy="dropdown" onChange={dropDownHandler} name="crust" id="crust" required >
                    <option id="default" disabled selected hidden >- Hamur Kalınlığı Seç -</option>
                    <option data-cy="ince" id="ince">İnce</option>
                    <option data-cy="orta" id="orta">Orta</option>
                    <option data-cy="kalin" id="kalın">Kalın</option>
                </DropDown>
            </CrustWrapper>
        </SizeAndCrustContainer>
    )
}
