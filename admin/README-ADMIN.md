# Administration PSC-MEBSH — à configurer avant utilisation

**Important :** `/admin/` est l’interface Decap CMS, mais la connexion n’est **pas opérationnelle** tant que l’authentification GitHub OAuth n’est pas configurée. GitHub Pages n’héberge pas de serveur OAuth. Ne publiez pas de clés privées dans ce dépôt.

1. Créez un dépôt GitHub `psc-mebsh` et importez **le contenu** de ce dossier à sa racine.
2. Remplacez `VOTRE_COMPTE_GITHUB` dans `admin/config.yml` par votre identifiant GitHub et vérifiez le nom du dépôt.
3. Configurez Pages : Settings > Pages > Deploy from a branch > main > /(root).
4. Configurez un fournisseur OAuth compatible Decap CMS et GitHub (hébergement serveur distinct, par exemple un service OAuth Decap). Ajoutez `base_url` et éventuellement `auth_endpoint` dans `admin/config.yml` selon les instructions de ce fournisseur. Configurez les URL de retour autorisées dans l’application OAuth GitHub.
5. Accordez aux rédacteurs les autorisations GitHub adaptées : le backend GitHub exige des droits d’écriture sur le dépôt. Ne partagez jamais un compte administrateur.
6. Ouvrez `https://VOTRE_COMPTE_GITHUB.github.io/psc-mebsh/admin/`, connectez-vous, modifiez le contenu, puis publiez. La publication crée un commit GitHub et déclenche Pages.

## Ce qui est modifiable
Bannière, photos, présentation, chiffres clés, six programmes, projets, actualités, partenaires, témoignage, contacts, lien de dons et texte d’adhésion. Les photos sont placées dans `assets/uploads`.

## Limites importantes
- Les données sont publiques dans le dépôt et le site : **ne jamais enregistrer de données médicales personnelles, de noms de patients, de mots de passe ou de secrets**.
- Le lien de dons redirige vers une page de paiement externe ; **aucun paiement n’est encaissé par ce site** et le montant choisi n’est pas transmis automatiquement.
- Le formulaire de contact et la gestion des adhésions nécessitent un service externe conforme à vos obligations de confidentialité.
- Les chiffres et partenaires présents dans la maquette doivent être vérifiés. Les photos authentiques restent à fournir.
- L’interface `/admin/` n’est pas une protection des contenus : elle permet de les éditer après connexion GitHub OAuth.
- Le paramètre `public_folder` est configuré pour GitHub Pages dans `/psc-mebsh/`. Si vous changez le nom du dépôt ou utilisez un domaine personnalisé à la racine, adaptez ce paramètre et les URL déjà enregistrées dans le contenu.
