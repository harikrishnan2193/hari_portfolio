import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function UpButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const servicesSection = document.getElementById('skills-section')
            if (servicesSection) {
                const sectionTop = servicesSection.getBoundingClientRect().top;
                setIsVisible(sectionTop < window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        isVisible && (
            <div className="fixed bottom-6 right-6 z-50">
                <Link to="header" duration={400}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300">
                        <i className="fa-solid fa-arrow-up text-xl"></i>
                    </button>
                </Link>
            </div>
        )
    );
}

export default UpButton;
