// ── Volebná kalkulačka 2026 — POPRAD ──
// Otázky pre kandidátov na primátora mesta Poprad.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['poprad_primator'] = [
  {id:'danko',  name:'Anton Danko',   party:'Nezávislý, SNS / Smer-SD / Hlas-SD (úradujúci primátor)', color:'#e63946', url:'https://www.sdankom.sk/'},
  {id:'kralik', name:'Jozef Králik',  party:'Nezávislý',                                                color:'#2196F3', url:'https://jozefkralik.sk/'},
  {id:'bobak',  name:'Mikuláš Bobák', party:'Nezávislý',                                                color:'#2E7D32', url:''}
];

// ── Otázky: Primátor Popradu ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.poprad_primator = [
  {
    t:'Doprava',
    q:'Má mesto odložiť ďalšie veľké stavebné projekty v centre, kým sa neskončí rekonštrukcia námestia a hlavných dopravných ťahov?',
    w:'Súbežné veľké stavby zvyšujú dopravné obmedzenia a komplikujú prístup do centra. Odklad ďalších projektov by znížil tlak na dopravu, ale mohol by oddialiť pripravené investície a čerpanie externých zdrojov.',
    a:{danko:'disagree', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Mestský majetok',
    q:'Má mesto finančne prispievať na zľavnené vstupné do AquaCity pre Popradčanov, aj keby to stálo stovky tisíc eur ročne?',
    w:'AquaCity je súkromná firma. Mesto môže rokovať o rezidentskej zľave alebo ju spolufinancovať, no rovnaké peniaze by potom chýbali na iné mestské služby.',
    a:{danko:'disagree', kralik:'disagree', bobak:'neutral'}
  },
  {
    t:'Bývanie',
    q:'Má mesto zvýšiť miestnu daň a kontroly pri bytoch využívaných na krátkodobé turistické prenájmy?',
    w:'Krátkodobé prenájmy prinášajú príjem vlastníkom a rozširujú ponuku pre turistov. Vyššia daň a kontroly môžu chrániť susedov a zvýšiť príjem mesta, ale zároveň zdražia túto formu ubytovania.',
    a:{danko:'disagree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Cestovný ruch',
    q:'Má mesto použiť väčšiu časť príjmov z cestovného ruchu na služby pre obyvateľov než na ďalšiu propagáciu Popradu?',
    w:'Turizmus prináša mestu príjmy, ale zároveň zvyšuje tlak na dopravu, čistotu a verejný priestor. Presun peňazí do služieb pre obyvateľov by obmedzil zdroje na ďalšiu propagáciu mesta.',
    a:{danko:'disagree', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má zastupiteľstvo znovu schváliť každý veľký projekt, ktorého cena sa zvýši o viac než 10 %?',
    w:'Nové hlasovanie by zvýšilo politickú kontrolu nad predražením projektu. Zároveň môže zdržať práce, dodatky k zmluvám alebo čerpanie externých zdrojov.',
    a:{danko:'disagree', kralik:'agree', bobak:'agree'}
  },
  {
    t:'Cyklodoprava',
    q:'Má mesto budovať oddelené cyklotrasy, aj keby sa zrušili niektoré parkovacie miesta alebo jazdný pruh?',
    w:'Oddelené cyklotrasy sú bezpečnejšie než jazda v premávke, ale v zastavaných uliciach často zaberú priestor používaný autami alebo parkovaním.',
    a:{danko:'neutral', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Námestie sv. Egídia',
    q:'Má mesto zachovať projekt Námestia sv. Egídia bez väčších zmien, aj keď obyvatelia žiadajú viac zelene a iné usporiadanie priestoru?',
    w:'Rekonštrukcia námestia už prebieha. Zmeny počas výstavby môžu zvýšiť cenu alebo ohroziť termíny, no kritici žiadajú viac zelene a lepšie prispôsobenie priestoru každodennému životu mesta.',
    a:{danko:'agree', kralik:'disagree', bobak:'neutral'}
  },
  {
    t:'Bývanie',
    q:'Má mesto postaviť najmenej 100 štartovacích nájomných bytov pre mladých, aj keby si na ne muselo vziať nový úver?',
    w:'Štartovacie byty môžu pomôcť mladým ľuďom zostať v Poprade. Výstavba najmenej 100 bytov by však vyžadovala mestské pozemky, úver alebo presun peňazí z iných investícií.',
    a:{danko:'agree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Mestské médiá',
    q:'Má mesto zveriť tvorbu Mesačníka Poprad redakcii vybranej vo verejnej súťaži namiesto zamestnancov mestského úradu?',
    w:'Externá redakcia vybraná v súťaži môže zvýšiť nezávislosť mestského média. Mesto by však malo menšiu priamu kontrolu nad obsahom a muselo by pravidelne obstarávať túto službu.',
    a:{danko:'disagree', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'MHD',
    q:'Má mesto zaviesť 15-minútový interval MHD na hlavných trasách počas pracovných dní, aj keby muselo výrazne zvýšiť dotáciu dopravcovi?',
    w:'Poprad poskytuje obyvateľom takmer bezplatnú / zvýhodnenú MHD za ročný poplatok, no jej využiteľnosť závisí aj od intervalov a nadväznosti spojov. Pätnásťminútový interval by vyžadoval viac vozidiel, vodičov a vyššiu mestskú dotáciu.',
    a:{danko:'neutral', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto postaviť parkovacie domy na sídliskách aj za cenu plateného parkovania v okolitých uliciach?',
    w:'Parkovací dom stojí milióny eur. Bez regulácie okolitých ulíc môžu vodiči naďalej parkovať zadarmo a drahý objekt zostať slabo využívaný.',
    a:{danko:'agree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Letisko',
    q:'Má mesto finančne prispievať leteckým spoločnostiam na nové linky z Popradu, aj keď nie je isté, že budú dlhodobo využívané?',
    w:'Nové linky môžu priniesť turistov a zlepšiť dostupnosť regiónu. Verejná podpora však môže skončiť pri spojoch, ktoré po skončení dotácie zaniknú alebo ich využije málo cestujúcich.',
    a:{danko:'agree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Školy',
    q:'Majú mať rekonštrukcie škôl a škôlok prednosť pred ďalšími investíciami do centra, športových hál a turistických atrakcií?',
    w:'Mesto financuje školské budovy aj verejný priestor, šport a cestovný ruch. Uprednostnenie škôl by urýchlilo ich obnovu, ale oddialilo iné viditeľné mestské projekty.',
    a:{danko:'neutral', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Zeleň',
    q:'Má mesto pri každej väčšej rekonštrukcii ulice vyčleniť najmenej 10 % z rozpočtu na nové stromy, zeleň a opatrenia proti prehrievaniu?',
    w:'Pevný podiel by zabezpečil, že zeleň nebude z projektu vypustená pri šetrení. Zároveň môže znížiť sumu na povrchy, parkovanie, osvetlenie alebo iné časti rekonštrukcie.',
    a:{danko:'neutral', kralik:'agree', bobak:'agree'}
  },
  {
    t:'Cestovný ruch',
    q:'Má mesto každoročne vyčleniť najmenej 500 000 € na mimosezónne podujatia a propagáciu Popradu?',
    w:'Podujatia na jar a jeseň môžu predĺžiť turistickú sezónu a podporiť hotely, reštaurácie a služby. Pevná suma však znižuje priestor na cesty, školy alebo služby pre obyvateľov.',
    a:{danko:'agree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Hazard',
    q:'Má Poprad zakázať nové herne a po skončení licencií postupne ukončiť prevádzku existujúcich?',
    w:'Hazard prináša mestu daňové príjmy, ale môže zvyšovať závislosti a sociálne problémy. Postupný zákaz by znamenal nižšie príjmy aj zánik legálnych prevádzok.',
    a:{danko:'neutral', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Priemysel',
    q:'Má mesto odmietnuť podporu rozšírenia priemyselnej prevádzky, ak to zvýši dopravu, hluk alebo emisie v susednej obytnej časti?',
    w:'Rozšírenie prevádzky môže priniesť pracovné miesta a dane. Mesto však môže vo svojich stanoviskách a územnom plánovaní uprednostniť ochranu susedných obytných častí.',
    a:{danko:'disagree', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Eurofondy',
    q:'Má mesto prispôsobiť svoje investičné priority eurofondovým výzvam, aj keď by bez nich realizovalo iné projekty?',
    w:'Eurofondy umožnia mestu uskutočniť drahšie projekty s nízkym spolufinancovaním. Podmienky výziev však môžu určovať, čo a kedy sa postaví, namiesto pôvodných priorít mesta.',
    a:{danko:'agree', kralik:'neutral', bobak:'agree'}
  },
  {
    t:'Energia',
    q:'Má si mesto vziať úver na solárne panely na školách, ak sa má investícia splatiť z úspor energie?',
    w:'Solárne panely môžu znížiť účty škôl za elektrinu. Úspory však závisia od cien energie, technického riešenia a budúcej výroby, zatiaľ čo úver treba splácať pravidelne.',
    a:{danko:'neutral', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Seniori',
    q:'Má mesto otvoriť menšie denné centrá pre seniorov na každom veľkom sídlisku, aj keby muselo obmedziť podporu veľkých kultúrnych a športových podujatí?',
    w:'Denné centrá by priniesli aktivity a služby bližšie k seniorom. Viac prevádzok však znamená trvalé náklady na priestory, personál a program.',
    a:{danko:'agree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Šport',
    q:'Má mesto uprednostniť bezplatne otvorené školské ihriská pred výstavbou ďalšieho veľkého športového zariadenia?',
    w:'Školské areály môžu po vyučovaní slúžiť celým sídliskám, ale vyžadujú správcu, osvetlenie a opravy. Veľké športové zariadenie môže priniesť podujatia, no sústredí peniaze do jedného projektu.',
    a:{danko:'neutral', kralik:'agree', bobak:'neutral'}
  },
  {
    t:'Bezpečnosť',
    q:'Má mesto prijať viac mestských policajtov a rozšíriť kamerový systém, aj keby zostalo menej peňazí na prevenciu a prácu s problémovými skupinami?',
    w:'Viac policajtov a kamier môže priniesť rýchlejšie zásahy a väčší dohľad. Prevencia a terénna práca riešia príčiny problémov, ale ich výsledky sa prejavujú pomalšie.',
    a:{danko:'agree', kralik:'neutral', bobak:'neutral'}
  },
  {
    t:'Participácia',
    q:'Majú obyvatelia priamo rozhodovať o 1 % bežných výdavkov mesta prostredníctvom participatívneho rozpočtu?',
    w:'Poprad už participatívny rozpočet používa. Vyčlenenie 1 % bežných výdavkov by výrazne rozšírilo sumu, o ktorej rozhodujú obyvatelia, ale obmedzilo by voľnosť vedenia a zastupiteľstva pri rozdeľovaní rozpočtu.',
    a:{danko:'neutral', kralik:'agree', bobak:'agree'}
  },
  {
    t:'Zodpovednosť',
    q:'Má primátor zverejniť pri každom nesplnenom sľube dôvod, nový termín a sumu, ktorá už bola použitá?',
    w:'Pravidelné vyhodnotenie by ukázalo, ktoré sľuby sa plnia a koľko už stáli. Zároveň môže zvýrazniť oneskorenia spôsobené okolnosťami, ktoré mesto nevie úplne ovplyvniť.',
    a:{danko:'disagree', kralik:'agree', bobak:'agree'}
  },
  {
    t:'Vzťahy s krajom',
    q:'Má primátor verejne vystúpiť proti vedeniu Prešovského kraja, ak kraj nebude investovať do rozvoja letiska Poprad-Tatry?',
    w:'Letisko je dôležité pre dopravu aj cestovný ruch v Poprade. Verejný konflikt môže zvýšiť tlak na kraj, ale zároveň zhoršiť spoluprácu pri ďalších regionálnych projektoch.',
    a:{danko:'neutral', kralik:'agree', bobak:'disagree'}
  }
];
