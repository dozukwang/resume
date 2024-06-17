import styles from "./Section.module.scss"
import Divider from "../Elements/Divider"

const Skills = () => {
    return (
        <section
            id="skills"
            className={`${styles.layout} ${styles.introduction}`}
        >
            <Divider category="Skills" />
        </section>
    )
}

export default Skills
