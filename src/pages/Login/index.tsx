import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [login, setLogin] = useState({ id: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleUsernameLogin() {
        try {
            setLoading(true);
            const { id, password } = login;
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({ id, password })
            })
            const parsed = await response.json();
            console.log(parsed);
            setLoading(false)
            if (response.status === 200) {
                navigate('.', { state: { user: parsed } })
            } else {
                setError(parsed.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="h-screen flex justify-center items-center">
        <div className="border p-4 flex flex-col h-fit">
            <input type="text" placeholder="Email or username" name='email' autoComplete='email' 
            value={login.id} onChange={e => setLogin({ ...login, id: e.target.value })} />
            <input type="password" placeholder="Password" name='password' autoComplete='password' 
            value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} />
            <ul>
                <li className='error-text'>{error}</li>
            </ul>
            <button onClick={handleUsernameLogin} disabled={loading}>Log in</button>
            <button disabled={loading}>Log in with github</button>
            <button disabled={loading}>Log in with google</button>
            <hr />
            <button><Link to='create-account'>Create account</Link></button>
        </div>
    </div>
}