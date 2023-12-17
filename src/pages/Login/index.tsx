import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [login, setLogin] = useState({ user: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleUsernameLogin() {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({ login: login.user, password: login.password })
            })
            setLoading(false)
            if (response.status === 200) {
                navigate('.')
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="h-screen flex justify-center items-center">
        <div className="border p-4 flex flex-col h-fit">
            <input type="text" placeholder="Email" value={login.user} onChange={e => setLogin({ ...login, user: e.target.value })} />
            <input type="password" placeholder="Password" value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} />
            <button onClick={handleUsernameLogin} disabled={loading}>Log in</button>
            <button disabled={loading}>Log in with github</button>
            <button disabled={loading}>Log in with google</button>
            <hr />
            <button><Link to='create-account'>Create account</Link></button>
        </div>
    </div>
}