---
title: "De la mise sous tension à l'image"
description: 'Le démarrage que je veux : un interrupteur, puis une image, sans clavier ni réseau.'
date: 2026-10-01
locale: fr
category: Software
entryType: intention
perspective: experience
number: '03'
visual: signal
---

Je veux un seul geste : allumer le deck. Ensuite, je dois pouvoir comprendre ce qui se passe, sans clavier, sans bureau et sans réseau.

Plusieurs choses doivent démarrer. Le Raspberry Pi doit s’allumer, la lecture doit devenir disponible, et l’écran de façade doit dire lequel de ces états est le bon. Un écran allumé n’est pas la même chose qu’une image que je peux lancer.

L’ordre que je vise : mise sous tension, démarrer le service de contrôle, vérifier le lecteur et l’écran, charger la playlist locale choisie, puis montrer qu’il est prêt. Tant que ce n’est pas fini, l’écran doit dire que le deck démarre, et il doit changer une fois que la lecture peut vraiment répondre. Si quelque chose échoue, je veux un état lisible, pas une animation qui continue.

La lecture de tous les jours doit rester locale. Un écran de service à part peut garder les playlists, les médias et les diagnostics quand j’ai à entretenir la machine. Ce site n’est pas cet écran, et il ne commande pas le deck.
