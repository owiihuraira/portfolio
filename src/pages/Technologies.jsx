// Technologies.jsx
import TechCard from "../components/TechCard";

const techs = [
    {
        name: "HTML",
        logo: "/html.png",
        level: "Proficient",
        description: "Semantic markup that structures every page I build — written with accessibility and SEO in mind from the start.",
    },
    {
        name: "CSS",
        logo: "/css-3.png",
        level: "Proficient",
        description: "From custom properties to complex animations — I write CSS that is organized, scalable, and precise.",
    },
    {
        name: "JavaScript",
        logo: "/js.png",
        level: "Intermediate",
        description: "The engine behind interactivity. I use modern ES6+ patterns to write clean, readable, and performant code.",
    },
    {
        name: "React.js",
        logo: "/logo_dark.svg",
        level: "Intermediate",
        description: "My primary UI library. I build component-driven interfaces with hooks, context, and a focus on reusability.",
    },
    {
        name: "Next.js",
        logo: "/vercel.svg",
        level: "Learning",
        description: "Server-side rendering, file-based routing, and full-stack capabilities — my go-to for production-ready apps.",
    },
    {
        name: "Tailwind CSS",
        logo: "tailwindd.svg",
        level: "Proficient",
        description: "Utility-first styling that keeps my workflow fast and my designs consistent across every breakpoint.",
    },
    {
        name: "Bootstrap",
        logo: "/bootstrap.png",
        level: "Proficient",
        description: "Rapid prototyping with a solid grid system and ready-made components — great for getting ideas on screen fast.",
    },
];

function Technologies() {
    return (
        <section id="technologies" className="relative bg-[#0a0e14] py-32 px-6 md:px-16 overflow-hidden">

            {/* Glow — top left, mirroring About's bottom right */}
            <div className="absolute -top-20 -left-20 w-100 h-100 bg-[#00d4ff] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        Technologies
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight tracking-tight mb-4">
                    TOOL's I build <br />
                    <span className="text-[#8892a0] font-normal">with every day.</span>
                </h2>

                <p className="text-[#8892a0] text-[16px] leading-relaxed max-w-xl mb-16">
                    A focused stack I've chosen deliberately — each tool picked because it makes
                    the end result faster, more reliable, or easier to maintain.
                </p>

                {/* ── Divider ── */}
                <div className="h-px bg-[#00d4ff]/10 mb-16" />

                {/* ── Cards grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techs.map((tech) => (
                        <TechCard key={tech.name} {...tech} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="mt-16">
                    <a 
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-[#00d4ff] text-xs font-bold tracking-[0.2em] uppercase hover:gap-4 transition-all duration-200"
                    >
                        Let's Work Together
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Technologies;