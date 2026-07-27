// ── Volebná kalkulačka 2026 — MICHALOVCE ──
// Upravujte len tento súbor pre otázky a kandidátov mesta MICHALOVCE.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}
// Odpovede sú pracovné odhady z verejných zdrojov. Kandidátom treba umožniť ich potvrdiť alebo opraviť.

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

window.VAA_DATA.candidates['michalovce_primator'] = [
  {id:'dufinec',   name:'Miroslav Dufinec',   party:'Smer-SD / Hlas-SD / Sme rodina / SNS / SMS (úradujúci primátor)',         color:'#e63946', url:'https://www.dufinec.sk'},
  {id:'sibal',     name:'Erik Sibal',          party:'Nezávislý kandidát',                             color:'#2196F3', url:''},
  {id:'vidovenec', name:'Miroslav Vidovenec',  party:'PS / Demokrati / SaS / KDH / Hnutie Slovensko', color:'#4caf50', url:''},
  {id:'carny',     name:'Juraj Čarný',         party:'Nezávislý kandidát',                   color:'#ff9800', url:''}
];

window.VAA_DATA.questions.michalovce_primator = [
  {
    t:'Doprava',
    q:'Má primátor verejne kritizovať vládu, ak do roka neposkytne záväzný termín výstavby D1 na Zemplín?',
    w:'Diaľnicu D1 na Zemplín pripravuje a financuje štát, nie mesto. Primátor však môže verejne tlačiť na vládu aj vtedy, keď ju tvoria jeho politickí partneri. Spor je medzi straníckou spoluprácou a otvoreným tlakom za záujmy regiónu.',
    a:{dufinec:'disagree', sibal:'agree', vidovenec:'agree', carny:'agree'}
  },
  {
    t:'Doprava',
    q:'Majú mať opravy ciest a chodníkov prednosť pred veľkými novými projektmi?',
    w:'Stav ciest a chodníkov patrí medzi časté sťažnosti obyvateľov. Rozpočet nestačí na všetko naraz, preto musí vedenie vyberať medzi každodennou infraštruktúrou a väčšími viditeľnými investíciami.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral', carny:'agree'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto zaviesť platené parkovanie v centre, aj keby to skomplikovalo krátke návštevy obchodov a úradov?',
    w:'Na mestských parkoviskách v centre sa dnes parkuje bezplatne. Spoplatnenie môže zlepšiť dostupnosť miest a priniesť príjem do rozpočtu, ale zvýši náklady návštevníkom centra.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Cyklodoprava',
    q:'Má mesto budovať bezpečné cyklotrasy aj vtedy, keď tým ubudne časť parkovacích miest?',
    w:'Mesto pripravuje cyklistické prepojenia vrátane trasy Hollého – Okružná – Štefánikova. Oddelené cyklotrasy zvyšujú bezpečnosť, no v uliciach často zaberú priestor autám alebo parkovaniu.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'MHD',
    q:'Má mesto viac podporiť MHD, aj keď to bude vyžadovať vyššiu dotáciu z rozpočtu?',
    w:'Mesto pripravuje bezemisnú autobusovú dopravu, nové vozidlá a úpravy zastávok. Vyššia kvalita MHD môže znížiť závislosť od áut, ale zvýši pravidelné výdavky mesta.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Bezpečnosť',
    q:'Má mesto zvýšiť počet peších hliadok, aj keby muselo prijať ďalších mestských policajtov?',
    w:'Pešie hliadky môžu lepšie poznať problémy v centre a na sídliskách. Vyžadujú však viac policajtov a trvalo vyššie náklady na mzdy, výstroj a prevádzku.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'agree', carny:'agree'}
  },
  {
    t:'Životné prostredie',
    q:'Má mesto odmietnuť veterný park pri Michalovciach, aj keby investor ponúkol obciam pravidelné finančné kompenzácie?',
    w:'Pri Michalovciach sa diskutuje o veľkom veternom parku. Môže priniesť čistú energiu a príjmy, no obyvatelia sa obávajú zásahu do krajiny, hluku a vplyvu na okolité obce. Konečné povoľovanie nie je iba v rukách mesta.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Bývanie',
    q:'Má mesto vyhradiť štvrtinu nových nájomných bytov pre lekárov, sestry a učiteľov?',
    w:'Zvýhodnené bývanie môže pomôcť udržať profesie, ktoré mesto potrebuje. Vyhradenie 25 % bytov by však predĺžilo čakanie ostatných žiadateľov o mestské bývanie.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'agree', carny:'neutral'}
  },
  {
    t:'Mladé rodiny',
    q:'Má mesto uprednostniť štartovacie nájomné byty pre mladé rodiny pred jednorazovými príspevkami?',
    w:'Michalovce strácajú mladých obyvateľov. Štartovacie byty riešia bývanie dlhodobo, ale stoja viac a pomôžu menšiemu počtu rodín než lacnejšie jednorazové príspevky.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'agree', carny:'neutral'}
  },
  {
    t:'Seniori',
    q:'Má mať na terénnu opatrovateľskú službu nárok každý senior, ktorý o ňu požiada, aj keď to zvýši trvalé mzdové výdavky mesta?',
    w:'Michalovce majú starnúcu populáciu a rastúci dopyt po opatrovateľských službách. Nárok pre každého žiadateľa by pomohol seniorom zostať doma, no znamenal by trvalý nárast počtu opatrovateliek a mzdových výdavkov, ktoré mesto platí každý rok.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'neutral', carny:'agree'}
  },
  {
    t:'Bambusky',
    q:'Má mesto v Bambuskách investovať viac do vzdelávania a komunitnej práce než do ďalších hliadok?',
    w:'V Bambuskách sa stretávajú problémy bývania, školskej dochádzky a bezpečnosti. Komunitná práca rieši príčiny dlhodobo, kým viac hliadok dokáže rýchlejšie reagovať na porušovanie pravidiel.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree', carny:'neutral'}
  },
  {
    t:'Hospodárstvo',
    q:'Má mesto poskytnúť svoje pozemky, úľavy a podporu skôr miestnym firmám než veľkým investorom?',
    w:'Miestne firmy už v meste pôsobia a zamestnávajú obyvateľov. Veľkí investori môžu vytvoriť viac pracovných miest, no často žiadajú pozemky, infraštruktúru alebo inú podporu mesta.',
    a:{dufinec:'disagree', sibal:'agree', vidovenec:'agree', carny:'agree'}
  },
  {
    t:'Hospodárstvo',
    q:'Má mesto odmietnuť podporu investora s nízkymi mzdami, aj keby vytvoril stovky pracovných miest?',
    w:'Veľký investor môže rýchlo vytvoriť veľa pracovných miest, no nízke mzdy nemusia udržať mladých ľudí v regióne. Odmietnutie podpory môže znamenať, že pracovné miesta vzniknú inde.',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Mestský majetok',
    q:'Má mesto radšej predať nevyužitý majetok než si brať nový úver?',
    w:'Predaj budov alebo pozemkov môže financovať opravy bez ďalšieho dlhu. Mesto však príde o majetok, ktorý môže mať v budúcnosti vyššiu hodnotu alebo nové využitie.',
    a:{dufinec:'neutral', sibal:'disagree', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Verejné zákazky',
    q:'Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou, aj keď budú projekty drahšie?',
    w:'Najnižšia cena nemusí znamenať najlepšie riešenie. Pri cestách, školách alebo verejných priestoroch môže byť dôležitá životnosť, bezpečnosť, servis a budúce prevádzkové náklady.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree', carny:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má zastupiteľstvo znovu schválovať projekt, ak sa predraží a jeho cena sa zvýši o viac než 10 %?',
    w:'Nové hlasovanie zvyšuje kontrolu poslancov nad predražením. Môže však spomaliť práce a predĺžiť rozhodovanie aj v prípadoch, keď má navýšenie objektívne dôvody.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree', carny:'agree'}
  },
  {
    t:'Kultúra a šport',
    q:'Má mesto dať viac peňazí do kultúry a aktivít pre mladých, aj keď ubudne z financií na športovú infraštruktúru?',
    w:'Hokej a futbal majú v Michalovciach silné postavenie. Kultúra, kluby a priestory pre mladých však tiež ovplyvňujú kvalitu života a rozhodnutie mladých zostať v meste.',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'agree', carny:'neutral'}
  },
  {
    t:'Šport',
    q:'Má mesto uprednostniť druhú ľadovú plochu pred menšími športoviskami na sídliskách?',
    w:'Druhá ľadová plocha by pomohla hokeju a športovým klubom. Menšie športoviská na sídliskách by každý deň využíval širší okruh detí, rodín a rekreačných športovcov.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'disagree', carny:'neutral'}
  },
  {
    t:'Energia',
    q:'Má mesto zatepliť školy a mestské budovy, aj keď sa úspory vrátia až po rokoch?',
    w:'Mesto pripravuje energetické opatrenia na školách a mestských budovách. Vyššia počiatočná investícia môže postupne znížiť spotrebu energie a prevádzkové výdavky.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'neutral', carny:'agree'}
  },
  {
    t:'Cestovný ruch',
    q:'Má mesto investovať do turizmu okolo Zemplínskej Šíravy, aj keď samotná Šírava neleží v meste?',
    w:'Návštevníci Šíravy využívajú obchody, hotely, dopravu a služby v Michalovciach. Spoločná propagácia a projekty s okolitými obcami však znamenajú menej peňazí na potreby priamo v uliciach mesta.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Územný rozvoj',
    q:'Má mať mesto hlavného architekta, aj keď to znamená ďalší platený odborný post?',
    w:'Hlavný architekt môže koordinovať nové stavby, ulice a verejné priestory. Znamená však ďalší platený post a jeho prínos závisí od toho, aký vplyv mu vedenie mesta dá.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree', carny:'neutral'}
  },
  {
    t:'Spolupráca s Ukrajinou',
    q:'Má mesto vytvoriť spoločné podnikateľské a vzdelávacie centrum s Užhorodom aj z vlastných peňazí?',
    w:'Michalovce ležia blízko Užhorodu. Spoločné centrum môže podporiť firmy, školy a cezhraničné projekty, no vyžadovalo by vlastné peniaze mesta a výsledky by sa nemuseli prejaviť rýchlo.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'neutral', carny:'agree'}
  },
  {
    t:'Financie',
    q:'Má sa mesto zaviazať, že počas funkčného obdobia neprekročí súčasnú úroveň zadlženia (cca 22 % ročných príjmov), aj keby to spomalilo opravy a rozvoj?',
    w:'Ku koncu roka 2025 malo mesto úverový dlh približne 10,8 milióna eur, teda okolo 22 % ročných bežných príjmov — hlboko pod zákonným limitom 60 %. Záväzok neprekročiť túto úroveň by chránil rozpočet pred ďalším zaťažením, no obmedzil by možnosť financovať veľké opravy či investície úverom (napríklad kúpu Chemkostav arény).',
    a:{dufinec:'disagree', sibal:'agree', vidovenec:'neutral', carny:'neutral'}
  },
  {
    t:'Výstavba',
    q:'Má mesto odmietnuť veľký developerský projekt, ak investor neprispeje na cesty, parkovanie alebo školy?',
    w:'Nová výstavba môže priniesť byty a pracovné miesta, ale zvýši tlak na dopravu a verejné služby. Tvrdá podmienka chráni mestský rozpočet, no môže investora odradiť.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree', carny:'agree'}
  },
  {
    t:'Športový majetok',
    q:'Má mesto odkúpiť Chemkostav arénu za 3,6 milióna eur, aj keby muselo obmedziť iné investície?',
    w:'Mesto rokuje o odkúpení Chemkostav arény, ktorá poskytuje zázemie pre Iuventu a európske súťaže. Kúpna cena je 3,6 milióna eur a mesto by zároveň prevzalo budúce náklady na prevádzku a údržbu.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'neutral', carny:'neutral'}
  }
];
