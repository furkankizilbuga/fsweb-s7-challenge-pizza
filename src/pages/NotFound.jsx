import { useHistory } from "react-router-dom";

const NotFound = () => {

    const history = useHistory();

    return(
        <div className="font-barlow mx-auto text-center min-h-screen flex flex-col px-8 md:items-center justify-center gap-2 md:px-0 md:text-xl md:w-full">
            <p className="font-semibold">Aradığınız Sayfa Bulunamadı: 404</p>
            <button onClick={() => history.push("/")} className="bg-[#CE2829] text-ivory rounded py-2 font-semibold md:w-1/4">Ana Sayfaya Git</button>
        </div>
    )
}

export default NotFound;