import styles from './Footer.module.css';
import Github from '../assets/img/github.svg';
import Linkedin from '../assets/img/linkedin.svg';
import Twitter from '../assets/img/twitter.svg';
import Youtube from '../assets/img/youtube.svg';

const Footer = () => {

    return(
        <div  style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'10vh' }} >
                <div className={styles.contact}><p>Contact me by <a href="mailto:mad.aalachi@gmail.com">mail</a>
<span className={styles.social}><a target="_blank" href="http://www.github.com/a3lachi"><img src={Github} width={20} /></a>
<a target="_blank" href="https://www.linkedin.com/"><img src={Linkedin} width={20} /></a>
<a target="_blank" href="https://www.youtube.com/channel/UC2A26hYnRVkNp1vn1eWSeCg"><img src={Youtube} width={20} /></a>
<a target="_blank" href="https://twitter.com/a3laxi"><img src={Twitter} width={20} /></a></span>
<span className={styles.copyright}>© 2023 - 2024</span></p></div>
                </div>

    )
}


export default Footer ;