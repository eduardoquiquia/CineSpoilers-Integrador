export const MovieCard = ({ movie }) => {
    return (
        <div className="group flex flex-col h-full cursor-pointer">
        <div className="relative overflow-hidden rounded-[4px] aspect-[2/3] bg-[#0a1628]"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => { e.target.src = "https://via.placeholder.com/300x450?text=Sin+Poster"; }}
            />

            {/* Gradiente permanente sutil abajo */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/95 via-[#000814]/40 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
            <button
                className="bg-[#00aae4] text-white font-black text-[0.7rem] tracking-[2px] uppercase py-2.5 px-6
                hover:bg-white hover:text-[#000814] transition-all duration-200
                shadow-[0_0_20px_rgba(0,170,228,0.5)]
                translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                }}
            >
                Comprar
            </button>
            </div>

            {/* Glow border hover */}
            <div className="absolute inset-0 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(0,170,228,0.4)' }} />
        </div>

        <div className="mt-3 flex-grow">
            <h3
            className="text-[0.9rem] font-bold uppercase leading-tight text-white/85 group-hover:text-[#00aae4] transition-colors duration-200 line-clamp-2"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.5px' }}
            >
            {movie.title}
            </h3>
            <div className="flex gap-1.5 mt-2">
            {['2D', 'DOB'].map(tag => (
                <span
                key={tag}
                className="text-[0.6rem] font-bold tracking-[1px] text-white/25 border border-white/10 px-2 py-0.5 rounded-[2px]"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                {tag}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
};