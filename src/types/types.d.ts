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
    facebookId?: string,
    logoutWithMessage: () => void
}

export type UserProps = {
    user: User
}

export type TPost = {
    _id: string,
    body: string,
    filename: string,
    date: Date,
    author: {
        username: string
    },
    likes: number
}

export type PostProps = {
    data: TPost
}

export type Posts = [] | TPost[]

export type NewPostProps = {
    handleNewPost: (post: TPost) => void
}

export type LoginStatusProp = {
    message: string
}