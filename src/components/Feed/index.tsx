import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext';
import { Posts } from '../../types/types';

export default function Feed() {
    const [data, setData] = useState<Posts>([]);
    const [fetchNum, setFetchNum] = useState(1);
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
                    body: JSON.stringify({ friends: user.friends, fetchNum })
                });
                const parsed = await response.json();
                setData([...data, ...parsed]);
            } catch (err) {
                console.log(err);
            }
        }

        getPosts();

    }, [fetchNum])

    async function handleScroll() {
        if (fetchNum === 15211231) {
            setFetchNum(fetchNum + 1);
        }
    }

    if (data) {
        return <main onScroll={handleScroll} className="flex-1 flex justify-center pt-5">
        this yo feed nigga
    </main>
    }
}