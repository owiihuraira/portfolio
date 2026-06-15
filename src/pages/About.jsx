import React from 'react';

function About() {
    const stats = [
        { value: '15+', label: 'Projects Shipped' },
        { value: '6+',  label: 'Months Experience' },
        { value: '5',   label: 'Technologies' },
    ];

    return (
        <section id="about" className="relative bg-[#0a0e14] py-32 px-6 md:px-16 overflow-hidden">

            {/* Subtle background glow — mirroring Home */}
            <div className="absolute -bottom-20 -right-20 w-100 h-100 bg-[#00d4ff] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        About Me
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight tracking-tight mb-16">
                    The person <br />
                    <span className="text-[#8892a0] font-normal">behind the code.</span>
                </h2>

                {/* ── Main content grid ── */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">

                    {/* Vision */}
                    <div className="group">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-8 bg-[#00d4ff]" />
                            <h3 className="text-[#f0f0ee] text-sm font-bold tracking-[0.2em] uppercase">
                                My Vision
                            </h3>
                        </div>
                        <p className="text-[#8892a0] text-[16px] leading-relaxed">
                            I believe the web should feel fast, intuitive, and beautifully crafted —
                            not just functional. My goal is to build digital experiences that users
                            interact with without thinking twice, because the interface simply gets
                            out of the way and lets the content shine.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="group">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-8 bg-[#00d4ff]" />
                            <h3 className="text-[#f0f0ee] text-sm font-bold tracking-[0.2em] uppercase">
                                My Mission
                            </h3>
                        </div>
                        <p className="text-[#8892a0] text-[16px] leading-relaxed">
                            To keep shipping, keep learning, and never settle for "good enough."
                            Every project is a chance to go deeper into React, Next.js, and the
                            craft of frontend development — turning ideas into polished, accessible
                            products that hold up in the real world.
                        </p>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-[#00d4ff]/10 mb-16" />

                {/* ── Stats row ── */}
                <div className="grid grid-cols-3 gap-8 md:gap-0 md:flex md:items-center md:divide-x md:divide-[#00d4ff]/10">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="md:px-12 first:pl-0 last:pr-0 flex flex-col gap-1">
                            <span className="text-4xl font-bold text-[#00d4ff] tracking-tight">
                                {value}
                            </span>
                            <span className="text-[#8892a0] text-xs font-semibold tracking-[0.15em] uppercase">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="mt-16">
                    <a 
                        href="/technology"
                        className="group inline-flex items-center gap-2 text-[#00d4ff] text-xs font-bold tracking-[0.2em] uppercase hover:gap-4 transition-all duration-200"
                    >
                        See My Tech Stack
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;