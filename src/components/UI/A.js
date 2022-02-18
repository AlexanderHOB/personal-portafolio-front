import {Link} from 'react-scroll'
import classes from '../Header.module.css'

const A = (props)=>{

    return (
        <li>
            <Link 
            activeClass={classes['active-link']} 
            to={props.to} 
            spy={true} 
            smooth={true} 
            offset={0} 
            duration={200}
            >
                <i className={props.icon}></i>
            </Link>
        </li>
        
    );
}
export default A;