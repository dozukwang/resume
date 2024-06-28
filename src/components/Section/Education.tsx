import Divider from "../Elements/Divider"
import styles from "components/Section/Section.module.scss"
import { iFieldList } from "../../data/Elements/Education/Education"
import EduField from "../Elements/Education/EduField"

const Education = () => {
    const fieldList: iFieldList[] = [
        {
            field: "학력",
            type: "edu",
            data: {
                name: "인천대학교",
                period: "2016.03 - 2020.02",
                details: {
                    전공: "일어일문학",
                    학점: "4.22/4.5",
                    기타: "인문대학장상 수상(우수졸업생)"
                }
            }
        },
        {
            field: "어학",
            type: "map",
            data: { 영어: "TOEIC SPEAKING 150(IH)", 일본어: "JLPT N1" }
        },
        {
            field: "자격증",
            type: "list",
            data: [
                "네트워크 관리사 2급",
                "리눅스 마스터 2급",
                "NCA, NCP(네이버 클라우드 자격증)"
            ]
        },
        {
            field: "활동",
            type: "list",
            data: ["패스트캠퍼스의 FE 부트캠프 9기 멘토"]
        }
    ]

    return (
        <section id="other" className={`${styles.layout} ${styles.education}`}>
            <Divider category="Other Information" />

            {fieldList.map(({ field, type, data }) => {
                return (
                    <EduField
                        key={field}
                        field={field}
                        type={type}
                        {...{ [type]: data }}
                    />
                )
            })}
        </section>
    )
}

export default Education
