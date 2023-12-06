import styles from './Footer.module.css';
import Github from '../assets/img/github.svg';
import Linkedin from '../assets/img/linkedin.svg';
import Twitter from '../assets/img/twitter.svg';

const Footer = () => {

    return(
        <div  style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'10vh' }} >
                <div className={styles.contact}><p>Contact me by <a href="mailto:mad.aalachi@gmail.com">mail</a>
<span className={styles.social}><a href="http://www.github.com/a3lachi"><img src={Github} width={20} /></a>
<a href="https://www.linkedin.com//"><img src={Linkedin} width={20} /></a>
<a href="https://twitter.com/a3laxi"><img src={Twitter} width={20} /></a></span>
<span className={styles.copyright}>© 2022 - 2023</span></p></div>
                </div>

    )
}


export default Footer ;