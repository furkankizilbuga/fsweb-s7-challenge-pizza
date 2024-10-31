import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useFormContext } from "../../../context/FormContext";

export default function Submit() {

    const { isValid, setValue, watch, getValues } = useFormContext();

    const count = watch("count") || 1;
    const toppings = watch("toppings") || [];
    const total = watch("total") || 0;
    const pizza = watch("pizza") || { price: 0 };

    const countHandler = (event) => {
        event.preventDefault();
        if (event.target.id === "increase") {
            setValue("count", count + 1);
        } else if (count > 1) {
            setValue("count", count - 1);
        }

        console.log("Form Values:", getValues());
    };

    useEffect(() => {
        const pizzaPrice = typeof pizza.price === "number" ? pizza.price : 0;
        const calculatedTotal = (pizzaPrice * count) + (toppings.length * count * 5);
        setValue("total", calculatedTotal);
    }, [count, toppings, pizza.price, setValue]);

    const selections = toppings.length * 5 * count;

    return(
        <div className="flex flex-col items-center pt-10 gap-8 font-barlow">
            <div className="flex w-full justify-center items-center">
                <button className="bg-ivory p-4 rounded-l-md" aria-label="Adet azalt" id="decrease" onClick={countHandler} >-</button>
                <span className="bg-ivory p-4 px-5">{count}</span>
                <button className="bg-ivory p-4 rounded-r-md" aria-label="Adet arttır" id="increase" onClick={countHandler} >+</button>
            </div>
            <div className="flex flex-col font-semibold w-full">
                <div className="bg-ivory p-4 flex flex-col gap-8 rounded-t-md">
                    <h2 className="font-semibold text-lg">Sipariş Toplamı</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-muted">
                            <span>Seçimler</span>
                            <span>{selections}₺</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Toplam</span>
                            <span>{total}₺</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}