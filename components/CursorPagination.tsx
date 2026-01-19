// components/CursorPagination.tsx
"use client";
import { useRouter, useSearchParams } from 'next/navigation';

interface PageInfo {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
}

export default function CursorPagination({ pageInfo }: { pageInfo: PageInfo }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleNext = () => {
        if (pageInfo.hasNextPage) {
            router.push(`/blog?after=${pageInfo.endCursor}`);
        }
    };

    const handleBack = () => {
        // Nota: Para ir atrás con cursores exactos, WordPress suele requerir "last" y "before"
        // Pero una forma sencilla es usar el historial del navegador
        router.back();
    };

    return (
        <div className="flex justify-center items-center gap-6 mt-16">
            <button
                onClick={handleBack}
                disabled={!searchParams.get('after')}
                className="px-8 py-3 rounded-full border border-slate-200 text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white hover:shadow-md transition-all"
            >
                ← Volver
            </button>

            <button
                onClick={handleNext}
                disabled={!pageInfo.hasNextPage}
                className="px-8 py-3 rounded-full bg-blue-600 text-white text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-700 hover:shadow-lg transition-all"
            >
                Siguientes →
            </button>
        </div>
    );
}