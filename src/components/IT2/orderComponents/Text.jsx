export default function Text(props) {

    const { setFormData, formData, setErrors, errors } = props;

    const textInputHandler = (event) => {
        if(event.target.name === "name"){
            if(event.target.value === "") {
                setErrors({...errors, [event.target.name]: true})
            } 
            if(event.target.value.length > 2) {
                setErrors({...errors, [event.target.name]: false})
            }
            setFormData({...formData, [event.target.name]: event.target.value})
        } else {
            setFormData({...formData, [event.target.name]: event.target.value})
        }

        console.log(errors)
    }


    return(
        <div className="flex flex-col font-barlow py-12 border-b border-muted">
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-xl" aria-label="İsim">İsim<span className="text-red-500"> *</span></label>
                <input className="py-2 px-4 rounded bg-[#FAF7F2] placeholder-[#5F5F5F]  placeholder:font-bold placeholder:text-sm" data-cy="name-input" id="name" name="name" placeholder="Lütfen en az 3 haneli bir isim giriniz." type="text" value={formData.name} onChange={textInputHandler} /><br />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" aria-label="Sipariş Notu">Sipariş Notu</label>
                <input className="py-2 px-4 rounded bg-[#FAF7F2] placeholder-[#5F5F5F] placeholder:font-bold placeholder:text-sm" id="note" name="note" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" value={formData.note} onChange={textInputHandler} />
            </div>
        </div>
    )
}