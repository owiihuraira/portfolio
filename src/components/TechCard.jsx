// TechCard.jsx
function TechCard({ name, logo, description, level }) {
    return (
        <div className="group relative bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 rounded-none p-6 transition-all duration-300 hover:bg-[#0d1117]/80 w-full">

            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#00d4ff] group-hover:w-full transition-all duration-300" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img src={logo} alt={`${name} logo`} width={28} height={28} className="object-contain" />
                    <h3 className="text-[#f0f0ee] font-bold text-sm tracking-[0.15em] uppercase">{name}</h3>
                </div>
                {level && (
                    <span className="text-[10px] font-mono text-[#00d4ff] border border-[#00d4ff]/30 px-2 py-0.5">
                        {level}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="text-[#8892a0] text-[13px] leading-relaxed">{description}</p>
        </div>
    );
}

export default TechCard;