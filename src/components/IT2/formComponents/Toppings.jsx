import { useEffect, useState } from "react"

export default function Toppings(props) {

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber",
        "Ananas", "Kabak"
    ]

    let initialArray = Array(malzemeler.length).fill(false)

    const [chosen, setChosen] = useState([]);
    const [isCheckedArr, setIsCheckedArr] = useState(initialArray)

    const { formData, setFormData, errors, setErrors } = props;

    const toppingHandler = (event) => {
        if(event.target.checked) {
            setChosen([...chosen, event.target.value])
            let newArr = [...isCheckedArr]
            newArr[event.target.id] = true;
            setIsCheckedArr(newArr)
        } else {
            let updated = chosen.filter(topping => topping !== event.target.value)
            setChosen(updated)
            let newArr = [...isCheckedArr]
            newArr[event.target.id] = false;
            setIsCheckedArr(newArr)
        }
    }

    useEffect(() => {
        setFormData({...formData, "toppings": chosen})
    }, [chosen])

    useEffect(() => {

        if(formData.toppings.length < 4 || formData.toppings.length > 10) {
            setErrors({...errors, "toppings": true})
        } else {
            setErrors({...errors, "toppings": false})
        }


        setErrors(prevErrors => {
            let newErrors = {...prevErrors}
            let { toppings } = newErrors;

            if(formData.toppings.length < 4 || formData.toppings.length > 10) {
                toppings = true;
            } else {
                toppings = false;
            }

            return {...errors, "toppings": toppings}

        }
        
    )
        
    
    }, [formData])


    return(
        <div className="flex flex-col font-barlow gap-4">
            <h2 className="font-semibold text-xl" aria-label="Ek Malzemeler">Ek Malzemeler<span className="text-red-500"> *</span></h2>
            <p className="font-medium">En az 4 ve en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5" data-cy="checkbox-container">
                {malzemeler.map((malzeme, index) => {
                    return (
                        <div className="flex gap-2 font-semibold items-center" data-cy="checkbox-wrapper" key={index}> 
                            <input 
                                onChange={toppingHandler} 
                                checked={isCheckedArr[index]} 
                                value={malzeme} 
                                type="checkbox" 
                                id={index} 
                                name="toppings" 
                                className="opacity-0 w-0 h-0 peer"
                            />
                            <label 
                                htmlFor={index} 
                                className="bg-[#FAF7F2] h-10 w-10 rounded-lg relative hover:bg-[#f8e8bc] flex items-center justify-center cursor-pointer"
                            >
                            <span 
                                className={`absolute text-black text-2xl ${isCheckedArr[index] ? "block" : "hidden"}`}
                                style={{ background: '#FDC913', borderRadius: '5px', paddingLeft: '0.7rem' }}
                            >
                                    ✔
                            </span>
                            </label>
                            <label className="text-muted" data-cy="topping-label" htmlFor={index}>{malzeme}</label>
                        </div>   
                    )})
                }
            </div>
        </div>
    )
}