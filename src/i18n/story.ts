export const storyFigureIds = ['snow', 'shelf', 'path', 'chassis'] as const;

export type StoryFigureId = (typeof storyFigureIds)[number];

const storyEn = {
  metaTitle: 'Origin — DIY Video Deck',
  metaDescription:
    'Why this video deck exists: physical media, two Sony televisions showing snow, Sade, and the decision to reuse a cassette-deck chassis.',
  back: '← BACK TO THE PROJECT',
  kicker: 'ORIGIN',
  written: 'ACCOUNT WRITTEN 2026.10.04',
  titleLine1: 'The deck Sony',
  titleLine2: 'never made.',
  dek: 'I wanted my old televisions to show a picture again. The picture I wanted first was Sade.',
  sections: [
    {
      heading: 'Back to the machines',
      paragraphs: [
        'Lately I have wanted physical media again. I am not rejecting digital: what it opened up is extraordinary. The other side is that, apart from a phone or a computer, I no longer own the recordings I love.',
        'Owning them used to mean leaving them visible in the room. Records, CDs, films. I liked searching and completing a shelf, and even the disappointment when an album was weaker than the previous one by the same artist. That brought me back to a Walkman and a Discman I already had, and then to buying older hi-fi.',
        'I love the look of the late 1970s and the early 1980s. The equipment is well made, and the advertisements of those years treated owning it as a status. The ranges were wide, and a technical step usually came with a real effort in design. That pairing feels rarer to me now. The machines still turn up second-hand, so putting them back in a living room is a choice I can actually make.',
      ],
    },
    {
      heading: 'Snow',
      paragraphs: [
        'Along with the Walkmans, a receiver and cassette decks, I bought a first television: a Sony TV-110 UK. Aluminium, minimal, the style I wanted. Then Sony Watchmans. The first was an FD-210BE, and it is beautiful.',
        'They work. Terrestrial broadcasting has been off for years, so the screen is only snow. That was the trigger. I wanted to send my own programmes into these sets: pictures from their own period, and above all clips of Sade.',
      ],
      figure: 'snow' as const,
    },
    {
      heading: 'The picture I wanted',
      paragraphs: [
        'I have loved the music of Sade for as long as I can remember, and <em>Diamond Life</em> is a beacon of those years. The work is already in the house, on almost every medium: vinyl, CD, cassette, MiniDisc, a book of sheet music, a concert programme, a postcard. I still do not have the VHS, the Betamax or the LaserDisc. I like that one piece of music could become so many objects.',
        'It fits the rest of the room. The first wish was concrete: play the clips on those screens.',
      ],
      figure: 'shelf' as const,
    },
    {
      heading: 'From a few buttons to the SB-500',
      paragraphs: [
        'At first I pictured a small DIY block, a few buttons plugged into the television. The longer I thought about the project, the more I wanted an object that could have been sold at the time, and that would take its place in the hi-fi.',
        'I looked at building a small deck from scratch. I could not find switches with the feel of that period, and spare parts taken from old decks cost a fortune, so I would buy a machine and change it.',
        'The Sony SB-500 looked right for that. It is a tape-recorder selector: four switches on the face, two rotary knobs, a compact case, a simple design. It is rare, it was sold only in Japan, and second-hand they go for more than €150. That is not how I want to build this. I want reuse. I did not want to take apart a machine other people still treat as valuable, or to spend the budget there.',
      ],
      figure: 'path' as const,
    },
    {
      heading: 'Two decks, and a seller',
      paragraphs: [
        'I already owned a Sony 188SD, bought to listen to, in good cosmetic shape. It still needed new belts, and the pause key seemed stuck. I was looking for a cheap donor, sold for parts, when a seller on eBay put up two other decks: another 188SD, and a Sony 186SD. I bid on the 186SD. That is the one I bought for the project. His 188SD had a broken pause key as well, nobody was bidding, and the price was at the floor.',
        'We got on. He could not find a buyer for his 188SD. Shipping would wait until the holidays were over and we were both back. I asked about that second 188SD, and he offered to send it with the 186SD for the same price. He could not keep them, and he did not want them thrown away. I told him about the project.',
        'Both machines arrived for less than €20.',
      ],
    },
    {
      heading: 'The chassis',
      paragraphs: [
        'The video deck will live in the chassis of the 186SD. It will still feed the television. It will also have its own screen, and the VU meters that already belong to that face.',
      ],
      quote: 'The video deck Sony never made.',
      figure: 'chassis' as const,
    },
    {
      heading: 'Why I am writing it down',
      paragraphs: [
        'I want to leave a trail: how this started, and later enough of the work for someone who wants to try something similar. AI tools are what made that feel possible. Without them this would probably have stayed the hobby of a lifetime, and one I would probably have dropped. The site is what I give in return.',
      ],
    },
  ],
  figures: {
    snow: {
      alt: 'A simple drawing of a television screen filled with snow, marked as a study and not a photograph.',
      caption: 'FIG. 02 — SNOW, WHERE THE IDEA STARTS',
      note: 'STUDY · NOT A PHOTOGRAPH OF THE TV-110',
      screen: 'SNOW',
      set: 'TV-110 / WATCHMAN',
    },
    shelf: {
      alt: 'A simple plate listing Sade media already owned, and the video formats still missing.',
      caption: 'FIG. 03 — ONE WORK, MANY OBJECTS',
      note: 'STUDY · NOT A PHOTOGRAPH OF THE SHELF',
      owned: 'ALREADY HERE',
      missing: 'STILL MISSING',
      have: ['VINYL', 'CD', 'CASSETTE', 'MINIDISC', 'SCORE', 'PROGRAMME', 'POSTCARD'],
      lack: ['VHS', 'BETAMAX', 'LASERDISC'],
    },
    path: {
      alt: 'Three steps: a small button block, a Sony SB-500 set aside, and a 186SD chassis kept.',
      caption: 'FIG. 04 — HOW THE OBJECT CHANGED SHAPE',
      note: 'STUDY · NOT A DRAWING OF A FINISHED DECK',
      steps: [
        { n: '01', title: 'A FEW BUTTONS', detail: 'PLUGGED INTO THE TV' },
        { n: '02', title: 'SB-500', detail: 'SET ASIDE' },
        { n: '03', title: '186SD', detail: 'THE CHASSIS' },
      ],
    },
    chassis: {
      alt: 'A simple front-elevation study of a cassette-deck chassis with two meters and a screen area, labeled 186SD.',
      caption: 'FIG. 05 — THE 186SD, AS A VIDEO DECK',
      note: 'STUDY · FRONT ELEVATION, NOT A PHOTOGRAPH',
      meters: 'VU',
      screen: 'SCREEN',
      plate: '186SD',
    },
  },
  end: 'END OF ORIGIN',
  nextText: 'The build log takes the questions this page leaves open.',
  nextCta: 'Open the build log',
};

const storyFr = {
  metaTitle: 'Genèse — DIY Video Deck',
  metaDescription:
    'Pourquoi ce video deck existe : les supports physiques, deux télés Sony sur la neige, Sade, et le choix de réemployer un châssis de deck cassette.',
  back: '← RETOUR AU PROJET',
  kicker: 'GENÈSE',
  written: 'RÉCIT ÉCRIT LE 2026.10.04',
  titleLine1: 'Le deck que Sony',
  titleLine2: 'n’a jamais fait.',
  dek: 'Je voulais que mes vieilles télés montrent à nouveau une image. La première image que je voulais, c’était Sade.',
  sections: [
    {
      heading: 'Revenir aux appareils',
      paragraphs: [
        'Ces derniers temps, l’envie des supports physiques est revenue. Je ne renie pas le numérique : ce qu’il a ouvert est exceptionnel. Le revers, c’est qu’à part un téléphone ou un ordinateur, je ne possède plus les enregistrements que j’aime.',
        'Posséder voulait dire les laisser visibles dans la pièce. Disques, CD, films. J’aimais chercher, compléter une étagère, et même la déception d’un album moins bon que le précédent du même artiste. De là, je suis revenu à un Walkman et à un Discman que j’avais déjà, puis à l’achat de hi-fi plus ancienne.',
        'J’aime l’allure de la fin des années 1970 et du début des années 1980. Les appareils sont bien faits, et les publicités de ces années-là montraient qu’en posséder un était un signe de statut. Les gammes étaient larges, et un progrès technique allait d’ordinaire avec un vrai travail de design. Cette association me semble plus rare aujourd’hui. Les appareils passent encore d’occasion : leur redonner une place dans le salon est un choix que je peux faire.',
      ],
    },
    {
      heading: 'La neige',
      paragraphs: [
        'En plus des Walkman, d’un ampli-tuner et de decks cassette, j’ai acheté une première télé : une Sony TV-110 UK. Aluminium, minimaliste, le style que je voulais. Puis des Sony Watchman. Le premier est un FD-210BE, et il est magnifique.',
        'Ils fonctionnent. L’hertzien est coupé depuis des années, et l’écran ne montre que de la neige. C’est de là que l’idée est partie. Je voulais envoyer mes propres programmes dans ces postes : des images de leur époque, et surtout des clips de Sade.',
      ],
      figure: 'snow' as const,
    },
    {
      heading: 'L’image que je voulais',
      paragraphs: [
        'J’aime la musique de Sade depuis toujours, et <em>Diamond Life</em> est un phare de ces années. L’œuvre est déjà chez moi, sur presque tous les supports : vinyle, CD, cassette, MiniDisc, un livre de partitions, un programme de concert, une carte postale. Il me manque encore la VHS, la Betamax et le LaserDisc. J’aime qu’une musique ait pu devenir autant d’objets.',
        'Elle va avec le reste de la pièce. Le premier souhait était donc concret : passer les clips sur ces écrans.',
      ],
      figure: 'shelf' as const,
    },
    {
      heading: 'De quelques boutons au SB-500',
      paragraphs: [
        'Au début, j’imaginais un petit bloc : quelques boutons, branchés à la télé. Plus j’y pensais, plus je voulais un objet qui aurait pu être vendu à l’époque, et qui prendrait sa place dans la chaîne hi-fi.',
        'J’ai envisagé de construire un petit deck depuis zéro. Je n’ai pas trouvé d’interrupteurs qui aient le toucher de cette époque, et les pièces tirées de vieux decks coûtent une fortune. J’achèterais donc un appareil, et je le modifierais.',
        'Le Sony SB-500 semblait convenir. C’est un sélecteur de magnétophones : quatre interrupteurs en façade, deux boutons rotatifs, un boîtier compact, une conception simple. Il est rare, il n’était vendu qu’au Japon, et d’occasion ils dépassent 150 €. Ce n’est pas comme ça que je veux construire. Je veux le réemploi. Je ne voulais pas démonter un appareil que d’autres tiennent encore pour précieux, ni mettre le budget là.',
      ],
      figure: 'path' as const,
    },
    {
      heading: 'Deux decks, et un vendeur',
      paragraphs: [
        'Je possédais déjà un Sony 188SD, acheté pour l’écoute, en bon état visuel. Il lui fallait des courroies neuves, et la touche pause semblait coincée. Je cherchais un donneur peu cher, vendu pour pièces, quand un vendeur a mis aux enchères sur eBay deux autres decks : un second 188SD, et un Sony 186SD. J’ai enchéri sur le 186SD. C’est celui-là que j’ai acheté pour le projet. Le 188SD du vendeur avait lui aussi la touche pause cassée, personne n’enchérissait, et le prix était au plus bas.',
        'On a sympathisé. Il ne trouvait pas preneur pour son 188SD. L’envoi attendrait la fin des vacances, de part et d’autre. J’ai demandé pour ce second 188SD, et il a proposé de l’envoyer avec le 186SD, pour le même prix. Il ne pouvait pas les garder, et il ne voulait pas qu’ils finissent jetés. Je lui ai parlé du projet.',
        'Les deux appareils sont arrivés pour moins de 20 €.',
      ],
    },
    {
      heading: 'Le châssis',
      paragraphs: [
        'Le video deck prendra place dans le châssis du 186SD. Il alimentera toujours la télé. Il aura aussi son propre écran, et les vumètres qui appartiennent déjà à cette façade.',
      ],
      quote: 'Le video deck que Sony n’a jamais fait.',
      figure: 'chassis' as const,
    },
    {
      heading: 'Pourquoi je l’écris',
      paragraphs: [
        'Je veux laisser une trace : comment ça a commencé, et plus tard assez du travail pour qui voudrait essayer quelque chose de proche. Les outils d’IA sont ce qui a rendu cela tenable. Sans eux, ce serait probablement resté le loisir d’une vie, et un loisir que j’aurais probablement lâché. Le site est ce que je rends en échange.',
      ],
    },
  ],
  figures: {
    snow: {
      alt: 'Un dessin simple d’un écran de télévision rempli de neige, présenté comme une étude et non comme une photo.',
      caption: 'FIG. 02 — LA NEIGE, LÀ OÙ L’IDÉE COMMENCE',
      note: 'ÉTUDE · PAS UNE PHOTO DE LA TV-110',
      screen: 'NEIGE',
      set: 'TV-110 / WATCHMAN',
    },
    shelf: {
      alt: 'Une planche simple des supports Sade déjà là, et des formats vidéo qui manquent encore.',
      caption: 'FIG. 03 — UNE ŒUVRE, PLUSIEURS OBJETS',
      note: 'ÉTUDE · PAS UNE PHOTO DE L’ÉTAGÈRE',
      owned: 'DÉJÀ LÀ',
      missing: 'ENCORE ABSENT',
      have: ['VINYLE', 'CD', 'CASSETTE', 'MINIDISC', 'PARTITIONS', 'PROGRAMME', 'CARTE'],
      lack: ['VHS', 'BETAMAX', 'LASERDISC'],
    },
    path: {
      alt: 'Trois étapes : un petit bloc de boutons, un Sony SB-500 écarté, et un châssis 186SD retenu.',
      caption: 'FIG. 04 — COMMENT L’OBJET A CHANGÉ DE FORME',
      note: 'ÉTUDE · PAS LE DESSIN D’UN DECK FINI',
      steps: [
        { n: '01', title: 'QUELQUES BOUTONS', detail: 'BRANCHÉS À LA TÉLÉ' },
        { n: '02', title: 'SB-500', detail: 'ÉCARTÉ' },
        { n: '03', title: '186SD', detail: 'LE CHÂSSIS' },
      ],
    },
    chassis: {
      alt: 'Une élévation simple d’un châssis de deck cassette, avec deux vumètres et un emplacement d’écran, marquée 186SD.',
      caption: 'FIG. 05 — LE 186SD, EN TANT QUE VIDEO DECK',
      note: 'ÉTUDE · ÉLÉVATION DE FAÇADE, PAS UNE PHOTO',
      meters: 'VU',
      screen: 'ÉCRAN',
      plate: '186SD',
    },
  },
  end: 'FIN DE LA GENÈSE',
  nextText: 'Le journal de bord reprend les questions que cette page laisse ouvertes.',
  nextCta: 'Ouvrir le journal de bord',
};

export const story = { en: storyEn, fr: storyFr };

export type StoryCopy = typeof storyEn;
