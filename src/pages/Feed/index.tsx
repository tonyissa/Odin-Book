import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../components/UserContext';
import { Posts, TPost } from '../../types/types';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';

export default function Feed() {
    const [data, setData] = useState<Posts>(null);
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
                if (parsedPosts.length !== 0) { 
                    setData([...parsedPosts]);
                } else if (data?.[Symbol.iterator]) {
                    setData([...data!, ...parsedPosts]);
                }
            } catch (err) {
                console.log(err);
            }
        }

        getPosts();

    }, [])

    function handleNewPost(post: TPost) {
        if (data?.[Symbol.iterator]) {
            setData([post, ...data!]);
        } else {
            setData([post]);
        }
    }

    if (data) {
        return <main className="flex flex-col items-center pt-24 gap-6 min-h-screen mb-24">
            <CreatePost handleNewPost={handleNewPost} />
            {data.length > 0 ? 
            data.map(post => {
                return <Post key={post._id} data={post} />
            })
            :
            <h1>There are no posts here. Add friends so you can see their posts, and make your own!</h1>
            }
        </main>
    }
}