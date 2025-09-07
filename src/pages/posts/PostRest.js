import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import styles from "../Projects.module.css";


const PostRest = () => {



    return (
        <div>
            <TopBar id="postss" />

            <div className={styles.postcontainer}>
                <h1 className={styles.posttitle}>What is a REST api ?</h1>
                <p>
                    A REST API (Representational State Transfer Application Programming Interface) is a set of rules and conventions for building and interacting with web services. The term representational state transfer was introduced and defined in 2000 by computer scientist Roy Fielding in his doctoral dissertation. It means that a server will respond with the representation of a resource (today, it will most often be an HTML, XML or JSON document) and that resource will contain hypermedia links that can be followed to make the state of the system change. Any such request will in turn receive the representation of a resource, and so on.
                </p>
                <br></br>
                <h2>Characteristics and principles of REST APIs</h2>
                <p><b>Stateless</b> : Each request from a client to a server must contain all the information needed to understand and process the request. The server should not store any information about the client's state between requests.</p>
                <p><b>Client-Server Architecture</b> : The client and server are separate entities that communicate over a network. The client is responsible for the user interface and user experience, while the server is responsible for processing requests and managing resources. The client-server design pattern enforces the separation of concerns, which helps the client and the server components evolve independently. By separating the user interface concerns (client) from the data storage concerns (server), we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.</p>
                <p><b>Uniform Interface </b>: REST APIs have a consistent and uniform interface, which simplifies and standardizes communication. This interface is typically made up of resources (identified by URIs), HTTP methods (such as GET, POST, PUT, DELETE), and representations (such as JSON or XML).</p>
                <p> <b>Resource-Based </b>: Resources are the key abstractions in a RESTful system. Each resource is identified by a unique URI, and interactions with resources are performed using standard HTTP methods.</p>
                

            </div>
            <Footer />
        </div>
    )
}

export default PostRest ;