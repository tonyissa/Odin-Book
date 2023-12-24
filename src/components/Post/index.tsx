import { PostProps } from '../../types/types';

export default function Post({ data }: PostProps) {
    return <div>
        {data.author}
    </div>
}