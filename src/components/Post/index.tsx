import { PostProps } from '../../types/types';

export default function Post({ data }: PostProps) {
    return <div>
        <div>Author: {data.author}</div>
        <div>{data.body}</div>
    </div>
}