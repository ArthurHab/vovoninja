import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <h1>
                <Link href="/">Vovo Ninja</Link>
            </h1>
            <ul>
                <li>
                    <Link href="/discografia">Discografia</Link>
                </li>
                <li>
                    <Link href="/">Filmes</Link>
                </li>
                <li>
                    <Link href="/">Seriados</Link>
                </li>
                <li>
                    <Link href="/">Programas</Link>
                </li>
            </ul>
        </nav>
    )
}