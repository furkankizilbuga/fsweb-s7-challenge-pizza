import { useEffect, useState } from "react";

export default function SizeAndCrust(props) {
    const { setFormData, formData } = props;

    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");

    const sizeHandler = (event) => {
        setSize(event.target.value);
    };

    useEffect(() => {
        setFormData({ ...formData, size });
    }, [size]);

    const crustHandler = (event) => {
        setCrust(event.target.value);
    };

    useEffect(() => {
        setFormData({ ...formData, crust });
    }, [crust]);

    return (
        <div className="flex flex-col gap-10 font-barlow py-12">
            <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl" aria-label="Boyut Seç">
                    Boyut Seç<span className="text-red-500"> *</span>
                </label>
                <div className="flex gap-4 items-center">
                    {["Küçük", "Orta", "Büyük"].map((sizeOption) => (
                        <div key={sizeOption}>
                            <input
                                className="absolute w-px h-px m-[-1px] p-0 overflow-hidden clip-rect border-0"
                                data-cy={`radio-${sizeOption.toLowerCase()}`}
                                onChange={sizeHandler}
                                checked={size === sizeOption}
                                value={sizeOption}
                                type="radio"
                                name="size"
                                id={sizeOption}
                            />
                            <label
                                className={`flex items-center justify-center font-medium bg-[#FAF7F2] w-[3rem] h-[3rem] rounded-full relative hover:bg-[#f8e8bc] ${size === sizeOption ? "bg-[#f8e8bc]" : ""}`}
                                htmlFor={sizeOption}
                            >
                                {sizeOption === "Küçük" ? "S" : sizeOption === "Orta" ? "M" : "L"}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <label className="font-semibold text-xl" aria-label="Hamur Seç">
                    Hamur Seç<span className="text-red-500"> *</span>
                </label>
                <select
                    className="text-muted bg-[#FAF7F2] font-semibold py-4 px-2"
                    data-cy="dropdown"
                    onChange={crustHandler}
                    value={crust || "default"}
                    name="crust"
                    id="crust"
                    required
                >
                    <option id="default" value="default" disabled hidden>
                        - Hamur Kalınlığı Seç -
                    </option>
                    <option data-cy="ince" value="İnce" id="ince">
                        İnce
                    </option>
                    <option data-cy="orta" value="Orta" id="orta">
                        Orta
                    </option>
                    <option data-cy="kalin" value="Kalın" id="kalın">
                        Kalın
                    </option>
                </select>
            </div>
        </div>
    );
}
