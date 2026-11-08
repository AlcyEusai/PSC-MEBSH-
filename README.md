# PSC-MEBSH — Site V2 administrable

Version basée sur la maquette fournie. Le site public est statique et peut être hébergé sur GitHub Pages. Le contenu est dans `content/site.json` et les médias dans `assets/uploads/`. L’interface d’édition Decap CMS se trouve dans `/admin/`.

**L’administration n’est pas utilisable immédiatement : OAuth GitHub doit être configuré avec un service externe.** Voir `admin/README-ADMIN.md`.

## Test local
Depuis ce dossier : `python -m http.server 8000` puis ouvrir `http://localhost:8000`. Ne pas ouvrir directement le fichier HTML (`file://`) : le chargement JSON nécessite un serveur HTTP.

## Publication
Copier les fichiers à la racine du dépôt GitHub, activer GitHub Pages. Remplacer les paramètres `VOTRE_COMPTE_GITHUB` dans `admin/config.yml`.

## Photos et données
Les placeholders sont volontaires : aucune photo de la maquette n’est réutilisée comme une photographie réelle. Ajouter des photographies avec consentement et autorisation, puis les sélectionner dans le CMS. Les statistiques de démonstration et les partenaires doivent être vérifiés.

## Paiements
Configurer uniquement une URL HTTPS officielle de prestataire de dons ; les transactions et reçus sont gérés par ce prestataire.
