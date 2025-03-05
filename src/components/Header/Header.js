import { Link } from 'react-router-dom';
import up from './../../images/up.svg'
import './Header.css';

function Header() {
    return(
        <header className='header' id='#top'>
            {window.location.pathname === '/' ? 
            <></> : 
            <Link to='/' className='header__link header__link_main'>На главную</Link>}
            <h1 className='header__title'>зубами клац:</h1>
            <p className='header__text'>почему мы так любим динозавров?</p>
            <nav className='header__nav'>
                <Link to='/top-10' className={`header__link ${window.location.pathname === '/top-10' ? 'header__link_underlined' : ''}`}>Топ 10</Link>
                <Link to='/history' className={`header__link ${window.location.pathname === '/history' ? 'header__link_underlined' : ''}`}>История в массмедиа</Link>
                <Link to='/before-us' className={`header__link ${window.location.pathname === '/before-us' ? 'header__link_underlined' : ''}`}>До нас</Link>
            </nav>
            {window.innerWidth < 768 ? <a href='#top'><img src={up} alt='наверх' className='header__link_up header__link_img' /></a> :
            <a href='#top' className='header__link header__link_up'>Наверх</a>}
        </header>
    );
}

export default Header;