'use client' 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Router() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="flex justify-center lg:justify-end flex-wrap mt-4 mb-8 mx-auto max-w-[1680px]">
                <li>
                    <Link className={`btn link ${pathname === '/' ? 'active font-bold bg-stone-200' : ' bg-stone-100'}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`btn link ${pathname === '/tictactoe' ? 'active font-bold bg-stone-200' : ' bg-stone-100'}`} href="/tictactoe">TicTacToe</Link>
                </li>
                {/* <li>
                    <Link className={`btn bg-stone-50`} href="/">Print&nbsp;CV</Link>
                </li> */}
                <li>
                    <Link className={`btn bg-stone-50`} href="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Router;

