import { getPosts } from "@/lib/wordpress";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
    // Esta carga ocurre en el servidor al pedir la página
    const { nodes, pageInfo } = await getPosts({ first: parseInt(process.env.INITIAL_POSTS as string), after: null });

    return (
        <main className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <div className="flex gap-4 prose prose-slate max-w-none">
                        <div>

                            <h1 className="text-5xl font-black text-slate-900 tracking-tight">
                                <span className="text-blue-600">Blog</span> y Noticias.
                            </h1>
                            <p className="text-slate-600 my-4 text-lg">
                                Novedades para mantenerte informado
                            </p>
                            <p className="text-lg">
                                En el blog de Consultora Principado encontrarás información práctica, noticias, consejos y novedades sobre digitalización empresarial. Compartimos contenido útil sobre facturación electrónica (VeriFactu), gestión de clientes (CRM), sistemas de control horario, TPV para comercios, desarrollo web, software ERP, y mucho más.

                                Nuestro objetivo es ayudarte a entender las herramientas tecnológicas que tu negocio necesita para crecer de forma eficiente, cumplir con la normativa vigente y optimizar procesos clave.
                            </p>
                        </div>

                        <img className="w-auto! h-99! aspect-auto rounded" src="https://www.consultoraprincipado.com/wp-content/uploads/2025/04/NOTICIAS-1.jpg" alt="" />

                    </div>
                </div>

                {/* Pasamos los datos iniciales al componente que gestiona la lista */}
                <BlogList initialPosts={nodes} initialPageInfo={pageInfo} />
            </div>
        </main>
    );
}