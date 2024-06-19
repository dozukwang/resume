import { iButton } from "data/Elements/Elements"
import styles from "./Elements.module.scss"

const Button = ({ iconName, link }: iButton) => {
    return (
        <div className={styles.button}>
            {link && <a href={link} target="_blank" />}
            <i className={iconName} />
        </div>
    )
}

export default Button
