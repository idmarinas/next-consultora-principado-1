import Image from "next/image";
import WordPressContent from "@/components/WordPressContent";
import { Calendar, User, Tag } from "lucide-react";
import Link from 'next/link'

interface PostProps {
    data: {
        title: string;
        content: string;
        date: string;
        featuredImage?: { node: { sourceUrl: string } };
        categories?: { nodes: { name: string; slug: string }[] };
        author?: { node: { name: string } };
    };
}

export default function PostTemplate({ data }: PostProps) {
    // Formatear la fecha de forma elegante
    const formattedDate = new Date(data.date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <article className="min-h-screen bg-white">
            {/* Cabecera del Post */}
            <header className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Categorías */}
                    <div className="flex gap-2 mb-6">
                        {data.categories?.nodes.map((cat) => (
                            <span
                                key={cat.slug}
                                className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                            >
                                <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                        {data.title}
                    </h1>

                    {/* Meta Datos */}
                    <div className="flex flex-wrap items-center gap-6 mt-8 text-slate-500 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{data.author?.node.name || "Redacción"}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Imagen Destacada (Opcional) */}
            {data.featuredImage && (
                <div className="container mx-auto px-6 max-w-5xl -mt-10 md:-mt-16">
                    <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={data.featuredImage.node.sourceUrl}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Cuerpo del Artículo */}
            <div className="container mx-auto px-6 py-16 max-w-4xl">
                <WordPressContent
                    content={data.content}
                    className="prose-lg prose-blue prose-img:rounded-2xl prose-headings:text-slate-900"
                />

                {/* Footer del Post (Compartir o Tags) */}
                <footer className="mt-16 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-slate-400 uppercase">Compartir:</span>
                        {/* Aquí podrías añadir botones de redes sociales */}
                    </div>
                </footer>
            </div>
        </article>
    );
}