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
                <div>
                    <div>Özel lezettusz</div>
                    <aside>
                        <div>hackatlon</div>
                        <div>çook hızlı</div>
                    </aside>
                </div>
                <div>
                    <h3>en çok paketlenen</h3>
                    <h2>Acıktıran kodlar</h2>
                </div>
                <div>
                    <div>
                        <img src="" />
                        <span>Ramen</span>
                    </div>
                    <div>
                        <img src="" />
                        <span>Pizza</span>
                    </div>
                    <div>
                        <img src="" />
                        <span>Burger</span>
                    </div>
                    <div>
                        <img src="" />
                        <span>French Fries</span>
                    </div>
                    <div>
                        <img src="" />
                        <span>Fast Food</span>
                    </div>
                    <div>
                        <img src="" />
                        <span>Soft Drinks</span>
                    </div>
                </div>
                <div>
                    <div>Terminal</div>
                    <div>position</div>
                    <div>useEffect</div>
                </div>
            </MainSection>
        </Section>
    )
}