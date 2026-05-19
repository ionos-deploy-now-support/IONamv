# Tutoring

Ce projet permet de gérer une association de soutien scolaire. Il s'agit d'un projet uniquement front-end.

## Structure

La page est constitué d'un menu à gauche, et du contenu à droite. Si le contenu dépasse de l'écran, une barre de défilement appraît, et la section de contenu est scrollable. Le menu reste alors fixe et ne défile pas.

## Menu

Le menu contient des liens vers certaines pages :
- Liste des familles
- Ajouter une famille

## Liste des familles

### Modèle
- L'association permet l'adhésion de familles. 
- Une famille peut être constituée constituée de plusieurs membres.
- La cotisation est versée pour toute la famille, quel que soit le nombre de membres.
- Une famille a un nom.
- Un membre a un nom de famille (qui peut être différent du nom de famille), un prénom, et un email.

### Écran
- Les familles sont affichées, avec leur nom, un bouton pour afficher le détail d'une famille, un autre pour modifier la famille, et une icone indiquant si la famille est pliée ou dépliée.
- Sous chaque famille en mode dépliée, la liste des membres de la famille est affichée, avec leur prénom, nom de famille, email, un bouton pour modifier le membre, et un bouton pour supprimer le membre. 
- La liste des familles et de leurs membres est stockée et récupérée dans le local storage.
- Un clic sur la ligne d'une famille permet d'afficher ou de cacher la liste des membre.

### Détail d'une famille

Lors du clic sur le bouton, l'utilisateur est redirigé vers la page de détail d'une famille.

### Modifier une famille

Lors du clic sur le bouton, l'utilisateur est redirigé vers la page de modification d'une famille.

### Modifier un membre

Lors du clic sur le bouton, l'utilisateur est redirigé vers la page de modification d'un membre d'une famille.

### Supprimer un membre

Lors du clic sur le bouton, le membre est supprimé du local storage, et la liste est mise à jour.

## Ajout d'une famille

Un formulaire permet d'ajouter une famille en saisissant son nom. 
- Le champ est initialement vide.
- Le nom est obligatoire.
- Si le nom est vide après une modification, un message d'erreur apparaît en dessous. Il n'y a pas de message d'erreur à l'ouverture de la page.
- Le formulaire est validé lors du clic sur le bouton de validation, ou lors d'un appui sur la touche Entrée
    - Si le formulaire est valide, la famille est ajoutée au local storage, et l'utilisateur est redirigé sur la page de détail de la famille.
    - Si un champ n'est pas valide, le bouton de validation est désactivé, et l'appui sur la touche Entrée n'a pas d'effet.
- Un bouton d'annulation est présent. Au clic, l'utilisateur revient sur la page précédente, ou sur la liste des familles à défaut.

## Détail d'une famille
- La liste des membres de la famille est affichée, avec le prénom, le nom, et l'email de chaque membre, ainsi qu'un bouton pour modifier et un bouton pour supprimer chaque membre.
- Un bouton permet d'ajouter un membre

### Ajouter un membre

Lors du clic sur le bouton, l'utilisateur est redirigé vers la page d'ajout d'un membre d'une famille.

### Modifier un membre

Lors du clic sur le bouton, l'utilisateur est redirigé vers la page de modification d'un membre d'une famille.

### Supprimer un membre

Lors du clic sur le bouton, le membre est supprimé du local storage, et la liste est mise à jour.

## Ajout d'un membre d'une famille

Un formulaire permet d'ajouter un membre en saisissant son nom, son prénom et son email. 
- Le nom est pré-rempli avec le nom de la famille.
- Les autres champs sont initialement vides.
- Le nom et le prénom sont obligatoires.
- L'email n'est pas obligatoire.
- Si l'un des champs obligatoires est vide après une modification, un message d'erreur apparaît en dessous. Il n'y a pas de message d'erreur à l'ouverture de la page.
- Le formulaire est validé lors du clic sur le bouton de validation, ou lors d'un appui sur la touche Entrée
    - Si les champs sont valides, le membre est ajouté à sa famille dans le local storage, et l'utilisateur est redirigé sur la page d'où il vient, ou sur le détail de la famille à défaut.
    - Si un champ n'est pas valide, le bouton de validation est désactivé, et l'appui sur la touche Entrée n'a pas d'effet.
- Un bouton d'annulation est présent. Au clic, l'utilisateur revient sur la page précédente, ou sur le détail de la famille à défaut.


## Modification d'un membre d'une famille

Un formulaire permet de modifier un membre en saisissant son nom, son prénom et son email. 
- Les champs sont initialisés avec leur valeur enregistrée.
- Le nom et le prénom sont obligatoires.
- Si l'un des champs obligatoires est vide après une modification, un message d'erreur apparaît en dessous. Il n'y a pas de message d'erreur à l'ouverture de la page.
- Le formulaire est validé lors du clic sur le bouton de validation, ou lors d'un appui sur la touche Entrée
    - Si les champs sont valides, le membre est modifié dans le local storage, et l'utilisateur est redirigé sur la page d'où il vient, ou sur le détail de la famille à défaut.
    - Si un champ n'est pas valide, le bouton de validation est désactivé, et l'appui sur la touche Entrée n'a pas d'effet.
- Un bouton d'annulation est présent. Au clic, l'utilisateur revient sur la page précédente, ou sur le détail de la famille à défaut.
