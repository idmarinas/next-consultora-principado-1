import PostCard from "@/components/PostCard";
import BlogList from "@/components/BlogList"; // Reutilizamos el componente de lista

interface CategoryTemplateProps {
    category: {
        databaseId: number;
        name: string;
        description: string;
        posts: {
            nodes: any[];
            pageInfo: any;
        };
    };
}

export default function CategoryTemplate({ category }: CategoryTemplateProps) {
    return (
        <main className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-6">
                {/* Cabecera de Categoría */}
                <header className="max-w-3xl mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-8 h-[2px] bg-blue-600"></span>
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                            Categoría
                        </span>
                    </div>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-6">
                        {category.name}
                    </h1>
                    {category.description && (
                        <div
                            className="text-lg text-slate-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: category.description }}
                        />
                    )}
                </header>

                {/* Listado con Cargar Más */}
                {/* Pasamos el databaseId para que el "Cargar más" sepa filtrar */}
                <BlogList
                    initialPosts={category.posts.nodes}
                    initialPageInfo={category.posts.pageInfo}
                    categoryId={category.databaseId}
                />

                {category.posts.nodes.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <p className="text-slate-400">No hay artículos publicados en esta categoría todavía.</p>
                    </div>
                )}
            </div>
        </main>
    );
}