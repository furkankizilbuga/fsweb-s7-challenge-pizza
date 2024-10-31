import { useEffect } from "react";
import { useFormContext } from "../../../context/FormContext";

export default function SizeAndCrust() {
    const sizes = ["Küçük", "Orta", "Büyük"];
    const crusts = ["İnce", "Orta", "Kalın"];

    const { errors, register, watch } = useFormContext();

    return (
        <div className="flex flex-col gap-10 font-barlow py-12">
            <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl" aria-label="Boyut Seç">
                    Boyut Seç<span className="text-red-500"> *</span>
                </label>
                <div className="flex gap-4 items-center">
                    {sizes.map((size, index) => (
                        <div key={index} className="relative">
                            <input
                                id={`size-${size}`}
                                className="absolute w-px h-px m-[-1px] p-0 overflow-hidden clip-rect border-0"
                                data-cy={`radio-${size.toLowerCase()}`}
                                type="radio"
                                value={size}
                                {...register("size", { required: true })}
                            />
                            <label
                                htmlFor={`size-${size}`}
                                className={`flex items-center justify-center font-medium bg-[#FAF7F2] w-[3rem] h-[3rem] rounded-full relative hover:bg-[#f8e8bc] cursor-pointer 
                                    ${watch("size") === size ? 'bg-[#ffd768] border-2 ' : ''}`}
                            >
                                {size === "Küçük" ? "S" : size === "Orta" ? "M" : "L"}
                            </label>
                        </div>
                    ))}
                </div>
                {errors.size && <span className="text-red-500">Boyut seçimi zorunludur</span>}
            </div>
            <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl" aria-label="Hamur Seç">
                    Hamur Seç<span className="text-red-500"> *</span>
                </label>
                <select
                    className="text-muted bg-[#FAF7F2] font-semibold py-4 px-2"
                    data-cy="dropdown"
                    {...register("crust", { required: true })}
                    defaultValue=""
                >
                    <option value="" disabled hidden>
                        - Hamur Kalınlığı Seç -
                    </option>
                    {crusts.map((crust, index) => (
                        <option key={index} value={crust} data-cy={crust.toLowerCase()}>
                            {crust}
                        </option>
                    ))}
                </select>
                {errors.crust && <span className="text-red-500">Hamur seçimi zorunludur</span>}
            </div>
        </div>
    );
}