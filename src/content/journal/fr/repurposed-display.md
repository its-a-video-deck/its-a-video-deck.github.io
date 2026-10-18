---
title: 'La sensation d’un tube'
description: 'Je voulais un petit CRT couleur dans la fenêtre des cassettes. La recherche m’a conduit à un téléphone OLED et aux loupes de vieilles visionneuses de diapositives.'
date: 2026-10-09
locale: fr
category: Design
entryType: design-note
perspective: experience
number: '02'
visual: display
---

Dans la fenêtre des cassettes, j’imaginais un petit écran couleur. Il devait avoir la présence d’un tube cathodique : une vitre bombée, une image lumineuse, ce piqué particulier que j’associe aux anciennes télés. Je voulais que l’écran trouve sa place parmi les boutons et les vumètres, dans un video deck qui aurait pu appartenir à leur époque.

J’avais en tête des appareils vidéo transportables avec leur propre petit écran. Leur allure me semblait cependant plus proche du matériel technique que de la hi-fi du salon. Ils donnaient une référence à mon idée, mais je cherchais une autre façon de l’intégrer. Le point de départ restait assez évident : trouver un vrai tube.

## La couleur dans une petite fenêtre

J’ai cherché des CRT à récupérer sur de petits appareils, avec une limite autour de cinq à six pouces pour rester dans les dimensions envisagées pour la fenêtre des cassettes. Dans ce que je trouvais, les petits écrans étaient surtout noir et blanc. Les modèles couleur repérés prenaient trop de place en profondeur.

Une piste plus compacte m’a retenu un moment, mais elle menait à un appareil de collection à plusieurs centaines d’euros. Je retrouvais une limite déjà rencontrée dans le projet : démonter un objet recherché pour en récupérer une partie ne correspondait ni au budget ni à mon idée du réemploi.

J’ai même regardé les anciens interphones vidéo. Ils contenaient de petits tubes, mais tous ceux que je trouvais étaient, eux aussi, noir et blanc. J’ai alors envisagé de faire avec. Après tout, mes téléviseurs d’époque le sont déjà.

C’est justement ce qui m’a fait tenir à la couleur. Cet écran dans le deck pouvait offrir quelque chose de différent. J’aimerais d’ailleurs prévoir un interrupteur pour passer de la couleur au noir et blanc, garder les deux possibilités. J’ai donc fini par abandonner la recherche d’un tube et déplacer la question : quel écran plat me permettrait d’en retrouver la sensation ?

## Un écran que je connaissais déjà

Puisque le projet utilisait un Raspberry Pi, j’ai commencé par les écrans proposés pour l’accompagner. Aux résolutions et à la qualité que je recherchais, les prix me semblaient élevés. Je tenais surtout à l’OLED : je voulais des noirs profonds, sans cette impression de fond éclairé qui me gênait sur les LCD, et une image suffisamment fine.

Il existait pourtant toute une réserve d’écrans de qualité dans des appareils devenus peu chers : les anciens smartphones. Un téléphone pouvait avoir passé l’âge d’être utilisé au quotidien tout en gardant un très bel écran. Cette piste me plaisait aussi parce qu’elle ramenait le projet vers un objet à réemployer.

Je me suis souvenu du Motorola Moto X de deuxième génération que j’avais eu. Son écran OLED était lumineux, et j’aimais la qualité de sa vitre, qui résistait bien aux rayures à mes yeux. Mais un détail comptait encore davantage : l’image semblait immédiatement derrière le verre. Je ne percevais presque pas de distance entre les deux.

J’ai aussi essayé un Samsung Galaxy S4 acheté peu cher, pour pièces. Sur cet exemplaire, l’écran me paraissait moins lumineux, et je distinguais davantage l’écart entre la vitre et l’image. Ce petit décalage se remarquait à l’usage. Le Moto X s’est imposé par cette proximité : avant même de chercher à imiter un tube, il me donnait une relation entre le verre et l’image qui me plaisait.

## Garder le téléphone entier

J’ai longtemps envisagé de ne conserver que la dalle OLED et de la brancher directement au Raspberry Pi. Cela aurait permis d’écarter le reste du téléphone, sa batterie et son système d’exploitation. Mais, en cherchant comment exploiter la nappe de l’écran, je n’ai pas trouvé d’adaptation accessible. La piste demandait un travail de rétro-ingénierie que je ne me voyais pas mener pour ce projet.

J’ai choisi de garder le Moto X entier. Une liaison USB avec le Raspberry Pi permettait de lui transmettre le flux vidéo ; j’avais déjà testé et validé ce principe. Je pouvais donc conserver l’ensemble tel quel, y compris cette vitre qui avait participé à mon choix.

Restait à donner à cet écran plat le relief que j’avais en tête.

## Le détour par les diapositives

L’idée est venue des petites visionneuses de diapositives, ces boîtiers avec une ampoule qui permettaient de regarder une image agrandie. J’en trouvais facilement d’occasion, à des prix modestes. Selon le modèle, j’y trouvais une lentille seule ou plusieurs loupes superposées. Certaines avaient une forme proche du 4/3, qui me rappelait celle d’un petit écran de télévision.

Ces pièces pouvaient donner au projet ce que le téléphone seul n’apportait pas. J’ai retenu l’idée de récupérer les loupes pour les placer devant son écran. Associées à la luminosité de l’OLED et à un travail sur le rendu de l’image, elles permettent de chercher cette impression de vitre bombée et ce piqué qui m’avaient d’abord orienté vers le CRT.

C’est cette solution physique que j’ai validée pour le deck. Le but reste de m’approcher autant que possible de la sensation du tube. J’aime qu’elle réunisse deux objets qui n’étaient pas destinés à se rencontrer : un téléphone devenu ancien et une visionneuse de diapositives, chacun apportant une qualité utile à l’écran.

Les essais de deux visionneuses, l’OPO puis le Panavue 9, et les contraintes de placement devant le téléphone sont détaillés dans [Retrouver le bombé avec une lentille](/fr/journal/curved-screen-lens/).

## Faire oublier le smartphone

Garder le téléphone entier avait aussi une conséquence : il venait avec ses habitudes. Un logo constructeur, une animation de démarrage, une vibration ou une notification pouvaient suffire à rappeler ce qui se trouvait derrière la vitre. Même avec le bon aspect physique, ces apparitions auraient rompu l’expérience.

Il fallait donc que son origine s’efface. Les procédures pour en faire un écran dédié au Raspberry Pi auront leur fiche de réalisation ; elles demandent bien plus d’étapes que je ne l’imaginais au départ. Ici, elles répondent à une exigence simple : du démarrage à l’image, l’écran doit sembler appartenir au deck.

C’est ce qui relie toute cette recherche, du premier petit tube envisagé aux loupes de diapositives. Je veux retrouver, dans la fenêtre des cassettes, un écran couleur que l’on puisse regarder avec le même plaisir que les appareils autour de lui.
