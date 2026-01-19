import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="container mx-auto px-6 mb-20">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                {/* Decoración geométrica */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            ¿Listo para potenciar su <span className="text-blue-500">estrategia empresarial</span>?
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Nuestro equipo de consultores expertos está preparado para analizar su caso y ofrecerle soluciones a medida.
                        </p>
                    </div>

                    <Link
                        href="/contacto"
                        className="group flex items-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all whitespace-nowrap"
                    >
                        Solicitar consultoría gratuita
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}