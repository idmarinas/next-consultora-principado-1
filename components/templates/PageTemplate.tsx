import Image from "next/image";

interface PageTemplateProps {
    page: {
        title: string;
        content: string;
        featuredImage?: {
            node: {
                sourceUrl: string;
            };
        };
        acf_pages?: {
            subtitulo?: string;
        };
    };
}

export default function PageTemplate({ page }: PageTemplateProps) {
    return (
        <article className="min-h-screen bg-white">
            {/* HERO DE PÁGINA */}
            <header className="relative bg-slate-900 py-24 lg:py-32 overflow-hidden">
                {/* Decoración sutil de fondo */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/2" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        {/* Indicador de sección con tu barra azul corporativa */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">
                                Consultora Principado
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                            {page.title}
                        </h1>

                        {page.acf_pages?.subtitulo && (
                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                {page.acf_pages.subtitulo}
                            </p>
                        )}
                    </div>
                </div>
            </header>

            {/* CONTENIDO PRINCIPAL */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">

                        {/* Imagen Destacada (Si existe) */}
                        {page.featuredImage && (
                            <div className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
                                <Image
                                    src={page.featuredImage.node.sourceUrl}
                                    alt={page.title}
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Renderizado de contenido de WordPress */}
                        <div
                            className="prose prose-lg prose-slate max-w-none 
              prose-headings:text-slate-900 prose-headings:font-black 
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
              prose-li:text-slate-600
              prose-img:rounded-3xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: page.content }}
                        />
                    </div>
                </div>
            </section>
        </article>
    );
}