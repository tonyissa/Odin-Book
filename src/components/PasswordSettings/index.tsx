import { useEffect, useState } from 'react';

export default function PasswordSettings({ active, setActive }: { active: boolean, setActive: (arg: boolean) => void }) {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    useEffect(() => {
        setActive(true);
    }, [])

    return <div className="flex items-center justify-center h-screen">
        <div className={'settings ' + (active ? 'active' : '')}>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
            <input type='text' value={confirm} onChange={e => setConfirm(e.target.value)} placeholder='Confirm password' />
            <button>Submit password change</button>
        </div>
    </div>
}