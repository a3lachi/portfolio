import styles from './Home.module.css';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Aalachi Mohamed - Software Engineer Portfolio</title>
        <meta name="description" content="Aalachi Mohamed - Software Engineer specializing in full-stack development, modern web technologies, and clean code architecture. Portfolio featuring React, Python, Java, and C projects." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aalachi Mohamed",
              "alternateName": "Mohamed Aalachi",
              "jobTitle": "Software Engineer",
              "description": "Software Engineer specializing in full-stack development, modern web technologies, and clean code architecture",
              "url": "https://a3lachi.vercel.app/",
              "image": "https://a3lachi.vercel.app/a3la.jpg",
              "email": "mad.aalachi@gmail.com",
              "sameAs": [
                "https://www.github.com/a3lachi",
                "https://www.linkedin.com/in/mohamed-aalachi-878479252/",
                "https://www.youtube.com/channel/UC2A26hYnRVkNp1vn1eWSeCg",
                "https://twitter.com/a3laxi"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Full Stack Development",
                "React",
                "Python",
                "Java",
                "C",
                "TypeScript",
                "Bash",
                "PL/pgSQL",
                "Web Development",
                "Clean Code",
                "Software Architecture"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Software Engineer"
              }
            }
          `}
        </script>
      </Helmet>
      <main className={styles.main}>
          <div className={styles.container}>
              <HeroSection />
              <AboutSection />
              <ProjectSection />
              <BlogSection />
              <Footer />
          </div>
      </main>
    </>
  );
}

export default Home;
