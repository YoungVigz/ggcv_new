import { useState } from "react"
import { navData } from "../utils"

const NavItems = ({ onClick = () => {} }) => (
    <div className="flex justify-between items-center">
        {navData.map(({id, href, title}) => (
            <div key={id} className="p-2 text-neutral-400 hover:text-white transition-colors" onClick={onClick}>
                <a href={href}>{title}</a>
            </div>
        ))}
    </div>
)

const NavBar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    const toggleMenu = () => setIsMenuOpen((prevMenuState) => !prevMenuState)
    const closeMenu = () => setIsMenuOpen(false);

    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    GGCV
                </a>

                <button 
                    className="text-neutral-400 hover:text-white sm:hidden flex"
                    onClick={toggleMenu}>
                    <img src={isMenuOpen ? 'assets/cross.svg' : 'assets/hamburger.svg'} alt="toggle" className="w-7 h-7" />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>

            <div className={`nav-sidebar ${isMenuOpen ? 'max-h-screen' : 'hidden'}`}>
                <nav className="text-sm">
                    <NavItems onClick={closeMenu}/>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default NavBar