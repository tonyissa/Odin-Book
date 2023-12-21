import { useContext } from 'react';
import { UserContext } from '../../components/UserContext';

export default function Dashboard() {
    const user = useContext(UserContext);

    return <>
        hello {user.username}
    </>
}