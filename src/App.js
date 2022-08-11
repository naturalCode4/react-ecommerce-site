import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import items from "./data"
import ItemCards from './Components/ItemCards'
import Header from './Components/Header'
import SelectedItem from './Components/SelectedItem';
import Cart from './Components/Cart';

const App = () => {

  const [cartItems, setCartItems] = useState([])
  const [filteredItems, setFilteredItems] = useState(items)
    
  console.log('rendering App')
  console.log('filteredItems: ', filteredItems)

  return (
    <div className="App">
      <Header
        items={items}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
      />
      <Routes>
        <Route 
          path="/selecteditem/:id"
          element={<SelectedItem
            items={items}
          />}
        />
        <Route 
          path="/"
          element={<ItemCards
            items={items}
            filteredItems={filteredItems}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />}
        />
        <Route 
          path="/cart"
          element={<Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
          />}
        />
      </Routes>

    </div>
  )
}

export default App;
