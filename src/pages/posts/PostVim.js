import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostVim = () => {



    return (
        <div>
            <TopBar id="posts" />

                <div className={styles.postcontainer}>
                    <h1 className={styles.posttitle}>What's all the hype around Vim ?</h1>
                    <p>
                        The first time I heard about Vim, it was 3 years ago. And my natural reaction was : "Why in God’s name, will I sacrifice the comfort of a modern text editor like Visual Studio Code, for an outdated, ugly, and complicated text editor ?“ (You can’t even use the mouse !).
                    </p>
                    <p>
                        In this article I will not try to convince you to switch to using Vim, I will only give you the basics, the “what you need to know as beginner” to dive in the fabulous world of Vim.
                    </p>
                    <p>
                        I will not go through the installation steps, you can Google it. Before you start using Vim, you should be aware that vim has a different philosophy. For starters, your mouse in the beginning is useless. Secondly it interprets what you type on your keyboard based on which mode you are in. Depending on the mode, your input will trigger different Vim behaviors. The default mode, the one you’ll find yourself using when you open vim is the normal mode. It’s in this mode that you’ll be navigating in your file or executing vim commands. The second one is the insert mode, the most friendly, since it makes vim do what you expect a text editor to do, write text. There are other modes that I won’t cover in this article since they are more advanced. As a reminder, if you find yourself lost in a mode, then the escape key is your friend, it will put you in the normal mode.
                    </p>
                    <p>

                    </p>
                </div>

            <Footer />
        </div>
    )
}

export default PostVim ;