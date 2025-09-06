import styles from './Home.module.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectsSection';

const Home = () => {

  return (
    <main className={styles.main}>
            <div className={styles.container}>
                <HeroSection />
                <AboutSection />
                <ProjectSection />

                <div id="posts" style={{  width:'100vw' , backgroundColor:'black' , zIndex:'3' , color:'white' , height:'auto' , paddingBottom:'50px'}} >
                    <div style={{maxWidth:'960px' , margin:'0 auto'}}>
                        <h2 style={{ width:'90vw' , fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem' , padding:'20px' , paddingBottom:'0px'}}>Posts I have written</h2>
                        <div className={styles.writes}>
                            <ul>
                                <li>
                                    <a className={styles.textHover}  href="/posts/rest">What is a REST api ?
                                        <span className={styles.date}>Jan 14, 2024</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.textHover} href="/posts/debate">Framework vs library vs package vs module : The debate
                                        <span className={styles.date}>Jan 3, 2024</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.textHover} href="/posts/front">Front-end development is not software engineering
                                        <span className={styles.date}>Dec 15, 2023</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.textHover} href="/posts/auth">Should you implement Authentication yourself?
                                        <span className={styles.date}>Dec 6, 2023</span>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.textHover}  href="/posts/vim">What's all the hype around Vim ?
                                        <span className={styles.date}>Nov 20, 2023</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        
    </main>
  );
}

export default Home;
