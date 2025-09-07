import styles from './Home.module.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';

const Home = () => {

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection />
            <Footer />
        </div>
    </main>
  );
}

export default Home;
