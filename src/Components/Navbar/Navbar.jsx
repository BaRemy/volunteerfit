import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo5.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li><Link to="home" smooth={true} duration={500}><b>Home</b></Link></li>
                <li><Link to="opportunities" smooth={true} duration={700}><b>Opportunities</b></Link></li>
                <li><Link to="blog" smooth={true} duration={500}><b>Blog</b></Link></li>
                <li><Link to="about" smooth={true} duration={500}><b>About</b></Link></li>
                <li><Link to="contact" smooth={true} duration={500}><b>Contact Us</b></Link></li>
                <li className='btn'>Sign In</li>
            </ul>
        </nav>
    );
};

export default Navbar;
