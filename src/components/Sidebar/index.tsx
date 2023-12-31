import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const user = useContext(UserContext);

    async function handleLogout() {
        try {
            await fetch('http://localhost:3000/api/logout', { mode: 'cors', credentials: 'include' });
        } catch (err) {
            console.log(err);
        } finally {
            user.logout!()
        }
    }

    return <aside className='ml-8 flex flex-col fixed top-20'>
        <nav>
            <ul>
                <div className='mb-4'>
                    <img />
                    <NavLink to='settings'>Settings</NavLink>
                </div>
                <div className='mb-4'>
                    <img />
                    <div className='cursor-pointer' onClick={handleLogout}>Logout</div>
                </div>
            </ul>
        </nav>
    </aside>
}