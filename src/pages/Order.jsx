import { useState } from "react";
import { Link } from "react-router-dom"

export default function Order(props) {

    const { pizzas } = props;

    const { id, name, price, rating, ratingCount, description } = pizzas[0]

    const malzemeler = [
        "Pepperoni", "Sosis", "Kanada Jambonu",
        "Tavuk Izgara", "Soğan", "Domates", "Mısır",
        "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk",
        "Ananas", "Kabak"
    ]

    const [count, setCount] = useState(1);

    return(
        <>
            <header>
                <h1>Teknolojik Yemekler</h1>
                <nav>
                    <Link to="/">Anasayfa</Link>
                    <span>-</span>
                    <Link to="/order">Sipariş Oluştur</Link>
                </nav>
            </header>
            <form>
                <h2>{name}</h2>
                <div>
                    <p>{price}</p>
                    <div>
                        <span>{rating}</span>
                        <span>{ratingCount}</span>
                    </div>
                </div>
                <p>
                    {description}
                </p>
                <div>
                    <div>
                        <label>Boyut Seç<span>*</span></label>
                        <div>
                            <span>
                                <input type="radio" name="boyut" id="küçük" />
                                <label for="küçük" >Küçük</label>
                            </span>
                            <span>
                                <input type="radio" name="boyut" id="orta" />
                                <label for="orta" >Orta</label>
                            </span>
                            <span>
                                <input type="radio" name="boyut" id="büyük" />
                                <label for="büyük" >Büyük</label>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label>Hamur Seç<span>*</span></label>
                        <select name="hamur" id="hamur" required >
                            <option disabled selected hidden >Hamur Kalınlığı</option>
                            <option>İnce</option>
                            <option>Orta</option>
                            <option>Kalın</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h3>Ek Malzemeler</h3>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
                    <div>
                        {malzemeler.map((malzeme) => {
                            return <>
                                <input type="checkbox" id={malzeme} name={malzeme} />
                                <label for={malzeme}>{malzeme}</label>
                            </>
                        })}
                    </div>
                </div>
                <div>
                    <label>Sipariş Notu</label>
                    <input type="text" />
                </div>
                <div>
                    <div>
                        <button>-</button>
                        <span>{count}</span>
                        <button>+</button>
                    </div>
                    <div>
                        <div>
                            <h3>Sipariş Toplamı</h3>
                            <div>
                                <div>
                                    <span>Seçimler</span>
                                    <span>25.00TL</span>
                                </div>
                                <div>
                                    <span>Toplam</span>
                                    <span>110.50TL</span>
                                </div>
                            </div>
                        </div>
                        <button type="submit">SİPARİŞ VER</button>
                    </div>
                </div>
            </form>
        </>
    )
}