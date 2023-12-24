import { useState } from 'react';

export default function CreatePost() {
    const [input, setInput] = useState('');

    async function handleUpload() {

    }


    return <div className="flex flex-col">
        <h1 className='self-center'>Create post</h1>
        <textarea value={input} onChange={e => setInput(e.target.value)} />
        <div className='self-end'>{input.length}/1500</div>
        <button onClick={handleUpload}>upload image?</button>
    </div>;
}