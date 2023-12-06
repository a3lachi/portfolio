import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostDeploy = () => {



    return (
        <div>
            <TopBar id="posts" />

                <div className={styles.postcontainer} style={{ width:'700px'}}>
                    <h1 className={styles.posttitle}>Full stack e-commerce</h1>
                    <p>
                        Vim by its nature is very heavy on the key usage. It’s very important in the modal editing philosophy of the editor. But when we are talking about Vim, we are talking about minimal hand movement in the first place, since it is the reason behind all of its design choices. For this reason many have found the usage of the  very unintuitive to use, and prefer to map it to a more easier to access key combination. Many tutorials over the internet suggest changing it to a combination close to the home row like jk, a combo I did not personally find useful.
                    </p>
                </div>

            <Footer />
        </div>
    )
}

export default PostDeploy ;