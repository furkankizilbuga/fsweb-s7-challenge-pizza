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
    gap: 1rem;
    
`
const ItemImage = styled.img`
    width: 2vw;
`

const ItemName = styled.span`
    font-family: "Barlow", sans-serif;
    font-weight: bold;
    font-size: 1vw;
`

const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    margin: 0 25vw;
    border: 1px solid lime;
`

const Thumbnails = styled.div`
    display: flex;
    gap: 10px;
`
const Lezzetus = styled.div`
    background-image: url("Assets/mile2-aseets/cta/kart-1.png");
`
const Hackathlon = styled.div`
    background-image: url("Assets/mile2-aseets/cta/kart-2.png");
`
const NPM = styled.div`
    background-image: url("Assets/mile2-aseets/cta/kart-3.png");
`
const RightBanners = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const BannerButtons = styled.button`
    background: white;
    color: #CE2829;
`
const MiniTitle = styled.h3`
    color: #CE2829;
    font-family: 'Satisfy', cursive;
`
const MiniHeader = styled.div`
    display: flex;
    gap: 1vw;
    font-family: "Barlow", sans-serif;
`
const MiniHeaderItem = styled.div`
    background: white;
    padding: .5rem .6vw;
    display: flex;
    align-items: center;
`


const BottomMenus = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 2rem;
    border-radius: 10px;
`

const BottomMenuContainer = styled.div`
    display: flex;
    gap: 1rem;
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

export default function SecondSection() {
    return(
        <Section>
            <Header>
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
            </Header>
            <MainSection>
                <Thumbnails>
                    <Lezzetus>
                        <h3>Özel<br/>Lezzetus</h3>
                        <p>Position:Absolute Acı Pizza</p>
                        <BannerButtons>SİPARİŞ VER</BannerButtons>
                    </Lezzetus>
                    <RightBanners>
                        <Hackathlon>
                            <h4>Hackathlon<br/>Burger Menü</h4>
                            <BannerButtons>SİPARİŞ VER</BannerButtons> 
                        </Hackathlon>
                        <NPM>
                            <h4>Çoooooook hızlı<br/>npm gibi kurye</h4>
                            <BannerButtons>SİPARİŞ VER</BannerButtons> 
                        </NPM>
                    </RightBanners>
                </Thumbnails>
                <div>
                    <MiniTitle>en çok paketlenen menüler</MiniTitle>
                    <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
                </div>
                <MiniHeader>
                    <MiniHeaderItem>
                        <img src="/Assets/mile2-aseets/icons/1.svg" />
                        <span>Ramen</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <img src="/Assets/mile2-aseets/icons/2.svg" />
                        <span>Pizza</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <img src="/Assets/mile2-aseets/icons/3.svg" />
                        <span>Burger</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <img src="/Assets/mile2-aseets/icons/4.svg" />
                        <span>French Fries</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <img src="/Assets/mile2-aseets/icons/5.svg" />
                        <span>Fast Food</span>
                    </MiniHeaderItem>
                    <MiniHeaderItem>
                        <img src="/Assets/mile2-aseets/icons/6.svg" />
                        <span>Soft Drinks</span>
                    </MiniHeaderItem>
                </MiniHeader>
                <BottomMenuContainer>
                    <BottomMenus>
                        <img src="Assets/mile2-aseets/pictures/food-1.png" />
                        <p>Terminal Pizza</p>
                        <RatePrice>
                            <span>4.9</span>
                            <span>(200)</span>
                            <Price>60₺</Price>
                        </RatePrice>
                    </BottomMenus>
                    <BottomMenus>
                        <img src="Assets/mile2-aseets/pictures/food-2.png" />
                        <p>Position Absolute Acı Pizza</p>
                        <RatePrice>
                            <Rating>4.9</Rating>
                            <Rating>(928)</Rating>
                            <Price>85₺</Price>
                        </RatePrice>
                    </BottomMenus>
                    <BottomMenus>
                        <img src="Assets/mile2-aseets/pictures/food-3.png" />
                        <p>useEffect Tavuklu Burger</p>
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