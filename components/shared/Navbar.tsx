import Image from 'next/image'

function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 text-second max-w-[1320px] mx-auto">
            <Image
                src="/assets/Logo.svg"
                alt="Logo Pinggir Sawah"
                width={40}
                height={40}
                draggable={false}
                loading="lazy"
            />
            <ul className="flex items-center space-x-14">
                <li>
                    <a href="#menu" className="hover:text-gray-400">
                        Menu
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-gray-400">
                        Tentang Kami
                    </a>
                </li>
                <li>
                    <a href="#article" className="hover:text-gray-400">
                        Artikel
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-400">
                        Contact
                    </a>
                </li>
            </ul>
            <div />
        </nav>
    )
}

export default Navbar