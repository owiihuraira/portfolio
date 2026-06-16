import React, { useState } from "react";

const projects = [
    {
        id: 1,
        image: "/project1.png",
        title: "Portfolio",
        tag: "React · Tailwind CSS",
        description: "A fully responsive web application built with React and Tailwind CSS, focused on clean UI and smooth user experience.",
        live: "/",
    },
    {
        id: 2,
        image: "/project2.png",
        title: "Space-Tourism",
        tag: "Next.js · Tailwind",
        description: "An interactive frontend project demonstrating modern JavaScript patterns and pixel-perfect responsive design.",
        live: "https://space-tourism-delta-swart.vercel.app/",
    },
    {
        id: 3,
        image: "/project3.png",
        title: "Todo-App",
        tag: "Next.js · Tailwind CSS",
        description: "A Next.js application with server-side rendering, optimized performance, and a polished, production-ready interface.",
        live: "https://todo-app-two-coral-63.vercel.app/",
    },
    {
        id: 4,
        image: "/project4.png",
        title: "Project Four",
        tag: "React · CSS",
        description: "A component-driven React project showcasing reusable architecture, state management, and responsive layouts.",
        live: "https://normal-dashboard.vercel.app/",
    },
];

function ProjectCard({ image, title, tag, description, live, code }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="group relative bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#00d4ff] group-hover:w-full transition-all duration-300 z-10" />

            {/* Image */}
            <div className="relative overflow-hidden h-52">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <a className={`absolute inset-0 cursor-pointer bg-[#0a0e14]/70 transition-opacity duration-300
                    ${hovered ? "opacity-100" : "opacity-0"}`}
                    href={live}
                >                    
                </a>
            </div>

            {/* Card content */}
            <div className="p-6">
                <span className="text-[10px] font-mono text-[#00d4ff] tracking-[0.2em] mb-2 block">
                    {tag}
                </span>
                <h3 className="text-[#f0f0ee] font-bold text-base tracking-tight mb-3">
                    {title}
                </h3>
                <p className="text-[#8892a0] text-[13px] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <section id="projects" className="relative bg-[#0a0e14] py-32 px-6 md:px-16 overflow-hidden">

            {/* Glow blob */}
            <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] bg-[#00d4ff] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        Projects
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight tracking-tight mb-4">
                    Things I've <br />
                    <span className="text-[#8892a0] font-normal">shipped.</span>
                </h2>

                <p className="text-[#8892a0] text-[16px] leading-relaxed max-w-xl mb-16">
                    A selection of projects I've built — each one a chance to solve a real
                    problem, try a new technology, or push my skills further.
                </p>

                {/* ── Divider ── */}
                <div className="h-px bg-[#00d4ff]/10 mb-16" />

                {/* ── Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="mt-16">
                    <a
                        href="https://github.com/owiihuraira"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 text-[#00d4ff] text-xs font-bold tracking-[0.2em] uppercase hover:gap-4 transition-all duration-200"
                    >
                        See More on GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;