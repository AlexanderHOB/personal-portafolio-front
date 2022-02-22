import React,{useEffect, useState,useRef} from 'react';
import A from './UI/A';
import dataNav from '../data/navbar';
import classes from './Header.module.css';
const Header = () =>{
    const [headerStyle,setHeaderStyle] = useState('');
    const [theme,setTheme] =useState('dark');
    const iconRef = useRef('bx bxs-moon');
    const scrollHandle = ()=>{
        window.scrollY>=50 ? setHeaderStyle('scroll-header'):setHeaderStyle('');
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandle)
    },[]);
    
    
    const lightDarkTheme = ()=>{
        if(theme === 'dark'){
            setTheme('light');
            document.body.classList = 'light-theme';
            iconRef.current.classList = `${classes['change-theme']} bx bxs-sun`
        }else{
            setTheme('dark');
            document.body.classList = 'dark';
            iconRef.current.classList = `${classes['change-theme']} bx bxs-moon`

        }
    }
    return (
        <header className={`${classes.header} ${headerStyle}` } id="header">
            <nav className={`${classes.nav} container`}>
                <a href="http://localhost:3000" className={classes.logo}> Alexander </a>
                <div className={classes.menu}>
                    <ul >
                        {dataNav.map( link=> <A key={link.id}to={link.to} icon={link.icon}/>)}
                        
                    </ul>
                </div>
                {/* Theme change button  */}
                <i  ref={iconRef} className={`${classes['change-theme']} bx bxs-moon`} onClick={lightDarkTheme}></i>
            </nav>
        </header>
    );
}

export default Header;