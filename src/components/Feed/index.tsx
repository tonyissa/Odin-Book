import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext';
import { Posts } from '../../types/types';

export default function Feed() {
    const [data, setData] = useState<Posts>([]);
    const [skipNum, setSkipNum] = useState(0);
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
                    body: JSON.stringify({ friends: user.friends, skipNum })
                });
                const parsed = await response.json();
                setData([...data, ...parsed]);
            } catch (err) {
                console.log(err);
            }
        }

        getPosts();

    }, [skipNum])

    async function handleScroll() {
        if (skipNum === null) {
            setSkipNum(skipNum + 6);
        }
    }

    if (data) {
        return <main onScroll={handleScroll} className="flex-1 flex justify-center mt-24">
        this yo feed nigga
        </main>
    }
}