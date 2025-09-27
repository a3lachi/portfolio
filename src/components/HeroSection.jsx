import Gear from '../assets/img/gear.svg';
import styles from "./HeroSection.module.css";
import ParticleSystem from './ParticleSystem';


const HeroSection = () => {

    const scrollToAbout = () => {
        console.log('scrolling')
        var elmntToView = document.getElementById("about");
        elmntToView.scrollIntoView({behavior:"smooth"});
    }


    return (
        <div className={styles.landing}>
            <ParticleSystem />
            <div className={styles.landingContainer}>
                <div className={styles.greeting}>Hello! I am</div>
                <div className={styles.name}>AALACHI MOHAMED</div>
                <div className={styles.title}>a SOFTWARE ENGINEER</div>

                <div className={styles.knowmoresection}>
                    <div className={styles.arrow}>
                        <img src="./arrow.svg" alt="Navigation arrow icon" />
                    </div>
                    <div className={styles.knowmore} onClick={scrollToAbout} >
                        Know more
                    </div>
                </div>

                {/* <div className={styles.gears}>
                    <img alt="Animated gear icon - Software engineering design element" className={styles.gearOne} src={Gear} />
                    <img alt="Animated gear icon - Software engineering design element" className={styles.gearTwo} src={Gear} />
                    <img alt="Animated gear icon - Software engineering design element" className={styles.gearThree} src={Gear} />
                </div> */}
            </div>
        </div>
    )
}


export default HeroSection ;