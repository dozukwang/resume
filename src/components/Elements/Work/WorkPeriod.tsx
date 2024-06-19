import { iWorkPeriod } from "data/Elements/Work/Work"
import Tag from "../Tag"
import { useEffect, useState } from "react"
import styles from "components/Elements/Work/Work.module.scss"
const WorkPeriod = ({ working, startDate, endDate }: iWorkPeriod) => {
    const [period, setPeriod] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    useEffect(() => {
        setPeriod(calculateDuration)
        setStart(changeDateFormat(startDate))
        setEnd(changeDateFormat(endDate))
    }, [])

    const calculateDuration = () => {
        const diffMonths =
            (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth() + 1)
        const years = Math.floor(diffMonths / 12)
        const months = diffMonths % 12

        let result = ""
        if (years > 0) {
            result += `${years}년 `
        }
        if (months > 0) {
            result += `${months}개월`
        }

        return result
    }

    const changeDateFormat = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        return `${year}.${month}`
    }

    return (
        <div className={styles.period}>
            <div className={styles.period__tag}>
                {period && <Tag type="default" color="gray" message={period} />}
                {working && (
                    <Tag type="default" color="red" message={"재직중"} />
                )}
            </div>
            <div>{working ? `${start} -` : start}</div>
            {!working && (
                <div className={styles["period--end"]}>{`- ${end}`}</div>
            )}
        </div>
    )
}

export default WorkPeriod
