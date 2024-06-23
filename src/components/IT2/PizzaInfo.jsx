import styled from "styled-components"
import '@fontsource/barlow';
import '@fontsource-variable/roboto-condensed';
import { Link } from "react-router-dom"
import { useEffect } from "react";

const InfoContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 35vw;
    min-width: 360px;
    gap: 20px;
    @media(max-width: 1500px) {
        margin: 0 30vw;
    }
`
const PizzaName = styled.h2`
    float: left;
    font-weight: 650;
    font-size: 1.3rem;
    padding-bottom: 1rem;
    font-family: "Barlow", sans-serif;
`
const PriceRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Price = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
`
                                                //mediaquery yaparken margini biraz azalt ki ortada sıkışmasınlar.
const Rating = styled.div`
    display: flex;
    gap: 100px;
    color: #5F5F5F;
    font-family: "Barlow", sans-serif;
`
const Description = styled.p`
    color: #5F5F5F;
    line-height: 28.8px;
    font-family: "Barlow", sans-serif;
`
const NavLink1 = styled(Link)`
    color: #292929;
    position: absolute;
    &:hover {
        font-weight: 600;
    }
`
const NavLink2 = styled(Link)`
    color: #CE2829;
    font-weight: bold;
    white-space: nowrap;
`
const Nav = styled.nav`
    padding-top: 2rem;
    position:relative;
    display: flex;
    gap: 70px;

    @media(max-width: 1500px) {
        align-items: center;
        margin: 0 30vw;
    }
`
const Dash = styled.span`
    color: white;
    cursor: default;
`
const Background = styled.div`
    background: #FAF7F2;
    padding-bottom: 1rem;
`

export default function PizzaInfo(props) {
    const { pizza, formData } = props;
    
    if (!formData.pizza) {
        return <div>Loading...</div>;
    }

    const { name, price, rating, ratingCount, description } = formData.pizza
    console.log("ekmek")
    console.log(formData)


    return(
        <Background>
            <InfoContainer>
                
                    <img src="Assets/mile2-aseets/pictures/form-banner.png" />
                    <Nav>
                        <NavLink1 
                            aria-label="Ana Sayfa" 
                            to="/">Anasayfa</NavLink1>
                        <Dash> - </Dash>
                        <NavLink2 
                            aria-label="Sipariş Oluştur" 
                            to="/order">Sipariş Oluştur</NavLink2>
                    </Nav>
                    <PizzaName>{name}</PizzaName>
                    <PriceRating>
                        <Price>{price}₺</Price>
                        <Rating>
                            <span>{rating}</span>
                            <span>{ratingCount}</span>
                        </Rating>
                    </PriceRating>
                    <Description>
                        {description}
                    </Description>
                
            </InfoContainer>
        </Background>
    )
}