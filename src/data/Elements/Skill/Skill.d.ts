type tLevel = "good" | "normal" | "used"

// 데이터
export interface iLevelList {
    [key: string]: string
}

export interface iSkillDetail {
    name: string
    img: string
    level?: tLevel
    fontSize?: stirng
    gap?: string
}

export interface iSkillList {
    [key: string]: iSkillDetail[]
}

// 컴포넌트
export interface iLevel {
    level: tLevel
}

export interface iSkillCard {
    type: "card" | "line"
    detail: iSkillDetail
}
