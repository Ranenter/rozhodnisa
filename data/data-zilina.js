// ── Volebná kalkulačka 2026 — ŽILINA + ŽILINSKÝ KRAJ ──
// Obsahuje voľby: primátor/primátorka Žiliny a predseda/predsedníčka ŽSK.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor / Primátorka Žiliny ──
window.VAA_DATA.candidates['zilina_primator'] = [
  {id:'fiabane',name:'Peter Fiabáne',party:'Nezávislý / Iná Žilina / Žilina si zaslúži viac',color:'#0B6E4F',url:'https://www.peterfiabane.sk'},
  {id:'cibulka',name:'Peter Cibulka',party:'Nezávislý',color:'#B02E0C',url:'https://www.petercibulka.sk'}
];

// ── Kandidáti: Predseda / Predsedníčka ŽSK ──
window.VAA_DATA.candidates['zilina_vuc'] = [
  {id:'janckulik',name:'Igor Janckulík',party:'KDH',color:'#1E4FA1',url:'https://igorjanckulik.sk/'},
  {id:'jurinova',name:'Erika Jurinová',party:'nezávislá',color:'#7A2E8A',url:'https://jurinova.sk/'}
];

// ── Otázky: Primátor / Primátorka Žiliny ──
window.VAA_DATA.questions.zilina_primator = [

  // Q1
  {t:'Parkovanie',
   q:'Má Žilina ďalej rozširovať platené parkovanie aj za cenu, že časť vodičov príde o bezplatné státie pri svojom byte/dome?',
   w:'Parkovacia politika patrí medzi najviditeľnejšie komunálne témy v Žiline. Mesto postupne rozširuje regulované zóny, pričom cieľom je znížiť chaos, zvýšiť dostupnosť miest a zvýhodniť rezidentov. Kritici hovoria o strate komfortu a vyšších nákladoch pre domácnosti, podporovatelia o potrebe zaviesť pravidlá v preplnených štvrtiach.',
   a:{fiabane:'agree',cibulka:'disagree'}},

  // Q2
  {t:'Doprava',
   q:'Má mesto uprednostniť opravy hlavných ciest a križovatiek pred budovaním nových cyklotrás?',
   w:'Žilina rieši dopravné preťaženie, stav ciest aj bezpečnosť cyklistov naraz. Rozpočet mesta je obmedzený, preto sa často rozhoduje medzi údržbou existujúcej automobilovej infraštruktúry a rozširovaním alternatívnej mobility. Ide o klasickú dilemu medzi krátkodobou úľavou pre vodičov a dlhodobou zmenou dopravného správania.',
   a:{fiabane:'disagree',cibulka:'agree'}},

  // Q3
  {t:'Bývanie',
   q:'Má Žilina aktívne stavať mestské nájomné byty v partnerstve so súkromnými investormi?',
   w:'Žilina v roku 2026 rozbehla tému nájomného bývania ako odpoveď na drahé hypotéky a odchod mladých rodín. Sporné je najmä to, či má mesto do výstavby vstupovať cez developerskú spoločnosť a majetkové vklady, alebo radšej ponechať bytovú výstavbu trhu. Zástancovia hovoria o jedinom realistickom spôsobe, ako zvýšiť ponuku dostupných bytov, kritici o riziku nevýhodného nakladania s mestským majetkom.',
   a:{fiabane:'agree',cibulka:'disagree'}},

  // Q4
  {t:'Majetok mesta',
   q:'Má mesto prestať vkladať atraktívne pozemky do spoločných projektov a radšej ich prenajímať alebo predať za trhovú cenu?',
   w:'V Žiline sa ostro diskutuje o tom, ako narábať s mestskými pozemkami, najmä pri väčších projektoch. Jedna línia tvrdí, že majetok mesta má zostať pod silnou verejnou kontrolou a prinášať stabilný výnos, druhá, že bez aktívneho vstupu mesta do projektov sa nájomné bývanie a ďalšie strategické investície nikdy nepohnú.',
   a:{fiabane:'disagree',cibulka:'agree'}},

  // Q5
  {t:'Transparentnosť',
   q:'Má mesto povinne zverejňovať všetky zmluvy, dodatky a odôvodnenia výberu dodávateľov pri zákazkách nad 5 000 eur ešte pred podpisom?',
   w:'Transparentnosť verejných zákaziek je dlhodobo silná téma vo všetkých väčších mestách. Zákon vyžaduje zverejňovanie zmlúv, no nie vždy detailné zdôvodnenie výberu víťaza v zrozumiteľnej podobe. Takéto pravidlo by zvýšilo kontrolu verejnosti, ale zároveň predĺžilo niektoré procesy a zvýšilo administratívu.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q6
  {t:'MHD',
   q:'Má mesto pokračovať vo veľkých investíciách do trolejbusovej dopravy a depa aj v čase, keď obyvatelia tlačia na riešenie bežných problémov v uliciach?',
   w:'Modernizácia trolejbusového depa patrí medzi najväčšie dopravné investície v novodobej histórii mesta. Podporovatelia hovoria o ekologickej a systémovej zmene MHD na desaťročia dopredu, kritici namietajú, že obyvatelia skôr cítia rozbité chodníky, parkovanie a zanedbanú každodennú údržbu.',
   a:{fiabane:'agree',cibulka:'neutral'}},

  // Q7
  {t:'MHD',
   q:'Mala by byť mestská hromadná doprava v Žiline lacnejšia alebo úplne bezplatná pre vybrané skupiny, aj keby si to vyžiadalo vyššiu dotáciu z rozpočtu?',
   w:'Lacnejšia MHD môže pomôcť znížiť počet áut v meste a zlepšiť dostupnosť dopravy pre študentov, seniorov či pracujúcich s nižšími príjmami. Na druhej strane, každé zníženie cestovného znamená vyššiu záťaž pre mestský rozpočet alebo menší priestor na investície inde.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q8
  {t:'Cyklodoprava',
   q:'Má Žilina budovať oddelené cyklotrasy aj za cenu rušenia časti parkovacích miest alebo jazdných pruhov?',
   w:'Cyklodoprava v Žiline rastie, ale sieť trás je stále neúplná a miestami nesúvislá. Ak má byť bicykel reálnou alternatívou, často to znamená ubrať priestor autám. Ide o hodnotový spor medzi komfortom individuálnej automobilovej dopravy a bezpečnosťou aktívnej mobility.',
   a:{fiabane:'agree',cibulka:'disagree'}},

  // Q9
  {t:'Chodníky a cesty',
   q:'Má byť oprava existujúcich chodníkov, ciest a podjazdov hlavnou investičnou prioritou mesta pred novými vizionárskymi projektmi?',
   w:'Mnohí obyvatelia hodnotia samosprávu podľa stavu ulíc, chodníkov, priechodov a verejného priestoru vo svojom okolí. Zároveň však mesto potrebuje myslieť aj na väčšie systémové investície. Táto otázka oddeľuje „dobrého správcu“ od „mestského vizionára“ — a hľadá správny pomer medzi nimi.',
   a:{fiabane:'neutral',cibulka:'agree'}},

  // Q10
  {t:'Rozpočet',
   q:'Má Žilina v nasledujúcich rokoch hospodáriť opatrnejšie a obmedziť nové projekty, ak by hrozilo ďalšie zadlžovanie mesta?',
   w:'Rozpočet mesta rastie, no rastú aj očakávania na investície, údržbu a služby. Opatrnejší prístup znižuje finančné riziká, ale môže spomaliť rozvoj. Ambicióznejší prístup môže priniesť rýchlejšiu zmenu, no za cenu vyššieho tlaku na budúce rozpočty.',
   a:{fiabane:'disagree',cibulka:'agree'}},

  // Q11
  {t:'Šport a voľný čas',
   q:'Má mesto viac investovať do verejne dostupných športovísk, detských ihrísk a rekreačných zón aj na sídliskách?',
   w:'Kvalita života v meste nezávisí len od dopravy a bývania, ale aj od toho, či majú ľudia dostupný verejný priestor pre šport, oddych a deti. Takéto projekty sú populárne a viditeľné, no zároveň konkurujú iným investičným prioritám, ktoré nemusia byť na prvý pohľad také atraktívne.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q12
  {t:'Zeleň',
   q:'Má Žilina chrániť existujúce stromy a zeleň prísnejšie, aj keby to komplikovalo niektoré stavebné a dopravné projekty?',
   w:'Stromy znižujú prehrievanie mesta, zlepšujú kvalitu ovzdušia a robia verejný priestor obývateľnejším. Na druhej strane, prísna ochrana zelene vie predĺžiť povoľovanie investícií, zvyšovať náklady a obmedziť niektoré dopravné riešenia. V komunálnej politike ide o častý konflikt medzi rozvojom a kvalitou prostredia.',
   a:{fiabane:'agree',cibulka:'neutral'}},

  // Q13
  {t:'Developeri',
   q:'Má mesto tvrdšie vyžadovať od investorov, aby pri veľkých projektoch spolufinancovali škôlky, cesty alebo verejné priestory?',
   w:'Nová výstavba prináša mestu dane aj nových obyvateľov, ale zároveň tlak na školy, parkovanie, dopravu a služby. Niektoré mestá sa snažia od developerov pýtať väčší podiel na verejnej infraštruktúre. Otázka je, či to prinesie férovejší rozvoj, alebo iba spomalí bytovú výstavbu a zvýši ceny.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q14
  {t:'Digitalizácia',
   q:'Má mesto výrazne zrýchliť digitalizáciu úradu a čo najviac podaní vybavovať online, aj keby sa časť osobných služieb obmedzila?',
   w:'Digitalizácia môže ušetriť čas občanom aj úradníkom, zvýšiť kontrolovateľnosť procesov a znížiť priestor na nejasnosti. Zároveň však časť obyvateľov stále preferuje osobný kontakt alebo nemá dostatočné digitálne zručnosti. Dôležité je, či má mesto ísť rýchlo dopredu, alebo voliť opatrnejší prechod.',
   a:{fiabane:'agree',cibulka:'neutral'}},

  // Q15
  {t:'Sociálna politika',
   q:'Má mesto cielene investovať do pomoci ľuďom v bytovej a energetickej núdzi, aj keď to neprináša politicky hneď viditeľné výsledky?',
   w:'Komunálna politika neznamená len cesty a parky, ale aj podporu ľudí, ktorí sa bez zásahu mesta môžu prepadnúť do hlbšej chudoby. Takéto opatrenia sú finančne náročné a menej „fotogenické“, no môžu znižovať dlhodobé sociálne problémy a tlak na ďalšie verejné služby.',
   a:{fiabane:'agree',cibulka:'disagree'}},

  // Q16
  {t:'Bezpečnosť',
   q:'Potrebuje Žilina viac viditeľných mestských policajtov v uliciach?',
   w:'Pocit bezpečia patrí medzi najčastejšie očakávania od mesta, najmä vo večerných hodinách, pri stanici, v podchodoch alebo na sídliskách. Posilnenie mestskej polície však znamená vyššie personálne a prevádzkové náklady a vyvoláva aj otázku, či je problém skôr v prevencii alebo v represii.',
   a:{fiabane:'neutral',cibulka:'agree'}},

  // Q17
  {t:'Stanica a centrum',
   q:'Má mesto urobiť z okolia železničnej a autobusovej stanice absolútnu prioritu mesta, aj keby to odsunulo investície do iných častí Žiliny?',
   w:'Stanica je pre mnohých prvý dojem z mesta a zároveň miesto, kde sa koncentrujú dopravné aj sociálne problémy. Investície do tejto zóny môžu mať veľký symbolický aj praktický efekt, no vždy znamenajú, že inde sa bude čakať dlhšie.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q18
  {t:'Majetkové spory',
   q:'Má mesto v sporných prípadoch okolo lukratívnych pozemkov a komerčných projektov postupovať tvrdšie aj za cenu dlhých súdnych sporov?',
   w:'Vzťahy mesta k niektorým súkromným investorom a firmám sú v Žiline témou už roky. Tvrdý postup môže byť signálom, že mesto chráni verejný záujem a svoj majetok, no zároveň môže predĺžiť neistotu a zablokovať riešenia na roky. Zmierlivejší postup môže priniesť rýchlejší kompromis, ale za cenu kritiky, že mesto ustupuje.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q19
  {t:'Participácia',
   q:'Má Žilina každý rok vyčleniť časť rozpočtu na projekty, o ktorých priamo rozhodnú obyvatelia hlasovaním?',
   w:'Participatívny rozpočet je spôsob, ako zapojiť ľudí do rozhodovania o časti verejných peňazí. Podporovatelia hovoria o väčšej dôvere a zodpovednosti obyvateľov za svoje okolie, kritici o riziku drobenia peňazí na malé projekty bez strategického dopadu.',
   a:{fiabane:'agree',cibulka:'neutral'}},

  // Q20
  {t:'Kultúra',
   q:'Má mesto pokračovať v podpore nezávislej kultúry, festivalov a komunitných podujatí aj v čase rozpočtového tlaku?',
   w:'Kultúra formuje identitu mesta, priťahuje návštevníkov a zvyšuje kvalitu života. Zároveň však býva medzi prvými oblasťami, kde sa šetrí, keď sú financie napäté. Otázka je, či je kultúra luxus navyše, alebo základná súčasť modernej mestskej politiky.',
   a:{fiabane:'agree',cibulka:'neutral'}},

  // Q21
  {t:'Podnikanie',
   q:'Má Žilina aktívnejšie lákať investorov a firmy, aj keby to znamenalo ústupky v povoľovacích procesoch alebo v majetkovej politike mesta?',
   w:'Silnejšia investičná politika môže priniesť pracovné miesta, dane a nový rozvoj. No ak mesto príliš ustúpi developerom alebo veľkým investorom, môže oslabiť svoju vyjednávaciu pozíciu a verejný záujem. Je to spor medzi rýchlejším ekonomickým rastom a prísnejšou verejnou kontrolou.',
   a:{fiabane:'neutral',cibulka:'agree'}},

  // Q22
  {t:'Školy a škôlky',
   q:'Má mesto prioritne investovať do rozširovania kapacít škôlok a základných škôl v rastúcich štvrtiach pred reprezentatívnymi projektmi v centre?',
   w:'Pre mladé rodiny je dostupnosť škôlok a škôl jednou z kľúčových tém pri rozhodovaní, či v meste zostať. Tieto investície sú menej viditeľné ako námestia či veľké stavby, ale majú silný dopad na každodenný život a dlhodobú atraktivitu mesta.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q23
  {t:'Verejný priestor',
   q:'Má mesto prísnejšie regulovať vizuálny smog, reklamné plochy a chaotické úpravy verejného priestoru?',
   w:'Reklamné nosiče, nejednotný mobiliár a zanedbané priestory znižujú kvalitu mestského prostredia, aj keď nejde vždy o najhlasnejšiu politickú tému. Prísnejšia regulácia môže zlepšiť vzhľad mesta, no naráža na záujmy podnikateľov a vlastníkov plôch.',
   a:{fiabane:'agree',cibulka:'neutral'}},

  // Q24
  {t:'Komunikácia mesta',
   q:'Má primátor pravidelne zverejňovať zrozumiteľný účet splnených a nesplnených sľubov, aby si obyvatelia vedeli skontrolovať výsledky?',
   w:'Dôvera v komunálnu politiku často stojí na tom, či ľudia rozumejú, čo sa podarilo, čo sa nepodarilo a prečo. Verejný účet sľubov môže zvýšiť tlak na zodpovednosť, ale aj odhaliť zlyhania, ktoré politici radšej vysvetľujú priebežne a menej formálne.',
   a:{fiabane:'agree',cibulka:'agree'}},

  // Q25
  {t:'Vízia',
   q:'Je pre teba dôležitejšie, aby primátor Žiliny bol skôr dobrý manažér každodenných problémov než ambiciózny vizionár veľkých projektov?',
   w:'Táto otázka odlišuje dva legitímne štýly komunálnej politiky. Jeden stavia na poriadku, údržbe, predvídateľnosti a každodennom servise mesta. Druhý na veľkých investíciách, rozvojových plánoch a snahe meniť smerovanie mesta vo väčšom meradle. Väčšina voličov nehľadá čistý extrém, ale pomer medzi oboma rolami.',
   a:{fiabane:'disagree',cibulka:'agree'}}
];

// ── Otázky: Predseda / Predsedníčka ŽSK ──
window.VAA_DATA.questions.zilina_vuc = [
  {t:'Cesty a mosty',
   q:'Má Žilinský kraj dať v najbližších rokoch absolútnu prioritu rekonštrukcii ciest II. a III. triedy, aj keby to spomalilo iné investície?',
   w:'Správa ciest patrí medzi najviditeľnejšie kompetencie kraja. V Žilinskom kraji je téma stavu ciest a mostov mimoriadne citlivá pre horský terén, tranzit aj regionálne rozdiely. Otázka je, či má kraj sústrediť čo najviac peňazí práve sem, alebo udržať širšie investičné priority.',
   a:{janckulik:'agree',jurinova:'neutral'}},

  {t:'Cesty a mosty',
   q:'Má kraj presúvať viac peňazí na havarijný stav mostov a rizikových úsekov aj za cenu obmedzenia nových projektov?',
   w:'V horských regiónoch kraja sú mosty a zosuvné úseky kľúčovou podmienkou bezpečnej dopravy. Opravy týchto miest bývajú technicky aj finančne veľmi náročné, no ich odklad zvyšuje bezpečnostné aj ekonomické riziká.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Verejná doprava',
   q:'Má kraj zachovať autobusové spojenia aj v menej obývaných oblastiach, aj keď sú stratové?',
   w:'Riedko osídlené časti Oravy, Kysúc, Turca či Liptova sú odkázané na verejnú dopravu viac než veľké mestá. Ekonomicky nevýhodné linky však zaťažujú rozpočet. Rozhoduje sa medzi dostupnosťou služieb pre všetkých a efektívnym využitím verejných peňazí.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Verejná doprava',
   q:'Má kraj ďalej rozširovať integrovanú dopravu a jednotný cestovný lístok aj vtedy, ak si to vyžiada vyššie dotácie?',
   w:'Integrovaná doprava má zjednodušiť cestovanie medzi vlakmi, autobusmi a mestskou dopravou. Prínosom je väčší komfort pre cestujúcich a lepšie prepojenie regiónov, nevýhodou sú vyššie nároky na organizáciu a financovanie systému.',
   a:{janckulik:'neutral',jurinova:'agree'}},

  {t:'Vyľudňovanie regiónov',
   q:'Má kraj cielene posilňovať služby v odľahlejších regiónoch, aj keď je to drahšie než sústrediť ich do väčších centier?',
   w:'Jednou z najväčších výziev ŽSK je rozdiel medzi centrami a perifériami. Posilňovanie služieb v menších mestách a obciach môže zlepšiť kvalitu života aj udržať obyvateľov v regióne, no je finančne náročnejšie než centralizácia.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Nemocnice',
   q:'Má kraj pokračovať v dotovaní svojich nemocníc a stabilizačných programov pre zdravotníkov, aj keď nemocnice vykazujú stratu?',
   w:'Nemocnice v pôsobnosti ŽSK čelia finančným problémom, ale zároveň patria medzi najdôležitejšie verejné služby v kraji. Kraj môže straty vnímať ako signál na tvrdšiu racionalizáciu alebo ako cenu za udržanie dostupnej zdravotnej starostlivosti v regiónoch.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Nemocnice',
   q:'Ak by si to vyžadovala finančná situácia, mal by kraj pristúpiť aj k nepopulárnym zmenám v riadení svojich nemocníc?',
   w:'Straty nemocníc vytvárajú tlak na vedenie kraja, aby nehľadalo len dodatočné peniaze, ale aj hlbšie manažérske opatrenia. Takéto kroky môžu byť nevyhnutné, no zároveň politicky aj sociálne citlivé.',
   a:{janckulik:'agree',jurinova:'neutral'}},

  {t:'Zdravotníci',
   q:'Má kraj ponúkať silnejšie motivačné programy pre sestry, lekárov a ďalší personál, aby ich udržal vo svojich zariadeniach?',
   w:'Nedostatok zdravotníckeho personálu neohrozuje len kvalitu, ale aj samotnú dostupnosť zdravotnej starostlivosti. Motivačné programy stoja peniaze, no bez nich môže kraj strácať ľudí do väčších nemocníc či do zahraničia.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj viac investovať do zariadení sociálnych služieb a starostlivosti o seniorov aj za cenu menšieho priestoru pre iné oblasti?',
   w:'Starnutie populácie zvyšuje tlak na domovy sociálnych služieb, opatrovateľské kapacity aj modernizáciu zariadení. Ide o jednu z najnáročnejších oblastí verejnej politiky, kde dopyt rastie rýchlejšie než rozpočtové možnosti.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj podporovať skôr rozširovanie vlastných zariadení než financovanie služieb u neverejných poskytovateľov?',
   w:'Pri raste dopytu po sociálnych službách stojí kraj pred voľbou, či má viac budovať vlastné kapacity, alebo sa opierať aj o súkromných a cirkevných poskytovateľov. Obe cesty majú svoje náklady, limity aj ideové východiská.',
   a:{janckulik:'agree',jurinova:'neutral'}},

  {t:'Stredné školy',
   q:'Má kraj prioritne investovať do modernizácie stredných škôl, aby lepšie reagovali na potreby trhu práce?',
   w:'ŽSK je zriaďovateľom stredných škôl a nesie zodpovednosť za to, či absolventi nájdu uplatnenie. Modernizácia odborného vzdelávania môže pomôcť firmám aj mladým ľuďom, no vyžaduje vysoké investície a spoluprácu so zamestnávateľmi.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj zachovať aj menšie stredné školy v slabších regiónoch, aj keď sú dlhodobo menej efektívne?',
   w:'Menšie školy môžu byť pre región dôležité sociálne aj dopravne, no pri nízkom počte študentov bývajú drahšie na prevádzku. Spor je medzi regionálnou dostupnosťou vzdelania a racionalizáciou siete škôl.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Trh práce',
   q:'Má kraj užšie prepájať odborné školy s veľkými firmami a priemyselnými klastrami, aj keby sa tým časť odborov viac podriadila potrebám trhu?',
   w:'Žilinský kraj patrí medzi priemyselne najsilnejšie regióny Slovenska, no firmy zároveň upozorňujú na nedostatok pripravených absolventov. Väčšie prepojenie škôl s praxou môže zvýšiť zamestnateľnosť, no zároveň vyvoláva obavy, aby školy nestratili širšiu vzdelávaciu funkciu.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Ovzdušie',
   q:'Má kraj viac investovať do znižovania znečistenia ovzdušia v regiónoch ako Kysuce, Orava a Turiec, aj keď to nie je jeho najviditeľnejšia kompetencia?',
   w:'Pretrvávajúce problémy s prachovými časticami a benzo[a]pyrénom sú spojené najmä s vykurovaním domácností tuhými palivami. Kraj nemá v rukách všetky nástroje, no môže koordinovať projekty, podporovať osvetu, energetické riešenia a tlak na systémové opatrenia.',
   a:{janckulik:'neutral',jurinova:'agree'}},

  {t:'Energetika',
   q:'Má kraj urýchliť zatepľovanie a energetické úspory vo svojich budovách, aj keď sa investície vrátia až o niekoľko rokov?',
   w:'Župa spravuje veľké množstvo budov napr. školy, nemocnice, kultúrne inštitúcie či zariadenia sociálnych služieb. Energetické úspory znižujú budúce náklady, no vyžadujú značné vstupné investície.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Energetika',
   q:'Má kraj pri modernizácii svojich budov uprednostniť čo najrýchlejšie zníženie prevádzkových nákladov pred reprezentatívnymi rekonštrukciami?',
   w:'Po energetickej kríze sa ukázalo, že mnohé krajské budovy sú drahé na prevádzku. Otázka preto znie, či má byť hlavným cieľom úspora energií a funkčnosť, alebo širšie, vizuálne a architektonicky ambicióznejšie obnovy.',
   a:{janckulik:'agree',jurinova:'neutral'}},

  {t:'Rozpočet',
   q:'Má kraj v neistých časoch hospodáriť opatrnejšie a obmedziť nové ambiciózne projekty?',
   w:'Kraj hospodári s rozpočtom v stovkách miliónov eur a musí vyvažovať investície, prevádzku aj financovanie služieb. Opatrnosť znižuje riziko budúcich problémov, ale môže spomaliť rozvoj a čerpanie vonkajších zdrojov.',
   a:{janckulik:'agree',jurinova:'disagree'}},

  {t:'Eurofondy',
   q:'Má byť pre kraj prioritou pripraviť čo najviac projektov na eurofondy, aj keď si to vyžiada vyššie spolufinancovanie z vlastného rozpočtu?',
   w:'Externé zdroje vedia výrazne posunúť školy, nemocnice, cesty či kultúru. No aj eurofondový projekt niečo stojí a vyžaduje schopný aparát, prípravu a spoluúčasť. Otázka je, či má kraj hrať aktívne a vo veľkom, alebo opatrnejšie.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Regionálna rovnováha',
   q:'Má vedenie kraja garantovať vyrovnanejšie zastúpenie regiónov vo vedení župy a pri veľkých investíciách?',
   w:'Žilinský kraj má silné regionálne identity ako Kysuce, Orava, Turiec, Liptov aj Horné Považie často sledujú, či nie sú pri investíciách prehliadané. Otázka smeruje k tomu, či má byť regionálna vyváženosť explicitnou politickou zásadou.',
   a:{janckulik:'agree',jurinova:'neutral'}},

  {t:'Cestovný ruch',
   q:'Má kraj viac investovať do cestovného ruchu, aj keď výsledky takých projektov sa prejavia až neskôr?',
   w:'Liptov, Orava, Malá Fatra či Kysuce majú silný turistický potenciál. Cielená podpora cestovného ruchu môže priniesť pracovné miesta a príjmy, no nie vždy je jasné, či investície prinášajú férový úžitok pre celý kraj.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Životné prostredie',
   q:'Má kraj viac podporovať cyklotrasy a ekologickú dopravu aj za cenu, že časť voličov to nepovažuje za prioritu?',
   w:'Kraj má v rukách najmä plánovanie, koordináciu a vlastné investície, nie všetky ekologické politiky. Napriek tomu môže ovplyvniť, či bude mobilita a verejné budovy šetrnejšie k životnému prostrediu. Ide o spor medzi dlhodobou udržateľnosťou a bezprostrednými každodennými problémami.',
   a:{janckulik:'neutral',jurinova:'agree'}},

  {t:'Transparentnosť',
   q:'Má kraj zverejňovať zrozumiteľné odôvodnenia veľkých zmlúv a investičných rozhodnutí ešte pred ich schválením?',
   w:'Formálne zverejnenie dokumentov často nestačí na to, aby sa v nich občania vyznali. Lepšia transparentnosť by mohla zvýšiť dôveru a verejnú kontrolu, no zároveň predĺžiť procesy a zvýšiť administratívnu záťaž úradu.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Participácia',
   q:'Má kraj viac zapájať starostov, primátorov a verejnosť do tvorby priorít, aj keby bolo rozhodovanie pomalšie?',
   w:'Vyššia participácia môže zvýšiť legitimitu rozhodnutí a pomôcť lepšie zachytiť potreby územia. Zároveň však môže spomaliť prijímanie rozhodnutí a oslabiť schopnosť vedenia konať rýchlo a strategicky.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Kontrola výkonu',
   q:'Má predseda kraja pravidelne zverejňovať prehľad splnených a nesplnených sľubov a merateľných výsledkov župy?',
   w:'Krajská politika býva pre mnohých voličov menej čitateľná než komunálna či národná. Verejný účet sľubov by mohol zvýšiť kontrolu a tlak na výsledky, no zároveň by vystavil vedenie kraja priebežnej verejnej kritike.',
   a:{janckulik:'agree',jurinova:'agree'}},

  {t:'Investičná filozofia',
   q:'Má byť župan skôr tvrdý správca rozpočtu a služieb než politický líder veľkých vízií?',
   w:'Aj pri krajskej politike ide často o stret dvoch štýlov. Jeden stavia na opatrnom hospodárení, detailnom manažmente a stabilite služieb. Druhý na väčších rozvojových projektoch, aktívnejšom získavaní zdrojov a ambícii meniť smerovanie kraja výraznejšie.',
   a:{janckulik:'agree',jurinova:'disagree'}}
];

