import { useHistory } from "react-router-dom";

export default function Hero(props) {

    const { formData, setFormData, pizza } = props;

    let history = useHistory();

    const clickHandler = (event) => {
        history.push("/order")
        setFormData({...formData, "pizza": event.target.pizza})
    }

    return(
        <main className="flex items-center justify-center bg-red-600 h-96 bg-[url('../Assets/mile1-assets/home-banner.png')] bg-contain bg-no-repeat bg-bottom sm:bg-cover sm:items-start sm:py-52 sm:bg-center sm:h-screen">
            <div className="flex flex-col items-center gap-4 sm:gap-8">
                <h1 className="text-white font-semibold text-2xl md:text-4xl font-barlow text-center">Teknolojik Yemekler</h1>
                <div className="flex flex-col items-center text-center">
                    <p className="text-white font-semibold text-2xl md:text-4xl">KOD ACIKTIRIR <br /> PİZZA DOYURUR </p>
                </div>
                <button className="font-medium shadow bg-[#FDC913] hover:bg-[#fdab13] px-5 py-2 rounded-full text-sm md:px-10 md:py-3 md:text-lg" data-cy="home-button" onClick={clickHandler} pizza={pizza} aria-label="order">ACIKTIM</button>
            </div>
        </main>
    )
}