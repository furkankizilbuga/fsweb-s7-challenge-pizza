import { useHistory } from "react-router-dom"

export default function Header() {

    const history = useHistory();

    return(
        <header className="bg-[#CE2829] p-4">
            <h1 onClick={() => history.push("/")} className="text-white cursor-pointer font-roboto font-semibold text-xl md:text-3xl text-center">Teknolojik Yemekler</h1>
        </header>
    )
}