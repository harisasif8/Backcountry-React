import { useState } from 'react';
import logo from '../assets/images/header/backcountrylogo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faComments, faPhone, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import UseQuery from '../hooks/UseQuery';


const Header = () => {

    const query = UseQuery();
    const searchTerm = query.get('search');
    
    const [searchValue, setSearchValue] = useState(searchTerm);
    const navigate = useNavigate();


    const searchProduct = (event) => {
        event.preventDefault();
        setSearchValue(searchValue)
        navigate(`products?search=${searchValue}`);
    }

    return (
        <div>
            <header>
                <div className='discount'> <a href="#" className='black-color'> Up To 50% Off 10,000+ Styles For Summer <u> Shop Now </u> </a> </div>
                <div className='main-nav'>
                    <div>
                        <img src={logo} className='bc-logo' alt="" />
                    </div>
                    <form action="" className='search-bar' onSubmit={searchProduct}>
                        <div className="input-icons">
                            <span type='button' > <i><FontAwesomeIcon icon={faSearch} className='search-icon' /> </i></span>
                            <input onChange={(e) => setSearchValue(e.target.value)} type="searchbar" className='search-box' placeholder="Search gear & apparel" id='searchBar' defaultValue={searchValue} />
                        </div>
                    </form>
                    <div>
                        <button className='icon-btn'> <i><FontAwesomeIcon icon={faComments} /> Chat</i></button>
                    </div>
                    <div className='phone-icon'>
                        <button className='icon-btn'> <i><FontAwesomeIcon icon={faPhone} /><u> 1-800-409-4502</u></i></button>
                    </div>
                    <div className='user-icon'>
                        <button className='icon-btn'> <i><FontAwesomeIcon icon={faUserCircle} />My Account</i></button>

                    </div>
                    <div className='cart-icon'>
                        <button className='icon-btn'> <i><FontAwesomeIcon icon={faShoppingCart} /></i></button>
                    </div>

                </div>
                <hr />
                <div>
                    <div className="category-div">
                        <a className="categories" href="#">New Arrivals</a>
                        <a className="categories" href="#">Women</a>
                        <a className="categories" href="#">Men</a>
                        <a className="categories" href="#">Kids</a>
                        <a className="categories" href="#">Activities</a>
                        <a className="categories" href="#">Brands</a>
                        <a className="categories" href="#">Exclusive Brands</a>
                        <a className="categories-red" href="#">Sale</a>
                        <a className="categories" href="#">Explore Blog</a>
                    </div>
                </div>
                <div className="section-top"><b>3 Days only:</b> Up To 60% Off Summer Gear & Apparel <u> Shop Now</u> </div>
                <div className='text'>
                    <div className='yakima-text'> <a href="#" className="black-color"> <u> Yakima</u></a></div>
                    <h2 className='yakima-text'><b>Yakima</b> </h2>
                </div>
            </header>
        </div>
    );
}

export default Header;
