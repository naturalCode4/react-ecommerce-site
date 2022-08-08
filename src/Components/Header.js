import logo from '../logo.svg';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div className="App-header">
            <div className='App-features'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>ECommSite</h1>
                <div className='App-features-b'>
                    <button className='cart_button'>Cart</button>
                </div>
            </div>
            <SearchBar/>
        </div>
    )
}

export default Header