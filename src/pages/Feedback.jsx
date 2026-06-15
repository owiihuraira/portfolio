function Feedback() {
    const reasons = [
        { label: "Clean Code",       desc: "Every component is readable, reusable, and built to last." },
        { label: "Fast Delivery",    desc: "I scope projects carefully and hit deadlines consistently." },
        { label: "Modern Stack",     desc: "React, Next.js, Tailwind — tools that scale with your product." },
        { label: "Open to Feedback", desc: "I iterate quickly and communicate clearly throughout." },
    ];

    return (
        <section id="feedback" className="relative bg-[#0a0e14] py-32 px-6 md:px-16 overflow-hidden">

            {/* Glow blob */}
            <div className="absolute top-[-60px] right-[-60px] w-[400px] h-[400px] bg-[#00d4ff] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        Thank You
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight tracking-tight mb-6">
                    Glad you made it <br />
                    <span className="text-[#8892a0] font-normal">to the end.</span>
                </h2>

                <p className="text-[#8892a0] text-[16px] leading-relaxed max-w-2xl mb-16">
                    Thanks for taking the time to explore my portfolio. I put real care into
                    every project I ship — and I bring that same energy to every collaboration.
                    If something here caught your eye, let's talk.
                </p>

                {/* ── Divider ── */}
                <div className="h-px bg-[#00d4ff]/10 mb-16" />

                {/* ── Reasons grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {reasons.map(({ label, desc }) => (
                        <div
                            key={label}
                            className="group relative bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 transition-all duration-300"
                        >
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#00d4ff] group-hover:w-full transition-all duration-300" />

                            <h3 className="text-[#f0f0ee] text-sm font-bold tracking-[0.15em] uppercase mb-3">
                                {label}
                            </h3>
                            <p className="text-[#8892a0] text-[13px] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* ── CTA block ── */}
                <div className="bg-[#0d1117] border border-[#00d4ff]/10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
                            Ready to collaborate?
                        </p>
                        <h3 className="text-[#f0f0ee] text-2xl md:text-3xl font-bold leading-snug">
                            Have a project in mind? <br />
                            <span className="text-[#8892a0] font-normal">I'd love to hear about it.</span>
                        </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                        <a
                            href="/contact"
                            className="group inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a0e14] px-7 py-3 text-sm font-bold tracking-wide uppercase hover:bg-white transition-colors duration-200"
                        >
                            Contact Me
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;