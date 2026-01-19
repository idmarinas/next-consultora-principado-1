"use client";

import { useState } from "react";
import { loadMorePosts } from "@/app/noticias/actions";
import PostCard from "./PostCard";
import { Loader2 } from "lucide-react";

export default function BlogList({
    initialPosts,
    initialPageInfo,
    categoryId
}: {
    initialPosts: any[],
    initialPageInfo: any,
    categoryId?: number
}) {
    const [posts, setPosts] = useState(initialPosts);
    const [pageInfo, setPageInfo] = useState(initialPageInfo);
    const [loading, setLoading] = useState(false);

    const handleLoadMore = async () => {
        setLoading(true);
        // Pasamos el categoryId a la acción
        const { nodes, pageInfo: newPageInfo } = await loadMorePosts(pageInfo.endCursor, categoryId);

        setPosts((prev) => [...prev, ...nodes]);
        setPageInfo(newPageInfo);
        setLoading(false);
    };

    return (
        <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {pageInfo.hasNextPage && (
                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={loading}
                        className="group flex items-center gap-3 px-12 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            "Ver más artículos"
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}