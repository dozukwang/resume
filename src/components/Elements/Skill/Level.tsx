import { useRef } from "react"
import { iLevel, iLevelList } from "data/Elements/Skill/Skill"
import styles from "./Skill.module.scss"

const Level = ({ level }: iLevel) => {
    const progressRef = useRef(null)

    const levelList: iLevelList = {
        good: "개발/업무 가능",
        normal: "활용 가능",
        used: "사용경험 있음"
    }

    return (
        <div data-level={level} className={styles.level}>
            <div className={styles.level__detail}>{levelList[level]}</div>
            <div ref={progressRef} className={styles.level__progress} />
        </div>
    )
}

export default Level
