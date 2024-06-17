export default function PizzaInfo(props) {
    const { name, price, description, rating, ratingCount } = props;


    return(
        <>
            <h2>{name}</h2>
            <div>
                <p>{price}₺</p>
                <div>
                    <span>{rating}</span>
                    <span>{ratingCount}</span>
                </div>
            </div>
            <p>
                {description}
            </p>
        </>
    )
}