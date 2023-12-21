import { useContext } from 'react'
import { UserContext } from '../../components/UserContext'

export default function Feed() {
    const user = useContext(UserContext);

    return <>
        <div>{user.username}</div>
    </>
}