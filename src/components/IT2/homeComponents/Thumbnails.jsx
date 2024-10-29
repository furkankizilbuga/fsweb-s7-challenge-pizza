export default function Thumbnails(props) {

    const { clickHandler, pizza } = props;

    return(
        <div className="bg-ivory flex flex-col gap-4 px-4 py-12">
            <div className="rounded-md bg-[url('Assets/mile2-aseets/cta/kart-1.png')] bg-cover bg-center h-40">
                <div className="flex flex-col items-start justify-center gap-2 h-full px-5">
                    <div className="flex flex-col text-white font-semibold text-wrap">
                        <p className="font-quattrocento text-xl">Özel Lezzetus <br /> <span className="font-sans text-sm">Acı Pizza</span></p>
                    </div>
                    <button className="bg-white rounded-full py-1 px-4 text-xs text-red-500 font-medium" onClick={clickHandler} pizza={pizza}>SİPARİŞ VER</button>
                </div>
            </div>
            <div className="rounded-md bg-[url('Assets/mile2-aseets/cta/kart-2.png')] bg-cover bg-center h-40">
                <div className="flex flex-col items-start justify-center gap-2 h-full px-5">
                    <p className="text-white text-xl font-quattrocento font-semibold">Hackathlon<br/><span className="font-sans text-sm">Burger Menü</span></p>
                    <button className="bg-white rounded-full py-1 px-4 text-xs text-red-500 font-medium" onClick={clickHandler} pizza={pizza}>SİPARİŞ VER</button> 
                </div>
            </div>
            <div className="rounded-md bg-[url('Assets/mile2-aseets/cta/kart-3.png')] bg-cover bg-center h-40">
                <div className="flex flex-col items-start justify-center gap-2 h-full px-5">
                    <p className="font-semibold"><span className="text-red-500">Çoooooook</span> hızlı<br/>npm gibi kurye</p>
                    <button className="bg-white rounded-full py-1 px-4 text-xs text-red-500 font-medium" onClick={clickHandler} pizza={pizza}>SİPARİŞ VER</button> 
                </div>
            </div>
        </div>
    )
}