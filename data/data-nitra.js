// ── Volebná kalkulačka 2026 — NITRA + NITRIANSKY KRAJ ──
// Obsahuje voľby: primátor/primátorka Nitry a predseda/predsedníčka NSK.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor / Primátorka Nitry ──
window.VAA_DATA.candidates['nitra_primator'] = [
  {id:'hattas',name:'Marek Hattas',party:'Tím kraj Nitra / PS / SaS / KDH / Demokrati / Hnutie Slovensko (úradujúci primátor)',color:'#1E4E9D',url:'https://hattasprimatorom.sk'},
  {id:'uhrikova',name:'Zuzana Uhríková',party:'Republika / SNS',color:'#795548',url:'https://www.facebook.com/ing.zuzana.uhrikova/'},
  {id:'krsiak',name:'Igor Kršiak',party:'Nezávislý',color:'#2F6F8F',url:'https://igorkrsiak.sk/'},
  {id:'illes',name:'Marek Illéš',party:'Smer-SD / Hlas-SD',color:'#C3112B',url:'https://www.marekilles.sk'}
];

// ── Kandidáti: Predseda / Predsedníčka NSK ──
window.VAA_DATA.candidates['nitra_vuc'] = [
  {id:'varga',name:'Henrich Varga',party:'Tím Kraj Nitra / SaS / KDH / Demokrati / Hnutie Slovensko / Magyar Fórum / OKS',color:'#1E4E9D',url:'https://www.facebook.com/varga.henrich/'},
  {id:'becik',name:'Branislav Becík',party:'Hlas-SD / Smer-SD / Republika (úradujúci predseda)',color:'#C3112B',url:'https://branislavbecik.sk/'},
  {id:'csenger',name:'Tibor Csenger',party:'Maďarská aliancia',color:'#1A6B8A',url:'https://madarska-aliancia.sk/tibor-csenger'}
];

// ── Otázky: Primátor / Primátorka Nitry ──
window.VAA_DATA.questions.nitra_primator = [
  {t:'Parkovanie',
   q:'Má Nitra pokračovať v rozširovaní regulovaného parkovania aj do ďalších obytných štvrtí?',
   w:'Regulované parkovanie už funguje vo vybraných častiach mesta a od júla 2026 mesto skrátilo spoplatnenie centrálnej zóny z 18:00 na 16:00. Rozširovanie zvýhodňuje rezidentov, ale obmedzuje časť bezplatného parkovania.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'agree',illes:'agree'}},

  {t:'Cesty a chodníky',
   q:'Má mesto odložiť nové veľké projekty, kým sa výrazne nezlepší stav ciest a chodníkov?',
   w:'Rozpočet Nitry na rok 2026 bol pôvodne schválený vo výške približne 134,1 mil. € a mesto zároveň schválilo úver 12,1 mil. € na investície. Väčší dôraz na opravy zlepší každodennú infraštruktúru, ale môže odsunúť nové rozvojové projekty.',
   a:{hattas:'disagree',uhrikova:'agree',krsiak:'agree',illes:'agree'}},

  {t:'Kreatívne centrum',
   q:'Má mesto ďalej financovať prevádzku Kreatívneho centra aj vtedy, ak bude každoročne potrebovať peniaze z mestského rozpočtu?',
   w:'Vybudovanie Kreatívneho centra stálo približne 15,5 mil. €. Po rozpočtovom opatrení č. 5 má jeho program na rok 2026 upravené výdavky približne 553-tisíc €. Centrum podporuje kultúru a kreatívny priemysel, no vytvára aj trvalé prevádzkové náklady.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'disagree',illes:'neutral'}},

  {t:'Bezpečnosť',
   q:'Má mesto zvýšiť počet mestských policajtov a kamerový dohľad, aj keby menej peňazí zostalo na sociálnu prevenciu?',
   w:'Mestská polícia rieši poriadok, dopravu aj priestupky vo verejnom priestore a mesto prevádzkuje kamerový systém. Viac policajtov a kamier môže zvýšiť dohľad a rýchlosť zásahu, ale prináša trvalé personálne a prevádzkové náklady.',
   a:{hattas:'disagree',uhrikova:'agree',krsiak:'agree',illes:'agree'}},

  {t:'Doprava',
   q:'Má mesto pri rekonštrukcii ulíc rušiť parkovacie miesta alebo jazdné pruhy, ak tým vytvorí bezpečnejšie cyklotrasy, priestor pre MHD alebo zeleň?',
   w:'Priestor v existujúcich uliciach je obmedzený a nové cyklotrasy, autobusové opatrenia či zeleň sa niekedy dajú vytvoriť len zmenou priestoru pre autá. Výsledkom môže byť bezpečnejšia ulica, ale menej parkovania alebo nižšia kapacita pre autá.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'disagree',illes:'disagree'}},

  {t:'Nájomné bývanie',
   q:'Má mesto kúpiť 220 nájomných bytov na Tehelnej aj za cenu nového úveru?',
   w:'Nitra pripravuje nadobudnutie projektu BD Tehelná s 220 nájomnými bytmi a v marci 2026 zastupiteľstvo riešilo úver na ich budúcu kúpu. Projekt výrazne rozšíri mestské bývanie, ale vytvorí nový dlh a dlhodobé prevádzkové záväzky.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'agree',illes:'agree'}},

  {t:'Priority mesta',
   q:'Má mesto obmedziť investície do revitalizácií námestí, klimatických opatrení a komunitných projektov, ak potrebuje viac peňazí na cesty, chodníky a parkovanie?',
   w:'Mesto súčasne financuje technickú infraštruktúru aj verejné priestory, zeleň a komunitné projekty. Presun peňazí k cestám a parkovaniu môže urýchliť riešenie každodenných problémov, ale spomalí projekty zamerané na kvalitu verejného priestoru.',
   a:{hattas:'disagree',uhrikova:'agree',krsiak:'agree',illes:'agree'}},

  {t:'Údržba mesta',
   q:'Má mesto zvýšiť rozpočet na čistenie ulíc, zeleň a bežnú údržbu aj za cenu odloženia časti nových investícií?',
   w:'Rozpočet mesta zahŕňa údržbu miestnych ciest, verejných priestranstiev, zelene aj ďalšie komunálne služby. Vyššie bežné výdavky môžu zlepšiť každodenný stav mesta, no zostane menej peňazí na nové investície.',
   a:{hattas:'agree',uhrikova:'agree',krsiak:'agree',illes:'agree'}},

  {t:'Vzťah k vláde',
   q:'Je pre Nitru výhodou, ak má primátor blízke politické väzby na vládu, aj za cenu menšej politickej nezávislosti mesta?',
   w:'Časť kandidátov má podporu vládnych alebo opozičných strán. Dobré vzťahy s vládou môžu pomôcť pri presadzovaní štátnych investícií a zdrojov, ale môžu oslabiť vnímanie primátora ako nezávislého obhajcu záujmov mesta.',
   a:{hattas:'disagree',uhrikova:'disagree',krsiak:'agree',illes:'agree'}},

  {t:'Zeleň',
   q:'Má mesto chrániť existujúce stromy aj vtedy, keď tým zdražie alebo skomplikuje dopravný či stavebný projekt?',
   w:'Nitra uvádza približne 140 m² mestskej zelene na obyvateľa. Zachovanie vzrastlých stromov pomáha s tieňom a prehrievaním, ale môže meniť trasovanie stavby, počet parkovacích miest alebo cenu projektu.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'neutral',illes:'disagree'}},

  {t:'Parkovanie',
   q:'Majú ísť príjmy z parkovania prednostne na nové parkovacie miesta namiesto MHD, chodníkov a cyklodopravy?',
   w:'Regulované parkovanie vytvára mestu príjem, ktorý môže vrátiť do mobility rôznymi spôsobmi. Nové parkovacie miesta pomôžu vodičom priamo, kým investície do MHD, chodníkov a cyklodopravy môžu znižovať dopyt po jazde autom.',
   a:{hattas:'disagree',uhrikova:'agree',krsiak:'agree',illes:'agree'}},

  {t:'Kultúra',
   q:'Má Nitra garantovať kultúre najmenej 2 % bežných výdavkov mesta, aj keby menej zostalo na cesty a šport?',
   w:'Po rozpočtovom opatrení č. 5 má samotný program Odboru kultúry upravené výdavky približne 935-tisíc € a Kreatívne centrum ďalších asi 553-tisíc €. Pevná hranica 2 % by kultúre garantovala stabilnejší podiel, ale obmedzila voľnosť pri iných výdavkoch.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'disagree',illes:'disagree'}},

  {t:'Rozpočet',
   q:'Má mesto pokračovať vo vysokom investičnom tempe aj za cenu ďalších úverov?',
   w:'Nitra schválila na rok 2026 rozpočet približne 134,1 mil. € a úver 12,1 mil. € na investície. Úvery umožňujú realizovať projekty skôr, ale zvyšujú splátky a obmedzujú časť budúcich rozpočtov.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'disagree',illes:'agree'}},

  {t:'MHD',
   q:'Má mesto zvýšiť dotáciu MHD, ak tým dokáže zaviesť častejšie spoje na hlavných linkách?',
   w:'Po rozpočtovom opatrení č. 5 je na mestskú verejnú dopravu v roku 2026 vyčlenených približne 8,7 mil. € plus vyúčtovanie minulého roka. Častejšie spoje môžu zvýšiť atraktivitu MHD, ale znamenajú vyššie pravidelné výdavky mesta.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'neutral',illes:'agree'}},

  {t:'Sociálne bývanie',
   q:'Má mesto vyhradiť časť nových nájomných bytov pre ľudí v bytovej núdzi, aj keď sa tým predĺži čakanie ostatných záujemcov?',
   w:'Projekt na Tehelnej má priniesť 220 nájomných bytov. Vyhradenie časti kapacity domácnostiam v bytovej núdzi môže pomôcť najzraniteľnejším, ale zníži počet bytov dostupných ostatným žiadateľom.',
   a:{hattas:'agree',uhrikova:'neutral',krsiak:'neutral',illes:'agree'}},

  {t:'Šport',
   q:'Má mesto postaviť novú Arénu Nitra aj vtedy, ak bude musieť výrazne prispieť z vlastného rozpočtu?',
   w:'Mesto v apríli 2026 vyhlásilo architektonickú súťaž na multifunkčnú Arénu Nitra pre šport, koncerty a ďalšie podujatia. Zároveň kupuje tréningovú hokejovú halu za 2,4 mil. € bez DPH. Nová aréna môže rozšíriť možnosti mesta, ale bude súťažiť o investičné zdroje s inými projektmi.',
   a:{hattas:'neutral',uhrikova:'agree',krsiak:'agree',illes:'agree'}},

  {t:'Kontrola investícií',
   q:'Ak veľký mestský projekt zdražie o viac než 10 %, majú o jeho pokračovaní znovu hlasovať poslanci?',
   w:'Pri stavebných projektoch môžu cenu zvýšiť nečakané práce alebo drahší materiál. Nové hlasovanie pri náraste nad 10 % zvýši kontrolu nad peniazmi, ale môže projekt zdržať. Hranica 10 % je návrh otázky, nie dnešné pravidlo Nitry.',
   a:{hattas:'agree',uhrikova:'agree',krsiak:'agree',illes:'neutral'}},

  {t:'Mestský majetok',
   q:'Má mesto radšej predať nevyužívané budovy a pozemky a peniaze investovať, než ich dlhodobo prenajímať?',
   w:'Predaj prinesie väčšiu sumu okamžite a odstráni náklady na správu. Prenájom ponechá majetok vo vlastníctve mesta a môže prinášať pravidelný príjem mnoho rokov.',
   a:{hattas:'neutral',uhrikova:'neutral',krsiak:'agree',illes:'neutral'}},

  {t:'Kúpalisko',
   q:'Má mať rekonštrukcia mestského kúpaliska prednosť pred menšími investíciami v obytných štvrtiach?',
   w:'Obnova mestského kúpaliska patrí medzi projekty pripravované pre ďalšie obdobie. Väčšia modernizácia môže zlepšiť rekreačnú infraštruktúru pre celé mesto, ale rovnaké investičné kapacity potom chýbajú pri menších projektoch v jednotlivých štvrtiach.',
   a:{hattas:'neutral',uhrikova:'disagree',krsiak:'neutral',illes:'agree'}},

  {t:'Participácia',
   q:'Majú obyvatelia priamo rozhodovať o 1 % bežných výdavkov mesta cez participatívny rozpočet?',
   w:'Nitra už využíva participatívne a komunitné mechanizmy pri menších projektoch. Presun 1 % bežných výdavkov pod priame rozhodovanie obyvateľov by ich vplyv výrazne zvýšil, ale túto časť rozpočtu by už nemohlo voľne rozdeliť vedenie a zastupiteľstvo.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'agree',illes:'disagree'}},

  {t:'Zóny 30',
   q:'Má mesto rozšíriť zóny 30 aj do ďalších obytných štvrtí, aj keď tým spomalí automobilovú dopravu?',
   w:'Nitra už používa zóny s maximálnou rýchlosťou 30 km/h ako nástroj na zvýšenie bezpečnosti a podporu pokojnejších ulíc. Rozšírenie môže znížiť riziko nehôd a hluk, ale predĺžiť čas jazdy autom.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'disagree',illes:'disagree'}},

  {t:'Kasárne pod Zoborom',
   q:'Má mesto investovať do premeny Kasární pod Zoborom a vytvoriť verejný a rekreačný areál aj za cenu odloženia menších investícií v iných častiach Nitry?',
   w:'Kasárne pod Zoborom sú rozsiahly bývalý vojenský areál, ktorý mesto rieši v projekte URBACT GreenPlace spolu s 9 ďalšími európskymi partnermi. V areáli už vzniklo Kreatívne centrum rekonštrukciou 4 budov. Ďalšia obnova môže priniesť komunitné, rekreačné a zelené priestory, ale vyžaduje viacročné investície.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'agree',illes:'agree'}},

  {t:'Poradie opráv',
   q:'Má mesto určovať poradie opráv ulíc podľa technického stavu aj vtedy, keď poslanci alebo obyvatelia žiadajú inú prioritu?',
   w:'Mesto každoročne rozhoduje medzi desiatkami požiadaviek na opravy ciest, chodníkov a výtlkov. Pevné kritériá podľa technického stavu a bezpečnosti obmedzia politické zásahy, ale môžu odsunúť problém, ktorý obyvatelia konkrétnej štvrte považujú za naliehavejší.',
   a:{hattas:'agree',uhrikova:'neutral',krsiak:'agree',illes:'agree'}},

  {t:'Rozdelenie investícií',
   q:'Má mesto pri investíciách uprednostniť projekty s najvyšším merateľným prínosom pred rovnomerným rozdelením peňazí medzi mestské časti?',
   w:'Nitra má viacero mestských častí s rozdielnou veľkosťou a potrebami. Projekt využívaný tisíckami ľudí môže priniesť väčší celkový efekt, no dôraz na počet používateľov, bezpečnosť či úspory môže znamenať, že menšie časti dostanú investície menej často.',
   a:{hattas:'neutral',uhrikova:'disagree',krsiak:'agree',illes:'neutral'}},

  {t:'Amfiteáter pod Zoborom',
   q:'Má mesto investovať do veľkej obnovy Amfiteátra pod Zoborom aj vtedy, ak tým odloží menšie projekty v mestských častiach?',
   w:'Amfiteáter pod Zoborom má kapacitu približne 11 000 miest a mesto pripravuje jeho ďalšiu modernizáciu vrátane zázemia, toaliet a technických rozvodov. Obnova môže zachovať významný kultúrny areál, ale bude súťažiť o peniaze s menšími investíciami v obytných štvrtiach.',
   a:{hattas:'agree',uhrikova:'disagree',krsiak:'neutral',illes:'agree'}}
];

// ── Otázky: Predseda / Predsedníčka Nitrianskeho kraja ──
window.VAA_DATA.questions.nitra_vuc = [
  {t:'Cesty a mosty',
   q:'Má Nitriansky kraj dať v najbližších rokoch prioritu opravám ciest II. a III. triedy, aj keby to spomalilo iné investície?',
   w:'NSK spravuje 498 km ciest II. triedy a viac než 1 500 km ciest III. triedy a v roku 2026 dáva na ich opravy vyše 11 mil. €. Opravy ciest sú pre voličov základným meradlom výkonu župy, no zároveň konkurujú investíciám do škôl, sociálnych služieb a zdravotníctva.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Nemocnice',
   q:'Má kraj pokračovať v silnej finančnej podpore svojich nemocníc aj vtedy, ak to bude dlhodobo veľmi náročné na rozpočet?',
   w:'V Nitrianskom kraji pôsobí 11 nemocníc a kraj sa na dostupnosti zdravotnej starostlivosti podieľa aj cez svoje polikliniky. Regionálne zariadenia čelia tlaku na financovanie aj personál; pre časť voličov je ich podpora absolútna priorita, iní zdôrazňujú potrebu tvrdšieho manažmentu.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Verejná doprava',
   q:'Má kraj zachovať autobusové spojenia aj v menej vyťažených oblastiach, aj keď sú ekonomicky stratové?',
   w:'Prímestskú dopravu v kraji zabezpečuje ARRIVA, od leta 2026 má platiť jednotný cestovný lístok a seniori nad 63 rokov cestujú za 30 centov. Pre menšie obce je verejná doprava kľúčová pre dochádzanie do školy, práce aj k lekárovi, no zachovanie stratových spojov zaťažuje rozpočet kraja.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj prioritne investovať do modernizácie stredných škôl a odborného vzdelávania podľa potrieb trhu práce?',
   w:'Kraj je zriaďovateľom približne 55 stredných škôl a v roku 2026 dáva na ich rekonštrukcie vyše 3,2 mil. €. Väčšie prepojenie škôl s praxou môže zvýšiť zamestnateľnosť absolventov a udržať mladých v regióne, vyžaduje však dlhodobé a nákladné investície.',
   a:{varga:'agree',becik:'agree',csenger:'agree'}},

  {t:'Rozpočet',
   q:'Má kraj v neistých časoch hospodáriť opatrnejšie a obmedziť nové ambiciózne projekty, ak by hrozilo vyššie zadlženie?',
   w:'Kraj hospodári so stovkami miliónov eur a spravuje majetok naprieč 7 okresmi, preto musí vyvažovať rozvoj a finančnú stabilitu. Opatrnosť znižuje riziko budúcich problémov, ale môže spomaliť investície, ktoré časť regiónov očakáva.',
   a:{varga:'agree',becik:'disagree',csenger:'neutral'}},

  {t:'Sociálne služby',
   q:'Má Nitriansky kraj viac investovať do zariadení sociálnych služieb a starostlivosti o seniorov aj za cenu menšieho priestoru pre iné oblasti?',
   w:'Zariadenia sociálnych služieb v pôsobnosti kraja sa dnes starajú približne o 3 300 klientov a starnutie populácie na ne vytvára rastúci tlak. Kraj kapacity rozširuje (napr. v Zlatých Moravciach či Dvoroch nad Žitavou), no viac miest znamená trvalé náklady na priestory a personál.',
   a:{varga:'agree',becik:'agree',csenger:'agree'}},

  {t:'Cesty a mosty',
   q:'Má kraj dávať prednosť bezpečnostne rizikovým úsekom a mostom pred novými rozvojovými dopravnými projektmi?',
   w:'Kraj spravuje 534 mostov a časť z nich je v zlom technickom stave – len v samotnej Nitre je 8 mostov v zlom stave a jeden je úplne zatvorený. Pri infraštruktúre sa tak rozhoduje medzi havarijnými opravami a politicky atraktívnejšími novými projektmi.',
   a:{varga:'agree',becik:'agree',csenger:'agree'}},

  {t:'Zdravotníci',
   q:'Má kraj financovať silnejšie motivačné programy pre lekárov, sestry a ďalší personál, aby ich udržal vo svojich zariadeniach?',
   w:'Regionálne nemocnice a polikliniky dlhodobo zápasia s nedostatkom lekárov a sestier, čo priamo ohrozuje dostupnosť starostlivosti. Motivačné programy stoja peniaze, no bez personálu sa kvalita a dostupnosť zdravotnej starostlivosti v regióne zhoršuje.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Vidiek a regióny',
   q:'Má kraj cielene podporovať služby a projekty v menších mestách a na vidieku, aby tak brzdil odchod mladých ľudí?',
   w:'Nitriansky kraj má približne 678 000 obyvateľov v 7 okresoch a dlhodobo mu ubúdajú mladí ľudia. Kraj podporuje vidiek aj cez programy ako LEADER (125-tisíc € v roku 2026); takáto podpora býva drahšia a menej efektívna než sústredenie do centier, no má zásadný sociálny význam.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Eurofondy',
   q:'Má byť pre kraj prioritou pripraviť čo najviac projektov na eurofondy, aj keď si to vyžiada vyššie spolufinancovanie z vlastného rozpočtu?',
   w:'Externé zdroje z eurofondov dokážu výrazne posunúť školy, nemocnice, cesty aj sociálne zariadenia kraja. Vyžadujú však pripravené projekty, kvalitné riadenie a vlastné spolufinancovanie z rozpočtu kraja.',
   a:{varga:'agree',becik:'agree',csenger:'neutral'}},

  {t:'Stredné školy',
   q:'Má kraj zachovať aj menšie školy v slabších regiónoch, aj keď sú z dlhodobého hľadiska menej efektívne?',
   w:'Kraj je zriaďovateľom približne 55 stredných škôl a rozhoduje sa medzi dostupnosťou vzdelania v slabších regiónoch a racionalizáciou siete. Menšie školy sú sociálne aj dopravne dôležité, no ich prevádzka býva v prepočte na žiaka drahšia.',
   a:{varga:'disagree',becik:'agree',csenger:'agree'}},

  {t:'Energetika',
   q:'Má kraj urýchliť energetické úspory vo svojich budovách, aj keď sa investície vrátia až o niekoľko rokov?',
   w:'Približne 55 škôl, nemocnice a sociálne zariadenia tvoria veľkú časť majetku aj prevádzkových nákladov kraja a energetické úspory sú súčasťou rekonštrukcií škôl (v roku 2026 vyše 3,2 mil. €). Úspory sú menej viditeľné než nové stavby, ale dlhodobo uvoľňujú peniaze na služby.',
   a:{varga:'agree',becik:'agree',csenger:'agree'}},

  {t:'Vzťah k vláde',
   q:'Je pre kraj výhodnejšie, ak má župan silnejšie politické väzby na vládu, aj keď to môže oslabiť jeho nezávislosť?',
   w:'Dobré vzťahy s vládou môžu priniesť jednoduchší prístup k zdrojom a rýchlejšie projekty – súčasného župana Becíka podporujú Hlas-SD aj Smer-SD. Zároveň to však vyvoláva otázku, či kraj háji svoje záujmy dostatočne samostatne.',
   a:{varga:'disagree',becik:'agree',csenger:'disagree'}},

  {t:'Verejná doprava',
   q:'Má kraj viac investovať do koordinácie autobusov, vlakov a integrovaných dopravných riešení?',
   w:'Kraj od leta 2026 spúšťa jednotný cestovný lístok na regionálnych linkách ARRIVA a pripravuje lepšie prepojenie autobusov a vlakov. Integrovaná doprava zjednodušuje cestovanie a znižuje závislosť od áut, vyžaduje však organizáciu, techniku a dlhodobé financovanie.',
   a:{varga:'agree',becik:'agree',csenger:'agree'}},

  {t:'Nemocnice',
   q:'Ak by si to vyžadovala situácia, mal by kraj pristúpiť aj k nepopulárnym zmenám v riadení nemocníc?',
   w:'Manažment 11 nemocníc a polikliník v kraji sa dotýka pacientov, zamestnancov aj celých regiónov. Tvrdšie zásahy môžu stabilizovať systém, no prinášajú vysoké politické aj sociálne náklady.',
   a:{varga:'agree',becik:'agree',csenger:'disagree'}},

  {t:'Kultúra',
   q:'Má kraj pokračovať v podpore kultúrnych inštitúcií a regionálneho dedičstva aj v čase finančného tlaku?',
   w:'Kraj spravuje kultúrne inštitúcie ako Staré divadlo Karola Spišáka v Nitre, Jókaiho divadlo v Komárne či Tribečskú knižnicu v Topoľčanoch a v roku 2026 dáva na kultúru, cestovný ruch a pamiatky takmer 1,6 mil. €. Pri rozpočtovom tlaku býva kultúra zraniteľnejšia než technická infraštruktúra.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj skôr rozširovať vlastné zariadenia sociálnych služieb než sa spoliehať na neverejných poskytovateľov?',
   w:'Kraj poskytuje sociálne služby vo vlastných zariadeniach (spolu asi 3 300 klientov) a zároveň sa spolieha aj na neverejných a cirkevných poskytovateľov. Každý model má iné finančné aj hodnotové dôsledky.',
   a:{varga:'disagree',becik:'agree',csenger:'neutral'}},

  {t:'Cestovný ruch',
   q:'Má Nitriansky kraj viac investovať do cestovného ruchu a značky regiónu, aj keď výsledky takých projektov sa prejavia až neskôr?',
   w:'Kraj s termálnymi prameňmi a vínnymi oblasťami buduje regionálnu značku a v roku 2026 smeruje časť z takmer 1,6 mil. € aj do cestovného ruchu a pamiatok. Turizmus môže priniesť pracovné miesta, no jeho výnos je menej priamy a ťažšie merateľný než opravy ciest či budov.',
   a:{varga:'neutral',becik:'agree',csenger:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj investovať do rozšírenia kapacít zdravotníckych škôl a odborov, ak je dopyt po zdravotníckom personáli vysoký?',
   w:'Stredné zdravotnícke školy v Nitre a Nových Zámkoch kraj modernizuje a rieši rozšírenie ich kapacít, keďže dopyt po zdravotníckom personáli je vysoký. Otázka spája školstvo s praktickým problémom nedostatku ľudí v zdravotníctve.',
   a:{varga:'agree',becik:'agree',csenger:'agree'}},

  {t:'Regionálna rovnováha',
   q:'Má vedenie kraja garantovať vyrovnanejšie rozdelenie investícií medzi okresy, aj keby to nebolo vždy ekonomicky najefektívnejšie?',
   w:'Nitriansky kraj spája 7 rozdielnych okresov – od Nitry po Komárno, Levice či Topoľčany – a pocit nerovnomerného rozvoja sa objavuje pravidelne. Otázka ukazuje, či má mať prioritu rovnováha medzi okresmi, alebo koncentrácia tam, kde investície prinesú najrýchlejší efekt.',
   a:{varga:'agree',becik:'neutral',csenger:'agree'}},

  {t:'Životné prostredie',
   q:'Má kraj viac podporovať ekologickejšie projekty a nízkouhlíkové riešenia aj vtedy, ak ich časť voličov nepovažuje za prioritu?',
   w:'Kraj môže ovplyvniť najmä svoje budovy (energetické úspory), dopravu a cyklotrasy, do ktorých v roku 2026 tiež investuje. Ide o spor medzi bezprostrednou užitočnosťou a dlhodobou udržateľnosťou, ktorú časť voličov nepovažuje za prioritu.',
   a:{varga:'agree',becik:'neutral',csenger:'disagree'}},

  {t:'Transparentnosť',
   q:'Má kraj zverejňovať zrozumiteľné odôvodnenia veľkých investícií a zmlúv ešte pred ich schválením?',
   w:'Regionálna politika býva menej čitateľná než komunálna a chyby sú drahé – nezrovnalosti vo verejnom obstarávaní stáli kraj vyše 4,5 mil. €. Zverejňovanie odôvodnení veľkých investícií a zmlúv môže zvýšiť kontrolu aj dôveru, no predĺžiť časť rozhodovania.',
   a:{varga:'agree',becik:'disagree',csenger:'agree'}},

  {t:'Participácia',
   q:'Má kraj viac zapájať starostov, primátorov a verejnosť do tvorby priorít, aj keby bolo rozhodovanie pomalšie?',
   w:'O prioritách kraja rozhoduje 54-členné zastupiteľstvo spolu s vedením župy; širšie zapájanie starostov, primátorov a verejnosti môže zvýšiť legitimitu rozhodnutí. Zároveň však môže spomaliť rozhodovanie a oslabiť schopnosť presadzovať jasný smer.',
   a:{varga:'agree',becik:'disagree',csenger:'agree'}},

  {t:'Kontrola výkonu',
   q:'Má predseda kraja pravidelne zverejňovať prehľad splnených a nesplnených sľubov a merateľných výsledkov?',
   w:'Kraj hospodári so stovkami miliónov eur a spravuje cesty, približne 55 škôl, sociálne zariadenia aj kultúrne inštitúcie, no pre voliča je jeho výkon menej čitateľný než komunálny. Verejný účet splnených a nesplnených sľubov by mohol zvýšiť tlak na zodpovednosť a kontrolu.',
   a:{varga:'agree',becik:'neutral',csenger:'agree'}},

  {t:'Štýl vedenia',
   q:'Má byť župan skôr tvrdý správca rozpočtu a služieb než politický líder väčších vízií?',
   w:'Župan riadi úrad, ktorý spravuje cesty, mosty, približne 55 škôl a sociálne aj kultúrne zariadenia v 7 okresoch. Jeden typ lídra sa sústreďuje na stabilitu a každodenné fungovanie, druhý na ambície, reformy a širšie strategické smerovanie.',
   a:{varga:'agree',becik:'disagree',csenger:'neutral'}}
];

