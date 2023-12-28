import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginStatusProp } from '../../types/types';
import CreateAccount from '../CreateAccount';

export default function Login({ message }: LoginStatusProp ) {
    const [create, setCreate] = useState(false);
    const [login, setLogin] = useState({ id: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(message || '');
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
            const parsedRes = await response.json();
            setLoading(false)
            if (response.status === 200) {
                navigate('.', { state: { user: parsedRes } })
            } else {
                setError(parsedRes.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return create ? 
        <CreateAccount setCreate={setCreate} />
        :
        <div className="h-screen flex justify-center items-center">
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
                <button onClick={() => setCreate(true)}>Create account</button>
            </div>
        </div>
}