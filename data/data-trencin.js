// ══ DATA: TRENČÍN ══
window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor Trenčína ──
window.VAA_DATA.candidates['trencin_primator'] = [
  {id:'forgac', name:'Ján Forgáč', party:'Nezávislý', color:'#1976d2', url:'https://janforgac.sk/'},
  {id:'micega', name:'Miloš Mičega', party:'Nezávislý', color:'#9c27b0', url:'https://www.micega.sk/'}
];

// ── Kandidáti: Predseda Trenčianskeho kraja ──
window.VAA_DATA.candidates['trenciansky_vuc'] = [
  {id:'baska', name:'Jaroslav Baška', party:'Smer-SD / Hlas-SD / SNS / Republika', color:'#c62828', url:'https://www.vaszupan.sk/'},
  {id:'svitkova', name:'Natália Svítková', party:'Demokrati / PS / SaS / KDH / Hnutie Slovensko / OKS', color:'#1976d2', url:'https://nataliasvitkova.sk/'}
];

// ── Otázky: Primátor Trenčína ──
window.VAA_DATA.questions.trencin_primator = [
  {
    t:'Mosty a doprava',
    q:'Má mať príprava nového cestného mosta cez Váh prednosť pred inými veľkými mestskými projektmi?',
    w:'Trenčín dlhodobo rieši dopravné zaťaženie a kapacitu prepojenia cez Váh. Nový most by mohol zlepšiť dopravu v meste, ale znamenal by, že časť peňazí, prípravy a politickej energie nepôjde na iné veľké projekty.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Mosty a doprava',
    q:'Má Trenčín najprv investovať do starého mosta a základnej dopravnej infraštruktúry, aj keby sa odložili nové reprezentatívne projekty?',
    w:'Mesto stojí pred voľbou medzi údržbou kľúčovej infraštruktúry a novými projektmi, ktoré menia vzhľad a image Trenčína. Opravy mosta a dopravy sú menej viditeľné, no pre fungovanie mesta môžu byť naliehavejšie.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Parkovanie',
    q:'Má Trenčín rozšíriť regulované parkovanie a platené zóny, ak bez toho nevie zvládnuť tlak áut v centre a na sídliskách?',
    w:'Regulované parkovanie môže uvoľniť miesta pre rezidentov a zlepšiť poriadok v preťažených uliciach. Zároveň však znamená viac poplatkov a pravidiel pre domácnosti, návštevy aj podnikateľov.',
    a:{forgac:'agree', micega:'disagree'}
  },
  {
    t:'Parkovanie',
    q:'Má ísť väčšina výnosov z parkovania priamo späť do dopravy, ciest a parkovacích kapacít?',
    w:'Ak mesto vyberá peniaze za parkovanie, časť obyvateľov očakáva, že ich má viditeľne vracať do dopravných riešení. Druhý pohľad je, že príjmy mesta majú byť čo najvoľnejšie použiteľné podľa aktuálnych potrieb.',
    a:{forgac:'agree', micega:'agree'}
  },
  {
    t:'Doprava a verejný priestor',
    q:'Má mať v Trenčíne prednosť plynulosť áut pred pešími zónami, cyklotrasami a zmenšovaním priestoru pre autá?',
    w:'Každé dopravné rozhodnutie zvýhodní jednu skupinu na úkor druhej. Viac priestoru pre autá zvyšuje plynulosť dopravy, no oslabuje pešie trasy, bezpečnosť a kvalitu verejného priestoru.',
    a:{forgac:'disagree', micega:'agree'}
  },
  {
    t:'Cyklodoprava',
    q:'Má mesto ďalej budovať cyklotrasy aj na úkor časti parkovania alebo priestoru pre autá?',
    w:'Cyklotrasy môžu pomôcť bezpečnosti a ponúknuť inú možnosť dopravy než auto. V uliciach s obmedzeným priestorom však často znamenajú konflikt s parkovaním alebo s dopravou áut.',
    a:{forgac:'agree', micega:'disagree'}
  },
  {
    t:'EHMK 2026',
    q:'Má Trenčín po roku Európskeho hlavného mesta kultúry ďalej držať vysoké výdavky na kultúru, aj keď ľudia chcú viac peňazí na cesty a sídliská?',
    w:'Európske hlavné mesto kultúry môže mestu priniesť značku, turistov aj dlhodobé kultúrne projekty. Po roku 2026 však príde otázka, či v tom pokračovať aj za cenu menšieho priestoru pre bežné mestské služby.',
    a:{forgac:'agree', micega:'disagree'}
  },
  {
    t:'Sídliská vs. centrum',
    q:'Má ísť viac investícií z centra a reprezentatívnych projektov do sídlisk a okrajových častí Trenčína?',
    w:'Časť obyvateľov chce silné centrum a veľké mestské projekty, iní očakávajú viac peňazí na chodníky, vnútrobloky, parkovanie a ihriská v obytných štvrtiach. Je to spor medzi imidžom mesta a každodennou kvalitou života.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má Trenčín stavať mestské nájomné byty aj za cenu vyššieho zadlženia?',
    w:'Mestské nájomné bývanie môže pomôcť mladým rodinám, pracovníkom služieb aj ľuďom, ktorí si nevedia dovoliť komerčné bývanie. Vyžaduje však veľké investície a dlhodobé zadlženie alebo presun peňazí z iných priorít.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Výstavba a developeri',
    q:'Má mesto stopnúť alebo obmedziť projekty developerov tam, kde príliš zaťažujú dopravu a školy, aj keby to znamenalo menej nových bytov?',
    w:'Nová výstavba prináša byty a rast mesta, ale zároveň zvyšuje tlak na infraštruktúru. Mesto si musí vybrať medzi rýchlejšou výstavbou a prísnejšou ochranou kvality života v už zastavaných častiach.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Šport',
    q:'Má mesto uprednostniť mládežnícky šport a menšie športoviská pred drahými veľkými športovými projektmi?',
    w:'Veľké športové projekty prinášajú prestíž a viditeľnosť, no veľká časť obyvateľov využíva skôr bežné ihriská, haly a športoviská v mestských častiach. Ide o konflikt medzi reprezentáciou mesta a každodenným športom pre deti a rodiny.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Zeleň a klíma',
    q:'Majú mať pri rekonštrukciách ulíc a námestí prednosť stromy a zeleň pred počtom parkovacích miest?',
    w:'Viac stromov a tieňa pomáha prehrievaniu mesta aj kvalite verejného priestoru. V hustejších uliciach to však často znamená menej parkovacích miest alebo zložitejšie dopravné riešenia.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Bezpečnosť',
    q:'Má Trenčín rozšíriť zóny 30, vyvýšené priechody a spomaľovacie prvky v obytných zónach?',
    w:'Takéto opatrenia zvyšujú bezpečnosť chodcov, detí a seniorov. Časť vodičov ich však vníma ako zhoršenie plynulosti dopravy, vyšší hluk a menej komfortu.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto zverejňovať konečné ceny, dodatky a meškania veľkých projektov v jednej verejnej tabuľke?',
    w:'Takýto prehľad by verejnosti uľahčil kontrolu hospodárenia. Zároveň by vytváral vyšší tlak na vedenie mesta pri každom posune termínu alebo navýšení ceny.',
    a:{forgac:'agree', micega:'agree'}
  },
  {
    t:'Mestský majetok',
    q:'Má Trenčín zverejniť jasné pravidlá prenájmu mestských priestorov a majetku?',
    w:'Mestské priestory môžu slúžiť podnikaniu, službám aj komunitám. Jasné pravidlá by znížili priestor pre nejasné rozhodovanie, no zároveň by obmedzili politickú flexibilitu pri jednotlivých prípadoch.',
    a:{forgac:'agree', micega:'agree'}
  },
  {
    t:'Mestská polícia',
    q:'Má Trenčín posilniť mestskú políciu a dohľad vo verejnom priestore aj za cenu vyšších bežných výdavkov?',
    w:'Silnejší dohľad môže zvýšiť pocit bezpečia a pomôcť riešiť poriadok, dopravu a vandalizmus. Na druhej strane ide o pravidelné výdavky, ktoré potom chýbajú inde.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Podnikanie',
    q:'Má mesto viac zvýhodniť malé miestne prevádzky pred veľkými developermi a reťazcami?',
    w:'Malé prevádzky držia život v meste a podporujú lokálnu ekonomiku. Veľké reťazce a veľké projekty však môžu priniesť vyšší objem investícií, pracovných miest a daní.',
    a:{forgac:'neutral', micega:'agree'}
  },
  {
    t:'Participácia',
    q:'Má vedenie mesta robiť pravidelné verejné stretnutia v mestských častiach a zverejňovať, čo z podnetov reálne splnilo?',
    w:'Silnejšia komunikácia môže zvýšiť dôveru a tlak na riešenie lokálnych problémov. Zároveň zvyšuje administratívu a núti vedenie mesta verejne vysvetľovať aj nepopulárne rozhodnutia.',
    a:{forgac:'agree', micega:'agree'}
  },
  {
    t:'Participatívny rozpočet',
    q:'Má Trenčín vyčleniť časť peňazí na participatívny rozpočet, o ktorom budú priamo hlasovať obyvatelia?',
    w:'Participatívny rozpočet môže zvýšiť zapojenie obyvateľov do rozhodovania. Kritici však upozorňujú, že odborné priority mesta sa tým môžu podriadiť hlasovaniu o menších, ale populárnych témach.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Dane a poplatky',
    q:'Má Trenčín zvýšiť miestne dane a poplatky, ak bez toho nevie financovať základné služby a údržbu?',
    w:'Bez vyšších príjmov môže byť ťažšie financovať opravy, údržbu a služby mesta. Zvyšovanie daní a poplatkov je však pre domácnosti aj firmy nepopulárne a zvyšuje životné náklady.',
    a:{forgac:'neutral', micega:'disagree'}
  },
  {
    t:'Veľkí zamestnávatelia',
    q:'Majú veľkí zamestnávatelia viac prispievať na dopravu, bývanie a služby, ktoré ich zamestnanci zaťažujú?',
    w:'Veľké firmy profitujú z mestských ciest, parkovania a služieb, no zároveň ich aj zaťažujú. Prísnejšie požiadavky môžu byť spravodlivé, ale časť investorov by mohli odrádzať.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Sociálne služby',
    q:'Má Trenčín posilniť sociálne služby a podporu seniorov aj za cenu menších investícií inde?',
    w:'Starnutie obyvateľstva zvyšuje tlak na opatrovanie, terénne služby a zariadenia pre seniorov. Posilnenie tejto oblasti však znamená menej peňazí pre iné mestské priority.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Železničná stanica a terminál',
    q:'Má mesto dotiahnuť modernizáciu dopravného uzla pri stanici aj za cenu zložitejšej dopravy počas výstavby?',
    w:'Moderný prestupný uzol môže zlepšiť fungovanie verejnej dopravy a vlakových prestupov. Počas prípravy a výstavby však môže mesto čeliť dočasnému dopravnému chaosu a kritike obyvateľov.',
    a:{forgac:'agree', micega:'neutral'}
  },
  {
    t:'Kontinuita po Rybníčkovi',
    q:'Má Trenčín po skončení Richarda Rybníčka pokračovať v podobnom štýle vedenia mesta, alebo potrebuje výraznejšiu zmenu?',
    w:'Po dlhých rokoch jedného primátora sa v Trenčíne otvára spor o to, či treba zachovať kontinuitu v projektoch a štýle riadenia, alebo využiť zmenu vedenia na výraznejší obrat priorít.',
    a:{forgac:'agree', micega:'disagree'}
  },
  {
    t:'Moc a kontrola',
    q:'Má nový primátor po voľbách cielene vymeniť časť vedenia mestských organizácií, ak ich spája s doterajším vedením mesta?',
    w:'Výmena vedenia môže priniesť nový výkon a väčšiu kontrolu nad organizáciami mesta. Zároveň však nesie riziko politizácie a oslabenia kontinuity rozbehnutých projektov.',
    a:{forgac:'disagree', micega:'agree'}
  }
];

// ── Otázky: Predseda Trenčianskeho kraja ──
window.VAA_DATA.questions.trenciansky_vuc = [
  {
    t:'Školstvo a personálne nominácie',
    q:'Má župan rešpektovať výsledok konkurzu na riaditeľa školy aj vtedy, keď s víťazom politicky nesúhlasí?',
    w:'Trenčiansky kraj zriaďuje stredné školy a predseda kraja má silný vplyv na ich vedenie. Ak víťaz konkurzu splní odborné podmienky a získa podporu rady školy, spor vzniká v tom, či má rozhodnúť výsledok výberu, alebo aj politická dôvera zriaďovateľa.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Moc a funkcie',
    q:'Má byť predseda kraja zároveň aj poslancom parlamentu, ak tvrdí, že obe funkcie zvláda?',
    w:'Spájanie dvoch významných verejných funkcií môže zvyšovať politický vplyv a priniesť krajskej samospráve lepší prístup k štátnej moci. Kritici však tvrdia, že kraj potrebuje plnohodnotného predsedu, nie politika na dve stoličky.',
    a:{baska:'agree', svitkova:'disagree'}
  },
  {
    t:'Cesty a mosty',
    q:'Má kraj stopnúť časť menších grantov, športových podpôr a podujatí, aby dal viac peňazí do ciest a mostov?',
    w:'Rozbité cesty a mosty zasahujú každodenný život obyvateľov celého kraja. Menšie granty a podujatia sú viditeľné v obciach, no časť voličov očakáva tvrdšie sústredenie peňazí na základnú infraštruktúru.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Autobusová doprava',
    q:'Má kraj ďalej platiť aj dlhodobo stratové autobusové spoje do menších obcí, aj keď to znižuje peniaze na iné priority?',
    w:'Menšie obce sú závislé od autobusov pri dochádzaní do škôl, práce a za lekármi. Udržať aj slabšie spoje znamená vyššie náklady, ale bez nich môže časť regiónu ostať dopravne odkázaná len na auto.',
    a:{baska:'agree', svitkova:'agree'}
  },
  {
    t:'Horná Nitra',
    q:'Má kraj presunúť viac investícií do hornej Nitry aj za cenu, že sa spomalia projekty v silnejších okresoch?',
    w:'Región hornej Nitry čelí po útlme uhlia silnej transformácii a potrebuje nové investície. Presun peňazí tam však znamená menej priestoru pre okresy, ktoré už dnes tvoria silnejšiu časť kraja.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Nemocnice a zdravotníctvo',
    q:'Má kraj silnejšie tlačiť na štát, aby zrýchlil dofinancovanie a rozvoj nemocníc v regióne, aj keby to znamenalo otvorený konflikt s vládou?',
    w:'Dostupnosť nemocníc a zdravotníckych služieb je jednou z kľúčových tém v kraji. Otázka je, či má predseda kraja radšej hľadať dohodu s vládou, alebo ísť aj do verejného konfliktu, ak región podľa neho nedostáva dosť.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Lekári v okresoch',
    q:'Má kraj zvýhodniť okresy s nedostatkom lekárov dotáciami a priestormi aj vtedy, keď menej peňazí ostane na školy alebo cesty?',
    w:'Nie všetky okresy kraja majú rovnakú dostupnosť ambulancií a špecialistov. Cielená podpora slabších okresov môže znížiť regionálne rozdiely, no zoberie časť peňazí z iných oblastí.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Stredné školy',
    q:'Má kraj rušiť alebo zlúčiť stredné školy s nízkym počtom žiakov, aj keď to poškodí menšie mestá?',
    w:'Zlučovanie škôl môže znížiť náklady a sústrediť vybavenie do silnejších centier. Menšie mestá by však mohli prísť o dostupnosť školy, mladých ľudí a časť miestneho života.',
    a:{baska:'neutral', svitkova:'disagree'}
  },
  {
    t:'Odborné školstvo',
    q:'Má kraj prispôsobiť odborné stredné školy viac potrebám firiem v automobilovom a strojárskom priemysle?',
    w:'Silnejšia väzba škôl na priemysel môže pomôcť absolventom nájsť prácu v kraji. Kritici upozorňujú, že príliš úzka orientácia na dnešné potreby firiem môže obmedziť širšie vzdelanie a flexibilitu mladých ľudí.',
    a:{baska:'agree', svitkova:'neutral'}
  },
  {
    t:'Integrovaná doprava',
    q:'Má kraj rozšíriť jeden lístok na autobusy a vlaky aj mimo hlavnej osi Trenčín – Nové Mesto – Považie?',
    w:'Integrovaná doprava zlepšuje prestupy a robí cestovanie jednoduchším. Jej rozšírenie do menej hustých častí kraja je však finančne aj organizačne náročné.',
    a:{baska:'agree', svitkova:'agree'}
  },
  {
    t:'Krajské organizácie',
    q:'Má nový predseda kraja vymeniť vedenia krajských organizácií, ak neprinášajú jasné výsledky, aj za cenu politického konfliktu?',
    w:'Tvrdšie personálne zásahy môžu priniesť nový výkon a zodpovednosť. Zároveň však nesú riziko, že sa z krajských inštitúcií stane korisť novej politickej moci.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Sociálne služby',
    q:'Má kraj dať viac peňazí do domovov seniorov aj za cenu menších investícií do ciest a školstva?',
    w:'Starnutie obyvateľstva zvyšuje tlak na sociálne služby a kapacity zariadení pre seniorov. Každé posilnenie tejto oblasti však obmedzuje priestor pre iné veľké výdavky.',
    a:{baska:'agree', svitkova:'agree'}
  },
  {
    t:'Domáca starostlivosť',
    q:'Má kraj obmedziť výstavbu nových domovov seniorov a radšej platiť opatrovanie doma?',
    w:'Domáca starostlivosť umožňuje ľuďom zostať vo vlastnom prostredí a býva lacnejšia. Na druhej strane nie všetky zdravotné a sociálne situácie sa dajú zvládnuť bez pobytového zariadenia.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Investori a pôda',
    q:'Má kraj odmietnuť priemyselný alebo logistický projekt, ak zaberá kvalitnú poľnohospodársku pôdu, aj keď prinesie pracovné miesta?',
    w:'Nové investície prinášajú pracovné miesta a dane, ale po zastavaní kvalitnej pôdy sa územie len ťažko vracia späť do poľnohospodárstva. Je to konflikt medzi hospodárskym rastom a dlhodobou ochranou krajiny.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Veľkí investori',
    q:'Má kraj odmietnuť investora, ktorý neprispeje na dopravu, bývanie alebo školy, ktoré jeho projekt zaťaží?',
    w:'Veľké investície môžu priniesť pracovné miesta, ale zároveň zaťažujú cesty, autobusy, školy a bývanie. Tvrdšie podmienky chránia verejné záujmy, no časť investorov môžu odradiť.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Školy v menších mestách',
    q:'Má kraj zachovať stredné školy v menších mestách aj pri nižšom počte žiakov?',
    w:'Stredná škola v menšom meste drží mladých ľudí v regióne a podporuje miestny život. Jej prevádzka však môže byť drahšia a menej efektívna než vo väčších centrách.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Granty a podujatia',
    q:'Má kraj obmedziť malé granty a podujatia, aby zostalo viac peňazí na cesty a mosty?',
    w:'Menšie granty a podujatia sú často viditeľné v obciach a podporujú komunitný život. Pri zlom stave ciest a mostov však časť voličov očakáva presun peňazí do tvrdšej infraštruktúry.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Kultúra verzus cesty',
    q:'Má kraj stopnúť alebo zmenšiť veľké kultúrne projekty, ak ľudia žiadajú skôr opravy ciest?',
    w:'Kultúrne projekty zlepšujú kvalitu života a identitu regiónu. Pre časť obyvateľov však nie sú tak naliehavé ako rozbité cesty, mosty a dopravné spojenia.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má kraj zverejňovať konečné ceny, dodatky a meškania veľkých projektov v jednej verejnej tabuľke?',
    w:'Jednoduchý verejný prehľad by zlepšil kontrolu veľkých investícií. Zároveň by zvýšil tlak na kraj pri každom navýšení ceny alebo meškaní.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Audit kraja',
    q:'Má nový župan zadať nezávislý audit veľkých projektov a zmlúv súčasného vedenia kraja?',
    w:'Kraj spravuje veľký majetok a rozsiahle investície. Audit môže posilniť dôveru a kontrolu, ale môže byť vnímaný aj ako politická vojna proti predchádzajúcemu vedeniu.',
    a:{baska:'disagree', svitkova:'agree'}
  },
  {
    t:'Zadlženie a investície',
    q:'Má si kraj zobrať nový úver, ak bez neho nestihne opraviť najhoršie cesty, mosty a školy?',
    w:'Úver môže zrýchliť obnovu infraštruktúry a znížiť investičný dlh. Zároveň však zvyšuje splátky a obmedzuje rozpočtový priestor v ďalších rokoch.',
    a:{baska:'agree', svitkova:'neutral'}
  },
  {
    t:'Regionálne rozdiely',
    q:'Má kraj presunúť časť investícií z okolia Trenčína do vzdialenejších okresov, aj keď tam žije menej ľudí?',
    w:'Trenčín prirodzene priťahuje školy, úrady a služby, no kraj spravuje celé územie vrátane slabších okresov. Je to konflikt medzi efektivitou investícií vo väčších centrách a regionálnou spravodlivosťou.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Energetika a krajina',
    q:'Má kraj blokovať veterné a iné veľké energetické projekty, ak s nimi nesúhlasia dotknuté obce?',
    w:'Energetické projekty môžu pomôcť energetickej bezpečnosti a novým investíciám. Ak však miestne obce nesúhlasia, vzniká spor medzi nadradeným verejným záujmom a právom komunity brániť svoje územie.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Podpora obcí',
    q:'Má kraj viazať dotácie pre obce a mestá viac na merateľné výsledky a jasné podmienky?',
    w:'Prísnejšie pravidlá môžu zvýšiť efektívnosť a kontrolu peňazí. Menšie obce však môžu mať problém splniť všetky podmienky a môžu byť pri žiadostiach znevýhodnené.',
    a:{baska:'neutral', svitkova:'agree'}
  },
  {
    t:'Kontinuita vs. zmena',
    q:'Potrebuje Trenčiansky kraj po troch volebných obdobiach Jaroslava Bašku skôr kontinuitu, alebo výraznú zmenu vedenia?',
    w:'Baška obhajuje kontinuitu aj výsledkami a rastom majetku kraja. Opozícia tvrdí, že po dlhých rokoch jednej moci potrebuje kraj nový štýl riadenia, viac kontroly a menej zotrvačnosti.',
    a:{baska:'agree', svitkova:'disagree'}
  }
];
