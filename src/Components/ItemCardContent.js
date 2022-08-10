import { Link } from "react-router-dom";

const ItemCardContent = ({item, cartItems, setCartItems}) => {

    const addToCartHandler = () => {
        console.log('addtoCartHandler activated')
        console.log('cartItems: ', cartItems)
        if (!cartItems.includes(item)) {
            item.quantity = 1
            setCartItems([...cartItems, item])
        } else {
            item.quantity++
            setCartItems([...cartItems])
        }
        console.log(item.price, item.quantity)
        // getTotalPrice()
        // getNumItems()
        // setTotalCartPrice(totalCartPrice)
        // setNumOfCartItems(numOfCartItems)
    }

    return (
        <div key={item.id} className="item_card">
            <Link to={`/selecteditem/${item.id}`}>
                <img src={item.imageurl} alt="couldnt display img properly" className="item_image"/>
                <h2>{item.name}</h2>
            </Link>
            <button onClick={() => addToCartHandler()}>Add to Cart</button>
            <p>Category: {item.category}</p>
            <p>Made by {item.maker}</p>
            <p>${item.price}</p>
            <div>Available colors: <p>{item.colors.map(color => <div>{color}</div>)}</p></div>
        </div>
    )
}

export default ItemCardContent