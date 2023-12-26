import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Sidebar() {
    const user = useContext(UserContext);

    async function handleLogout() {
        try {
            await fetch('http://localhost:3000/api/logout', { mode: 'cors', credentials: 'include' });
            user.logout()
        } catch (err) {
            console.log(err);
        }
    }

    return <aside className='ml-8 flex flex-col fixed top-24'>
        <nav>
            <ul>
                <div className='mb-4'>
                    <img />
                    <p>{user.username}</p>
                </div>
                <div className='mb-4'>
                    <img />
                    <p>Find friends</p>
                </div>
                <div className='mb-4'>
                    <img />
                    <p>Settings</p>
                </div>
                <div className='mb-4'>
                    <img />
                    <div className='sidebar-link' onClick={handleLogout}>Logout</div>
                </div>
            </ul>
        </nav>
    </aside>
}