import Link from 'next/link'

export default function BasicButton({
    pathTo,
    customClass,
    children,
}: {
    pathTo: string
    customClass: string
    children: React.ReactNode
}) {
    return (
        <>
            <Link href={pathTo}>
                <div className={`${customClass}`}>{children}</div>
            </Link>
        </>
    )
}
