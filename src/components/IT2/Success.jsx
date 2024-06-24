import styled from "styled-components"
import '@fontsource/satisfy';

const Background = styled.main`
    background: #CE2829;
    height: 100vh;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Barlow", sans-serif;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:25px;
    align-items: center;
    padding: 0 1rem;
    
`

const Title = styled.h1`
    color: white;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-weight: bold;
    font-size: 2.3rem;
    margin-top: 2vw;
    padding-bottom: 2rem;
`
const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid white;
`
const Success1 = styled.p`
    color: #FDC913;
    font-family: 'Satisfy', cursive;
    font-size: 2rem;
    padding-top: 1px;
    margin-bottom: -1rem;

    @media(max-width: 1000px) {
        font-size: 3rem;
    }
`
const Success2 = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 4rem;
    padding-top: 1px;
    padding-bottom: 1.3rem;

    @media(max-width: 1000px) {
        font-size: 3rem;
    }
`

const SiparisToplami = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 600;
`

const Secimler = styled.div`
    display: flex;
    gap: 5vw;
`
const Toplam = styled.div`
    display: flex;
    gap: 5vw;
`
const ToplamTitle = styled.p`
    padding-bottom: 1rem;
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 2rem;
    align-items: center;
    padding-bottom: 2rem;
`

const OrderDetails = styled.span`
    font-weight: bold;
`

const MenuProp = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: .8rem;
    gap: 10px;
    margin: 0 2.2rem;
`

const MenuName = styled.p`
    font-weight: bold;
    font-family: "Barlow", sans-serif;
    font-size: 1.2rem;
`

export default function Success(props) {

    const { formData } = props;
    const { size, crust, toppings, total, count } = formData;
    const { name } = formData.pizza;

    return(
        <Background>
            <Container>
                <Title>Teknolojik Yemekler</Title>
                <SuccessContainer>
                    <Success1>lezzetin yolda</Success1>
                    <Success2>SİPARİŞ ALINDI</Success2>
                </SuccessContainer>
                <FormContainer>
                    <MenuName>{name}</MenuName>
                    <MenuProp>
                        <p>Boyut: <OrderDetails>{size}</OrderDetails></p>
                        <p>Hamur:  <OrderDetails>{crust}</OrderDetails></p>
                        <p>Ek malzemeler: {toppings.map((topping, index) => (
                                <OrderDetails key={index}> {topping}</OrderDetails>
                            ))}</p>                      
                    </MenuProp>
                    <SiparisToplami>
                        <ToplamTitle>Sipariş Toplamı</ToplamTitle>
                        <Secimler>
                            <span>Seçimler</span>
                            <span>{toppings.length * 5 * count}₺</span>
                        </Secimler>
                        <Toplam>
                            <span>Toplam</span>
                            <span>{total}₺</span>
                        </Toplam>
                    </SiparisToplami>
                </FormContainer>
            </Container>
        </Background>       
    )
}