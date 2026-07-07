// ══ DATA: TRNAVA ══
window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['trnava_primator'] = [
  {id:'nemcovska', name:'Eva Nemčovská',  party:'Nezávislá / Lepšia Trnava', color:'#4caf50', url:'https://evanemcovska.sk/'},
  {id:'baros',     name:'Branislav Baroš', party:'Trnava pre každého / KDH',                                  color:'#2196F3', url:'https://trnavaprekazdeho.sk/brano-baros-trnava/'},
  {id:'horvathova',name:'Ľubica Horváthová',party:'Demokrati',                                                 color:'#fbc02d', url:'https://lubicahorvathova.sk/'},
  {id:'cajkova',   name:'Andrea Čajková',  party:'Trnava+',                                                     color:'#e91e63', url:'https://www.trnavaplus.sk/andrea-cajkova'}
];

// ── Otázky: Primátor Trnavy ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.trnava_primator = [
  {
    t:'Parkovanie',
    q:'Má Trnava pokračovať v regulovanom platenom parkovaní vo väčšine mesta?',
    w:'Trnava má platené parkovanie rozdelené do 5 pásiem s rôznymi pravidlami a sadzbami. Proti súčasnej parkovacej politike vznikla petícia s viac než 19 000 podpismi, čo ukazuje, že ide o jednu z najspornejších tém v meste.',
    a:{nemcovska:'agree', baros:'neutral', horvathova:'disagree', cajkova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má ísť väčšina výnosov z parkovania späť do dopravy a parkovania?',
    w:'Parkovanie prináša mestu miliónové príjmy. Peniaze môžu ísť na parkovacie kapacity, MHD, bezpečnejšie ulice alebo iné mestské výdavky. Otázka je, či majú byť viazané hlavne na dopravné riešenia.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Majú mať rezidenti parkovanie vo svojej zóne zadarmo?',
    w:'Trnava má viac než 62 700 obyvateľov s trvalým pobytom. Rezidentské parkovanie sa týka veľkej časti domácností, najmä v hustejších zónach. Bezplatné parkovanie by pomohlo rezidentom, ale znížilo by príjmy mesta.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto zvýhodniť parkovanie pre návštevy rezidentov a malé prevádzky?',
    w:'Parkovacia politika ovplyvňuje aj rodinné návštevy, remeselníkov, služby a malé podniky v centre. Keďže platené parkovanie funguje vo viacerých pásmach, aj malé zmeny pravidiel môžu mať veľký dopad na dostupnosť centra.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'neutral'}
  },
  {
    t:'Pešia zóna',
    q:'Má sa Štefánikova ulica zmeniť na pešiu zónu?',
    w:'Mesto pripravuje obnovu Štefánikovej ulice ako súčasť rozširovania pešieho charakteru historického centra. Projekt by zlepšil verejný priestor, ale zároveň by obmedzil prejazd áut, parkovanie a prístup pre časť prevádzok.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Smerovanie mesta',
    q:'Má Trnava pokračovať v smere nastavenom počas éry Petra Bročku?',
    w:'Mesto uvádza pripravované projekty v hodnote viac než 80 miliónov eur. Voľby preto rozhodnú aj o tom, či má nové vedenie pokračovať v doterajšom investičnom smere, alebo má priority mesta výraznejšie zmeniť.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'disagree', cajkova:'neutral'}
  },
  {
    t:'Mestský majetok',
    q:'Má mesto zverejňovať jasné pravidlá nájmov mestských priestorov?',
    w:'Mestské priestory môžu slúžiť podnikaniu, službám, kultúre alebo verejnoprospešným aktivitám. Pri rozpočte mesta okolo 114 miliónov eur je dôležité, aby bolo jasné, ako sa mestský majetok využíva a za akých podmienok sa prenajíma.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má Trnava stavať mestské nájomné byty aj za cenu zadlženia?',
    w:'Trnava má viac než 62 700 obyvateľov a bývanie je pre mnohé mladé rodiny drahé. Mestské nájomné byty by mohli pomôcť ľuďom zostať v meste, ale znamenali by úver alebo presun peňazí z iných projektov.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má mesto obmedziť krátkodobé prenájmy bytov v obytných domoch?',
    w:'Trnava je turistické a univerzitné mesto. Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Krátkodobé prenájmy môžu pomôcť turizmu, ale môžu znižovať počet bytov na bežné bývanie.',
    a:{nemcovska:'neutral', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Doprava',
    q:'Má Trnava ďalej budovať cyklotrasy aj na úkor áut a parkovania?',
    w:'Mesto uvádza cieľ vybudovať ucelenú sieť cyklotrás v rozsahu takmer 120 kilometrov. Cyklotrasy zlepšujú dopravu na bicykli, ale v uliciach často súťažia o priestor s parkovaním, autami a jazdnými pruhmi.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Doprava',
    q:'Má mesto uprednostniť plynulosť áut pred cyklotrasami a pešími zónami?',
    w:'Niektoré dopravné riešenia pomáhajú autám, iné chodcom, cyklistom alebo kvalite verejného priestoru. Pri projektoch za desiatky miliónov eur je dôležité určiť, čo má mať prednosť, keď nie je možné vyhovieť všetkým.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'neutral', cajkova:'disagree'}
  },
  {
    t:'Doprava',
    q:'Má Trnava ďalej budovať vyvýšené priechody a spomaľovacie prvky?',
    w:'Vyvýšené priechody, prahy a upravené križovatky môžu zvýšiť bezpečnosť chodcov. Niektorí vodiči ich však vnímajú ako zhoršenie plynulosti jazdy, vyšší hluk a vyššiu spotrebu.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Doprava a zamestnávatelia',
    q:'Majú veľkí zamestnávatelia prispievať na dopravné riešenia v meste?',
    w:'Automobilka Stellantis Slovakia sídli priamo v Trnave na Automobilovej ulici. Podľa dostupných údajov vytvára približne 3 700 priamych pracovných miest a ďalšie pracovné miesta u dodávateľov. Dochádzanie zamestnancov ovplyvňuje dopravu v meste.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Komunikácia',
    q:'Má mesto robiť pravidelné stretnutia v každej časti Trnavy?',
    w:'Trnava má viac než 62 700 obyvateľov a viacero častí s rozdielnymi problémami. Pravidelné stretnutia by mohli zlepšiť komunikáciu s obyvateľmi, ale znamenali by viac času, administratívy a verejných záväzkov.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Participácia',
    q:'Má mesto častejšie využívať miestne referendá pri veľkých sporoch?',
    w:'Petíciu za referendum o parkovacej politike podpísalo viac než 19 000 Trnavčanov. Referendá môžu dať obyvateľom priamy hlas, ale môžu aj spomaliť rozhodovanie a zjednodušiť zložité mestské témy.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou?',
    w:'Trnava pripravuje projekty v hodnote viac než 80 miliónov eur. Pri takýchto investíciách môže byť dôležitá nielen najnižšia cena, ale aj životnosť, servisné náklady a kvalita. Vyššia kvalita však môže znamenať vyššie počiatočné výdavky.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Univerzity',
    q:'Má mesto viac podporovať Trnavu ako univerzitné mesto?',
    w:'Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Podpora študentov, internátov, dopravy a služieb môže posilniť život v meste, ale časť obyvateľov z nej nemusí mať priamy úžitok.',
    a:{nemcovska:'disagree', baros:'neutral', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Školy',
    q:'Majú mať školy a škôlky prednosť pred veľkými projektmi v centre?',
    w:'Mesto Trnava zriaďuje 9 základných škôl a rieši aj spádové oblasti materských škôl. Investície do škôl a škôlok sa týkajú každodenného života rodín, ale súťažia o peniaze s obnovou ulíc, parkov a verejných priestorov.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Zeleň',
    q:'Majú pri rekonštrukciách ulíc pribúdať stromy aj na úkor parkovania?',
    w:'Mesto každoročne vysádza nové stromy, no výsadbu často limitujú siete, doprava a šírka ulíc. Viac stromov a tieňa pomáha počas horúčav, ale v úzkych uliciach môže znamenať menej parkovacích miest.',
    a:{nemcovska:'neutral', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Verejné priestory',
    q:'Má Trnava pokračovať vo veľkých obnovách parkov, námestí a ulíc?',
    w:'Mesto uvádza pripravované projekty za viac než 80 miliónov eur. Veľké obnovy môžu zlepšiť kvalitu života a vzhľad mesta, ale časť obyvateľov môže uprednostniť menšie opravy chodníkov, ciest, škôl alebo sídlisk.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Nočný život',
    q:'Má mesto viac podporovať večerný život v centre?',
    w:'Región Trnava zaznamenal za prvých sedem mesiacov roka viac než 37 800 návštevníkov a viac než 80 000 prenocovaní. Živé centrum môže pomôcť podnikom, kultúre a turizmu, ale môže priniesť viac hluku pre obyvateľov centra.',
    a:{nemcovska:'agree', baros:'agree', horvathova:'neutral', cajkova:'neutral'}
  },
  {
    t:'Priemysel a bývanie',
    q:'Má Trnava obmedziť priemysel, ak zhoršuje život v obytných častiach?',
    w:'Stellantis je jeden z najväčších zamestnávateľov v meste a priemysel prináša pracovné miesta aj príjmy. Zároveň však zvyšuje dopravu, tlak na bývanie a zaťaženie okrajových častí mesta.',
    a:{nemcovska:'neutral', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Kultúra a turizmus',
    q:'Má mať kultúra a turizmus pevný ročný rozpočet?',
    w:'Cestovný ruch v regióne rastie: za prvých sedem mesiacov roka bolo evidovaných viac než 37 800 návštevníkov a 80 000 prenocovaní. Stabilný rozpočet by pomohol plánovať kultúru a turizmus, ale znížil by flexibilitu pri iných výdavkoch.',
    a:{nemcovska:'agree', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto zverejňovať konečné ceny a meškania veľkých projektov?',
    w:'Pri pripravovaných projektoch za viac než 80 miliónov eur je dôležité, aby obyvatelia videli pôvodný rozpočet, konečnú cenu, termín dokončenia a dôvody zmien. Takáto kontrola zvyšuje transparentnosť, ale môže byť politicky nepríjemná.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Sídliská vs. centrum',
    q:'Má ísť viac investícií zo centra do sídlisk a okrajových častí?',
    w:'Trnava pripravuje projekty za viac než 80 miliónov eur. Časť obyvateľov očakáva veľké mestské projekty v centre, iní chcú viac peňazí na vnútrobloky, chodníky, ihriská a každodenné problémy na sídliskách.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  }
];
