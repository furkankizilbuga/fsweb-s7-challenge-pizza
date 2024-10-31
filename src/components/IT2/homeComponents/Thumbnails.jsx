export default function Thumbnails(props) {
    const { clickHandler, pizza } = props;

    return (
        <div className="bg-ivory flex justify-center py-12 md:py-20">
            <div className="p-4 grid grid-cols-1 gap-y-4 md:grid-cols-4 md:grid-rows-2 place-items-center md:w-[850px]">
                <div className="rounded-md relative md:col-span-2 md:row-span-2 flex items-center justify-center">
                    <div className="relative">
                        <img 
                            className="w-96 object-cover rounded" 
                            src='Assets/mile2-aseets/cta/kart-1.png' 
                            alt="Özel Lezzetus"
                        />
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                            <div className="flex flex-col text-white font-semibold">
                                <p className="font-quattrocento text-2xl">
                                    Özel Lezzetus <br /> 
                                    <span className="font-sans text-sm sm:text-base">Acı Pizza</span>
                                </p>
                            </div>
                            <button 
                                className="bg-white rounded-full py-1 px-4 text-xs md:text-sm text-red-500 font-medium hover:bg-red-50" 
                                onClick={clickHandler} 
                                pizza={pizza}
                                data-cy="order-button"
                            >
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rounded-md relative md:col-span-2 flex items-center justify-center">
                    <div className="relative">
                        <img 
                            className="w-96 object-cover rounded" 
                            src='Assets/mile2-aseets/cta/kart-2.png' 
                            alt="Hackathlon Burger"
                        />
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                            <p className="text-white font-quattrocento font-semibold text-md md:text-xl">
                                Hackathlon<br/>
                                <span className="font-sans text-base">Burger Menü</span>
                            </p>
                            <button 
                                className="bg-white rounded-full py-1 px-4 text-xs md:text-sm text-red-500 font-medium hover:bg-red-50" 
                                onClick={clickHandler} 
                                pizza={pizza}
                                data-cy="order2-button"
                            >
                                SİPARİŞ VER
                            </button> 
                        </div>
                    </div>
                </div>

                <div className="rounded-md relative md:col-span-2 flex items-center justify-center">
                    <div className="relative">
                        <img 
                            className="w-96 object-cover rounded" 
                            src='Assets/mile2-aseets/cta/kart-3.png' 
                            alt="Hızlı Teslimat"
                        />
                        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                            <p className="font-semibold text-sm md:text-lg">
                                <span className="text-red-500">Çoooooook</span> hızlı<br/>
                                npm gibi kurye
                            </p>
                            <button 
                                className="bg-white rounded-full py-1 px-4 text-xs md:text-sm text-red-500 font-medium hover:bg-red-50" 
                                onClick={clickHandler} 
                                pizza={pizza}
                                data-cy="order3-button"
                            >
                                SİPARİŞ VER
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}