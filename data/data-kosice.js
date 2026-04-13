// ── Volebná kalkulačka 2026 — KOSICE ──
// Upravujte len tento súbor pre otázky a kandidátov mesta KOSICE.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['kosice_primator'] = [{id:'polac',name:'Jaroslav Polaček',party:'Nezávislý / KH2030',color:'#0097a7',url:'https://jaropolacek.sk'},{id:'mudrak',name:'Martin Mudrák',party:'Progresívne Slovensko',color:'#64b5f6',url:'https://martinmudrak.sk'},{id:'lorinc',name:'Ladislav Lörinc',party:'Košická strana',color:'#ffd166',url:'https://ladislavlorinc.sk'}];
window.VAA_DATA.candidates['kosice_vuc'] = [
  {id:'trnka',  name:'Rastislav Trnka',   party:'Nezávislý (obžalovaný)',  color:'#78909c',url:'https://rastotrnka.sk'},
  {id:'simko',  name:'Igor Šimko',        party:'Hlas-SD',                 color:'#e63946',url:'https://igorsimko.sk/pocuvam-vas/'},
  {id:'porvaz', name:'Marián Porvažník',  party:'PS / Za ľudí',            color:'#64b5f6',url:'https://porvaznik.sk'},
  {id:'gurbal', name:'Lucia Gurbáľová',   party:'KDH',                     color:'#90caf9',url:'https://luciagurbalova.sk'},
  {id:'hirman', name:'Karel Hirman',      party:'Demokrati',               color:'#7b1fa2',url:'https://karelhirman.sk'},
];

// ── Otázky: Primátor / Primátorka ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.kosice_primator = [
  {t:'Bývanie',q:'Mal by magistrát Košíc priamo stavať nájomné byty dostupné pre stredné a nižšie príjmové skupiny, aj keby to znamenalo zadlženie mesta?',info:'Košice majú len 1 600 mestských nájomných bytov, čo je 1,6 % bytového fondu. Trhové nájomné za 2-izbový byt dosahuje 650 až 900 € mesačne. Priemerná mzda v Košickom kraji nestačí na pokrytie hypotéky ani trhového nájmu bez výrazného obmedzenia ostatných výdavkov rodiny.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Bývanie',q:'Mal by primátor Košíc presadiť, aby stavebník pri každom väčšom projekte povinne odovzdal mestu časť bytov alebo pozemkov ako podmienku stavebného povolenia?',info:'Povinný príspevok stavebníka za právo stavať vo verejnom záujme funguje vo Viedni, Prahe, Londýne či Amsterdame. Mestu umožňuje získavať nájomné byty bez priameho zadlženia. V Košiciach za uplynulých desať rokov vznikli tisíce súkromných bytov, z ktorých mesto nezískalo nič.',a:{polac:'neutral',mudrak:'agree',lorinc:'neutral'}},
  {t:'Bývanie',q:'Má magistrát Košíc uprednostniť prestavbu a rekonštrukciu prázdnych mestských budov na nájomné byty pred ich predajom súkromným developerom?',info:'Mesto Košice vlastní desiatky nevyužívaných alebo čiastočne využívaných budov, napríklad bývalé školy, administratívne objekty a správcovské domy. Magistrát v roku 2024 zrekonštruoval šesť mestských bytov pre rodiny v núdzi v spolupráci s organizáciou Úsmev ako dar. Každá takáto rekonštrukcia stojí desiatky tisíc eur, no mestu zostáva majetok a kontrola nad nájmom. Predaj tých istých budov prinesie jednorazový príjem, no mestu zmizne možnosť ovplyvňovať dostupnosť bývania.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Bývanie',q:'Má primátor Košíc urýchliť vydávanie stavebných povolení pre menšie projekty, aj keby to znamenalo menej individuálneho posudzovania každej žiadosti?',info:'Priemerná doba vybavenia stavebného povolenia v Košiciach trvá 12 až 18 mesiacov, čo je dvojnásobok európskeho priemeru. Zdĺhavý proces predražuje projekty a odrádzal investorov. Na druhej strane, zníženie kontroly môže umožniť výstavbu, ktorá ignoruje záujmy existujúcich obyvateľov a zaťažuje infraštruktúru.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Bývanie',q:'Má mesto Košice zaviesť reguláciu krátkodobého prenájmu cez platformy ako Airbnb, aby sa obmedzilo vyťahovanie bytov z trhu dlhodobého nájmu?',info:'Košice sú druhým najväčším trhom krátkodobého prenájmu na Slovensku po Bratislave. V niektorých košických štvrtiach tvorí Airbnb odhadom 5 až 10 % bytového fondu. Reguláciu krátkodobého prenájmu majú Amsterdam, Berlín, Paríž aj Praha. V Košiciach zatiaľ neexistuje, hoci magistrát má nástroje ju zaviesť.',a:{polac:'neutral',mudrak:'agree',lorinc:'neutral'}},
  {t:'Samospráva',q:'Malo by mesto Košice zlúčiť niektoré zo svojich 22 mestských častí, aby sa znížili administratívne náklady a zjednodušilo riadenie mesta?',info:'Košice sú rozdelené na 22 mestských častí, čo je viac ako Paríž, Barcelona či New York. Samotná prevádzka 22 miestnych úradov, platov starostov a odmien viac ako 300 poslancov stojí mesto 8,7 milióna eur ročne, teda takmer 35 miliónov za volebné obdobie. Návrhy na zlúčenie do 4 až 12 mestských častí sa v zastupiteľstve ani v parlamente doteraz presadiť nepodarilo.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Transparentnosť',q:'Chceš povinné zverejňovanie všetkých mestských zákaziek Košíc nad 5 000 € vrátane odôvodnenia výberu dodávateľa ešte pred podpisom zmluvy?',info:'V Košiciach sú zákazky bežne zverejňované až po výbere dodávateľa, bez povinnosti uviesť dôvod, prečo bol vybraný práve on. Občan sa tak nemá šancu ozvať predtým, ako je vec rozhodnutá. Bratislava a Trenčín zverejňujú zámer aj odôvodnenie výberu vopred, dobrovoľne nad rámec zákona. V Košiciach takáto prax chýba.',a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},
  {t:'Financie',q:'Má primátor Košíc prioritizovať splácanie mestského dlhu pred novými investíciami, aj keby to znamenalo spomalenie rozvoja infraštruktúry?',info:'Dlh mesta Košice k roku 2025 presahuje 200 miliónov eur, čo je pri bežných príjmoch mesta okolo 270 miliónov eur takmer 75 % týchto príjmov. Zákon stanovuje pre mestá strop dlhu na 60 % bežných príjmov, pri prekročení hrozí pokuta od ministerstva financií. Košice sa pohybujú nad týmto stropom, čo im reálne obmedzuje priestor na ďalšie úvery. Pri priemernej úrokovej sadzbe okolo 3 % mesto ročne platí zhruba 6 miliónov eur len na úrokoch, bez toho aby za to získalo čokoľvek nové.',a:{polac:'neutral',mudrak:'neutral',lorinc:'agree'}},
  {t:'Samospráva',q:'Mal by primátor Košíc zmraziť platy poslancov mestského zastupiteľstva a odmeny členov komisií na súčasnej úrovni po celé volebné obdobie?',info:'Košické mestské zastupiteľstvo má 41 poslancov, každý dostáva mesačne okolo 700 eur. K tomu sa pripočítavajú odmeny za zasadnutia komisií. Celkovo mesto ročne vyplatí poslancom viac ako 800 000 eur. Za štyri roky volebného obdobia to predstavuje vyše 3 miliónov eur len na odmeny ľudí, ktorí sú volení zástupcovia, nie zamestnanci mesta.',a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},
  {t:'Korupcia',q:'Chceš, aby mal magistrát Košíc nezávislý útvar pre hlásenie podozrení z korupcie, na ktorý sa môže obrátiť ktokoľvek, zamestnanec aj občan, bez strachu z postihu?',info:'Zákon o ochrane oznamovateľov platí od roku 2022, no jeho reálne uplatňovanie závisí od vôle vedenia každej inštitúcie. V Košiciach neexistuje nezávislý útvar priamo pri primátorovi. Niektoré európske mestá, napríklad Kodaň alebo Zürich, majú dlhodobo fungujúce systémy hlásenia, ktoré preukázateľne znižujú korupciu v obstarávaní.',a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},
  {t:'Infraštruktúra',q:'Sú rozbitné cesty a chodníky v Košiciach pre teba dôležitejší problém ako nové veľké investičné projekty?',info:'Podľa pravidelných prieskumov spokojnosti je stav chodníkov a ciest dlhodobo jednou z top sťažností košických obyvateľov. Odhaduje sa, že výmena len najhoršieho úseku košických chodníkov by si vyžiadala desiatky miliónov eur. Mestský rozpočet nedokáže pokryť zároveň bežnú údržbu aj veľké investičné projekty, čo núti vedenie mesta robiť ťažké výbery priorít.',a:{polac:'neutral',mudrak:'agree',lorinc:'agree'}},
  {t:'Doprava',q:'Súhlasíš s tým, aby primátor Košíc presadil jasnú výkonnostnú zmluvu s vedením DPMK, kde budú merateľné ciele pre obsadenosť, dochvíľnosť a hospodárnosť a ich nesplnenie bude mať dôsledky?',info:'DPMK skončil v roku 2024 so stratou takmer 830 000 eur. Dotácia mesta vzrástla za šesť rokov z 19 miliónov na rekordných 37 miliónov eur ročne, pričom kvalita dopravy neklesla, ale ani nerástla. V roku 2023 prepukol ostrý štrajk vodičov, MHD sa takmer zastavila. DPMK zmeškal eurofondový tender na 20 miliónov eur na nové električky. Celá táto kríza sa odohrávala na pozadí rokov trvajúceho verejného konfliktu medzi primátorom a riaditeľom podniku, pričom obaja si navzájom hadzali vinu za zlý stav. Nový primátor zdedí podnik s rastúcimi nákladmi, zastaraným vozovým parkom a bez jasných pravidiel zodpovednosti.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Doprava',q:'Má primátor Košíc aktívne tlačiť na výstavbu nových električkových tratí, napríklad na Sídlisko Ťahanovce alebo ku Volvu, a to aj za cenu spolufinancovania z mestského rozpočtu?',info:'Sídlisko Ťahanovce s 22 000 obyvateľmi nemá od zrušenia trate v roku 1965 žiadne elektrické spojenie. Nový závod Volvo pri Valalikoch zamestná v prvej fáze tisíc, neskôr až 8 000 ľudí, no žiadna plánovaná trasa električky k nemu neexistuje. Aktuálna modernizácia trate na Nad jazerom za 77 miliónov eur z eurofondov mení existujúcu trať, nebuduje novú. Košice majú stratégiu rozvoja električiek do roku 2050, no konkrétne financovanie nových tratí chýba.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Doprava',q:'Chceš, aby Košice budovali bezpečné cyklotrasy aj v obytných štvrtiach a na sídliskách, nielen v centre mesta?',info:'Košice majú len asi 40 km evidovaných mestských cyklotrás, pričom väčšina vedie mimo sídlisk. Západ, KVP, Ťahanovce či Dargovských hrdinov sú prakticky bez cyklistickej infraštruktúry. Plány sa opakovane posúvajú, napríklad cyklotrasa na Alpinku plánovaná na rok 2023 sa realizuje až od roku 2026. Skutočne bezpečná cyklotrasa musí mať fyzické oddelenie od automobilovej dopravy, nestačí namaľovať čiaru na vozovku.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Doprava',q:'Mal by primátor Košíc aktívne lobovať a spolufinancovať zlepšenie železničného spojenia Košíc s Bratislavou, Prahou, Viedňou, Budapešťou, Miskolcom a Užhorodom, aj keď železnica nie je priamo v kompetencii mesta?',info:'Najrýchlejší vlak z Košíc do Bratislavy trvá v roku 2025 takmer 5 hodín, čo je viac než autom. IC vlaky boli od decembra 2024 zrušené. Spojenie s Užhorodom a Miskolcom je pomalé a nepravidelné, hoci Košice sú geograficky logistickým centrom regiónu. Primátor nemá priamu kompetenciu nad železnicami, no má nástroje tlačiť vládu, vyjednávať s ŽSR a spolufinancovať prestupné terminály. Každý rok nečinnosti túto príležitosť zmenšuje.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Rómske komunity',q:'Mal by magistrát Košíc aktívne a cielene ponúkať pracovné miesta na mestských prácach obyvateľom Luníka IX ako súčasť integračnej politiky?',info:'Luník IX je najväčšia rómska komunita v strednej Európe, s odhadovanou populáciou 7 000 až 8 000 ľudí v komplexe pôvodne navrhnutom pre 2 500. Nezamestnanosť tam dosahuje takmer 100 %. Magistrát realizoval projekt zamestnávania obyvateľov Luníka IX v U.S. Steel od roku 2008, v prvej vlne nastúpilo 20 ľudí. Projekt sa každý rok obnovoval, no nikdy nedosiahol rozsah, ktorý by štrukturálne zmenil situáciu. Otázka je, či a čo môže a má spraviť mesto nad rámec toho, čo robí dnes.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Sociálne',q:'Má magistrát Košíc financovať búranie ďalších havarijných panelákov na Luníku IX len vtedy, ak zároveň zabezpečí náhradné bývanie pred samotnou asanáciou?',info:'Mesto búralo havarijné vchody na Luníku IX bez toho, aby vopred zaistilo náhradné bývanie pre rodiny. Výsledkom bolo, že obyvatelia sa presunuli do nelegálnych osídlení v iných častiach mesta a okolia. Okolo Košíc vzniklo viac ako desať nových nelegálnych rómskych osídlení. Búranie bez riešenia bývania nepomáha integrácii, ale rozptyľuje problém do ďalších komunít a zvyšuje konflikty.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Hodnoty',q:'Má primátor Košíc verejne zastávať práva všetkých menšín žijúcich v meste, vrátane rómskej komunity a LGBTQ+ komunity, alebo sa má vyhýbať politicky citlivým témam a sústrediť sa výlučne na správu mesta?',info:'Košice sú multietnickým mestom s významnou maďarskou, rómskou, rastúcou ukrajinskою a zahraničnou komunitou. Primátor je najviditeľnejší volený zástupca mesta a jeho slová majú váhu. Niektorí voliči od neho očakávajú hodnotové vedenie a verejné postoje, iní považujú politické vyjadrenia primátora za rozdeľujúce a uprednostňujú, aby sa sústredil na konkrétne problémy. Táto voľba odráža, čo od komunálneho politika základne očakávaš.',a:{polac:'neutral',mudrak:'agree',lorinc:'disagree'}},
  {t:'Školstvo',q:'Mal by primátor Košíc zaviesť rozšírené mimoškolské aktivity zadarmo pre deti zo sociálne slabších rodín, aj keby to znamenalo prerozdelenie časti existujúceho kultúrneho alebo športového rozpočtu?',info:'Prístup detí k mimoškolským aktivitám je v Košiciach silne závislý od príjmu rodiny. Magistrát spravuje sieť základných škôl a má kompetenciu financovať rozšírené programy. Niektoré európske mestá, napríklad Viedeň, financujú mimoškolské aktivity centrálne a zadarmo pre všetky deti bez ohľadu na príjem. Otázka je, odkiaľ zobrať financovanie bez navyšovania celkového rozpočtu.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Bezpečnosť',q:'Chceš, aby mestskí policajti v Košiciach pravidelne a pešo pôsobili priamo v konkrétnych štvrtiach a poznali ich obyvateľov, namiesto toho aby len reagovali na tiesňové volania?',info:'Mestská polícia Košíc funguje prevažne reakčne a hliadkuje prevažne v autách. Komunitný model polície, kde policajti dlhodobo pôsobia v konkrétnych štvrtiach, poznajú ľudí a problémy v nich, preukázateľne znižuje kriminalitu. V Manchestri sa vďaka tomuto modelu kriminalita znížila o 20 % za päť rokov. V Amsterdame má každá štvrť dedikovaného komunitného policajta. V Košiciach takýto systém neexistuje.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Priemysel',q:'Je príchod Volva a transformácia U.S. Steel pod Nippon Steel pre Košice skôr príležitosťou, ktorú má primátor aktívne rozvíjať dopravnou a bytovou politikou, alebo rizikom jednostrannej závislosti na veľkom priemysle?',info:'Volvo Cars Košice spustilo v roku 2025 nábor prvých tisíc zamestnancov, závod má plne fungovať v roku 2026 s kapacitou až 8 000 pracovných miest. Nippon Steel prebral U.S. Steel a avizoval ďalšie investície. Obe spoločnosti požadujú od mesta bytovú politiku, lepšiu dopravu a cyklotrasy pre zamestnancov. Magistrát doteraz žiadne konkrétne dopravné ani bytové opatrenia priamo spojené s príchodom Volva nerealizoval.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Sovietský pamätník',q:'Má primátor Košíc aktívne presadzovať odstránenie komunistických symbolov z vojenského pamätníka Červenej armády a premenovanie Námestia osloboditeľov?',info:'V centre Košíc stojí pamätník sovietskeho vojaka s kosákmi a kladivami, symbolmi komunistickej strany, ktorej systém slovenský zákon č. 125/1996 Z.z. označuje za zločinecký, nemorálny a protiprávny. Paradox je hlboký: tá istá armáda, ktorá v januári 1945 vyhnala fašistov, obsadila Československo a uvrhla ho do 40 rokov komunistickej totality. A práve na tomto námestí v auguste 1968 sovietske tanky zabíjali ľudí, ktorí sa bránili vojenskej invázii, ktorou ZSSR zničil Pražskú jar. Pritom Košice boli v roku 1919 naozaj oslobodené, ale legionármi od boľševickej maďarskej armády, a námestie sa vtedy vďačne premenovalo na Legionárske. V roku 1949 komunisti toto meno vymazali a nahradili ho dnešným názvom. Odborná pracovná skupina mesta v roku 2025 potvrdila, že pamätník ako vojnový hrob a národná kultúrna pamiatka zákon legálne odstránenie symbolov neumožňuje. Premenovanie námestia však priamo v kompetencii mesta je a ani k nemu za 35 rokov nedošlo. V novembri 2024 mesto za 11 100 € zo štátneho rozpočtu nainštalovalo kosáky a kladivá späť.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Medzinárodná spolupráca',q:'Mal by primátor Košíc aktívne budovať ekonomické a logistické partnerstvá s ukrajinskými mestami v kontexte povojnovej obnovy, aj keď výsledky sa prejavia až za 5 až 10 rokov?',info:'Košice sú najbližšie veľké mesto EÚ k ukrajinskej hranici, vzdialené len 90 km od Užhorodu. Objem povojnovej obnovy Ukrajiny odhaduje EÚ na 500 miliárd eur. Košické firmy zo stavebného, technického a logistického sektora majú reálnu šancu získať zákazky, ak mesto vytvorí inštitucionálne rámce spolupráce. Budapešť, Krakov a Varšava sa o pozíciu centra pre Ukrajinu aktívne uchádzajú od roku 2022. Košice zatiaľ nemajú systematický prístup.',a:{polac:'agree',mudrak:'agree',lorinc:'neutral'}},
  {t:'Spolupráca',q:'Vadí ti, že primátor Košíc a župan KSK roky otvorene bojujú namiesto toho, aby spolupracovali v prospech mesta a regiónu?',info:'Konflikt medzi vedením mesta a Košickým samosprávnym krajom trvá od roku 2019 a má reálne dôsledky pre obyvateľov. Spoločné projekty v doprave, sociálnych službách a vzdelávaní sú opakovane blokované alebo oneskorované. Napríklad prepojenie dopravných systémov mesta a kraja do jedného integrovaného systému sa nepodarilo napriek tomu, že na to existujú technické aj finančné predpoklady. Každý rok nefunkčnej spolupráce stojí obyvateľov konkrétne peniaze a čas.',a:{polac:'agree',mudrak:'agree',lorinc:'agree'}},
  {t:'Vízia',q:'Je pre teba dôležitejšie, aby primátor Košíc bol dobrý manažér každodennej správy mesta, alebo vizionár schopný presadiť veľké transformačné projekty pre budúcnosť?',info:'Táto otázka nemá správnu odpoveď. Mestá, ktoré sa príliš sústredili na prevádzku, niekedy zmeškali zásadné príležitosti pre rozvoj. Mestá, ktoré sa venovali len veľkým víziám, niekedy zanedbali základné služby a stratili dôveru obyvateľov. Odpoveď prezradí, čo v tejto chvíli Košice podľa teba viac potrebujú.',a:{polac:'disagree',mudrak:'neutral',lorinc:'agree'}}
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
