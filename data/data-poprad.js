// ── Volebná kalkulačka 2026 — POPRAD ──
// Otázky pre kandidátov na primátora mesta Poprad.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['poprad_primator'] = [
  {id:'danko',  name:'Anton Danko',  party:'Nezávislý, úradujúci primátor',          color:'#e63946', url:'https://www.sdankom.sk/'},
  {id:'kralik', name:'Jozef Králik', party:'Nezávislý kandidát (podporovaný PSK)',   color:'#2196F3', url:'https://jozefkralik.sk/'}
];

// ── Otázky: Primátor Popradu ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.poprad_primator = [

  {
    t:'Doprava',
    q:'Má primátor urobiť z riešenia dopravných zápch v centre Popradu svoju hlavnú prioritu, aj keď to bude znamenať roky dopravných obmedzení?',
    w:'Rekonštrukcia mosta na Štefánikovej ulici a hlavných ciest I/18 a I/66 od roku 2025 spôsobila v Poprade veľké dopravné zápchy. Uzávierky majú trvať až do roku 2026. Ide o problém, ktorý sa dotýka prakticky každého vodiča aj cestujúceho vlakom.',
    a:{danko:'agree', kralik:'agree'}
  },
  {
    t:'Mestský majetok',
    q:'Aqua City bolo kedysi mestské kúpalisko. Po predaji súkromníkovi je vstupné drahé. Má primátor rokovať o zvýhodnenej cene pre Popradčanov alebo o spätnom odkúpení podielu mesta?',
    w:'Predaj mestského kúpaliska súkromnému prevádzkovateľovi viedol k výraznému zdraženiu vstupného. Mnohí Popradčania si dnes návštevu Aqua City nemôžu dovoliť. Mesto môže žiadať zľavy pre trvalých obyvateľov alebo skúmať možnosti návratu k spoluvlastníctvu.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má primátor regulovať krátkodobé prenájmy bytov (napríklad cez Airbnb) v obytných domoch, aby chránil trvalých nájomníkov pred rastúcimi cenami?',
    w:'Poprad je turistické mesto a časť bytov slúži na krátkodobé prenájmy pre návštevníkov Tatier. To znižuje počet bytov dostupných pre ľudí, ktorí chcú v meste bývať dlhodobo, a tlačí ceny nájmov nahor. Regulácia by mohla časť týchto bytov vrátiť na bežný trh.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Cestovný ruch',
    q:'Má primátor uprednostniť potreby trvalých obyvateľov Popradu pred záujmami turistov, keď sú v konflikte?',
    w:'Poprad je vstupnou bránou do Tatier. Turizmus prináša peniaze, ale zvyšuje ceny bývania, hluk aj nápor na dopravu. Rozhodnutia primátora ukážu, či dáva prednosť záujmom turistov alebo obyvateľov, ktorí v meste žijú celý rok.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Poprad výrazne klesol v rebríčku transparentnosti slovenských miest. Má primátor do dvoch rokov dostať mesto späť medzi 20 najtransparentnejších samospráv?',
    w:'Rebríček transparentnosti hodnotí otvorenosť mesta pri zverejňovaní zmlúv, tendrov, grantov či majetku. Poprad kedysi patril medzi lepšie samosprávy, no za posledné roky výrazne klesol. Cieľ vrátiť sa do prvej dvadsiatky je merateľný a kontrolovateľný.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Doprava',
    q:'Má primátor pokračovať v budovaní cyklotrás, aj keď to obmedzí parkovacie miesta alebo jazdné pruhy pre autá?',
    w:'Poprad v posledných rokoch buduje nové cyklotrasy, napríklad smerom do Svitu. Každá nová trasa však potrebuje priestor, ktorý sa často berie autám alebo parkovacím miestam. Rozhodnutie ukáže, či mesto dáva prednosť autám alebo ľuďom.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Verejný priestor',
    q:'Má mesto dokončiť veľkú prestavbu námestia svätého Egídia za asi 14 miliónov eur, aj keď mestský príspevok jeden milión eur zaťaží rozpočet?',
    w:'Rekonštrukcia centrálneho námestia je najväčšou investíciou posledných rokov. Projekt má podporiť turizmus aj kvalitu verejného priestoru, no časť obyvateľov si myslí, že peniaze mali ísť skôr do škôl alebo bývania.',
    a:{danko:'agree', kralik:'disagree'}
  },
  {
    t:'Bývanie',
    q:'Má mesto postaviť štartovacie nájomné byty pre mladé rodiny, aj keby sa muselo zadlžiť?',
    w:'Ceny bytov v Poprade patria medzi najvyššie v regióne. Mladé rodiny si často nemôžu dovoliť vlastné bývanie a odchádzajú do iných miest. Mestské štartovacie byty by mohli pomôcť, ale vyžadujú si úver alebo presun peňazí z iných projektov.',
    a:{danko:'agree', kralik:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Popradský mesačník platia daňovníci. Má chváliť primátora takmer vo všetkom, alebo písať aj o tom, čo sa mestu nedarí?',
    w:'Mestské noviny a web sú financované z rozpočtu mesta. Kritici tvrdia, že dnes slúžia hlavne na prezentáciu primátora a jeho tímu. Otázkou je, či majú mestské médiá informovať nezávisle o dianí v meste, aj keď to znamená kritiku vedenia.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Doprava',
    q:'Má primátor zlepšiť mestskú hromadnú dopravu tak, aby bola reálnou alternatívou k autu, aj keby to zvýšilo dotácie z rozpočtu?',
    w:'MHD v Poprade prepája sídliská a centrum, no spoje a intervaly často ľuďom nevyhovujú. Lepšia MHD znamená vyššie náklady, ale môže znížiť počet áut v meste.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Doprava',
    q:'Má primátor postaviť parkovacie domy na sídliskách, aj keď to bude stáť milióny eur?',
    w:'Sídliská Juh, Západ a centrum trpia dlhodobo nedostatkom parkovacích miest. Primátor Danko už skôr hovoril o potrebe parkovacích domov. Ich výstavba by však výrazne zaťažila mestský rozpočet.',
    a:{danko:'agree', kralik:'agree'}
  },
  {
    t:'Cestovný ruch',
    q:'Má primátor aktívne lobovať za nové letecké linky z letiska Poprad-Tatry, aj keď letisko nevlastní mesto?',
    w:'Letisko Poprad-Tatry zaznamenalo v posledných rokoch rekordný počet cestujúcich a nové linky. Letisko patrí Prešovskému kraju, nie mestu. Aj tak môže primátor rokovať s leteckými spoločnosťami a krajom o nových spojoch, ktoré privedú turistov do Popradu.',
    a:{danko:'agree', kralik:'neutral'}
  },
  {
    t:'Školy',
    q:'Má primátor dať opravu a modernizáciu škôl a škôlok pred ďalšími veľkými prestížnymi projektmi?',
    w:'Budovy škôl v Poprade sú na mnohých miestach zastarané. Niekoľko kandidátov v minulosti hovorilo, že školy by mali mať prednosť pred reprezentatívnymi projektmi, ktoré sú viditeľné pre turistov.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Životné prostredie',
    q:'Poprad má málo stromov a zelene. Má primátor každý rok záväzne vysadiť aspoň o 5 percent viac stromov a zelene ako rok predtým?',
    w:'Poprad má v porovnaní s inými mestami podobnej veľkosti relatívne málo parkov a stromov. Nový mestský park vznikol aj vďaka eurofondom, ale bez jasných cieľov môže zeleň opäť zaostávať.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Cestovný ruch',
    q:'Poprad žije turisticky hlavne v zime a v lete. Má primátor podporovať podujatia a služby, ktoré privedú turistov do mesta aj na jar a jeseň?',
    w:'Veľká časť turistov prichádza do Tatier v zime na lyžovanie a v lete na túry. Mimo sezóny je mesto aj okolité strediská často poloprázdne. Celoročný turizmus môže priniesť viac peňazí pre miestne firmy, ale vyžaduje investície do programov a služieb.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Má primátor obmedziť počet herní a stávkových kancelárií v meste, aj keď to zníži príjmy z daní?',
    w:'Hazardné hry prinášajú mestu dane z prevádzky, ale zároveň zvyšujú riziko závislostí. Mnohé mestá na Slovensku prijali pravidlá, ktoré herne výrazne obmedzili. Poprad by mohol ísť rovnakou cestou.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Životné prostredie',
    q:'Má primátor trvať na prísnej kontrole emisií z priemyselných firiem v Poprade, aj keď to môže odradiť nových investorov?',
    w:'Obyvatelia niektorých častí mesta dlhodobo poukazujú na znečistené ovzdušie a hluk z priemyselných prevádzok. Prísnejšie kontroly a limity môžu zlepšiť zdravie ľudí, ale môžu zneistiť firmy, ktoré by chceli do mesta prísť.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Financie',
    q:'Má primátor pri veľkých projektoch radšej čerpať eurofondy, aj keď to znamená prísnu externú kontrolu každého projektu?',
    w:'Poprad postavil nový park za približne 14 miliónov eur, z veľkej časti z európskych peňazí. Primátor Danko často hovorí aj o projektoch bez eurofondov. Eurofondy prinášajú viac kontroly a papierovačiek, ale šetria peniaze z mestského rozpočtu.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Energia',
    q:'Má primátor inštalovať solárne panely na mestské budovy a školy, aj keď sa investícia vráti až o niekoľko rokov?',
    w:'Solárne panely môžu znížiť účty mesta za elektrinu, ale ich inštalácia je drahá. Návratnosť investície je dlhá. Pre mesto, ktoré dlhodobo šetrí, ide o rozhodnutie medzi krátkodobou úsporou a dlhodobým ziskom.',
    a:{danko:'neutral', kralik:'agree'}
  },
  {
    t:'Sociálne',
    q:'Má primátor budovať komunitné centrá pre seniorov v každej časti mesta, aj keď to prinesie trvalé náklady na ich prevádzku?',
    w:'Populácia v Poprade starne. Centrum pre seniorov v jednej časti mesta nemusí stačiť. Sieť menších komunitných centier by umožnila stretávanie a aktivity aj starším ľuďom na sídliskách, ale mesto by muselo platiť ich prevádzku.',
    a:{danko:'agree', kralik:'neutral'}
  },
  {
    t:'Školy',
    q:'Má primátor sprístupniť školské ihriská a areály verejnosti aj po vyučovaní a cez víkendy, aj keď to zvýši náklady na údržbu?',
    w:'Mesto v posledných rokoch vybudovalo nové športové areály pri školách, napríklad pri ZŠ Komenského. Ak budú otvorené aj mimo vyučovania, poslúžia deťom z celého sídliska, ale bude treba platiť za ich údržbu a dohľad.',
    a:{danko:'agree', kralik:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Má primátor rozšíriť kamerový systém a posilniť mestskú políciu, aj keď to zaťaží rozpočet mesta?',
    w:'V turistickom meste sa denne pohybuje veľa ľudí. Viac kamier a silnejšia mestská polícia môžu pomôcť pri prevencii kriminality, ale stoja peniaze. Otázkou je, či Poprad potrebuje viac dohľadu, alebo skôr komunitný prístup.',
    a:{danko:'agree', kralik:'neutral'}
  },
  {
    t:'Samospráva',
    q:'Má primátor dať obyvateľom každej časti mesta priamo do rúk 5 percent mestského rozpočtu, o ktorých použití rozhodnú hlasovaním?',
    w:'Participatívny rozpočet umožňuje ľuďom priamo rozhodovať o časti mestských peňazí. Pri rozpočte Popradu by 5 percent mohlo znamenať približne 2 milióny eur ročne. Mesto by tak muselo rešpektovať rozhodnutia obyvateľov, aj keď s nimi vedenie nesúhlasí.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Samospráva',
    q:'Má primátor každý rok verejne zhodnotiť, čo z predvolebného programu splnil a čo nie, s konkrétnymi číslami a termínmi?',
    w:'Anton Danko vedie Poprad s krátkou prestávkou takmer dve desaťročia. Bez pravidelného vyhodnocovania programových sľubov obyvatelia nevedia, čo sa podarilo a čo ostalo len na papieri. Ročné hodnotenie by zlepšilo kontrolu nad vedením mesta.',
    a:{danko:'disagree', kralik:'agree'}
  },
  {
    t:'Samospráva',
    q:'Má primátor aktívne lobovať za záujmy Popradu v Prešovskom samosprávnom kraji, aj keď to môže zhoršiť vzťahy s krajskými politikmi?',
    w:'Poprad patrí pod Prešovský kraj, ktorý rozhoduje o cestách, letisku aj stredných školách. Primátor môže na kraj vyvíjať tlak a žiadať viac peňazí pre svoje mesto, no tým si môže zhoršiť vzťahy s krajským vedením.',
    a:{danko:'agree', kralik:'agree'}
  }

];
