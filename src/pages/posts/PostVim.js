import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";
import postVimStyles from "./PostVim.module.css";


const PostVim = () => {



    return (
        <div>
            <TopBar id="postss" />

                <div className={styles.postcontainer}>
                    <h1 className={styles.posttitle}>What's all the hype around Vim ?</h1>
                    <p>
                        The first time I heard about Vim, it was 3 years ago, my natural reaction was : "Why in God’s name, will I sacrifice the comfort of a modern text editor like Visual Studio Code, for an outdated, ugly, and complicated text editor ?“ (You can’t even use the mouse !).
                    </p>
                    <p>
                        In this article I will not try to convince you to switch to using Vim, I will only give you the basics, the “what you need to know as beginner” to dive in the fabulous world of Vim.
                    </p>
                    <p>
                        I will not go through the installation steps, you can Google it. Before you start using Vim, you should be aware that vim has a different philosophy. For starters, your mouse in the beginning is useless. Secondly it interprets what you type on your keyboard based on which mode you are in. Depending on the mode, your input will trigger different Vim behaviors. The default mode, the one you’ll find yourself using when you open vim is the normal mode. It’s in this mode that you’ll be navigating in your file or executing vim commands. The second one is the insert mode, the most friendly, since it makes vim do what you expect a text editor to do, write text. There are other modes that I won’t cover in this article since they are more advanced. As a reminder, if you find yourself lost in a mode, then the escape key is your friend, it will put you in the normal mode.
                    </p>
                    <br></br><br></br>
                    <h2>Opening or creating a new file :</h2>
                    <p>Open your terminal and enter the following command :</p>
                    <pre className={postVimStyles.codex}>
                        <code>vim name_of_your_file</code>
                    </pre>
                    <p>This will open the file you specified, or the create a new one if it doesn’t exist. Once you do this you’ll find yourself in the normal mode. We are not writing text right away, first you need to know some basic Vim commands. A Vim command usually start by typing ‘:’ then the command, and the first one is exiting Vim since it’s the most asked question about Vim.</p>
                    <ul className={postVimStyles.commands}><li><code>:q</code> To quit Vim. Note here, Vim won’t allow you to quit if you didn’t save your file.</li><li><code>:w</code> To save (<strong>w</strong>rite) a file.</li><li><code>:wq</code> To save and quit.</li><li><code>:q!</code> To force quit if you want to force quit without saving the file.</li></ul>
                    <br></br>
                    <h2>Writing text :</h2>
                    <p>Well if you survived until here, you’ll find your reward by typing “i”. It will put you in the insert mode, and now you can type text as you please. And when you are done, you can use your escape key to go back to the normal mode to save your changes or quit.</p>
                    <br></br>
                    <h2>Some other useful shortcuts (In the normal mode) :</h2>
                    <ul className={postVimStyles.commands}><li><code>dd</code>: To cut the line where the cursor is.</li><li><code>yy</code>: To copy the line where the cursor is.</li><li>number_of_lines_you_want_to_cut + <code>dd</code>: You guess it, it will cut the number of lines you specifies starting from the current line of the cursor.</li><li>number_of_lines_you_want_to_copy + <code>yy</code>: Again the number of the lines you want to copy starting from the line with the cursor.</li><li><code>p</code>: To <strong>p</strong>aste starting from the next line of the cursor.</li><li><code>/</code> + term_you_want_to_search: it will make the cursor go to the next occurrence of the term.</li><li><code>n</code>: To go to the next occurrence of the term.</li><li>shift + <code>n</code>: Go to the previous occurrence of the term.</li><li><code>u</code>: If you messed up something, this will undo the last change. You can press it multiple times to go older in the changes’ history.</li><li>ctrl + <code>r</code>: To redo the changes.</li></ul>
                    <br></br>
                    <h2>Conclusion :</h2>
                    <p>Vim, or not Vim, this is not the question. A text editor is ,first of all, just a tool to achieve bigger things. But a great tool, makes them easier. I hope that, with this article, I have helped you in your quest of finding the adequate text editor for you. And that this quick introduction to Vim, have opened your appetite to learn more about Vim, or a least have expended a little bit the horizon of your knowledge.</p>
                </div>

            <Footer />
        </div>
    )
}

export default PostVim ;