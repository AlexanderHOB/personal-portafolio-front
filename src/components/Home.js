import classes from './Home.module.css';
const Home = ()=>{
    return(
        <section className="home section">
            <div className={`${classes.home__container} container grid`}>
                <div className={classes.home__data}>
                    <span className={classes.home__greeting}> Hello, I'm </span>
                    <h1 className={classes.home__name}>Alexander Obispo</h1>
                    <h3 className={classes.home__education}> System Engineer</h3>

                    <div className={classes.home__buttons}>
                        <a download="" href="assets/files/Alexander Obispo CV.pdf" className="button button--ghost">
                            Download CV
                        </a>
                        <a href="#about" className="button">
                            About me
                        </a>
                    </div>
                </div>
                <div className={classes.home__handle}>
                    <img src="assets/images/mev2.png" alt="me" className={classes.home__img}/>
                </div>
                <div className={classes.home__social}>
                    <a href="https://www.linkedin.com/in/alexander-henry-obispo-buendia/" className={classes['home__social-link']} target="_blank">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/AlexanderHOB" className={classes['home__social-link']} target="_blank">
                        <i className='bx bxl-github' ></i>
                    </a>
                    <a href="https://twitter.com/Alexander_HOB" className={classes['home__social-link']} target="_blank">
                        <i className='bx bxl-twitter' ></i>
                    </a>
                </div>
                <a href="#about" className={classes.home__scroll}>
                <i className={`bx bxs-mouse ${classes['home__scroll-icon']}`} ></i>
                <span className={classes['home__scroll-name']}>Scroll Down</span>
            </a>
            </div>
            
        </section>
    );
}

export default Home;