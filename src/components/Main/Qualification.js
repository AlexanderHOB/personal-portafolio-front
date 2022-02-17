import {useEffect} from 'react';
import classes from './Qualification.module.css';
const Qualification = ()=>{
    let tabs,tabContents;
    useEffect(()=>{
        tabs = document.querySelectorAll('[data-target')
        tabContents = document.querySelectorAll('[data-content]');
        console.log('sss')
    },[tabs,tabContents]);

    const activeLinkHandler = (e)=>{
        // console.log(tabs[0].dataset.target)
        // tabContents.forEach(link=>link.classList.remove(`${classes.qualification__active}`));
        // e.target.className +=(` ${classes.qualification__active}`);
    }

    return(
        <section className={`${classes.qualification} section`}>
            <span className='section__subtitle'>Qualification</span>
            <h2 className='section__title'>My personal Journey</h2>
            <div className={`${classes.qualification__container} container`}>
                <div className={classes.qualification__tabs}>
                    <div className={`${classes.qualification__button} button--flex`} onClick={activeLinkHandler} data-target="#education">
                        <i className={`${classes.qualification__icon} bx bxs-graduation`}></i>
                        Education
                    </div>
                    <div className={`${classes.qualification__button} button--flex`} onClick={activeLinkHandler} data-target="#work">
                        <i className={`${classes.qualification__icon} bx bxs-briefcase`} ></i>
                        Work
                    </div>
                </div>
                <div className={classes.qualification__sections}>
                    {/* Qualification content 1 */}
                    <div className={`${classes.qualification__content} ${classes.qualification__active}`} data-content id='education'>
                        <div className={classes.qualification__data}>
                            <div>
                                <h3 className={classes.qualification__title}>
                                    Systems Enginner
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                    Peru - National University of the center of Peru
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2016-2021
                                </div>
                            </div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                                <span className={classes.qualification__line}></span>
                            </div>
                        </div>
                        <div className={classes.qualification__data}>
                            <div></div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                                <span className={classes.qualification__line}></span>
                            </div>
                            <div>
                                <h3 className={classes.qualification__title}>
                                    Network and System Administration
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                Peru - Continental University
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2018
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.qualification__data}>    
                            <div>
                                <h3 className={classes.qualification__title}>
                                    Developer in SQL Server 2014
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                    Peru - Continental University
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2019
                                </div>
                            </div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                                <span className={classes.qualification__line}></span>
                            </div>
                        </div>
                        <div className={classes.qualification__data}>
                            <div></div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                            </div>  
                            <div>
                                <h3 className={classes.qualification__title}>
                                    CEU en TELECOM
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                    Peru - Organismo Supervisor de Inversión Privada en Telecomunicaciones
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2021
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Qualification content 2 */}
                    <div className={classes.qualification__content} data-content id='work'>
                        <div className={classes.qualification__data}>
                            <div>
                                <h3 className={classes.qualification__title}>
                                    Web Developer
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                    Peru - Servicio de Administración Tributaria de Huancayo
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2019
                                </div>
                            </div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                                <span className={classes.qualification__line}></span>
                            </div>
                        </div>
                        <div className={classes.qualification__data}>
                            <div></div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                                <span className={classes.qualification__line}></span>
                            </div>
                            <div>
                                <h3 className={classes.qualification__title}>
                                    FullStack Developer
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                Peru - Municipalidad distrital El Tambo
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2020
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.qualification__data}>
                            <div>
                                <h3 className={classes.qualification__title}>
                                    Engineering Intern DFI Area
                                </h3>
                                <span className={classes.qualification__subtitle}>
                                    Peru - Organismo Supervisor de Inversión Privada en Telecomunicaciones 
                                </span>
                                <div className={classes.qualification__calendar}>
                                    <i className='bx bxs-calendar' ></i>
                                    2021
                                </div>
                            </div>
                            <div>
                                <span className={classes.qualification__rounder}></span>
                                <span className={classes.qualification__line}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;