import { iDetails, iWorkDetail } from "data/Elements/Work/Work"
import Tag from "../Tag"
import styles from "components/Elements/Work/Work.module.scss"

const WorkDetail = ({ history }: iWorkDetail) => {
    const indexList: Record<keyof iDetails, string> = {
        summary: "활동",
        task: "담당업무",
        else: "기타",
        stacks: "스택"
    }

    return (
        <div className={styles.detail}>
            <div className={styles.detail__company}>
                <div>
                    <h2>{history.company}</h2>
                    {history.companyDetail && <h2>{history.companyDetail}</h2>}
                </div>
                <h4>{`${history.team} • ${history.position}`}</h4>
            </div>
            {Object.entries(history.details).map(([key, words]) => {
                const index = key as keyof iDetails
                return (
                    <div className={styles.details}>
                        <div className={styles.details__index}>
                            <h3>{indexList[index]}</h3>
                        </div>

                        {index === "summary" && (
                            <div>
                                <p>{words}</p>
                            </div>
                        )}

                        {index === "task" && (
                            <ul className={styles.details__task}>
                                {words.map((task: string) => (
                                    <li>{task}</li>
                                ))}
                            </ul>
                        )}

                        {index === "else" && (
                            <div>
                                {words.map((word: string) => (
                                    <div>{word}</div>
                                ))}
                            </div>
                        )}

                        {index === "stacks" && (
                            <div className={styles.details__stacks}>
                                <Tag
                                    type="default"
                                    color="pink"
                                    message={words}
                                />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default WorkDetail
