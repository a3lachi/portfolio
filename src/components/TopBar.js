import { useNavigate , Link} from "react-router-dom";
import styles from './TopBar.module.css';
import { useEffect } from "react";



const TopBar = (props) => {

    const Navigate = useNavigate() ;


    // const returnToHome = async () => {
    //     await Navigate('/');
    //     var elem = document.getElementById(props.id);
    //     elem.scrollIntoView();
    // }

    const returnToHome = async () => {
        await Navigate('/');
        const elem = document.getElementById(props.id);
        if (elem) {
          const yOffset = elem.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
      };
      
    const goToBlog = async () => {
        await Navigate('/');
        const elem = document.getElementById("projectss");
        if (elem) {
            const yOffset = elem.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
          }

    }
      
    useEffect(()=> {
        var rot = document.getElementById("root")
        console.log(rot)
        rot.scrollIntoView();
        
    })

    return(
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div onClick={returnToHome} className={styles.backbutton}>Back</div>
                <Link onClick={goToBlog} className={styles.blog} to="/">Aalachi Mohamed's blog</Link>
                <div class="fantom-elememt"></div>
            </div>
        </div>
    )
}


export default TopBar ;