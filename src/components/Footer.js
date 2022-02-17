import classes from './Footer.module.css';
const Footer = ()=>{
    return(
        <footer className={classes.footer}>
            <div className={`${classes.footer__container} container`}>
                <h1 className={classes.footer__title}>Alexander</h1>

                <ul className={classes.footer__list}>
                    <li>
                        <a href="#about" className={classes.footer__link}>About</a>
                    </li>
                    <li>
                        <a href="#qualification" className={classes.footer__link}>Qualification</a>
                    </li>
                    <li>
                        <a href="#work" className={classes.footer__link}>Work</a>
                    </li>
                </ul>
                <ul className={classes.footer__social}>
                    <a href="https://www.facebook.com/alexander.obispobuendia" className={classes['footer__social-link']} target="_blank">
                        <i className='bx bxl-facebook' ></i>
                    </a>
                    <a href="https://www.instagram.com/alexander_nediam" className={classes['footer__social-link']} target="_blank">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="https://twitter.com/Alexander_HOB" className={classes['footer__social-link']} target="_blank">
                        <i className='bx bxl-twitter' ></i>
                    </a>
                </ul>
                <span className={classes.footer__copy}>
                    &#169; AlexanderHOB. All right reserved
                </span>
            </div>
        </footer>
    );
}
export default Footer;