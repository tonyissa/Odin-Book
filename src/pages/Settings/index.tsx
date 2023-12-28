import { useState } from 'react'
import PasswordSettings from '../../components/PasswordSettings';
import DeleteAccount from '../../components/DeleteAccount';

export default function Settings() {
    const [location, setLocation] = useState('');
    const [active, setActive] = useState(true);

    function handleTransition(location: string) {
        setActive(false);
        setTimeout(() => {
            setLocation(location);
        }, 300)
    }

    if (location === 'password') {
        return <PasswordSettings active={active} setActive={setActive} />
    }

    if (location === 'delete') {
        return <DeleteAccount active={active} setActive={setActive} />
    }

    return <div className="flex items-center justify-around mx-96 h-screen">
        <div className={'cursor-pointer settings ' + (active ? 'active' : '')} onClick={() => handleTransition('password')}>change password</div>
        <div className={'cursor-pointer settings ' + (active ? 'active' : '')} onClick={() => handleTransition('delete')}>delete account</div>
    </div>
}