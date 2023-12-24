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

type Post = {
    _id: string,
    body: string,
    filename: string,
    date: Date,
    author: string,
    likes: number
}

export type Posts = [] | Post[]