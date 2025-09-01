// types/index.ts

export interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

// (opcional) grupos de features que já usas no item 6
export interface FeatureGroup {
  title: string;
  items: string[];
}

// Blocos livres para o SidePanel
export type ContentBlock =
  | { type: "heading"; level?: 2 | 3 | 4; text: string }
  | { type: "text"; html?: string; text?: string }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "video"; src: string; title?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "topics"; items: string[] };

export interface ContentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  note?: string;

  // Tornar opcionais para manter compat com items antigos
  image?: string;
  content?: string | string[];

  // Pode ser lista simples OU grupos
  features?: Array<string | FeatureGroup>;

  // Botões de ação
  cta?: CTA | CTA[];

  // NOVO: sequência livre de conteúdo
  blocks?: ContentBlock[];
}

// (opcional) type guard que já usas no SidePanel
export const isFeatureGroupArray = (
  features: ContentItem["features"]
): features is FeatureGroup[] =>
  Array.isArray(features) &&
  features.length > 0 &&
  typeof (features as any)[0] === "object" &&
  "items" in (features as any)[0];
