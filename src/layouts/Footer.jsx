import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <footer className="bg-[#292929] py-12">
            <div className="flex flex-col items-start mx-6 gap-10 sm:flex-row sm:items-center sm:justify-center">
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