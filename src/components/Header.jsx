import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <h1>Teknolojik Yemekler</h1>
            <nav>
                <Link to="/">Anasayfa</Link>
                <span>-</span>
                <Link to="/order">Sipariş Oluştur</Link>
            </nav>
        </header>
    )
}