import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import Dorker from "../../assets/projects/dorker.gif"


const ProjectDorker = () => {



    return(
        <div>
            <TopBar id="projectss"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Google Crawler</h1>
                <p>
                    <img src={Dorker} alt="dorker" />
                </p>
                <p>
                    This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.
                </p>
            </div>

            <Footer />
        </div>
    )
}


export default ProjectDorker ;