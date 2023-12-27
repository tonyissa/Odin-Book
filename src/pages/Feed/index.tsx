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
                    method: 'post',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ friends: user.friends, _id: user._id, skipNum: data.length })
                });
                const parsedPosts = await response.json();
                setData([...data, ...parsedPosts]);
            } catch (err) {
                console.log(err);
            }
        }

        getPosts();

    }, [])

    function handleNewPost(post: TPost) {
        setData([post, ...data])
    }

    if (data) {
        return <main className="flex-1 flex flex-col items-center mt-24 gap-6">
            <CreatePost handleNewPost={handleNewPost} />
            {data.map(post => {
                return <Post key={post._id} data={post} />
            })}
        </main>
    }
}