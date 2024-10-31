import { useFormContext } from "../../../context/FormContext";

export default function Thumbnails(props) {
    const { clickHandler } = props;

    const { pizzas } = useFormContext();

    return (
        <div className="bg-ivory flex justify-center py-12 md:py-20">
            <div className="p-4 grid grid-cols-1 gap-y-4 md:grid-cols-4 md:grid-rows-2 place-items-center md:w-[850px]">

                {
                    pizzas.map((pizza, index) => {
                        return (
                            <div key={pizza.id} className={(index === 1 || index === 2) ? "rounded-md relative md:col-span-2 flex items-center justify-center" : "rounded-md relative md:col-span-2 md:row-span-2 flex items-center justify-center"}>
                                <div className="relative">
                                    <img 
                                        className="w-96 object-cover rounded" 
                                        src={pizza.img} 
                                        alt="Özel Lezzetus"
                                    />
                                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 max-w-40">
                                        <div className="flex flex-col text-white font-semibold">
                                            <p className={`font-quattrocento text-2xl ${index == 2 && "text-red-500"}`}>
                                                {pizza.name} <br /> 
                                                <span className={`font-sans text-sm sm:text-base ${index == 2 && "text-black"}`}>{pizza.mini}</span>
                                            </p>
                                        </div>
                                        <button 
                                            className="bg-white rounded-full py-1 px-4 text-xs md:text-sm text-red-500 font-medium max-w-28 min-w-28 hover:bg-red-50" 
                                            onClick={(event) => clickHandler(event, pizza)} 
                                            pizza={pizza}
                                            data-cy={`order-button-${index}`}
                                        >
                                            SİPARİŞ VER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}