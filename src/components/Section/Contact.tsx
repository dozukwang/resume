import styles from "./Section.module.scss"
import Divider from "../Elements/Divider"

const Contact = () => {
    return (
        <section id="contact" className={`${styles.layout} ${styles.contact}`}>
            <Divider category="Contact" />
            <div className={styles.contact__container}>
                <div className={styles.contact__message}>
                    {process.env.REACT_APP_EMAIL}
                </div>
                <i className="ri-mail-line" />
                연락을 기다리고 있습니다 :)
            </div>
        </section>
    )
}

export default Contact
