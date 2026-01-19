// app/page.tsx
import Hero from "@/components/Hero";
import { getHeroData } from "@/lib/wordpress";

export default async function HomePage() {
  const heroData = await getHeroData();

  return (
    <main>
      <Hero data={heroData} />

      {/* Aquí irían las siguientes secciones: Servicios, Nosotros, etc. */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Excelencia en Consultoría</h2>
          <p className="mt-4 text-slate-600">Soluciones modernas para desafíos globales.</p>
        </div>
      </section>
    </main>
  );
}