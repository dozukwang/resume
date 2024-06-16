import Tag from "components/Elements/Tag"
import styles from "components/Header/Header.module.scss"

const Header = () => {
    const tagMessage = ["경력2년", "끊임없이 고민하고", "노력해요"]

    return (
        <>
            <header className={styles.layout}>
                <div className={styles.container}>
                    <div className={styles.rundown}>
                        <p>
                            안녕하세요 <br />
                            <span>웹 프론트엔드</span> 개발자 <br />
                            강다현 입니다.
                        </p>
                        <div className={styles.rundown__tag}>
                            <Tag
                                type="glow"
                                color="none"
                                message={tagMessage}
                            />
                        </div>
                    </div>
                    <div className={styles.frame}>
                        <div className={styles.frame__image}>
                            <img
                                className="rightHand"
                                src="/images/right_hand.svg"
                            />
                            <img className="body" src="/images/body.svg" />
                            <img
                                className="leftHand"
                                src="/images/left_hand.svg"
                            />
                        </div>
                        <div className={styles.frame__shape}>
                            <img src="/images/spark.png" />
                            <img src="/images/twinkle.png" />
                            <img src="/images/star.png" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
