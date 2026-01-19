// components/ConversionSection.tsx
import TestimonialCarousel from "./TestimonialCarousel";
import CTA from "./CTA";
import Logo from "./Logo";

export default function ConversionSection() {
    return (
        <>
            {/* ... después del contenido principal ... */}

            {/* SECCIÓN DE CIERRE Y CONFIANZA */}
            <div className="relative mt-20 border-t border-slate-100 bg-slate-50/80 pt-20 pb-10">

                {/* Separador Decorativo: La "Marca de la Consultora" */}

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Logo />
                </div>

                <div className="container mx-auto">
                    {/* 1. Prueba Social */}
                    <TestimonialCarousel />

                    {/* 2. Llamada a la Acción */}
                    <div className="mt-10">
                        <CTA />
                    </div>
                </div>

                {/* Texto legal muy sutil o pie de cierre */}
                <div className="text-center mt-20">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">
                        Consultora Principado &copy; {new Date().getFullYear()} — Excelencia en cada detalle
                    </p>
                </div>
            </div>
        </>
    );
}