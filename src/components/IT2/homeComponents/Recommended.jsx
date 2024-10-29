import Choices from "./Choices";

export default function Recommended() {

    const customCSS = "bg-white"

    return(
        <div className="bg-ivory flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <h3 className="font-satisfy text-red-500 text-lg">en çok paketlenen menüler</h3>
                <h2 className="text-2xl font-bold font-barlow text-center">Acıktıran Kodlara Doyuran Lezzetler</h2>
            </div>
            <div>
                <Choices customCSS={customCSS} />
                <div className="flex gap-10 font-barlow flex-row items-center justify-center pb-20 flex-wrap">
                    <div className="bg-white rounded-md px-8 py-4 shadow">
                        <img className="w-48" src="Assets/mile2-aseets/pictures/food-1.png" />
                        <h4 className="text-lg font-semibold">Terminal Pizza</h4>
                        <div className="flex justify-between">
                            <p>4.9</p>
                            <p>(200)</p>
                            <p className="font-bold">60₺</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md px-8 py-4 shadow">
                        <img className="w-48" src="Assets/mile2-aseets/pictures/food-2.png" />
                        <h4 className="text-lg font-semibold">Position Absolute Acı Pizza</h4>
                        <div className="flex justify-between">
                            <p>4.9</p>
                            <p>(928)</p>
                            <p>85₺</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md px-8 py-4 shadow">
                        <img className="w-48" src="Assets/mile2-aseets/pictures/food-3.png" />
                        <h4 className="text-lg font-semibold">useEffect Tavuklu Burger</h4>
                        <div className="flex justify-between">
                            <p>4.9</p>
                            <p>(462)</p>
                            <p>75₺</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}