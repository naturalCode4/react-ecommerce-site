import { useState } from "react"

const SearchBar = ({items, filteredItems, setFilteredItems}) => {

    console.log('filteredItems: ', filteredItems)

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
        item.searchCriteria = item.searchCriteria.toLowerCase()
    })
    
    console.log('searchText: ', searchText)
    console.log('item.searchCriteria: ', items[3].searchCriteria)
    
    const searchFilterItems = () => {
        let filtered = []
        filteredItems.forEach(item => {
            if (item.searchCriteria.includes(searchText)) {
                filtered.push(item)
            }
        })
        setFilteredItems(filtered)
        return filteredItems
    }
    
    return (
        <div>
            <input 
                value={searchText}
                className="search_bar"
                placeholder="Search for items"
                onChange={e => {
                    console.log('e.target.value: ', e.target.value)
                    setSearchText(e.target.value.toLowerCase())
                    console.log('change')
                    searchFilterItems()
                }}
            ></input>
        </div>
    )
}

export default SearchBar