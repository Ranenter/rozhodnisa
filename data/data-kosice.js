// ── Volebná kalkulačka 2026 — KOSICE ──
// Upravujte len tento súbor pre otázky a kandidátov mesta KOSICE.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['kosice_primator'] = [{id:'polac',name:'Jaroslav Polaček',party:'Nezávislý / KH2030',color:'#0097a7'},{id:'mudrak',name:'Martin Mudrák',party:'Progresívne Slovensko',color:'#64b5f6'},{id:'lorinc',name:'Ladislav Lörinc',party:'Košická strana',color:'#ffd166'}];
window.VAA_DATA.candidates['kosice_vuc'] = [
  {id:'trnka',  name:'Rastislav Trnka',   party:'Nezávislý (obžalovaný)',  color:'#78909c'},
  {id:'simko',  name:'Igor Šimko',        party:'Hlas-SD',                 color:'#e63946'},
  {id:'porvaz', name:'Marián Porvažník',  party:'Progresívne Slovensko',   color:'#64b5f6'},
  {id:'gurbal', name:'Lucia Gurbáľová',   party:'KDH',                     color:'#90caf9'},
  {id:'hirman', name:'Karel Hirman',      party:'Demokrati',               color:'#7b1fa2'},
];

// ── Otázky: Primátor / Primátorka ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.kosice_primator = [
  {t:'Spolupráca',     q:'Vadí ti, že primátor Košíc a župan KSK roky otvorene bojujú namiesto toho, aby spolupracovali?',
   info:'"Košická komunálna vojna" medzi vedením mesta a kraja brzdí desiatky projektov, blokuje spoločné financovanie z eurofondov a škodí obrazu mesta. Koalícia, ktorá by ukončila konflikty, je jednou z najcitovanejších tém kampane.',
   a:{polac:'disagree',mudrak:'agree',lorinc:'agree'}},

  {t:'Infraštruktúra', q:'Sú pre teba rozbitné cesty a chodníky v Košiciach dôležitejší problém ako veľké dopravné projekty?',
   info:'Košice majú jedny z najhorších ciest spomedzi slovenských miest. Každodenný problém stoviek tisíc obyvateľov kontrastuje s veľkými projektmi, ktoré sa otvoria až o roky — ak vôbec.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'Sovietsky pamätník', q:'Má mesto Košice aktívne presadzovať odstránenie kosákov a kladív z pamätníka Červenej armády na Námestí osloboditeľov, aj napriek zákonu, ktorý ochranu vojnových hrobov nedávno posilnil?',
   info:'Košické mestské zastupiteľstvo hlasovalo v novembri 2024 za preskúmanie premiestnenia alebo odstránenia pamätníka vojakov Sovietskej armády na Námestí osloboditeľov vrátane jeho komunistických symbolov. Poslanec NR SR Igor Šimko (Hlas-SD) — kandidát na župana KSK — následne v parlamente predložil a presadil novelu zákona o vojnových hroboch, ktorá posilňuje ochranu takýchto pamätníkov pred poškodením aj premiestnením. Zákon č. 125/1996 označuje komunistický režim za „zločinecký, nemorálny a protiprávny" — časť právnikov a verejnosti preto považuje zobrazovanie kosákov a kladív vo verejnom priestore za propagáciu komunizmu v rozpore s týmto zákonom. Za zachovanie pamätníka podpísalo petíciu viac ako 10 000 Košičanov, za odstránenie symbolov vyše 3 300.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'Zmena',          q:'Chceš nového primátora, aj keby to znamenalo spomalenie alebo prerušenie rozrobených projektov?',
   info:'Kontinuita je dôležitá pri veľkých projektoch (električka, rekonštrukcie), no "únavou moci" trpia aj inak dobrí politici. Je zmena pre zmenu hodnotná, alebo riziko?',
   a:{polac:'disagree',mudrak:'agree',lorinc:'agree'}},

  {t:'Bezpečnosť',     q:'Mal by primátor presadiť, aby mestskí policajti pravidelne pešo hliadkovali v štvrtiach a poznali miestnych obyvateľov — namiesto toho, aby sedeli v autách?',
   info:'Komunitná polícia, kde policajt pozná svoju štvrť a jej ľudí, je osvedčený model znižovania kriminality. Košice majú v rizikových oblastiach problém s viditeľnosťou a dôverou — nestačí viac kameier ani áut, potrebná je fyzická prítomnosť.',
   a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},

  {t:'Inovácie',       q:'Je pre teba dôležité, aby Košice aktívne priťahovali IT firmy, startupy a vedomostnú ekonomiku?',
   info:'Košice sa úspešne profilujú ako IT hub — Košice IT Valley má stovky firiem a tisíce pracovných miest. Primátor môže podporovať toto smerovanie inkubátormi, daňovými úľavami alebo spolupráca s TUKE.',
   a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},

  {t:'Korupcia',       q:'Chceš povinné zverejňovanie všetkých mestských zákaziek Košíc nad 5 000 € aj s odôvodnením?',
   info:'Transparentnosť zákaziek je základná podmienka dôvery verejnosti v správu mesta. V Košiciach boli zákazky opäť a opäť predmetom škandálov — povinné odôvodnenie by sťažilo klientelizmus.',
   a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},

  {t:'Kultúra',        q:'Malo by mesto Košice investovať viac do kultúry a využiť dedičstvo Európskeho hlavného mesta kultúry 2013?',
   info:'Košice investíciou do kultúry v roku 2013 zmenili svoju tvár. Kultúrna infraštruktúra potrebuje udržiavanie a rozvoj, no mnohí preferujú investície do "tvrdých" projektov — cesty, školy, mosty.',
   a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},

  {t:'Bývanie',        q:'Mal by magistrát Košíc stavať vlastné nájomné byty dostupné pre stredné vrstvy?',
   info:'Košice sa stali prvým mestom v SR, ktoré do štátneho programu nájomného bývania vstúpilo s vlastnými pozemkami — plánuje sa až 5 400 bytov počas desiatich rokov v spolupráci s rakúskym investorom a vládou Roberta Fica. Primátor Polaček spolupracoval s Ficom na tomto projekte napriek tomu, že PS je voči vládnej koalícii v opozícii. Korzár však upozornil, že mesto nafúklo deklarovaný počet bytov a pri realizácii na Jesenského ulici obišlo víťaza architektonickej súťaže. Ceny bytov v Košiciach medzitým rastú rýchlejšie ako mzdy, čo vyháňa mladých za prácou inam.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'LGBTQ+',         q:'Mal by primátor Košíc aktívne podporovať inkluzívne programy pre LGBTQ+ v školách a komunitných centrách?',
   info:'Košice sú konzervatívnejšie mesto ako Bratislava — primátor môže ovplyvniť kultúru inklúzie cez mestské granty, vzdelávacie programy a symbolické gesty. Toto je otázka hodnotovej odvahy vs. politickej opatrnosti.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'disagree'}},

  {t:'Rómske komunity',q:'Mal by magistrát Košíc aktívne a cielene zamestnávať obyvateľov Luníka IX na mestských pozíciách — v správe, údržbe a komunitných službách — ako súčasť integračnej politiky?',
   info:'Luník IX nie je len bytová kríza — je to aj kríza vylúčenia z ekonomiky mesta. Kým štát rieši energetickú chudobu a infraštruktúru, primátor môže otvoriť dvere mestského zamestnávania: cielene, nie ako charitu, ale ako verejnú politiku.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'neutral'}},

  {t:'Bývanie',        q:'Mal by primátor Košíc aktívne zónovať nové plochy a urýchliť stavbu nájomných bytov, aby mesto zvládlo príchod tisícov nových pracovníkov do závodu Volvo vo Valalikoch?',
   info:'Volvo plánuje spustiť výrobu v decembri 2026 a priamo zamestná 3 300 ľudí, s dodávateľmi až 12 000. Mesto sa zmluvne zaviazalo zabezpečiť bývanie a nové linky MHD. Nový územný plán bol schválený v júni 2025, no rýchlosť výstavby závisí od toho, ako aktívne primátor tlačí na developerov a stavia vlastné nájomné byty. Prvá bytovka v rámci štátneho programu má vyrásť na Jesenského ulici po víťazstve architektonickej súťaže — magistrát však čelí kritike, že deklarované počty bytov sú prehnané a postup výberu nebol transparentný.',
   a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},

  {t:'Lokálny patriotizmus',q:'Vadí ti, že Bratislava dominuje v štátnych investíciách a Košice sú chronicky podfinancované?',
   info:'Košičania dlhodobo vnímajú nerovnomerné rozdeľovanie štátnych zdrojov — väčšina eurofondov, ministerstiev a investícií smeruje do hlavného mesta. Primátor môže lobovať za väčší podiel, ale rozhoduje vláda.',
   a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},

  {t:'Doprava',        q:'Mal by primátor nariadiť nezávislý audit DPMK zameraný na korupciu a neefektivitu — a podmieňovať ďalšie dotácie mestu konkrétnymi výsledkami, nie len žiadosťami o viac peňazí?',
   info:'DPMK skončil rok 2024 so stratou takmer 830 000 €, napriek rastu tržieb. Autobusy a električky sú staré, spoje sa rušia pre poruchovosť. Problémom nie je nedostatok financií — ale netransparentné obstarávanie a riadenie. Primátor je akcionár DPMK a môže priamo požadovať výsledky.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'Participácia',   q:'Chceš, aby košickí občania priamo rozhodovali o časti mestského rozpočtu cez digitálne hlasovanie?',
   info:'Participatívny rozpočet bol skúšaný v rôznych slovenských mestách s rôznymi výsledkami. Zapája občanov, ale vyžaduje systematickú komunikáciu a dôveru, že ich hlasovanie skutočne niečo zmení.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'neutral'}},

  {t:'Podnikanie',     q:'Mal by magistrát zjednodušiť a urýchliť vydávanie stavebných povolení pre malé projekty?',
   info:'Stavebné konania v Košiciach trvajú roky — čo odstrašuje investorov a zdražuje projekty. Primátor môže reformovať vnútorné procesy na magistráte bez čakania na zmenu zákona.',
   a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},

  {t:'Školstvo',       q:'Mal by primátor Košíc zaviesť rozšírené mimoškolské aktivity zadarmo pre deti zo sociálne slabšieho prostredia?',
   info:'Záujmová činnosť po škole je pre mnohé rodiny finančne nedostupná. Mesto môže financovať krúžky, športové aktivity a doučovanie — čo znižuje nerovnosti v príležitostiach medzi deťmi.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'Bezpečnosť',     q:'Malo by mesto Košice financovať stacionárne zariadenie pre alkoholikov a drogovo závislých, aby ich dostalo z ulíc — a koordinovať s políciou aktívne hliadky v rizikových oblastiach?',
   info:'Problém bezdomovcov a závislých v centre Košíc a pri hlavnej stanici sa nerieši kamerami ani náhodným hliadkovaním. Stacionárne zariadenie s odbornou pomocou kombinované s cielenou terénnou prácou polície je model, ktorý funguje vo viacerých európskych mestách.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'Vízia',          q:'Je pre teba dôležitejšie, aby primátor Košíc bol dobrý manažér každodennej správy mesta ako veľký vizionár?',
   info:'Vizionári prinášajú zmenu, ale môžu zanedbávať dennodenné problémy. Dobrí správcovia udržujú mesto v chode, ale nemenia jeho charakter. Čo Košice teraz viac potrebujú?',
   a:{polac:'disagree',mudrak:'neutral',lorinc:'agree'}},

  {t:'Doprava',        q:'Chceš, aby Košice budovali cyklotrasy aj v obytných štvrtiach, nielen v centre?',
   info:'Cykloinfraštruktúra v Košiciach je sústredená do centra a na niekoľko hlavných ťahov. Rozšírenie do sídlisk by umožnilo každodenné cyklovanie — ale narušilo by zaužívané parkovacie návyky.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'neutral'}},

  {t:'Kultúra',        q:'Mal by magistrát Košíc finančne podporovať miestne festivaly a komunitné podujatia bez ohľadu na ich politické alebo hodnotové zameranie?',
   info:'Kultúrne granty by mali byť dostupné pre všetky legálne aktivity — bez ideologickej filtrácie. Primátor môže nastaviť transparentné kritériá hodnotenia, ktoré nepretláčajú žiadnu agendu.',
   a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},

  {t:'Korupcia',       q:'Chceš nezávislý etický ombudsman pre magistrát Košíc, na ktorého sa môžu zamestnanci aj občania anonymne sťažovať?',
   info:'Whistleblowing je dôležitý mechanizmus odhaľovania korupcie zvnútra. Etický ombudsman nezávislý od primátora mohol byť bariérou klientelizmu a tlaku na zamestnancov magistrátu.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'neutral'}},

  {t:'Transparentnosť',q:'Mal by primátor a poslanci mestského zastupiteľstva Košíc zmraziť svoje odmeny a platy po celé funkčné obdobie, kým mesto neodstráni rozpočtový deficit?',
   info:'Košice vstúpili v roku 2023 do krízového režimu. Primátorov plat bol navýšený o 40 % nad zákonné minimum — poslanci ho znížili až pod tlakom verejnej krízy. Poslanecké odmeny predstavujú ~600 000 € ročne. Otázka je, či volení zástupcovia majú zdieľať úsporné opatrenia, ktoré ukladajú ostatným.',
   a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},

  {t:'Električka',        q:'Má mesto Košice udržať plánovaný termín dokončenia modernizácie električkovej trate na Jazere — september 2026?',
   info:'Modernizácia košickej elektrickej dráhy na Jazere je projekt za 77 miliónov eur financovaný z eurofondov — ide o jeden z najväčších dopravných projektov v histórii mesta. Súčasťou je 200-miliónový celkový balík investícií do Dopravného podniku Košíc vrátane 30 CNG autobusov a 11 elektrobusov. Modernizácia prinesie 12 nových zastávok a moderné semafory s preferenciou MHD. Meškanie by ohrozilo čerpanie ďalších eurofondov a dôveryhodnosť vedenia mesta.',
   a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},

  {t:'Luník IX',          q:'Má magistrát Košíc financovať búranie ďalších havarijných panelákov na Luníku IX a presídlenie ich obyvateľov?',
   info:'Luník IX je najväčšia rómska osada v strednej Európe — v bytoch pre 2 400 ľudí žije odhadom viac ako 6 000 obyvateľov. Tri paneláky boli zbúrané v posledných rokoch pre havarijný stav, ďalšie sú vo vážnom technickom ohrození. Komunitné projekty (ETP Slovensko, KSK, mesto) za posledných 10 rokov zlepšili situáciu — obyvatelia platia za bývanie a energie. Dlhy za nájomné a systémové riešenie prehustenosti ostávajú nevyriešené.',
   a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}}
];

// ── Otázky: Župan / VÚC ──
window.VAA_DATA.questions.kosice_vuc = [
  {t:'Korupcia a funkcia',
   q:'Má obžalovaný politik právo kandidovať a zastávať funkciu župana počas prebiehajúceho trestného konania?',
   info:'Župan KSK Rastislav Trnka čelí obžalobe za machinácie pri verejnom obstarávaní sypačov a teplomerov (kauza Valentín). Hoci platí prezumpcia neviny, vec je pred súdom od júla 2025. Viaceré demokratické krajiny rozlišujú medzi právnym nárokom kandidovať a morálnou zodpovednosťou odstúpiť.',
   a:{trnka:'agree',simko:'neutral',porvaz:'disagree',gurbal:'disagree',hirman:'disagree'}},

  {t:'Transparentnosť zákaziek',
   q:'Chceš povinný verejný register všetkých zákaziek KSK vrátane odôvodnenia výberu dodávateľa?',
   info:'Kraj má ročný rozpočet stovky miliónov eur. Kauza Valentín ukázala, ako zákazky bez odôvodnenia otvárajú dvere klientelizmu. Verejný register zákaziek je silným nástrojom kontroly.',
   a:{trnka:'neutral',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Sovietsky pamätník',
   q:'Mal by župan KSK podporovať premiestnenie alebo odstránenie komunistických symbolov z pamätníka Červenej armády v Košiciach, aj napriek zákonu, ktorý ich ochranu nedávno posilnil?',
   info:'Košické mestské zastupiteľstvo hlasovalo v novembri 2024 za preskúmanie premiestnenia alebo odstránenia pamätníka vojakov Sovietskej armády na Námestí osloboditeľov vrátane jeho komunistických symbolov. Poslanec NR SR Igor Šimko (Hlas-SD) — kandidát na župana KSK — následne v parlamente predložil a presadil novelu zákona o vojnových hroboch, ktorá posilňuje ochranu takýchto pamätníkov pred poškodením aj premiestnením. Zákon č. 125/1996 označuje komunistický režim za „zločinecký, nemorálny a protiprávny" — časť právnikov a verejnosti preto považuje zobrazovanie kosákov a kladív vo verejnom priestore za propagáciu komunizmu v rozpore s týmto zákonom. Za zachovanie pamätníka podpísalo petíciu viac ako 10 000 Košičanov, za odstránenie symbolov vyše 3 300.',
   a:{trnka:'neutral',simko:'disagree',porvaz:'agree',gurbal:'disagree',hirman:'disagree',gurbal:'agree',hirman:'agree'}},

  {t:'Zdravotníctvo',
   q:'Má kraj aktívne riešiť nedostatok lekárov na vidieku cez krajské motivačné štipendiá pre medikov?',
   info:'Desiatky obcí na juhu a severovýchode KSK nemajú všeobecného lekára. Kraj môže ponúknuť štipendium medikom výmenou za záväzok pracovať v podrozvinutých oblastiach — efektívny, ale dlhodobý nástroj.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Spolupráca kraj–mesto',
   q:'Vadí ti, keď si župan a primátor toho istého mesta roky otvorene konkurujú namiesto toho, aby spolupracovali?',
   info:'Napätie medzi Trnkom a Polačekom je dobre zdokumentované — primátor Polaček ho opakovane nazýval "obvineným Trnkom" na zastupiteľstve a žiadal správu o kauzách. Komunálna vojna blokuje spoločné projekty.',
   a:{trnka:'disagree',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Cesty a infraštruktúra',
   q:'Má kraj vložiť viac peňazí do opravy krajských ciest v odľahlých oblastiach Gemera a Abova?',
   info:'Vidiecke cesty v KSK patria k najhoršie udržiavaným v krajine. Kraj ich spravuje cez Správu ciest KSK — tú istú organizáciu, ktorej vedenie figurovalo v kauze Valentín.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'neutral',hirman:'neutral'}},

  {t:'Rómske komunity',
   q:'Má KSK investovať do komplexných integračných programov pre Rómov nad rámec zákonných povinností?',
   info:'Košický kraj má najvyšší podiel marginalizovaných rómskych komunít v SR. Bez aktívnej politiky kraja sa cyklus chudoby prenáša na ďalšie generácie.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree',gurbal:'neutral',hirman:'neutral'}},

  {t:'Vzdelávanie',
   q:'Má kraj zatvárať prázdne stredné školy, aj keď to zasiahne menšie mestá?',
   info:'KSK spravuje desiatky stredných škôl, no demografický pokles znižuje ich naplnenosť. Prázdne školy sú drahé — no zatvorenie školy je symbolickou ranou pre malé mesto.',
   a:{trnka:'agree',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Eurofondy',
   q:'Je schopnosť župana čerpať eurofondy dôležitejšia ako jeho hodnotová orientácia?',
   info:'KSK dostáva každé obdobie stovky miliónov eur z EÚ. Merateľná schopnosť tieto peniaze využiť je legitímny argument pre voličov — aj pri kandidátovi s právnymi problémami.',
   a:{trnka:'agree',simko:'agree',porvaz:'neutral',gurbal:'agree',hirman:'agree'}},

  {t:'Lokálny patriotizmus',
   q:'Vadí ti, že Bratislava dostáva oveľa viac štátnych investícií a pozornosti ako Košický kraj?',
   info:'Ľudia na východe dlhodobo vnímajú, že všetko ide do Bratislavy. Župan môže byť hlasom za spravodlivejšie rozdeľovanie — pričom kandidát Hlas (vládna koalícia) a PS (opozícia) tvrdia, že dokážu tento boj vyhrať z rôznych pozícií.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Seniori',
   q:'Má kraj znížiť poplatky v domovoch sociálnych služieb pre seniorov s nízkymi dôchodkami?',
   info:'Mnohí seniori v KSK platia za domov dôchodcov viac ako dostávajú v dôchodku. Kraj nastavuje výšku poplatkov a môže zaviesť príjmovú škálu — Hlas-SD takéto opatrenia presadzuje na celoštátnej úrovni.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'disagree'}},

  {t:'Hodnoty',
   q:'Je pre teba dôležité, aby župan KSK verejne hájil konzervatívne a kresťanské hodnoty?',
   info:'KSK je tradičnejší región s hlbokými náboženskými koreňmi. Župan môže tieto hodnoty reprezentovať aktívne — alebo môže zvoliť hodnotovo neutrálne, manažérske riadenie kraja.',
   a:{trnka:'agree',simko:'neutral',porvaz:'disagree',gurbal:'disagree',hirman:'disagree',gurbal:'agree',hirman:'agree'}},

  {t:'LGBTQ+',
   q:'Má KSK financovať preventívne a podporné programy pre LGBTQ+ mládež na krajských školách?',
   info:'Šikana a diskriminácia LGBTQ+ žiakov na stredných školách je dokumentovaným problémom. Kraj môže alokovať granty na inkluzívne programy.',
   a:{trnka:'disagree',simko:'disagree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Zdravotníctvo II',
   q:'Má kraj zverejňovať čakacie doby na špecializovanú starostlivosť vo všetkých krajských zariadeniach?',
   info:'Pacienti v KSK čakajú na špecialistu niekoľko mesiacov — bez možnosti porovnania. Transparentnosť čakacích dôb je jednoduchý lacný nástroj, ktorý pomáha pacientom.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Mládež',
   q:'Má kraj poskytovať štipendiá najlepším stredoškolákom z chudobných rodín?',
   info:'Chudoba je jednou z hlavných príčin, prečo talentovaní žiaci z KSK nekončia na vysokých školách. Krajské štipendiá sú cielenými investíciami do ľudského kapitálu.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Digitálna infraštruktúra',
   q:'Má kraj prioritizovať napojenie odľahlých obcí na vysokorýchlostný internet pred opravou ciest?',
   info:'Stovky obcí v KSK má pomalé alebo žiadne pripojenie. Je digitálna infraštruktúra rovnako urgentná ako fyzická?',
   a:{trnka:'neutral',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Kultúra',
   q:'Má kraj rovnomerne rozdeľovať kultúrne dotácie medzi Košice a ostatné okresy?',
   info:'Väčšina krajských kultúrnych výdavkov ide do Košíc, zatiaľ čo Rožňava, Trebišov alebo Gelnica majú minimálnu kultúrnu ponuku.',
   a:{trnka:'agree',simko:'agree',porvaz:'neutral',gurbal:'neutral',hirman:'neutral'}},

  {t:'Podnikanie',
   q:'Má kraj aktívne propagovať KSK ako destináciu pre zahraničný turizmus a investície?',
   info:'KSK má bohaté prírodné a kultúrne dedičstvo — Slovenský kras, Spišský hrad, Košice. Aktívny marketing kraja môže priniesť prácu do zabudnutých oblastí.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Participácia',
   q:'Má kraj zaviesť participatívny rozpočet, kde občania hlasujú o časti krajských výdavkov?',
   info:'Participatívny rozpočet posilňuje demokraciu zdola a zvyšuje záujem ľudí o samosprávu. V krajoch sa tento model zatiaľ neujal.',
   a:{trnka:'neutral',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Bezplatná MHD',
   q:'Má kraj spolufinancovať bezplatnú MHD pre stredoškolákov a seniorov v KSK?',
   info:'Dopravná dostupnosť je kľúčová pre kvalitu života v rozľahlom kraji. Hlas-SD bezplatnú MHD pre zraniteľné skupiny presadzuje na celoštátnej úrovni.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Duálne vzdelávanie',
   q:'Má kraj presadzovať duálne vzdelávanie — priame partnerstvo škôl a firiem — ako hlavný model odborného vzdelávania?',
   info:'Duálne vzdelávanie znižuje nezamestnanosť absolventov. KSK má silnú priemyselnú základňu — Volvo od decembra 2026, U.S. Steel — ktorá môže byť partnerom krajských škôl.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Životné prostredie',
   q:'Má kraj presadzovať prísnejšiu ochranu Slovenského krasu a Slovenského raja pred komerčnými aktivitami?',
   info:'Slovenský kras je UNESCO lokalita pod rastúcim tlakom turizmu a priemyslu. Kraj má právomoci v územnom plánovaní a môže nastaviť prísnejšie regulácie.',
   a:{trnka:'neutral',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Zodpovednosť',
   q:'Má župan každoročne zverejňovať detailnú správu o plnení volebného programu?',
   info:'Účet za sľuby je základom zodpovednej demokracie. Krajskí poslanci KSK opakovane žiadali Trnku o správu o jeho kauzách — župan odmietal.',
   a:{trnka:'neutral',simko:'neutral',porvaz:'agree',gurbal:'agree',hirman:'agree'}},

  {t:'Rodinná starostlivosť',
   q:'Má kraj preplácať rodinnú starostlivosť o seniora doma ako alternatívu k ústavnej starostlivosti?',
   info:'Rodinná starostlivosť je pre seniora ľudskejšia a pre krajský rozpočet lacnejšia. Hlas-SD tento model podporuje na celoštátnej úrovni.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree'}},

  {t:'Regionálne rozdiely',
   q:'Má kraj aktívne podporovať rozvoj najchudobnejších okresov (Rimavská Sobota, Rožňava, Sobrance) nad rámec eurofondov?',
   info:'Tieto okresy patria k najchudobnejším v celej EÚ. Bez aktívnej politiky kraja sa priepasť medzi bohatším severom a chudobnejším juhom prehlbuje.',
   a:{trnka:'neutral',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},
,

  {t:'Volvo a subdodávatelia', q:'Má KSK aktívne lákať subdodávateľov pre závod Volvo Cars, ktorý od decembra 2026 spúšťa výrobu v Košiciach?',
   info:'Volvo Cars otvára v Košiciach závod, ktorý je najväčšou greenfield investíciou v histórii Košického kraja a má zamestnávať tisíce ľudí. Automobilové závody zvyčajne priťahujú desiatky subdodávateľov, ktorí sa usadzujú v okolí a generujú ďalšie tisíce pracovných miest. KSK môže koordinovať prípravu priemyselných parkov, odborného vzdelávania a dopravnej infraštruktúry. Otáznou zostáva, do akej miery by mal kraj subvenciovať príchod zahraničných subdodávateľov na úkor miestnych firiem.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},,
  {t:'Zdravotníctvo na vidieku', q:'Má KSK zaviesť program — garantovaná ordinácia a príspevok na bývanie — pre lekárov, ktorí sa usadia v odľahlých obciach kraja?',
   info:'V mnohých obciach Košického kraja dlhodobo chýba všeobecný lekár — pacienti cestujú za zdravotnou starostlivosťou aj hodinu. KSK zriaďuje zdravotnícke zariadenia a má kompetenciu motivovať lekárov k usadeniu na vidieku prostredníctvo krajských stimulov. Prešovský kraj zaviedol podobné schémy a záujem lekárov výrazne vzrástol. Systémovým riešením by mohla byť kombinácia krajských a štátnych stimulov — samotný kraj nestačí financovať celú sústavu.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'neutral',hirman:'neutral'}},,
  {t:'Turistika',          q:'Má KSK vybudovať spojenú cykloturistickú trasu cez celý kraj — od Tokajskej oblasti až po Slovenský raj?',
   info:'Košický kraj zahŕňa mimoriadne rôznorodé prírodné a kultúrne lokality — Slovenský kras, Slovenský raj, Tokajské vinohradníctvo zapísané do UNESCO a termálne kúpele. Cykloturistika patrí v strednej Európe k najrýchlejšie rastúcim segmentom cestovného ruchu s nadpriemerným výdavkom na osobu. Súvislá cyklotrasa by zvýšila návštevnosť a príjmy malých obcí. Financovanie infraštruktúry cez stovky kilometrov je technicky a finančne náročné, no viaceré eurofondy na také projekty pamätajú.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree',gurbal:'agree',hirman:'agree'}},,
  {t:'Školy a demografia', q:'Má KSK zlučovať stredné školy s klesajúcim zápisom, aj keby to znamenalo zánik niektorých odborov v menších mestách?',
   info:'Demografický pokles znižuje počet žiakov na stredných školách v celom Košickom kraji — viaceré školy fungujú pod 50 % kapacity. Prázdne triedy zaťažujú krajský rozpočet, no zánik školy je pre komunitu traumatizujúci a ničí vzdelávacie tradície v meste. Racionalizácia siete škôl je jednou z kľúčových kompetencií kraja, no vyžaduje politickú odvahu. Trenčiansky kraj racionalizáciou ušetril a zdroje presmeroval do zvýšenia kvality zostávajúcich škôl.',
   a:{trnka:'neutral',simko:'neutral',porvaz:'neutral'}},,
  {t:'Regionálna značka',  q:'Má KSK aktívne propagovať Košický kraj v zahraničí ako samostatnú turistickú destináciu — nie len ako súčasť Slovenska?',
   info:'Košický kraj disponuje unikátnou kombináciou kultúrneho dedičstva (Košice, Levoča, Spišský hrad), prírody a gastronómie (tokajské vína). Bratislava dominuje v zahraničí ako turistická destinácia, zatiaľ čo Košice a okolie zostávajú medzinárodne neznáme napriek bohatej histórii a dostupnosti. Viaceré európske regióny (napr. Toskánsko, Provence) budujú vlastnú medzinárodnú značku nezávisle od národnej turistiky. KSK má agentúru cestovného ruchu, no jej dosah zostáva obmedzený.',
   a:{trnka:'agree',simko:'agree',porvaz:'agree'}},
];;
