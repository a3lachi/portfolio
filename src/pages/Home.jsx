import styles from './Home.module.css';
import LanBlock from '../components/LanBlock';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Datano from "../assets/projects/datano.png" ;
import Bapz from "../assets/projects/bapzvscode.png";
import Compiler from "../assets/projects/compiler.png";
import Webmac from "../assets/projects/webmac.png";
import ServAuth from "../assets/projects/servauth2.png";
import Skills from '../components/Skills';
import Gear from '../assets/img/gear.svg';
import Calculator from "../assets/projects/calculator.png";

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const Home = () => {

    const scrollToAbout = () => {
        console.log('scrolling')
        var elmntToView = document.getElementById("about");
        elmntToView.scrollIntoView({behavior:"smooth"});
    }

  return (
    <main className={styles.main}>
            <div className={styles.container}>
                <HeroSection />
                <AboutSection />
                
                <div  id="projectss" style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'100vh'}} >
                    <div style={{ width:'760px' , paddingTop:'40px' , padding:'20px' , margin:'0 auto'}} >
                        <h2 style={{ width:'90vw' , fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>What I have worked on</h2>
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
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
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
                            <a className={styles.projectWrapperFour}  href="/projects/compiler"  >
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img alt="compiler" src={Compiler} width={500} />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Compiler</h3><p></p><p>This project involves the development of a compiled programming language in C.</p><p></p></div>
                                </div>
                            </a>
                            
                            <a className={styles.projectWrapperSix}  href="/projects/calculator" >
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img alt="calc" src={Calculator}  width={500}  />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Calculator</h3><p></p><p>A Java Calculator app.</p><p></p></div>
                                </div>
                            </a>
                            {/* <a className={styles.projectWrapperSix}  href="https://app.com/projects/dorker" >
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </div>

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
