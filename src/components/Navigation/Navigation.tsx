import { useState } from "react"
import { iMenus, menuNames } from "../../data/components/Navigation/Navigation"
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

    return (
        <div className={styles.navigation}>
            {menus.map((menu) => (
                <a
                    key={menu.name}
                    data-active={section === menu.name}
                    href={`#${menu.ref}`}
                >
                    {menu.name}
                </a>
            ))}
        </div>
    )
}

export default Navigation
