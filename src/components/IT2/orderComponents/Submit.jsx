import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function Submit(props) {

    const { price, setFormData, formData, isValid } = props;

    const [count, setCount] = useState(1);
    const history = useHistory();

    const countHandler = (event) => {
        console.log(formData)
        event.preventDefault();
        
        if(event.target.id === "increase") {
            setCount(count + 1)
        } else {
            if(count > 1) {
                setCount(count - 1) 
            }     
        }

        console.log(formData)
        
    }
    
    useEffect(() => {  
        const total = price * count + formData.toppings.length * 5 * count;      
        setFormData({...formData, count, total})
    }, [count, formData.toppings.length])

    const submitHandler = () => {
        history.push("/success")
    }


    return(
        <div className="flex flex-col items-center py-10 gap-8 font-barlow">
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
                            <span>{formData.toppings.length * 5 * count}₺</span>
                        </div>
                        <div className="flex justify-between text-red-500">
                            <span>Toplam</span>
                            <span>{price * count + formData.toppings.length * 5 * count}₺</span>
                        </div>
                    </div>
                </div>
                <button disabled={!isValid} className={`bg-[#FDC913] cursor-pointer rounded-b-md py-2 ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`} aria-label="Sipariş Ver" data-cy="form-submit" onClick={submitHandler} type="submit">SİPARİŞ VER</button>
                {!isValid && <span className="text-red-500 text-center text-sm mx-8 mt-4" data-cy="error-message">Lütfen * ile belirtilmiş alanları doldurunuz.</span>}
            </div>
        </div>
    )
}