export type Error = [] | [{
    location: string,
    msg: string,
    path: string,
    type: string,
    value: string
}]