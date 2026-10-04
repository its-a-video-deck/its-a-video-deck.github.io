export const storyFigureIds = ['snow', 'shelf', 'path', 'chassis'] as const;

export type StoryFigureId = (typeof storyFigureIds)[number];

const storyEn = {
  metaTitle: 'Origin — DIY Video Deck',
  metaDescription:
    'Why this video deck exists: physical media, two Sony televisions showing snow, Sade, and the decision to reuse a cassette-deck chassis.',
  back: '← BACK TO THE PROJECT',
  kicker: 'ORIGIN / WHY THIS EXISTS',
  written: 'ACCOUNT WRITTEN 2026.10.04',
  titleLine1: 'The deck Sony',
  titleLine2: 'never made.',
  dek: 'I wanted my old televisions to show a picture again. The picture I wanted first was Sade.',
  sections: [
    {
      heading: 'Owning the thing itself',
      paragraphs: [
        'Lately I have wanted physical media again.',
        'I am not rejecting digital. What it opened up is extraordinary. The other side is that, apart from a phone or a computer, I no longer own the recordings I love.',
        'There used to be a commitment in owning them, and in leaving them visible in the room. Records, CDs, films. The pleasure of searching and of completing a shelf. Even the disappointment when an album is not as good as the previous one by the same artist.',
        'That brought me back to machines I already had, a Walkman and a Discman, and then to buying older hi-fi.',
      ],
    },
    {
      heading: 'A period I still want in the room',
      paragraphs: [
        'I love the look of the late 1970s and the early 1980s. The equipment is elegant, and it is well made. Advertisements from those years treat owning it as a status. The ranges were wide and inventive. A technical step came with a real effort in design. That pairing feels rarer now.',
        'This is still available. The machines turn up second-hand. Putting them back in a living room, and in an ordinary day, is a choice.',
      ],
    },
    {
      heading: 'Snow',
      paragraphs: [
        'Along with the Walkmans, a receiver and cassette decks, I bought a first television: a Sony TV-110 UK. Aluminium, minimal, the style I wanted. Then Sony Watchmans. The first was an FD-210BE, and it is beautiful.',
        'They work. Terrestrial broadcasting has been off for years. The screen is snow.',
        'The idea came from that. I wanted to send my own programmes into these sets, a stream of pictures from their own period, and above all clips of Sade.',
      ],
      figure: 'snow' as const,
    },
    {
      heading: 'Sade',
      paragraphs: [
        'I have loved the music of Sade for as long as I can remember. <em>Diamond Life</em> is a beacon of those years.',
        'What I also love is that the work already exists, in my house, on almost every medium: vinyl, CD, cassette, MiniDisc, a book of sheet music, a concert programme, a postcard. I still do not have the VHS, the Betamax or the LaserDisc. I like that a piece of music could become so many objects.',
        'The elegance fits the rest of the room. My first wish was simple. Play the clips on those screens.',
      ],
      figure: 'shelf' as const,
    },
    {
      heading: 'From a few buttons to a catalogue object',
      paragraphs: [
        'At first I pictured a small DIY block. A few buttons, plugged into the television.',
        'The longer I stayed with it, the more I wanted an object that could have been sold at the time, and that would sit in the hi-fi as if it belonged there.',
        'I thought of building a small deck from scratch. Switches with the right feel are impossible to find. Nothing made today has that mechanical touch. Spare parts taken from old decks cost a fortune.',
        'So I would buy a machine and change it.',
      ],
    },
    {
      heading: 'The selector I did not buy',
      paragraphs: [
        'The Sony SB-500 looked right. It is a tape-recorder selector: four switches on the face, two rotary knobs, a compact case, a simple design.',
        'It is rare. It was sold only in Japan. Second-hand, they go for more than €150.',
        'That is not how I want to build this. I want reuse. I do not want to take apart a machine that other people still treat as valuable, and I did not want to spend the budget there.',
      ],
      figure: 'path' as const,
    },
    {
      heading: 'Two decks, and a seller',
      paragraphs: [
        'I had already bought a Sony 188SD. It looks very good. It needs care: new belts, and a pause key that seems stuck.',
        'I looked for a cheap donor, sold for parts.',
        'On eBay a seller had two decks at auction, a Sony 188SD and a Sony 186SD. Nobody was bidding. The price was at the floor. I bid on the 186SD, because the seller’s 188SD had a broken pause key as well.',
        'We got on. He could not find a buyer for his 188SD. It was last summer, and he would ship once the holidays were over, when we were both back. I asked about that second 188SD. He offered to send it with the 186SD, for the same price. He could not keep them, and he did not want them thrown away. I told him about the project.',
        'Both machines arrived for less than €20.',
      ],
    },
    {
      heading: 'The chassis',
      paragraphs: [
        'The video deck will live in the chassis of the 186SD.',
        'It will still feed the television. It will also have its own screen, and the VU meters that already belong to that face. It is the video deck Sony never made.',
        'There are two 188SD decks in this story. The first is the one I had already bought, in good cosmetic shape, waiting for belts and a pause key. The second is the seller’s parts unit, pause already broken, sent along so it would not be discarded. The 186SD is the one that becomes the video deck.',
      ],
      quote: 'The video deck Sony never made.',
      figure: 'chassis' as const,
    },
    {
      heading: 'What this site is for',
      paragraphs: [
        'I want two things here.',
        'This page is the first: why the project exists, in a voice anyone can follow.',
        'The other is the work. Technical choices, how it gets built, the solutions, the successes and the failures. That account is not written yet. The build log is the place kept for it. What sits there today are intentions, not a finished machine.',
        'I also want to put something back online. AI tools made this a project I can hope to finish. Without them it would probably have stayed the hobby of a lifetime, and one I would probably have dropped. The site is what I give in return. A story, and enough of a trail for someone who wants to try something similar.',
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
      note: 'STUDY · PLACEHOLDER FOR THE REAL SHELF',
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
      note: 'STUDY · NOT A PHOTOGRAPH · THE BUILD IS NOT ON THIS PAGE',
      meters: 'VU',
      screen: 'SCREEN',
      plate: '186SD',
    },
  },
  end: 'END OF ORIGIN',
  nextText: 'The build log is reserved for the making.',
  nextCta: 'Open the build log',
};

const storyFr = {
  metaTitle: 'Origine — DIY Video Deck',
  metaDescription:
    'Pourquoi ce video deck existe : les supports physiques, deux télés Sony sur la neige, Sade, et le choix de réemployer un châssis de deck cassette.',
  back: '← RETOUR AU PROJET',
  kicker: 'ORIGINE / POURQUOI CE PROJET',
  written: 'RÉCIT ÉCRIT LE 2026.10.04',
  titleLine1: 'Le deck que Sony',
  titleLine2: 'n’a jamais fait.',
  dek: 'Je voulais que mes vieilles télés montrent à nouveau une image. La première image que je voulais, c’était Sade.',
  sections: [
    {
      heading: 'Posséder l’objet',
      paragraphs: [
        'Ces derniers temps, l’envie des supports physiques est revenue.',
        'Je ne renie pas le numérique. Ce qu’il a ouvert est exceptionnel. Le revers, c’est qu’à part un téléphone ou un ordinateur, je ne possède plus les enregistrements que j’aime.',
        'Avant, posséder voulait dire les laisser visibles dans la pièce. Disques, CD, films. Le goût de chercher et de compléter une étagère. Même la déception d’un album moins bon que le précédent du même artiste.',
        'De là, je suis revenu à des appareils que j’avais déjà, un Walkman et un Discman, puis à l’achat de hi-fi plus ancienne.',
      ],
    },
    {
      heading: 'Une époque que je veux encore dans la pièce',
      paragraphs: [
        'J’aime l’allure de la fin des années 1970 et du début des années 1980. Les appareils sont élégants, et ils sont bien faits. Les publicités de ces années-là en font un statut. Les gammes étaient larges et inventives. Un pas technique allait avec un vrai effort de design. Cette association me semble plus rare aujourd’hui.',
        'Tout cela reste trouvable. Les appareils passent d’occasion. Leur redonner une place dans un salon, et dans une journée ordinaire, est un choix.',
      ],
    },
    {
      heading: 'La neige',
      paragraphs: [
        'En plus des Walkman, d’un ampli-tuner et de decks cassette, j’ai acheté une première télé : une Sony TV-110 UK. Aluminium, minimaliste, le style que je voulais. Puis des Sony Watchman. Le premier est un FD-210BE, et il est magnifique.',
        'Ils fonctionnent. L’hertzien est coupé depuis des années. L’écran, c’est de la neige.',
        'L’idée vient de là. Je voulais envoyer mes propres programmes dans ces postes, un flux d’images de leur époque, et surtout des clips de Sade.',
      ],
      figure: 'snow' as const,
    },
    {
      heading: 'Sade',
      paragraphs: [
        'J’aime la musique de Sade depuis toujours. <em>Diamond Life</em> est un phare de ces années.',
        'Ce que j’aime aussi, c’est que l’œuvre est déjà là, chez moi, sur presque tous les supports : vinyle, CD, cassette, MiniDisc, un livre de partitions, un programme de concert, une carte postale. Il me manque encore la VHS, la Betamax et le LaserDisc. J’aime qu’une musique ait pu devenir autant d’objets.',
        'L’élégance va avec le reste de la pièce. Mon premier souhait était simple. Passer les clips sur ces écrans.',
      ],
      figure: 'shelf' as const,
    },
    {
      heading: 'De quelques boutons à un objet de catalogue',
      paragraphs: [
        'D’abord, j’imaginais un petit bloc. Quelques boutons, branchés à la télé.',
        'Plus j’y restais, plus je voulais un objet qui aurait pu être vendu à l’époque, et qui prendrait place dans la hi-fi comme s’il en était.',
        'J’ai pensé construire un petit deck depuis zéro. Les interrupteurs qui ont le bon toucher sont introuvables. Plus rien de fabriqué aujourd’hui n’a cette mécanique. Les pièces tirées de vieux decks coûtent une fortune.',
        'Alors j’achèterais un appareil, et je le modifierais.',
      ],
    },
    {
      heading: 'Le sélecteur que je n’ai pas acheté',
      paragraphs: [
        'Le Sony SB-500 semblait juste. C’est un sélecteur de magnétophones : quatre interrupteurs en façade, deux boutons rotatifs, un boîtier compact, une conception simple.',
        'Il est rare. Il n’était vendu qu’au Japon. D’occasion, ils dépassent 150 €.',
        'Ce n’est pas comme ça que je veux construire. Je veux le réemploi. Je ne veux pas démonter un appareil que d’autres tiennent encore pour précieux, et je ne voulais pas mettre le budget là.',
      ],
      figure: 'path' as const,
    },
    {
      heading: 'Deux decks, et un vendeur',
      paragraphs: [
        'J’avais déjà acheté un Sony 188SD. Il est très beau. Il demande de l’entretien : des courroies neuves, et une touche pause qui semble coincée.',
        'Je cherchais un donneur peu cher, vendu pour pièces.',
        'Sur eBay, un vendeur proposait deux decks aux enchères, un Sony 188SD et un Sony 186SD. Personne n’enchérissait. Le prix était au plancher. J’ai enchéri sur le 186SD, parce que le 188SD du vendeur avait lui aussi la touche pause cassée.',
        'On a sympathisé. Il ne trouvait pas preneur pour son 188SD. C’était l’été passé, et il enverrait à la rentrée, au retour de vacances de part et d’autre. J’ai demandé pour ce second 188SD. Il a proposé de l’envoyer avec le 186SD, pour le même prix. Il ne pouvait pas les garder, et il ne voulait pas qu’ils finissent jetés. Je lui ai parlé du projet.',
        'Les deux appareils sont arrivés pour moins de 20 €.',
      ],
    },
    {
      heading: 'Le châssis',
      paragraphs: [
        'Le video deck prendra place dans le châssis du 186SD.',
        'Il alimentera toujours la télé. Il aura aussi son propre écran, et les vumètres qui appartiennent déjà à cette façade. C’est le video deck que Sony n’a jamais fait.',
        'Il y a deux 188SD dans ce récit. Le premier est celui que j’avais déjà acheté, en bon état visuel, en attente de courroies et d’une touche pause. Le second est l’appareil pour pièces du vendeur, pause déjà cassée, joint à l’envoi pour ne pas être jeté. Le 186SD est celui qui devient le video deck.',
      ],
      quote: 'Le video deck que Sony n’a jamais fait.',
      figure: 'chassis' as const,
    },
    {
      heading: 'À quoi sert ce site',
      paragraphs: [
        'Je veux deux choses ici.',
        'Cette page est la première : pourquoi le projet existe, dans une voix que l’on peut suivre sans être électronicien.',
        'L’autre, c’est le travail. Les choix techniques, la façon dont ça se construit, les solutions, les succès et les échecs. Ce récit-là n’est pas écrit. Le journal de bord est la place qui lui est gardée. Ce qui s’y trouve aujourd’hui, ce sont des intentions, pas une machine finie.',
        'Je veux aussi remettre quelque chose en ligne. Les outils d’IA ont fait de ceci un projet que je peux espérer mener au bout. Sans eux, il serait probablement resté le loisir d’une vie, et un loisir que j’aurais probablement lâché. Le site est ce que je rends en échange. Un récit, et assez de traces pour qui voudrait essayer quelque chose de proche.',
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
      note: 'ÉTUDE · MAQUETTE À REMPLACER PAR L’ÉTAGÈRE',
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
      note: 'ÉTUDE · PAS UNE PHOTO · LA RÉALISATION N’EST PAS SUR CETTE PAGE',
      meters: 'VU',
      screen: 'ÉCRAN',
      plate: '186SD',
    },
  },
  end: 'FIN DE L’ORIGINE',
  nextText: 'Le journal de bord est réservé à la fabrication.',
  nextCta: 'Ouvrir le journal de bord',
};

export const story = { en: storyEn, fr: storyFr };

export type StoryCopy = typeof storyEn;
