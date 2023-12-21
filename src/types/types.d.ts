export type Error = [] | [{
    location: string,
    msg: string,
    path: string,
    type: string,
    value: string
}]

export type User = Record<string, never> | {
    _id: string,
    username: string,
    email: string,
    password: string,
    about: string,
    friends: [] | [string],
    requests: [] | [string],
    facebookId?: string
}

export type UserProps = {
    user: {
        _id: string,
        username: string,
        email: string,
        password: string,
        about: string,
        friends: [] | [string],
        requests: [] | [string],
        facebookId?: string
    }
}