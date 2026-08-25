// ══ DATA: TRENČÍN ══
window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

window.VAA_DATA.candidates['trencin_primator'] = [
  {
    "id": "forgac",
    "name": "Ján Forgáč",
    "party": "Nezávislý",
    "color": "#1976d2",
    "url": "https://janforgac.sk/"
  },
  {
    "id": "micega",
    "name": "Miloš Mičega",
    "party": "Nezávislý",
    "color": "#9c27b0",
    "url": "https://www.micega.sk/"
  }
];

window.VAA_DATA.candidates['trencin_vuc'] = [
  {
    "id": "baska",
    "name": "Jaroslav Baška",
    "party": "Smer-SD / Hlas-SD / SNS / Republika",
    "color": "#c62828",
    "url": "https://www.vaszupan.sk/"
  },
  {
    "id": "svitkova",
    "name": "Natália Svítková",
    "party": "Demokrati / PS / SaS / KDH / Hnutie Slovensko / OKS",
    "color": "#1976d2",
    "url": "https://nataliasvitkova.sk/"
  }
];

// ── Otázky: Primátor Trenčína ──
window.VAA_DATA.questions['trencin_primator'] = [
  {
    "t": "Kontinuita po Rybníčkovi",
    "q": "Má Trenčín po odchode dlhoročného primátora pokračovať v doterajšom štýle vedenia a prioritách mesta?",
    "w": "Richard Rybníček viedol mesto vyše desať rokov a predložil 16 mestských rozpočtov; opäť nekandiduje. Otázkou je, či nové vedenie udrží doterajší kurz veľkých projektov a rozvoja (rozpočet mesta je okolo 148 miliónov eur), alebo priority výraznejšie zmení.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "Parkovanie",
    "q": "Má Trenčín rozšíriť platené parkovacie zóny, aby zvládol rastúci počet áut v centre a na sídliskách?",
    "w": "Trenčín má približne 54-tisíc obyvateľov a rastúci počet áut. Regulácia uvoľní miesta pre rezidentov, no prináša viac poplatkov a pravidiel pre domácnosti, návštevy aj firmy.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "EHMK 2026",
    "q": "Má mesto aj po roku 2026 dávať na kultúru aspoň 5 % bežných výdavkov, aj na úkor ciest a sídlisk?",
    "w": "Bežné výdavky mesta sú okolo 79 miliónov eur ročne, takže 5 % predstavuje zhruba 4 milióny eur. Rok Európskeho hlavného mesta kultúry 2026 priniesol nové priestory a záväzky; pevných 5 % dá kultúre istotu, no menej zostane na cesty, parkovanie a sídliská.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "Bývanie",
    "q": "Má Trenčín stavať mestské nájomné byty aj za cenu vyššieho zadlženia?",
    "w": "Dlh mesta je približne 27 miliónov eur (okolo 500 eur na obyvateľa). Nájomné byty pomôžu mladým rodinám a ľuďom bez šance na komerčné bývanie, vyžadujú však veľké investície a ďalší dlh alebo presun z iných priorít.",
    "a": {
      "forgac": "agree",
      "micega": "neutral"
    }
  },
  {
    "t": "Mosty a doprava",
    "q": "Má mesto sústrediť peniaze a prípravu na nové cestné prepojenie cez Váh, aj keď sa tým odložia projekty na sídliskách?",
    "w": "Trenčín leží na oboch brehoch Váhu a existujúce mosty sú preťažené. Nový most by dopravu odľahčil, no príprava, pozemky a kapacita úradu potom chýbajú pri menších investíciách v mestských častiach.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Výstavba a investori",
    "q": "Má mesto obmedziť novú výstavbu tam, kde investor nezabezpečí cesty, parkovanie či miesta v školách?",
    "w": "Nové byty pomáhajú rastu, ale zaťažujú cesty, parkovanie a školy (na vzdelávanie ide už dnes vyše 38 miliónov eur ročne). Prísnejšie podmienky chránia obyvateľov, no môžu spomaliť výstavbu a zdražiť bývanie.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Sídliská vs. centrum",
    "q": "Má ísť viac investícií z centra do sídlisk a okrajových častí Trenčína?",
    "w": "Jedni chcú silné centrum a veľké projekty, druhí viac peňazí na chodníky, vnútrobloky a ihriská v obytných štvrtiach. Spor imidžu mesta a každodenného života v uliciach.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Cyklodoprava",
    "q": "Má mesto budovať oddelené cyklotrasy, aj keď to na niektorých miestach môže ubrať parkovacie miesta alebo jazdný pruh?",
    "w": "Oddelené cyklotrasy zvyšujú bezpečnosť a ponúkajú alternatívu k autu. V úzkych uliciach to však môže znamenať menej parkovania alebo kapacity pre autá.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "Dane a poplatky",
    "q": "Má Trenčín zvýšiť miestne dane a poplatky, ak inak nedokáže pokryť základné služby a údržbu mesta?",
    "w": "Bez vyšších príjmov je ťažšie financovať opravy a služby; dlhová služba mesta je už na úrovni približne 34 % bežných príjmov. Zvýšenie daní je však nepopulárne a zdvíha náklady domácnostiam aj firmám.",
    "a": {
      "forgac": "neutral",
      "micega": "disagree"
    }
  },
  {
    "t": "Šport",
    "q": "Má mesto uprednostniť mládežnícky šport a menšie ihriská pred veľkými drahými športovými projektmi?",
    "w": "Veľké projekty prinášajú prestíž, no väčšina ľudí využíva bežné ihriská a haly v mestských častiach. Spor reprezentácie a každodenného športu.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Zeleň a klíma",
    "q": "Majú mať pri obnove ulíc a námestí prednosť stromy a zeleň pred počtom parkovacích miest?",
    "w": "Mesto leží pod zalesneným vrchom Brezina a čoraz viac čelí suchu a prehrievaniu. Stromy a tieň proti horúčavám pomáhajú, v hustých uliciach to však často znamená menej parkovacích miest.",
    "a": {
      "forgac": "agree",
      "micega": "neutral"
    }
  },
  {
    "t": "Mestská polícia",
    "q": "Má Trenčín výrazne zvýšiť počet mestských policajtov a kamier aj za cenu vyšších výdavkov?",
    "w": "Silnejší dohľad zvýši pocit bezpečia a poriadok. Ide však o trvalé mzdové a prevádzkové výdavky, ktoré potom chýbajú inde.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Mestský majetok",
    "q": "Má mesto prenajímať obchodné priestory miestnym prevádzkam pod trhovú cenu, aj keď tým príde o príjmy?",
    "w": "Zvýhodnené nájmy udržia lokálne obchody a služby v centre. Mesto však získa menej peňazí a musí jasne určiť, kto má na podporu nárok.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Letisko a Pohoda",
    "q": "Má sa mesto aktívne zasadiť za zachovanie civilného využitia trenčianskeho letiska a festivalu Pohoda, aj keď štát uprednostňuje rozšírenie vojenskej výroby v leteckých opravovniach?",
    "w": "Trenčianske letisko vlastní štát a spravujú ho Letecké opravovne Trenčín; s plánovaným rozšírením údržby stíhačiek F-16 a vrtuľníkov Black Hawk je budúcnosť festivalu Pohoda po roku 2026 neistá. Pohoda patrí k identite mesta a prináša príjmy regiónu, no rozvoj opravovní znamená strategické pracovné miesta a mesto o využití letiska priamo nerozhoduje — môže naň len tlačiť.",
    "a": {
      "forgac": "agree",
      "micega": "neutral"
    }
  },
  {
    "t": "Sociálne služby",
    "q": "Má Trenčín posilniť terénne služby a podporu seniorov aj za cenu menších investícií do verejného priestoru?",
    "w": "Trenčín starne a jeho počet obyvateľov klesá (k začiatku roka 2026 pod 54-tisíc), tlak na opatrovanie a služby pre seniorov rastie. Ich posilnenie však uberie peniaze iným mestským prioritám.",
    "a": {
      "forgac": "agree",
      "micega": "neutral"
    }
  },
  {
    "t": "Bezpečnosť",
    "q": "Má Trenčín rozšíriť zóny 30, vyvýšené priechody a spomaľovače v obytných zónach?",
    "w": "Zvyšujú bezpečnosť chodcov, detí a seniorov. Časť vodičov ich vníma ako zdržanie, hluk a menší komfort.",
    "a": {
      "forgac": "agree",
      "micega": "neutral"
    }
  },
  {
    "t": "Veľkí zamestnávatelia",
    "q": "Má mesto odmietnuť veľkú investíciu, ak investor odmietne prispieť na dopravu a služby, aj za cenu straty pracovných miest?",
    "w": "Investor prinesie prácu a dane, no zaťaží cesty, MHD a bývanie. Tvrdá podmienka chráni rozpočet, ale investor môže odísť inam.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Participácia",
    "q": "Má mesto zastaviť veľký projekt v mestskej časti, ak ho v miestnom hlasovaní odmietne väčšina zúčastnených?",
    "w": "Miestne hlasovanie dá ľuďom väčší vplyv na okolie. Môže však zastaviť projekt schválený zastupiteľstvom, aj keď hlasuje len menšina obyvateľov.",
    "a": {
      "forgac": "disagree",
      "micega": "agree"
    }
  },
  {
    "t": "Moc a kontrola",
    "q": "Má nový primátor po voľbách vymeniť časť vedenia mestských firiem spätého s doterajším vedením?",
    "w": "Výmena môže priniesť nový výkon a kontrolu. Nesie však riziko politizácie a prerušenia rozbehnutých projektov.",
    "a": {
      "forgac": "disagree",
      "micega": "agree"
    }
  },
  {
    "t": "EHMK 2026",
    "q": "Má mesto platiť plnú prevádzku a rozvoj Fiesta mosta aj po roku 2026, aj na úkor chodníkov a ciest?",
    "w": "Fiesta most vznikol prestavbou starého železničného mosta uvoľneného po preložke trate a slúži kultúre a podujatiam. Jeho prevádzka a údržba budú stáť peniaze aj po skončení roka kultúry — na úkor chodníkov a ciest.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "Nábrežie Váhu",
    "q": "Majú mať pozemky uvoľnené po preložke železnice na nábreží Váhu prednostne slúžiť verejnému priestoru a zeleni, aj keď ich predaj na výstavbu by mestu priniesol viac peňazí?",
    "w": "Preložka železničnej trate uvoľnila v centre Trenčína približne osem hektárov pozemkov a projekt „Trenčín si Ty“ má prepojiť mesto s riekou Váh. Verejný priestor, park a nábrežie zvýšia kvalitu života, no predaj časti pozemkov investorom by mestu priniesol príjmy a nové byty.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "Parkovanie",
    "q": "Má mesto dať väčšinu príjmov z parkovania na nové parkovacie domy, aj na úkor MHD a chodníkov?",
    "w": "Parkovacie domy pomôžu vodičom, ale sú drahé. Tie isté peniaze môžu chýbať verejnej doprave a bezpečnejším uliciam.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  },
  {
    "t": "Železničná stanica a terminál",
    "q": "Má mesto vložiť vlastné peniaze do prestupného terminálu pri stanici, hoci časť infraštruktúry patrí štátu?",
    "w": "Moderný prestupný terminál pri zmodernizovanej stanici zlepší prestup medzi vlakmi, autobusmi a MHD. Mesto však zaplatí aj za to, čo nevlastní (železnicu spravuje štát), a menej zostane na cesty.",
    "a": {
      "forgac": "agree",
      "micega": "neutral"
    }
  },
  {
    "t": "Mestský majetok",
    "q": "Má mesto pri predaji nepotrebného majetku uprednostniť najvyššiu ponuku pred miestnym združením, ktoré ho chce využiť na komunitné účely?",
    "w": "Predaj najvyššej ponuke prinesie viac peňazí a jasné pravidlo. Komunitné využitie má dlhodobú hodnotu, ale nižší výnos.",
    "a": {
      "forgac": "agree",
      "micega": "disagree"
    }
  },
  {
    "t": "Mestské služby",
    "q": "Má mesto zaviesť kartu Trenčana so zľavami na šport a kultúru len pre ľudí s trvalým pobytom?",
    "w": "Karta odmení tých, čo mestu platia podielové dane. Znevýhodní však študentov a nájomníkov, ktorí tu žijú bez trvalého pobytu.",
    "a": {
      "forgac": "neutral",
      "micega": "agree"
    }
  }
];

// ── Otázky: Predseda TSK ──
window.VAA_DATA.questions['trencin_vuc'] = [
  {
    "t": "Horná Nitra",
    "q": "Má kraj presunúť viac investícií do Hornej Nitry, aj keď spomalí projekty v okresoch Trenčín, Nové Mesto a Považská Bystrica?",
    "w": "Okres Prievidza sa spamätáva z útlmu baníctva — ťažba uhlia v Hornonitrianskych baniach sa skončila koncom roka 2023 a dotkla sa tisícov pracovných miest; región má vlastný Akčný plán transformácie. Presun peňazí tam pomôže obnove, no spomalí silnejšie okresy Trenčín, Nové Mesto a Považská Bystrica.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Cesty a mosty",
    "q": "Má kraj obmedziť granty na kultúru, šport a podujatia, aby zrýchlil opravy ciest a mostov?",
    "w": "Kraj spravuje takmer 1 480 km ciest II. a III. triedy a v roku 2026 plánuje rekordných 83 miliónov eur kapitálových investícií najmä do ciest, škôl a nemocníc. Obmedzenie grantov na kultúru, šport a podujatia uvoľní ďalšie peniaze na cesty, zasiahne však stovky malých obecných projektov.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Nemocnice",
    "q": "Má kraj zveriť svoje nemocnice jednému súkromnému prevádzkovateľovi, ak ich oddlží a zmodernizuje?",
    "w": "Kraj je zriaďovateľom nemocníc v Bojniciach, Považskej Bystrici a Myjave, ktoré potrebujú investície. Súkromný prevádzkovateľ prinesie kapitál a oddlženie, kraj však stratí časť priamej kontroly nad zdravotnou starostlivosťou pre takmer 600-tisíc obyvateľov.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Stredné školy",
    "q": "Má kraj zlúčiť strednú školu s málo žiakmi, ak ušetrené peniaze dá na lepšie vybavenie škôl v tom istom okrese?",
    "w": "Kraj je zriaďovateľom desiatok stredných škôl, ktoré navštevuje približne 33-tisíc žiakov. Zlúčenie malej školy zníži náklady a zlepší vybavenie zvyšných škôl, menšie mesto však príde o školu, prácu a dostupnosť vzdelávania.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Autobusová doprava",
    "q": "Má kraj udržať málo využívané spoje do malých obcí Hornej Nitry, aj za cenu menej spojov medzi väčšími mestami?",
    "w": "Kraj objednáva prímestskú autobusovú dopravu cez systém IDS PLUS pre takmer 600-tisíc obyvateľov v 9 okresoch. Priame spoje do malých obcí sú dôležité pre ľudí bez auta, najmä seniorov a študentov, uberajú však kapacitu na frekventovaných trasách medzi mestami.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Moc a funkcie",
    "q": "Má byť predseda kraja zároveň poslancom parlamentu, ak tvrdí, že obe funkcie zvláda?",
    "w": "Doterajší predseda kraja Jaroslav Baška je zároveň poslancom Národnej rady. Dve funkcie môžu zvýšiť vplyv a prístup kraja k štátu, kritici však tvrdia, že kraj s takmer 600-tisíc obyvateľmi potrebuje plnohodnotného predsedu, nie politika na dve stoličky.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Školstvo a personálne nominácie",
    "q": "Má župan rešpektovať víťaza konkurzu na riaditeľa školy aj vtedy, keď s ním politicky nesúhlasí?",
    "w": "Kraj vymenúva riaditeľov desiatok svojich stredných škôl. Spor je, či má rozhodnúť výsledok odborného výberového konania, alebo aj politická dôvera zriaďovateľa.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Nemocnice a štát",
    "q": "Má župan verejne odmietnuť rozhodnutie vlády, ktoré obmedzí krajskú nemocnicu, aj keď vládu tvoria jeho partneri?",
    "w": "Rozhodnutia štátu ovplyvnia oddelenia a dostupnosť starostlivosti v krajských nemocniciach v Bojniciach, Považskej Bystrici a Myjave. Otvorený odpor župana voči vláde zvýši tlak, no môže zhoršiť spoluprácu pri financovaní.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Lekári v okresoch",
    "q": "Má kraj dávať lekárom náborové príspevky a lacnejšie priestory v okresoch s málo ambulanciami?",
    "w": "V okresoch ako Myjava, Bánovce nad Bebravou či Partizánske chýbajú lekári a obyvateľstvo starne. Náborové príspevky a lacnejšie priestory prilákajú ambulancie, sú však dlhodobým výdavkom kraja.",
    "a": {
      "baska": "agree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Odborné školstvo",
    "q": "Má kraj viac prispôsobiť odborné školy potrebám firiem v automobilovom a strojárskom priemysle?",
    "w": "Priemysel je najväčším zamestnávateľom kraja a firmy dlhodobo hlásia nedostatok technikov. Užšie napojenie škôl na priemysel pomôže absolventom nájsť prácu v regióne, môže však obmedziť širšie vzdelanie a pripravenosť na nové odbory ako IT.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Integrovaná doprava",
    "q": "Má kraj zaviesť jeden spoločný lístok na autobusy a vlaky, aj keď si to vyžiada vyššiu dotáciu z rozpočtu kraja?",
    "w": "Kraj už integruje dopravu cez spoločnosť IDS PLUS a nedávno spustil aj priame spojenie so Zlínom. Jeden spoločný lístok na autobusy a vlaky by prestupy ešte zjednodušil, v riedko osídlených oblastiach ho však využije málo ľudí a dotovaná prevádzka bude drahšia.",
    "a": {
      "baska": "agree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Krajské organizácie",
    "q": "Má nový predseda vymeniť vedenie krajských organizácií, ktoré nemajú výsledky, aj za cenu nestability?",
    "w": "Kraj riadi desiatky organizácií — stredné školy, tri nemocnice, správu ciest aj 12 kultúrnych inštitúcií. Výmena vedenia tých neúspešných môže priniesť výkon a zodpovednosť, hrozí však politizácia a prerušenie rozbehnutých projektov.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Sociálne služby",
    "q": "Má kraj presunúť peniaze z veľkých pobytových zariadení do domácej starostlivosti a malých komunitných zariadení pre seniorov?",
    "w": "Kraj prevádzkuje centrá sociálnych služieb pre seniorov a ľudí so znevýhodnením, na voľné miesta sa čaká. Domáca a komunitná starostlivosť sa viac podobá bežnému životu a môže byť lacnejšia, nie každý však môže zostať doma a menej pobytových miest predĺži čakanie.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Investori a pôda",
    "q": "Má kraj v územnom pláne odmietať priemysel a logistiku na kvalitnej poľnohospodárskej pôde, aj keď prinesú prácu?",
    "w": "Kotliny pozdĺž Váhu a Nitry patria k úrodnej pôde kraja. Priemysel a logistika prinesú prácu a príjmy, zastavaná úrodná pôda sa však ťažko vracia. Kraj cez územný plán ovplyvňuje, kde sa smie stavať.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Veľkí investori",
    "q": "Má kraj podmieniť podporu veľkého investora tým, že prispeje na dopravu či odborné školy, ktoré využije?",
    "w": "Nový veľký investor vytvorí prácu, no zaťaží cesty, autobusy a odborné školy. Podmienka, aby prispel na infraštruktúru, ktorú využije, chráni rozpočet kraja, môže však investora odradiť inam.",
    "a": {
      "baska": "agree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Transparentnosť",
    "q": "Má krajské zastupiteľstvo znovu schváliť každý veľký projekt, ktorý zdražie o viac než 10 %?",
    "w": "Kraj v roku 2026 investuje 83 miliónov eur a veľké stavby často zdražejú. Opätovné schválenie každého projektu, ktorý prekročí rozpočet o viac než 10 %, zvýši kontrolu poslancov, môže však spomaliť výstavbu aj riešenie havárií.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Audit kraja",
    "q": "Má nový župan dať nezávislý audit veľkých projektov a zmlúv súčasného vedenia kraja?",
    "w": "Kraj spravuje majetok a investície za desiatky miliónov eur ročne. Nezávislý audit veľkých projektov a zmlúv posilní dôveru a kontrolu, no môže pôsobiť ako politická vojna proti predchodcovi.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Zadlženie a investície",
    "q": "Má si kraj vziať nový úver, ak inak nestihne opraviť najhoršie cesty, mosty a školy?",
    "w": "Kraj plánuje v roku 2026 kapitálové investície 83 miliónov eur, potreby na cestách, mostoch a školách sú však vyššie. Úver obnovu zrýchli, zároveň však zvýši splátky a zúži rozpočet kraja v ďalších rokoch.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Voda a sucho",
    "q": "Má kraj investovať do zadržiavania vody a zelene pri svojich cestách, školách a nemocniciach ako ochrany pred suchom a horúčavami, aj keď to uberie z opráv ciest?",
    "w": "Trenčiansky kraj čoraz častejšie strieda sucho a prívalové zrážky; rieky Váh, Nitra aj Myjava zažívajú výkyvy. Kraj môže na svojich pozemkoch, pri cestách a budovách zadržiavať vodu a vysádzať zeleň proti horúčavám a záplavám, tieto peniaze však uberajú z opráv takmer 1 480 km ciest a mostov, ktoré sú miestami v zlom stave.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Energetika a krajina",
    "q": "Má kraj vo svojich stanoviskách podporovať veľké veterné parky v kraji, aj keď proti nim vystupujú niektoré dotknuté obce?",
    "w": "Slovensko má takmer žiadne veterné elektrárne a štát vytipoval akceleračné zóny aj v Trenčianskom kraji. Veterné parky prinášajú čistú energiu a príjmy, zasahujú však do krajiny a časť obcí je proti. Kraj cez svoje stanoviská a územný plán ich môže podporiť, alebo sa postaviť za odporujúce obce.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Transformácia Hornej Nitry",
    "q": "Má kraj obmedziť podporu tradičných priemyselných odborov na Hornej Nitre a presunúť peniaze do IT, energetiky a zdravotníctva?",
    "w": "Po ukončení ťažby uhlia (2023) región mení smerovanie a čerpá eurofondy z Akčného plánu transformácie hornej Nitry. Presun podpory z tradičného strojárstva do IT, energetiky a zdravotníctva dá mladým perspektívu, rýchly odklon však môže oslabiť odvetvia, ktoré tam stále zamestnávajú.",
    "a": {
      "baska": "disagree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Cyklodoprava",
    "q": "Má kraj pokračovať v rozširovaní Vážskej cyklomagistrály, aj keď sú v zlom stave cesty a mosty II. a III. triedy?",
    "w": "Vážska cyklomagistrála má prepojiť mestá pozdĺž Váhu a kraj postupne buduje jej úseky. Podporuje bezpečnú cyklodopravu a turizmus, časť ľudí však považuje opravy takmer 1 480 km ciest II. a III. triedy za naliehavejšie.",
    "a": {
      "baska": "agree",
      "svitkova": "agree"
    }
  },
  {
    "t": "Kultúra v regiónoch",
    "q": "Má kraj presunúť viac kultúrnych dotácií z Trenčína do menších okresov, aj keď tam príde menej divákov?",
    "w": "Kraj je zriaďovateľom 12 kultúrnych organizácií — múzeí, galérií, knižníc a hvezdární. Presun väčšej časti dotácií z Trenčína do menších okresov zlepší dostupnosť kultúry, sústredenie v centrách však prináša vyššiu návštevnosť a lepšie zázemie.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Kontinuita vs. zmena",
    "q": "Má Trenčiansky kraj po troch volebných obdobiach Jaroslava Bašku pokračovať v doterajšom smerovaní?",
    "w": "Jaroslav Baška vedie kraj od roku 2013 a opäť kandiduje. Zástancovia poukazujú na dokončené projekty a rast majetku kraja, kritici tvrdia, že po dlhých rokoch jednej moci treba nový štýl a väčšiu kontrolu.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  },
  {
    "t": "Cestovný ruch",
    "q": "Má kraj výraznejšie investovať do regionálneho cestovného ruchu (hrady, kúpele, Bojnice, Čičmany), aj keď tie isté peniaze chýbajú na cesty a nemocnice?",
    "w": "Cestovný ruch v kraji zastrešuje Krajská organizácia cestovného ruchu Trenčín región; ťahákmi sú Trenčiansky a Bojnický hrad, kúpele Trenčianske Teplice či čičmianske drevenice. Väčšie investície do ich propagácie a zázemia môžu priniesť prácu a príjmy do regiónov, konkurujú však financovaniu ciest a nemocníc.",
    "a": {
      "baska": "agree",
      "svitkova": "disagree"
    }
  }
];
