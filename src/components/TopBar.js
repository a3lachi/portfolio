import { useNavigate , Link} from "react-router-dom";
import styles from './TopBar.module.css';
import { useEffect } from "react";



const TopBar = () => {

    const Navigate = useNavigate() ;

    const returnToProjects = async () => {
        await Navigate('/');
        var elem = document.getElementById("projectss");
        elem.scrollIntoView({ behavior: "smooth" });
    }
      
    useEffect(()=> {
        var rot = document.getElementById("root")
        console.log(rot)
        rot.scrollIntoView();
        
    })

    return(
        <div className={styles.topbar}>
            <div className={styles.container}>
                <div onClick={returnToProjects} className={styles.backbutton}>Back</div>
                <Link className={styles.blog} to="/">Aalachi Mohamed's blog</Link>
                <div class="fantom-elememt"></div>
            </div>
        </div>
    )
}


export default TopBar ;