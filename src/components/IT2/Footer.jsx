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
        <footer className="bg-[#292929] py-12">
            <div className="flex flex-col items-start mx-6 gap-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-white text-2xl">Teknolojik Yemekler</h2>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center text-white gap-2 text-sm">
                                <img className="w-4" src="Assets/mile2-aseets/footer/icons/icon-1.png" />
                                <span>341 Londonderry Road, Istanbul Türkiye</span>
                            </div>
                            <div className="flex items-center text-white gap-2 text-sm">
                                <img className="w-4" src="Assets/mile2-aseets/footer/icons/icon-2.png" />
                                <span>aciktim@teknolojikyemekler.com</span>
                            </div>
                            <div className="flex items-center text-white gap-2 text-sm">
                                <img className="w-4" src="Assets/mile2-aseets/footer/icons/icon-3.png" />
                                <span>+90 216 123 45 67</span>
                            </div>
                        </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <img className="w-20 h-20" src="Assets/mile2-aseets/footer/insta/li-0.png" />
                    <img className="w-20 h-20" src="Assets/mile2-aseets/footer/insta/li-1.png" />
                    <img className="w-20 h-20" src="Assets/mile2-aseets/footer/insta/li-2.png" />
                    <img className="w-20 h-20" src="Assets/mile2-aseets/footer/insta/li-3.png" />
                    <img className="w-20 h-20" src="Assets/mile2-aseets/footer/insta/li-4.png" />
                    <img className="w-20 h-20" src="Assets/mile2-aseets/footer/insta/li-5.png" />
                </div>
                <div className="flex items-center gap-10">
                    <p className="text-white text-sm">© 2023 Teknolojik Yemekler</p>
                    <FontAwesomeIcon className="cursor-pointer text-blue-400" icon={faTwitter} />
                </div>
            </div>
        </footer>
    )
}