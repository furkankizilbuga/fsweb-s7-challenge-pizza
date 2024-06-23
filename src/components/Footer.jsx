import styled from "styled-components"

const Background = styled.footer`
    background: #292929;
`
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16vw;
    font-family: 'Barlow', sans-serif;
    padding: 3rem 0;
`
const LeftFooter = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 2rem;
    align-items: flex-start;
`

const FooterTitle = styled.h2`
    color: white;
    font-weight: bold;
    font-family: 'Roboto Condensed Variable', sans-serif;
    font-size: 2.1vw;
    padding-bottom: 1rem;
`
const SubTitle = styled.h3`
    color: white;
    padding-bottom: 3rem;
    font-size: 1.2vw;
`
const Address = styled.address`
    display: flex;
    flex-direction: column;
    gap: .7vw;
    border: 1px solid lime;
    font-style: normal;
`
const SubAddress = styled.div`
    display: flex;
    gap: .7vw;
`
const HotMenus = styled.div`
    padding-top: 3vw;
    display: flex;
    flex-direction: column;
    gap: .5vw;
    border: 1px solid lime;
    
`
const HotMenuItems = styled.p`
    font-size: .8vw;
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border: 1px solid lime;
    max-height: 200px;
`

const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #5F5F5F;
    color: white;
    padding: 1rem 16vw;
    
`

const Image = styled.img`
    width: 1.7vw;
    height: 1.7vw;
`
const AddressP = styled.p`
    font-size: .8vw;
`
export default function Footer() {
    return(
        <Background>
            <MainContainer>
                <LeftFooter>
                    <Address>
                        <FooterTitle>Teknolojik <br /> Yemekler</FooterTitle>
                        <SubAddress>
                            <Image src="Assets/mile2-aseets/footer/icons/icon-1.png" />
                            <AddressP>341 Londonderry Road, İstanbul Türkiye</AddressP>
                        </SubAddress>
                        <SubAddress>
                            <Image src="Assets/mile2-aseets/footer/icons/icon-2.png" />
                            <AddressP>aciktim@teknolojikyemekler.com</AddressP>
                        </SubAddress>
                        <SubAddress>
                            <Image src="Assets/mile2-aseets/footer/icons/icon-3.png" />
                            <AddressP>+90 216 123 45 67</AddressP>
                        </SubAddress>
                    </Address>
                    <HotMenus>
                        <SubTitle>Sıccacık Menuler</SubTitle>
                        <HotMenuItems>Terminal Pizza</HotMenuItems>
                        <HotMenuItems>5 Kişilik Hackathlon Pizza</HotMenuItems>
                        <HotMenuItems>useEffect Tavuklu Pizza</HotMenuItems>
                        <HotMenuItems>Beyaz Console Frosty</HotMenuItems>
                        <HotMenuItems>Testler Geçti Mutlu Burger</HotMenuItems>
                        <HotMenuItems>Position Absolute Acı Burger</HotMenuItems>
                    </HotMenus>
                </LeftFooter>
                <div>
                    <SubTitle>Instagram</SubTitle>
                    <ImageContainer>
                        <img src="Assets/mile2-aseets/footer/insta/li-0.png" />
                        <img src="Assets/mile2-aseets/footer/insta/li-1.png" />
                        <img src="Assets/mile2-aseets/footer/insta/li-2.png" />
                        <img src="Assets/mile2-aseets/footer/insta/li-3.png" />
                        <img src="Assets/mile2-aseets/footer/insta/li-4.png" />
                        <img src="Assets/mile2-aseets/footer/insta/li-5.png" />
                    </ImageContainer>
                </div>
            </MainContainer>
            <Copyright>
                <p>© 2023 Teknolojik Yemekler</p>
                <p>twitter</p>
            </Copyright>
        </Background>
    )
}