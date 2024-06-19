// 데이터
export interface iProjectList {
    working: boolean
    startDate: Date
    endDate?: Date
    project: string
    company: string
    url?: string
    sample?: string
    description: string
    details: iProject[]
}

export interface iProject {
    task: string
    details: string[]
}

// 컴포넌트
export interface iProejctDetail {
    project: iProjectList
}

export interface iPojectPeriod {
    working: boolean
    startDate: Date
    endDate: Date
}
