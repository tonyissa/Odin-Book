import { useEffect } from 'react'

export default function DeleteAccount({ active, setActive }: { active: boolean, setActive: (arg: boolean) => void }) {
    useEffect(() => {
        setActive(true);
    }, [])

    return <div className="flex items-center justify-center h-screen">
        <div className={'settings flex ' + (active ? 'active' : '')}>
            <div>Are you sure? we&apos;d hate to see you go.</div>
            <button>yes</button>
        </div>
    </div>
}