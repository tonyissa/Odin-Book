// import { useContext } from 'react';
// import { UserContext } from '../../components/UserContext';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';

export default function Dashboard() {
    // const user = useContext(UserContext);

    return <div className='flex flex-col justify-center'>
        <Sidebar />
        <Feed />
    </div>
}