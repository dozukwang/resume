import { iProejctDetail, iProject } from "data/Elements/Project/Project"
import styles from "./Project.module.scss"
import Button from "../Button"
import Tooltip from "../Tooltip"

const ProjectDetail = ({ project }: iProejctDetail) => {
    return (
        <div className={styles.detail}>
            <div className={styles.detail__project}>
                <div className={styles.detail__project__header}>
                    <h2>{project.project}</h2>
                    <div className={styles.detail__project__buttonGroup}>
                        {project.url && (
                            <Tooltip message={"서비스 바로가기"}>
                                <Button iconName="ri-link" link={project.url} />
                            </Tooltip>
                        )}
                        {project.sample && (
                            <Tooltip message="작업물 미리보기">
                                <Button
                                    iconName="ri-image-line"
                                    link={project.sample}
                                />
                            </Tooltip>
                        )}
                    </div>
                </div>
                <h4>{project.company}</h4>
            </div>
            <div className={styles.detail__description}>
                <div className={styles.detail__description__badge}>
                    프로젝트 설명
                </div>
                <p>{project.description}</p>
            </div>
            <div className={styles.detail__task}>
                {project.details.map((detail: iProject, index) => {
                    return (
                        <div className={styles.detail__task__box}>
                            <div className={styles.detail__task__header}>
                                <span>{index + 1}</span>
                                {detail.task}
                            </div>
                            <ul className={styles.detail__task__list}>
                                {detail.details.map((work: string) => (
                                    <li>{work}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectDetail
