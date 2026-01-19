import Link from "next/link";
import ConversionSection from "../ConversionSection";
import AnimatedCard from "../AnimatedCard";
import ServiceIcon from "../icons/ServiceIcon";
import { ArrowRight } from "lucide-react";

export default function ServicesListTemplate({ servicesPage }: { servicesPage: any }) {
    const services = servicesPage.servicios?.nodes || [];

    return (
        <main className="min-h-screen bg-white">
            {/* Cabecera Estilo Principado */}
            <header className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                        <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.4em]">Expertise</span>
                        <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Nuestros <span className="text-blue-500">Servicios</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Soluciones integrales de consultoría diseñadas para impulsar el crecimiento y la seguridad de su empresa.
                    </p>
                </div>
            </header>

            {/* Grid de Servicios */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service: any, index: number) => (
                            <AnimatedCard key={service.uri} index={index}>
                                <Link
                                    href={service.uri}
                                    className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-100 flex flex-col h-full"
                                >
                                    {/* Icono */}
                                    <div className="mb-8 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <ServiceIcon icon={service.datosServicio.icono} size={32} />
                                    </div>

                                    {/* Contenido */}
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>

                                    <div className="text-slate-600 leading-relaxed mb-8 grow line-clamp-3 overflow-hidden">
                                        {/* Limpiamos el HTML para el extracto */}
                                        {service.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                                    </div>

                                    {/* Link Visual */}
                                    <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest mt-auto">
                                        Saber más
                                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                                    </div>
                                </Link>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            <ConversionSection />
        </main>
    );
}