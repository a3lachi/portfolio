import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styles from "./Projects.module.css";
import Compiler from "../assets/projects/compiler.png";


const ProjectCompiler = () => {



    return (
        <div>
            <TopBar id="projectss"  />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Compiler</h1>
                <p>
                    <img src={Compiler} alt="compiler" />
                </p>
                <p>
                    This project involves the development of a compiled programming language in C.
                </p>
            </div>

            <Footer />
        </div>
    )
}


export default ProjectCompiler  ;