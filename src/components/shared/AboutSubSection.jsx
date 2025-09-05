import styles from "./AboutSubSection.module.css";

const AboutSubSection = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {children}
    </div>
  );
};

export default AboutSubSection;