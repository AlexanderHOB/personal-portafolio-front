import classes from './Contact.module.css';
const Contact = ()=>{
    return(
        <section className="contact section" id="contact">
            <span className="section__subtitle">Get in touch</span>
            <h2 className="section__title"> Contact Me</h2>

            <div className={`${classes.contact__container} container grid`}>
                <div className={classes.contact__content}>
                    <h3 className={classes.contact__title}>Talk to me</h3>

                    <div className={classes.contact__info}>
                        <div className={classes.contact__card}>
                            <i className={`${classes['contact__card-icon']} bx bx-mail-send`}></i>
                            <h3 className={classes['contact__card-title']}>Email</h3>
                            <span className={classes['contact__card-data']}>user@gmail.com</span>
                        
                            <a  href="mailto:obispoa1@gmail.com"
                                target='_blank'
                                className={classes.contact__button}
                            >
                                Write Me <i className={`${classes['contact__button-icon']} bx bx-right-arrow-alt`} ></i>
                            </a>
                        </div>
                        <div className={classes.contact__card}>
                            <i className={`${classes['contact__card-icon']} bx bxl-whatsapp`}></i>
                            <h3 className={classes['contact__card-title']}>WhatsApp</h3>
                            <span className={classes['contact__card-data']}>+51 988120494</span>
                        
                            <a  href="https://api.whatsapp.com/send?phone=51988120494&text=Hello, more information!"
                                target='_blank'
                                className={classes.contact__button}
                            >
                                Write Me <i className={`${classes['contact__button-icon']} bx bx-right-arrow-alt`} ></i>
                            </a>
                        </div>
                        <div className={classes.contact__card}>
                            <i className={`${classes['contact__card-icon']} bx bxl-messenger`}></i>
                            <h3 className={classes['contact__card-title']}>Messenguer</h3>
                            <span className={classes['contact__card-data']}>user.AlexanderHOB</span>
                        
                            <a  href="https://m.me/alexander.obispobuendia"
                                target='_blank'
                                className={classes.contact__button}
                            >
                                Write Me <i className={`${classes['contact__button-icon']} bx bx-right-arrow-alt`} ></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.contact__content}>
                    <h3 className={classes.contact__title}>
                        Write me your project
                    </h3>
                    <form className={classes.contact__form}>
                        <div className={classes['contact__form-div']}>
                            <label htmlFor="" className={classes['contact__form-tag']}>
                                Names
                            </label>
                            <input 
                                type="text" 
                                className={classes['contact__form-input']}
                                placeholder="Insert your name"
                                />
                        </div>
                        <div className={classes['contact__form-div']}>
                            <label htmlFor="" className={classes['contact__form-tag']}>
                                Main
                            </label>
                            <input 
                                type="email" 
                                className={classes['contact__form-input']}
                                placeholder="Insert your email"  
                                />
                        </div>
                        <div className={classes['contact__form-div'] +' '+ classes['contact__form-area']}>
                            <label htmlFor="" className={classes['contact__form-tag']}>
                                Project
                            </label>
                            <textarea 
                                cols="30" 
                                rows="10"
                                placeholder="Write your project"
                                className={classes['contact__form-input']}
                                >

                            </textarea>
                        </div>
                        <button className='button'> Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Contact;