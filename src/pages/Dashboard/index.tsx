import LiveChatWrapper from '../../components/LiveChatWrapper';
import Sidebar from '../../components/Sidebar';
import Feed from '../Feed';

export default function Dashboard() {

    return <div className='app'>
        <Sidebar />
        <Feed />
        <LiveChatWrapper />
    </div>
}