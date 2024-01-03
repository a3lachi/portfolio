import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import Datano from "../../assets/projects/datano.png" ;



const ProjectDatano = () => {

    return(
        <div>
            <TopBar  id="projectss"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Image Annotation</h1>
                <p>
                    <img src={Datano} alt="dorker" />
                </p>
                <p>
                    An image annotation tool built with React using Canvas.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default ProjectDatano ;