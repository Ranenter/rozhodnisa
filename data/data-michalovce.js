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
    q:'Má primátor tlačiť na vládu, aby čo najskôr postavila diaľnicu D1 na Zemplín, aj keď jej výstavba nie je priamo v rukách mesta?',
    w:'Úsek diaľnice D1 smerom na Michalovce a k ukrajinskej hranici má asi 72 km. Záväzný termín výstavby neexistuje a hovorí sa o roku 2030, no ani to nie je isté. Bez diaľnice zostáva región dopravne izolovaný a firmy radšej mieria inam. Primátor túto cestu nepostaví sám, ale môže robiť verejný tlak na vládu.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má primátor zverejňovať zápisnice z rokovaní vedenia mesta do 48 hodín, aj keď v nich budú nepohodlné nezhody?',
    w:'Väčšina slovenských miest zverejňuje zápisnice s týždenným až mesačným oneskorením, niektoré vôbec. Rýchle zverejnenie dáva občanom prehľad o tom, o čom a ako sa rozhoduje. Na druhej strane to vytvára tlak na otvorenosť tam, kde sa dnes radšej mlčí.',
    a:{dufinec:'disagree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má mesto postaviť nájomné byty pre mladých lekárov, učiteľov a sestry, aj keby sa muselo zadlžiť?',
    w:'Za 20 rokov odišlo z Michaloviec vyše 4 500 ľudí. Jedným z dôvodov je bývanie: prenájom dvojizbového bytu stojí v meste 480 až 900 eur mesačne, kým mzdy na východe Slovenska sú výrazne nižšie ako priemer SR. Mesto dnes nemá žiadny systém zvýhodnených bytov pre ľudí v kľúčových povolaniach.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Má primátor posilniť mestskú políciu a rozšíriť kamery v meste, aj keď to zaťaží rozpočet?',
    w:'Michalovce majú relatívne malú mestskú políciu a kamerový systém, ktorý podľa kritikov stále nezakrýva kľúčové miesta. Viac policajtov a kamier zvyšuje pocit bezpečia, no stojí peniaze, ktoré mestu chýbajú inde.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Hospodárstvo',
    q:'Má sa primátor sústrediť predovšetkým na pomoc existujúcim firmám a živnostníkom v meste, nie na lákanie nových investorov?',
    w:'Mesto môže míňať čas a peniaze dvoma smermi: zlepšovať podmienky pre firmy a živnostníkov, ktoré tu už sú a platia dane, alebo aktívne lákať väčších investorov zvonku s prísľubmi pozemkov a infraštruktúry. Len málokedy sa dá robiť oboje naraz rovnako dobre.',
    a:{dufinec:'disagree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Šport',
    q:'Má primátor dávať viac peňazí do kultúry a voľnočasových aktivít pre mladých, a menej do ďalšej športovej infraštruktúry?',
    w:'Kritici súčasného vedenia hovoria o tom, že mesto dáva príliš veľa peňazí do športu a málo do kultúry a priestorov pre mladých. To, kam peniaze idú, odráža hodnoty primátora a ukazuje, pre koho v praxi rozhoduje.',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Doprava',
    q:'Má primátor dať opravu ciest a chodníkov pred väčšími investičnými projektmi, aj keby to spomalilo rozvoj mesta ?',
    w:'Stav chodníkov a ciest patrí dlhodobo medzi najčastejšie sťažnosti ľudí v Michalovciach. Mestský rozpočet nestačí na oboje naraz, preto musí vedenie mesta vyberať.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto vyberať firmy aj podľa ich kvality a referencií, nielen podľa najnižšej ceny?',
    w:'Zákon umožňuje mestám vyberať dodávateľa podľa najnižšej ceny alebo podľa kombinácie ceny, kvality a referencií. Väčšina miest volí najnižšiu cenu, lebo je to najjednoduchšie. Výsledkom bývajú meškajúce opravy a nekvalitné práce, za ktoré mesto zaplatí viac.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Životné prostredie',
    q:'Má primátor urobiť všetko preto, aby sa pri Michalovciach nepostavilo 45 obrovských veterných turbín?',
    w:'Štátna firma JESS plánuje v okrese Michalovce postaviť až 45 veterných turbín vysokých do 266 metrov. Viac ako 90 percent ľudí v mestskej ankete je proti. Zastupiteľstvo vyjadrilo nesúhlas. Primátor nemôže výstavbu priamo zakázať, ale územný plán mesta môže rozhodovanie výrazne ovplyvniť.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Financie',
    q:'Má primátor predať nepotrebný mestský majetok (budovy, pozemky) a peniaze investovať do opráv infraštruktúry, aj keď sa tým mesto natrvalo vzdá majetku?',
    w:'Michalovce vlastnia rad budov a pozemkov, ktoré nevyužívajú alebo ich prenajímajú za symbolické nájomné. Predaj by jednorazovo priniesol peniaze na opravy bez zadlžovania. Na druhej strane, raz predaný majetok sa späť nezíska a jeho hodnota môže v budúcnosti rásť.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Samospráva',
    q:'Má primátor zmraziť odmeny poslancov zastupiteľstva na celé štyri roky, aj keď to môže odradiť šikovných ľudí kandidovať?',
    w:'Poslanci mestského zastupiteľstva dostávajú mesačné odmeny z mestského rozpočtu. Keď mesto šetrí na každom kroku, je otázka odmien za dobrovoľnú funkciu citlivá. Zmrazenie šetrí peniaze, ale môže znižovať záujem odborníkov kandidovať.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'neutral'}
  },
  {
    t:'Bývanie',
    q:'Má primátor vyčleniť časť mestských nájomných bytov výlučne pre lekárov, učiteľov a mestských zamestnancov, aby zabránil ich odchodu z mesta?',
    w:'Mestské nájomné byty sú dnes určené predovšetkým pre rodiny v sociálnej núdzi. Lekári, sestry či učitelia kritériá nesplnia, ale na trhu si byt často nedokážu dovoliť. Práve táto skupina najčastejšie odchádza za lepšími podmienkami do Košíc alebo Bratislavy.',
    a:{dufinec:'agree', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Samospráva',
    q:'Má primátor každý rok verejne povedať, čo z predvolebného programu splnil a čo nie, vrátane konkrétnych čísel?',
    w:'Väčšina primátorov na Slovensku zverejní pred voľbami program, ale potom ho nikdy systematicky nevyhodnotí. Ľudia tak nevedia, čo bolo splnené a čo nie. Pravidelné verejné vyhodnotenie by dalo voličom skutočný základ pre rozhodovanie.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Demografický pokles',
    q:'Má mesto vyplácať finančný príspevok mladým párom, ktoré sa do Michaloviec prisťahujú alebo tu zostanú, aj keď podobné programy inde priniesli len obmedzené výsledky?',
    w:'Michalovce strácajú v priemere okolo 400 obyvateľov ročne. Niektoré slovenské mestá zaviedli príspevky na bývanie pre mladých ako nástroj udržania obyvateľov, výsledky sú ale zmiešané. Kritici hovoria, že bez dobrých pracovných miest príspevky odliv nezastavia a peniaze sa minú bez efektu.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'neutral'}
  },
  {
    t:'Doprava',
    q:'Má primátor zaviesť platené parkovanie v centre a peniaze z neho použiť na výstavbu nových parkovacích miest?',
    w:'Michalovce majú bezplatné parkovanie od roku 2014. Áut medzitým výrazne pribudlo a centrum trpí nedostatkom miest. Mesto v roku 2024 oznámilo prípravu zmeny, no bez konkrétneho termínu. Platené parkovanie funguje vo väčšine slovenských miest a z príjmov financuje parkovacie plochy či domy.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Šport',
    q:'Má primátor postaviť tréningovú ľadovú halu pre HK Dukla Michalovce, aj keď bude musieť prispieť mestskými peniazmi?',
    w:'Michalovce sú jediné extraligové hokejové mesto na Slovensku s jediným zimným štadiónom. Mládež aj A-tím sa delia o jednu ľadovú plochu. HK Dukla je najviditeľnejší symbol mesta v celej krajine. Dufinec hovorí, že štát prisľúbil na halu výraznú podporu, no spoluúčasť mesta zostáva otvorená.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'neutral'}
  },
  {
    t:'Rómska komunita',
    q:'Má primátor rozšíriť programy pomoci rómskym deťom v školách a podporiť komunitné centrum v osade Bambusky, aj keď nie všetci obyvatelia mesta s tým súhlasia?',
    w:'Na okraji Michaloviec leží segregovaná rómska osada Bambusky. Európska únia tu v roku 2020 spolufinancovala komunitné centrum zamerané na vzdelávanie detí. Mesto tiež realizuje projekt na zapojenie rómskych detí do škôlok. Otázka je, či tieto programy rozšíriť, alebo pri napnutom rozpočte dať peniaze inam.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Energia',
    q:'Má primátor postupne znižovať náklady na energie v mestských budovách (školy, úrady, kultúrne domy), aj keď sa investícia vráti až o 10 až 15 rokov?',
    w:'Staré a zle zateplené budovy sú pre mestský rozpočet každoročnou záťažou. Zateplenie a moderné kúrenie dokážu náklady na energie znížiť o desiatky percent. Pre mesto, ktoré dlhodobo nemá dostatok peňazí, je to jedna z mála ciest, ako trvalo šetriť bez znižovania služieb.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'neutral'}
  },
  {
    t:'Sociálne',
    q:'Má mesto postaviť nový domov dôchodcov, aj keď je to drahšie ako rozšíriť opatrovateľskú službu priamo v domácnostiach seniorov?',
    w:'Podiel seniorov v Michalovciach narástol za 20 rokov z 8 na takmer 20 percent obyvateľov. Mestské zariadenia majú obmedzenú kapacitu. Nový domov dôchodcov rieši problém rýchlo a viditeľne, no opatrovateľská služba v domácnostiach je lacnejšia a väčšina seniorov ju uprednostňuje.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'disagree'}
  },
  {
    t:'Cestovný ruch',
    q:'Má primátor investovať mestské peniaze do rozvoja Zemplínskej šíravy ako turistickej destinácie, aj keď samotná nádrž leží mimo katastra Michaloviec?',
    w:'Zemplínska šírava je najbližšia veľká rekreačná plocha k mestu. V marci 2026 podpísal primátor Dufinec memorandum o spolupráci s krajom a 17 partnermi. Kraj investuje 3,1 milióna eur do novej promenády. Michalovce sa umiestňujú ako prirodzené zázemie šíravy, hotely a reštaurácie v meste profitujú z turistov. Kritici namietajú, že mestské peniaze majú riešiť problémy priamo v meste, nie na nádrži, nad ktorou mesto nemá správu.',
    a:{dufinec:'agree', sibal:'neutral', vidovenec:'disagree'}
  },
  {
    t:'Doprava',
    q:'Má primátor stavať cyklotrasy fyzicky oddelené od áut aj na sídliskách, aj keby to znamenalo menej parkovacích miest?',
    w:'Všetci kandidáti sľubujú cyklotrasy, no kľúčový rozdiel je v tom, či pôjde o fyzicky oddelenú trasu bezpečnú aj pre deti a seniorov, alebo len o namaľovanú čiaru na vozovke. Fyzicky oddelené trasy potrebujú odobrať priestor autám, čo je nepopulárne, ale v praxi výrazne zvyšuje počet cyklistov.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  },
  {
    t:'Samospráva',
    q:'Má primátor dať občanom právo záväzným hlasovaním zablokovať väčší mestský projekt, aj keď to môže spomaliť nevyhnutné rozhodnutia?',
    w:'Záväzné hlasovanie dáva ľuďom priamu moc, ale môže blokovať aj projekty, ktoré sú v záujme mesta ako celku. Niektoré mestá takto zastavili potrebné opravy, lebo sa miestni menšina postavila proti. Iné mestá vďaka participácii predišli drahým konfliktom. Kto má mať posledné slovo: primátor alebo obyvatelia?',
    a:{dufinec:'disagree', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Životné prostredie',
    q:'Má primátor zriadiť funkciu hlavného architekta mesta ako nezávislého odborníka, ktorý bude dohliadať na to, ako mesto vyzerá a rastie?',
    w:'Michalovce nemajú hlavného architekta. Bez takého odborného dohľadu sa mesto ťažko bráni chaotickej zástavbe alebo projektom, ktoré zhoršujú kvalitu verejného priestoru. Väčšina podobne veľkých slovenských miest túto funkciu má.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Majú mestskí policajti pravidelne chodiť pešo po konkrétnych štvrtiach a poznať miestnych ľudí a problémy, aj keď to bude stáť viac?',
    w:'Väčšina mestskej polície dnes hliadkuje v autách a reaguje len na oznámenia. Policajt, ktorý pozná svoju štvrť a jej ľudí, problémy rieši skôr a efektívnejšie. V menšom meste ako sú Michalovce by bol tento model dosiahnuteľnejší ako vo veľkých mestách.',
    a:{dufinec:'neutral', sibal:'neutral', vidovenec:'agree'}
  },
  {
    t:'Hodnoty',
    q:'Má primátor aktívne nadväzovať spoluprácu s ukrajinskými mestami ako napríklad Užhorod, aj keď výsledky sa prejavia až o niekoľko rokov?',
    w:'Michalovce ležia asi 60 km od Užhorodu. Geografická blízkosť a obnova Ukrajiny po vojne predstavujú príležitosť pre miestne firmy, školy aj kultúru. Nadviazanie skutočnej spolupráce si ale vyžaduje čas a politickú vôľu a výsledky nie sú viditeľné ihneď.',
    a:{dufinec:'neutral', sibal:'agree', vidovenec:'agree'}
  }
];
