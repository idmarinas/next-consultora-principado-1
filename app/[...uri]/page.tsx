// app/[...uri]/page.tsx
import { getNodeByUri } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import DefaultPageTemplate from "@/components/templates/DefaultPageTemplate";
import PostTemplate from "@/components/templates/PostTemplate";
import CategoryTemplate from "@/components/templates/CategoryTemplate";
import PageTemplate from "@/components/templates/PageTemplate";

export default async function DynamicPage({ params }: { params: { uri: string[] } }) {
    // Convertimos ['servicios', 'legal'] en '/servicios/legal/'
    const { uri } = await params
    const node = await getNodeByUri(`/${uri.join("/")}/`);

    if (!node) notFound();

    // Lógica de "Swapping" de plantillas
    switch (node.__typename) {
        case "Post":
            return <PostTemplate data={node} />;

        case "Servicio": // Páginas de Servicios
            return <ServiceTemplate data={node} />;
        case "Category":
            return <CategoryTemplate category={node} />;
        case "Page":
            return <PageTemplate page={node} />;

        default:
            return <DefaultPageTemplate data={node} />;
    }
}

export async function generateStaticParams() {
    // Aquí pedirías a WP todos los slugs de páginas y posts
    // Para que Next.js los genere en tiempo de compilación
    return []; // Opcional para empezar, pero vital para producción
}