import { useHistory } from "react-router-dom";

export default function Hero(props) {

    const { formData, setFormData, pizza } = props;

    let history = useHistory();

    const clickHandler = (event) => {
        history.push("/order")
        setFormData({...formData, "pizza": event.target.pizza})
    }

    return(
        <main className="flex py-12 justify-center h-96 bg-[url('../Assets/mile1-assets/home-banner.png')] bg-cover bg-center bg-purple-500">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-white font-semibold text-2xl text-center">Teknolojik Yemekler</h1>
                <div className="flex flex-col items-center text-center">
                    <p className="text-white font-semibold text-2xl">KOD ACIKTIRIR <br /> PİZZA DOYURUR </p>
                </div>
                <button className="font-medium bg-[#FDC913] hover:bg-[#fdab13] px-5 py-2 rounded-full text-sm" data-cy="home-button" onClick={clickHandler} pizza={pizza} aria-label="order">ACIKTIM</button>
            </div>
        </main>
    )
}