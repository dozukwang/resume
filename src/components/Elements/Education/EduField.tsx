import { tField } from "../../../data/Elements/Education/Education"
import styles from "./EduField.module.scss"

const EduField = ({ type, edu, list, map }: tField) => {
    switch (type) {
        case "edu":
            if (!edu) return null
            return (
                <div className={styles.edu}>
                    <div className={styles.edu__info}>
                        <span>{edu.name}</span>
                        <span>{edu.period}</span>
                    </div>
                    <div className={styles.edu__details}>
                        {Object.entries(edu.details).map(([key, detail]) => (
                            <ul>
                                <li>
                                    <span>{key}</span>
                                    {detail}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            )
        case "list":
            if (!list) return null
            return (
                <ul>
                    {list.map((item, index) => (
                        <li key={item}>
                            <span>{index + 1}</span>
                            {item}
                        </li>
                    ))}
                </ul>
            )
        case "map":
            if (!map) return null
            return (
                <div>
                    {Object.entries(map).map(([key, value]) => (
                        <li key={key}>
                            <span>{key}</span>
                            {value}
                        </li>
                    ))}
                </div>
            )
        default:
            return null
    }
}

export default EduField
