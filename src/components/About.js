import classes from './About.module.css';
const About = ()=>{
    return(
        <section className="section about">
            <span className="section__subtitle">My Intro</span>
            <h2 className="section__title"> About Me</h2>

            <div className={`${classes.about__container} container grid` }>
                <img src="assets/images/about.jpg" alt="" className={classes.about__img}/>
                <div className={classes.about__data}>
                    <div className={classes.about__info}>
                        <div className={classes.about__box}>
                            <i className={`bx bxs-award ${classes.about__icon}`}></i>
                            <h3 className={classes.about__title}>Experience</h3>
                            <span className={classes.about__subtitle}> 1 year working</span>
                        </div>
                        <div className={classes.about__box}>
                            <i className={`bx bxs-briefcase-alt ${classes.about__icon}`}></i>
                            <h3 className={classes.about__title}>Completed</h3>
                            <span className={classes.about__subtitle}>4 + projects</span>
                        </div>
                        <div className={classes.about__box}>
                            <i className={`bx bx-support ${classes.about__icon}`}></i>
                            <h3 className={classes.about__title}>Support</h3>
                            <span className={classes.about__subtitle}>Online 24/7</span>
                        </div>
                    </div>
                    <p className={classes.about__description}>
                        Fullstack Developer Junior, I create web platforms. I have a year of experience and many clients are happy with the projects carried out. Also, I love learning about new technologies and dominate them.
                    </p>
                    <a href="#contact" className="button">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
export default About;