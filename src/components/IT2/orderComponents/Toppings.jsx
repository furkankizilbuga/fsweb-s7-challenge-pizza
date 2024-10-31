import { useFormContext } from "../../../context/FormContext";

export default function Toppings() {
    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ];

    const { register, watch, errors } = useFormContext();
    
    const selectedToppings = watch("toppings") || [];

    return (
        <div className="flex flex-col font-barlow gap-4">
            <h2 className="font-semibold text-xl" aria-label="Ek Malzemeler">
                Ek Malzemeler<span className="text-red-500"> *</span>
            </h2>
            <p className="font-medium">En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5" data-cy="checkbox-container">
                {malzemeler.map((malzeme, index) => (
                    <div 
                        className="flex gap-2 font-semibold items-center" 
                        data-cy="checkbox-wrapper" 
                        key={index}
                    > 
                        <input 
                            {...register("toppings", {
                                required: "En az 4 malzeme seçilmelidir.",
                                validate: {
                                    length: (value) => 
                                        (value && value.length >= 4 && value.length <= 10) || 
                                        "En az 4 ve en fazla 10 malzeme seçebilirsiniz."
                                }
                            })}
                            type="checkbox" 
                            id={`topping-${index}`} 
                            value={malzeme} 
                            className="opacity-0 w-0 h-0 peer"
                        />
                        <label 
                            htmlFor={`topping-${index}`} 
                            className={`bg-[#FAF7F2] h-10 w-10 rounded-lg relative hover:bg-[#f8e8bc] flex items-center justify-center cursor-pointer 
                                ${selectedToppings.includes(malzeme) ? 'bg-[#f8e8bc]' : ''}`}
                        >
                            {selectedToppings.includes(malzeme) && (
                                <span 
                                    className="absolute text-black text-2xl"
                                    style={{ background: '#FDC913', borderRadius: '5px', paddingLeft: '0.7rem' }}
                                >
                                    ✔
                                </span>
                            )}
                        </label>
                        <label className="text-muted" data-cy="topping-label" htmlFor={`topping-${index}`}>
                            {malzeme}
                        </label>
                    </div>   
                ))}
            </div>
            {errors.toppings && (
                <span className="text-red-500 text-sm">
                    {errors.toppings.message}
                </span>
            )}
        </div>
    );
}