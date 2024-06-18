// 데이터
export interface iWorkHistory {
    working: boolean
    startDate: Date
    endDate?: Date
    company: string
    team: string
    position: string
    summary: string
    detail: string[]
    else?: string
    stacks: string[]
}

// 컴포넌트
export interface iWorkPeriod {
    working: boolean
    startDate: Date
    endDate: Date
}

export interface iWorkDetail {
    history: iWorkHistory
}
