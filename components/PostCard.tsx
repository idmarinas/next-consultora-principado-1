import Link from 'next/link';
import Image from 'next/image';
import WordPressContent from './WordPressContent';

export default function PostCard({ post }: { post: any }) {
    const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    return (
        <Link href={`/${post.slug}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
            {/* Imagen */}
            <div className="relative h-52 w-full overflow-hidden">
                <Image
                    src={post.featuredImage?.node.sourceUrl || '/placeholder-blog.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Categoría flotante */}
                {post.categories?.nodes[0] && (
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                        {post.categories.nodes[0].name}
                    </span>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col grow">
                <span className="text-xs text-slate-400 font-medium mb-2">{formattedDate}</span>
                <h2 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-3">
                    {post.title}
                </h2>
                {/* Usamos WordPressContent solo para el extracto */}
                <div className="text-slate-600 text-sm line-clamp-3 mb-6">
                    <WordPressContent content={post.excerpt} className="prose-sm" />
                </div>

                <div className="mt-auto flex items-center text-blue-600 text-sm font-bold">
                    Leer artículo <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>
        </Link>
    );
}