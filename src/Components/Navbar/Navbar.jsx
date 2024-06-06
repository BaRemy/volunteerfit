import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo5.png';
import menu from '../../assets/menu-icon.png';
import { useEffect, useState } from 'react';

const Navbar = ({setShowLogin}) => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to="home" smooth={true} duration={500}><b>Home</b></Link></li>
                <li><Link to="opportunities" smooth={true} duration={1800}><b>Opportunities</b></Link></li>
                <li><Link to="blog" smooth={true} duration={500}><b>Blog</b></Link></li>
                <li><Link to="about" smooth={true} duration={500}><b>About</b></Link></li>
                <li><Link to="contact" smooth={true} duration={500}><b>Contact Us</b></Link></li>
                <button className='btn' onClick={()=>setShowLogin(true)}>Sign In</button>
            </ul>
            <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
