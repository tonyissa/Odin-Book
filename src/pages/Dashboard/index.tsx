import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';

export default function Dashboard() {

    return <div className='flex flex-col justify-center'>
        <Sidebar />
        <Feed />
    </div>
}