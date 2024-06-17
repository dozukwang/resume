type tLevel = "good" | "normal" | "used"

// 컴포넌트
export interface iLevel {
    level: tLevel
}

// 데이터
export interface iLevelList {
    [key: string]: { message: string; color: string }
}
