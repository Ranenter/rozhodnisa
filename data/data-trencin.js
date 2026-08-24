// ══ DATA: TRENČÍN ══
// Postoje kandidátov sú NAŠTUDOVANÉ (nie odhady)
// VUC otázky Q11 (integrovaná doprava), Q18 (úver) a Q20 (vietor) kandidátov nerozlišujú.
window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor Trenčína ──
window.VAA_DATA.candidates['trencin_primator'] = [
  {"id":"forgac","name":"Ján Forgáč","party":"Nezávislý","color":"#1976d2","url":"https://janforgac.sk/"},
  {"id":"micega","name":"Miloš Mičega","party":"Nezávislý","color":"#9c27b0","url":"https://www.micega.sk/"}
];

// ── Kandidáti: Predseda TSK ──
window.VAA_DATA.candidates['trencin_vuc'] = [
  {"id":"baska","name":"Jaroslav Baška","party":"Smer-SD / Hlas-SD / SNS / Republika","color":"#c62828","url":"https://www.vaszupan.sk/"},
  {"id":"svitkova","name":"Natália Svítková","party":"Demokrati / PS / SaS / KDH / Hnutie Slovensko / OKS","color":"#1976d2","url":"https://nataliasvitkova.sk/"}
];

// ── Otázky: Primátor Trenčína ──
window.VAA_DATA.questions.trencin_primator = [
  {
    t: "Kontinuita po Rybníčkovi",
    q: "Má Trenčín po odchode Richarda Rybníčka pokračovať v podobnom štýle vedenia, alebo výrazne zmeniť priority?",
    w: "Rybníček viedol mesto vyše desať rokov. Otvára sa spor, či zachovať kontinuitu projektov, alebo využiť zmenu na obrat priorít.",
    a: {"forgac":"agree","micega":"disagree"}
  },
  {
    t: "Parkovanie",
    q: "Má Trenčín rozšíriť platené parkovacie zóny, aby zvládol tlak áut v centre a na sídliskách?",
    w: "Regulácia uvoľní miesta pre rezidentov, no prináša viac poplatkov a pravidiel pre domácnosti, návštevy aj firmy.",
    a: {"forgac":"agree","micega":"disagree"}
  },
  {
    t: "EHMK 2026",
    q: "Má mesto aj po roku 2026 dávať na kultúru aspoň 5 % bežných výdavkov, aj na úkor ciest a sídlisk?",
    w: "Rok Európskeho hlavného mesta kultúry priniesol nové priestory a záväzky. Pevných 5 % dá kultúre istotu, no menej zostane na cesty, parkovanie a sídliská.",
    a: {"forgac":"agree","micega":"disagree"}
  },
  {
    t: "Bývanie",
    q: "Má Trenčín stavať mestské nájomné byty aj za cenu vyššieho zadlženia?",
    w: "Nájomné byty pomôžu mladým rodinám a ľuďom bez šance na komerčné bývanie. Vyžadujú však veľké investície a dlh alebo presun z iných priorít.",
    a: {"forgac":"agree","micega":"neutral"}
  },
  {
    t: "Mosty a doprava",
    q: "Má mesto sústrediť peniaze a prípravu na nové cestné prepojenie cez Váh, aj keď sa tým odložia projekty na sídliskách?",
    w: "Nový most cez Váh by odľahčil dopravu. Príprava, pozemky a kapacita úradu však potom chýbajú pri menších investíciách v mestských častiach.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Výstavba a developeri",
    q: "Má mesto obmedziť novú výstavbu tam, kde developer nezabezpečí cesty, parkovanie či miesta v školách?",
    w: "Nové byty pomáhajú rastu, ale zaťažujú cesty, parkovanie a školy. Prísnejšie podmienky chránia obyvateľov, no môžu spomaliť výstavbu a zdražiť bývanie.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Sídliská vs. centrum",
    q: "Má ísť viac investícií z centra do sídlisk a okrajových častí Trenčína?",
    w: "Jedni chcú silné centrum a veľké projekty, druhí viac peňazí na chodníky, vnútrobloky a ihriská v obytných štvrtiach. Spor imidžu a každodenného života.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Cyklodoprava",
    q: "Má mesto stavať oddelené cyklotrasy aj tam, kde ubudnú parkovacie miesta alebo jazdný pruh?",
    w: "Oddelené cyklotrasy zvyšujú bezpečnosť a ponúkajú alternatívu k autu. V úzkych uliciach však znamenajú menej parkovania alebo kapacity pre autá.",
    a: {"forgac":"agree","micega":"disagree"}
  },
  {
    t: "Dane a poplatky",
    q: "Má Trenčín zvýšiť miestne dane a poplatky, ak inak nezaplatí základné služby a údržbu?",
    w: "Bez vyšších príjmov je ťažšie financovať opravy a služby. Zvýšenie daní je však nepopulárne a zdvíha náklady domácnostiam aj firmám.",
    a: {"forgac":"neutral","micega":"disagree"}
  },
  {
    t: "Šport",
    q: "Má mesto uprednostniť mládežnícky šport a menšie ihriská pred veľkými drahými športovými projektmi?",
    w: "Veľké projekty prinášajú prestíž, no väčšina ľudí využíva bežné ihriská a haly v mestských častiach. Spor reprezentácie a každodenného športu.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Zeleň a klíma",
    q: "Majú mať pri obnove ulíc a námestí prednosť stromy a zeleň pred počtom parkovacích miest?",
    w: "Stromy a tieň pomáhajú proti prehrievaniu mesta. V hustých uliciach to však často znamená menej parkovacích miest.",
    a: {"forgac":"agree","micega":"neutral"}
  },
  {
    t: "Mestská polícia",
    q: "Má Trenčín výrazne zvýšiť počet mestských policajtov a kamier aj za cenu vyšších výdavkov?",
    w: "Silnejší dohľad zvýši pocit bezpečia a poriadok. Ide však o trvalé výdavky, ktoré potom chýbajú inde.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Mestský majetok",
    q: "Má mesto prenajímať obchodné priestory miestnym prevádzkam pod trhovú cenu, aj keď tým príde o príjmy?",
    w: "Zvýhodnené nájmy udržia lokálne obchody v centre. Mesto však získa menej peňazí a musí jasne určiť, kto má na podporu nárok.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Participatívny rozpočet",
    q: "Má Trenčín vyčleniť pevnú časť rozpočtu, o ktorej priamo rozhodnú obyvatelia hlasovaním?",
    w: "Participatívny rozpočet zvýši zapojenie ľudí. Kritici sa boja, že odborné priority ustúpia menším, ale populárnym témam.",
    a: {"forgac":"agree","micega":"neutral"}
  },
  {
    t: "Sociálne služby",
    q: "Má Trenčín posilniť terénne služby a podporu seniorov aj za cenu menších investícií do verejného priestoru?",
    w: "Starnutie zvyšuje tlak na opatrovanie a služby pre seniorov. Ich posilnenie však uberie peniaze iným mestským prioritám.",
    a: {"forgac":"agree","micega":"neutral"}
  },
  {
    t: "Bezpečnosť",
    q: "Má Trenčín rozšíriť zóny 30, vyvýšené priechody a spomaľovače v obytných zónach?",
    w: "Zvyšujú bezpečnosť chodcov, detí a seniorov. Časť vodičov ich vníma ako zdržanie, hluk a menší komfort.",
    a: {"forgac":"agree","micega":"neutral"}
  },
  {
    t: "Veľkí zamestnávatelia",
    q: "Má mesto odmietnuť veľkú investíciu, ak investor odmietne prispieť na dopravu a služby, aj za cenu straty pracovných miest?",
    w: "Investor prinesie prácu a dane, no zaťaží cesty, MHD a bývanie. Tvrdá podmienka chráni rozpočet, ale investor môže odísť inam.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Participácia",
    q: "Má mesto zastaviť veľký projekt v mestskej časti, ak ho v miestnom hlasovaní odmietne väčšina zúčastnených?",
    w: "Miestne hlasovanie dá ľuďom väčší vplyv na okolie. Môže však zastaviť projekt schválený zastupiteľstvom, aj keď hlasuje len menšina obyvateľov.",
    a: {"forgac":"disagree","micega":"agree"}
  },
  {
    t: "Moc a kontrola",
    q: "Má nový primátor po voľbách vymeniť časť vedenia mestských firiem spätého s doterajším vedením?",
    w: "Výmena môže priniesť nový výkon a kontrolu. Nesie však riziko politizácie a prerušenia rozbehnutých projektov.",
    a: {"forgac":"disagree","micega":"agree"}
  },
  {
    t: "EHMK 2026",
    q: "Má mesto platiť plnú prevádzku a rozvoj Fiesta mosta aj po roku 2026, aj na úkor chodníkov a ciest?",
    w: "Fiesta most zo starého železničného mosta slúži kultúre a podujatiam. Jeho prevádzka bude stáť peniaze aj po skončení roka kultúry.",
    a: {"forgac":"agree","micega":"disagree"}
  },
  {
    t: "Transparentnosť",
    q: "Má zastupiteľstvo znovu schváliť každé zdraženie veľkého projektu o viac než 10 %?",
    w: "Nové hlasovanie nad hranicou 10 % zvýši kontrolu nad dodatkami. Môže však spomaliť projekty a reakciu na nečakané technické problémy.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Parkovanie",
    q: "Má mesto dať väčšinu príjmov z parkovania na nové parkovacie domy, aj na úkor MHD a chodníkov?",
    w: "Parkovacie domy pomôžu vodičom, ale sú drahé. Tie isté peniaze môžu chýbať verejnej doprave a bezpečnejším uliciam.",
    a: {"forgac":"neutral","micega":"agree"}
  },
  {
    t: "Železničná stanica a terminál",
    q: "Má mesto vložiť vlastné peniaze do prestupného terminálu pri stanici, hoci časť infraštruktúry patrí štátu?",
    w: "Moderný terminál zlepší prestup medzi vlakmi, autobusmi a MHD. Mesto však zaplatí aj za to, čo nevlastní, a menej zostane na cesty.",
    a: {"forgac":"agree","micega":"neutral"}
  },
  {
    t: "Mestský majetok",
    q: "Má Trenčín predať nepotrebný majetok najvyššej ponuke, aj keď ho miestne združenie chce na komunitné účely?",
    w: "Predaj najvyššej ponuke prinesie viac peňazí a jasné pravidlo. Komunitné využitie má dlhodobú hodnotu, ale nižší výnos.",
    a: {"forgac":"agree","micega":"disagree"}
  },
  {
    t: "Mestské služby",
    q: "Má mesto zaviesť kartu Trenčana so zľavami na šport a kultúru len pre ľudí s trvalým pobytom?",
    w: "Karta odmení tých, čo platia mestu podielové dane. Znevýhodní však študentov a nájomníkov, ktorí tu žijú bez trvalého pobytu.",
    a: {"forgac":"neutral","micega":"agree"}
  }
];

// ── Otázky: Predseda TSK ──
window.VAA_DATA.questions.trencin_vuc = [
  {
    t: "Horná Nitra",
    q: "Má kraj presunúť viac investícií do Hornej Nitry, aj keď spomalí projekty v okresoch Trenčín, Nové Mesto a Považská Bystrica?",
    w: "Prievidza a Partizánske sa po útlme baníctva prispôsobujú a potrebujú prácu, dopravu a vzdelávanie. Presun peňazí ta však spomalí silnejšie okresy.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Cesty a mosty",
    q: "Má kraj obmedziť granty na kultúru, šport a podujatia, aby zrýchlil opravy ciest a mostov?",
    w: "Granty držia miestny šport a kultúru v obciach. Ich obmedzenie uvoľní peniaze na cesty, ale zasiahne veľa malých projektov.",
    a: {"baska":"disagree","svitkova":"neutral"}
  },
  {
    t: "Nemocnice",
    q: "Má kraj zveriť svoje nemocnice jednému súkromnému prevádzkovateľovi, ak ich oddlží a zmodernizuje?",
    w: "Nemocnice v Bojniciach, Považskej Bystrici a Myjave potrebujú investície. Súkromník prinesie kapitál, no kraj stratí časť priamej kontroly.",
    a: {"baska":"agree","svitkova":"disagree"}
  },
  {
    t: "Stredné školy",
    q: "Má kraj zlúčiť strednú školu s málo žiakmi, ak ušetrené peniaze dá na lepšie vybavenie škôl v tom istom okrese?",
    w: "Zlúčenie zníži náklady a zlepší vybavenie zvyšných škôl. Menšie mesto však príde o školu, prácu a dostupnosť vzdelávania.",
    a: {"baska":"neutral","svitkova":"disagree"}
  },
  {
    t: "Autobusová doprava",
    q: "Má kraj udržať málo využívané spoje do malých obcí Hornej Nitry, aj za cenu menej spojov medzi väčšími mestami?",
    w: "Priame spoje sú dôležité pre ľudí bez auta, najmä seniorov a študentov. Uberajú však kapacitu na frekventovaných trasách medzi mestami.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Moc a funkcie",
    q: "Má byť predseda kraja zároveň poslancom parlamentu, ak tvrdí, že obe funkcie zvláda?",
    w: "Dve funkcie môžu zvýšiť vplyv a prístup kraja k štátu. Kritici tvrdia, že kraj potrebuje plnohodnotného predsedu, nie politika na dve stoličky.",
    a: {"baska":"agree","svitkova":"disagree"}
  },
  {
    t: "Školstvo a personálne nominácie",
    q: "Má župan rešpektovať víťaza konkurzu na riaditeľa školy aj vtedy, keď s ním politicky nesúhlasí?",
    w: "Kraj je zriaďovateľom stredných škôl. Spor je, či má rozhodnúť výsledok odborného výberu, alebo aj politická dôvera zriaďovateľa.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Nemocnice a štát",
    q: "Má župan verejne odmietnuť rozhodnutie vlády, ktoré obmedzí krajskú nemocnicu, aj keď vládu tvoria jeho partneri?",
    w: "Rozhodnutia štátu ovplyvnia oddelenia a dostupnosť starostlivosti. Otvorený odpor zvýši tlak, no môže zhoršiť spoluprácu pri financovaní.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Lekári v okresoch",
    q: "Má kraj dávať lekárom náborové príspevky a lacnejšie priestory v okresoch s málo ambulanciami?",
    w: "Niektoré okresy majú málo lekárov. Príspevky a lacné priestory prilákajú ambulancie, ale sú dlhodobým výdavkom kraja.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Odborné školstvo",
    q: "Má kraj viac prispôsobiť odborné školy potrebám firiem v automobilovom a strojárskom priemysle?",
    w: "Väzba na priemysel pomôže absolventom nájsť prácu v kraji. Príliš úzke zameranie však môže obmedziť širšie vzdelanie a flexibilitu mladých.",
    a: {"baska":"agree","svitkova":"neutral"}
  },
  {
    t: "Integrovaná doprava",
    q: "Má kraj dotovať jeden spoločný lístok na autobusy a vlaky aj tam, kde bude na jedného cestujúceho drahší?",
    w: "Spoločný lístok zjednoduší prestupy v celom kraji. V riedko osídlených oblastiach ho však využije málo ľudí a prevádzka bude drahšia.",
    a: {"baska":"agree","svitkova":"agree"}
  },
  {
    t: "Krajské organizácie",
    q: "Má nový predseda vymeniť vedenie krajských organizácií, ktoré nemajú výsledky, aj za cenu nestability?",
    w: "Tvrdšie zásahy môžu priniesť výkon a zodpovednosť. Hrozí však, že sa z krajských inštitúcií stane korisť novej moci.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Sociálne služby",
    q: "Má kraj presunúť peniaze z veľkých pobytových zariadení do domácej starostlivosti a malých komunitných zariadení pre seniorov?",
    w: "Domáca a komunitná starostlivosť sa viac podobá bežnému životu a môže byť lacnejšia. Nie každý však môže zostať doma a menej pobytových miest predĺži čakanie.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Investori a pôda",
    q: "Má kraj v územnom pláne odmietať priemysel a logistiku na kvalitnej poľnohospodárskej pôde, aj keď prinesú prácu?",
    w: "Projekty prinesú prácu a príjmy, no zastavaná úrodná pôda sa ťažko vracia. Kraj cez územný plán ovplyvňuje, kde sa stavia.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Veľkí investori",
    q: "Má kraj podmieniť podporu veľkého investora tým, že prispeje na dopravu či odborné školy, ktoré využije?",
    w: "Investor vytvorí prácu, no zaťaží cesty, autobusy a školy. Podmienka chráni rozpočet, ale môže oslabiť konkurencieschopnosť kraja.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Transparentnosť",
    q: "Má krajské zastupiteľstvo znovu schváliť každý veľký projekt, ktorý zdražie o viac než 10 %?",
    w: "Nové hlasovanie nad 10 % zvýši kontrolu poslancov. Môže však spomaliť výstavbu a riešenie havarijných situácií.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Audit kraja",
    q: "Má nový župan dať nezávislý audit veľkých projektov a zmlúv súčasného vedenia kraja?",
    w: "Kraj spravuje veľký majetok a investície. Audit posilní dôveru a kontrolu, no môže pôsobiť ako politická vojna proti predchodcovi.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Zadlženie a investície",
    q: "Má si kraj vziať nový úver, ak inak nestihne opraviť najhoršie cesty, mosty a školy?",
    w: "Úver zrýchli obnovu a zníži investičný dlh. Zároveň zvýši splátky a zúži rozpočet v ďalších rokoch.",
    a: {"baska":"neutral","svitkova":"neutral"}
  },
  {
    t: "Regionálne rozdiely",
    q: "Má kraj presunúť časť investícií z okolia Trenčína do vzdialenejších okresov, aj keď tam žije menej ľudí?",
    w: "Trenčín priťahuje školy, úrady a služby, no kraj spravuje celé územie. Spor efektivity vo väčších centrách a regionálnej spravodlivosti.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Energetika a krajina",
    q: "Má kraj vo svojich stanoviskách odmietať veľké veterné projekty, ak s nimi nesúhlasia dotknuté obce?",
    w: "Veterné projekty prinášajú čistú energiu a investície, ale zasahujú krajinu a obce. Kraj môže podporiť štát alebo sa postaviť za obce.",
    a: {"baska":"neutral","svitkova":"neutral"}
  },
  {
    t: "Transformácia Hornej Nitry",
    q: "Má kraj obmedziť podporu tradičných priemyselných odborov na Hornej Nitre a presunúť peniaze do IT, energetiky a zdravotníctva?",
    w: "Región sa po baníctve prispôsobuje. Nové odbory dajú mladým perspektívu, no rýchly odklon od strojárstva môže oslabiť odvetvia, čo tam stále zamestnávajú.",
    a: {"baska":"disagree","svitkova":"agree"}
  },
  {
    t: "Cyklodoprava",
    q: "Má kraj pokračovať v rozširovaní Vážskej cyklomagistrály, aj keď sú v zlom stave cesty a mosty II. a III. triedy?",
    w: "Cyklomagistrála podporuje bezpečnú cyklodopravu a turizmus. Časť ľudí však považuje opravy ciest a mostov za naliehavejšie.",
    a: {"baska":"agree","svitkova":"neutral"}
  },
  {
    t: "Kultúra v regiónoch",
    q: "Má kraj presunúť viac kultúrnych dotácií z Trenčína do menších okresov, aj keď tam príde menej divákov?",
    w: "Peniaze v menších okresoch zlepšia dostupnosť kultúry. Sústredenie v centrách však prinesie vyššiu návštevnosť a lepšie zázemie.",
    a: {"baska":"neutral","svitkova":"agree"}
  },
  {
    t: "Kontinuita vs. zmena",
    q: "Potrebuje Trenčiansky kraj po troch obdobiach Jaroslava Bašku skôr kontinuitu, alebo výraznú zmenu vedenia?",
    w: "Baška obhajuje kontinuitu výsledkami a rastom majetku kraja. Opozícia tvrdí, že po dlhých rokoch jednej moci treba nový štýl a viac kontroly.",
    a: {"baska":"agree","svitkova":"disagree"}
  }
];
