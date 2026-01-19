import { ArrowRight, Briefcase, BarChart3, ShieldCheck, Globe, Scale, Users } from "lucide-react";

export default function ServiceIcon({ icon, size, ...props }: { icon: Array<string>, size?: number, props?: Record<string, any> }) {
    const slug = icon?.[0]; // Uso de Optional Chaining

    switch (slug) {
        case 'fiscal':
        case 'contable':
            return <Scale size={size} className="inline" {...props} />;
        case 'estrategia':
        case 'negocio':
            return <BarChart3 size={size} className="inline" {...props} />;
        case 'legal':
        case 'compliance':
            return <ShieldCheck size={size} className="inline" {...props} />;
        case 'internacional':
            return <Globe size={size} className="inline" {...props} />;
        case 'recursos':
        case 'equipo':
            return <Users size={size} className="inline" {...props} />;
        default:
            return <Briefcase size={size} className="inline" {...props} />;
    }
}