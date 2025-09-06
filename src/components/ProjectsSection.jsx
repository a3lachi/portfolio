import styles from "./ProjectSection.module.css";
import { Link } from "react-router-dom";
import ServAuth from "../assets/projects/servauth2.png";
import Datano from "../assets/projects/datano.png" ;
import Bapz from "../assets/projects/bapzvscode.png";
import Compiler from "../assets/projects/compiler.png";
import Calculator from "../assets/projects/calculator.png";


const ProjectSection = () => {


    return(
        <div  id="projectss" className={styles.container}>
            <div className={styles.content}>
                <h2>What I have worked on</h2>

                <div className={styles.projectsContainer}>
                    <Link className={styles.projectWrapperServauth} to="/projects/servauth" >
                        <div id="2" className={styles.project} >
                            <div className={styles.projectImage}>
                                <img alt="servauth" src={ServAuth} width={400} />
                            </div>
                            <div id="projectText" className={styles.projectText}><h3>ServAuth</h3><p></p><p>Lightning fast authentication server.</p><p></p></div>
                        </div>
                    </Link>
                    <Link className={styles.projectWrapperOne} to="/projects/dorker" >
                        <div id="1" className={styles.project} >
                            <div className={styles.projectImage}>
                                <img alt="dorker" src="./dorker.png"/>
                            </div>
                            <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>A Python built web scraper that fetch for links.</p><p></p></div>
                        </div>
                    </Link>
                    <Link className={styles.projectWrapperTwo} to="/projects/datano" >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="datano" src={Datano} width={500} />
                            </div>
                            <div id="projectText" className={styles.projectText}><h3>Image Annotation</h3><p></p><p>An image annotation tool built with React using Canvas. </p><p></p></div>
                        </div>
                    </Link>
                    <Link className={styles.projectWrapperThree}  to="/projects/bapz">
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="bapz" src={Bapz} width={500}  />
                            </div>
                            <div id="projectText" className={styles.projectText}><h3>Full stack e-commerce</h3><p></p><p>I built this e-commerce website out of liking Bape clothing, I used Django in the backend and React in the frontend.</p><p></p></div>
                        </div>
                    </Link>
                    <Link className={styles.projectWrapperFour}  to="/projects/compiler"  >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="compiler" src={Compiler} width={500} />
                            </div>
                            <div id="projectText" className={styles.projectText}><h3>Compiler</h3><p></p><p>This project involves the development of a compiled programming language in C.</p><p></p></div>
                        </div>
                    </Link>
                    
                    <Link className={styles.projectWrapperSix}  to="/projects/calculator" >
                        <div className={styles.project}>
                            <div className={styles.projectImage}>
                                <img alt="calc" src={Calculator}  width={500}  />
                            </div>
                            <div id="projectText" className={styles.projectText}><h3>Calculator</h3><p></p><p>A Java Calculator app.</p><p></p></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection ;