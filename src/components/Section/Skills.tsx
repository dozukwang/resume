import styles from "./Section.module.scss"
import { iSkillDetail, iSkillList } from "data/Elements/Skill/Skill"
import Divider from "../Elements/Divider"
import SkillCard from "components/Elements/Skill/SkillCard"

const Skills = () => {
    const cardSkillList: iSkillList = {
        Language: [
            { name: "HTML", img: "html", level: "good" },
            { name: "CSS", img: "css", level: "good" },
            {
                name: "Javascript",
                img: "javascript",
                level: "good",
                fontSize: "20px"
            },
            {
                name: "Typescript",
                img: "typescript",
                level: "good",
                fontSize: "20px"
            }
        ],
        "Framework & Library": [
            {
                name: "Next.js",
                img: "next",
                level: "good"
            },
            {
                name: "React",
                img: "react",
                level: "good"
            },
            {
                name: "Recoil",
                img: "recoil",
                level: "good"
            },
            {
                name: "SASS",
                img: "sass",
                level: "good"
            },
            {
                name: "Storybook",
                img: "storybook",
                level: "normal",
                fontSize: "20px"
            },
            {
                name: "Tanstack Query",
                img: "tanstack",
                level: "used",
                fontSize: "18px",
                gap: "0"
            },
            {
                name: "Websocket",
                img: "websocket",
                level: "used",
                fontSize: "20px"
            }
        ],
        Design: [
            {
                name: "Figma",
                img: "figma",
                level: "used"
            },
            {
                name: "Photoshop",
                img: "photoshop",
                level: "used",
                fontSize: "20px"
            }
        ]
    }

    const lineSkillList: iSkillList = {
        Tools: [
            { name: "Git", img: "git" },
            { name: "Github", img: "github" },
            {
                name: "Gitlab",
                img: "gitlab"
            },
            {
                name: "Jira",
                img: "jira"
            },
            {
                name: "Confluence",
                img: "confluence"
            }
        ]
    }

    return (
        <section
            id="skills"
            className={`${styles.layout} ${styles.introduction}`}
        >
            <Divider category="Skills" />
            {/* 카드형 스킬 */}
            {Object.keys(cardSkillList).map((type: string) => {
                return (
                    <div className={styles.skills} key={type}>
                        <div className={styles.skills__type}>{type}</div>
                        <div
                            className={`${styles.skills__list} ${styles["skills__list--card"]}`}
                        >
                            {cardSkillList[type].map((detail: iSkillDetail) => (
                                <SkillCard
                                    key={detail.name}
                                    type="card"
                                    detail={detail}
                                />
                            ))}
                        </div>
                    </div>
                )
            })}
            {/* 글자형 스킬 */}
            {Object.keys(lineSkillList).map((type: string) => {
                return (
                    <div className={styles.skills} key={type}>
                        <div className={styles.skills__type}>{type}</div>
                        <div
                            className={`${styles.skills__list} ${styles["skills__list--line"]}`}
                        >
                            {lineSkillList[type].map((detail: iSkillDetail) => (
                                <SkillCard
                                    key={detail.name}
                                    type="line"
                                    detail={detail}
                                />
                            ))}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Skills
