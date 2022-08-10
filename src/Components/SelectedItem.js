import { Link, useParams } from "react-router-dom";
import items from '../data'

const SelectedItem = ({items}) => {

    const params = useParams()
    const selectedItem = items.find(item => item.id === +params.id)

    return (
        <div className="selected_item">
            <div className="go_back_container">
                <Link to="/" className="back_to_all_items_button">
                    <button>Go Back</button>
                </Link>
            </div>
                <div className="selected_item_org">
                    <div> 
                        <img src={selectedItem.imageurl} alt="couldnt display img properly" className="item_image"/>
                    </div>
                    <div>
                        <h2>{selectedItem.name}</h2>
                        <p>Category: {selectedItem.category}</p>
                        <p>Made by {selectedItem.maker}</p>
                        <p>${selectedItem.price}</p>
                        <div>Available colors: <p>{selectedItem.colors.map(color => <div>{color}</div>)}</p></div>
                    </div>
                </div>
        </div>
    )
}

export default SelectedItem