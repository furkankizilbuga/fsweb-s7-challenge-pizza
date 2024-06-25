import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Background = styled.footer`
    background: #292929;
`
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16vw;
    font-family: 'Barlow', sans-serif;
    padding: 3rem 0;
    
    @media(max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`
const SubTitle = styled.h3`
    color: white;
    font-weight: 600;
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
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

const RightFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const LeftFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9rem;
`
const Address = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 300px;
`
const AddressItem = styled.div`
    display: flex;
    color: white;
    gap: 1vw;
`
const LeftBottom = styled.div`
    display: flex;
    color: white;
    gap: 1vw;
    @media(max-width: 1200px) {
        gap: 2.3vw;
    }
`
const HotMenus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
`
const InstaImg = styled.img`
    width: 100%;
    height: auto;
    @media(max-width: 1200px) {
        width: 100%;
    }
`

export default function Footer() {
    return(
        <Background>
            <MainContainer>
                <LeftFooter>
                    <HeaderWrapper>
                        <img src="Assets/mile2-aseets/footer/logo-footer.svg" />
                        <SubTitle>Hot Menu</SubTitle>
                    </HeaderWrapper>
                    <LeftBottom>
                        <Address>
                            <AddressItem>
                                <Image src="Assets/mile2-aseets/footer/icons/icon-1.png" />
                                <span>341 Londonderry Road, Istanbul Türkiye</span>
                            </AddressItem>
                            <AddressItem>
                                <Image src="Assets/mile2-aseets/footer/icons/icon-2.png" />
                                <span>aciktim@teknolojikyemekler.com</span>
                            </AddressItem>
                            <AddressItem>
                                <Image src="Assets/mile2-aseets/footer/icons/icon-3.png" />
                                <span>+90 216 123 45 67</span>
                            </AddressItem>
                        </Address>
                        <HotMenus>
                            <p>Terminal Pizza</p>
                            <p>5 Kişlik Hackathlon Pizza</p>
                            <p>useEffect Tavuklu Pizza</p>
                            <p>Beyaz Console Frosty</p>
                            <p>Testler Geçti Mutlu Burger</p>
                            <p>Position Absolute Acı Burger</p>
                        </HotMenus>
                    </LeftBottom>
                </LeftFooter>
                <RightFooter>
                    <SubTitle>Instagram</SubTitle>
                    <ImageContainer>
                        <InstaImg src="Assets/mile2-aseets/footer/insta/li-0.png" />
                        <InstaImg src="Assets/mile2-aseets/footer/insta/li-1.png" />
                        <InstaImg src="Assets/mile2-aseets/footer/insta/li-2.png" />
                        <InstaImg src="Assets/mile2-aseets/footer/insta/li-3.png" />
                        <InstaImg src="Assets/mile2-aseets/footer/insta/li-4.png" />
                        <InstaImg src="Assets/mile2-aseets/footer/insta/li-5.png" />
                    </ImageContainer>
                </RightFooter>
            </MainContainer>
            <Copyright>
                <p>© 2023 Teknolojik Yemekler</p>
                <FontAwesomeIcon style={{cursor: "pointer"}} icon={faTwitter} />
            </Copyright>
        </Background>
    )
}