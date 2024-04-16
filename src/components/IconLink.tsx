import Link from "next/link";

export default function IconLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} target="_blank" className="text-gray-400">{children}</Link>
    );
}
