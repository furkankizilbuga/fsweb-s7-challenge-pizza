export default function PizzaInfo(props) {
    const { pizza } = props;

    const { name, price, rating, ratingCount, description } = pizza

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