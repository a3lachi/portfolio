import styles from './App.module.css';
import LanBlock from './components/LanBlock';


const App = () => {

    const scrollToAbout = () => {
        console.log('scrolling')
        var elmntToView = document.getElementById("about");
        elmntToView.scrollIntoView({behavior:"smooth"});
    }

    const changeZindex = (target,indx) => {
        console.log('a'+target.target.id)
        var a = 'a'+target.target.id
        var elem = document.getElementById(a)
        if (elem) {elem.style.zIndex = indx}
    }
  return (
    <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.landing}>
                    <div>
                        <div style={{ fontFamily:'Verdana' , opacity:'0.5'}}>Hello! I am</div>
                        <div style={{ fontFamily:'Verdana'  , fontWeight:'bold' , fontSize:'2.5em'}}>AALACHI MOHAMED</div>
                        <div style={{ fontFamily:'Verdana' , fontSize:'3.5em' }}>a SOFTWARE ENGINEER</div>

                        <div style={{ display:'flex' , justifyContent:'center' , marginTop:'20px'}} >
                            <div className={styles.arrow}><img src="./arrow.svg" alt="arrow" width={20} style={{ marginRight:'15px' }} /></div>
                            <div style={{ fontFamily:'Courier New' , cursor:'pointer' }} onClick={scrollToAbout} >Know more</div>
                        </div>
                    </div>
                </div>
                <div id='about' className={styles.about} style={{ marginTop:'100vh' , width:'100vw' , backgroundColor:'black' , color:'white' , minHeight:'100vh'}} >
                        <img src={"/me.jpg"} alt="myphoto" width={700}  />
                        <div style={{ maxWidth:'760px' , paddingTop:'40px' , padding:'20px'}}>
                            <h2 style={{ fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>Who am I</h2>
                            <p>I have always been passionate about building software, always strove to learn more, discover technologies
                            and understand the different paradigms behind each one of them. <span style={{fontWeight:'bold'}} class="bold">The goal of my journey
                            is to understand the secrets behind good software</span> and its success.</p><p>As a result of this life long learning process, I am able to <span class="bold">design</span> and write
                            <span style={{fontWeight:'bold'}} class="bold"> modular, expandable and clean software</span>. I always try to <span style={{fontWeight:'bold'}} class="bold">solve
                            problems in a language agnostic-manner</span>, in order to choose the most suited technology to the
                            problem at hand.</p><p><span style={{fontWeight:'bold'}} class="bold">I believe in this being the main purpose of a software engineer !</span></p>
                        </div> 
                        
                        <div style={{ maxWidth:'760px' , paddingTop:'40px' , padding:'20px'}}>
                            <h2 style={{ fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>What I believe in</h2>
                            <h2>Good Design</h2> <p> The design is the most important phase of any software project. That's why I gathered important skill in that field to be able to make good software.</p>
                            <h2>Clean Development</h2> <p>The development phase can't be accomplished successfully without writing a code that checks all the requirement of a good one, like the K.I.S.S principle.</p>
                            <h2>Quality Software</h2> <p>A clean code and good design can't be enough if not coupled with other important qualities like extensibility, modularity or reusability. All of those pieces come together to create quality software.</p>
                        </div>
                        <div style={{ maxWidth:'760px' , paddingTop:'40px' , padding:'20px'}}>
                            <h2 style={{ fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>Programming languages I use</h2>

                            <div className={styles.stack}>
                                <div className={styles.lanzwrap } >
                                <div className={styles.lanz}>
                                    <LanBlock ext=".py" lan="Python" />
                                    <LanBlock ext=".sh" lan="Bash" />
                                    <LanBlock ext=".js" lan="Javascript" />
                                    <LanBlock ext=".c" lan="C" />
                                    <LanBlock ext=".cpp" lan="C++" />
                                    <LanBlock ext=".java" lan="Java" />
                                    <LanBlock ext=".ts" lan="Typescript" />
                                    <LanBlock ext=".sql" lan="PLSQL" />
                                    <LanBlock ext=".rb" lan="Ruby" />
                                    <LanBlock ext=".hs" lan="Haskell" />
                                    
                                </div>
                                </div>
                                
                                    
                            </div>
                        </div>

                    <div>
                    </div>
                    
                </div>
                <div  style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'100vh'}} >
                    <div style={{ width:'760px' , paddingTop:'40px' , padding:'20px' , margin:'0 auto'}} >
                        <h2 style={{ width:'90vw' , fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem'}}>What I have worked on</h2>
                        <div className={styles.projectsContainer}>
                            <a className={styles.projectWrapperOne} href="https://app.com/projects/dorker" >
                                <div id="1" className={styles.project} >
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a>
                            <a className={styles.projectWrapperTwo}  href="https://app.com/projects/dorker">
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a>
                            <a className={styles.projectWrapperThree}  href="https://app.com/projects/dorker">
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a>
                            <a className={styles.projectWrapperFour}  href="https://app.com/projects/dorker"  >
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a>
                            <a className={styles.projectWrapperFive}  href="https://app.com/projects/dorker" >
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a>
                            <a className={styles.projectWrapperSix}  href="https://app.com/projects/dorker" >
                                <div className={styles.project}>
                                    <div className={styles.projectImage}>
                                        <img src="./dorker.png" />
                                    </div>
                                    <div id="projectText" className={styles.projectText}><h3>Google Crawler</h3><p></p><p>This project was requiring me to make a program that crawls Google and retrieve links using Selenium library in Python.</p><p></p></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{  width:'100vw' , backgroundColor:'black' , zIndex:'3' , color:'white' , minHeight:'100vh' , paddingBottom:'50px'}} >
                    <div style={{maxWidth:'960px' , margin:'0 auto'}}>
                        <h2 style={{ width:'90vw' , fontFamily:'Verdana' , opacity:'0.5' , fontSize:'2rem' , padding:'20px'}}>Posts I have written</h2>
                        <div class={styles.writes}>
                            <ul>
                            <li><a className={styles.textHover} href="">Deploy a full-stack e-commerce app
<span class={styles.date}>Dec 21, 2023</span></a></li>
                                <li><a className={styles.textHover} href="">Should you Implement Authentication Yourself?
<span class={styles.date}>Mar 21, 2023</span></a></li>
                                <li><a href="">How to code a compiler
<span class={styles.date}>Jan 17, 2023</span></a></li>
                                <li><a href="">Vim for starters - the minimum you need to know
<span class={styles.date}>Dec 25, 2022</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div  style={{  width:'100vw' , backgroundColor:'white' , zIndex:'3' , color:'black' , minHeight:'10vh' }} >
                <div className={styles.contact}><p>Contact me by <a href="mailto:mad.aalachi@gmail.com">mail</a>
<span className={styles.social}><a href="http://www.github.com/a3lachi"><img src="img/github.svg" width={20} /></a>
<a href="https://www.linkedin.com//"><img src="img/linkedin.svg" width={20} /></a>
<a href="https://twitter.com/a3laxi"><img src="img/twitter.svg" width={20} /></a></span>
<span className={styles.copyright}>© 2022 - 2023</span></p></div>
                </div>

            </div>

        
    </main>
  );
}

export default App;
