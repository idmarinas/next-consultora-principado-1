export default function DefaultPageTemplate({ data }: { data: any }) {
    return (
        <div className="container mx-auto px-6 py-24">
            <h1 className="text-3xl font-bold border-b pb-4 mb-8">{data.title || data.name}</h1>
            <div className="prose prose-slate" dangerouslySetInnerHTML={{ __html: data.content || '' }} />
        </div>
    );
}