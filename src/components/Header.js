import React,{useEffect, useState} from 'react'
import classes from './Header.module.css';
const Header = () =>{
    const [headerStyle,setHeaderStyle] = useState('');
    const scrollHandle = ()=>{
        window.scrollY>=50 ? setHeaderStyle('scroll-header'):setHeaderStyle('');
    }
    useEffect(()=>{
        console.log('Helo')
        window.addEventListener('scroll',scrollHandle)
    },[]);
    return (
        <header className={`${classes.header} ${headerStyle}` } id="header">
            <nav className={`${classes.nav} container`}>
                <a href="http://localhost:3000" className={classes.logo}> Alexander </a>
                <div className={classes.menu}>
                    <ul>
                        <li>
                            <a href="http://localhost:3000" className={classes['active-link']}><i className='bx bxs-home'></i></a>
                        </li>
                        <li>
                            <a href="http://localhost:3000" ><i className='bx bxs-user' ></i></a>
                        </li>
                        <li>
                            <a href="http://localhost:3000" ><i className='bx bxs-book' ></i></a>
                        </li>
                        <li>
                            <a href="http://localhost:3000" ><i className='bx bxs-briefcase' ></i></a>
                        </li>
                        <li>
                            <a href="http://localhost:3000" ><i className='bx bxs-comment-dots' ></i></a>
                        </li>
                    </ul>
                </div>
                {/* Theme change button  */}
                <box-icon name='moon' type='solid' ></box-icon>
            </nav>
        </header>
    );
}

export default Header;