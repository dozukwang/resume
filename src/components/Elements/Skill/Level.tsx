import React, { useEffect, useRef } from "react"
import {
    iLevel,
    iLevelList
} from "../../../data/components/Elements/Skill/Skill"
import styles from "./Skill.module.scss"

const Level = ({ level }: iLevel) => {
    const progressRef = useRef(null)
    const levelList: iLevelList = {
        good: { message: "개발/업무 가능", color: "rgb(var(--reg-600))" },
        normal: { message: "활용 가능", color: "rgb(var(--reg-600))" },
        used: { message: "사용경험 있음", color: "rgb(var(--reg-600))" }
    }

    useEffect(() => {
        if (progressRef.current) {
            const afterElement = document.querySelector(
                `.${styles.level__progress}::after`
            ) as HTMLElement

            if (afterElement)
                afterElement.style.backgroundColor = levelList[level].color
        }
    }, [level])

    return (
        <div data-level={level}>
            <div>{levelList[level].message}</div>
            <div ref={progressRef} className={styles.level__progress} />
        </div>
    )
}

export default Level
