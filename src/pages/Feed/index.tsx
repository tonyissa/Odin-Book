import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../components/UserContext';
import { Posts, TPost } from '../../types/types';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

export default function Feed() {
    const [data, setData] = useState<Posts>([]);
    const user = useContext(UserContext);

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch('http://localhost:3000/api/feed', {
                    method: 'get',
                    mode: 'cors',
                    credentials: 'include'
                });
                if (response.status === 401) {
                    return user.logoutWithMessage!();
                }
                const parsedPosts = await response.json();
                setData([...parsedPosts]);
            } catch (err) {
                console.log(err);
            }
        }

        getPosts();

    }, [])

    function handleNewPost(post: TPost) {
        setData([post, ...data]);
    }

    if (data) {
        return <main className="flex flex-col items-center pt-24 gap-6 min-h-screen">
            <CreatePost handleNewPost={handleNewPost} />
            {data.map(post => {
                return <Post key={post._id} data={post} />
            })}
        </main>
    }
}