import {useState} from 'react'

const CardItem = ({item}) => {

    const [quantity, setQuantity] = useState(1)

    return (
        <div key={item.id} className="cart_item">
            <img src={item.imageurl} alt="couldnt display img properly" className="cart_item_image"/>
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Made by {item.maker}</p>
            <p>${item.price}</p>
            {/* <div>Available colors: <p>{item.colors.map(color => <div>{color}</div>)}</p></div> */}
        </div>
    )
}