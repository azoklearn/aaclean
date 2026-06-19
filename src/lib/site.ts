/**
 * A&A Clean Signature — central content file.
 * Edit text, services, reviews and contact details here.
 */

export const site = {
  name: "A&A Clean Signature",
  shortName: "A&A",
  slogan: "Une nouvelle vie pour votre voiture.",
  baseline: "A&A Clean Signature est la solution.",
  phone: "06 22 85 45 28",
  phoneHref: "tel:+33622854528",
  email: "gerants.cleansignature@outlook.fr",
  emailHref: "mailto:gerants.cleansignature@outlook.fr",
  areas: ["Nancy", "Meurthe-et-Moselle (54)", "Moselle (57)", "Vosges (88)"],
  url: "https://cleansignature.fr",
} as const;

export const nav = [
  { label: "Réalisations", href: "#realisations" },
  { label: "Prestations", href: "#prestations" },
  { label: "Méthode", href: "#methode" },
  { label: "Fidélité", href: "#fidelite" },
  { label: "Zone d'intervention", href: "#zone" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustBadges = [
  "Intervention chez vous",
  "Particuliers & Professionnels",
  "Résultats premium",
] as const;

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 100, suffix: "%", label: "Produits professionnels" },
  { value: 3, suffix: " dép.", label: "Zone couverte · 54 / 57 / 88" },
  { value: 9, suffix: " ans", label: "Protection céramique possible" },
  { value: 0, prefix: "0 €", label: "Déplacement à domicile inclus" },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  benefits: string;
  process: string;
  result: string;
  duration: string;
};

export const services: Service[] = [
  {
    id: "interieur",
    index: "01",
    title: "Nettoyage intérieur",
    tagline: "Un habitacle sain, net et comme neuf.",
    benefits:
      "Élimination des poussières, taches, odeurs et bactéries. Sièges, plastiques, moquettes et plafonnier traités en profondeur.",
    process:
      "Aspiration complète, injection et extraction des tissus, nettoyage vapeur, soin des cuirs et finition des plastiques.",
    result: "Un intérieur assaini, matité d'origine retrouvée, odeur fraîche.",
    duration: "2 à 4 h",
  },
  {
    id: "exterieur",
    index: "02",
    title: "Nettoyage extérieur",
    tagline: "Une carrosserie décontaminée en profondeur.",
    benefits:
      "Retrait des salissures incrustées, goudron, résines et contaminants ferreux qui ternissent la peinture.",
    process:
      "Prélavage mousse active, lavage deux seaux, décontamination chimique et clay bar, séchage premium.",
    result: "Une carrosserie nette, douce au toucher, prête à protéger.",
    duration: "1h30 à 3 h",
  },
  {
    id: "polissage",
    index: "03",
    title: "Polissage",
    tagline: "La correction qui efface les microratures et tourbillons.",
    benefits:
      "Suppression des microratures, hologrammes et marques de lavage. La profondeur et la brillance reviennent.",
    process:
      "Mesure d'épaisseur du vernis, polissage machine en plusieurs passes, contrôle sous lampe.",
    result: "Une peinture redressée, miroir, sans défaut visible.",
    duration: "4 à 8 h",
  },
  {
    id: "ceramique",
    index: "04",
    title: "Traitement céramique",
    tagline: "Une protection durable et un effet hydrophobe extrême.",
    benefits:
      "Bouclier contre UV, salissures et microagressions. Brillance intense et entretien facilité pendant des années.",
    process:
      "Préparation et dégraissage de la surface, application du revêtement céramique, temps de prise contrôlé.",
    result: "Un effet perlant durable et une teinte profonde, longue durée.",
    duration: "1 à 2 jours",
  },
  {
    id: "lustrage",
    index: "05",
    title: "Lustrage",
    tagline: "L'éclat final, ce supplément de profondeur.",
    benefits:
      "Ravive la couleur et apporte une brillance maîtrisée, idéal avant une vente ou un événement.",
    process:
      "Nettoyage de surface, application d'un lustrant de finition, microfinition à la main.",
    result: "Une finition lumineuse, nette et homogène.",
    duration: "1 à 2 h",
  },
  {
    id: "protection",
    index: "06",
    title: "Protection longue durée",
    tagline: "Garder l'effet « neuf » saison après saison.",
    benefits:
      "Protège carrosserie, jantes, vitres et plastiques. Moins de salissures, lavages plus rapides.",
    process:
      "Diagnostic, application de protections adaptées (cire, scellant ou céramique selon besoin), conseils d'entretien.",
    result: "Un véhicule protégé, plus facile à laver, plus longtemps beau.",
    duration: "demi journée",
  },
];

export const whyUs = [
  {
    title: "Intervention à domicile",
    text: "Nous venons à vous, chez vous ou sur votre lieu de travail. Aucun déplacement de votre côté.",
  },
  {
    title: "Produits professionnels",
    text: "Gammes haut de gamme, sûres pour vos surfaces et pensées pour un résultat durable.",
  },
  {
    title: "Souci du détail",
    text: "Chaque recoin compte. Le travail n'est livré que lorsqu'il est irréprochable.",
  },
  {
    title: "Satisfaction client",
    text: "Un échange clair, un devis transparent, un résultat conforme à la promesse.",
  },
  {
    title: "Finition premium",
    text: "Une exigence de studio de detailing, pas de lavage express.",
  },
  {
    title: "Expertise locale",
    text: "Une équipe proche de chez vous, couverture Nancy, 54, 57 et 88.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Prise de contact",
    text: "Par téléphone ou email. On comprend votre besoin et votre véhicule.",
  },
  {
    n: "02",
    title: "Diagnostic du véhicule",
    text: "État de la peinture, de l'habitacle, des protections. Devis clair et adapté.",
  },
  {
    n: "03",
    title: "Intervention",
    text: "Chez vous, avec un matériel professionnel et des produits maîtrisés.",
  },
  {
    n: "04",
    title: "Contrôle qualité",
    text: "Inspection sous lampe et au toucher. Rien n'est laissé au hasard.",
  },
  {
    n: "05",
    title: "Livraison",
    text: "On vous remet un véhicule transformé, avec nos conseils d'entretien.",
  },
];

export type Work = {
  id: string;
  title: string;
  category: "Intérieur" | "Extérieur" | "Polissage" | "Céramique" | "Professionnel";
  hue: number;
  photo?: string; // real photo path; replaces PaintSurface when set
};

export const works: Work[] = [
  { id: "w1", title: "Mercedes AMG nettoyage intérieur complet", category: "Intérieur", hue: 12, photo: "/apres1.jpg" },
  { id: "w2", title: "Mercedes AMG état avant intervention", category: "Intérieur", hue: 28, photo: "/avant1.jpg" },
  { id: "w3", title: "Citroën C3 après nettoyage complet", category: "Intérieur", hue: 210, photo: "/apres2.jpg" },
  { id: "w4", title: "Citroën C3 état avant intervention", category: "Intérieur", hue: 200, photo: "/avant2.jpg" },
  { id: "w5", title: "Utilitaire flotte professionnelle", category: "Professionnel", hue: 18 },
  { id: "w6", title: "Coupé finition miroir", category: "Polissage", hue: 0 },
  { id: "w7", title: "Familiale assainissement habitacle", category: "Intérieur", hue: 35 },
  { id: "w8", title: "Berline premium pack céramique", category: "Céramique", hue: 205 },
];

/**
 * ⚠️ Avis clients — à remplacer par de VRAIS témoignages.
 * Ces entrées sont des exemples de mise en page. Remplacez-les par les retours
 * réels de vos clients (avec leur accord) avant la mise en ligne.
 */
export const testimonials = [
  {
    name: "Client à remplacer",
    place: "Nancy (54)",
    rating: 5,
    text: "Remplacez ce texte par un avis client réel. Décrivez l'état initial du véhicule et le résultat obtenu.",
    service: "Traitement céramique",
  },
  {
    name: "Client à remplacer",
    place: "Metz (57)",
    rating: 5,
    text: "Remplacez ce texte par un avis client réel. Mentionnez l'intervention à domicile et la qualité de la finition.",
    service: "Nettoyage intérieur",
  },
  {
    name: "Client à remplacer",
    place: "Épinal (88)",
    rating: 5,
    text: "Remplacez ce texte par un avis client réel. Soulignez le sérieux, la ponctualité et le résultat premium.",
    service: "Polissage",
  },
];

export const faqArea = [
  "Nancy",
  "Lunéville",
  "Toul",
  "Pont-à-Mousson",
  "Metz",
  "Thionville",
  "Épinal",
  "Saint-Dié",
];
