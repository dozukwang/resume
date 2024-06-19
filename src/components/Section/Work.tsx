import Divider from "components/Elements/Divider"
import styles from "./Section.module.scss"
import { iWorkHistory } from "data/Elements/Work/Work"
import WorkPeriod from "components/Elements/Work/WorkPeriod"
import WorkDetail from "components/Elements/Work/WorkDetail"

const Work = () => {
    const workHistory: iWorkHistory[] = [
        {
            working: false,
            startDate: new Date("2022.04"),
            endDate: new Date("2024.06"),
            company: "Cloudraw(한국정보보호경영연구소)",
            team: "R&D부서",
            position: "Frontend Unit Leader",
            details: {
                summary: (
                    <>
                        클라우드 환경의 인프라 관리 솔루션을 제공하는
                        Cloudraw에서 클라우드 인프라 시각화 & 배포 매니지먼트
                        서비스 <b>Cloudstudio</b>를 개발했습니다.
                        <br />
                        <b>MVP 단계 이후부터 합류해 정식 출시까지</b> 참여하며
                        서비스의 필수 기능 구현과 안정화에 폭넓게 기여했습니다.
                        <br />
                        개발 외에도
                        <b>
                            서비스의 기능 및 개발 문서화 환경 조성, 업무 티켓
                            생성과 작성 관리, 코드리뷰와 스프린트 템플릿 설정
                            등의 활동
                        </b>
                        으로 커뮤니케이션과 의견 공유를 통해 함께 성장하는 환경,
                        체계적인 협업 환경을 만들기 위해 노력했습니다.
                    </>
                ),
                task: [
                    "클라우드스튜디오 서비스 프론트엔드 개발 및 유지보수",
                    "Websocket을 이용한 실시간 협업 및 캔버스 공유 기능 구현",
                    "클라우드스튜디오 관리자페이지 기획 및 개발 유저 플로우 차트, 스토리보드 등 서비스 문서 업데이트 및 관리",
                    "JIRA/Confluence 문서작성 및 업무 관리 담당",
                    "신규입사자 온보딩 교육 담당"
                ],
                else: ["2023년 우수사원 수상"],
                stacks: [
                    "HTML/CSS",
                    "SCSS",
                    "Typescript",
                    "Next.js",
                    "React",
                    "Websocket"
                ]
            }
        },
        {
            working: false,
            startDate: new Date("2021.01"),
            endDate: new Date("2021.03"),
            company: "스마일게이트 메가포트",
            team: "모바일게임 개발부서",
            position: "인턴(개발PM)",
            details: {
                summary: (
                    <>
                        모바일게임 마술양품점의 개발부서에서 개발PM으로 인턴을
                        진행했습니다.
                        <br />
                        <b>개발팀 회의록 작성, 아트팀의 업무일감 생성</b>
                        등의 업무를 통해 개발팀 서포트를 담당했고 시
                        <b>스템 기획서 기반으로 QA 시트 작성 및 테스트</b>를
                        진행하며 의도된 기능과 오류를 구분하는 방법을
                        배웠습니다.
                        <br />
                        새로운 콘텐츠 개발을 위해 몰두하고, 정기적인 업데이트를
                        통해 유저의 몰입을 이끌어내기 위한{" "}
                        <b>
                            개발팀의 협업 및 개발 과정을 경험하고 좋은 개발
                            환경에 대해 고민
                        </b>
                        하게 되었습니다.
                    </>
                ),
                task: [
                    "레드마인을 사용한 업무도움 게시판 관리 및 공지 추가",
                    "개발팀 회의록 작성 및 공유",
                    "아트팀 업무일감 생성/관리",
                    "시스템 기획서 기반 QA시트 작성 및 기능 테스트 진행"
                ],
                stacks: ["Redmine", "Excel", "Slack"]
            }
        }
    ]

    return (
        <section
            id="work_experience"
            className={`${styles.layout} ${styles.work}`}
        >
            <Divider category="Work Experience" />
            {workHistory.map((history: any) => (
                <div className={styles.work}>
                    <WorkPeriod
                        working={history.working}
                        startDate={history.startDate}
                        endDate={history.endDate ?? new Date()}
                    />
                    <WorkDetail history={history} />
                </div>
            ))}
        </section>
    )
}

export default Work
