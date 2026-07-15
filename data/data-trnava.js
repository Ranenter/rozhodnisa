// ══ DATA: TRNAVA ══
window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor Trnavy ──
window.VAA_DATA.candidates['trnava_primator'] = [
  {
    id: "nemcovska",
    name: "Eva Nemčovská",
    party: "Nezávislá / Lepšia Trnava",
    color: "#4caf50",
    url: "https://evanemcovska.sk/"
  },
  {
    id: "baros",
    name: "Branislav Baroš",
    party: "Trnava pre každého / KDH",
    color: "#2196F3",
    url: "https://trnavaprekazdeho.sk/brano-baros-trnava/"
  },
  {
    id: "horvathova",
    name: "Ľubica Horváthová",
    party: "Demokrati",
    color: "#fbc02d",
    url: "https://lubicahorvathova.sk/"
  },
  {
    id: "cajkova",
    name: "Andrea Čajková",
    party: "Trnava+",
    color: "#e91e63",
    url: "https://www.trnavaplus.sk/andrea-cajkova"
  }
];

// ── Kandidáti: Župan / VÚC Trnavský kraj ──
// POZN: Viskupič, Berényi, Lančarič – postoje sú ODHADNUTÉ (verified:false pre data.json)
window.VAA_DATA.candidates['trnava_vuc'] = [
  {
    id: "viskupic",
    name: "Jozef Viskupič",
    party: "PS / Demokrati / Hnutie Slovensko / SaS / KDH / Maďarské fórum / OKS (úradujúci predseda)",
    color: "#64b5f6",
    url: "https://trnavskyzupan.sk"
  },
  {
    id: "lancaric",
    name: "Matej Lančarič",
    party: "Nezávislý – Za lepší Trnavský kraj",
    color: "#455A64",
    url: "https://matejlancaric.sk"
  },
  {
    id: "berenyi",
    name: "József Berényi",
    party: "Maďarská aliancia",
    color: "#1A6B8A",
    url: "https://madarska-aliancia.sk/jozsef-berenyi"
  }
];

// ── Otázky: Primátor Trnavy ──
window.VAA_DATA.questions.trnava_primator = [
  {
    t: "Smerovanie mesta",
    q: "Má Trnava pokračovať v smere nastavenom počas éry Petra Bročku?",
    w: "Mesto uvádza pripravované projekty v hodnote viac než 80 miliónov eur. Voľby preto rozhodnú aj o tom, či má nové vedenie pokračovať v doterajšom investičnom smere, alebo má priority mesta výraznejšie zmeniť.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "disagree",
      cajkova: "neutral"
    }
  },
  {
    t: "Bývanie",
    q: "Má Trnava stavať mestské nájomné byty aj za cenu zadlženia?",
    w: "Trnava má viac než 62 700 obyvateľov a bývanie je pre mnohé mladé rodiny drahé. Mestské nájomné byty by mohli pomôcť ľuďom zostať v meste, ale znamenali by úver alebo presun peňazí z iných projektov.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Má Trnava pokračovať v regulovanom platenom parkovaní vo väčšine mesta?",
    w: "Trnava má platené parkovanie rozdelené do 5 pásiem s rôznymi pravidlami a sadzbami. Proti súčasnej parkovacej politike vznikla petícia s viac než 19 000 podpismi, čo ukazuje, že ide o jednu z najspornejších tém v meste.",
    a: {
      nemcovska: "agree",
      baros: "neutral",
      horvathova: "disagree",
      cajkova: "neutral"
    }
  },
  {
    t: "Pešia zóna",
    q: "Má sa Štefánikova ulica zmeniť na pešiu zónu?",
    w: "Mesto pripravuje obnovu Štefánikovej ulice ako súčasť rozširovania pešieho charakteru historického centra. Projekt by zlepšil verejný priestor, ale zároveň by obmedzil prejazd áut, parkovanie a prístup pre časť prevádzok.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Študentské bývanie",
    q: "Má mesto financovať nové študentské bývanie aj za cenu menších investícií do športovísk?",
    w: "Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Dostupnejšie študentské bývanie môže pomôcť univerzitám aj mestskému životu, ale mestský rozpočet by potom mal menej peňazí na športoviská, ihriská a voľnočasovú infraštruktúru využívanú širšou verejnosťou.",
    a: {
      nemcovska: "disagree",
      baros: "neutral",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava",
    q: "Má Trnava ďalej budovať cyklotrasy aj na úkor áut a parkovania?",
    w: "Mesto uvádza cieľ vybudovať ucelenú sieť cyklotrás v rozsahu takmer 120 kilometrov. Cyklotrasy zlepšujú dopravu na bicykli, ale v uliciach často súťažia o priestor s parkovaním, autami a jazdnými pruhmi.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Participácia",
    q: "Má mať mestská časť právo zastaviť veľký projekt, ak sa proti nemu postaví väčšina obyvateľov?",
    w: "Veľké projekty môžu ovplyvniť dopravu, zeleň, parkovanie alebo charakter celej mestskej časti. Právo miestnej väčšiny projekt zastaviť by posilnilo rozhodovanie obyvateľov, ale mohlo by predĺžiť prípravu investícií a umožniť menšej časti mesta blokovať projekt dôležitý pre celú Trnavu.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Majú mať rezidenti parkovanie vo svojej zóne zadarmo?",
    w: "Trnava má viac než 62 700 obyvateľov s trvalým pobytom. Rezidentské parkovanie sa týka veľkej časti domácností, najmä v hustejších zónach. Bezplatné parkovanie by pomohlo rezidentom, ale znížilo by príjmy mesta.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "agree",
      cajkova: "neutral"
    }
  },
  {
    t: "Školy",
    q: "Majú mať školy a škôlky prednosť pred veľkými projektmi v centre?",
    w: "Mesto Trnava zriaďuje 9 základných škôl a rieši aj spádové oblasti materských škôl. Investície do škôl a škôlok sa týkajú každodenného života rodín, ale súťažia o peniaze s obnovou ulíc, parkov a verejných priestorov.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Verejné priestory",
    q: "Má Trnava pokračovať vo veľkých obnovách parkov, námestí a ulíc?",
    w: "Mesto uvádza pripravované projekty za viac než 80 miliónov eur. Veľké obnovy môžu zlepšiť kvalitu života a vzhľad mesta, ale časť obyvateľov môže uprednostniť menšie opravy chodníkov, ciest, škôl alebo sídlisk.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava",
    q: "Má mesto uprednostniť plynulosť áut pred cyklotrasami a pešími zónami?",
    w: "Niektoré dopravné riešenia pomáhajú autám, iné chodcom, cyklistom alebo kvalite verejného priestoru. Pri projektoch za desiatky miliónov eur je dôležité určiť, čo má mať prednosť, keď nie je možné vyhovieť všetkým.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "neutral",
      cajkova: "disagree"
    }
  },
  {
    t: "Kultúra",
    q: "Má mať kultúra garantovaných minimálne 2 % mestského rozpočtu?",
    w: "Pevná minimálna hranica by kultúrnym inštitúciám a podujatiam umožnila plánovať niekoľko rokov dopredu. Pri rozpočte mesta okolo 114 miliónov eur by 2 % predstavovali približne 2,3 milióna eur ročne, ktoré by nemohli byť použité na školy, cesty, sociálne služby alebo iné aktuálne priority.",
    a: {
      nemcovska: "agree",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Má mesto zvýhodniť parkovanie pre návštevy rezidentov a malé prevádzky?",
    w: "Parkovacia politika ovplyvňuje aj rodinné návštevy, remeselníkov, služby a malé podniky v centre. Keďže platené parkovanie funguje vo viacerých pásmach, aj malé zmeny pravidiel môžu mať veľký dopad na dostupnosť centra.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "agree",
      cajkova: "neutral"
    }
  },
  {
    t: "Zeleň",
    q: "Majú pri rekonštrukciách ulíc pribúdať stromy aj na úkor parkovania?",
    w: "Mesto každoročne vysádza nové stromy, no výsadbu často limitujú siete, doprava a šírka ulíc. Viac stromov a tieňa pomáha počas horúčav, ale v úzkych uliciach môže znamenať menej parkovacích miest.",
    a: {
      nemcovska: "neutral",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Priemysel a bývanie",
    q: "Má Trnava obmedziť priemysel, ak zhoršuje život v obytných častiach?",
    w: "Stellantis je jeden z najväčších zamestnávateľov v meste a priemysel prináša pracovné miesta aj príjmy. Zároveň však zvyšuje dopravu, tlak na bývanie a zaťaženie okrajových častí mesta.",
    a: {
      nemcovska: "neutral",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Kontrola investícií",
    q: "Má zastupiteľstvo schvaľovať každé navýšenie ceny veľkého projektu nad 10 %?",
    w: "Pri veľkých mestských projektoch môžu dodatky a nepredvídané práce zvýšiť konečnú cenu. Povinné nové schválenie zastupiteľstvom pri navýšení nad 10 % by posilnilo verejnú kontrolu, ale mohlo by spomaliť práce a zvýšiť riziko ďalších nákladov pri čakaní na rozhodnutie.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Má ísť väčšina výnosov z parkovania späť do dopravy a parkovania?",
    w: "Parkovanie prináša mestu miliónové príjmy. Peniaze môžu ísť na parkovacie kapacity, MHD, bezpečnejšie ulice alebo iné mestské výdavky. Otázka je, či majú byť viazané hlavne na dopravné riešenia.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "agree",
      cajkova: "neutral"
    }
  },
  {
    t: "Bývanie",
    q: "Má mesto obmedziť krátkodobé prenájmy bytov v obytných domoch?",
    w: "Trnava je turistické a univerzitné mesto. Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Krátkodobé prenájmy môžu pomôcť turizmu, ale môžu znižovať počet bytov na bežné bývanie.",
    a: {
      nemcovska: "neutral",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Nočný život",
    q: "Má mesto viac podporovať večerný život v centre?",
    w: "Región Trnava zaznamenal za prvých sedem mesiacov roka viac než 37 800 návštevníkov a viac než 80 000 prenocovaní. Živé centrum môže pomôcť podnikom, kultúre a turizmu, ale môže priniesť viac hluku pre obyvateľov centra.",
    a: {
      nemcovska: "agree",
      baros: "agree",
      horvathova: "neutral",
      cajkova: "neutral"
    }
  },
  {
    t: "Sídliská vs. centrum",
    q: "Má ísť viac investícií zo centra do sídlisk a okrajových častí?",
    w: "Trnava pripravuje projekty za viac než 80 miliónov eur. Časť obyvateľov očakáva veľké mestské projekty v centre, iní chcú viac peňazí na vnútrobloky, chodníky, ihriská a každodenné problémy na sídliskách.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava",
    q: "Má Trnava ďalej budovať vyvýšené priechody a spomaľovacie prvky?",
    w: "Vyvýšené priechody, prahy a upravené križovatky môžu zvýšiť bezpečnosť chodcov. Niektorí vodiči ich však vnímajú ako zhoršenie plynulosti jazdy, vyšší hluk a vyššiu spotrebu.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava a zamestnávatelia",
    q: "Majú veľkí zamestnávatelia prispievať na dopravné riešenia v meste?",
    w: "Automobilka Stellantis Slovakia sídli priamo v Trnave na Automobilovej ulici. Podľa dostupných údajov vytvára približne 3 700 priamych pracovných miest a ďalšie pracovné miesta u dodávateľov. Dochádzanie zamestnancov ovplyvňuje dopravu v meste.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Transparentnosť",
    q: "Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou?",
    w: "Trnava pripravuje projekty v hodnote viac než 80 miliónov eur. Pri takýchto investíciách môže byť dôležitá nielen najnižšia cena, ale aj životnosť, servisné náklady a kvalita. Vyššia kvalita však môže znamenať vyššie počiatočné výdavky.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Mestský majetok",
    q: "Má mesto zverejňovať jasné pravidlá nájmov mestských priestorov?",
    w: "Mestské priestory môžu slúžiť podnikaniu, službám, kultúre alebo verejnoprospešným aktivitám. Pri rozpočte mesta okolo 114 miliónov eur je dôležité, aby bolo jasné, ako sa mestský majetok využíva a za akých podmienok sa prenajíma.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Komunikácia",
    q: "Má mesto robiť pravidelné stretnutia v každej časti Trnavy?",
    w: "Trnava má viac než 62 700 obyvateľov a viacero častí s rozdielnymi problémami. Pravidelné stretnutia by mohli zlepšiť komunikáciu s obyvateľmi, ale znamenali by viac času, administratívy a verejných záväzkov.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  }
];

// ── Otázky: Župan / VÚC Trnavský kraj ──
// POZOR: postoje Viskupič/Lančarič/Berényi sú ODHADY (verified:false).
// Sada bola 14. 7. 2026 prepísaná na pozičné otázky podľa METODIKA-polarizacia.md
// (gate: 21/25 rozdeľujúcich, 0 jednomyseľných, 4 bez disagree).
// Pred publikovaním overiť dotazníkom u kandidátov.
window.VAA_DATA.questions.trnava_vuc = [
  {
    t: "Smerovanie kraja",
    q: "Má kraj pokračovať v rozbehnutom investičnom smere (zdravotnícke centrá, nová župná knižnica, cyklotrasy) namiesto toho, aby priority prestavil na cesty, mosty a školy?",
    w: "Rozpočet kraja na rok 2026 má príjmy aj výdavky 320 miliónov eur, z toho 84 miliónov eur tvoria kapitálové výdavky. Kraj ich smeruje najmä do zdravotníckych a sociálnych zariadení, novej knižnice v Galante a cyklotrás. Kritici tvrdia, že prednosť majú mať opravy ciest, mostov a stredných škôl. Voľby rozhodnú aj o tom, či sa doterajší smer udrží, alebo sa priority výrazne prestavia.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "disagree" }
  },
  {
    t: "Obchvaty",
    q: "Má kraj platiť z vlastného rozpočtu projektovú prípravu a výkup pozemkov pre obchvaty, ktoré má stavať štát?",
    w: "Obchvaty a cesty I. triedy patria štátu, ich príprava však roky viazne — napríklad pri Trnave. Kraj môže z vlastných peňazí zaplatiť projektovú dokumentáciu a výkup pozemkov, aby sa stavba pohla dopredu. Znamená to však, že kraj platí za úlohu štátu a menej mu zostane na cesty II. a III. triedy, ktoré sám vlastní.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "neutral" }
  },
  {
    t: "Zdravotnícky kampus",
    q: "Má kraj dokončiť zdravotnícky kampus v Trnave, aj keď sa tým odložia zdravotnícke centrá a ambulancie v okresoch?",
    w: "Kraj pripravuje zdravotnícky kampus v Trnave a súčasne nové zdravotnícke centrum v Hlohovci. Kapitálové výdavky rozpočtu 2026 sú 84 miliónov eur a nedajú sa minúť dvakrát. Otázka je, či má prednosť veľký projekt v krajskom meste, alebo rozdrobenie peňazí do menších okresov, kde chýbajú lekári.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "disagree" }
  },
  {
    t: "Veterné parky",
    q: "Má kraj podporiť veterné parky v štátom vytypovaných akceleračných zónach, ak s tým dotknuté obce súhlasia?",
    w: "Ministerstvo hospodárstva vytypovalo osem akceleračných zón pre veternú energiu, štyri z nich ležia v Trnavskom kraji: Prietržka – Sobotište, Gbely – Štefanov, Vrakúň – Dolný Štál a Okoč – Zemianska Olča. Vedenie kraja kritizovalo spôsob ich určenia a poukázalo na možný zásah do zdroja pitnej vody a chránených území. Zástancovia hovoria o čistej elektrine, energetickej bezpečnosti a príjmoch pre obce, odporcovia o zásahu do krajiny a tlaku na obyvateľov.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "disagree" }
  },
  {
    t: "Sieť stredných škôl",
    q: "Má kraj rušiť odbory a triedy s dlhodobo nízkym záujmom, aj keď to zúži ponuku vzdelávania v menších mestách?",
    w: "Kraj je zriaďovateľom 44 stredných škôl, do ktorých chodí viac než 16-tisíc študentov. Počet žiakov klesá, prevádzka poloprázdnych tried však beží ďalej a berie peniaze z rovnakého balíka ako opravy školských budov a internátov. Zúženie siete znižuje náklady, ale v menších mestách obmedzuje výber školy blízko domova.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree" }
  },
  {
    t: "Záchytné parkoviská",
    q: "Má kraj z vlastných peňazí stavať a prevádzkovať bezplatné záchytné parkoviská v Trnave a okresných mestách?",
    w: "V kampani zaznel sľub tisícky nových bezplatných parkovacích miest v Trnave a stoviek v každom okresnom meste. Záchytné parkoviská pomáhajú dochádzajúcim prestúpiť na vlak či autobus, ich výstavba a prevádzka by však išla z krajského rozpočtu — hoci pozemky a parkovaciu politiku majú v rukách mestá.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "neutral" }
  },
  {
    t: "Žitný ostrov",
    q: "Má kraj v územnom pláne zablokovať nové priemyselné a logistické areály nad Žitným ostrovom, aj keď obce prídu o dane a pracovné miesta?",
    w: "Žitný ostrov je najväčšou zásobárňou podzemnej pitnej vody na Slovensku a leží celý v Trnavskom kraji. Záväzná časť územného plánu VÚC je nástroj, ktorým môže kraj takúto výstavbu obmedziť. Obce v okrese Dunajská Streda však o priemyselné zóny stoja pre dane a pracovné miesta.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree" }
  },
  {
    t: "Doprava pre študentov",
    q: "Má kraj zaviesť bezplatné prímestské autobusy pre študentov stredných škôl?",
    w: "Kraj objednáva prímestskú autobusovú dopravu a v rozpočte 2026 na ňu vyčlenil 28,3 milióna eur. Bezplatné cestovanie pre stredoškolákov by odbremenilo rodiny a podporilo dochádzanie do župných škôl, znamenalo by však ďalšie milióny eur ročne navyše — pri vyrovnanom rozpočte na úkor niečoho iného.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "disagree" }
  },
  {
    t: "Tlmočnícke služby",
    q: "Má kraj zvýšiť platby za tlmočnícke služby pre nepočujúcich, aj keď už dnes financuje najväčší rozsah zo všetkých krajov?",
    w: "Kraj si v roku 2025 objednal viac než 14-tisíc hodín tlmočenia pre nepočujúcich, čo je najviac spomedzi všetkých krajov; 87 % z toho zabezpečuje asociácia TASPO. Tá koncom roka 2025 protestovala proti výške financovania, kraj odpovedal, že platí najväčší rozsah v najvyššej sadzbe a ponúkol rokovanie. Otázka je, či má kraj pridať ďalšie peniaze, alebo trvať na súčasnom rozsahu.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "agree" }
  },
  {
    t: "Letisko Piešťany",
    q: "Má kraj naďalej dotovať Letisko Piešťany a investovať doň krajské peniaze?",
    w: "Kraj je najväčším akcionárom Letiska Piešťany, ktoré má za sebou roky strát a v minulosti mu hrozila likvidácia. V rozpočte na rok 2026 kraj počíta aj s výstavbou integrovaného parkoviska pri letisku. Zástancovia hovoria o regionálnom rozvoji a cestovnom ruchu, odporcovia o dotovaní prevádzky, ktorú využíva zlomok obyvateľov.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "neutral" }
  },
  {
    t: "Okresné nemocnice",
    q: "Má kraj prevziať a dofinancovať okresnú nemocnicu, ak by jej prevádzkovateľ obmedzil akútnu starostlivosť?",
    w: "Nemocnice v Dunajskej Strede, Galante, Skalici, Senici či Piešťanoch neprevádzkuje kraj, ale štát alebo súkromní prevádzkovatelia. Pre obyvateľov južných a záhorských okresov je dostupnosť nemocnice otázkou času dojazdu. Prevzatie nemocnice by kraju prinieslo trvalý náklad v desiatkach miliónov eur — a zodpovednosť, ktorú dnes nemá.",
    a: { viskupic: "neutral", lancaric: "disagree", berenyi: "agree" }
  },
  {
    t: "Cyklotrasy",
    q: "Má kraj pokračovať v investíciách do cyklomagistrály a cyklotrás, aj keď tie isté peniaze chýbajú na opravy ciest III. triedy?",
    w: "Kraj stavia úsek Vážskej cyklomagistrály Siladice – Šulekovo a pokračuje v projekte Danube Bike. Do cestnej siete a cyklodopravy má v roku 2026 ísť spolu takmer 30,5 milióna eur. Cyklotrasy pomáhajú dochádzaniu aj turizmu, časť voličov ich však považuje za menej naliehavé než rozbité cesty tretej triedy.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree" }
  },
  {
    t: "Skládka v Seredi",
    q: "Má kraj cez svoj územný plán zablokovať nové odpadové a priemyselné prevádzky v okolí Serede a Dolnej Stredy, kým sa nezačne sanácia skládky lúženca?",
    w: "Po Niklovej hute Sereď (výroba 1963 – 1994) zostala medzi Sereďou a Dolnou Stredou skládka lúženca — približne 6 miliónov ton odpadu s ťažkými kovmi, miestami vysoká desiatky metrov. Sanácia je vecou štátu a súkromného vlastníka a roky sa nepohla; obyvatelia žiadali riešenie aj petíciou. Kraj skládku sanovať nemôže, má však v rukách záväznú časť územného plánu — môže v okolí obmedziť ďalšie odpadové a priemyselné prevádzky, čím by však zablokoval aj investície a pracovné miesta.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "disagree" }
  },
  {
    t: "Jazyk menšín",
    q: "Majú župné školy, sociálne zariadenia a úrad kraja povinne poskytovať služby a dokumenty aj v maďarčine v okresoch s maďarskou menšinou?",
    w: "V okresoch Dunajská Streda a Galanta žije početná maďarská menšina a kraj je zriaďovateľom tamojších stredných škôl, domovov sociálnych služieb aj kultúrnych inštitúcií. Povinná dvojjazyčnosť by uľahčila prístup k službám, znamenala by však náklady na preklady, tlmočenie a personál — a časť voličov ju vníma ako zbytočnú alebo politickú tému.",
    a: { viskupic: "neutral", lancaric: "disagree", berenyi: "agree" }
  },
  {
    t: "Daň z vozidiel",
    q: "Má kraj znížiť daň z motorových vozidiel pre dopravcov a firmy, aj keď tým príde o príjmy na opravy ciest?",
    w: "Daň z motorových vozidiel je vlastnou daňou samosprávneho kraja a jej sadzby schvaľuje krajské zastupiteľstvo. Nižšia daň by pomohla dopravcom a firmám v regióne, ktorý je silne priemyselný a logistický. Kraj má však v roku 2026 na opravy ciest a mostov 31 miliónov eur a výpadok príjmu by musel niečím nahradiť.",
    a: { viskupic: "disagree", lancaric: "neutral", berenyi: "agree" }
  },
  {
    t: "Jadro v Bohuniciach",
    q: "Má sa kraj postaviť za výstavbu nového jadrového bloku v Jaslovských Bohuniciach?",
    w: "Areál atómových elektrární v Jaslovských Bohuniciach leží v Trnavskom kraji. Vláda pripravuje výstavbu nového bloku s výkonom nad 1000 MW a odhadovanými nákladmi okolo 15 miliárd eur. Zástancovia hovoria o energetickej bezpečnosti a pracovných miestach v regióne, odporcovia o cene, jadrovom odpade a dopade na podzemné vody.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "agree" }
  },
  {
    t: "Stratové spoje",
    q: "Má kraj zrušiť trvalo prázdne autobusové spoje a peniaze presunúť na posilnenie vyťažených liniek?",
    w: "Kraj objednáva prímestskú autobusovú dopravu za 28,3 milióna eur ročne. Časť spojov vozí denne len jednotky cestujúcich, inde autobusy v špičke nestíhajú. Zrušenie prázdnych spojov uvoľní peniaze, ale obce, ktoré o ne prídu, zostanú bez spojenia.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "neutral" }
  },
  {
    t: "Školské športoviská",
    q: "Má kraj otvoriť športoviská pri stredných školách verejnosti a platiť ich prevádzku aj mimo vyučovania?",
    w: "Kraj vlastní telocvične a ihriská pri 44 stredných školách, ktoré sú popoludní a cez víkendy väčšinou zatvorené. Otvorenie verejnosti by dalo deťom a komunitám priestor na šport bez novej výstavby, znamenalo by však náklady na správcov, energie a údržbu a zodpovednosť za škody.",
    a: { viskupic: "agree", lancaric: "agree", berenyi: "neutral" }
  },
  {
    t: "Dochádzanie do Bratislavy",
    q: "Má kraj prednostne platiť za integráciu s bratislavským dopravným systémom (jeden lístok na vlak, autobus a MHD v Bratislave), aj keď to znamená menej peňazí na spoje vnútri kraja?",
    w: "Veľká časť kraja dochádza za prácou a školou do Bratislavy. Systém, ktorý to pokrýva, je bratislavský (IDS BK) — objednáva ho štát, Bratislavský kraj a mesto Bratislava — a už dnes doň patria napríklad Kúty, Sládkovičovo, Pusté Úľany či Galanta. Rozšírenie na celý Trnavský kraj by dochádzajúcim dalo jeden lístok na vlak, prímestský autobus aj MHD, kraj by však musel prispievať do systému, ktorý neriadi, a menej by zostalo na spojenia medzi okresmi.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree" }
  },
  {
    t: "Úver a dlh",
    q: "Má kraj zobrať ďalší úver na zrýchlenie opráv mostov a škôl, keď je jeho zadlženosť už okolo 30 %?",
    w: "Zadlženosť kraja sa ku koncu roka 2025 očakávala na úrovni 29,8 %. Schodok kapitálového rozpočtu 2026 je krytý aj úverovými zdrojmi a peňažnými fondmi. Ďalší úver by zrýchlil opravy mostov, škôl a sociálnych zariadení, ale zúžil by priestor rozpočtu v ďalších rokoch.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree" }
  },
  {
    t: "Dotácie a granty",
    q: "Má kraj zrušiť dotačné schémy a participatívny rozpočet a tieto peniaze presunúť na cesty a mosty?",
    w: "Kraj rozdeľuje peniaze cez dotačné schémy pre obce, kultúru a šport a cez participatívny rozpočet Tvoríme kraj, o ktorom hlasujú obyvatelia. Tieto výdavky sú v obciach viditeľné, tvoria však zlomok rozpočtu popri 31 miliónoch eur na cesty a mosty. Otázka je, či ich v úsporných časoch škrtnúť, alebo brániť.",
    a: { viskupic: "disagree", lancaric: "disagree", berenyi: "agree" }
  },
  {
    t: "Trnava verzus okresy",
    q: "Má kraj rozdeľovať investície do ciest a škôl podľa počtu obyvateľov okresov, aj keď to spomalí veľké projekty v krajskom meste?",
    w: "Kraj tvorí sedem okresov: Trnava, Dunajská Streda, Galanta, Hlohovec, Piešťany, Senica a Skalica. Veľké projekty v Trnave môžu slúžiť celému regiónu, ale ich financovanie odsúva opravy ciest a škôl inde. Pevný kľúč podľa počtu obyvateľov by rozdelenie spravil predvídateľným, zároveň by však znemožnil sústrediť peniaze na jednu veľkú investíciu.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "agree" }
  },
  {
    t: "Investičný portál",
    q: "Má kraj zverejniť verejný portál so všetkými projektmi — rozpočtami, termínmi, dodatkami a meškaniami?",
    w: "Kraj investuje desiatky miliónov eur ročne do ciest, škôl, sociálnych zariadení a kultúry. Verejný prehľad by uľahčil kontrolu a porovnávanie projektov, zároveň by však zvýšil tlak na úrad a dodávateľov pri každom meškaní či zmene ceny.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "agree" }
  },
  {
    t: "Vedenie župných organizácií",
    q: "Majú sa riaditelia župných škôl, sociálnych zariadení a kultúrnych inštitúcií vyberať výlučne otvoreným výberovým konaním s verejným vypočutím, bez straníckych nominácií?",
    w: "Kraj obsadzuje vedenie desiatok stredných škôl, domovov sociálnych služieb, galérií, knižníc a krajských podnikov. Otvorené výberové konania s verejným vypočutím by obmedzili politické nominácie, znížili by však možnosť župana rýchlo vymeniť ľudí, ktorí neplnia výsledky.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "neutral" }
  },
  {
    t: "Vzťah k vláde",
    q: "Má župan verejne konfrontovať vládu, keď jej rozhodnutia poškodzujú kraj — aj keď hrozí, že kraj príde o štátne peniaze?",
    w: "Kraj závisí od podielových daní a od štátnych rozhodnutí v doprave, školstve, zdravotníctve aj energetike. Ostrý verejný spor môže obhájiť záujmy kraja, ale aj skomplikovať prístup k dotáciám a spoluprácu na spoločných projektoch. Otázka je, či má župan tlačiť verejne, alebo vyjednávať potichu.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "neutral" }
  }
];
