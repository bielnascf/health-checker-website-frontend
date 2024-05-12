import Link from "next/link";

export function Header() {
    return (
        <header className="bg-sky-950 flex justify-between items-center px-8 py-6"> 
            <div>
                <span className="text-white text-xl"><span className="text-orange-500">DNS</span> Health Checker</span>
            </div>
            <nav>
                <ul className="flex gap-8 text-white">
                    <li><Link href="/" id="homeLink">Home</Link></li>
                    <li><Link href="/Favorites" id="favLink">Favorites</Link></li>
                    <li><Link href="/About" id="aboutLink">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}