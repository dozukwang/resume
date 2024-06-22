import styles from "./EduField.module.scss"
import { tField } from "../../../data/Elements/Education/Education"
import { ReactElement, useEffect, useState } from "react"

const EduField = ({ type, field, edu, list, map }: tField) => {
    const [detail, setDetail] = useState<ReactElement | null>(null)

    useEffect(() => {
        setDetail(makeTypeComponent())
    }, [])

    const makeTypeComponent = () => {
        switch (type) {
            case "edu":
                if (!edu) return null
                return (
                    <div className={styles.edu}>
                        <div className={styles.edu__info}>
                            <span>{edu.name}</span>
                            <span>{edu.period}</span>
                        </div>
                        <ul className={styles.edu__details}>
                            {Object.entries(edu.details).map(
                                ([key, detail]) => (
                                    <li>
                                        <span>{key}</span>
                                        {detail}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                )
            case "list":
                if (!list) return null
                return (
                    <ul className={styles.list}>
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
                    <ul className={styles.map}>
                        {Object.entries(map).map(([key, value]) => (
                            <li key={key}>
                                <span>{key}</span>
                                {value}
                            </li>
                        ))}
                    </ul>
                )
            default:
                return null
        }
    }

    return (
        <>
            {detail && (
                <div className={styles.field}>
                    <div className={styles.field__key}>{field}</div>
                    {detail}
                </div>
            )}
        </>
    )
}

export default EduField
