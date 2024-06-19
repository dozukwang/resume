import { iPojectPeriod } from "data/Elements/Project/Project"
import styles from "./Project.module.scss"
import { useEffect, useState } from "react"
const ProjectPeriod = ({ working, startDate, endDate }: iPojectPeriod) => {
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    useEffect(() => {
        setStart(changeDateFormat(startDate))
        setEnd(changeDateFormat(endDate))
    }, [])

    const changeDateFormat = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        return `${year}.${month}`
    }

    return (
        <div className={styles.period}>
            <div>{working ? `${start} -` : start}</div>
            {!working && (
                <div className={styles["period--end"]}>{`- ${end}`}</div>
            )}
        </div>
    )
}

export default ProjectPeriod
