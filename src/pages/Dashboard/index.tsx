// import { useContext } from 'react';
// import { UserContext } from '../../components/UserContext';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';

export default function Dashboard() {
    // const user = useContext(UserContext);

    return <>
        <Header />
        <div className='dashboard'>
            <Sidebar />
            <Feed />
        </div>
    </>
}