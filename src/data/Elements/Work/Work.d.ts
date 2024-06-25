import { ReactElement } from "react"

// 데이터
export interface iWorkHistory {
    working: boolean
    startDate: Date
    endDate?: Date
    company: string
    companyDetail?: string
    team: string
    position: string
    details: iDetails
}

export interface iDetails {
    summary: ReactElement
    task: string[]
    else?: string[]
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
