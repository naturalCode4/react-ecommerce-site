import { Link } from "react-router-dom";

const ItemCardInfo = ({item}) => {
    return (
        <div key={item.id} className="item_card">
            <Link to={`/selecteditem/${item.id}`}>
                <img src={item.imageurl} alt="couldnt display img properly" className="item_image"/>
                <h2>{item.name}</h2>
            </Link>
            <p>Category: {item.category}</p>
            <p>Made by {item.maker}</p>
            <p>${item.price}</p>
            <div>Available colors: <p>{item.colors.map(color => <div>{color}</div>)}</p></div>
        </div>
    )
}

export default ItemCardInfo