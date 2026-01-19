// components/WordPressContent.tsx
import React from 'react';

interface WordPressContentProps {
    content: string | null | undefined;
    className?: string; // Para añadir estilos extra desde fuera
}

export default function WordPressContent({ content, className = "" }: WordPressContentProps) {
    // 1. Verificación de seguridad: si no hay contenido, no renderizamos nada
    if (!content || content === "") {
        return null;
    }

    return (
        <div
            // 'prose' activa el plugin de tipografía de Tailwind
            // 'prose-slate' define la paleta de colores
            // 'max-w-none' evita que Tailwind limite el ancho del texto
            className={`
        prose prose-slate max-w-none 
        prose-headings:font-bold prose-headings:text-slate-900
        prose-p:text-slate-600 prose-p:leading-relaxed
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-3xl prose-img:shadow-lg
        prose-strong:text-slate-900
        ${className}
      `}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}