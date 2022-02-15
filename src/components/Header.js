import classes from './Header.module.css';
const Header = () =>{
    return (
        <header className={classes.header} id="header">
            <nav className={`${classes.nav} container`}>
                <a href="#" className={classes.logo}> Alexander </a>
                <div className={classes.menu}>
                    <ul>
                        <li>
                            <a href="#" className={classes['active-link']}><i className='bx bxs-home'></i></a>
                        </li>
                        <li>
                            <a href="#" ><i className='bx bxs-user' ></i></a>
                        </li>
                        <li>
                            <a href="#" ><i className='bx bxs-book' ></i></a>
                        </li>
                        <li>
                            <a href="#" ><i className='bx bxs-briefcase' ></i></a>
                        </li>
                        <li>
                            <a href="#" ><i className='bx bxs-comment-dots' ></i></a>
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