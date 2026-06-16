function Introduction() {
    const highlights = [
        {
            label: "My Introduction",
            desc: "I'm Huraira — a self-taught frontend developer based in Pakistan. I started with pure HTML and CSS, fell in love with building things for the web, and never stopped. Today I work with React, Next.js, and Tailwind to build interfaces that are fast, clean, and enjoyable to use.",
        },
        {
            label: "My Portfolio",
            desc: "Every project in this portfolio represents a real problem I set out to solve — not just a tutorial I followed. From responsive landing pages to dynamic React apps, each piece reflects how I think about structure, design, and user experience.",
        },
    ];

    return (
        <section id="introduction" className="relative bg-[#0a0e14] py-32 px-6 md:px-16 overflow-hidden">

            {/* Glow blob */}
            <div className="absolute -top-20 -right-20 w-112.5 h-112.5 bg-[#00d4ff] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        Introduction
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight tracking-tight mb-16">
                    Who I am & <br />
                    <span className="text-[#8892a0] font-normal">what I've built.</span>
                </h2>

                {/* ── Divider ── */}
                <div className="h-px bg-[#00d4ff]/10 mb-16" />

                {/* ── Two column content ── */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    {highlights.map(({ label, desc }) => (
                        <div key={label}>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="h-px w-8 bg-[#00d4ff]" />
                                <h3 className="text-[#f0f0ee] text-sm font-bold tracking-[0.2em] uppercase">
                                    {label}
                                </h3>
                            </div>
                            <p className="text-[#8892a0] text-[16px] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* ── Timeline ── */}
                <div className="h-px bg-[#00d4ff]/10 mb-16" />

                <div className="flex items-center gap-4 mb-10">
                    <span className="h-px w-8 bg-[#00d4ff]" />
                    <span className="text-[#f0f0ee] text-sm font-bold tracking-[0.2em] uppercase">
                        My Journey
                    </span>
                </div>

                <div className="flex flex-col gap-0">
                    {[
                        { year: "2024", event: "Wrote my first HTML page — and got hooked." },
                        { year: "2025", event: "Learned CSS, JavaScript, and built my first interactive projects." },
                        { year: "2026", event: "Picked up React and started thinking in components." },
                        { year: "2026", event: "Moved into Next.js and Tailwind CSS for production-ready apps." },
                    ].map(({ year, event }, i) => (
                        <div key={i} className="group flex gap-8 relative">
                            {/* Vertical line */}
                            <div className="flex flex-col items-center">
                                <div className="w-px bg-[#00d4ff]/20 flex-1" />
                                <span className="w-2 h-2 rounded-full bg-[#00d4ff] my-2 group-hover:scale-150 transition-transform duration-200" />
                                <div className="w-px bg-[#00d4ff]/20 flex-1" />
                            </div>

                            {/* Content */}
                            <div className="pb-10 pt-1">
                                <span className="text-[10px] font-mono text-[#00d4ff] tracking-[0.2em]">{year}</span>
                                <p className="text-[#8892a0] text-[15px] mt-1 group-hover:text-[#f0f0ee] transition-colors duration-200">{event}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="mt-8">
                    <a
                        href="/projects"
                        className="group inline-flex items-center gap-2 text-[#00d4ff] text-xs font-bold tracking-[0.2em] uppercase hover:gap-4 transition-all duration-200"
                    >
                        See My Projects
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Introduction;