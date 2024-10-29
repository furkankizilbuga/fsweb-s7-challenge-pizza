export default function Choices(props) {

    const { customCSS } = props;

    return(
        <div className="flex justify-center font-semibold text-sm py-12 font-barlow">
            <div className="flex flex-col gap-4">
                <div className={"flex items-center gap-3 py-2 rounded-full px-8 " + customCSS}>
                    <img className="w-10 h-10" src="/Assets/mile2-aseets/icons/1.svg" alt="Kore" />
                    <p className="">YENİ! Kore</p>
                </div>
                <div className={"flex items-center gap-3 py-2 rounded-full px-8 " + customCSS}>
                    <img className="w-10 h-10" src="/Assets/mile2-aseets/icons/2.svg" alt="Pizza" />
                    <p>Pizza</p>
                </div>
                <div className={"flex items-center gap-3 py-2 rounded-full px-8 " + customCSS}>
                    <img className="w-10 h-10" src="/Assets/mile2-aseets/icons/3.svg" alt="Burger" />
                    <p>Burger</p>
                </div>
                <div className={"flex items-center gap-3 py-2 rounded-full px-8 " + customCSS}>
                    <img className="w-10 h-10" src="/Assets/mile2-aseets/icons/4.svg" alt="Kızartmalar" />
                    <p>Kızartmalar</p>
                </div>
                <div className={"flex items-center gap-3 py-2 rounded-full px-8 " + customCSS}>
                    <img className="w-10 h-10" src="/Assets/mile2-aseets/icons/5.svg" alt="Fast Food" />
                    <p>Fast Food</p>
                </div>
                <div className={"flex items-center gap-3 py-2 rounded-full px-8 " + customCSS}>
                    <img className="w-10 h-10" src="/Assets/mile2-aseets/icons/6.svg" alt="Gazlı İçecek" />
                    <p>Gazlı İçecek</p>
                </div>
            </div>
        </div>
    )
}