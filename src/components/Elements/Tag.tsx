import styles from "components/Elements/Elements.module.scss"
import { iTag } from "data/Elements/Elements"

const Tag = ({ type, color, message, fontSize = 16 }: iTag) => {
    return (
        <>
            {typeof message === "string" ? (
                <div
                    style={{ fontSize: `${fontSize}px` }}
                    className={styles.tag}
                    data-color={color}
                    data-type={type}
                    data-size={fontSize}
                >
                    {message}
                </div>
            ) : (
                message.map((msg, index) => (
                    <div
                        key={`${msg}_${index}`}
                        style={{ fontSize: `${fontSize}px` }}
                        className={styles.tag}
                        data-color={color}
                        data-type={type}
                        data-size={fontSize}
                    >
                        {msg}
                    </div>
                ))
            )}
        </>
    )
}

export default Tag
