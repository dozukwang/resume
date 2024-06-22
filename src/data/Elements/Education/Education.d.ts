// 데이터
type iFieldEduData = {
    name: string
    period: string
    details: { [key: string]: string }
}

type iFieldListData = string[]

type iFieldMapData = {
    [key: string]: string
}

interface iFieldList {
    field: string
    type: "edu" | "list" | "map"
    data: iFieldEduData | iFieldListData | iFieldMapData
}

// 컴포넌트
export type tField = {
    type: "edu" | "list" | "map"
    field: string
    edu?: iFieldEduData
    list?: iFieldListData
    map?: iFieldMapData
}
