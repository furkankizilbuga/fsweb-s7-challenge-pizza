import { useFormContext } from "../../../context/FormContext";

export default function Text() {

    const { errors, register } = useFormContext();

    return(
        <div className="flex flex-col font-barlow py-12 border-b border-muted">
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-xl" aria-label="İsim">İsim<span className="text-red-500"> *</span></label>
                <input 
                    {...register("name", { 
                        required: true, 
                        minLength: 3 
                    })}
                    className="py-2 px-4 rounded bg-[#FAF7F2] placeholder-[#5F5F5F]  placeholder:font-bold placeholder:text-sm" data-cy="name-input" placeholder="Lütfen en az 3 haneli bir isim giriniz." type="text" /><br />
                {errors.name && <span className="text-red-500 text-sm">Lütfen en az 3 haneli bir isim giriniz.</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xl font-semibold" aria-label="Sipariş Notu">Sipariş Notu</label>
                <input 
                    {...register("note")}
                    className="py-2 px-4 rounded bg-[#FAF7F2] placeholder-[#5F5F5F] placeholder:font-bold placeholder:text-sm" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" />
            </div>
        </div>
    )
}