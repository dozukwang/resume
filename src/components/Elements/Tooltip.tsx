import { iTooltip } from "../../data/Elements/Elements"
import { useState } from "react"
import styles from "./Elements.module.scss"

const Tooltip = ({ children, message }: iTooltip) => {
    const [show, setShow] = useState(false)

    const handleMouseOver = () => {
        setShow(true)
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
            setShow(false)
        }, 100)
    }

    return (
        <div
            className={styles.tooltip}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {message && (
                <div>
                    {show && (
                        // Tooptip
                        <div className={styles.tooltip__tipBox}>
                            <div className={styles.tooltip__tip}>{message}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Tooltip
