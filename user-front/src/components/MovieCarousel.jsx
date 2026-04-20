import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MovieCarousel = ({ items }) => {
    return (
        <div className="h-[560px] md:h-[640px] w-full bg-[#000814] relative">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="h-full"
        >
            {items.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="relative h-full w-full overflow-hidden">

                {/* Imagen de fondo */}
                <img
                    src={item.imageUrl}
                    className="w-full h-full object-cover object-top opacity-40"
                    alt={item.title}
                    onError={(e) => { e.target.src = "https://via.placeholder.com/500x750?text=Sin+Poster"; }}
                />

                {/* Poster a la derecha */}
                <div className="absolute right-24 top-1/2 -translate-y-1/2 hidden lg:block" style={{ transform: 'translateY(-50%) rotate(3deg)' }}>
                    <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-0 blur-2xl bg-[#00aae4]/20 scale-110" />
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="relative w-[200px] h-[300px] object-cover rounded-[4px] shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
                        style={{ border: '1px solid rgba(0,170,228,0.25)' }}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/500x750?text=Sin+Poster"; }}
                    />
                    </div>
                </div>

                {/* Gradientes */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#000814] via-[#000814]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/60 via-transparent to-[#000814]/20" />

                {/* Scanlines */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px)' }}
                />

                {/* Contenido */}
                <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-12 lg:px-20 z-20 max-w-xl">
                    <div
                    className="inline-flex items-center gap-2 bg-[#00aae4]/15 border border-[#00aae4]/40 px-3 py-1.5 rounded-[2px] mb-5 w-fit
                        text-[0.65rem] font-bold tracking-[3px] uppercase text-[#00aae4]"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                    ★ En cartelera ahora
                    </div>

                    <h2
                    className="text-[3.5rem] md:text-[4.5rem] font-black italic uppercase leading-[0.9] tracking-tighter text-white mb-5"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', textShadow: '0 0 60px rgba(0,170,228,0.2)' }}
                    >
                    {item.title}
                    </h2>

                    <p className="text-[0.95rem] font-light text-white/55 line-clamp-3 mb-8 leading-relaxed">
                    {item.description}
                    </p>

                    <div className="flex gap-4 items-center">
                    <button
                        className="bg-[#00aae4] text-white font-black text-[0.8rem] tracking-[2px] uppercase px-8 py-3.5
                        hover:bg-white hover:text-[#000814] transition-all duration-300
                        shadow-[0_0_30px_rgba(0,170,228,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                        }}
                    >
                        Comprar entradas
                    </button>
                    <button
                        className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300
                        text-[0.8rem] font-bold tracking-[2px] uppercase"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                        <span className="text-[0.65rem]">▶</span> Ver tráiler
                    </button>
                    </div>
                </div>

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};