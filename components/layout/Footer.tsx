import Link from 'next/link';
import { getFooterData } from '@/lib/wordpress';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Youtube, Globe } from 'lucide-react';
import OfficeMap from '@/components/layout/OfficeMap';

// Función auxiliar para los iconos de redes sociales (basada en el label)
const getSocialIcon = (label: string) => {
    const name = label.toLowerCase();
    if (name.includes('linkedin')) return <Linkedin size={18} />;
    if (name.includes('instagram')) return <Instagram size={18} />;
    if (name.includes('facebook')) return <Facebook size={18} />;
    if (name.includes('twitter') || name.includes('x')) return <Twitter size={18} />;
    if (name.includes('youtube')) return <Youtube size={18} />;
    return <Globe size={18} />;
};

export default async function Footer() {
    const data = await getFooterData();

    // Extraemos los menús de la respuesta
    const navigationColumns = data?.navigationMenu?.nodes || [];
    const socialItems = data?.socialMenu?.nodes || [];

    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="container mx-auto px-6 pt-20 pb-10">

                {/* Grid Principal: Ajustamos las columnas según la cantidad de menús en WP */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-12 mb-16">

                    {/* Columna 1: Branding y Redes Sociales */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-black text-white tracking-tighter">
                            PRINCIPADO<span className="text-blue-500">.</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Excelencia en consultoría estratégica y legal.
                            Soluciones innovadoras para los retos del mañana.
                        </p>

                        {/* Redes Sociales Dinámicas */}
                        <div className="flex gap-3">
                            {socialItems.map((item: any) => (
                                <a
                                    key={item.id}
                                    href={item.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                                    title={item.label}
                                >
                                    {getSocialIcon(item.label)}
                                </a>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contacto</h3>
                            <div className="flex flex-wrap text-sm gap-4">
                                <div className="flex items-start gap-3">
                                    <MapPin size={18} className="text-blue-500 shrink-0" />
                                    <span>Uría 12, Oviedo, Asturias</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} className="text-blue-500 shrink-0" />
                                    <a href="tel:+34985000000" className="hover:text-white">+34 985 000 000</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-blue-500 shrink-0" />
                                    <a href="mailto:info@principado.com" className="hover:text-white">info@principado.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNAS DINÁMICAS (Navegación FOOTER con hijos) */}
                    {navigationColumns.map((column: any) => (
                        <div key={column.id}>
                            {/* El ítem padre es el título de la columna */}
                            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                                {column.label}
                            </h3>

                            {/* Si tiene hijos, los listamos debajo */}
                            {column.childItems?.nodes?.length > 0 && (
                                <ul className="space-y-4">
                                    {column.childItems.nodes.map((child: any) => (
                                        <li key={child.id}>
                                            <Link
                                                href={child.path}
                                                className="text-sm hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all group"
                                            >
                                                <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 mb-16">
                    <OfficeMap />
                </div>

                {/* Barra inferior de Copyright */}
                <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs">
                        © {new Date().getFullYear()} Consultora Principado. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-xs font-medium">
                        <Link href="/aviso-legal" className="hover:text-white">Aviso Legal</Link>
                        <Link href="/cookies" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}