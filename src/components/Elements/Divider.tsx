import styles from "components/Elements/Elements.module.scss"
import { iDivider } from "data/components/Elements/Elements"

const Divider = ({ category }: iDivider) => {
    return (
        <div className={styles.divider}>
            <h1>{category}</h1>
        </div>
    )
}
export default Divider
