// ── Volebná kalkulačka 2026 — MICHALOVCE ──
// Upravujte len tento súbor pre otázky a kandidátov mesta MICHALOVCE.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['michalovce_primator'] = [
  {id:'dufinec',   name:'Miroslav Dufinec',   party:'Smer-SD / Hlas-SD (úradujúci primátor)',              color:'#e63946', url:'https://www.dufinec.sk'},
  {id:'sibal',     name:'Erik Sibal',          party:'Nezávislý kandidát',                                  color:'#2196F3', url:''},
  {id:'vidovenec', name:'Miroslav Vidovenec',  party:'PS / Demokrati / SaS / KDH / Hnutie Slovensko',      color:'#4caf50', url:''}
];

// ── Otázky: Primátor ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.michalovce_primator = [
  {
    t:'Doprava',
    q:'Má byť diaľnica D1 na Zemplín jednou z hlavných priorít primátora pri rokovaniach so štátom?',
    w:'Úsek D1 Bidovce – štátna hranica SK/UA má približne 72 km a odhadované náklady 1,4 až 1,8 miliardy eur. Pre šetrenie v štátnom rozpočte sa výstavba na Zemplíne posúva na mnoho rokov a mesto diaľnicu nepostaví samo. Otázka je, koľko energie má primátor venovať tlaku na štát oproti veciam, ktoré vie mesto riešiť priamo.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Doprava',
    q:'Majú mať opravy ciest a chodníkov prednosť pred veľkými novými projektmi?',
    w:'Stav ciest a chodníkov patrí medzi časté sťažnosti obyvateľov. Keďže rozpočet mesta nestačí na všetko naraz, vedenie musí vyberať medzi každodennou infraštruktúrou a väčšími viditeľnými investíciami.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto zaviesť regulované parkovanie v centre, aj keby to skomplikovalo krátke návštevy obchodov a úradov?',
    w:'Michalovce zaviedli bezplatné parkovanie na mestských parkoviskách v centre od roku 2014. Ak by bolo spoplatnených napríklad 300 miest za 1 €/hod., pri 8 hodinách denne, 250 pracovných dňoch a 50 % obsadenosti by hrubý príjem bol asi 300 000 eur ročne. Pri 200 až 500 miestach ide orientačne o 160 000 až 600 000 eur ročne pred nákladmi na systém a kontrolu.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Cyklodoprava',
    q:'Má mesto budovať bezpečné cyklotrasy aj vtedy, keď ubudne časť parkovacích miest?',
    w:'V rozpočtových materiáloch mesta sa uvádza cyklistický chodník Hollého – Okružná – Štefánikova za približne 309 092 eur. Bezpečné cyklotrasy často potrebujú vlastný priestor, nielen namaľovanú čiaru na ceste, čo môže znamenať menej miesta pre autá alebo parkovanie.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'MHD',
    q:'Má mesto viac podporiť MHD, aj keď to bude vyžadovať vyššiu dotáciu z rozpočtu?',
    w:'Mesto počíta s projektom bezemisnej mestskej autobusovej dopravy vrátane nákupu 10 elektrobusov, úprav zastávok a súvisiacej infraštruktúry s podporou približne 6,8 milióna eur. Otázka je, či má mesto ďalej zvyšovať kvalitu MHD aj cez vlastné výdavky.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Má mesto posilniť mestskú políciu a kamery, aj keď to zvýši trvalé výdavky?',
    w:'Viac hliadok a kamier môže zvýšiť pocit bezpečia v centre, parkoch aj na sídliskách. Zároveň ide o dlhodobé náklady na ľudí, techniku, údržbu a prevádzku.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Majú mestskí policajti viac chodiť pešo po štvrtiach, aj keď to bude drahšie?',
    w:'Pešie hliadky môžu lepšie poznať miestnych ľudí a opakujúce sa problémy. Sú však časovo náročnejšie ako hliadkovanie autom a môžu vyžadovať viac policajtov.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Životné prostredie',
    q:'Má mesto brániť veľkému veternému parku pri Michalovciach, aj keď môže priniesť čistú energiu a príjmy?',
    w:'Pri Michalovciach sa diskutuje zámer výstavby veľkého veterného parku s približne 45 turbínami. Podporovatelia hovoria o čistej energii, odporcovia o zásahu do krajiny, hluku a dopade na obce.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má mesto vyčleniť nájomné byty pre lekárov, učiteľov a sestry, aj keď ubudnú byty pre iných žiadateľov?',
    w:'Nemocnica, školy a sociálne služby potrebujú stabilných pracovníkov. Zvýhodnené bývanie môže pomôcť udržať kľúčové profesie v meste, ale zároveň vytvorí prednosť pre jednu skupinu obyvateľov.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Mladé rodiny',
    q:'Má mesto podporiť mladé rodiny službami a bývaním, aj keď to bude stáť viac než jednorazové príspevky?',
    w:'Michalovce mali k 1. januáru 2026 34 680 obyvateľov. Ak má mesto spomaliť odchod mladých, potrebuje riešiť bývanie, škôlky, prácu a služby, nielen symbolické jednorazové príspevky.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Seniori',
    q:'Má mesto viac rozšíriť domácu opatrovateľskú službu namiesto výstavby nového zariadenia pre dôchodcov?',
    w:'Michalovce mali k 1. januáru 2026 34 680 obyvateľov a tlak na služby pre seniorov bude rásť. Domáca opatrovateľská služba umožní ľuďom zostať doma, ale nové zariadenie pre dôchodcov vie pomôcť tým, ktorí potrebujú celodennú starostlivosť.',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Bambusky',
    q:'Má mesto viac podporovať vzdelávanie a prácu s rodinami v Bambuskách, aj keď časť obyvateľov žiada hlavne viac kontrol a hliadok?',
    w:'Bambusky patria medzi najcitlivejšie sociálne témy v Michalovciach. Podpora detí, škôlok, školy a komunitnej práce môže riešiť príčiny problémov. Viac kontrol a hliadok reaguje rýchlejšie na sťažnosti obyvateľov, ale nerieši dlhodobé príčiny.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Hospodárstvo',
    q:'Má mesto uprednostniť pomoc miestnym firmám pred lákaním veľkých investorov zvonka?',
    w:'Miestne firmy a živnostníci už v meste pôsobia, zamestnávajú ľudí a platia dane. Veľkí investori môžu priniesť nové pracovné miesta, ale často vyžadujú infraštruktúru, pozemky alebo úľavy.',
    a:{dufinec:'disagree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Hospodárstvo',
    q:'Má mesto lákať najmä firmy s lepšie platenými pracovnými miestami, aj keď ich bude menej?',
    w:'Niektorí investori prinesú veľa pracovných miest, ale s nižšími mzdami. Iní vytvoria menej pracovných miest, no s vyššími platmi a väčšou šancou udržať mladých ľudí v regióne.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Mestský majetok',
    q:'Má mesto radšej predať nevyužitý majetok než si brať nový úver?',
    w:'Predaj budov alebo pozemkov môže financovať opravy bez ďalšieho zadlženia. Na druhej strane, mesto stratí majetok, ktorý môže mať v budúcnosti vyššiu hodnotu alebo nové využitie.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou, aj keď budú projekty drahšie?',
    w:'Najnižšia cena nemusí znamenať najlepšie riešenie. Pri cestách, školách alebo verejných priestoroch môže byť dôležitá aj životnosť, servis a kvalita prevedenia.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto zverejňovať konečné ceny a meškania projektov, aj keď to môže byť politicky nepríjemné?',
    w:'Obyvatelia by mali vidieť pôvodný rozpočet, konečnú cenu, termín dokončenia a dôvody zmien. Takáto kontrola zvyšuje dôveru, ale môže odhaliť chyby v príprave alebo riadení projektov.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Kultúra a šport',
    q:'Má mesto dať viac peňazí do kultúry a mládeže, aj keď ubudne na športovú infraštruktúru?',
    w:'Šport je v Michalovciach silná téma, najmä hokej a futbal. Kultúra, kluby a priestory pre mladých však tiež ovplyvňujú kvalitu života a to, či mladí v meste zostanú.',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Šport',
    q:'Má mesto uprednostniť druhú ľadovú plochu pred menšími športoviskami na sídliskách?',
    w:'Druhá ľadová plocha by pomohla hokeju a reprezentácii mesta. Menšie športoviská na sídliskách by zas slúžili širšiemu okruhu obyvateľov každý deň.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'disagree'}
  },
  {
    t:'Energia',
    q:'Má mesto zatepliť školy a mestské budovy, aj keď sa úspory vrátia až po rokoch?',
    w:'Mesto má v rozpočte na rok 2026 energetické opatrenia na školách a mestských budovách. Pri ZŠ P. Horova sa uvádza obnova dvoch budov s celkovým objemom približne 1,8 milióna eur a očakávanou úsporou viac ako 60 % primárnych zdrojov. Takéto investície šetria peniaze až postupne.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Cestovný ruch',
    q:'Má mesto investovať do turizmu okolo Zemplínskej Šíravy, aj keď samotná Šírava neleží v meste?',
    w:'Zemplínska Šírava je významná rekreačná oblasť v okrese Michalovce; turistické zdroje uvádzajú plochu približne 33 km², dĺžku 11 km a šírku 3,5 km. Turizmus môže pomôcť hotelom, reštauráciám a službám v meste, ale časť obyvateľov môže chcieť peniaze radšej na problémy priamo v uliciach Michaloviec.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'disagree'}
  },
  {
    t:'Územný rozvoj',
    q:'Má mať mesto hlavného architekta, aj keď to znamená ďalší platený odborný post?',
    w:'Hlavný architekt môže pomôcť, aby nové stavby, ulice a verejné priestory dávali zmysel ako celok. Znamená to však ďalší odborný post a jeho vplyv závisí od toho, či ho bude vedenie mesta rešpektovať.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Sociálne vylúčenie',
    q:'Má mesto posilniť terénnu sociálnu prácu, aj keď výsledky budú viditeľné až po rokoch?',
    w:'Michalovce sú zapojené do projektu terénnej sociálnej práce a komunitných centier na obdobie august 2023 – január 2029. Cieľom je pomoc ľuďom ohrozeným chudobou a sociálnym vylúčením. Takáto práca môže znížiť problémy dlhodobo, ale voliči často očakávajú rýchlejšie a viditeľnejšie riešenia, napríklad viac hliadok alebo kontrol.',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Spolupráca s Ukrajinou',
    q:'Má mesto viac spolupracovať s ukrajinskými mestami, aj keď výsledky neprídu hneď?',
    w:'Michalovce ležia približne 60 km od Užhorodu. Blízkosť Ukrajiny môže byť príležitosťou pre firmy, školy, kultúru aj cezhraničné projekty, no výsledky takejto spolupráce sa prejavia až po rokoch.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Financie',
    q:'Má si mesto vziať úver na rýchlejšie opravy, aj keď bude dlh splácať ďalšie roky?',
    w:'K 31.12.2025 malo mesto dlh z komerčných a dodávateľských úverov približne 10,78 milióna eur, čo predstavovalo 22,17 % bežných príjmov predchádzajúceho roka. Ročné splátky boli približne 1,99 milióna eur, teda 8,90 % upravených bežných príjmov. Zákonný limit dlhu je 60 % a mesto ho spĺňalo, ale kontrolórka odporúčala sledovať vývoj tak, aby dlh nepresiahol 50 %. Nový úver by mohol urýchliť opravy, ale zvýšil by záväzky na ďalšie roky.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'neutral'}
  }
];
