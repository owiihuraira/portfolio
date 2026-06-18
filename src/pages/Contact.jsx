import { Phone } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
    {
        icon: <Phone size={16} />,
        label: "Phone",
        value: "+92 310 9713 659",
        href: "tel:+923109713659",
    },
    {
        icon: <MdEmail size={16} />,
        label: "Email",
        value: "hk4470272@gmail.com",
        href: "mailto:hk4470272@gmail.com",
    },
    {
        icon: <FaLinkedin size={16} />,
        label: "LinkedIn",
        value: "Huraira Khan",
        href: "https://www.linkedin.com/in/huraira-khan-1087133bb/",
    },
    {
        icon: <FaInstagram size={16} />,
        label: "Instagram",
        value: "@hurairxx",
        href: "https://www.instagram.com/hurairxx/",
    },
];

function Contact() {
    return (
        <section id="contact" className="relative bg-[#0a0e14] py-32 px-6 md:px-16 overflow-hidden">

            {/* Glow blob */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-[#00d4ff] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* ── Section label ── */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
                    <span className="text-[#00d4ff] text-xs font-semibold tracking-[0.3em] uppercase">
                        Contact
                    </span>
                </div>

                {/* ── Heading ── */}
                <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0ee] leading-tight tracking-tight mb-16">
                    Let's build something <br />
                    <span className="text-[#8892a0] font-normal">together.</span>
                </h2>

                {/* ── Two column layout ── */}
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left — message */}
                    <div>
                        <div className="h-px bg-[#00d4ff]/10 mb-10" />
                        <p className="text-[#8892a0] text-[16px] leading-relaxed mb-10">
                            Whether you have a project in mind, want to collaborate, or just want
                            to say hello — my inbox is always open. I'll do my best to get back
                            to you within 24 hours.
                        </p>

                        {/* Primary CTA */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hk4470272@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a0e14] px-7 py-3 text-sm font-bold tracking-wide uppercase hover:bg-white transition-colors duration-200"
                        >
                            Send Me an Email
                            <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right — contact cards */}
                    <div className="flex flex-col gap-3">
                        {contacts.map(({ icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                className="group flex items-center gap-5 bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 px-6 py-4 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover left accent */}
                                <span className="absolute left-0 top-0 h-full w-0.5 bg-[#00d4ff] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                                {/* Icon */}
                                <span className="text-[#00d4ff]">{icon}</span>

                                {/* Text */}
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8892a0]">
                                        {label}
                                    </span>
                                    <span className="text-[#f0f0ee] text-sm font-medium group-hover:text-[#00d4ff] transition-colors duration-200">
                                        {value}
                                    </span>
                                </div>

                                {/* Arrow */}
                                <svg className="w-3 h-3 text-[#8892a0] group-hover:text-[#00d4ff] ml-auto transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Footer note ── */}
                <div className="mt-24 pt-8 border-t border-[#00d4ff]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <span className="text-[#8892a0] text-xs tracking-wide">
                        © {new Date().getFullYear()} Huraira Khan. Built with React & Tailwind CSS.
                    </span>
                    <span className="text-[#00d4ff] text-xs font-mono">
                        Available for freelance work
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;