import { BaseSyntheticEvent, useState } from "react"
import { iMenus, menuNames } from "data/Navigation/Navigation"
import styles from "./Navigation.module.scss"

const Navigation = () => {
    const [section, setSection] = useState<menuNames>("자기소개")
    const menus: iMenus[] = [
        { ref: "introduction", name: "자기소개" },
        { ref: "skills", name: "기술스택" },
        { ref: "work_experience", name: "경력" },
        { ref: "project", name: "프로젝트" },
        { ref: "education", name: "교육" }
    ]

    const changeCurrentSection = (event: BaseSyntheticEvent) => {
        setSection(event.target.innerText)
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__wrapper}>
                {menus.map((menu) => (
                    <a
                        key={menu.name}
                        data-active={section === menu.name}
                        href={`#${menu.ref}`}
                        onClick={changeCurrentSection}
                    >
                        {menu.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Navigation
