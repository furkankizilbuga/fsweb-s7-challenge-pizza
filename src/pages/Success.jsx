import '@fontsource/satisfy';

export default function Success(props) {

    const { formData } = props;
    const { size, crust, toppings, total, count } = formData;
    const { name } = formData.pizza;

    return(
        <div className="flex bg-[#CE2829] font-barlow justify-center py-12 h-screen">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-2 items-center border-b border-white pb-8">
                    <p className="font-satisfy text-[#FDC913] text-2xl">lezzetin yolda</p>
                    <p className="text-white text-4xl md:text-5xl">SİPARİŞ ALINDI</p>
                </div>
                <div className="flex flex-col items-center gap-12 text-white w-full py-8">
                    <p className="font-semibold text-xl">{name}</p>
                    <div className="flex flex-col flex-wrap gap-2 max-w-60 md:max-w-80 ">
                        <p className='font-semibold'>Boyut: <span className="font-medium">{size}</span></p>
                        <p className='font-semibold'>Hamur:  <span className="font-medium">{crust}</span></p>
                        <p className='font-semibold'>Ek malzemeler: {toppings.map((topping, index) => (
                                <span className="font-medium" key={index}> {topping}</span>
                            ))}</p>                      
                    </div>
                    <div className="flex flex-col border border-white w-full max-w-60 md:max-w-80 p-8 rounded">
                        <p className="pb-4 font-semibold">Sipariş Toplamı</p>
                        <div className="flex justify-between">
                            <span className='font-semibold'>Seçimler</span>
                            <span>{toppings.length * 5 * count}₺</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='font-semibold'>Toplam</span>
                            <span>{total}₺</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}