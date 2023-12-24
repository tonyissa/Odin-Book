import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Sidebar() {
    const user = useContext(UserContext);

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
                    <p>Logout</p>
                </div>
            </ul>
        </nav>
    </aside>
}