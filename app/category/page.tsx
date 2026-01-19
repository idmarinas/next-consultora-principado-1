// app/category/page.tsx
import { getAllCategories } from "@/lib/wordpress";
import Link from "next/link";

export default async function CategoriesListPage() {
    const categories = await getAllCategories();

    return (
        <main className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-6">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-900">Categorías</h1>
                    <p className="text-slate-600 mt-4">Explora nuestros artículos por temática</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/category/${cat.slug}`}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                        >
                            <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600">
                                {cat.name}
                            </h2>
                            <p className="text-slate-500 text-sm mt-2">
                                {cat.description || "Explora todas las publicaciones en esta categoría."}
                            </p>
                            <div className="mt-4 text-xs font-semibold text-blue-500 uppercase tracking-wider">
                                {cat.count} Artículos
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}