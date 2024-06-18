import { iSkillCard } from "data/Elements/Skill/Skill"
import Level from "./Level"
import styles from "./Skill.module.scss"

const SkillCard = ({ detail, type = "card" }: iSkillCard) => {
    return (
        <>
            {type === "card" && (
                <div
                    style={{
                        gap: detail.gap ?? "6px"
                    }}
                    className={styles.skillCard}
                >
                    <div
                        style={{
                            fontSize: detail.fontSize ?? "24px"
                        }}
                        className={styles.skillCard__logo}
                    >
                        <img
                            src={`/images/logo/${detail.img}.png`}
                            alt={detail.img}
                        />
                        {detail.name}
                    </div>
                    <Level level={detail.level!} />
                </div>
            )}
            {type === "line" && (
                <div className={styles.skillLine}>
                    <img
                        src={`/images/logo/${detail.img}.png`}
                        alt={detail.img}
                    />
                    {detail.name}
                </div>
            )}
        </>
    )
}

export default SkillCard
