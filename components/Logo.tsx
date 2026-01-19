import Link from 'next/link';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'dark' | 'light'; // dark para fondos claros, light para fondos oscuros
    className?: string;
}

export default function Logo({ size = 'md', variant = 'dark', className = "" }: LogoProps) {

    // Escalas de tamaño precisas
    const sizeConfigs = {
        sm: { container: "gap-2", bar: "w-1 h-5", text: "text-base" },
        md: { container: "gap-2.5", bar: "w-1.5 h-7", text: "text-xl" },
        lg: { container: "gap-3", bar: "w-2 h-10", text: "text-3xl" },
        xl: { container: "gap-4", bar: "w-3 h-14", text: "text-5xl" },
    };

    const config = sizeConfigs[size];

    // Colores según variante
    const textColor = variant === 'dark' ? "text-slate-900" : "text-white";
    const subTextColor = variant === 'dark' ? "text-slate-500" : "text-slate-300";

    return (
        <Link
            href="/"
            className={`inline-flex items-center group ${config.container} ${className}`}
            aria-label="Consultora Principado - Inicio"
        >
            {/* Isotipo: Barra de Identidad */}
            <div className={`${config.bar} bg-blue-600 rounded-full transition-colors group-hover:bg-blue-500 shrink-0`} />

            {/* Logotipo: Texto con jerarquía */}
            <div className={`${config.text} leading-none flex flex-wrap items-baseline gap-x-1.5 uppercase tracking-tight`}>
                <span className={`font-light ${subTextColor}`}>
                    Consultora
                </span>
                <span className={`font-black ${textColor}`}>
                    Principado
                </span>
            </div>
        </Link>
    );
}