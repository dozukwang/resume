import styles from "components/Header/Header.module.scss"
const Header = () => {
    return (
        <header className={styles.layout}>
            <p>
                안녕하세요
                <div>웹 프론트엔드</div> 개발자 강다현 입니다.
            </p>
        </header>
    )
}

export default Header
