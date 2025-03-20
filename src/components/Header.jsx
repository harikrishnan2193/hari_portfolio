import React, { useState } from 'react'
import { Link } from 'react-scroll'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div id='header' className="container py-8 mx-auto lg:px-lg-padding xl:px-xl-padding">
                <nav className="flex flex-col sm:flex-row items-center justify-between py-3 px-8 border border-gray-500 rounded-2xl space-y-4 sm:space-y-0">
                    <h1 className="sm:text-lg font-semibold font-roboto text-white text-center sm:text-left text-2xl">HARIKRISHNAN</h1>
                    <div className="hidden text-white xl:flex flex-col sm:flex-row space-x-0 sm:space-x-8 space-y-2 sm:space-y-0">
                        <Link to='services' className="hover:text-blue-400 hover:cursor-pointer">SERVICES</Link>
                        <Link to='skills-section' className="hover:text-blue-400 hover:cursor-pointer">SKILLS</Link>
                        <Link to='potfolio' className="hover:text-blue-400 hover:cursor-pointer">PROJECTS</Link>
                    </div>

                    <div className="hidden xl:flex space-x-4 text-2xl">
                        <a href='https://wa.me/9495312193' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href='https://t.me/hari_krishnank' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/harikrishnan-k-9747792a2' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="xl:hidden text-white text-3xl"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>

                <div className={`fixed top-0 right-0 w-3/4 sm:w-1/3 h-full bg-custom-background transition-all duration-500 ease-in-out transform ${isMenuOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-full scale-90 opacity-0"} z-50 shadow-lg`}>
                    <div className="p-5">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-3xl"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <nav className="flex flex-col items-start space-y-10 p-5 text-white">
                        <Link to='services' onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">My Services</Link>
                        <Link to='skills-section' onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Skills</Link>
                        <Link to='potfolio' onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Projects</Link>
                        <Link to='experience' onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Experience</Link>
                        <Link to='education' onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Education</Link>
                        <Link to='contact' onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Contact</Link>

                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header