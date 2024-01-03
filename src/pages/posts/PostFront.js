import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostFront = () => {



    return (
        <div>
            <TopBar id="posts" />

                <div className={styles.postcontainer}>
                    <h1 className={styles.posttitle}>Front-end development is not software engineering</h1>
                    <p>
                        To discuss this matter, we need to define front-end developement before differentiating it from software engineering.
                    </p>

                    <p>
                        Front-end focuses on the user interface (UI) and user experience (UX) of a website or web application. It involves building and implementing the visible parts of a website that users interact with directly in a web browser. It is for sure "building" software, yet it dosen't meet with the phases of the developement of a software.
                    </p>

                    <p>
                        Developing a software require a set of methodologies to follow, and is not about knowing how to use a technology, it's more about algorithms than a learned skill, knowing React or a Js framework dosen't make you an engineer. Knowing how React renders and its underlying paradigms also don't make you an engineer, writing your library might though.
                    </p>

                    <p>
                        Working on UI/UX don't follow an algorithmic approach, you either know how to center a div or you google it, you can't just engineer it, you have to learn the skill, whereas building a piece of software like a compiler is all about algorithms, no set of skills is required, you code the algorithm and work on making it efficient.
                    </p>

                    <p>
                        You can't build a dynamic or even static website without "knowing" CSS or HTML, you can code a compiler in any language following its algorithm, without prior knowledge of the language you use (it's unrecommended to do so though). A website is not an algorithm, it's more a creative design. The role of a front-end developer is to figure out how to turn the design to HTML.
                    </p>

                    <p>
                        A web app as a piece of software is everything about a design less about an algorithm. There is no algorithmic approach in turning Figma designs to HTML and CSS. You solve no problems, the engineering part is omitted, you use previous experience with dealing with HTML pieces to combine a full page.
                    </p>

                    <p>
                        This being said, there is no engineering of a web app, it's a creative process that requires knowing how to use well a technology. It can't be done in a language agnostic matter, whereas building a software can. You start with an UML design of its component and transform that design to a code, much of the work is designing the software, the coding part easily flows. 
                    </p>

                </div>

            <Footer />
        </div>
    )
}

export default PostFront ;