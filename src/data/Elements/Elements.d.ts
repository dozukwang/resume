export interface iTag {
    type: "default" | "period" | "glow"
    color: "red" | "pink" | "gray" | "none"
    fontSize?: number
    message: string[] | string
}

export interface iDivider {
    category: string
}

export interface iButton {
    iconName: string,
    link?: string
}
