export default function Text() {
    return(
        <>
            <div>
                <label>İsim</label>
                <input placeholder="Lütfen isminizi giriniz." type="text" />
            </div>
            <div>
                <label>Sipariş Notu</label>
                <input placeholder="Siparişinize eklemek istediğiniz bir not var mı?" type="text" />
            </div>
        </>
    )
}