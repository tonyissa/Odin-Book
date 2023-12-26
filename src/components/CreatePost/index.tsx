import { ChangeEvent, useContext, useState } from 'react';
import { NewPostProps } from '../../types/types';
import { UserContext } from '../UserContext';

export default function CreatePost({ handleNewPost }: NewPostProps) {
    const [input, setInput] = useState('');
    const [warning, setWarning] = useState(false);
    const user = useContext(UserContext);

    async function handleUpload() {
        try {
            const response = await fetch('http://localhost:3000/api/post', {
                mode: 'cors',
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input })
            })
            if (response.status === 200) {
                const parsed = await response.json();
                parsed.author = { username: user.username }
                handleNewPost(parsed);
                setInput('');
            }
        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setInput(event.currentTarget.value);
        if (input.length > 3000) {
            setWarning(true);
        }
    }

    return <div className="flex flex-col">
        <h1 className={'self-center ' + warning ? 'invalid' : '' }>Create post</h1>
        <textarea value={input} onChange={handleChange} />
        <div className={'self-end ' + warning ? 'invalid' : '' }>{input.length}/3000</div>
        <button disabled={warning} onClick={handleUpload}>upload?</button>
    </div>;
}