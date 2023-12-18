import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
    const [account, setAccount] = useState({ email: '', username: '', password: '', confirm: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function createAccount() {
        try {
            setLoading(true);
            const { email, username, password, confirm } = account;
            const response = await fetch('http://localhost:3000/api/create-account', {
                mode: 'cors',
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, username, password, confirm })
            })
            const parsed = await response.json();
            console.log(parsed);
            setLoading(false);
            if (response.status === 200) {
                navigate('.', { state: { user: parsed } })
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="h-screen flex justify-center items-center">
        <div className="border p-4 flex flex-col h-fit">
            <input type="email" placeholder="Email" value={account.email} onChange={e => setAccount({ ...account, email: e.target.value })} />
            <input type="text" placeholder="Desired username" value={account.username} onChange={e => setAccount({ ...account, username: e.target.value })} />
            <input type="password" placeholder="Password" value={account.password} onChange={e => setAccount({ ...account, password: e.target.value })} />
            <input type="password" placeholder="Confirm password" value={account.confirm} onChange={e => setAccount({ ...account, confirm: e.target.value })} />
            <button onClick={createAccount} disabled={loading}>Create account</button>
        </div>
    </div>
}