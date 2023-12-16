import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostDeploy = () => {



    return (
        <div>
            <TopBar id="posts" />

                <div className={styles.postcontainer}>
                    <h1 className={styles.posttitle}>Full stack e-commerce</h1>
                    <p>
                    </p>
                </div>

            <Footer />
        </div>
    )
}

export default PostDeploy ;