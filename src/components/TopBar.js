import { useNavigate , Link} from "react-router-dom";
import styles from './TopBar.module.css';
import { useEffect } from "react";


const TopBar = (props) => {

    const Navigate = useNavigate() ;

    const returnToHome = async () => {
        await Navigate('/');
        const elem = document.getElementById(props.id);
        if (elem) {
            elem.scrollIntoView({behavior:"smooth"});
        }
    };

    const goToBlog = async () => {
        await Navigate('/');
        const elem = document.getElementById("posts");
        if (elem)
            elem.scrollIntoView({behavior:"smooth",block: 'center'});
    }
      
    useEffect(()=> {
        var rot = document.getElementById("root")
        rot.scrollIntoView();
    },[props.id])

    return(
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div onClick={returnToHome} className={styles.backbutton}>Back</div>
                <Link onClick={goToBlog} className={styles.blog} to="/">Aalachi Mohamed's blog</Link>
                <div className="fantom-elememt"></div>
            </div>
        </div>
    )
}


export default TopBar ;