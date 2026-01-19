"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroData } from "@/lib/wordpress";

export default function Hero({ data }: { data: HeroData }) {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
            {/* Imagen de Fondo con Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={data.featuredImage.node.sourceUrl}
                    alt={data.title}
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            {/* Contenido Animado */}
            <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                        {data.title}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-6 text-lg text-slate-300 md:text-xl"
                        dangerouslySetInnerHTML={{ __html: data.content || '' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-10 flex gap-4"
                    >
                        <button className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-transform hover:scale-105 active:scale-95">
                            Nuestros Servicios
                        </button>
                        <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                            Saber más
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}