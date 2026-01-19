import ConversionSection from "../ConversionSection";
import ServiceIcon from "../icons/ServiceIcon";

export default function ServiceTemplate({ data }: { data: any }) {
    return (
        <>
            <article>
                <div className="bg-blue-900 py-20 text-white text-center">
                    <h1 className="text-5xl font-bold">
                        <ServiceIcon size={48} icon={data.datosServicio.icono} /> {data.title}
                    </h1>
                </div>
                <div className="container mx-auto py-12 prose max-w-4xl">
                    <div dangerouslySetInnerHTML={{ __html: data.content || '' }} />
                </div>
            </article>

            <ConversionSection />
        </>
    );
}