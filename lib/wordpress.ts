// lib/wordpress.ts
import { MenuNodes, MenuItem, ServicioMenuItem } from "@/types/wordpress";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

export async function fetchAPI<T>(
  query: string,
  { variables }: { variables?: Record<string, any> } = {}
): Promise<T> {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Error al obtener datos de WordPress");
  }

  return json.data;
}

export async function getPrimaryMenu(): Promise<MenuItem[]> {
  const data = await fetchAPI<MenuNodes>(`
    query GetMenu {
      menuItems(where: {location: PRIMARY}) {
        nodes {
          label
          path
        }
      }
    }
  `);
  return data?.menuItems?.nodes || [];
}

export async function getServicesMenu(): Promise<ServicioMenuItem[]> {
  const data = await fetchAPI<MenuNodes>(`
        query GetServicesMenu {
            servicios {
                nodes {
                    id
                    uri
                    title
                }
            }
        }    
    `)

  return data?.servicios?.nodes || [];
}

export async function getHeaderMenu(): Promise<MenuItem[]> {
  const query = `
    query GetHeaderMenu {
      menuItems(where: {location: PRIMARY, parentDatabaseId: 0}) {
        nodes {
          id
          label
          path
          childItems {
            nodes {
              id
              label
              path
            }
          }
        }
      }
    }
  `;
  const data = await fetchAPI<{ menuItems: { nodes: MenuItem[] } }>(query);
  return data?.menuItems?.nodes || [];
}

export async function getFooterData() {
  const query = `
    query GetFooterData {
      # Menú de Navegación del Footer
      navigationMenu: menuItems(where: {location: FOOTER, parentDatabaseId: 0}) {
        nodes {
          id
          label
          uri
          childItems {
            nodes {
              id
              label
              path
            }
          }
        }
      }
      # Menú de Redes Sociales
      socialMenu: menuItems(where: {location: SOCIAL, parentDatabaseId: 0}) {
        nodes {
          id
          label
          uri
        }
      }
    }
  `;
  return await fetchAPI<any>(query);
}

export async function getSocialMenu(): Promise<MenuItem[]> {
  const query = `
    query GetHeaderMenu {
      menuItems(where: {location: SOCIAL, parentDatabaseId: 0}) {
        nodes {
          id
          label
          path
        }
      }
    }
  `;
  const data = await fetchAPI<{ menuItems: { nodes: MenuItem[] } }>(query);
  return data?.menuItems?.nodes || [];
}

export async function getNodeByUri(uri: string) {
  const { QueryGetNodeByUri } = require('./queries')
  const data = await fetchAPI<{ nodeByUri: any }>(QueryGetNodeByUri, { variables: { uri } });

  return data.nodeByUri;
}

export async function getPosts(variables: { first: number; after?: string | null; categoryId?: number }) {
  const query = `
    query GetPosts($first: Int!, $after: String, $categoryId: Int) {
      posts(first: $first, after: $after, where: { categoryId: $categoryId, orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage { node { sourceUrl } }
          categories { nodes { name } }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;

  const data = await fetchAPI<{ posts: { nodes: any[]; pageInfo: any } }>(query, { variables });
  return {
    nodes: data.posts.nodes,
    pageInfo: data.posts.pageInfo,
  };
}

export interface HeroData {
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export async function getHeroData(): Promise<HeroData> {
  const query = `
    query GetHero {
      pageBy(uri: "/") {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;
  const data = await fetchAPI<{ pageBy: HeroData }>(query);
  return data.pageBy;
}

// lib/wordpress.ts
export async function getAllCategories() {
  const query = `
    query GetAllCategories {
      categories(where: {hideEmpty: true}) {
        nodes {
          id
          name
          slug
          count
          description
        }
      }
    }
  `;
  const data = await fetchAPI<{ categories: { nodes: any[] } }>(query);
  return data.categories.nodes;
}

export async function getServicesPage() {
  const query = `
    query GetServices {
      servicios {
        nodes {
          uri
          title
          excerpt
          featuredImage {
            node {
              uri
            }
          }
          datosServicio {
            color
            icono
          }
        }
      }
    }
  `;
  return await fetchAPI(query);
}