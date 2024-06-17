import styles from "components/Section/Section.module.scss"
import Divider from "../Elements/Divider"
const Introduction = () => {
    return (
        <section
            id="introduction"
            className={`${styles.layout} ${styles.introduction}`}
        >
            <Divider category="Introduction" />
            <p>
                다른 사람에게 자신 있게 추천할 수 있는 제품을 만들기 위해
                노력하고 있습니다.
                <br />
                <br />
                유저가 사용하기 좋은 제품을 만들기 위해 유저의 입장에서
                생각해보며 개선점을 모색합니다. <br />
                문제점이 발견되면 즉각 대응하고 꼼꼼한 이슈 관리와 코드 개선을
                통해 해결해 나갑니다. <br />
                적극적인 커뮤니케이션을 통해 최적의 방향을 찾아가며 팀원에게
                먼저 다가갑니다. 혼자 개발하지 않습니다. <br />
                코드 컨벤션을 잘 지키고 문서화, 업무관리, 정보 공유를 준수하며
                팀원과 함께 일합니다.
                <br />
                <br />
                개발하는 서비스에 자부심을 갖고, 유익하고 재미있는 경험을 제공할
                수 있는 서비스를 개발기 <br />
                위해 프론트엔드 개발자로서 계속해서 고민하고 도전하며 성장하고
                있습니다. <br />
                <br />
                반갑습니다.
            </p>
        </section>
    )
}

export default Introduction
