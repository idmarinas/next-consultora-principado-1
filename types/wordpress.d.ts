// types/wordpress.ts

export interface MenuItem {
  label: string;
  path: string;
}

export interface ServicioMenuItem {
  id: string
  title: string
  uri: string
}

export interface MenuNodes {
  menuItems: {
    nodes: MenuItem[];
  };
  servicios: {
    nodes: ServicioMenuItem[]
  }
}

// types/wordpress.ts
export interface MenuItem {
  id: string;
  label: string;
  path: string;
  parentId?: string | null;
  childItems?: {
    nodes: MenuItem[];
  };
}

// Para cuando traigas posts de servicios
export interface Service {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}
