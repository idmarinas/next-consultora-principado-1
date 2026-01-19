import { getServicesPage } from "@/lib/wordpress";
import ServicesListTemplate from "@/components/templates/ServicesListTemplate";
import { Metadata } from "next";

// Opcional: Definir metadatos específicos para SEO
export const metadata: Metadata = {
    title: 'Servicios | Consultora Principado',
    description: 'Soluciones integrales de consultoría estratégica, fiscal y legal.',
};

export default async function ServiciosListingPage() {
    const servicesData = await getServicesPage();

    return (
        <ServicesListTemplate servicesPage={servicesData} />
    );
}