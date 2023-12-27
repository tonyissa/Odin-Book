import { Link } from 'react-router-dom';

export default function Header() {
    return <header className="flex items-center gap-6 px-6 py-3 border-b-2 border-zinc-700 fixed w-full">
        <h1 className="font-bold text-xl"><Link to='.'>Odin Book</Link></h1>
        <input className="rounded-full p-2" type="text" placeholder="Search"/>
    </header>;
}