import { useState } from "react"
import { iMenus, menuNames } from "../../data/components/Navigation/Navigation"
import styles from "./Navigation.module.scss"

const Navigation = () => {
    const [section, setSection] = useState<menuNames>("자기소개")
    const menus: iMenus[] = [{ ref: "introduction", name: "자기소개" }]

    return (
        <div className={styles.navigation}>
            {menus.map((menu) => (
                <a data-active={section === menu.name} href={`#${menu.ref}`}>
                    {menu.name}
                </a>
            ))}
        </div>
    )
}

export default Navigation
