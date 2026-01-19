"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Importamos los estilos necesarios de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Quote } from 'lucide-react';
// Datos actualizados con URLs de avatares
// NOTA: En producción, estas URLs vendrían de la "Imagen Destacada" de tu CPT de Testimonios en WordPress.
const testimonials = [
    {
        id: 1,
        quote: "Gracias a la auditoría estratégica de Principado, reestructuramos nuestros procesos internos y aumentamos la eficiencia operativa un 20% en seis meses.",
        author: "Marta García",
        role: "CEO, Innova Tech",
        // Usamos un servicio de placeholders para el ejemplo. 
        // Asegúrate de configurar next.config.js para permitir este dominio.
        avatarUrl: "https://i.pravatar.cc/150?img=47"
    },
    {
        id: 2,
        quote: "Su asesoría fiscal internacional fue clave para nuestra expansión. Conocimiento técnico impecable y un trato muy cercano.",
        author: "Carlos R. Méndez",
        role: "CFO, Grupo Global",
        avatarUrl: "https://i.pravatar.cc/150?img=60"
    },
    {
        id: 3,
        quote: "Nos ayudaron a implementar un plan de compliance robusto que nos da total tranquilidad. Profesionales de máxima confianza.",
        author: "Sofía Lorente",
        role: "Gerente Legal, Constructora Norte",
        avatarUrl: "https://i.pravatar.cc/150?img=20"
    },
    {
        id: 4,
        quote: "La claridad en sus informes y la capacidad para anticiparse a problemas legales es lo que más valoramos de su servicio recurrente.",
        author: "Pedro Almodóvar",
        role: "Fundador, Estudio Creativo",
        avatarUrl: "https://i.pravatar.cc/150?img=12"
    },
];

export default function TestimonialCarousel() {
    return (
        <section className="container mx-auto px-6 py-12 bg-slate-50/50 border-y border-slate-100 mb-16">
            {/* Cabecera Sutil */}
            <div className="text-center mb-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
                    Prueba Social
                </h3>
                <h2 className="text-2xl font-black text-slate-900">
                    La experiencia de nuestros clientes
                </h2>
            </div>

            {/* Carrusel Swiper */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24} // Espacio entre tarjetas
                slidesPerView={1} // Móvil: 1 tarjeta
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true // Puntitos dinámicos modernos
                }}
                breakpoints={{
                    640: { slidesPerView: 2 }, // Tablet: 2 tarjetas
                    1024: { slidesPerView: 3 }, // Desktop: 3 tarjetas compactas
                }}
                className="pb-12 px-4!" // Padding inferior para los puntos de paginación
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id} className="h-auto!">
                        {/* Tarjeta de Testimonio */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden h-full flex flex-col">
                            {/* Icono decorativo de fondo */}
                            <Quote className="absolute top-2 right-4 text-slate-100 -rotate-12 scale-150 pointer-events-none" size={48} />

                            <p className="text-slate-600 italic text-sm leading-relaxed mb-6 relative z-10 grow">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-3 relative z-10 pt-4 border-t border-slate-50">
                                <div className="mb-6 relative">
                                    {/* Contenedor de la imagen con borde y sombra para que "salte" */}
                                    <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100">
                                        <Image
                                            src={item.avatarUrl}
                                            alt={`Foto de ${item.author}`}
                                            fill // Usamos fill para que se adapte al contenedor circular
                                            sizes="80px"
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Pequeño detalle decorativo azul debajo del avatar */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-600 rounded-full"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm leading-none mb-1">{item.author}</p>
                                    <p className="text-xs text-slate-400 font-medium">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Estilos globales para los puntos de paginación de Swiper para que sean azules */}
            <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #2563eb !important; /* blue-600 */
        }
      `}</style>
        </section>
    );
}