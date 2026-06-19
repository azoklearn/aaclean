import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "A&A Clean Signature : Detailing & traitement céramique à Nancy (54, 57, 88)",
    template: "%s · A&A Clean Signature",
  },
  description:
    "Nettoyage automobile premium, polissage, traitement céramique et rénovation esthétique. Intervention à domicile dans le 54, 57 et 88. Particuliers & professionnels.",
  keywords: [
    "detailing Nancy",
    "nettoyage automobile Nancy",
    "traitement céramique Nancy",
    "polissage voiture Nancy",
    "nettoyage voiture à domicile",
    "detailing 54",
    "detailing 57",
    "detailing 88",
    "lavage premium automobile",
    "rénovation esthétique automobile",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "A&A Clean Signature : Une nouvelle vie pour votre voiture",
    description:
      "Detailing premium à domicile : nettoyage, polissage et traitement céramique dans le 54, 57 et 88.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "A&A Clean Signature",
    description:
      "Detailing premium à domicile dans le 54, 57 et 88 : nettoyage, polissage, céramique.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: site.name,
  description:
    "Detailing automobile premium à domicile : nettoyage intérieur et extérieur, polissage, traitement céramique, protection longue durée.",
  telephone: site.phone,
  email: site.email,
  url: site.url,
  areaServed: ["Nancy", "Meurthe-et-Moselle", "Moselle", "Vosges"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Grand Est",
    addressCountry: "FR",
  },
  priceRange: "€€",
  slogan: site.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="grain min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
