import {useEffect} from 'react';
import classes from './Work.module.css';
import mixitup from 'mixitup';
const Work = ()=>{
    let links = []; // array of links nodes
    useEffect(()=>{
        mixitup(`.${classes.work__container}`,{
            animation: {
                duration: 300
            }
        });
        links = document.querySelectorAll(`.${classes.work__item}`);
    },[links]);
    const activeLinkHandler = (e)=>{
        links.forEach(link=>link.classList.remove(`${classes['active-work']}`));
        e.target.className +=(` ${classes['active-work']}`);
    }

    return (
        <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Work</h2>

            <div className={classes.work__filters}>
                <span 
                    className={`${classes.work__item} ${classes['active-work']}`}
                    data-filter="all"
                    onClick={activeLinkHandler}
                > All</span>
                <span 
                    className={classes.work__item} 
                    data-filter=".laravel"  
                    onClick={activeLinkHandler}
                >Laravel</span>
                <span 
                    className={classes.work__item} 
                    data-filter=".react"  
                    onClick={activeLinkHandler}
                >React</span>
                <span 
                    className={classes.work__item} 
                    data-filter=".flutter"  
                    onClick={activeLinkHandler}
                >Flutter</span>
            </div>
            <div className={`${classes.work__container} container grid `} >
                <div className={`${classes.work__card} mix laravel`}>
                    <img src="assets/images/work.jpg" alt="work" className={classes.work__img}/>
                    <h3 className={classes.work__title}>Laravel + Vue</h3>

                    <a href="https://localhost:3000" className={classes.work__button}>
                        Demo <i className={`${classes.work__icon} bx bx-right-arrow-alt`} ></i>
                    </a>
                </div>
                <div className={`${classes.work__card} mix react`}>
                    <img src="assets/images/work.jpg" alt="work" className={classes.work__img}/>
                    <h3 className={classes.work__title}>React + Express js</h3>

                    <a href="https://localhost:3000" className={classes.work__button}>
                        Demo <i className={`${classes.work__icon} bx bx-right-arrow-alt`} ></i> 
                    </a>
                </div>
                <div className={`${classes.work__card} mix flutter`}>
                    <img src="assets/images/work.jpg" alt="work" className={classes.work__img}/>
                    <h3 className={classes.work__title}>Mobile Apps</h3>

                    <a href="https://localhost:3000" className={classes.work__button}>
                        Demo <i className={`${classes.work__icon} bx bx-right-arrow-alt`} ></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Work;