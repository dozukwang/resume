import Divider from "components/Elements/Divider"
import styles from "./Section.module.scss"
import { iProjectList } from "data/Elements/Project/Project"
import ProjectPeriod from "components/Elements/Project/ProjectPeriod"
import ProjectDetail from "components/Elements/Project/ProjectDetail"

const Project = () => {
    const urls = JSON.parse(process.env.REACT_APP_PROJECT_URL!)
    const projectList: iProjectList[] = [
        {
            working: false,
            startDate: new Date("2022.04"),
            endDate: new Date("2024.06"),
            project: "클라우드스튜디오 개발 및 유지보수",
            company: "Cloudraw(한국정보보호경영연구소)",
            url: urls.cloudstudio.url,
            sample: urls.cloudstudio.sample,
            description:
                "Drag&Drop 형태로 클라우드 인프라 구성도 제작, 배포된 인프라 조회 및 구성도 변환(시각화), 인프라 배포 등의 기능을 제공하는 클라우드 인프라 시각화 및 배포 매니지먼트 서비스",
            details: [
                {
                    task: "프로젝트 레거시 청산 및 리팩토링 진행",
                    details: [
                        "React 18 버전 업데이트 적용",
                        "자주 사용되는 로직 공용함수 및 customHook으로 개선 진행",
                        "중복발생되는 업데이트 횟수 1회로 개선 및 불필요한 렌더링 방지 진행",
                        "모든 컴포넌트의 데이터 타입 선언 및 적용",
                        "그 외 컴포넌트 분리, 매개변수 두께 줄이기, 변수명 형식 통일 등 클린코드 실천"
                    ]
                },
                {
                    task: "프로젝트 고도화 진행",
                    details: [
                        "내부 데이터 유효성 검증 로직의 재귀함수화 작업을 통한 자동검사 기능 구현",
                        "리소스 데이터 변경 시 모든 참조 지점에서 변경된 값을 자동으로 갱신하는 로직 구현",
                        "값변조에 의한 잘못된 동작 방지 및 데이터 일관성 보장 개선",
                        "조회한 인프라 데이터를 인프라 구성도로 전환하는 시각화 기능 구현",
                        "인프라 데이터를 내부 캔버스 데이터로 형식변환하는 로직 개발",
                        "x, y 좌표를 계산하여 일정한 간격으로 <canvas> 태그 내부에 배치하는 로직 개발",
                        "현재 인프라와 변경될 인프라의 데이터 대조 후 차이점을 도출하는 데이터 비교기능 구현"
                    ]
                },
                {
                    task: "Websocket 기반 프로젝트 협업기능 구현",
                    details: [
                        "유저 권한 및 진입 순서에 따른 프로젝트 편집권한 관리",
                        "실시간 작업 데이터 공유 및 마우스 커서위치 공유 구현"
                    ]
                },
                {
                    task: "각종 운영 이슈 처리 및 개선사항 적용",
                    details: [
                        "백엔드와 UXI 팀의 요청사항에 100% 대응",
                        "베타서비스 단계에서 직접 QA 진행 후 200여건의 이슈를 개선하며 서비스 안정화 진행",
                        "분기 별 QA 진행하며 이슈해결 및 기획개선 논의 주도"
                    ]
                },
                {
                    task: "클라우드스튜디오 서비스 문서 작성",
                    details: [
                        "IA 문서 업데이트와 전체 페이지 및 기능의 플로우차트, 스토리보드 제작 및 관리",
                        "기능 및 프론트엔드 주요 로직의 세부적인 구조와 프로세스 등을 설명한 개발문서 작성"
                    ]
                }
            ]
        },
        {
            working: false,
            startDate: new Date("2022.12"),
            endDate: new Date("2023.01"),
            project: "클라우드스튜디오 관리자 페이지",
            company: "Cloudraw(한국정보보호경영연구소)",
            description:
                "유저 계정 활성화 관리, OTP 및 비밀번호 초기화, 서비스 내부 활동로그 확인 등의 기능을 제공하는 클라우드스튜디오의 B2B용 관리자 페이지",
            details: [
                {
                    task: "관리자 페이지의 기획 및 서비스 문서 작성",
                    details: [
                        "회의록, 초기 기획문서, API 명세서 등 작성",
                        "IA 문서 업데이트와 전체 페이지 및 기능의 플로우차트, 스토리보드 제작 및 관리"
                    ]
                },
                {
                    task: "관리자 페이지 프론트엔드 개발 및 유지보수 담당",
                    details: [
                        "전체 프론트엔드 페이지 및 기능 개발",
                        "2FA 인증 기능을 통한 사용자 정보 마스킹제어 기능구현",
                        "업로드된 엑셀 파일로부터 사용자 정보 일괄 수집 및 등록 처리"
                    ]
                },
                {
                    task: "Recoil Selector을 활용한 서버 데이터 자동갱신 상태관리 구현",
                    details: [
                        "사용자 정보 변경 또는 일정시간 경과 시 조회 데이터 자동갱신 처리",
                        "서버 데이터 캐싱을 통한 화면 로딩속도 및 데이터요청 횟수 최소화"
                    ]
                }
            ]
        }
    ]

    return (
        <section id="project" className={`${styles.layout} ${styles.project}`}>
            <Divider category="Project" />
            <div>
                {projectList.map((project: iProjectList) => {
                    return (
                        <div
                            className={styles.project__detail}
                            key={project.project}
                        >
                            <ProjectPeriod
                                working={project.working}
                                startDate={project.startDate}
                                endDate={project.endDate ?? new Date()}
                            />
                            <ProjectDetail project={project} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Project
