function Navbar() {
    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-white'>
            <nav className="flex items-center justify-between py-6 text-second max-w-[1320px] mx-auto">
                <h1 className='font-playfair text-main text-3xl font-semibold'>W.M Pasar iboe</h1>
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
                <div className="w-1/6"/>
            </nav>
        </div>
    )
}

export default Navbar