import { PostProps } from '../../types/types';

export default function Post({ data }: PostProps) {
    return <div>
        <div>Author: {data.author.username}</div>
        <div>{data.body}</div>
    </div>
}