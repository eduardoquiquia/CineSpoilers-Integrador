import { Link } from 'react-router-dom';

export const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#000814] font-[Barlow,sans-serif]">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-[100] bg-[#000814]/95 backdrop-blur-xl border-b border-[#00aae4]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-[72px]">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group no-underline">
                <span className="text-[#00aae4] text-sm leading-none">▶</span>
                <span
                    className="font-[Barlow_Condensed,sans-serif] font-black italic text-[1.9rem] tracking-tight text-white group-hover:text-[#00aae4] transition-colors duration-300 leading-none"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                    CINE<span className="text-[#00aae4]">SPOILERS</span>
                </span>
                </Link>

                {/* Links centrales */}
                <div className="hidden md:flex items-center gap-10">
                {[
                    { label: 'PELÍCULAS', to: '/peliculas' },
                    { label: 'DULCERÍA', to: '/productos' },
                ].map(({ label, to }) => (
                    <Link
                    key={label}
                    to={to}
                    className="relative font-bold text-[0.75rem] tracking-[3px] text-white/60 hover:text-white transition-colors duration-300
                        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#00aae4]
                        after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                    {label}
                    </Link>
                ))}
                <span
                    className="font-bold text-[0.75rem] tracking-[3px] text-white/20 cursor-not-allowed"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                    NOSOTROS
                </span>
                </div>

                {/* Botones derecha */}
                <div className="flex items-center gap-4">
                <Link
                    to="/login"
                    className="hidden sm:block text-[0.75rem] font-bold tracking-[2px] text-white/50 hover:text-white transition-colors duration-300 no-underline"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                    INICIAR SESIÓN
                </Link>
                <button
                    className="bg-[#00aae4] text-white text-[0.75rem] font-black tracking-[2px] uppercase px-6 py-2.5
                    hover:bg-white hover:text-[#000814] transition-all duration-300
                    shadow-[0_0_24px_rgba(0,170,228,0.35)]"
                    style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                    }}
                >
                    Socio CP
                </button>
                </div>

            </div>
            </div>
        </nav>

        {/* CONTENIDO DINÁMICO */}
        <main className="flex-grow">
            {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-[#000814] border-t border-[#00aae4]/15 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">

            {/* Col 1 */}
            <div>
                <div
                className="font-black italic text-[1.5rem] tracking-tight text-white mb-4 flex items-center gap-2"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                <span className="text-[#00aae4] text-sm">▶</span>
                CINE<span className="text-[#00aae4]">SPOILERS</span>
                </div>
                <p className="text-white/35 text-sm font-light leading-relaxed max-w-[260px]">
                La mejor experiencia cinematográfica con tecnología de punta y una dulcería de primera.
                </p>
            </div>

            {/* Col 2 */}
            <div>
                <h4
                className="text-[0.7rem] font-bold tracking-[3px] text-[#00aae4] uppercase mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                Servicios
                </h4>
                <ul className="space-y-3">
                {[
                    { label: 'Cartelera', to: '/peliculas' },
                    { label: 'Dulcería', to: '/productos' },
                    { label: 'Socio CP', to: '/socio' },
                ].map(({ label, to }) => (
                    <li key={label}>
                    <Link to={to} className="text-sm font-light text-white/40 hover:text-white transition-colors duration-200 no-underline">
                        {label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* Col 3 */}
            <div>
                <h4
                className="text-[0.7rem] font-bold tracking-[3px] text-[#00aae4] uppercase mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                Información
                </h4>
                <ul className="space-y-3">
                {['Términos y Condiciones', 'Libro de Reclamaciones'].map((item) => (
                    <li
                    key={item}
                    className="text-sm font-light text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                    {item}
                    </li>
                ))}
                </ul>
            </div>

            {/* Col 4 */}
            <div>
                <h4
                className="text-[0.7rem] font-bold tracking-[3px] text-[#00aae4] uppercase mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                Síguenos
                </h4>
                <div className="flex gap-3">
                {['F', 'IG'].map((icon) => (
                    <div
                    key={icon}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40
                        hover:bg-[#00aae4] hover:text-white hover:border-transparent transition-all duration-200 cursor-pointer"
                    style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}
                    >
                    {icon}
                    </div>
                ))}
                </div>
            </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-8 text-center text-xs font-light text-white/20 tracking-[1px]">
            © 2026 CineSpoilers S.A. Todos los derechos reservados.
            </div>
        </footer>
        </div>
    );
};