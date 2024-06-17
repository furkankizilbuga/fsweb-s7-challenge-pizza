export default function SizeAndCrust() {
    return(
        <div>
            <div>
                <label>Boyut Seç<span>*</span></label>
                <div>
                    <span>
                        <input type="radio" name="boyut" id="küçük" />
                        <label htmlFor="küçük" >Küçük</label>
                    </span>
                    <span>
                        <input type="radio" name="boyut" id="orta" />
                        <label htmlFor="orta" >Orta</label>
                    </span>
                    <span>
                        <input type="radio" name="boyut" id="büyük" />
                        <label htmlFor="büyük" >Büyük</label>
                    </span>
                </div>
            </div>
            <div>
                <label>Hamur Seç<span>*</span></label>
                <select name="hamur" id="hamur" required >
                    <option id="default" disabled selected hidden >Hamur Kalınlığı</option>
                    <option id="ince">İnce</option>
                    <option id="orta">Orta</option>
                    <option id="kalın">Kalın</option>
                </select>
            </div>
        </div>
    )
}