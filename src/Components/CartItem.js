import {useState} from 'react'

const CartItem = ({item, cartItems, setCartItems, getTotalPrice, getNumItems}) => {

    console.log('rendering CartItem. item.quantity: ', item.quantity)

    return (
        <div key={item.id} className="cart_item">
            <div>
                <h2>{item.name}</h2>
                <img src={item.imageurl} alt="couldnt display img properly" className="cart_item_image"/>
            </div>
            <div>
                <p>Category: {item.category}</p>
                <p>Made by {item.maker}</p>
                <p>${item.price}</p>
                <div>
                    <button onClick={() => {
                        if (item.quantity===1) {
                            cartItems.splice(cartItems.indexOf(item), 1)
                            setCartItems([...cartItems])
                        } else {
                            item.quantity--
                            setCartItems([...cartItems])
                            getTotalPrice()
                            getNumItems()
                        }
                    }}>-1
                    </button>
                    <p>Quantity of {item.category}: {item.quantity}</p>
                    <button onClick={() => {
                        if (item.quantity<25) {
                            item.quantity++
                            setCartItems([...cartItems])
                            getTotalPrice()
                            getNumItems()
                        }
                    }}>+1  
                    </button>
                </div>
                <button onClick={() => {
                    cartItems.splice(cartItems.indexOf(item), 1)
                    setCartItems([...cartItems])
                }}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CartItem