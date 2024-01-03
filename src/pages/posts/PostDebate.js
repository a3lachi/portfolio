import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostDebate = () => {


    return (
        <div>
            <TopBar id="posts" />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>Framework vs library vs package vs module: The debate</h1>
                <p>As a software developer, this is one of the questions that is often asked, and one of a big source of confusion. In the debate about the difference between frameworks, libraries, packages and modules, what does each one of them represent.</p>
                <br></br>
                <h2>Module</h2>
                <p>Is the smallest piece of software. A module is a set of methods or functions ready to be used somewhere else.</p>
                <br></br>
                <h2>Package</h2>
                <p>Is a collection of modules. This may sound funny, but usually what a package does, is gather a number of modules holding in general the same functional purpose. Making it easier to include all the related modules at once.</p>
                <br></br>
                <h2>Library</h2>
                <p>Well library at it’s core, is a collections of packages. It’s purpose is to offer a set of functionalities ready to use without worrying about the subsequent packages. So a library is what you include when you want to add some functionality to your code. It does not force any coding style on you either.</p>
                <br></br>
                <h2>Framework</h2>
                <p>It’s a set of libraries. But this time, the framework does not just offer functionalities, but it also provides an architecture for the development work. In other words you don’t include a framework. You integrate or you code into it. It is the wire frame of the project. That’s why a framework forces its coding style on you.</p>

            </div>
            <Footer />
        </div>
    )
}


export default PostDebate;