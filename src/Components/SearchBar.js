import { getValue } from "@testing-library/user-event/dist/utils"
import { useState } from "react"

const SearchBar = ({items, filteredItems, setFilteredItems}) => {

    const [searchText, setSearchText] = useState('')

    filteredItems.map(item => {
        item.searchCriteria = ''
        let itemColorsString = ''
        item.colors.forEach(color => {
            if (!itemColorsString.includes(color)) {
                itemColorsString += color + ' '
            }
        })
        item.searchCriteria += item.name + ' ' + item.category + ' ' + item.maker + ' ' + itemColorsString
        console.log('colors: ', itemColorsString)
    })
    
    console.log('searchCriteria: ', filteredItems[1].searchCriteria)
    console.log('searchText: ', searchText)
    
    const searchFilterItems = () => {
        let filtered = []
        filteredItems.forEach(item => {
            console.log('hihihi ', item)
            if (item.searchCriteria.includes(searchText)) {
                filtered.push(item)
            }
        })
        setFilteredItems([...filtered])
        return filteredItems
    }

    console.log('searchFilterItems: ', searchFilterItems())
    
    return (
        <div>
            <input 
                value={searchText}
                className="search_bar"
                placeholder="Search for items"
                onChange={e => {
                    setSearchText(e.target.value)
                    searchFilterItems()
                }}
            ></input>
        </div>
    )
}

export default SearchBar