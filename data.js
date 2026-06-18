// ============================================================
//  DONNEES DE L'ANTRE DU ZAKIUM
// ============================================================

// -------- NOTES (meeples) --------
//  n5 = Coup de coeur  |  n4 = Je plussoie  |  n3 = A suivre
//  n2 = Pourquoi pas   |  n1 = Pas pour moi

// -------- AJOUTER UNE REVIEW --------
//  Les reviews les plus recentes (date) s'affichent en premier.
//
//  Champs d'une review :
//   title      : le nom du jeu
//   tags       : liste de genres entre guillemets
//   paras      : liste de paragraphes (chaque "..." = 1 paragraphe)
//                **gras** et *italique*
//   note       : "n1" a "n5" (voir plus haut)
//   date       : "AAAA-MM-JJ" (ex "2026-06-14")
//   steamAppId : le numero dans l'URL Steam (pour l'image)
//   steamUrl   : le lien complet Steam (ou "" si pas de page)
//   image      : (OPTIONNEL) une URL d'image perso, si l'image Steam
//                ne s'affiche pas bien.

const REVIEWS = [
  {
  title: "The Mound: Omen of Cthulhu",
  tags: ["Coop", "Horreur", "Survie", "Lovecraftien", "Exploration", "1ʳᵉ personne"],
  paras: [
    "J'étais déjà assez hypé en voyant les images du jeu, mais après avoir fait la démo, je suis très très hypé !",
    "C'est un jeu de **coop horreur survie** (un peu à la **Lethal Company**), où on joue un groupe de 4 personnes envoyées sur une île pour tout piller et récupérer les **idoles sacrées corrompues** afin d'en tirer de délicieuses piécettes. MAIS l'île n'est pas d'accord, et plus on reste et plus on fait du bruit, plus elle cherche à nous éliminer.",
    "L'ambiance est, je trouve, extrêmement réussie : les visuels font \"woaw !\" et le **sound design** est super immersif. C'était un réel plaisir de me balader dans les bois, en voyant des buissons bouger dans mon regard périphérique tout en écoutant d'étranges chuchotements dans mes oreilles, comme s'ils m'invitaient à caresser l'étrange idole de la mort qui m'observait ^^",
    "Bref, ça part en prod direct pour moi, il faut juste que je trouve une team prête à affronter l'île :p",
  ],
  note: "n5",
  date: "2026-06-14",
  steamAppId: "2569760",
  steamUrl: "https://store.steampowered.com/app/2569760/The_Mound_Omen_of_Cthulhu/",
  image: ""
},
  {
    title: "How Many Dudes?",
    tags: ["Auto-battler", "Strat\u00e9gie", "Roguelite"],
    paras: [
      "J'en attendais pas grand-chose quand j'ai vu la d\u00e9mo mais c'\u00e9tait tr\u00e8s chouette ! Un auto-battler \u00e0 mi-chemin entre La Brute, Despot's Game et TABS ^^",
      "On d\u00e9marre avec un Dude et au fur et \u00e0 mesure on en rajoute de diff\u00e9rents types avec diff\u00e9rents pouvoirs, on gagne des art\u00e9facts, on fait des combos et on combat des Chevaux qui font la taille de canards ou des rats de la taille de chiens. ^^ \u00c7a marche vraiment bien et le style est simple mais efficace :)",
      "Je recommande pour poser son cerveau dans un coin le temps qu'il s\u00e8che et regarder de la BAGAR ^^",
    ],
    note: "n4",
    date: "2026-06-14",
    steamAppId: "3934270",
    steamUrl: "https://store.steampowered.com/app/3934270/How_Many_Dudes/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3934270/a85f08013d77d40ae22c6ea972d5459de9f03d3e/header.jpg?t=1779982203"
  },
  {
    title: "Chained Beasts",
    tags: ["Action Roguelite", "Coop", "Hack and Slash", "Ar\u00e8ne"],
    paras: [
      "Un roguelite de combat d'ar\u00e8ne solo ou coop jusqu'\u00e0 4 o\u00f9 on incarne des gladiateurs encha\u00een\u00e9s soit \u00e0 ses potes, soit \u00e0 un boulet (pas la m\u00eame chose ^^), soit \u00e0 l'ar\u00e8ne elle-m\u00eame. Le style de combat c'est un peu \"on se bat avec ce qui tra\u00eene\" : les cha\u00eenes, l'environnement, tout est bon pour atomiser les vagues d'ennemis.",
      "J'aime beaucoup la DA, le jeu r\u00e9pond bien, c'est fluide, c'est cool ! GG",
      "Je suis hyp\u00e9 pour la suite !",
    ],
    note: "n5",
    date: "2026-06-11",
    steamAppId: "3569420",
    steamUrl: "https://store.steampowered.com/app/3569420/Chained_Beasts/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3569420/32a1658f8a366e8893d0c51dde709f0f8e1eb42e/header.jpg?t=1781578299"
  },
  {
    title: "Func Key",
    tags: ["Roguelite", "Word Game", "Deckbuilder", "Casual"],
    paras: [
      "Un Balatro-like de Scrabble avec une DA toute mignonne. On joue dans l'univers du journalisme de cliquebait, et le \"deck\" c'est un petit clavier. Des touches passives, des fa\u00e7ons d'am\u00e9liorer ses touches, les syst\u00e8mes restent assez classiques dans le genre.",
      "Le truc complicado c'est que le jeu est uniquement en anglais... D\u00e9j\u00e0 que je gal\u00e8re au Scrabble en VF, le Scrabble en VO c'est un peu trop gal\u00e8re pour moi ^^",
      "Si vous \u00eates \u00e0 l'aise en anglais par contre, why pas ?",
    ],
    note: "n2",
    date: "2026-06-09",
    steamAppId: "4268590",
    steamUrl: "https://store.steampowered.com/app/4268590",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4268590/79481423699669c341b8501506baad9a26cd6d81/header.jpg?t=1781541849"
  },
  {
    title: "Hand of Fate : Hordes",
    tags: ["Survivors-like", "Deckbuilder", "Dark Fantasy"],
    paras: [
      "Je vais pas \u00eatre impartial car c'est une licence ind\u00e9 qui me plait beaucoup ^^",
      "Un survivors-like \u00e0 la Vampire Survivors dans l'univers de Hand of Fate. J'aime beaucoup la DA avec les cartes de tarot et les persos. Sur la map il y a des points de qu\u00eate, et les monstres sont tir\u00e9s r\u00e9guli\u00e8rement par des cartes aussi. Plusieurs personnages, plusieurs armes. Il a l'air tr\u00e8s fonctionnel :)",
      "Bon... il y a quand m\u00eame du recyclage par rapport \u00e0 Hand of Fate 2 (les sons, les cartes de tarot) mais encore une fois je suis pas impartial. Le jeu va me plaire, c'est s\u00fbr ^^",
      "Au passage, je recommande vraiment Hand of Fate 2 si vous connaissez pas !",
    ],
    note: "n4",
    date: "2026-06-07",
    steamAppId: "3075410",
    steamUrl: "https://store.steampowered.com/app/3075410/Hand_of_Fate_Hordes/"
  },
  {
    title: "Beware of the Cartographer !",
    tags: ["Aventure", "Point & Click", "Puzzle", "Humour"],
    paras: [
      "Une excellente surprise ! Je suis all\u00e9 tester la d\u00e9mo juste parce que le th\u00e8me m'intriguait : \u00e9tablir une carte de la r\u00e9gion (au temps des Lumi\u00e8res, entre deux royaumes en guerre).",
      "Et le jeu est trop mignon et dr\u00f4le !! Les personnages qu'on rencontre ont l'air attachants, l'\u00e9criture est sympa, et la m\u00e9canique de cartographie est vraiment originale.",
      "J'ai h\u00e2te de faire le jeu en entier en live, je pense qu'il va \u00eatre super !",
    ],
    note: "n5",
    date: "2026-06-02",
    steamAppId: "3905500",
    steamUrl: "https://store.steampowered.com/app/3905500/Beware_of_the_Cartographer/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3905500/c974da2a327ce872acd0a90a52befc6d0e93f9e2/header.jpg?t=1774874730"
  },
  {
    title: "Into the Fire",
    tags: ["Survival", "Extraction", "Crafting", "Surnaturel"],
    paras: [
      "Une tr\u00e8s bonne surprise ! J'avais demand\u00e9 la playtest il y a longtemps et j'avais compl\u00e8tement oubli\u00e9 ^^",
      "Pour moi c'est un m\u00e9lange int\u00e9ressant entre This War of Mine et Pacific Drive (deux jeux que je recommande au passage).",
      "A la troisi\u00e8me personne on incarne un survivant d'une \u00e9trange \u00e9ruption volcanique. On a un campement de base et il faut faire des sorties pr\u00e8s du volcan pour ramener des ressources et sauver des gens. La run est tim\u00e9e en mode stop ou encore : plus tu restes, plus tu risques d'y rester.",
      "Au camp, les survivants ramen\u00e9s ont besoin d'\u00eatre nourris, font des t\u00e2ches et d\u00e9bloquent des recettes de craft.",
      "Et comme dans Pacific Drive, on r\u00e9alise assez vite qu'il y a des trucs bizarres et que c'est pas une simple \u00e9ruption volcanique. L'univers est intrigant et c'est une belle surprise. Je surveille pour la suite :)",
    ],
    note: "n4",
    date: "2026-05-31",
    steamAppId: "2988030",
    steamUrl: "https://store.steampowered.com/app/2988030/Into_the_Fire/"
  },
  {
    title: "Looking For Fa\u00ebl",
    tags: ["Point & Click", "Puzzle", "Surr\u00e9aliste", "Myst\u00e8re"],
    paras: [
      "Un point and click enqu\u00eate avec un tr\u00e8s bon pitch de d\u00e9but : un message vocal de Fa\u00ebl, ton colocataire : \"gros j'crois que je suis perdu dans l'appartement\". Et on va le chercher ^^",
      "Sauf que l'appart est pas tout \u00e0 fait classique... pi\u00e8ce apr\u00e8s pi\u00e8ce on r\u00e9alise que l'espace se multiplie et se transforme en un labyrinthe de puzzles.",
      "Il a une bonne t\u00eate, je suis intrigu\u00e9. Pourquoi pas :) (et une VF qui fait plaisir <3)",
    ],
    note: "n3",
    date: "2026-05-24",
    steamAppId: "2521170",
    steamUrl: "https://store.steampowered.com/app/2521170/Looking_For_Fael/"
  },
  {
    title: "FuryBall : Rogue Revenge",
    tags: ["Action Roguelite", "Beat'em up", "Difficile", "Dystopique"],
    paras: [
      "Un roguelite nerveux et dynamique autour d'un sport ultra-violent dans la ville dystopique de Neo-Arcadia, domin\u00e9e par des gangs obss\u00e9d\u00e9s par le Furyball. On traverse les quartiers de strat en strat en se bagarrant contre des vagues d'ennemis dans des ar\u00e8nes en mode flipper.",
      "On peut builder sa balle avec des modules aux effets vari\u00e9s (br\u00fblure, saignement, destruction...) pour cr\u00e9er des synergies. Et au fil de nos d\u00e9faites, on d\u00e9bloque et on am\u00e9liore son \u00e9quipement pour les prochains runs.",
      "C'est pas un roguelite chill ^^ pas du tout. Il est assez exigeant, mais l'id\u00e9e est top et la DA est vraiment belle.",
    ],
    note: "n4",
    date: "2026-05-17",
    steamAppId: "2713120",
    steamUrl: "https://store.steampowered.com/app/2713120/Furyball_Rogue_Revenge/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2713120/225e9ad013f84d04995c21b7866413e7c5a2a6d3/header.jpg?t=1781515891"
  },
  {
    title: "Factomancer",
    tags: ["Roguelite", "Gestion", "Automatisation", "Fantasy"],
    paras: [
      "Un roguelite d'optimisation et d'automatisation vue du dessus dans un univers fantasy... mais avec des tapis roulants ! ^^",
      "Chaque jour il faut remplir un quota de thune sinon c'est perdu, mais on n'a pas acc\u00e8s \u00e0 tous les b\u00e2timents tout le temps : il y a un syst\u00e8me de refresh qui co\u00fbte de d\u00e9licieux soussous. Il y a aussi un syst\u00e8me d'artefacts qui vous attribuent des passifs pour le reste de la run.",
      "C'est tr\u00e8s cool et tr\u00e8s chill, m\u00eame s'il n'y a pas de pause pour r\u00e9fl\u00e9chir \u00e0 comment qu'on fait ses tapis et qu'il faut atteindre le quota avant la fin de la journ\u00e9e ^^ donc faut quand m\u00eame pas perdre trop de temps !",
      "Bref il est tout joli, tout bien, je plussoie !",
    ],
    note: "n4",
    date: "2026-05-10",
    steamAppId: "3979570",
    steamUrl: "https://store.steampowered.com/app/3979570/Factomancer/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3979570/23987401e1134a50e4cffd044d68a52a9c6bba6d/header.jpg?t=1781267588"
  },
  {
    title: "DAICE",
    tags: ["Roguelite", "Dice Builder", "SF", "Strat\u00e9gie"],
    paras: [
      "Un dice building roguelite dans un univers SF o\u00f9 on incarne une IA Core aux commandes de vaisseaux spatiaux. Le truc sympa c'est le syst\u00e8me de gestion d'adjacence : bien placer ses d\u00e9s dans ses armes et ses modules pour optimiser ses combos et ses synergies.",
      "J'ai l'impression qu'il y a pas mal de vaisseaux et pas mal de modules, le contenu a l'air pr\u00e9sent :) Il y a apparemment une campagne avec quatre actes mais j'ai pas trop pu voir \u00e7a dans la d\u00e9mo :p",
      "\u00c0 suivre :)",
    ],
    note: "n4",
    date: "2026-05-03",
    steamAppId: "4422430",
    steamUrl: "https://store.steampowered.com/app/4422430/DAICE/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4422430/c757721d78a471975d0b028db7dcd28d0f048b40/header.jpg?t=1778690604"
  },
  {
    title: "Night Lurker",
    tags: ["Fiction Interactive", "Aventure", "Cyberpunk", "Pixel Art"],
    paras: [
      "Une fiction interactive \u00e0 l'ambiance visuelle et sonore magnifique et prenante. On y interpr\u00e8te Meadow, un renard anthropomorphe qui vit dans une ville cyberpunk dystopique, le tout dans un style 2.5D pixel art tr\u00e8s soign\u00e9. On se surprend \u00e0 rester au balcon pour observer la ville et ses lumi\u00e8res \ud83d\udc9c",
      "La d\u00e9mo est courte, mais elle m'a saisie ^^ Une minute avant la fin, j'avais compl\u00e8tement oubli\u00e9 que c'\u00e9tait une, et j'en voulais encore plus !",
      "\u26a0\ufe0f \u00c0 noter : il y a quelques TW sur la page Steam, donc l'histoire finale risque d'\u00eatre assez sombre. Mais la d\u00e9mo reste accessible.",
      "Tous \u00e7a pour dire que : j'ai h\u00e2te de pouvoir suivre cette histoire d'un bout \u00e0 l'autre \ud83e\udd8a",
    ],
    note: "n5",
    date: "2026-04-26",
    steamAppId: "3973720",
    steamUrl: "https://store.steampowered.com/app/3973720/Night_Lurker/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3973720/dea6afd3721814894cd7621a6027e870611782f1/header.jpg?t=1778482176"
  },
  {
    title: "Coin Shark",
    tags: ["Roguelite", "Balatro-like"],
    paras: [
      "Dans la cat\u00e9gorie des \"on prend tout et on le roguelitise\" : le roguelite de pile ou face. M\u00eame concept que Balatro, il faut vaincre des scores de plus en plus grands. L'id\u00e9e est de build les faces d'une pi\u00e8ce et de la lancer pour faire des points et des combos.",
      "CEPENDAAAAANT !!",
      "Il est tr\u00e8s facile de choisir sur quelle face va tomber la pi\u00e8ce ! C'est dommage, c'est quand m\u00eame le truc qu'il faut pas. La pi\u00e8ce est lanc\u00e9e avec un mouvement de souris et de la physique, mais c'est extr\u00eamement facile de tomber sur la face qu'on veut...",
      "C'est une d\u00e9mo, il va s\u00fbrement \u00e9voluer, et ce n'est que mon avis \u00e0 moi, mais l\u00e0 en l'\u00e9tat je trouve que \u00e7a ne marche pas du tout.",
    ],
    note: "n1",
    date: "2026-04-19",
    steamAppId: "3188730",
    steamUrl: "https://store.steampowered.com/app/3188730/Coin_Shark/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3188730/660879c3460ced9a303feb1848eb5a0d12b2bef6/header.jpg?t=1764817617"
  },
  {
    title: "Far Far West",
    tags: ["FPS", "Coop", "Action"],
    paras: [
      "Un jeu coop \u00e0 la premi\u00e8re personne o\u00f9 on joue des robots cowboys pan pan yyyhaaa ! Le jeu est clairement un cousin d'Abyssus : tu pars avec ton \u00e9quipement, tu fais tes missions et t'as des cadeaux ! Yeah !",
      "J'ai trouv\u00e9 le jeu tr\u00e8s efficace et dynamique, avec une bonne ambiance et une DA qui rappelle un peu SoT (\u00e0 cause des squelettes :p). Et les musiques sont TROP BIEN !! Quand l'epic banjo d\u00e9barque dans mes oreilles alors que j'essaie de tuer un Saloon fant\u00f4me volant, je suis \u00e0 fond !",
      "C'est un grand oui pour moi !",
    ],
    note: "n5",
    date: "2026-04-12",
    steamAppId: "3124540",
    steamUrl: "https://store.steampowered.com/app/3124540/Far_Far_West/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3124540/2d55092d45b1784dcc7cb0ba6ad3f919e62eb5d0/header.jpg?t=1780491814"
  },
  {
    title: "DiceVaders",
    tags: ["Roguelite", "Dice Builder"],
    paras: [
      "Un jeu de type Balatro o\u00f9 le but c'est de faire combotter son plateau pour faire de plus en plus de score. Mais avec des d\u00e9s :) On joue les vilains envahisseurs, comme si on jouait de l'autre c\u00f4t\u00e9 de StarVaders (super deckbuilder par ailleurs) ^^",
      "On a des envahisseurs plac\u00e9s sur diff\u00e9rentes colonnes, on fait des combos avec nos d\u00e9s, les art\u00e9facts, les envahisseurs. On fait du score et on avance ^^ Plusieurs personnages de d\u00e9part et d\u00e9j\u00e0 un contenu correct sur ce playtest.",
      "Je plussoie et je surveille \u00e7a de pr\u00e8s :p",
    ],
    note: "n4",
    date: "2026-04-12",
    steamAppId: "3917700",
    steamUrl: "https://store.steampowered.com/app/3917700/DiceVaders/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3917700/718f619e3a60cfd7c907952a33def25199732ef6/header.jpg?t=1781546464"
  },
  {
    title: "Neuron Activation",
    tags: ["Arcade", "Pr\u00e9cision"],
    paras: [
      "Un jeu de combo et de pr\u00e9cision \u00e0 la souris, dans un style tr\u00e8s \u00e9pur\u00e9. Il faut activer des boutons, des trucs qui tournent et qui font bip et flash avec rapidit\u00e9 et pr\u00e9cision pour faire monter notre combo.",
      "Il y a aussi des phases de questionnaires, comme si c'\u00e9tait pos\u00e9 par une IA ou une corpo cherchant \u00e0 recueillir des donn\u00e9es de test : petite ambiance un peu Portal-esque sur \u00e7a ?",
      "C'est pas vraiment mon style mais il \u00e9tait sympa, j'aurais pu y retourner un peu.",
    ],
    note: "n2",
    date: "2026-04-12",
    steamAppId: "3978110",
    steamUrl: "https://store.steampowered.com/app/3978110/Neuron_Activation/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3978110/bf9187926c6d1f91a6e706fd074446e0296bc5ba/header.jpg?t=1777819668"
  },
  {
    title: "Everything is Crab",
    tags: ["Survivors-like", "Action"],
    paras: [
      "Un Vampire Survivor-like o\u00f9 on est un blob trop mignon qui \u00e9volue en mangeant des fruits et d'autres bestioles ! C'est un peu comme si le jeu \u00e9tait focus sur la premi\u00e8re phase de SPORE ^^ (si vous ne connaissez pas SPORE, foncez).",
      "Il n'y a pas 500 actions \u00e0 faire mais \u00e7a fait la diff\u00e9rence : on a trois comp\u00e9tences actives, et les \u00e9volutions changent notre personnage et c'est tout choupi ! Il faut manger vite et bien car il va y avoir trois boss qui vont d\u00e9barquer pour nous grailler la tronche.",
      "C'\u00e9tait un playtest et c'\u00e9tait TROP COOL, j'adore, je trouve \u00e7a plut\u00f4t coolos :)",
    ],
    note: "n5",
    date: "2026-04-12",
    steamAppId: "3526710",
    steamUrl: "https://store.steampowered.com/app/3526710/"
  },
  {
    title: "Handmancers",
    tags: ["Roguelite", "Deckbuilder"],
    paras: [
      "Un RogueLite Deckbuilder bas\u00e9 sur Pierre-Feuille-Ciseaux... Sur le papier (\"papier\" vous avez compris ? LOL) on a vraiment l'impression que c'est foireux, que c'est une mauvaise id\u00e9e. Mais je trouve le jeu vraiment super et tr\u00e8s beau ! (m\u00eame s'il y a des \u00e9l\u00e9mentaires de nudit\u00e9 ^^)",
      "4 personnages de d\u00e9part avec une affinit\u00e9 par \u00e9l\u00e9ment : pierre, feuille, ciseaux et ??? De la m\u00e9ta-progression pour s'aider sur les futurs runs. Le contenu a l'air pr\u00e9sent ^^",
      "Sinon le reste est assez standard : carte de progression, am\u00e9liorations de cartes, artefacts passifs.",
      "Je plussoie fort !",
    ],
    note: "n5",
    date: "2026-04-12",
    steamAppId: "2423290",
    steamUrl: "https://store.steampowered.com/app/2423290/Handmancers/"
  },
  {
    title: "Deathless. The Hero Quest",
    tags: ["Deckbuilder", "Roguelite", "Fantasy"],
    paras: [
      "Un **deck builder** plut\u00f4t classique mais **tr\u00e8s tr\u00e8s beau**, tout anim\u00e9, fluide et les tours ne sont pas rallong\u00e9s par les animations, parfait ! L'univers se d\u00e9roule dans un monde fantasy nourri d'un **folklore slave** (si je ne dis pas trop de b\u00eatises) avec un bestiaire \u00e0 la **The Witcher**.",
      "Il a l'air tr\u00e8s classique sous bien des aspects mais j'ai l'impression qu'il cherche plus \u00e0 se rapprocher d'un **Knock on the Coffin Lid** que d'un **Slay the Spire** classique. Car il y a 4 h\u00e9ro\u00efnes et h\u00e9ros \u00e0 jouer avec pour chacun.e une suite de qu\u00eate propre \u00e0 accomplir.",
      "Je le garde dans un coin en attendant une promo :p",
    ],
    note: "n3",
    date: "2026-01-15",
    steamAppId: "2727210",
    steamUrl: "https://store.steampowered.com/app/2727210/Deathless_The_Hero_Quest/"
  },
  {
    title: "The Fortress",
    tags: ["Dungeon Crawler", "D\u00e9s", "Roguelite"],
    paras: [
      "Un **Dungeon Crawler** avec un style tr\u00e8s r\u00e9tro qui se joue avec des **d\u00e9s**. On incarne un aventurier/prisonnier qui doit s'\u00e9chapper de la forteresse.",
      "J'ai un peu de mal avec l'esth\u00e9tique du jeu : c'est pas vraiment pixelis\u00e9 mais c'est un peu **bouilli** et pas tr\u00e8s clair. Les \u00e9l\u00e9ments du jeu n'\u00e9taient pas tr\u00e8s clairs pour moi non plus et au final, je trouve qu'on n'a **pas assez d'action** sur le gameplay, on est trop d\u00e9pendant de la **chance** sans vraiment pouvoir agir.",
      "En gros, j'ai pas accroch\u00e9 ^^",
    ],
    note: "n1",
    date: "2026-01-15",
    steamAppId: "3459150",
    steamUrl: "https://store.steampowered.com/app/3459150/The_Fortress/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3459150/047a8bd7f2cac785ffdbd52b5a1c7f8cbf2aa989/header.jpg?t=1772012953"
  },
  {
    title: "Wasteland Bites",
    tags: ["Horreur", "Gestion", "Cuisine"],
    paras: [
      "Un jeu d'**horreur (soft)** et de **gestion de cuisine** et de stress ^^. Il faut servir des clients mutants des wastelands tout en g\u00e9rant les chiens qui aboient, les casseurs fluo et le **Ma\u00efs transg\u00e9nique Timide** qui augmente notre jauge de stress !^^",
      "Je n'y ai pas jou\u00e9 moi-m\u00eame mais \u00e7a se rapproche un peu du style de **FNAF** (Five Nights at Freddy's) : chaque nuit il y a de nouveaux monstres avec de nouvelles r\u00e8gles.",
      "Le jeu est assez sympathique, j'ai un peu de mal avec l'esth\u00e9tique **ultra pix\u00e9lis\u00e9e** mais \u00e7a va.",
    ],
    note: "n3",
    date: "2026-01-15",
    steamAppId: "3748640",
    steamUrl: "https://store.steampowered.com/app/3748640/Wasteland_Bites/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3748640/7790a3e490eb9069f320d0d346ae6f687a76e590/header.jpg?t=1780691088"
  },
  {
    title: "The Horde Wants You Dead",
    tags: ["Survivors-like", "Action"],
    paras: [
      "Un **Vampire Survivor-like** qui n'a pas pris pour moi. La run n'\u00e9tait pas tr\u00e8s palpitante et il fallait survivre 30 min ! J'avoue m'\u00eatre un peu laiss\u00e9 d\u00e9c\u00e9der... ^^ Et le bruit de la mitraillette non-stop pendant tout ce temps, bon... ^^ Voil\u00e0.",
      "Le style visuel est sympathique (**stickman 3D**) et le jeu est fonctionnel. C'est une d\u00e9mo, \u00e7a va s\u00fbrement \u00e9voluer mais pour le moment il ne prend pas sur moi.",
    ],
    note: "n2",
    date: "2026-01-13",
    steamAppId: "3552820",
    steamUrl: "https://store.steampowered.com/app/3552820/The_Horde_Wants_You_Dead/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3552820/f679ba0e8040cef057725458b27bbc40ca0212b6/header.jpg?t=1765737164"
  },
  {
    title: "Bits & Bops",
    tags: ["Rythme", "Arcade"],
    paras: [
      "Un petit **jeu de rythme** tout mignon et anim\u00e9. La review va \u00eatre tr\u00e8s courte, y a pas grand-chose \u00e0 dire \u00e0 part \u00e7a... ^^",
      "Il lui manque peut-\u00eatre un peu de liant entre les tableaux musicaux pour moi, mais il n'a peut-\u00eatre pas cette vocation et peut faire un peu **WarioWare-like** :)",
      "Voilou !",
    ],
    note: "n3",
    date: "2026-01-13",
    steamAppId: "1929290",
    steamUrl: "https://store.steampowered.com/app/1929290/Bits__Bops/"
  },
  {
    title: "Forestrike",
    tags: ["Roguelike", "Action 2D", "Bagar"],
    paras: [
      "Un **roguelike action combat en 2D** avec des choix parmi trois et une id\u00e9e assez originale : pouvoir faire les **combats dans son imagination** autant de fois qu'on le souhaite avant le vrai combat, pour anticiper les actions des ennemis.",
      "Le sc\u00e9nar a l'air un peu **nanar rigolo** et ce n'est pas pour me d\u00e9plaire \ud83d\ude04 Y a des vieux ma\u00eetres sensei tortue s\u00e9niles, des vilains bandits alcoolis\u00e9s et des m\u00e9chants qui applaudissent de mani\u00e8re cynique quand on d\u00e9zingue leurs troupes.",
      "Parfait ! ^^",
    ],
    note: "n5",
    date: "2026-01-13",
    steamAppId: "2325920",
    steamUrl: "https://store.steampowered.com/app/2325920/Forestrike/"
  },
  {
    title: "Phantom Brigade",
    tags: ["Tactique tour par tour", "Expert", "M\u00e9chas"],
    paras: [
      "Un jeu **tactique tour par tour** et un peu **programmation** qui m'a l'air tr\u00e8s tr\u00e8s chouette. Il y a beaucoup de donn\u00e9es et de trucs assez pr\u00e9cis : faut pas avoir peur des chiffres et du tuto, mais il a l'air tr\u00e8s complet.",
      "Le jeu se joue par **sections de 5 secondes** : on voit ce que vont faire les ennemis et on programme les actions de ses m\u00e9chas en r\u00e9action, jusqu'\u00e0 la victoire ou la d\u00e9faite. Le tout sur un fond de sc\u00e9nario de missions et de r\u00e9sistance.",
      "Prot\u00e9ger les civils, looter des bras et des jambes, et pimper son m\u00e9cha ! ^^",
    ],
    note: "n4",
    date: "2026-01-12",
    steamAppId: "553540",
    steamUrl: "https://store.steampowered.com/app/553540/Phantom_Brigade/"
  },
  {
    title: "Pawful Dice",
    tags: ["Roguelite", "Dice Builder"],
    paras: [
      "Un super **dice builder** tr\u00e8s mignon, avec une **tr\u00e8s belle DA**. Une progression classique sur une carte \u00e0 la **Slay the Spire**, mais il est beau, fluide et tr\u00e8s agr\u00e9able \u00e0 jouer je trouve.",
      "Je ne sais pas trop s'il a beaucoup de contenu mais j'ai ador\u00e9 les quelques runs que j'ai faits :) je ne m'attendais \u00e0 rien et je fus agr\u00e9ablement surpris :)",
      "Je plussoie fort \ud83d\udc4d (hors live)",
    ],
    note: "n5",
    date: "2026-01-09",
    steamAppId: "4072320",
    steamUrl: "https://store.steampowered.com/app/4072320/Pawful_Dice/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4072320/d8f077ecb0213dfc15bca1598b6181a47faa55fa/header.jpg?t=1780477456"
  },
  {
    title: "Extinction Day",
    tags: ["Simulation", "Strat\u00e9gie"],
    paras: [
      "Un **simulateur de fin du monde**, avec catastrophes naturelles, humains, guerres, m\u00e9t\u00e9ores et tout le tintouin. C'est clairement un enfant de **Plague Inc**. En temps r\u00e9el pausable. Avec les moments bizarres o\u00f9 on se r\u00e9jouit de l'efficacit\u00e9 d'un m\u00e9t\u00e9ore ou d'une \u00e9pid\u00e9mie... ^^",
      "Il y a apparemment pas mal de contenu avec une **m\u00e9ta-progression roguelitisante**.",
      "Simple mais efficace, j'\u00e9tais content de retrouver la vibe Plague Inc :)",
    ],
    note: "n4",
    date: "2026-01-09",
    steamAppId: "2682380",
    steamUrl: "https://store.steampowered.com/app/2682380/Extinction_Day/"
  },
  {
    title: "Arm Around!",
    tags: ["Simulation", "Physique", "Party Game"],
    paras: [
      "C'est un simulateur de **bras coup\u00e9** ! ... oui oui ^^",
      "Plus s\u00e9rieusement, c'est un **\"jeu \u00e0 streamereuses\"** bas\u00e9 sur la **physique** et fait pour rendre un peu fou. On a des missions \u00e0 accomplir un peu comme dans **Untitled Goose Game**, mais avec la maniabilit\u00e9 d'un bras coup\u00e9. :p",
      "C'est pas un jeu pour moi, maaiiiis je pense qu'il peut \u00eatre fun pour les personnes concern\u00e9es. (pas ceux qui ont un bras en moins mais les streamereuses, et les streamereuses qui ont un bras en moins aussi)",
    ],
    note: "n2",
    date: "2026-01-09",
    steamAppId: "3072400",
    steamUrl: "https://store.steampowered.com/app/3072400/Arm_Around/"
  },
  {
    title: "The Secret of Weepstone",
    tags: ["Aventure", "RPG", "Dungeon Crawler"],
    paras: [
      "Un bel hommage aux RPG papier des ann\u00e9es 80 et aux illustrations des **\"Livres dont vous \u00eates le h\u00e9ros\"**, tout en **noir et blanc 3D dessin\u00e9**.",
      "On explore le donjon en temps r\u00e9el, mais les combats se jouent au **tour par tour** avec de vrais jets de d\u00e9s (D20, D6...), c'est vraiment le syst\u00e8me de **D&D**. Il est tr\u00e8s beau et la trame m'int\u00e9resse : une team de **clochards locaux** envoy\u00e9e dans un ch\u00e2teau maudit pour sauver le seigneur des lieux.",
      "Je retournerai peut-\u00eatre dessus si **l'anglais** ne me fait pas trop peur... (c'est un peu verbeux !) :p",
    ],
    note: "n3",
    date: "2026-01-09",
    steamAppId: "3702100",
    steamUrl: "https://store.steampowered.com/app/3702100/The_Secret_of_Weepstone/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3702100/3e8cc9d1732fbb9fdd56515778cda01c24b7d8cf/header.jpg?t=1779906240"
  },
  {
    title: "Gamblers Table",
    tags: ["Jeu incr\u00e9mental", "Idle Game"],
    paras: [
      "Un petit **jeu incr\u00e9mental** tout mignon avec des petits bonhommes qui retournent des pi\u00e8ces. Le principe est simple : on fait des sous pour acheter des am\u00e9liorations et plus de bonhommes, pour faire encore plus de sous... et ainsi de suite ! C'est un peu une exp\u00e9rience **ASMR PICSOU** : on peut le laisser tourner dans un coin, poser son cerveau \u00e0 c\u00f4t\u00e9 et juste \u00eatre content d'avoir des soussous.",
      "Je plussoie !",
    ],
    note: "n4",
    date: "2026-01-09",
    steamAppId: "3618390",
    steamUrl: "https://store.steampowered.com/app/3618390/Gamblers_Table/",
    image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3618390/d8e287275db1e5b13dc9a73c2abdcac9b267d9d2/header.jpg?t=1780261485"
  },
  {
    title: "Wanderburg",
    tags: ["Survivors-like", "Action", "M\u00e9di\u00e9val"],
    paras: [
      "Un **vampire survivor like** mais avec des forteresses sur des grosses roues qui pourchassent des moulins \u00e0 roulettes ! parfait",
      "Pas grand chose de plus en fait, c'est vraiment un reskin de Vampire Survivor maiiiis la DA est trop chouette, et il faut piloter sa forteresse ce qui peut demander un peu plus d'apprentissage ^^",
      "**Vroum vroum les chateaux !!**",
    ],
    note: "n4",
    date: "2026-01-08",
    steamAppId: "3624140",
    steamUrl: "https://store.steampowered.com/app/3624140/Wanderburg/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3624140/a0a68815aac3899476a7365a04771e731008a406/header.jpg?t=1776354662"
  },
  {
    title: "Fire at Campsite",
    tags: ["Roguelite", "Tower Defense", "Chill"],
    paras: [
      "Un petit **roguelike**/**\"tower defense\"**/chill o\u00f9 on fait encore plus rien que sur vampire survivor ^^ oui c'est possible !! ^^",
      "Il est mignon, le pitch a l'air sympathique, il faut faire des **choix parmis 3** r\u00e9guli\u00e8rement, mais entre \u00e7a c'est de l'auto battler.",
      "J'ai pas grand chose \u00e0 dire de plus, la d\u00e9mo est tr\u00e8s courte ^^",
    ],
    note: "n3",
    date: "2026-01-08",
    steamAppId: "3651490",
    steamUrl: "https://store.steampowered.com/app/3651490/Fire_at_Campsite/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3651490/dba141906c34c9cac923de174b3212efb6426978/header.jpg?t=1762365256"
  },
  {
    title: "Nova Roma",
    tags: ["City Builder", "Gestion", "Antiquit\u00e9"],
    paras: [
      "Un petit **city builder** avec une bonne bouille romanisante.",
      "Il n'a pas l'air particuli\u00e8rement original, mais il a une bonne t\u00eate et c'est parfois juste ce qu'on cherche sur un city builder :)",
      "Un truc qui rappelle un peu d'anciens city builders, c'est qu'on peut construire des temples et les assigner \u00e0 certaines divinit\u00e9s pour avoir des cadeaux et des qu\u00eates ^^",
    ],
    note: "n3",
    date: "2026-01-07",
    steamAppId: "2426560",
    steamUrl: "https://store.steampowered.com/app/2426530/Nova_Roma/",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2426530/177af7f4e08879242a9b1e06cd37375139c05b65/header.jpg?t=1779785962"
  },
  {
    title: "Silly Polly Beast",
    tags: ["Horreur", "Action", "Vue du dessus"],
    paras: [
      "jeu d'**horreur action** vu du dessus et de cot\u00e9 de temps en temps ^^ \u00e7a se d\u00e9roule dans un univers sombre avec des \u00e9gouts qui ne m\u00e8nent nullement sur des crocodiles ou des tortues amatrices de pizza mais plut\u00f4t sur des limbes mal\u00e9fiques !",
      "c'est pas forcement tr\u00e8s proches des univers qui m'attirent d'habitude mais pourquoi pas, la narration est bien (avec des interactions d\u00e9rangeantes) et la vue du dessus fait que l'horreur n'est pas brutal dans la face ! ^^",
    ],
    note: "n3",
    date: "2025-11-24",
    steamAppId: "1598780",
    steamUrl: "https://store.steampowered.com/app/1598780/Silly_Polly_Beast/"
  },
  {
    title: "Truckful",
    tags: ["Conduite", "Physique", "Vue du dessus"],
    paras: [
      "Un jeu de voiture mignon vu du dessus, avec gestion de la physique pour livrer des colis :)",
      "Mais manifestement il y a des trucs chelou qui trainent dans les bois la nuit !! la d\u00e9mo \u00e9tait tr\u00e8s courte mais \u00e7a ma intrigu\u00e9 ! ^^",
    ],
    note: "n3",
    date: "2025-11-24",
    steamAppId: "3090810",
    steamUrl: "https://store.steampowered.com/app/3090810/Truckful/"
  },
  {
    title: "Project THEA",
    tags: ["RPG", "Tour par tour", "Gestion", "Deckbuilder"],
    paras: [
      "dure \u00e0 d\u00e9crire ^^ un **RPG au tour par tour** sur une grande carte, avec manifestement un syst\u00e8me de gestion d'un refuge ou d'une capitale qui d\u00e9pend de nos exp\u00e9dition dans le myst\u00e9rieux monde ext\u00e9rieur. On cr\u00e9e notre \u00e9quipe et notre deck pour g\u00e9rer les combats.",
      "Dans un univers post apocalyptique qui \u00e0 l'air de faire suite \u00e0 leur pr\u00e9c\u00e9dent jeu **Thea: The Awakening** et \u00e7a me donne tr\u00e8s envie de d\u00e9couvrir leur univers original !",
      "Moi le jeu me hype fort, mais attention il est velu ! beaucoup d'info et de truc \u00e0 g\u00e9rer ! faut pas avoir peur d'un tuto un peu long ^^",
    ],
    note: "n4",
    date: "2025-11-24",
    steamAppId: "3360890",
    steamUrl: "https://store.steampowered.com/app/3360890/Project_Thea/"
  },
  {
    title: "The Devil's Due",
    tags: ["Roguelike", "Poker", "Cartes"],
    paras: [
      "**Roguelike de Poker**. pourtant sur la m\u00eame vague que les roguelike de blackjack ou autre, celui m'a moins convaincu. je trouve qu'on a pas beaucoup de contr\u00f4le sur le hasard du jeu de carte, et j'ai eu pas mal de monstre qui en plus se soigne ou se regen. donc c'\u00e9tait un peu long.",
      "Mais le jeu a un design tr\u00e8s cool, dessin anim\u00e9, et aussi un peu un look d\u00e9rangeant \u00e0 la **death of the reprobate** ^^ c'est cool",
    ],
    note: "n2",
    date: "2025-11-24",
    steamAppId: "3699850",
    steamUrl: "https://store.steampowered.com/app/3699850/The_Devils_Due/",
    image:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3699850/cb83990ef1a4ffd7e360d2b00a3d5fe7b39f0227/header.jpg?t=1771843874"
  },
  {
    title: "Rune Dice",
    tags: ["Plateforme", "Metroidvania", "Puzzle"],
    paras: [
      "Petit jeu de **plateforme/metroidvania** tout p\u00e9pouze ^^ pas de bagar ! pas de combat. Des petites qu\u00eates et du plateforme puzzle pour trouver les diff\u00e9rents objets et pouvoir.",
      "Une histoire de laboratoire et de myst\u00e8re \u00e0 l'air de se d\u00e9velopper en fond. Et s'est tout dessin\u00e9 \u00e0 la main et les bruitages \u00e0 la bouche me fond beaucoup rire ^^",
      "Il joue aussi sur un aspect de randomisation des tableaux, je ne sais pas trop ce que \u00e7a peut donner mais pourquoi pas ^^ et y a des culottes de f\u00eate \u00e0 mettre sur la t\u00eate",
    ],
    note: "n3",
    date: "2025-11-24",
    steamAppId: "2835650",
    steamUrl: "https://store.steampowered.com/app/2835650/Randomice/"
  }
];


// ============================================================
//  ZONE CREATIONS
// ============================================================
// Colle l'ID de la video YouTube (la partie apres watch?v=)
// Exemple : pour https://youtube.com/watch?v=dQw4w9WgXcQ
//           l'ID est : dQw4w9WgXcQ
// Tu peux en mettre autant que tu veux, les plus recentes en haut.

const MUSIQUES = [
  // { youtubeId: "xxxxxxxxxxx", titre: "Nom de la musique" },
  { youtubeId: "HkPJyMUt85k", titre: "Code Lyoko - Franck Keller & Ygal Amar (medieval Cover/Bardcore)" },
  { youtubeId: "h8BDFyRMzEk", titre: "All Star -Smash Mouth (medieval Cover/Bardcore)" },
  { youtubeId: "kw72uggazfo", titre: "Elevator Operator - Electric CallBoy (medieval Cover/Bardcore)" },
];

const VIDEOS = [
  // { youtubeId: "xxxxxxxxxxx", titre: "Nom de la video" },
  { youtubeId: "0tThEfAM7Jw", titre: "Floril\u00e8ge du Zakium : S\u00e9minaire COGIP sur PEAK" },
  { youtubeId: "fozyvTItLZ0", titre: "Floril\u00e8ge du Zakium - Miracles D\u00e9mocratiques & Logements libres -Juillet 2025" },
];


// ============================================================
//  FRAGMENTS TWITCH (clips aleatoires)
// ============================================================
// Le bouton "Apercevoir un fragment de Zakium" en haut du site
// ouvre un de ces clips au hasard.
//
// Pour ajouter un clip : va sur ton clip Twitch, clique "Partager",
// copie le lien. Il ressemble a :
//   https://clips.twitch.tv/NomDuClipIci
// ou https://www.twitch.tv/zakium/clip/NomDuClipIci
// Tu peux coller le lien COMPLET ou juste le slug, les deux marchent.

const CLIPS = [
  "https://www.twitch.tv/zakium/clip/YummyTrustworthyMangetoutPunchTrees-UFfZcZ5_rnFJv0dM",
  "https://www.twitch.tv/zakium/clip/AnimatedProudJackalWutFace-b9YOVOG0Qg87HXLk",
  "https://www.twitch.tv/zakium/clip/HeadstrongKitschyYakPartyTime-zDbwuPxfbiLhneFF",
  "https://www.twitch.tv/zakium/clip/EncouragingEnergeticPineappleSmoocherZ-2I4VfMjobjH26BOj",
  "https://www.twitch.tv/zakium/clip/FrozenEphemeralChipmunkPRChase-XFZ60cvqSljyDqiC",
  "https://www.twitch.tv/zakium/clip/DifficultHonestPigTBTacoRight-OnE4SPZDN-I9LIw5",
  "https://www.twitch.tv/zakium/clip/SpunkyPerfectEggnogHeyGirl-jjsRqsoezIhXPgSP",
  "https://www.twitch.tv/zakium/clip/ViscousSpikySangTakeNRG-LZGBpUvFYqXAZ3uP",
  "https://www.twitch.tv/zakium/clip/ShyTawdrySrirachaPicoMause-T4O45VYH-lB1_pih",
  "https://www.twitch.tv/zakium/clip/SuspiciousDoubtfulPigSoonerLater-3Q5Kfdl__cD21XAS",
  "https://www.twitch.tv/zakium/clip/ArbitrarySuccessfulOkapiTriHard-4tQgrma7hYsElYkk",
  "https://www.twitch.tv/zakium/clip/AdorableDirtyWatercressGingerPower-VmE4gKizEu5WmEUY",
  "https://www.twitch.tv/zakium/clip/SpunkyModernGuanacoYee-r0MdGc4jRUrkKk7D",
  "https://www.twitch.tv/zakium/clip/AgitatedThoughtfulGoatVoHiYo-yeMseoXYvELidjEo",
  "https://www.twitch.tv/zakium/clip/ArtisticEnjoyablePeachCoolStoryBro-zHrhKtaxtQtwnVC8",
  "https://www.twitch.tv/zakium/clip/AcceptableDependablePieBlargNaut-pgrSB7PH-cOxrGI7",
  "https://www.twitch.tv/zakium/clip/RenownedNurturingStarFailFish-OrbIp3shQ5yfDdyZ",
  "https://www.twitch.tv/zakium/clip/BashfulLongSamosaFloof-fxIouMEDafUsalYo",
];


// ============================================================
//  ENCARTS DU HAUT (autour du titre)
// ============================================================

// -------- TA MINI-BIO (encart de gauche) --------
// Quelques lignes de presentation. Tu peux mettre **gras** et *italique*.
const BIO = {
  texte: "Streameur, com\u00e9dien et compositeur. J'essaie de faire des trucs et parfois ça marche alors je suis content :) ",
  twitchUrl: "https://twitch.tv/zakium"
};

// -------- COUP DE COEUR DU MOMENT (encart de droite) --------
// Mets le TITRE EXACT d'une review existante (copie-colle depuis la liste plus haut).
// Le site retrouve tout seul son image, ses tags, etc.
// Laisse "" pour ne rien afficher.
const COUP_DE_COEUR = "The Mound: Omen of Cthulhu";


// ============================================================
//  JEUX & CREATIONS DE COPAINES (section dediee)
// ============================================================
// Pour mettre en avant le travail de tes ami.e.s.
//  nom       : le nom du jeu ou de la creation
//  auteur    : le nom de la copaine
//  desc      : une petite phrase de description
//  lien      : l'URL (Steam, itch.io, YouTube, portfolio...)
//  image     : (OPTIONNEL) une URL d'image pour illustrer
const COPAINES = [
  // {
  //   nom: "Nom du jeu",
  //   auteur: "Nom de la copaine",
  //   desc: "Une petite phrase sympa pour donner envie.",
  //   lien: "https://...",
  //   image: ""
  // },
  {
  nom: "DLC Gears and Goblins ! (SpellCaster University)",
  auteur: "Sneaky Yak Studio (dont moi :p )",
  desc: "Wishlistez le DLC pour le soutine ! 🙏 Il sort le 26 septembre !",
  lien: "https://store.steampowered.com/app/3350300/Spellcaster_University__Gears_and_Gobelins/",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3350300/header.jpg?t=1765314654"
  },
  {
  nom: "Night Lurker",
  auteur: "Notch",
  desc: "Wishlistez Night Lurker pour le soutine ! 🙏:purple_heart:",
  lien: "https://store.steampowered.com/app/3973720/Night_Lurker/",
  image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3973720/dea6afd3721814894cd7621a6027e870611782f1/header.jpg?t=1778482176"
  },
  {
  nom: "TCC : Twitch Collectible Cards",
  auteur: "Toopixel_",
  desc: "Un système de carte a collectionner personnalisable pour streameur·euses",
  lien: "https://tcc.too-pixel.com/",
  image: "https://tcc.too-pixel.com/assets/images/logo.png"
  },
];
