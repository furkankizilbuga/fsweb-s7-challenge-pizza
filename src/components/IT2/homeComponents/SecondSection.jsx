import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"

//19.30

const Section = styled.section`
    background: #FAF7F2;
`

const Header = styled.header`
    background: white;
    display: flex;
    justify-content: center;
    gap: 5vw;
    padding: 1rem;
`
const HeaderItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
    
`
const ItemImage = styled.img`
    width: 1.5rem;
`

const ItemName = styled.span`
    font-family: "Barlow", sans-serif;
    font-weight: bold;
    font-size: .9rem;
`

const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    gap: 30px;

    @media (max-width: 1200px) {
        padding: 4rem 4rem;
    }

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }

`

const Thumbnails = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
    margin: 0 20rem;

    @media(max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`
const Lezzetus = styled.div`
    background-image: url("Assets/mile2-aseets/cta/kart-1.png");
    background-size: cover;
    width: 30rem;
    height: 25rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: .8rem;

    @media (max-width: 1200px) {
        width: 25rem;
        height: 20.7rem;
    }


`
const LezzetusTitle = styled.h3`
    color: white;
    font-size: 3rem;
    line-height: 45px;
`
const LezzetusDescription = styled.p`
    color: white;
`

const Hackathlon = styled.div`
    background-image: url("Assets/mile2-aseets/cta/kart-2.png");
    background-size: cover;
    width: 30rem;
    height: 12.2rem;
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    @media (max-width: 1200px) {
        width: 25rem;
        height: 10rem;
    }

    

`
const HackathlonTitle = styled.h3`
    color: white;
    font-size: 1.2rem;
`
const NPM = styled.div`
    background-image: url("Assets/mile2-aseets/cta/kart-3.png");
    background-size: cover;
    width: 30rem;
    height: 12.2rem;
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    @media (max-width: 1200px) {
        width: 25rem;
        height: 10rem;
    }


`
const NPMTitle = styled.h3`
    color: #292929;
    font-weight: bold;
`
const RightBanners = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BannerButtons = styled.button`
    background: white;
    color: #CE2829;
    padding: .6rem 1.3rem;
    border-radius: 30px;
    font-size: .7rem;
    font-weight: bold;
`
const MiniTitle = styled.h3`
    color: #CE2829;
    font-family: 'Satisfy', cursive;
    font-size: 1.4rem;
`
const MiniHeader = styled.div`
    display: flex;
    gap: 1.5rem;
    font-family: "Barlow", sans-serif;
    
    
    @media(max-width: 1200px) {
        gap: 1rem;
    }

`
const MiniHeaderItem = styled.div`
    background: white;
    padding: .5vw 0;
    padding-left: 1rem;
    padding-right: 2.5rem;
    display: flex;
    align-items: center;
    border-radius: 50px;
    font-size: .8rem;
    gap: 10px;
    font-weight: bold;
    cursor: pointer;
    &:nth-child(2){
        background: #292929;
        color: white;
    }

    @media(max-width: 1200px) {
        padding-left: 1rem;
        padding-right: 2rem;
    }
`


const BottomMenus = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 2rem;
`

const BottomMenuContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0 7rem;
    @media (max-width: 1200px) {
        margin: 0 1rem;
    }
`
const RatePrice = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Barlow", sans-serif;
    margin-bottom: -1.5rem;
`
const Price = styled.span`
    font-weight: bold;
`
const Rating = styled.span`
    color: #5F5F5F;
`
const HeaderImg = styled.img`
    width: 1.7rem;
`
const PizzaName = styled.p`
    font-size: 1rem;
    padding-bottom: 5px;
    font-weight: bold;
`

const MiniHeadLines = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MiniMain = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`
const HeaderMargin = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin: 0 20vw;
    
`

const NPMRed = styled.span`
    color: red;
`

export default function SecondSection(props) {

    const { formData, setFormData, pizza } = props;

    let history = useHistory();

    const clickHandler = (event) => {
        history.push("/order")
        setFormData({...formData, "pizza": event.target.pizza})
    }

    return(
        <Section>
            <Header>
                <HeaderMargin>
                    <HeaderItemContainer>
                        <ItemImage src="/Assets/mile2-aseets/icons/1.svg" alt="Kore" />
                        <ItemName>YENİ! Kore</ItemName>
                    </HeaderItemContainer>
                    <HeaderItemContainer>
                        <ItemImage src="/Assets/mile2-aseets/icons/2.svg" alt="Pizza" />
                        <ItemName>Pizza</ItemName>
                    </HeaderItemContainer>
                    <HeaderItemContainer>
                        <ItemImage src="/Assets/mile2-aseets/icons/3.svg" alt="Burger" />
                        <ItemName>Burger</ItemName>
                    </HeaderItemContainer>
                    <HeaderItemContainer>
                        <ItemImage src="/Assets/mile2-aseets/icons/4.svg" alt="Kızartmalar" />
                        <ItemName>Kızartmalar</ItemName>
                    </HeaderItemContainer>
                    <HeaderItemContainer>
                        <ItemImage src="/Assets/mile2-aseets/icons/5.svg" alt="Fast Food" />
                        <ItemName>Fast Food</ItemName>
                    </HeaderItemContainer>
                    <HeaderItemContainer>
                        <ItemImage src="/Assets/mile2-aseets/icons/6.svg" alt="Gazlı İçecek" />
                        <ItemName>Gazlı İçecek</ItemName>
                    </HeaderItemContainer>
                </HeaderMargin>
            </Header>
            <MainSection>
                <Thumbnails>
                    <Lezzetus>
                        <LezzetusTitle>Özel<br/>Lezzetus</LezzetusTitle>
                        <LezzetusDescription>Position:Absolute Acı Pizza</LezzetusDescription>
                        <BannerButtons onClick={clickHandler} pizza={pizza}>SİPARİŞ VER</BannerButtons>
                    </Lezzetus>
                    <RightBanners>
                        <Hackathlon>
                            <HackathlonTitle>Hackathlon<br/>Burger Menü</HackathlonTitle>
                            <BannerButtons onClick={clickHandler} pizza={pizza}>SİPARİŞ VER</BannerButtons> 
                        </Hackathlon>
                        <NPM>
                            <NPMTitle><NPMRed>Çoooooook</NPMRed> hızlı<br/>npm gibi kurye</NPMTitle>
                            <BannerButtons onClick={clickHandler} pizza={pizza}>SİPARİŞ VER</BannerButtons> 
                        </NPM>
                    </RightBanners>
                </Thumbnails>
                <MiniHeadLines>
                    <MiniTitle>en çok paketlenen menüler</MiniTitle>
                    <MiniMain>Acıktıran Kodlara Doyuran Lezzetler</MiniMain>
                </MiniHeadLines>
                <MiniHeader>
                    <MiniHeaderItem>
                        <HeaderImg src="/Assets/mile2-aseets/icons/1.svg" />
                        <span>Ramen</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <HeaderImg src="/Assets/mile2-aseets/icons/2.svg" />
                        <span>Pizza</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <HeaderImg src="/Assets/mile2-aseets/icons/3.svg" />
                        <span>Burger</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <HeaderImg src="/Assets/mile2-aseets/icons/4.svg" />
                        <span>French Fries</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <HeaderImg src="/Assets/mile2-aseets/icons/5.svg" />
                        <span>Fast Food</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <HeaderImg src="/Assets/mile2-aseets/icons/6.svg" />
                        <span>Soft Drinks</span>
                    </MiniHeaderItem>
                </MiniHeader>
                <BottomMenuContainer>
                    <BottomMenus>
                        <img src="Assets/mile2-aseets/pictures/food-1.png" />
                        <PizzaName>Terminal Pizza</PizzaName>
                        <RatePrice>
                            <span>4.9</span>
                            <span>(200)</span>
                            <Price>60₺</Price>
                        </RatePrice>
                    </BottomMenus>
                    <BottomMenus>
                        <img src="Assets/mile2-aseets/pictures/food-2.png" />
                        <PizzaName>Position Absolute Acı Pizza</PizzaName>
                        <RatePrice>
                            <Rating>4.9</Rating>
                            <Rating>(928)</Rating>
                            <Price>85₺</Price>
                        </RatePrice>
                    </BottomMenus>
                    <BottomMenus>
                        <img src="Assets/mile2-aseets/pictures/food-3.png" />
                        <PizzaName>useEffect Tavuklu Burger</PizzaName>
                        <RatePrice>
                            <Rating>4.9</Rating>
                            <Rating>(462)</Rating>
                            <Price>75₺</Price>
                        </RatePrice>
                    </BottomMenus>
                </BottomMenuContainer>
            </MainSection>
        </Section>
    )
}