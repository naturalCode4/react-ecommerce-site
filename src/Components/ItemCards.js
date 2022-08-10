import React from "react"
import ItemCardContent from "./ItemCardContent"

const ItemCards = ({items, cartItems, setCartItems, totalCartPrice, numOfCartItems, setTotalCartPrice, setNumOfCartItems, getTotalPrice, getNumItems}) => {
    return (
        <div className="item_cards">
            <h2>Find the item of your dreams</h2>
            <div className="all_items">
            {items.map(item => {
                return (
                    <ItemCardContent
                        key={item.id}
                        item={item}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default ItemCards