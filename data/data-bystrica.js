// ── Volebná kalkulačka 2026 — BANSKÁ BYSTRICA + BANSKOBYSTRICKÝ KRAJ ──
// Moderovaná verzia bez Daniela Karasa: potvrdení a verejne zdokumentovaní kandidáti.
// Obsahuje voľby: primátor/primátorka Banskej Bystrice a predseda/predsedníčka BBSK.

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

window.VAA_DATA.candidates['bystrica_primator'] = [
  {id:'sobota',name:'Tomáš Sobota',party:'Nezávislý / podpora KDH a KÚ',color:'#275C9A',url:'https://tsobota.sk/'},
  {id:'javorcikova',name:'Diana Javorčíková',party:'Bystrica sa spája / PS / SaS / Demokrati / Banskobystrická alternatíva',color:'#A12C55',url:'https://dianajavorcikova.sk/'}
];

window.VAA_DATA.candidates['bystrica_vuc'] = [
  {id:'lunter',name:'Ondrej Lunter',party:'nezávislý / úradujúci predseda',color:'#2E8B57',url:'https://ondrejlunter.sk'},
  {id:'polonyi',name:'Adrian Polónyi',party:'podpora Smer-SD',color:'#B03A2E',url:''}
];

window.VAA_DATA.questions.bystrica_primator = [
  {t:'Parkovanie',
   q:'Má Banská Bystrica ďalej rozvíjať regulované parkovanie v centre a priľahlých zónach, ak to mestu pomôže udržať väčší poriadok?',
   w:'Od januára 2026 prevzalo mesto parkovanie v centre do vlastnej správy a zaviedlo nové pravidlá, rezidentské karty aj novú cenovú politiku. Pre časť obyvateľov je to potrebný krok k väčšiemu poriadku, pre iných zdroj vyšších nákladov a obmedzení.',
   a:{sobota:'neutral',javorcikova:'agree'}},

  {t:'Parkovanie',
   q:'Má mesto pri riešení parkovania dávať väčší dôraz na budovanie nových kapacít než na ďalšie sprísňovanie pravidiel?',
   w:'Mesto očakáva, že príjmy z parkovania pôjdu aj na nové parkovacie riešenia. Spor sa vedie o to, či má byť hlavnou cestou viac regulácie, alebo viac fyzických miest na státie.',
   a:{sobota:'agree',javorcikova:'neutral'}},

  {t:'Doprava',
   q:'Má mesto uprednostniť plynulosť automobilovej dopravy pred ďalšími zásahmi v prospech verejnej dopravy a cyklodopravy?',
   w:'Banská Bystrica rieši dopravu nielen v centre, ale aj v súvislosti s nemocnicou, hlavnými ťahmi a parkovaním. Ide o spor medzi pohodlím pre autá a snahou meniť dopravné správanie v prospech MHD a iných foriem dopravy.',
   a:{sobota:'neutral',javorcikova:'disagree'}},

  {t:'Verejná doprava',
   q:'Má mesto pokračovať v opatreniach, ktoré zvýhodňujú MHD, aj keby sa časť vodičov cítila obmedzená?',
   w:'Opatrenia pri Rooseveltovej nemocnici aj na hlavných ťahoch ukazujú, že zlepšenie verejnej dopravy si často vyžaduje zásah do priestoru pre autá. Otázka oddeľuje automobilovo orientovaný a systémovejší prístup k mestskej doprave.',
   a:{sobota:'neutral',javorcikova:'agree'}},

  {t:'Cyklodoprava',
   q:'Má Banská Bystrica budovať súvislé cyklotrasy aj tam, kde si to vyžiada zmenu zaužívaného priestoru pre autá?',
   w:'Ak má byť bicykel reálnou súčasťou dopravy, infraštruktúra musí byť bezpečná a prepojená. V praxi to však často znamená konflikt s parkovaním alebo automobilovou dopravou.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Cesty a chodníky',
   q:'Má byť oprava ciest, chodníkov a schodísk hlavnou investičnou prioritou mesta na najbližšie roky?',
   w:'Mesto si už schválilo aj úver na dopravnú infraštruktúru a parkovacie projekty. Táto otázka preveruje, či majú mať každodenné technické problémy prednosť pred širšími rozvojovými plánmi.',
   a:{sobota:'agree',javorcikova:'neutral'}},

  {t:'Rozpočet',
   q:'Má Banská Bystrica postupovať pri ďalších investíciách opatrnejšie, keďže si na dopravnú infraštruktúru schválila aj úver?',
   w:'Úver môže mestu pomôcť rýchlejšie realizovať projekty, no zároveň zvyšuje tlak na budúce rozpočty. Ide o spor medzi investičným tempom a finančnou opatrnosťou.',
   a:{sobota:'agree',javorcikova:'neutral'}},

  {t:'Bývanie',
   q:'Má mesto aktívnejšie podporovať dostupné nájomné bývanie, aj keby to znamenalo silnejší vstup samosprávy do bytovej politiky?',
   w:'Aj Banská Bystrica čelí odlivu obyvateľov a dostupnosť bývania je jedným z faktorov, ktoré ovplyvňujú rozhodovanie mladých rodín. Silnejší vstup mesta môže pomôcť, ale prináša vyššie náklady a riziká.',
   a:{sobota:'neutral',javorcikova:'agree'}},

  {t:'Úbytok obyvateľov',
   q:'Má byť zastavenie odlivu obyvateľov z mesta hlavnou politickou prioritou budúceho vedenia?',
   w:'Vo verejnej debate sa objavuje argument, že Banská Bystrica potrebuje silnejší impulz, aby si udržala obyvateľov a prilákala ďalších. Táto otázka testuje, či má byť demografický vývoj jednou z hlavných priorít mesta.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Developeri',
   q:'Má mesto od developerov tvrdšie vyžadovať príspevky na verejný priestor, dopravu a občiansku vybavenosť pri väčších projektoch?',
   w:'Nová výstavba môže priniesť mestu dane aj obyvateľov, ale zároveň zvyšuje tlak na infraštruktúru. Prísnejšie požiadavky môžu priniesť férovejší rozvoj, no aj pomalšie povoľovanie alebo drahšie bývanie.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Transparentnosť',
   q:'Má mesto zverejňovať zrozumiteľné odôvodnenia veľkých investícií a zákaziek ešte pred ich schválením?',
   w:'Samotné zverejnenie materiálov často nestačí na to, aby im obyvatelia rozumeli. Lepšia transparentnosť môže zvýšiť dôveru, ale aj spomaliť časť rozhodovacích procesov.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Verejný priestor',
   q:'Má mesto dôslednejšie chrániť zeleň a verejný priestor aj vtedy, ak to niekedy skomplikuje dopravné alebo stavebné zámery?',
   w:'Kvalita verejného priestoru je v krajskom meste dôležitá nielen pre obyvateľov, ale aj pre jeho obraz navonok. V praxi sa však ochrana zelene často dostáva do konfliktu s dopravou a parkovaním.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Centrum mesta',
   q:'Má mesto viac investovať do centra Banskej Bystrice aj za cenu, že niektoré sídliská budú musieť čakať dlhšie?',
   w:'Centrum je vizitkou mesta, no väčšina obyvateľov žije mimo neho. Otázka preveruje, či majú mať prednosť reprezentatívne zásahy v centre alebo rozptýlené investície do každodenného života na sídliskách.',
   a:{sobota:'neutral',javorcikova:'neutral'}},

  {t:'Školy a rodiny',
   q:'Majú mať školy, škôlky a ihriská prednosť pred reprezentatívnymi projektmi v meste?',
   w:'Pre rodiny s deťmi sú každodenné služby často dôležitejšie než veľké symbolické investície. Táto otázka oddeľuje praktickejší a reprezentatívnejší pohľad na rozvoj mesta.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Bezpečnosť',
   q:'Potrebuje Banská Bystrica viac viditeľnej mestskej polície vo verejnom priestore a pri kontrole parkovania?',
   w:'S novým režimom parkovania a rastúcimi požiadavkami na poriadok v centre rastie aj tlak na výkon mestskej polície. Jedni preferujú prevenciu a komunikáciu, iní viditeľnejšiu kontrolu a tvrdšie vymáhanie pravidiel.',
   a:{sobota:'neutral',javorcikova:'neutral'}},

  {t:'Kultúra a identita',
   q:'Má mesto pokračovať v podpore kultúrnych a komunitných projektov aj v čase rozpočtového tlaku?',
   w:'Krajské mesto je prirodzeným kultúrnym centrom regiónu, no kultúra býva pri napätom rozpočte jednou z prvých oblastí, na ktorých sa šetrí. Otázka preveruje, či ju volič vníma ako nadštandard alebo ako súčasť základnej funkcie mesta.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Participácia',
   q:'Má mesto viac zapájať obyvateľov do rozhodovania o menších investíciách, aj keby to procesy spomalilo?',
   w:'Participácia môže zvýšiť dôveru a zlepšiť zasiahnutie lokálnych potrieb. Zároveň však môže znižovať akcieschopnosť vedenia mesta a predlžovať prípravu projektov.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Digitalizácia',
   q:'Má Banská Bystrica rýchlejšie digitalizovať mestský úrad a čo najviac služieb presunúť online?',
   w:'Digitalizácia môže znížiť byrokraciu a ušetriť čas obyvateľom aj úradu. Nie všetci obyvatelia však preferujú online kontakt a časť agendy si vyžaduje osobné vybavenie.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Komunikácia vedenia',
   q:'Má primátor pravidelne zverejňovať prehľad splnených a nesplnených sľubov, aby sa dali výsledky vedenia lepšie kontrolovať?',
   w:'Obyvatelia sa v komunálnej politike lepšie orientujú, keď vedia porovnať sľuby s reálnymi výsledkami. Takýto účet zvyšuje zodpovednosť, ale aj tlak na vedenie mesta.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Mestský majetok',
   q:'Má mesto pri nakladaní s majetkom postupovať opatrnejšie a menej vstupovať do spoločných projektov so súkromným sektorom?',
   w:'Partnerstvá so súkromným sektorom môžu pomôcť rýchlejšiemu rozvoju, no prinášajú aj reputačné a finančné riziká. Opatrnejší prístup chráni majetok mesta, ale môže spomaliť niektoré investície.',
   a:{sobota:'neutral',javorcikova:'neutral'}},

  {t:'Priorita mesta',
   q:'Má byť hlavnou úlohou budúceho vedenia Banskej Bystrice najprv urobiť poriadok v doprave, parkovaní a údržbe, až potom otvárať ďalšie veľké témy?',
   w:'Parkovanie, doprava a kvalita každodenného fungovania patria medzi najčastejšie verejné témy. Otázka testuje, či má mať prednosť základný servis mesta alebo súbežný tlak na širšie rozvojové zmeny.',
   a:{sobota:'agree',javorcikova:'neutral'}},

  {t:'Štýl vedenia',
   q:'Je pre teba dôležitejšie, aby primátor Banskej Bystrice bol skôr dobrý manažér každodenných problémov než ambiciózny vizionár väčších projektov?',
   w:'Komunálna politika sa často láme medzi dôrazom na každodenný servis mesta a dôrazom na väčšie rozvojové projekty. Väčšina voličov chce kombináciu oboch, no kandidáti bývajú vnímaní viac jedným alebo druhým smerom.',
   a:{sobota:'agree',javorcikova:'neutral'}},

  {t:'Sociálna citlivosť',
   q:'Má mesto cielene pomáhať ľuďom v bytovej a sociálnej núdzi aj vtedy, keď také opatrenia neprinášajú rýchly politický efekt?',
   w:'Takéto opatrenia nebývajú veľmi viditeľné, no môžu znižovať dlhodobé sociálne problémy a tlak na ďalšie verejné služby. Otázka ukazuje, akú váhu má mať sociálny rozmer v mestskej politike.',
   a:{sobota:'agree',javorcikova:'agree'}},

  {t:'Finančná opatrnosť',
   q:'Má mesto po väčších dopravných investíciách skôr znižovať tlak na ďalšie zadlženie než hľadať nové úvery na rýchlejší rozvoj?',
   w:'Po úverových rozhodnutiach pri dopravnej infraštruktúre sa otvára otázka, či má nasledovať finančné ukľudnenie, alebo pokračovanie vo vyššom investičnom tempe. Ide o rozdiel medzi opatrnosťou a ambíciou.',
   a:{sobota:'agree',javorcikova:'neutral'}},

  {t:'Celkový smer',
   q:'Má sa Banská Bystrica v najbližších rokoch sústrediť skôr na zlepšenie každodennej funkčnosti mesta než na výraznú zmenu jeho imidžu a smerovania?',
   w:'Za viacerými komunálnymi konfliktmi stojí otázka, či má mesto prioritne fungovať lepšie v bežných veciach, alebo sa zároveň silnejšie profilovať navonok cez väčšie ambície a nový štýl vedenia.',
   a:{sobota:'agree',javorcikova:'neutral'}}
];

window.VAA_DATA.questions.bystrica_vuc = [
  {t:'Cesty a mosty',
   q:'Má Banskobystrický kraj dať v najbližších rokoch absolútnu prioritu opravám ciest II. a III. triedy, aj keby to spomalilo iné investície?',
   w:'Regionálne cesty patria medzi najviditeľnejšie kompetencie kraja a pre veľa obyvateľov sú základným meradlom výkonu župy. Opravy ciest však konkurujú investíciám do škôl, sociálnych služieb a zdravotníctva.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Cesty a mosty',
   q:'Má kraj dávať prednosť bezpečnostne rizikovým úsekom a mostom pred novými rozvojovými projektmi?',
   w:'Pri dopravnej infraštruktúre sa často rozhoduje medzi havarijnými opravami a projektmi, ktoré sú politicky atraktívnejšie. Táto otázka preveruje, či má mať prednosť bezpečnosť a základná funkčnosť.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Dostupnosť regiónu',
   q:'Má vedenie kraja silnejšie tlačiť na štát pri kľúčových cestných projektoch, ktoré zlepšia dostupnosť regiónu zvonka?',
   w:'Banskobystrický kraj dlhodobo rieši problém svojej dopravnej dostupnosti a závisí aj od štátnych investícií do veľkých ťahov. Hoci kraj tieto cesty nestavia, môže výrazne tlačiť na vládu a koordinovať regionálny tlak.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Nemocnice',
   q:'Má kraj pokračovať v silnej podpore svojich nemocníc a zdravotníckych zariadení aj vtedy, ak to bude veľmi náročné na rozpočet?',
   w:'Regionálne zdravotníctvo je jednou z najcitlivejších oblastí krajskej politiky. Podpora nemocníc zvyšuje šancu na lepšiu dostupnosť starostlivosti, no zároveň vytvára tlak na ostatné výdavky.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Zdravotníci',
   q:'Má kraj silnejšie podporovať opatrenia na udržanie lekárov, sestier a ďalšieho personálu vo svojich zariadeniach?',
   w:'Bez dostatku ľudí nemôžu nemocnice ani ďalšie zariadenia dlhodobo fungovať kvalitne. Motivačné programy stoja peniaze, no bez nich hrozí ďalšie oslabovanie zdravotnej starostlivosti v regióne.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj prioritne investovať do modernizácie stredných škôl a odborného vzdelávania podľa potrieb trhu práce?',
   w:'Kraj zodpovedá za stredné školy a zároveň rieši, ako udržať mladých ľudí v regióne. Väčšie prepojenie škôl s praxou môže zvýšiť zamestnateľnosť absolventov, ale vyžaduje dlhodobé investície.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj zachovať aj menšie školy v slabších regiónoch, aj keď sú z dlhodobého hľadiska menej efektívne?',
   w:'Menšie školy sú pre región dôležité sociálne aj dopravne, no ich prevádzka býva drahšia. Rozhoduje sa medzi dostupnosťou vzdelania a racionalizáciou siete škôl.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Verejná doprava',
   q:'Má kraj zachovať autobusové spojenia aj v menej vyťažených oblastiach, aj keď sú ekonomicky stratové?',
   w:'Pre menšie obce a odľahlejšie časti kraja je verejná doprava často kľúčová pre dochádzanie do školy, práce aj k lekárovi. Zachovanie spojov však znamená vyššiu záťaž pre rozpočet kraja.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Integrovaná doprava',
   q:'Má kraj viac investovať do koordinácie autobusov, vlakov a integrovaných dopravných riešení?',
   w:'Lepšie prepojená doprava môže zjednodušiť cestovanie a znížiť závislosť od áut. Na druhej strane si vyžaduje organizáciu, technické riešenia a dlhodobé financovanie.',
   a:{lunter:'agree',polonyi:'neutral'}},

  {t:'Sociálne služby',
   q:'Má Banskobystrický kraj viac investovať do zariadení sociálnych služieb a starostlivosti o seniorov aj za cenu menšieho priestoru pre iné oblasti?',
   w:'Starnutie populácie vytvára dlhodobý tlak na domovy sociálnych služieb aj ďalšie formy starostlivosti. Ide o štrukturálnu tému, ktorá bude v ďalších rokoch silnieť.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Rozpočet',
   q:'Má kraj v neistých časoch hospodáriť opatrnejšie a obmedziť nové ambiciózne projekty, ak by hrozilo vyššie zadlženie?',
   w:'Aj krajská samospráva musí vyvažovať rozvoj a finančnú stabilitu. Opatrnosť znižuje riziko budúcich problémov, ale môže spomaliť investície, ktoré región očakáva.',
   a:{lunter:'neutral',polonyi:'agree'}},

  {t:'Transparentnosť',
   q:'Má kraj zverejňovať zrozumiteľné odôvodnenia veľkých investícií a zmlúv ešte pred ich schválením?',
   w:'Regionálna politika býva pre verejnosť menej čitateľná než komunálna. Lepšia transparentnosť môže zvýšiť kontrolu aj dôveru, no zároveň predĺžiť časť rozhodovacích procesov.',
   a:{lunter:'agree',polonyi:'neutral'}},

  {t:'Regionálna rovnováha',
   q:'Má vedenie kraja garantovať vyrovnanejšie rozdelenie investícií medzi okresy, aj keby to nebolo vždy ekonomicky najefektívnejšie?',
   w:'Banskobystrický kraj patrí medzi územne aj sociálne rozmanité regióny a pocit nerovnomerného rozvoja sa objavuje pravidelne. Táto otázka ukazuje, či má mať prioritu rovnováha medzi okresmi, alebo koncentrácia tam, kde investície prinesú najrýchlejší efekt.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Vidiek a periférie',
   q:'Má kraj cielene podporovať služby a projekty v menších mestách a periférnych oblastiach, aby brzdil odchod mladých ľudí?',
   w:'Vyľudňovanie a slabšia perspektíva mimo väčších centier patria medzi dlhodobé výzvy kraja. Podpora periférií je nákladnejšia a menej efektívna než sústredenie investícií do silnejších uzlov, no môže mať zásadný sociálny význam.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Eurofondy',
   q:'Má byť pre kraj prioritou pripraviť čo najviac projektov na eurofondy, aj keď si to vyžiada vyššie spolufinancovanie z vlastného rozpočtu?',
   w:'Externé zdroje dokážu výrazne posunúť školy, nemocnice, cesty aj sociálne zariadenia. Zároveň však vyžadujú pripravené projekty, kvalitné riadenie a vlastné financie.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Životné prostredie',
   q:'Má kraj viac podporovať ekologickejšie projekty a nízkouhlíkové riešenia aj vtedy, ak ich časť voličov nepovažuje za prioritu?',
   w:'Kraj môže ovplyvniť najmä svoje budovy, dopravu a podporu projektov. Ide o spor medzi bezprostrednou užitočnosťou a dlhodobou udržateľnosťou.',
   a:{lunter:'agree',polonyi:'neutral'}},

  {t:'Energetika',
   q:'Má kraj urýchliť energetické úspory vo svojich budovách, aj keď sa investície vrátia až o niekoľko rokov?',
   w:'Školy, sociálne zariadenia a ďalší krajský majetok vytvárajú vysoké prevádzkové náklady. Energetické úspory sú menej viditeľné než nové stavby, ale môžu dlhodobo uvoľniť peniaze na služby.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Kultúra',
   q:'Má kraj pokračovať v podpore kultúrnych inštitúcií a regionálneho dedičstva aj v čase finančného tlaku?',
   w:'Banskobystrický kraj nezodpovedá len za technickú infraštruktúru, ale aj za kultúrne inštitúcie a identitu regiónu. Pri rozpočtovom tlaku býva kultúra zraniteľnejšia než technické projekty.',
   a:{lunter:'agree',polonyi:'neutral'}},

  {t:'Cestovný ruch',
   q:'Má Banskobystrický kraj viac investovať do cestovného ruchu a značky regiónu, aj keď výsledky takých projektov sa prejavia až neskôr?',
   w:'Turizmus môže priniesť pracovné miesta a podporiť menej rozvinuté časti kraja. Nevýhodou je, že výnos z takýchto projektov býva menej priamy a ťažšie merateľný než pri opravách ciest či budov.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Participácia',
   q:'Má kraj viac zapájať starostov, primátorov a verejnosť do tvorby priorít, aj keby bolo rozhodovanie pomalšie?',
   w:'Vyššia participácia môže zvýšiť legitimitu a lepšie zohľadniť potreby územia. Zároveň však môže oslabiť schopnosť vedenia kraja konať rýchlo a presadzovať jasný smer.',
   a:{lunter:'agree',polonyi:'neutral'}},

  {t:'Kontrola výkonu',
   q:'Má predseda kraja pravidelne zverejňovať prehľad splnených a nesplnených sľubov a merateľných výsledkov?',
   w:'Regionálna politika býva pre voliča menej čitateľná než komunálna. Verejný účet výsledkov by mohol zvýšiť tlak na výkon, zodpovednosť a lepšiu kontrolu vedenia kraja.',
   a:{lunter:'agree',polonyi:'neutral'}},

  {t:'Vzťah k vláde',
   q:'Je pre kraj výhodnejšie, ak má župan silnejšie politické väzby na vládu, aj keď to môže oslabiť jeho nezávislosť?',
   w:'Dobré vzťahy s vládou môžu priniesť jednoduchší prístup k zdrojom a rýchlejšie vybavovanie projektov. Zároveň však môžu vyvolávať otázky, či kraj háji svoje záujmy dostatočne samostatne.',
   a:{lunter:'disagree',polonyi:'agree'}},

  {t:'Štýl vedenia',
   q:'Má byť župan skôr tvrdý správca rozpočtu a služieb než politický líder väčších vízií?',
   w:'Jeden typ regionálneho lídra sa sústreďuje na stabilitu, poriadok a každodenné fungovanie. Druhý kladie väčší dôraz na ambície, reformy a širšie strategické smerovanie kraja.',
   a:{lunter:'neutral',polonyi:'agree'}},

  {t:'Vízia kraja',
   q:'Má byť hlavnou úlohou kraja znižovať rozdiely medzi silnejšími a slabšími regiónmi aj za cenu, že najväčšie centrá dostanú menej pozornosti?',
   w:'Banskobystrický kraj nie je homogénny priestor a napätie medzi centrami a perifériami je v ňom stále prítomné. Táto otázka vystihuje základný hodnotový spor regionálnej politiky.',
   a:{lunter:'agree',polonyi:'agree'}},

  {t:'Celkové smerovanie',
   q:'Má sa Banskobystrický kraj v najbližších rokoch sústrediť skôr na stabilitu a základné služby než na výraznejšie nové rozvojové ambície?',
   w:'Za regionálnou politikou často stojí otázka, či má kraj najprv upevniť fungovanie základných služieb, alebo súbežne tlačiť aj širšie zmeny a väčšie ambície. Väčšina voličov chce kombináciu oboch, no kandidáti zvyknú zdôrazňovať inú rovnováhu.',
   a:{lunter:'neutral',polonyi:'agree'}}
];
