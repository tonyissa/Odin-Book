import { useContext, useEffect, useRef, useState } from 'react'
import Spinner from '../Spinner'
import { UserContext } from '../UserContext';
import Chat from '../Chat';
import { Message } from '../../types/types';

export default function LiveChatWrapper() {
    const [messages, setMessages] = useState<[] | Message[]>([]);
    const [isConnectionOpen, setConnectionOpen] = useState(false);
    const [messageBody, setMessageBody] = useState('');
    const user = useContext(UserContext)

    const ws = useRef<null | WebSocket>(null);

    useEffect(() => {
        ws.current = new WebSocket(`ws://localhost:3000/${user.username}`)

        ws.current.onopen = () => {
            setConnectionOpen(true);
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages(prev => [...prev, data]);
        };

        return () => {
            if (isConnectionOpen) {
                ws.current!.close();
            }
        }
    }, [])

    function sendMessage() {
        if (messageBody) {
            ws.current!.send(JSON.stringify({ body: messageBody }))
        }
        setMessageBody('');
    }

    return <div className="flex flex-col justify-center fixed w-3/12 right-0 h-screen shadow-md">
            { isConnectionOpen ?
                <>
                    <Chat messages={messages} />
                    <textarea className='basis-2/12 shrink-0' value={messageBody} onChange={e => setMessageBody(e.target.value)} />
                    <button onClick={sendMessage}>Submit?</button>
                </>
            :
                <Spinner />
            }
    </div>
}