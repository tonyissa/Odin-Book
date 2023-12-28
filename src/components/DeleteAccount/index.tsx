import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext';
import { Errors } from '../../types/types';

export default function DeleteAccount({ active, setActive }: { active: boolean, setActive: (arg: boolean) => void }) {
    const user = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Errors>([]);

    useEffect(() => {
        setActive(true);
    }, [])

    async function deleteUser() {
        try {
            const response = await fetch('http://localhost:3000/api/delete-user', {
                mode: 'cors',
                credentials: 'include',
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            })
            if (response.status === 401) {
                return user.logoutWithMessage!();
            }
            if (response.status === 400) {
                return setErrors(await response.json());
            }
            alert('success');
            user.logout!();
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="flex items-center justify-center h-screen">
        <div className={'settings flex gap-10 ' + (active ? 'active' : '')}>
            <div>Are you sure? we&apos;d hate to see you go.</div>
            <div className='flex flex-col'>
                <label className='flex flex-col'>Please input current password:
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                {errors.map(error => {
                    return <div key={error.msg}>{error.msg}</div>
                })}
                <button onClick={deleteUser}>yes</button>
            </div>
        </div>
    </div>
}