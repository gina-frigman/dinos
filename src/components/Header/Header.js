import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <header className='header'>
            {window.location.pathname === '/' ? 
            <></> : 
            <Link to='/' className='header__link'>На главную</Link>}
            <h1 className='header__title'>зубами клац:</h1>
            <p className='header__text'>почему мы так любим динозавров?</p>
            <nav className='header__nav'>
                <Link to='/top-10' className={`header__ link ${window.location.pathname === '/top-10' ? 'header__link_underlined' : ''}`}>Топ 10</Link>
                <Link to='/history' className={`header__ link ${window.location.pathname === '/history' ? 'header__link_underlined' : ''}`}>История в массмедиа</Link>
                <Link to='/before-us' className={`header__ link ${window.location.pathname === '/before-us' ? 'header__link_underlined' : ''}`}>До нас</Link>
            </nav>
        </header>
    );
}

export default Header;