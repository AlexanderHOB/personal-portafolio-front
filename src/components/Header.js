import React,{useEffect, useState} from 'react';
import A from './UI/A';
import dataNav from '../data/navbar';
import classes from './Header.module.css';
const Header = () =>{
    const [headerStyle,setHeaderStyle] = useState('');
    const scrollHandle = ()=>{
        window.scrollY>=50 ? setHeaderStyle('scroll-header'):setHeaderStyle('');
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandle)
    },[]);
    return (
        <header className={`${classes.header} ${headerStyle}` } id="header">
            <nav className={`${classes.nav} container`}>
                <a href="http://localhost:3000" className={classes.logo}> Alexander </a>
                <div className={classes.menu}>
                    <ul>
                        {dataNav.map( link=> <A key={link.id}to={link.to} icon={link.icon}/>)}
                        
                    </ul>
                </div>
                {/* Theme change button  */}
                <box-icon name='moon' type='solid' ></box-icon>
            </nav>
        </header>
    );
}

export default Header;