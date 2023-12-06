import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styles from "./Projects.module.css";
import Webmac from "../assets/projects/webmac.png";
import Drag from "../assets/projects/dragbrrr.gif";


const ProjectWebmac = () => {



    return(
        <div>
            <TopBar id="projectss"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Webmac</h1>
                <p>
                    <img src={Webmac} alt="dorker" />
                </p>

                <p>
                    <img src={Drag} alt="dorker" />
                </p>
                <p>
                    A macOs style portfolio experimenting with Vue.js.
                </p>
            </div>

            <Footer />
        </div>
    )
} 

export default ProjectWebmac ;