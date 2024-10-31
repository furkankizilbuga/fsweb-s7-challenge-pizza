import { Link } from "react-router-dom"

export default function PizzaInfo(props) {
    const { formData } = props;
    
    if (!formData.pizza) {
        return <div>Loading...</div>;
    }

    const { name, price, rating, ratingCount, description } = formData.pizza

    return(
        <div className="bg-ivory px-8 pb-12 font-barlow">
            <div className="flex flex-col items-center gap-4">
                <img className="w-48 mb-10" src="Assets/mile2-aseets/pictures/form-banner.png" />
                <nav className="w-full flex gap-2 text-sm ">
                    <Link 
                        aria-label="Ana Sayfa" 
                        to="/">Anasayfa</Link>
                    <span className="font-bold"> - </span>
                    <Link 
                        aria-label="Sipariş Oluştur" 
                        to="/order"
                        className="font-semibold">Sipariş Oluştur</Link>
                </nav>
                <h2 className=" w-full font-semibold">{name}</h2>
                <div className="flex items-center  w-full justify-between">
                    <p className="font-semibold text-xl">{price}₺</p>
                    <div className="flex gap-8 text-muted">
                        <span>{rating}</span>
                        <span>{ratingCount}</span>
                    </div>
                </div>
                <p className="text-muted ">
                    {description}
                </p>
            </div>
        </div>
    )
}