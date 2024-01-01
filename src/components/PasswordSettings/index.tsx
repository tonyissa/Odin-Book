import { useContext, useEffect, useState } from 'react';
import { Errors } from '../../types/types';
import { UserContext } from '../UserContext';

export default function PasswordSettings({ active, setActive }: { active: boolean, setActive: (arg: boolean) => void }) {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState<Errors>([]);
    const user = useContext(UserContext);

    useEffect(() => {
        setActive(true);
    }, [])

    async function changePassword() {
        try {
            const response = await fetch('http://localhost:3000/api/change-password', {
                mode: 'cors',
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ oldPassword, password, confirm })
            });
            if (response.status === 401) {
                return user.logoutWithMessage!();
            }
            if (response.status === 400) {
                return setErrors(await response.json());
            }
            alert('success')
        } catch (err) {
            console.log(err);
        }
    }

    return <div className="flex items-center justify-center h-screen">
        <div className={'flex settings ' + (active ? 'active' : '')}>
            <div className="flex flex-col">
                <h1>Please input your current password.</h1>
                <h1>Leave blank if setting password for the first time.</h1>
            </div>
            <div className='flex flex-col'>
                <input type='password' value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder='Old Password' />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='New Password' />
                <input type='password' value={confirm} onChange={e => setConfirm(e.target.value)} placeholder='Confirm Password' />
                <button onClick={changePassword}>Submit password change</button>
                {errors.map(error => {
                    return <div key={error.msg}>{error.msg}</div>
                })}
            </div>
        </div>
    </div>
}