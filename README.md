# A&A Clean Signature — site vitrine

Site premium de detailing automobile (nettoyage, polissage, traitement
céramique, protection) avec intervention à domicile dans le **54 / 57 / 88**.

Stack : **Next.js 16 (App Router)** · TypeScript · Tailwind CSS v4 ·
Framer Motion · GSAP · Lenis (smooth scroll) · lucide-react.
Polices : **Clash Display** (titres) + **Satoshi** (texte) via Fontshare.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
```

## Modifier le contenu

Tout le texte éditable est centralisé dans **`src/lib/site.ts`** :
coordonnées, prestations, étapes de la méthode, avis, réalisations, zone.

| Élément | Fichier |
| --- | --- |
| Téléphone / e-mail / zone | `src/lib/site.ts` → `site` |
| Prestations (bénéfices, déroulé, résultat, durée) | `site.ts` → `services` |
| Méthode (5 étapes) | `site.ts` → `processSteps` |
| Réalisations (galerie) | `site.ts` → `works` |
| Avis clients | `site.ts` → `testimonials` |
| SEO / métadonnées | `src/app/layout.tsx` |

## ⚠️ À remplacer avant la mise en ligne

Le site est livré avec des **visuels de démonstration** (surfaces de peinture
générées en CSS, volontairement abstraites — aucune voiture stock/IA) et des
**avis exemples**. À remplacer par les vrais contenus du client :

1. **Photos réelles** — hero, avant/après, galerie de réalisations.
   Déposez les images dans `public/` et remplacez le composant
   `<PaintSurface … />` par `<Image … />` (l'optimisation next/image est prête ;
   les hôtes distants se déclarent dans `next.config.ts`).
2. **Avis clients réels** — remplacer les entrées « Client à remplacer » dans
   `testimonials` (`site.ts`). Ne pas inventer d'avis.
3. **Mentions légales / CGV** si nécessaire.

## Notes techniques

- Les animations d'apparition (`Reveal`) reposent sur des transitions CSS +
  IntersectionObserver, avec repli temporisé : le contenu reste visible même si
  le JS est lent ou l'onglet en arrière-plan.
- `prefers-reduced-motion` est respecté (animations désactivées).
- Données structurées `AutoDetailing` (schema.org) injectées dans le layout.
