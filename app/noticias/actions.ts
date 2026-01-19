"use server";

import { getPosts } from "@/lib/wordpress";

export async function loadMorePosts(cursor: string | null, categoryId?: number) {
    // Pasamos el categoryId a la función de consulta
    const result = await getPosts({
        first: parseInt(process.env.INITIAL_POSTS as string),
        after: cursor,
        categoryId: categoryId // Nueva variable
    });

    return result;
}