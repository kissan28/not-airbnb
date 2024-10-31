import Image from "next/image";
import Link from "next/link";
import Desktoplogo from "../../public/airbnb-desktop.png"
import Mobilelogo from "../../public/airbnb-mobile.webp"
import { Usernav } from "./Usernav";

export function Navbar() {
    return (
        <nav className="w-full borer-b">
            <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
                <Link href="/">
                    <Image  src={Desktoplogo} alt="Airbnb logo" className="w-32 hidden lg:block"/>

                    <Image src={Mobilelogo} alt="mobile logo" className="hidden w-12"/>
                        
                </Link>
                <div className="rounded-full border px-5 py-2">
                    <h1>search bar</h1>
                </div>

                <Usernav />

            </div>
        </nav>
    )
}