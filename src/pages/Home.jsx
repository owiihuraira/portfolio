import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div className="relative min-h-screen bg-[#0a0e14] flex items-center overflow-hidden">

            {/* Background grid texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Cyan glow blob */}
            <div className="absolute -top-25 -left-25 w-125 h-125 bg-[#00d4ff] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex items-stretch w-full max-w-7xl mx-auto min-h-screen">

                {/* ── Left: Photo ── */}
                <div className="hidden md:block w-[42%] relative">
                    <img
                        src="/myimg.JPG"
                        alt="Huraira"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Gradient overlay fading into dark bg */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#0a0e14]/30 to-[#0a0e14]" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0e14]/60 via-transparent to-transparent" />
                </div>

                {/* ── Right: Content ── */}
                <div className="flex flex-col justify-center px-10 md:px-16 py-24 flex-1">

                    {/* Eyebrow */}
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
                        Frontend Developer
                    </span>

                    {/* Name */}
                    <h1 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight mb-4 tracking-tight">
                        Huraira
                    </h1>

                    {/* Typing animation with cyan accent bar */}
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-0.75 h-8 bg-[#00d4ff] rounded-full animate-pulse" />
                        <TypeAnimation
                            sequence={[
                                'Building interactive interfaces.',
                                1500,
                                'React · Next.js · Tailwind CSS.',
                                1500,
                                'Turning ideas into experiences.',
                                1500,
                            ]}
                            wrapper="span"
                            speed={55}
                            repeat={Infinity}
                            className="text-lg md:text-xl text-[#8892a0] font-mono"
                        />
                    </div>

                    {/* Bio */}
                    <p className="text-[#8892a0] text-[16px] leading-relaxed max-w-lg mb-12">
                        I specialize in crafting fast, accessible, and visually refined web experiences
                        using modern frontend technologies. Every project is an opportunity to ship
                        something that feels effortless to use.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="/introduction"
                            className="group inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a0e14] px-7 py-3 text-sm font-bold tracking-wide uppercase hover:bg-white transition-colors duration-200"
                        >
                            Introduction
                            <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a 
                            href="/contact"
                            className="inline-flex items-center gap-2 border border-[#8892a0]/40 text-[#8892a0] px-7 py-3 text-sm font-semibold tracking-wide uppercase hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors duration-200"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 mt-14">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'].map(tech => (
                            <span
                                key={tech}
                                className="text-[11px] font-mono text-[#8892a0] border border-[#8892a0]/20 px-3 py-1 rounded-full hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;