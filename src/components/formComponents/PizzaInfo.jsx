export default function PizzaInfo(props) {
    const { pizzas } = props;

    const { id, name, price, rating, ratingCount, description } = pizzas[0]

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