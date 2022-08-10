import logo from '../logo.svg';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

const Header = ({items, filteredItems, setFilteredItems}) => {
    return (
        <div className="App-header">
            <div className='App-features'>
                    <img src={logo} className="App-logo" alt="logo" />
                <Link to="/">
                    <h1>ECommSite</h1>                
                </Link>
                <div className='App-features-b'>
                    <Link to="/cart">
                        <button className='cart_button'>Cart</button>
                    </Link>
                </div>
            </div>
            <SearchBar
                items={items}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
            />
        </div>
    )
}

export default Header