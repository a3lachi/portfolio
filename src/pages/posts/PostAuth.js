import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostAuth = () => {



    return (
        <div>
            <TopBar id="posts" />

                <div className={styles.postcontainer} style={{ width:'700px'}}>
                    <h1 className={styles.posttitle}>Should you implement Authentication yourself ?</h1>
                    <p>
                    I did lookup lately some services that handles authentication for you, handling user data, logins, sign-ups, and password retrieval - all the irritating authentication chores. Two big names that come to mind are Auth0 (I really dislike that name it mixes with the protocol name) and Amazon Cognito. Usually, I don't lean towards using these services. I prefer doing authentication myself, not starting from scratch but customizing it to fit my needs with some help from libraries.
                    </p>

                    <p>
                        However, I'm reconsidering. For small-scale startup projects with basic authentication needs – logging in, user registration, and password resets – using services like Auth0 seems logical. One major perk is the speed; they already have authentication set up, so I'd mainly work on the front end and make API calls for different tasks. While it's a time-saver, since I'm already quick at setting up authentication, the speed advantage isn't a huge selling point for me.
                    </p>

                    <p>
                        I see front-end developers gaining the most. If I were solely a front-end developer uninterested in back-end complexities, using a service like this would be a clear win. But for aspiring or current back-end developers, learning to create your authentication system holds immense value. It's a skill applicable across various projects and jobs.
                    </p>

                    <p>
                        The problems related to security comes to mind if one is thinking about implementing his own authentication in a large scale or in entreprise level, that’s where managed systems like Auth0 or Amazon Cognito comes to play with guaranteed. While they have security experts, I'm not entirely convinced they're inherently more secure than well-tested open-source alternatives like Passport.js for Node.js. I feel these companies might exaggerate authentication complexity to drive users toward their services.
                    </p>

                    <p>
                        What primarily holds me back from these services is their lack of flexibility. I prefer having control over authentication to tailor it precisely for each project's needs. However, if faced with a more complex authentication setup, I'd likely consider using such services.
                    </p>
                </div>

            <Footer />
        </div>
    )
}

export default PostAuth ;