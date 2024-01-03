import { useEffect, useRef } from 'react';
import { ChatProps } from '../../types/types';

export default function Chat({ messages }: ChatProps) {
    const scrollTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollTarget.current!.scrollIntoView({ behavior: 'smooth' });
    }, [messages.length]);

    return <div className='basis-10/12 mt-14'>
        {messages.map(message => {
            return <div key={message.id} style={{color: `hsl(${message.color}, 100%, 50%)`}}>{message.sender}:
                <span>{' ' + message.body}</span>
            </div>
        })}
        <div ref={scrollTarget} />
    </div>;
}