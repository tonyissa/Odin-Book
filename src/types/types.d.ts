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
    user: User
}

export type Post = {
    _id: string,
    body: string,
    filename: string,
    date: Date,
    author: string,
    likes: number
}

export type PostProps = {
    data: Post
}

export type Posts = [] | Post[]