import CartItem from "./CartItem"
import { useState } from "react"
import { Link } from "react-router-dom"

const Cart = ({cartItems, setCartItems}) => {

    const getTotalPrice = () => {
        let totalPrice = 0
        cartItems.map(item => {
            totalPrice+=(item.price * item.quantity)
        })
        console.log('totalPrice: ', totalPrice)
        return totalPrice
    }
  
    const getNumItems = () => {
        let numItems = 0
        cartItems.map(item => {
            numItems+=(item.quantity)
        })
        console.log('numItems: ', numItems)
        return numItems
    }

    return (
        <div className="item_cards">
            <Link to="/" className="back_to_all_items_button">
                <button>Back to Shopping</button>
            </Link>
            <h2>Cart Page!</h2>
            <p>Your total: ${getTotalPrice()}</p>
            <p>Your cart has {getNumItems()} items</p>
            {cartItems.map(item => {
                return (
                    <CartItem
                        key={item.id}
                        item={item}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        getTotalPrice={getTotalPrice}
                        getNumItems={getNumItems}
                    />
                )
            })}
        </div>
    )
}

export default Cart