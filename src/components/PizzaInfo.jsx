import styled from "styled-components"
import '@fontsource/barlow';
import '@fontsource-variable/roboto-condensed';

const InfoContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 35vw;
    min-width: 360px;
    margin-top: 1.5vw;
    gap: 20px;
    @media(max-width: 1500px) {
        margin: 0 30vw;
        margin-top: 1.5vw;
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

export default function PizzaInfo(props) {
    const { pizza } = props;

    const { name, price, rating, ratingCount, description } = pizza


    return(
        <InfoContainer>
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
    )
}