// ── Volebná kalkulačka 2026 — PRESOV ──
// Upravujte len tento súbor pre otázky a kandidátov mesta PRESOV.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['presov_primator'] = [{id:'olha',name:'František Oľha',party:'SaS/PS (úradujúci primátor)',color:'#4db6ac'},{id:'smer_pe',name:'Kandidát SMER',party:'SMER-SD',color:'#e63946'},{id:'kdh_pe',name:'Kandidát KDH',party:'KDH',color:'#90caf9'}];
window.VAA_DATA.candidates['presov_vuc'] = [{id:'majersky',name:'Milan Majerský',party:'KDH (úradujúci župan)',color:'#90caf9'},{id:'ps_pe',name:'Kandidát PS',party:'Progresívne Slovensko',color:'#64b5f6'},{id:'smer_pvu',name:'Kandidát SMER',party:'SMER-SD',color:'#e63946'},{id:'mazurek',name:'Milan Mazurek',party:'Republika',color:'#6d4c41'}];

// ── Otázky: Primátor / Primátorka ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.presov_primator = [
  {t:'Doprava',        q:'Chceš, aby Prešov výrazne rozšíril sieť cyklotrás a tým znížil závislosť ľudí od áut?',
   info:'Prešov má minimálnu cyklistickú infraštruktúru napriek tomu, že je tretím najväčším mestom. Rozsiahla sieť cyklotrás by zmenila každodenný transport tisícov ľudí, no vyžaduje rozsiahle investície a odber parkovacích miest.',
   a:{olha:'agree',smer_pe:'disagree',kdh_pe:'neutral'}},
  {t:'Infraštruktúra', q:'Sú rozbitné chodníky a cesty v Prešove tvojou hlavnou výhradou voči vedeniu mesta?',
   info:'Prešovské cesty a chodníky sú dlhodobo v zlom stave, čo komplikuje pohyb najmä pre starých a hendikepovaných. Oprava základnej infraštruktúry je menšie politické víťazstvo ako veľké projekty, ale priamejší dopad na život ľudí.',
   a:{olha:'neutral',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'Dane',           q:'Nesúhlasíš s postupným zvyšovaním miestnych daní v Prešove v posledných rokoch?',
   info:'Vyššie miestne dane sú spôsobom, ako financovať rozvoj a služby bez zadlžovania — no zaťažujú domácnosti a podnikateľov. Kde je hranica medzi nevyhnutným zdrojom a neprijateľnou záťažou?',
   a:{olha:'disagree',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'Bývanie',        q:'Mal by Prešov stavať vlastné nájomné byty dostupné pre stredné a nižšie príjmové skupiny?',
   info:'Bytová kríza zasiahla aj Prešov — nájomné rastie rýchlejšie ako mzdy. Mestské nájomné byty riešia symptóm, nie príčinu — ale pre konkrétnych ľudí môžu znamenať stabilitu a dôstojné bývanie.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'neutral'}},
  {t:'Bezpečnosť',     q:'Potrebuje Prešov viac mestských policajtov pre väčší pocit bezpečia v meste?',
   info:'Pocit bezpečia v meste závisí od viditeľnosti polície aj od sociálnych podmienok. Viac policajtov je rýchle riešenie, ktoré voliči vnímajú pozitívne — ale bez sociálnych opatrení rieši len symptómy.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'Korupcia',       q:'Chceš povinné zverejňovanie všetkých mestských zákaziek Prešova vrátane odôvodnenia výberu dodávateľa?',
   info:'Transparentnosť verejného obstarávania je základom dôvery v samosprávu. Prešov — rovnako ako iné slovenské mestá — mal zákazky, ktoré vyvolali otázky o klientelizme. Povinné odôvodnenie by tieto riziká znížilo.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'agree'}},
  {t:'Školstvo',       q:'Mal by magistrát Prešova zadarmo zabezpečiť obedy pre všetky deti na mestských základných školách?',
   info:'Bezplatné obedy eliminujú sociálnu stigmu a administratívnu záťaž testovania príjmu. Pre mesto to predstavuje výdavok — ale výskumy ukazujú, že sýte deti sa lepšie učia a menej absentujú.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'neutral'}},
  {t:'LGBTQ+',         q:'Mal by primátor Prešova podporovať LGBTQ+ komunitné programy z mestských grantov?',
   info:'Prešov je konzervatívne mesto s silnou cirkvou. Primátor môže ovplyvniť kultúru tolerancie cez grantovú politiku — alebo sa môže pridŕžať tradičného hodnotového rámca väčšiny voličov. Táto voľba odráža hlboké hodnotové rozdiely.',
   a:{olha:'agree',smer_pe:'disagree',kdh_pe:'disagree'}},
  {t:'Rómske komunity',q:'Mal by primátor Prešova aktívne presadzovať integračné programy pre Rómov žijúcich na okraji mesta?',
   info:'Prešov má tisíce Rómov v marginalizovaných komunitách na okraji mesta. Integrácia je dlhodobý, drahý a politicky náročný proces — no bez neho sa problém prehlbuje a mení na trvalý sociálny výdavok.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},
  {t:'Energetická chudoba',q:'Mal by magistrát pomáhať prešovským domácnostiam v energetickej chudobe cez mestské programy?',
   info:'Tisíce domácností v Prešove míňajú na energie neúmernú časť príjmu. Magistrát môže sprostredkovať skupinový nákup energií, subvencovať zatepľovanie starých bytov alebo inštalovať solárne panely na mestské budovy.',
   a:{olha:'neutral',smer_pe:'agree',kdh_pe:'neutral'}},
  {t:'Lokálny patriotizmus',q:'Vadí ti, že Bratislava a Košice dostávajú oveľa viac pozornosti a investícií ako Prešov?',
   info:'Prešov je tretie najväčšie mesto, no v investičných zámeroch vlády často figuruje až za Žilinou alebo Nitrou. Primátor, ktorý aktívne lobuje za záujmy mesta, môže zmeniť tento vzorec — no závisí to aj od politických väzieb.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'Životné prostredie',q:'Mal by Prešov zakázať spaľovanie uhlia a tuhých palív v domácnostiach v husto obývaných oblastiach?',
   info:'Ovzdušie v Prešove je v zimných mesiacoch znečistené starými kotlami. Zákaz je účinný, no sociálne citlivý — rodiny bez prostriedkov na výmenu kotla by trpeli. Riešením môže byť zákaz kombinovaný s dotačným programom.',
   a:{olha:'neutral',smer_pe:'neutral',kdh_pe:'neutral'}},
  {t:'Kultúra',        q:'Mal by magistrát zvýšiť granty pre nezávislé kultúrne organizácie, festivaly a komunitné projekty v Prešove?',
   info:'Prešov má bohatú kultúrnu scénu, ale podfinancovanú. Kultúrne granty sú nástrojom, ako podporiť miestnu kreativitu a súdržnosť komunity — pričom primátor určuje kritériá ich prideľovania.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},
  {t:'Participácia',   q:'Chceš, aby prešovskí občania mohli cez digitálne hlasovanie rozhodovať o časti mestského rozpočtu?',
   info:'Participatívny rozpočet zvyšuje záujem o samosprávu a garantuje, že aspoň časť peňazí ide na projekty, ktoré ľudia skutočne chcú. Vyžaduje dôveru v systém a aktívnu komunikáciu zo strany mesta.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},
  {t:'Podnikanie',     q:'Mal by Prešov aktívne lákať nových investorov a firmy znížením poplatkov a zrýchlením povolení?',
   info:'Prešov potrebuje nové pracovné miesta, keďže mnohí mladí odchádzajú. Ústretovosť voči investorom môže lákať firmy — no nesmie to byť na úkor práv existujúcich obyvateľov a životného prostredia.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'MHD',            q:'Chceš, aby mestská autobusová doprava v Prešove bola zadarmo pre dôchodcov a zdravotne znevýhodnených?',
   info:'Bezplatná MHD pre zraniteľné skupiny je sociálne spravodlivé opatrenie, ktoré zvyšuje mobilitu tých, ktorí si dopravu nemôžu dovoliť. Stojí to peniaze z mestského rozpočtu, no znižuje závislosť od áut.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'Digitalizácia',  q:'Chceš, aby magistrát Prešova digitalizoval vydávanie povolení a minimalizoval potrebu osobných návštev úradu?',
   info:'Digitálne úrady šetria čas a znižujú korupčné príležitosti. Prešov môže tento proces výrazne urýchliť bez nutnosti meniť zákony — stačí vôľa a investícia do IT systémov magistrátu.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},
  {t:'Zelené mestá',   q:'Mal by Prešov vytvoriť viac mestských parkov a zelených plôch, aj na úkor parkovacích miest?',
   info:'Prešov trpí nedostatkom zelene v husto obývaných oblastiach. Parky a stromoradia zlepšujú kvalitu ovzdušia a znižujú tepelné ostrovy — ale každé parkovacie miesto, ktoré zmizne, vytvorí nespokojného voliča.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},
  {t:'Sport',          q:'Mal by magistrát Prešova viac investovať do bezplatných verejných ihrísk a športovísk dostupných pre všetkých?',
   info:'Komerčné telocvične a športoviská sú mimo dosahu mnohých rodín. Verejné ihriská a outdoorové posilňovne v parkoch sú dostupné pre každého — od detí po seniorov — a zvyšujú fyzickú aktivitu obyvateľov.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'agree'}},
  {t:'Korupcia',       q:'Chceš pravidelný nezávislý audit hospodárenia mestského magistrátu a všetkých mestských podnikov?',
   info:'Audit mestského hospodárenia je štandardom zodpovednej správy. Nezávislý audítor — nie kontrolovaný magistrátom — môže odhaliť plytavosť alebo klientelizmus skôr, než narastú do škandálu.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'agree'}},
  {t:'Mládež',         q:'Mal by magistrát vytvoriť stáže a pracovné príležitosti pre mladých absolventov priamo na úrade a v mestských podnikoch?',
   info:'Prešovský region trpí odlevom mladých — mnohí odchádzajú za lepšou prácou. Mestský úrad a podniky môžu byť prvým zamestávateľom absolventov, čím ich udržia v meste a vychujú generáciu správcov.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'agree'}},
  {t:'Hodnoty',        q:'Je pre teba dôležité, aby primátor Prešova aktívne reprezentoval kresťanské a konzervatívne hodnoty?',
   info:'Prešov je hlboko veriacim mestom s veľkým vplyvom cirkvi na každodenný život. Pre časť voličov je hodnotová orientácia primátora rovnako dôležitá ako jeho kompetentnosť.',
   a:{olha:'neutral',smer_pe:'neutral',kdh_pe:'agree'}},
  {t:'Transparentnosť',q:'Chceš, aby primátor Prešova každý rok zverejnil detailný účet plnenia volebných sľubov?',
   info:'Zodpovednosť politikov za ich sľuby je základ demokratickej kultúry. Ročná správa o plnení programu by umožnila voličom porovnávať sľuby s realitou — no vyžaduje odvahu priznat aj neúspechy a oneskorenia.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'agree'}},
  {t:'Vízia',          q:'Je pre teba primátor Prešova predovšetkým dobrý správca každodenných problémov mesta, alebo vizionár budúcnosti?',
   info:'Prešov potrebuje oboje — no v akom pomere? Dobrý správca opravuje cesty a nezakladá dlhy; vizionár mení charakter mesta na desaťročia. Tvoja odpoveď odhaľuje, aký typ vedenia teraz mestu chýba najviac.',
   a:{olha:'disagree',smer_pe:'agree',kdh_pe:'agree'}},
  {t:'Životné prostredie',q:'Mal by Prešov vytvoriť viac mestských parkov a zelených plôch, aj na úkor parkovacích miest?',
   info:'Prešov trpí nedostatkom zelene v husto obývaných oblastiach. Parky a stromoradia zlepšujú kvalitu ovzdušia a znižujú tepelné ostrovy — no každé parkovacie miesto, ktoré zmizne, vytvorí nespokojného voliča.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},
,

  {t:'Most JP II.',        q:'Je 18-mesačná uzávierka mosta Jána Pavla II. adekvátne kompenzovaná mestskými dopravnými opatreniami?',
   info:'Most Jána Pavla II. je kľúčovým dopravným spojením medzi Sídliskom III., Novosvitom a centrom — jeho rekonštrukcia trvá 18 mesiacov a zásadne zmenila dopravu v meste. Nový most bude bez stredového piliera, odolný voči 100-ročnej povodni a so semaformi preferujúcimi MHD. Primátor Oľha sľúbil dokončenie v jeseni 2026 za vlastné mestské zdroje. Mnohí Prešovčania sa sťažujú na nedostatočné obchádzkové trasy a informovanie verejnosti počas výstavby.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},,
  {t:'Solivary',           q:'Má primátor zabezpečiť dlhodobý plán riešenia poddolovaného územia v Solivaroch, vrátane prípadného presídlenia?',
   info:'Primátor Oľha vyhlásil v februári 2026 mimoriadnu situáciu pre poddolované územie v dobývacom priestore Solivar — historická soľná baňa spôsobuje nestabilitu pôdy. Mimoriadna situácia umožňuje samospráve flexibilnejšie a rýchlejšie reagovať na riziko subsidencie. Poddolované územia predstavujú dlhodobé geologické riziko, ktoré sa s časom prehlbuje. Riešenie môže vyžadovať presídlenie časti obyvateľov — to je finančne a sociálne mimoriadne náročné.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'agree'}},,
  {t:'Štadión a šport',    q:'Stojí rekonštrukcia futbalového štadióna za vynaložené verejné zdroje, keď Prešov zároveň bojuje s dierami v rozpočte?',
   info:'Prešov organizoval Majstrovstvá Európy hráčov do 21 rokov, na čo bola nevyhnutná rekonštrukcia štadióna — projekt bol ironicky nazývaný "stavbou storočia" pre svoju zdĺhavosť. Primátor Oľha narazil na komplikácie — trestné oznámenie poslanca a kontroly spomalili projekt. Verejné financovanie štadiónov je v európskych mestách kontroverzné — prinesie príjmy z cestovného ruchu a prestíž, no peniaze mohli smerovať do základnej infraštruktúry. Výsledkom má byť moderné multifunkčné zariadenie aj pre iné podujatia.',
   a:{olha:'agree',smer_pe:'neutral',kdh_pe:'neutral'}},,
  {t:'Mestský dlh',        q:'Má primátor Prešova prioritizovať splácanie dlhov pred novými investíciami, aj za cenu zastavenia niektorých projektov?',
   info:'Prešov plánoval na rok 2026 investície za 45 miliónov eur — 21 miliónov z eurofondov podmieňuje 6 miliónov vlastného spolufinancovania. Štát posiela samosprávam menej peňazí ako zákon predpokladá — primátor preto tvorí finančnú rezervu. Príliš konzervatívny prístup k dlhu môže o nenávratné eurofondy prísť, no príliš odvážny zadlžuje budúce generácie. Väčšina slovenských miest balansuje medzi investičnou aktivitou a fiškálnou zodpovednosťou.',
   a:{olha:'neutral',smer_pe:'agree',kdh_pe:'agree'}},,
  {t:'Vojenská nemocnica', q:'Má primátor Prešova aktívne podporovať výstavbu novej vojenskej nemocnice v meste, aj keby si to vyžiadalo zmeny v územnom pláne?',
   info:'Vláda SR oznámila zámer vybudovať novú vojenskú nemocnicu v Prešove za odhadovaných 550 miliónov eur — prípravné práce sa začali v roku 2025. Prešov je sídlom armádneho výcvikového pluku a má strategickú polohu pri hraniciach s Poľskom a Ukrajinou. Nemocnica by priniesla stovky pracovných miest a zlepšila zdravotnícke kapacity celého regiónu. Kľúčovou otázkou zostáva, či bude nemocnica slúžiť aj civilnému obyvateľstvu, alebo zostane výlučne vojenská.',
   a:{olha:'agree',smer_pe:'agree',kdh_pe:'agree'}},
];

// ── Otázky: Župan / VÚC ──
window.VAA_DATA.questions.presov_vuc = [
  {t:'Zdravotníctvo',  q:'Chceš, aby PSK aktívne riešil nedostatok lekárov na vidieku cez krajské štipendiá pre medikov?',
   info:'Desiatky obcí v Prešovskom kraji nemajú vlastného lekára. Kraj môže ponúknuť štipendiá výmenou za záväzok pracovať v podrozvinutých oblastiach — no trvá roky, kým sa to prejaví v praxi.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Doprava',        q:'Chceš, aby PSK výrazne zlepšil autobusové spojenie malých obcí s okresnými mestami?',
   info:'Stovky obcí v hornatom Prešovskom kraji sú zle prepojené s okresnými mestami. Bez dobrého autobusu sú ľudia odkázaní na auto — čo je problém pre tých, ktorí auto nemajú alebo si ho nemôžu dovoliť.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Vzdelávanie',    q:'Mal by kraj zatvárať nenaplnené stredné školy, aj keď to zasiahne malé mestá a obce?',
   info:'PSK spravuje desiatky stredných škôl vrátane tých v malých, dopravne odľahlých mestách. V Svidníku kraj od septembra 2026 zlúčil gymnázium so spojenou školou, keďže malo len 144 žiakov, o viac ako stovku menej než pred desiatimi rokmi. Demografický pokles je najsilnejší v severovýchodných okresoch Medzilaborce, Snina a Svidník. Zatvorenie školy šetrí peniaze, no pre malé komunity znamená stratu symbolu i ďalší dôvod odísť.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'disagree',mazurek:'disagree'}},

  {t:'Rómske komunity',q:'Mal by PSK investovať do komplexných integračných programov pre Rómov — vzdelávanie, bývanie, práca — nad rámec zákonných povinností?',
   info:'PSK má najvyšší podiel marginalizovaných Rómov v SR — odhadom 8 až 10 percent obyvateľov. Bez aktívnych programov sa cyklus extrémnej chudoby prenáša na ďalšie generácie, integrácia je však drahá, dlhodobá a politicky kontroverzná. Milan Mazurek (Republika) bol v roku 2019 právoplatne odsúdený za hanobenie rasy za výroky o rómskom etniku odvysielané v rádiu. Majerský ani SMER aktívnu integračnú politiku nad rámec zákonných povinností dlhodobo nepresadzujú.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'neutral',mazurek:'disagree'}},

  {t:'Korupcia',       q:'Chceš povinný verejný register všetkých zákaziek PSK vrátane odôvodnenia výberu dodávateľa?',
   info:'PSK spravuje stovky miliónov eur ročne. Transparentnosť zákaziek je základom dôvery verejnosti v samosprávu — no politici sa jej niekedy bránia, lebo odhaľuje siete záujmov a stranícke klientelizmy.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'disagree',mazurek:'agree'}},

  {t:'Sociálne služby',q:'Mal by kraj znížiť poplatky za sociálne zariadenia pre seniorov s nízkymi dôchodkami?',
   info:'Mnohí seniori v PSK platia za domov dôchodcov viac ako dostávajú v dôchodku. Kraj nastavuje výšku poplatkov — môže zaviesť sociálnu škálu, ale to znižuje príjmy zariadení a krajský budúcet.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Lokálny patriotizmus',q:'Vadí ti, že Bratislava a iné kraje dostávajú viac štátnych zdrojov ako Prešovský kraj?',
   info:'PSK je jeden z najchudobnejších krajov EÚ, no jeho podiel na štátnych investíciách neodráža jeho potreby. Župan môže byť silným advokátom regiónu voči vláde — no záleží aj na jeho politickej väzbe na vládnu koalíciu.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Hodnoty',        q:'Je pre teba dôležité, aby župan PSK verejne hájil kresťanské a konzervatívne hodnoty?',
   info:'PSK je historicky kresťanský región s hlbokými tradíciami. Pre mnohých voličov je hodnotová orientácia župana rovnako dôležitá ako jeho manažérske schopnosti — pre iných sú hodnoty súkromnou vecou.',
   a:{majersky:'agree',ps_pe:'disagree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Eurofondy',      q:'Je schopnosť župana čerpať eurofondy pre teba dôležitejšia ako jeho ideologická orientácia?',
   info:'PSK dostáva každé funkčné obdobie stovky miliónov eur z EÚ. Tieto peniaze ide zlepšiť cesty, školy a sociálne zariadenia — ale len ak ich kraj dokáže efektívne vyčerpať a správne použiť.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'neutral',mazurek:'agree'}},

  {t:'LGBTQ+',         q:'Mal by PSK financovať programy na predchádzanie šikane a podporu LGBTQ+ žiakov na krajských školách?',
   info:'Stredné školy patria pod kraj. Šikana LGBTQ+ žiakov je dokumentovaným problémom aj v konzervatívnych regiónoch. Preventívne programy sú lacné a efektívne — no v konzervatívnom Prešovskom kraji politicky citlivé.',
   a:{majersky:'disagree',ps_pe:'agree',smer_pvu:'disagree',mazurek:'disagree'}},

  {t:'Zdravotníctvo',  q:'Mal by kraj zatvoriť neefektívne oddelenia v krajských nemocniciach, aj keby to sťažilo dostupnosť starostlivosti?',
   info:'Niektoré oddelenia v krajských nemocniciach PSK sú dlhodobo stratové. Ich zatvorenie šetrí peniaze, no pre pacientov v odľahlých oblastiach môže znamenať niekoľkohodinové cesty za špecializovanou starostlivosťou.',
   a:{majersky:'neutral',ps_pe:'neutral',smer_pvu:'disagree',mazurek:'neutral'}},

  {t:'Mládež',         q:'Mal by kraj zaviesť štipendiá pre talentovaných žiakov z chudobných rodín, aby zostali v PSK?',
   info:'Odlev mladých a vzdelaných ľudí je jednou z najväčších výziev PSK. Štipendiá môžu byť motívom zostať v regióne — ak sú kombinované s reálnymi pracovnými príležitosťami po skončení školy.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Kultúra',        q:'Mal by kraj rovnomerne rozdeľovať kultúrne dotácie medzi Prešov a ostatné okresy?',
   info:'Väčšina kultúrnych výdavkov PSK plynie do krajského mesta. Decentralizácia kultúry je spravodlivejšia — no menej efektívna ako koncentrácia zdrojov do kvalitných projektov v krajskom centre.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'neutral',mazurek:'agree'}},

  {t:'Podnikanie',     q:'Mal by kraj aktívne pomáhať malým poľnohospodárom a rodinným farmám v PSK?',
   info:'PSK má silnú poľnohospodársku tradíciu, no farmári zápasiaci s veľkými agropodnikmi nemajú rovnaké podmienky. Kraj môže podporiť malých farmárov grantmi, trhmi a odbytom pre krajské školy a zariadenia.',
   a:{majersky:'agree',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Participácia',   q:'Mal by kraj každoročne vyčleniť aspoň 5 % rozpočtu na projekty, o ktorých hlasujú občania?',
   info:'Participatívny rozpočet je inovatívny nástroj, ktorý posilňuje záujem ľudí o samosprávu. V krajoch sa zatiaľ neujal — župan, ktorý ho zavedie, by dal silný signál o otvorenosti a dôvere v občanov.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'disagree',mazurek:'disagree'}},

  {t:'Korupcia',       q:'Chceš, aby župan PSK zverejňoval každoročne detailnú správu o plnení volebného programu?',
   info:'Účet za sľuby je základom zodpovednej politiky. Ročná verejná správa umožňuje voličom porovnávať sľuby s realitou a priamo konfrontovať župana s jeho vlastnými záväzkami.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'neutral',mazurek:'agree'}},

  {t:'Sociálne služby',q:'Chceš, aby kraj preplácal rodinnú starostlivosť o seniorov doma ako alternatívu k ústavnej starostlivosti?',
   info:'Rodinná starostlivosť je pre seniora ľudskejšia a pre krajský rozpočet lacnejšia ako miesto v domove dôchodcov. Kraj môže zaviesť systém odmeňovania príbuzných-opatrovateľov — čo by pomohlo tisíckam rodín.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Rómske komunity',    q:'Mal by PSK zaviesť aktívnu politiku zamestnávania a uprednostniť uchádzačov z rómskych komunít pri obsadzovaní krajských pracovných miest?',
   info:'Prešovský kraj je priamym zamestnávateľom stoviek ľudí na úrade a v krajských organizáciách. Rómske komunity v PSK trpia hlbokou dlhodobou nezamestnanosťou, ktorá sa prenáša z generácie na generáciu. Aktívna politika zamestnávania zo strany verejného sektora funguje v niektorých krajinách ako prvý krok k začleneniu, kritici však hovoria, že výber zamestnancov má byť výlučne na základe schopností. Kraj by mohol začať u seba a motivovať aj iné subjekty.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'neutral',mazurek:'disagree'}},

  {t:'Doprava',        q:'Chceš, aby kraj spolufinancoval bezplatnú MHD pre dôchodcov a stredoškolákov v celom PSK?',
   info:'Prešovský kraj je rozsiahly a dopravná dostupnosť je kľúčová. Bezplatná MHD pre zraniteľné skupiny znižuje finančnú záťaž rodín a seniorov — no vyžaduje trvalé financovanie z krajského rozpočtu.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'neutral',mazurek:'agree'}},

  {t:'Zdravotníctvo',  q:'Chceš, aby PSK zverejňoval čakacie doby na špecializovanú starostlivosť vo všetkých krajských zdravotníckych zariadeniach?',
   info:'Pacienti v PSK čakajú na špecialistov aj niekoľko mesiacov bez možnosti porovnať dostupnosť. Zverejnenie čakacích dôb je jednoduchý nástroj — lacný, transparentný a priamo pomáhajúci tisíckam pacientov.',
   a:{majersky:'neutral',ps_pe:'agree',smer_pvu:'neutral',mazurek:'agree'}},

  {t:'Vízia',          q:'Je pre teba župan PSK predovšetkým správca krajských financií, alebo hlas regiónu smerom k Bratislave?',
   info:'Tieto dve role sa dopĺňajú, no niekedy si protirečia. Silný hlas pre región môže byť v konflikte s vládnou koalíciou — no práve cez politický tlak sa dajú získať investície a fondy, ktoré kraj potrebuje.',
   a:{majersky:'agree',ps_pe:'neutral',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Zdravotníctvo',      q:'Má PSK prevziať aktívnejšiu koordináciu zdravotníckych kapacít v Prešove, kde kraj narážajú na dlhodobý nedostatok špecialistov?',
   info:'PSK spravuje krajské nemocnice a ambulancie, no nemá priamu kontrolu nad Nemocnicou L. Pasteura v Prešove — tá je v správe štátu. Nedostatok špecialistov v rôznych oddeleniach je dlhodobý problém celého regiónu. PSK rozbieha centrá integrovanej zdravotnej starostlivosti spolufinancované z eurofondov, čo má skrátiť čakacie doby. Rozdelenie zodpovednosti medzi kraj a štát komplikuje koordináciu zdravotnej politiky na regionálnej úrovni.',
   a:{majer:'agree',ps_pvu:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Transparentnosť župana', q:'Vadilo by ti, ak by sa potvrdilo, že župan žije v luxusnom sídle, ktorého majetkové pomery nie sú transparentne zdokumentované?',
   info:'Médiá v roku 2023 upozornili na luxusnú nehnuteľnosť župana Majerského pod Tatrami, pričom spôsob jej financovania nebol transparentne zdokumentovaný vo verejných majetkových priznaniach. Verejní funkcionári podliehajú zákonnej povinnosti majetkového priznania, no kontrola jeho obsahu je obmedzená. Transparentnosť majetku a životného štýlu volených zástupcov je kľúčová pre dôveru verejnosti v demokratické inštitúcie. Otázkou je, kde leží hranica medzi legitímnym súkromím a transparentnou zodpovednosťou voči voličom.',
   a:{majer:'disagree',ps_pvu:'agree',smer_pvu:'neutral',mazurek:'agree'}},

  {t:'Poľnohospodárstvo',  q:'Má PSK podporovať priamy predaj miestnych potravín do krajských škôl a sociálnych zariadení, čím obíde veľké distribučné siete?',
   info:'PSK vyhlásil v roku 2026 špeciálnu dotačnú výzvu na riešenie potravinovej dostupnosti — malé rodinné farmy majú nízku vyjednávaciu silu voči veľkým obchodným reťazcom. Priamy nákup potravín pre krajské inštitúcie by skrátil dodávateľský reťazec, podporil lokálnu ekonomiku a zabezpečil čerstvejšie potraviny. Rakúsko, Nemecko a Fínsko majú dlhodobé programy inštitucionálneho nakupovania miestnych potravín. Na Slovensku je táto prax v plienkach, no je právne možná v rámci verejného obstarávania.',
   a:{majer:'agree',ps_pvu:'agree',smer_pvu:'agree',mazurek:'agree'}},

  {t:'Odliv mozgov',       q:'Má PSK zaviesť program, ktorý ponúkne absolventom vysokých škôl finančnú motiváciu vrátiť sa a pracovať v Prešovskom kraji?',
   info:'Prešovský kraj trpí silným odlivom vzdelaných ľudí do Bratislavy, Košíc a zahraničia — tento trend oslabuje lokálnu ekonomiku a spomaľuje rozvoj. PSK spravuje stredné školy, no vysoké školy sú v kompetencii štátu, čo obmedzuje jeho vplyv na vzdelávaciu politiku. Viaceré regióny v EÚ ponúkajú finančné stimuly absolventom, ktorí sa vrátia a pracujú v regióne — napríklad odpustenie časti študentských pôžičiek. Otázkou zostáva, či sú tieto programy skutočne efektívne, alebo len dočasne spomaľujú odliv bez riešenia štrukturálnych príčin.',
   a:{majer:'agree',ps_pvu:'agree',smer_pvu:'agree',mazurek:'agree'}}
];
