import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import Calculator from "../../assets/projects/calculator.png";

const ProjectCalculator = () => {


    return (
        <div>
            <TopBar id="projectss"  />
            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Calculator</h1>
                <p>
                    <img src={Calculator} alt="calculator" style={{width:"350px"}} />
                </p>
                <p>
                    I built a basic calculator using JavaFX library in Java.
                </p>
            </div>
            <Footer />
        </div>
    )
}


export default ProjectCalculator ;