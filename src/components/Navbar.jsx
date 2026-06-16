import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ Track hash changes (anchor clicks + browser back/forward)
    useEffect(() => {
        const updateHash = () => setActiveHash(window.location.hash);
        updateHash(); // set on mount
        window.addEventListener('hashchange', updateHash);
        return () => window.removeEventListener('hashchange', updateHash);
    }, []);

    const navLinks = [
        { label: 'Home',         href: '/' },
        { label: 'About',        href: '/about' },
        { label: 'Technologies', href: '/technology' },
        { label: 'Contact',      href: '/contact' },
        { label: 'Feedback',     href: '/feedback' },
    ];

    // ✅ Correct active check per link type
    const isActive = (href) => {
        if (href === '/') return location.pathname === '/' && activeHash === '';
        return activeHash === href;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-[#0a0e14]/95 backdrop-blur-md border-b border-[#00d4ff]/10 py-3'
                : 'bg-transparent py-5'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">

                {/* ── Logo ── */}
                <Link
                    to="/"
                    className="group flex items-center gap-2 text-[#f0f0ee] font-bold text-sm tracking-[0.2em] uppercase hover:text-[#00d4ff] transition-colors duration-200"
                >
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full group-hover:scale-125 transition-transform duration-200" />
                    Huraira Khan
                </Link>

                {/* ── Desktop Links ── */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a 
                                href={href}
                                onClick={() => {
                                    // ✅ Manually set hash on click for instant feedback
                                    if (href === '/') setActiveHash('');
                                    else setActiveHash(href);
                                }}
                                className={`relative text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 group
                                    ${isActive(href) ? 'text-[#00d4ff]' : 'text-[#8892a0] hover:text-[#f0f0ee]'}`}
                            >
                                {label}
                                <span className={`absolute -bottom-1 left-0 h-px bg-[#00d4ff] transition-all duration-300
                                    ${isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ── Desktop CTA ── */}
                <a 
                    href="/contact"
                    className="hidden md:inline-flex items-center gap-2 border border-[#00d4ff]/50 text-[#00d4ff] text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 hover:bg-[#00d4ff] hover:text-[#0a0e14] transition-all duration-200"
                >
                    Get In Touch
                </a>

                {/* ── Mobile Hamburger ── */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.25 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-px w-6 bg-[#f0f0ee] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`block h-px w-6 bg-[#f0f0ee] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-px w-6 bg-[#f0f0ee] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#0a0e14]/98 border-t border-[#00d4ff]/10 px-6 py-6 flex flex-col gap-5">
                    {navLinks.map(({ label, href }) => (
                        <a 
                            key={label}
                            href={href}
                            onClick={() => {
                                setMenuOpen(false);
                                if (href === '/') setActiveHash('');
                                else setActiveHash(href);
                            }}
                            className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200
                                ${isActive(href) ? 'text-[#00d4ff]' : 'text-[#8892a0] hover:text-[#00d4ff]'}`}
                        >
                            {label}
                        </a>
                    ))}
                    <a 
                        href="/contact"
                        onClick={() => { setMenuOpen(false); setActiveHash('/contact'); }}
                        className="mt-2 text-center border border-[#00d4ff]/50 text-[#00d4ff] text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 hover:bg-[#00d4ff] hover:text-[#0a0e14] transition-all duration-200"
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;