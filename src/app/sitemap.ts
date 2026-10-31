import type { MetadataRoute } from "next";
import { PARCEIROS } from "@/data/parceiros";

const baseUrl = "https://pecapronta.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    "",
    "/como-funciona",
    "/para-marceneiros",
    "/para-parceiros",
    "/solicitar-orcamento",
    "/parceiros",
    "/demonstracao/marceneiro",
    "/demonstracao/parceiro",
    "/privacidade",
    "/termos",
  ];

  return [
    ...rotas.map((rota) => ({
      url: `${baseUrl}${rota}`,
      lastModified: new Date("2026-07-11"),
    })),
    ...PARCEIROS.map((parceiro) => ({
      url: `${baseUrl}/parceiros/${parceiro.slug}`,
      lastModified: new Date("2026-07-11"),
    })),
  ];
}
