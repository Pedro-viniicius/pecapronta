import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/feedback/app-providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://pecapronta.example";
const siteDescription =
  "Marketplace que conecta marceneiros a empresas especializadas em plano de corte, corte de MDF e MDP, usinagem CNC, fita de borda, identificação e entrega das peças prontas para montagem.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PeçaPronta — Projetos de marcenaria conectados à produção sob medida",
    template: "%s · PeçaPronta",
  },
  description: siteDescription,
  applicationName: "PeçaPronta",
  keywords: [
    "plano de corte",
    "corte de MDF",
    "corte de MDP",
    "centro de corte",
    "usinagem CNC para marcenaria",
    "fita de borda",
    "terceirização de corte",
    "peças prontas para montagem",
    "parceiros para marcenaria",
    "produção terceirizada de móveis planejados",
  ],
  authors: [{ name: "PeçaPronta" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "PeçaPronta",
    title: "PeçaPronta — Projetos de marcenaria conectados à produção sob medida",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "PeçaPronta",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
