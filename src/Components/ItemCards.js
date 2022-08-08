import React from "react"
import ItemCardInfo from "./ItemCardInfo"

const ItemCards = ({items}) => {
    return (
        <div className="item_cards">
            <h2>Find the item of your dreams</h2>
            <div className="all_items">
            {items.map(item => {
                return (
                    <ItemCardInfo
                        item={item}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default ItemCards