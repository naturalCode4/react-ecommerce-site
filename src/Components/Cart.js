import ItemCardInfo from "./ItemCardInfo"

const Cart = ({cartItems, setCartItems}) => {
    return (
        <div className="item_cards">
            <h2>Cart Page!</h2>
            {cartItems.map(item => {
                return (
                    <ItemCardInfo
                        item={item}
                    />
                )
            })}
        </div>
    )
}

export default Cart