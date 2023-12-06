import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styles from "./Projects.module.css";
import Bapz from "../assets/projects/bapz.gif"
import BapzTwo from "../assets/projects/bapzvscode.png";

const ProjectBapz = () => {



    return(
        <div>
            <TopBar id="projectss" />
            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Full stack e-commerce</h1>
                <p>
                    <img src={Bapz} alt="dorker" />
                </p>

                <p>
                    <img src={BapzTwo} alt="dorker" />
                </p>
                <p>
                    I built this e-commerce website out of liking Bape clothing, I used Django in the backend and React in the frontend.
                </p>
                <p>
                    Building a nice user experience or UI wasn't my goal. I focused on functionalities.
                </p>
            </div>

            <Footer />
        </div>
    )
}


export default ProjectBapz ;