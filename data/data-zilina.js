// ── Volebná kalkulačka 2026 — ŽILINA + ŽILINSKÝ KRAJ ──
// Obsahuje voľby: primátor/primátorka Žiliny a predseda/predsedníčka ŽSK.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor / Primátorka Žiliny ──
window.VAA_DATA.candidates['zilina_primator'] = [
  {id:'fiabane',name:'Peter Fiabáne',party:'Nezávislý / Iná Žilina / Žilina si zaslúži viac',color:'#0B6E4F',url:'https://www.peterfiabane.sk'},
  {id:'cibulka',name:'Peter Cibulka',party:'Nezávislý',color:'#B02E0C',url:'https://www.petercibulka.sk'},
  {id:'johanes',name:'Rastislav Johanes',party:'Nezávislý',color:'#6A4C93',url:'https://johanes.sk/'},
  {id:'kozlik',name:'Anton Kozlík',party:'Nezávislý',color:'#F4A261',url:''},
  {id:'sokol',name:'Miroslav Sokol',party:'Nezávislý',color:'#264653',url:'https://www.facebook.com/people/Miroslav-Sokol/61575889321926/'}
];

// ── Kandidáti: Predseda / Predsedníčka ŽSK ──
window.VAA_DATA.candidates['zilina_vuc'] = [
  {id:'jurinova',name:'Erika Jurinová',party:'Nezávislá',color:'#7A2E8A',url:'https://jurinova.sk/'},
  // POZN: Belousovová, Kapitulík a Choma – postoje sú ODHADNUTÉ (verified:false pre data.json)
  {id:'belousovova',name:'Anna Belousovová',party:'Republika',color:'#2A4B9B',url:''},
  {id:'kapitulik',name:'Martin Kapitulík',party:'Nezávislý',color:'#0E7C86',url:'https://www.martinkapitulik.sk/'},
  {id:'choma',name:'Igor Choma',party:'Smer-SD / Hlas-SD',color:'#C3112B',url:''}
];

// ── Otázky: Primátor / Primátorka Žiliny ──
window.VAA_DATA.questions.zilina_primator = [
  {t:'Parkovanie',q:'Má Žilina pokračovať v rozširovaní plateného rezidentského parkovania aj na Vlčince a ďalšie časti mesta?',w:'Regulované parkovanie už platí v centre, na Hájiku a Solinkách a od 1. augusta 2026 aj na Hlinách V–VII a časti Bôrika. V roku 2027 majú nasledovať Vlčince. Regulácia zvýhodňuje rezidentov, ale ruší časť bezplatného státia.',a:{fiabane:'agree',cibulka:'disagree',johanes:'disagree',kozlik:'neutral',sokol:'disagree'}},
  {t:'Fond mobility',q:'Má mesto z Fondu mobility dávať viac peňazí na opravy ciest a chodníkov než na nové cyklotrasy?',w:'Žilina plánuje v roku 2026 investovať do rozvoja viac ako 23,3 mil. €. Peniaze na dopravu sa delia medzi opravy existujúcich ciest a chodníkov a nové projekty mobility; vyšší podiel na opravy znamená pomalšie budovanie cyklotrás.',a:{fiabane:'disagree',cibulka:'agree',johanes:'agree',kozlik:'agree',sokol:'agree'}},
  {t:'Nájomné bývanie',q:'Má mesto vstúpiť do spoločného podniku so súkromným fondom na výstavbu nájomných bytov, ak tým získa stovky bytov rýchlejšie?',w:'V Žiline eviduje systém podporovaného nájomného bývania približne 670 záujemcov, v celom kraji vyše 1 300. Spoločný podnik so súkromným fondom môže výstavbu urýchliť, ale mesto zdieľa kontrolu aj budúci ekonomický úžitok.',a:{fiabane:'agree',cibulka:'neutral',johanes:'neutral',kozlik:'agree',sokol:'neutral'}},
  {t:'Majetok mesta',q:'Má mesto vkladať svoje lukratívne pozemky do spoločných projektov nájomného bývania namiesto ich predaja alebo dlhodobého prenájmu za trhovú cenu?',w:'Mesto má približne 1 110 nájomných bytov a zároveň stovky ďalších záujemcov o dostupné bývanie. Vklad mestského pozemku môže pomôcť postaviť nové byty bez plného financovania mesta, predaj alebo prenájom však prináša jasnejší trhový výnos.',a:{fiabane:'agree',cibulka:'disagree',johanes:'agree',kozlik:'neutral',sokol:'neutral'}},
  {t:'Kontrola projektov',q:'Má zastupiteľstvo znovu schváliť každý veľký projekt, ktorého cena sa zvýši o viac než 10 %?',w:'Žilina plánuje v roku 2026 investície za viac ako 23,3 mil. €. Povinné nové hlasovanie pri zdražení projektu nad 10 % by posilnilo kontrolu poslancov, ale pri nečakaných stavebných prácach môže realizáciu spomaliť.',a:{fiabane:'neutral',cibulka:'agree',johanes:'agree',kozlik:'agree',sokol:'agree'}},
  {t:'MHD',q:'Má mesto pokračovať vo veľkých investíciách do trolejbusovej dopravy a depa aj v čase, keď obyvatelia tlačia na riešenie bežných problémov v uliciach?',w:'Modernizácia trolejbusového depa stála približne 36,1 mil. €; pri hlavnej fáze pokrývali EÚ a štát 95 % nákladov a mesto 5 %. Ďalšie investície môžu zlepšiť MHD na desaťročia, ale súťažia s opravami ulíc a chodníkov.',a:{fiabane:'agree',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'MHD',q:'Má Žilina zaviesť 20-minútový interval MHD na hlavných trasách počas pracovných dní, aj keby musela výrazne zvýšiť dotáciu dopravnému podniku?',w:'Dvadsaťminútový interval na hlavných trasách by skrátil čakanie a zvýšil použiteľnosť MHD. Znamenal by však viac kilometrov, vodičov a vozidiel, teda vyššiu pravidelnú dotáciu dopravnému podniku; presnú cenu takéhoto modelu mesto zatiaľ nezverejnilo.',a:{fiabane:'neutral',cibulka:'agree',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Cyklodoprava',q:'Má mesto budovať oddelené cyklotrasy aj tam, kde sa zrušia parkovacie miesta alebo jazdný pruh?',w:'Žilina v roku 2026 plánuje viac ako 23,3 mil. € investícií a doprava patrí medzi hlavné oblasti. V zastavaných uliciach sa však nový priestor nedá vždy vytvoriť bez zrušenia parkovacích miest alebo jazdného pruhu.',a:{fiabane:'agree',cibulka:'disagree',johanes:'disagree',kozlik:'disagree',sokol:'disagree'}},
  {t:'Údržba',q:'Má mesto odložiť nové veľké projekty, kým výrazne nezníži investičný dlh na cestách, chodníkoch a podjazdoch?',w:'Žilina v roku 2026 zvýšila plánované investície na viac ako 23,3 mil. €, o viac než polovicu oproti predchádzajúcemu roku. Odklad nových projektov by uvoľnil kapacitu na opravy, ale môže ohroziť pripravené projekty a externé financovanie.',a:{fiabane:'disagree',cibulka:'agree',johanes:'agree',kozlik:'neutral',sokol:'agree'}},
  {t:'Rozpočet',q:'Má Žilina hospodáriť opatrnejšie a obmedziť nové projekty, ak by hrozilo ďalšie zadlžovanie mesta?',w:'Rozpočet mesta na rok 2026 je približne 138,6 mil. €, z toho viac než 113 mil. € tvoria bežné výdavky a približne 21 mil. € investície. Nový dlh môže urýchliť projekty, ale splátky znižujú priestor v ďalších rozpočtoch.',a:{fiabane:'neutral',cibulka:'agree',johanes:'agree',kozlik:'agree',sokol:'agree'}},
  {t:'Šport',q:'Má mesto uprednostniť menšie športoviská na sídliskách pred ďalším veľkým športovým projektom?',w:'Mesto pripravuje napríklad novú multifunkčnú halu v Bánovej s hľadiskom pre približne 180 ľudí a štyrmi odbornými učebňami. Veľké zariadenie sústredí služby na jednom mieste; menšie športoviská rozdelia investície medzi viac štvrtí.',a:{fiabane:'neutral',cibulka:'agree',johanes:'agree',kozlik:'agree',sokol:'neutral'}},
  {t:'Zeleň',q:'Má Žilina chrániť existujúce stromy a zeleň prísnejšie, aj keby to komplikovalo niektoré stavebné a dopravné projekty?',w:'Pri väčších rekonštrukciách môže ochrana stromov meniť trasovanie ciest, parkovanie aj cenu projektu. Žilina má od roku 2026 nový manuál výsadby a zeleň používa aj ako opatrenie proti prehrievaniu a na zadržiavanie vody.',a:{fiabane:'agree',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Developeri',q:'Má Žilina znížiť poplatok za rozvoj z 35 na 20 €/m², ak by to mohlo podporiť novú bytovú výstavbu?',w:'Žilina vyberá pri novej výstavbe poplatok za rozvoj 35 €/m²; diskutovalo sa o znížení na 20 €/m². Nižšia sadzba znižuje náklady investora, ale mesto príde o peniaze, ktoré môže použiť na cesty, školy či inú infraštruktúru.',a:{fiabane:'disagree',cibulka:'neutral',johanes:'neutral',kozlik:'disagree',sokol:'agree'}},
  {t:'Opravy',q:'Má mesto určovať poradie opráv ulíc podľa merateľných dát aj vtedy, keď obyvatelia alebo poslanci žiadajú inú prioritu?',w:'V roku 2026 mesto plánuje investície za viac ako 23,3 mil. €, preto nemôže opraviť všetko naraz. Poradie podľa technického stavu, dopravy či bezpečnosti obmedzuje politické zásahy, ale môže odsunúť problém, ktorý obyvatelia konkrétnej štvrte považujú za naliehavejší.',a:{fiabane:'neutral',cibulka:'disagree',johanes:'agree',kozlik:'neutral',sokol:'agree'}},
  {t:'Sociálne bývanie',q:'Má mesto vyhradiť časť nových nájomných bytov pre ľudí v bytovej núdzi, aj keď sa tým predĺži čakanie ostatných žiadateľov?',w:'Žilina realizuje projekt dostupného bývania za približne 500 000 €, ktorý má do roku 2028 pomôcť najmenej 20 klientom v ohrození. Vyhradenie časti nových bytov týmto domácnostiam pomôže najzraniteľnejším, ale predĺži čakanie ostatných.',a:{fiabane:'agree',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Bezpečnosť',q:'Má mesto výrazne posilniť mestskú políciu a rozšíriť kamerový systém, aj keby menej peňazí zostalo na sociálnu prevenciu?',w:'Pred modernizáciou malo mesto približne 100 bezpečnostných kamier a systém sa ďalej rozširuje. Viac policajtov a kamier môže zvýšiť dohľad a rýchlosť zásahov, ale prináša trvalé personálne a prevádzkové náklady a menej peňazí na prevenciu.',a:{fiabane:'agree',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Stanica a centrum',q:'Má mesto investovať viac do okolia stanice a centra aj za cenu menších investícií na sídliskách?',w:'Žilina plánuje v roku 2026 investície za viac ako 23,3 mil. €, no rovnaké peniaze nemôžu ísť naraz do centra aj všetkých obytných štvrtí. Okolie stanice využíva veľa cestujúcich, kým investície na sídliskách zlepšujú každodenné služby obyvateľov.',a:{fiabane:'neutral',cibulka:'disagree',johanes:'disagree',kozlik:'disagree',sokol:'disagree'}},
  {t:'Výstavba',q:'Má mesto obmedziť veľké bytové projekty v existujúcich štvrtiach, aj keby sa tým postavilo menej nových bytov?',w:'V Žiline je približne 670 záujemcov o podporované nájomné bývanie, takže tlak na nové byty je reálny. Zahusťovanie existujúcich štvrtí zvyšuje ponuku bez rozširovania mesta, ale môže zhoršiť dopravu, parkovanie a zaťažiť služby.',a:{fiabane:'neutral',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Participácia',q:'Majú obyvatelia priamo rozhodovať o 1 % bežných výdavkov mesta prostredníctvom participatívneho rozpočtu?',w:'Bežné výdavky Žiliny na rok 2026 presahujú 113 mil. €. Jedno percento je približne 1,13 mil. €, o ktorých by priamo rozhodovali obyvatelia; vedenie mesta by však stratilo časť voľnosti pri určovaní priorít.',a:{fiabane:'agree',cibulka:'agree',johanes:'neutral',kozlik:'agree',sokol:'neutral'}},
  {t:'Kultúra',q:'Má Žilina garantovať kultúre najmenej 2 % bežných výdavkov, aj keby menej peňazí zostalo na cesty a športoviská?',w:'Bežné výdavky mesta na rok 2026 presahujú 113 mil. €, takže 2 % predstavujú približne 2,3 mil. € ročne. Samotný grantový program pre kultúrne projekty má v roku 2026 120 000 €; garantované 2 % by zahŕňali aj širšie kultúrne výdavky mesta.',a:{fiabane:'neutral',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Podnikanie',q:'Má Žilina aktívnejšie lákať investorov a firmy, aj keby to znamenalo ústupky v majetkovej politike mesta?',w:'Nová výstavba môže priniesť pracovné miesta a príjmy, ale mestské pozemky a infraštruktúra majú vlastnú trhovú hodnotu. Pri rozpočte mesta približne 138,6 mil. € môže aj väčšia majetková úľava znamenať citeľný verejný náklad.',a:{fiabane:'neutral',cibulka:'agree',johanes:'neutral',kozlik:'agree',sokol:'agree'}},
  {t:'Školy a škôlky',q:'Má mesto odložiť obnovu historického centra, ak bez toho nevie rozšíriť kapacity škôlok v rastúcich štvrtiach?',w:'Mesto investuje aj do školských kapacít: projekt na ZŠ Javorku za približne 721 000 € modernizuje priestory pre asi 500 používateľov a zvyšuje kapacitu o 36 miest. Peniaze vložené do škôl však nemožno súčasne použiť na obnovu centra.',a:{fiabane:'neutral',cibulka:'agree',johanes:'agree',kozlik:'agree',sokol:'agree'}},
  {t:'Verejný priestor',q:'Má mesto prísnejšie regulovať vizuálny smog, reklamné plochy a chaotické úpravy verejného priestoru?',w:'Prísnejšia regulácia môže obmedziť reklamné plochy a zjednotiť vzhľad ulíc, no zasahuje do využívania súkromného majetku a príjmov z reklamy.',a:{fiabane:'agree',cibulka:'neutral',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Technické služby',q:'Má Žilina zadávať viac údržby vlastným Technickým službám, aj keď súkromná firma ponúkne nižšiu cenu?',w:'V roku 2026 mesto po viac než 30 rokoch prevzalo správu komunikácií od externých spoločností pod vlastné Technické služby. Vlastná firma dáva mestu väčšiu kontrolu a rýchlejšie zadávanie prác, súkromník však môže pri konkrétnej zákazke ponúknuť nižšiu cenu.',a:{fiabane:'agree',cibulka:'agree',johanes:'neutral',kozlik:'neutral',sokol:'neutral'}},
  {t:'Investície',q:'Má Žilina pokračovať v rozbehnutých veľkých projektoch aj za cenu pomalšieho riešenia každodennej údržby?',w:'Žilina plánuje v roku 2026 investície za viac ako 23,3 mil. €, čo je medziročne nárast o viac než polovicu. Dokončenie pripravených projektov môže využiť externé zdroje a už zaplatenú prípravu, ale viaže peniaze a kapacity potrebné na bežnú údržbu.',a:{fiabane:'agree',cibulka:'disagree',johanes:'disagree',kozlik:'disagree',sokol:'disagree'}}
];

// ── Otázky: Predseda / Predsedníčka ŽSK ──
window.VAA_DATA.questions.zilina_vuc = [
  {t:'Cesty a mosty',
   q:'Má Žilinský kraj dať absolútnu prioritu rekonštrukcii ciest II. a III. triedy, aj keby to spomalilo iné investície?',
   w:'Správa ciest patrí medzi najviditeľnejšie kompetencie kraja. V Žilinskom kraji je téma stavu ciest a mostov mimoriadne citlivá pre horský terén, tranzit aj regionálne rozdiely. Otázka je, či má kraj sústrediť čo najviac peňazí práve sem, alebo udržať širšie investičné priority.',
   a:{jurinova:'neutral',belousovova:'agree',kapitulik:'neutral',choma:'agree'}},

  {t:'Verejná doprava',
   q:'Je potrebné zachovať autobusové spojenia aj v menej obývaných oblastiach, aj keď sú stratové.',
   w:'Riedko osídlené časti Oravy, Kysúc, Turca či Liptova sú odkázané na verejnú dopravu viac než veľké mestá. Ekonomicky nevýhodné linky však zaťažujú rozpočet. Rozhoduje sa medzi dostupnosťou služieb pre všetkých a efektívnym využitím verejných peňazí.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Nemocnice',
   q:'Je správne dotovať svoje nemocnice a stabilizačné programy pre zdravotníkov, aj keď roky vykazujú stratu.',
   w:'Nemocnice v pôsobnosti ŽSK čelia finančným problémom, ale zároveň patria medzi najdôležitejšie verejné služby v kraji. Kraj môže straty vnímať ako signál na tvrdšiu racionalizáciu alebo ako cenu za udržanie dostupnej zdravotnej starostlivosti v regiónoch.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Zdravotníci',
   q:'Má kraj ponúkať motivačné programy pre sestry, lekárov a ďalší personál, aby ich udržal vo svojich zariadeniach?',
   w:'Nedostatok zdravotníckeho personálu neohrozuje len kvalitu, ale aj samotnú dostupnosť zdravotnej starostlivosti. Motivačné programy stoja peniaze, no bez nich môže kraj strácať ľudí do väčších nemocníc či do zahraničia.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj viac investovať do zariadení sociálnych služieb a starostlivosti o seniorov aj za cenu menšieho priestoru pre iné oblasti?',
   w:'Starnutie populácie zvyšuje tlak na domovy sociálnych služieb, opatrovateľské kapacity aj modernizáciu zariadení. Ide o jednu z najnáročnejších oblastí verejnej politiky, kde dopyt rastie rýchlejšie než rozpočtové možnosti.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj podporovať skôr rozširovanie vlastných zariadení než financovanie služieb u neverejných poskytovateľov?',
   w:'Pri raste dopytu po sociálnych službách stojí kraj pred voľbou, či má viac budovať vlastné kapacity, alebo sa opierať aj o súkromných a cirkevných poskytovateľov. Obe cesty majú svoje náklady, limity aj ideové východiská.',
   a:{jurinova:'neutral',belousovova:'agree',kapitulik:'neutral',choma:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj prioritne investovať do modernizácie stredných škôl, aby lepšie reagovali na potreby trhu práce?',
   w:'ŽSK je zriaďovateľom stredných škôl a nesie zodpovednosť za to, či absolventi nájdu uplatnenie. Modernizácia odborného vzdelávania môže pomôcť firmám aj mladým ľuďom, no vyžaduje vysoké investície a spoluprácu so zamestnávateľmi.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj zachovať aj menšie stredné školy v slabších regiónoch, aj keď sú dlhodobo menej efektívne?',
   w:'Menšie školy môžu byť pre región dôležité sociálne aj dopravne, no pri nízkom počte študentov bývajú drahšie na prevádzku. Spor je medzi regionálnou dostupnosťou vzdelania a racionalizáciou siete škôl.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'neutral',choma:'agree'}},

  {t:'Trh práce',
   q:'Má kraj užšie prepájať odborné školy s veľkými firmami a priemyselnými klastrami, aj keby sa tým časť odborov viac podriadila potrebám trhu?',
   w:'Žilinský kraj patrí medzi priemyselne najsilnejšie regióny Slovenska, no firmy zároveň upozorňujú na nedostatok pripravených absolventov. Väčšie prepojenie škôl s praxou môže zvýšiť zamestnateľnosť, no zároveň vyvoláva obavy, aby školy nestratili širšiu vzdelávaciu funkciu.',
   a:{jurinova:'agree',belousovova:'neutral',kapitulik:'agree',choma:'agree'}},

  {t:'Ovzdušie',
   q:'Má kraj viac investovať do znižovania znečistenia ovzdušia v regiónoch ako Kysuce, Orava a Turiec, aj keď to nie je jeho najviditeľnejšia kompetencia?',
   w:'Pretrvávajúce problémy s prachovými časticami a benzo[a]pyrénom sú spojené najmä s vykurovaním domácností tuhými palivami. Kraj nemá v rukách všetky nástroje, no môže koordinovať projekty, podporovať osvetu, energetické riešenia a tlak na systémové opatrenia.',
   a:{jurinova:'agree',belousovova:'neutral',kapitulik:'agree',choma:'neutral'}},

  {t:'Energetika',
   q:'Má kraj urýchliť zatepľovanie a energetické úspory vo svojich budovách, aj keď sa investície vrátia až o niekoľko rokov?',
   w:'Župa spravuje veľké množstvo budov napr. školy, nemocnice, kultúrne inštitúcie či zariadenia sociálnych služieb. Energetické úspory znižujú budúce náklady, no vyžadujú značné vstupné investície.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

 {t:'Nemocnice',
   q:'Ak by si to vyžadovala finančná situácia, mal by kraj pristúpiť aj k nepopulárnym zmenám v riadení svojich nemocníc?',
   w:'Straty nemocníc vytvárajú tlak na vedenie kraja, aby nehľadalo len dodatočné peniaze, ale aj hlbšie manažérske opatrenia. Takéto kroky môžu byť nevyhnutné, no zároveň politicky aj sociálne citlivé.',
   a:{jurinova:'neutral',belousovova:'neutral',kapitulik:'agree',choma:'neutral'}},

  {t:'Energetika',
   q:'Má kraj pri modernizácii svojich budov uprednostniť čo najrýchlejšie zníženie prevádzkových nákladov pred reprezentatívnymi rekonštrukciami?',
   w:'Po energetickej kríze sa ukázalo, že mnohé krajské budovy sú drahé na prevádzku. Otázka preto znie, či má byť hlavným cieľom úspora energií a funkčnosť, alebo širšie, vizuálne a architektonicky ambicióznejšie obnovy.',
   a:{jurinova:'neutral',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Rozpočet',
   q:'Má kraj v neistých časoch hospodáriť opatrnejšie a obmedziť nové ambiciózne projekty?',
   w:'Kraj hospodári s rozpočtom v stovkách miliónov eur a musí vyvažovať investície, prevádzku aj financovanie služieb. Opatrnosť znižuje riziko budúcich problémov, ale môže spomaliť rozvoj a čerpanie vonkajších zdrojov.',
   a:{jurinova:'disagree',belousovova:'agree',kapitulik:'disagree',choma:'disagree'}},

 {t:'Cesty a mosty',
   q:'Má kraj presúvať viac peňazí na havarijný stav mostov a rizikových úsekov aj za cenu obmedzenia nových projektov?',
   w:'V horských regiónoch kraja sú mosty a zosuvné úseky kľúčovou podmienkou bezpečnej dopravy. Opravy týchto miest bývajú technicky aj finančne veľmi náročné, no ich odklad zvyšuje bezpečnostné aj ekonomické riziká.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'neutral',choma:'agree'}},

  {t:'Eurofondy',
   q:'Má byť pre kraj prioritou pripraviť čo najviac projektov na eurofondy, aj keď si to vyžiada vyššie spolufinancovanie z vlastného rozpočtu?',
   w:'Externé zdroje vedia výrazne posunúť školy, nemocnice, cesty či kultúru. No aj eurofondový projekt niečo stojí a vyžaduje schopný aparát, prípravu a spoluúčasť. Otázka je, či má kraj hrať aktívne a vo veľkom, alebo opatrnejšie.',
   a:{jurinova:'agree',belousovova:'neutral',kapitulik:'agree',choma:'agree'}},

  {t:'Vyľudňovanie regiónov',
   q:'Má kraj cielene posilňovať služby v odľahlejších regiónoch, aj keď je to drahšie než sústrediť ich do väčších centier?',
   w:'Jednou z najväčších výziev ŽSK je rozdiel medzi centrami a perifériami. Posilňovanie služieb v menších mestách a obciach môže zlepšiť kvalitu života aj udržať obyvateľov v regióne, no je finančne náročnejšie než centralizácia.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Regionálna rovnováha',
   q:'Má vedenie kraja garantovať vyrovnanejšie zastúpenie regiónov vo vedení župy a pri veľkých investíciách?',
   w:'Žilinský kraj má silné regionálne identity ako Kysuce, Orava, Turiec, Liptov aj Horné Považie často sledujú, či nie sú pri investíciách prehliadané. Otázka smeruje k tomu, či má byť regionálna vyváženosť explicitnou politickou zásadou.',
   a:{jurinova:'neutral',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Cestovný ruch',
   q:'Má kraj viac investovať do cestovného ruchu, aj keď výsledky takých projektov sa prejavia až neskôr?',
   w:'Liptov, Orava, Malá Fatra či Kysuce majú silný turistický potenciál. Cielená podpora cestovného ruchu môže priniesť pracovné miesta a príjmy, no nie vždy je jasné, či investície prinášajú férový úžitok pre celý kraj.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Životné prostredie',
   q:'Má kraj viac podporovať cyklotrasy a ekologickú dopravu aj za cenu, že časť voličov to nepovažuje za prioritu?',
   w:'Kraj má v rukách najmä plánovanie, koordináciu a vlastné investície, nie všetky ekologické politiky. Napriek tomu môže ovplyvniť, či bude mobilita a verejné budovy šetrnejšie k životnému prostrediu. Ide o spor medzi dlhodobou udržateľnosťou a bezprostrednými každodennými problémami.',
   a:{jurinova:'agree',belousovova:'disagree',kapitulik:'agree',choma:'neutral'}},

  {t:'Transparentnosť',
   q:'Má kraj zverejňovať zrozumiteľné odôvodnenia veľkých zmlúv a investičných rozhodnutí ešte pred ich schválením?',
   w:'Formálne zverejnenie dokumentov často nestačí na to, aby sa v nich občania vyznali. Lepšia transparentnosť by mohla zvýšiť dôveru a verejnú kontrolu, no zároveň predĺžiť procesy a zvýšiť administratívnu záťaž úradu.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'neutral'}},

  {t:'Verejná doprava',
   q:'Má kraj ďalej rozširovať integrovanú dopravu a jednotný cestovný lístok aj vtedy, ak si to vyžiada vyššie dotácie?',
   w:'Integrovaná doprava má zjednodušiť cestovanie medzi vlakmi, autobusmi a mestskou dopravou. Prínosom je väčší komfort pre cestujúcich a lepšie prepojenie regiónov, nevýhodou sú vyššie nároky na organizáciu a financovanie systému.',
   a:{jurinova:'agree',belousovova:'neutral',kapitulik:'agree',choma:'agree'}},

  {t:'Participácia',
   q:'Má kraj viac zapájať starostov, primátorov a verejnosť do tvorby priorít, aj keby bolo rozhodovanie pomalšie?',
   w:'Vyššia participácia môže zvýšiť legitimitu rozhodnutí a pomôcť lepšie zachytiť potreby územia. Zároveň však môže spomaliť prijímanie rozhodnutí a oslabiť schopnosť vedenia konať rýchlo a strategicky.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Kontrola výkonu',
   q:'Má predseda kraja pravidelne zverejňovať prehľad splnených a nesplnených sľubov a merateľných výsledkov župy?',
   w:'Krajská politika býva pre mnohých voličov menej čitateľná než komunálna či národná. Verejný účet sľubov by mohol zvýšiť kontrolu a tlak na výsledky, no zároveň by vystavil vedenie kraja priebežnej verejnej kritike.',
   a:{jurinova:'agree',belousovova:'agree',kapitulik:'agree',choma:'agree'}},

  {t:'Investičná filozofia',
   q:'Má byť župan skôr tvrdý správca rozpočtu a služieb než politický líder veľkých vízií?',
   w:'Aj pri krajskej politike ide často o stret dvoch štýlov. Jeden stavia na opatrnom hospodárení, detailnom manažmente a stabilite služieb. Druhý na väčších rozvojových projektoch, aktívnejšom získavaní zdrojov a ambícii meniť smerovanie kraja výraznejšie.',
   a:{jurinova:'disagree',belousovova:'agree',kapitulik:'disagree',choma:'disagree'}}
];

