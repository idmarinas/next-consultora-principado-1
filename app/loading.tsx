import Logo from "@/components/Logo";

export default function Loading() {
    return (
        // Contenedor de pantalla completa centrado
        <main className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 z-50">

            {/* Aplicamos 'animate-pulse' al contenedor. 
        Esto hará que el logo y el texto pulsen suavemente en opacidad.
      */}
            <div className="flex flex-col items-center animate-pulse gap-6">

                {/* Usamos una versión grande del logo para impacto visual */}
                <Logo size="xl" variant="dark" className="drop-shadow-sm" />

                {/* Texto indicador opcional y sutil */}
                <span className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase">
                    Cargando experiencia...
                </span>
            </div>
        </main>
    );
}