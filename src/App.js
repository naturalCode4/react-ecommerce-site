import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import items from "./data"
import ItemCards from './Components/ItemCards'
import Header from './Components/Header'
import SelectedItem from './Components/SelectedItem';
import Cart from './Components/Cart';

const App = () => {

  const [cartItems, setCartItems] = useState(items)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route 
          path="/selecteditem/:id"
          element={<SelectedItem
            items={items}
          />}
        />
        <Route 
          path="/allitems"
          element={<ItemCards
            items={items}
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
      {/* {selectedItem && <SelectedItem
        selectedItem={selectedItem}
      />}
      {!selectedItem && <ItemCards
        items={items}
      />} */}
    </div>
  )
}

export default App;
