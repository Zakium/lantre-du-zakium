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
    note: "n4",
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
    note: "n3",
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
      "(quand je d\u00e9rush pour faire le best-of je rattrape les d\u00e9mos du pass\u00e9 ^^)",
      "Dans la cat\u00e9gorie des \"on prend tout et on le roguelitise\" : le roguelite de pile ou face. M\u00eame concept que Balatro, il faut vaincre des scores de plus en plus grands. L'id\u00e9e est de build les faces d'une pi\u00e8ce et de la lancer pour faire des points et des combos.",
      "CEPENDAAAAANT !!",
      "Il est tr\u00e8s facile de choisir sur quelle face va tomber la pi\u00e8ce ! C'est dommage, c'est quand m\u00eame le truc qu'il faut pas. La pi\u00e8ce est lanc\u00e9e avec un mouvement de souris et de la physique, mais c'est extr\u00eamement facile de tomber sur la face qu'on veut...",
      "C'est une d\u00e9mo, il va s\u00fbrement \u00e9voluer, et ce n'est que mon avis \u00e0 moi, mais l\u00e0 en l'\u00e9tat je trouve que \u00e7a ne marche pas du tout.",
    ],
    note: "n1",
    date: "2026-04-19",
    steamAppId: "3188730",
    steamUrl: "https://store.steampowered.com/app/3188730/Coin_Shark/"
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
    steamUrl: "https://store.steampowered.com/app/3124540/Far_Far_West/"
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
    steamUrl: "https://store.steampowered.com/app/3917700/DiceVaders/"
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
    steamUrl: "https://store.steampowered.com/app/3978110/Neuron_Activation/"
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
];

const VIDEOS = [
  // { youtubeId: "xxxxxxxxxxx", titre: "Nom de la video" },
  { youtubeId: "0tThEfAM7Jw", titre: "Florilège du Zakium : Séminaire COGIP sur PEAK" },
  { youtubeId: "fozyvTItLZ0", titre: "Florilège du Zakium - Miracles Démocratiques & Logements libres -Juillet 2025" },
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
// Colle SEULEMENT la derniere partie (le "slug" du clip) ci-dessous.
//
// Exemple : pour https://clips.twitch.tv/SpicyCrunchyApcDeIlluminati
//           le slug est : SpicyCrunchyApcDeIlluminati

const CLIPS = [
  // "SpicyCrunchyApcDeIlluminati",
  // "AnotherClipSlugHere",
];
