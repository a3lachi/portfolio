import styles from "./AboutSection.module.css";
import Skills from "./Skills";
import LanBlock from "./LanBlock";
import AboutSubSection from "./shared/AboutSubSection";

const AboutSection = () => {

    return (
        <div id='about' className={styles.about} >
            <img src={"/a3la.jpg"} alt="myphoto" className={styles.myphoto} />

            <AboutSubSection>
                <h2>Who am I</h2>
                <p>
                    I have always been passionate about building software, always strove to learn more, discover technologies
                    and understand the different paradigms behind each one of them. <strong>The goal of my journey
                    is to understand the secrets behind good software</strong> and its success.
                </p>
                <p>
                    As a result of this life long learning process, I am able to <strong>design and write 
                    modular, expandable and clean software</strong>. I always try to <strong>solve
                    problems in a language agnostic-manner</strong>, in order to choose the most suited technology to the
                    problem at hand.
                </p>
                <p>
                    <strong>I believe in this being the main purpose of a software engineer !</strong>
                </p>
            </AboutSubSection> 
            
            <AboutSubSection>
                <h2>What I believe in</h2>
                <Skills />
            </AboutSubSection>

            <AboutSubSection className={styles.stackcontainer}>
                <h2>Programming languages I use</h2>
                <div className={styles.stack}>
                    <div className={styles.lanz}>
                        <LanBlock ext=".c" lan="C" />
                        <LanBlock ext=".sh" lan="Bash" />
                        <LanBlock ext=".py" lan="Python" />
                        <LanBlock ext=".java" lan="Java" />
                        <LanBlock ext=".ts" lan="Typescript" />
                        <LanBlock ext=".sql" lan="PL/pgSQL" />
                    </div>
                </div>
            </AboutSubSection>

        </div>
    )
}

export default AboutSection ;