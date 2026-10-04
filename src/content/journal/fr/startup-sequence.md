---
title: "De la mise sous tension à l'image"
description: "Imaginer une séquence de démarrage qui rappelle le geste d'allumer un appareil."
date: 2026-10-01
locale: fr
category: Software
number: '03'
visual: signal
---

L'expérience visée commence par un seul geste physique : allumer le deck. Tout ce qui suit doit avoir du sens sans clavier, sans bureau et sans connexion réseau.

Derrière cette interaction simple, plusieurs systèmes distincts. Le Raspberry Pi doit démarrer, le logiciel de lecture doit devenir prêt, et l'écran de façade doit dire ce qui se passe.

## Penser en états

Un premier modèle utile sépare l'alimentation, la disponibilité du système et la disponibilité de la lecture. Un écran allumé ne signifie pas forcément que la lecture vidéo est possible.

```text
Mise sous tension
  → Démarrer le service de contrôle
  → Vérifier le lecteur et l'écran
  → Charger la playlist locale sélectionnée
  → Afficher l'état prêt
```

C'est une séquence proposée, pas une spécification d'amorçage déjà implémentée. L'ordre réel dépendra du matériel et des interfaces de contrôle retenus pour la construction.

## Rendre l'attente compréhensible

Un indicateur retenu peut dire que le deck démarre. Une fois le lecteur prêt, l'interface doit changer clairement. Une animation décorative ne doit pas suggérer que le système répond avant qu'il ne le puisse vraiment.

Si un composant échoue, l'écran a besoin d'un état utile, plutôt que d'une animation de démarrage sans fin.

## Séparer la maintenance

La lecture quotidienne est prévue locale et autonome. Une interface de service peut donner accès aux playlists, aux médias et aux diagnostics quand un entretien est nécessaire.

Le site que vous lisez documente cette idée ; ce n'est pas l'application Deck Manager, et il ne commande aucun matériel.

## Prochaine étape

Mesurer le comportement de démarrage sur le matériel choisi et noter chaque transition. Ces observations devront guider le timing et le retour visuel de l'interface définitive.
