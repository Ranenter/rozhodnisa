// ── Volebná kalkulačka 2026 — NITRA + NITRIANSKY KRAJ ──
// Obsahuje voľby: primátor/primátorka Nitry a predseda/predsedníčka NSK.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor / Primátorka Nitry ──
window.VAA_DATA.candidates['nitra_primator'] = [
  {id:'hattas',name:'Marek Hattas',party:'Tím Kraj Nitra / Tím Hattas (úradujúci primátor)',color:'#146B4D',url:'https://hattasprimatorom.sk'},
  {id:'uhrikova',name:'Zuzana Uhríková',party:'Republika / Hlas-SD / Smer-SD',color:'#8A2332',url:'https://www.facebook.com/ing.zuzana.uhrikova/'}
];

// ── Kandidáti: Predseda / Predsedníčka NSK ──
window.VAA_DATA.candidates['nitra_vuc'] = [
  {id:'varga',name:'Henrich Varga',party:'SaS / Tím Kraj Nitra / Maďarské fórum / OKS',color:'#2A5CAA',url:'https://www.facebook.com/varga.henrich/'},
  {id:'becik',name:'Branislav Becík',party:'Hlas-SD / Smer-SD / Republika (úradujúci predseda)',color:'#C23A2B',url:'https://branislavbecik.sk/'}
];

// ── Otázky: Primátor / Primátorka Nitry ──
window.VAA_DATA.questions.nitra_primator = [
  {t:'Parkovanie',
   q:'Má Nitra ďalej rozširovať regulované rezidentské parkovanie aj do ďalších sídlisk?',
   w:'Parkovacia politika patrí medzi najviditeľnejšie komunálne témy v Nitre. Mesto v roku 2025 a 2026 rozširovalo pravidlá parkovania a v rozpočte ráta s významnými príjmami z parkovného. Pre časť obyvateľov je to potrebný poriadok, pre iných ďalšia finančná a organizačná záťaž.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Parkovanie',
   q:'Má mesto dávať pri riešení parkovania prednosť výstavbe nových parkovísk pred ďalším sprísňovaním pravidiel?',
   w:'Nitra rieši parkovanie kombináciou regulácie a budovania nových kapacít. Spor sa vedie o to, či má byť hlavným riešením viac pravidiel, alebo viac miest na státie v obytných štvrtiach.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Cesty a chodníky',
   q:'Má byť oprava miestnych ciest, chodníkov a schodísk hlavnou investičnou prioritou mesta na najbližšie roky?',
   w:'Mesto v roku 2026 plánuje výrazné investície do ciest a verejných plôch, no popri tom rieši aj školy, škôlky, zeleň a ďalšie projekty. Táto otázka oddeľuje voličov, ktorí chcú sústrediť väčšinu peňazí na každodennú údržbu, od tých, ktorí podporujú širší investičný záber.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Doprava',
   q:'Má mesto uprednostniť plynulosť automobilovej dopravy pred budovaním nových cyklotrás a zásahmi do organizácie dopravy?',
   w:'V Nitre sa stretáva tlak vodičov na plynulejší prejazd mestom s požiadavkou na bezpečnejšiu a modernejšiu mobilitu. Ide o klasickú dilemu medzi pohodlím pre autá a podporou alternatívnej dopravy.',
   a:{hattas:'disagree',uhrikova:'agree'}},

  {t:'Cyklodoprava',
   q:'Má Nitra pokračovať v budovaní súvislých cyklotrás aj tam, kde si to vyžiada zmenu zaužívaného priestoru pre autá?',
   w:'Ak má bicykel fungovať ako reálna súčasť dopravy, trasy musia byť bezpečné a prepojené. V praxi to však niekedy znamená menší komfort pre autá alebo úpravu parkovania a jazdných pruhov.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Rozpočet',
   q:'Má Nitra v nasledujúcich rokoch postupovať pri nových investíciách opatrnejšie, keďže mesto si na rok 2026 schválilo aj úver?',
   w:'Mesto schválilo na rok 2026 historicky vysoký rozpočet a zároveň aj viac než 12-miliónový úver. Pre jedných je to spôsob, ako udržať rozvoj, pre iných signál, že by samospráva mala brzdiť tempo nových projektov.',
   a:{hattas:'disagree',uhrikova:'agree'}},

  {t:'Školy a škôlky',
   q:'Majú mať školy, škôlky a detské ihriská prednosť pred reprezentatívnymi projektmi v centre mesta?',
   w:'Najväčšou výdavkovou položkou Nitry ostáva školstvo. Táto otázka preveruje, či má byť mestská politika zameraná najmä na každodenné potreby rodín, alebo aj na viditeľné projekty v centre a na hlavných ťahoch.',
   a:{hattas:'agree',uhrikova:'agree'}},

  {t:'Bývanie',
   q:'Má mesto aktívnejšie podporovať dostupné nájomné bývanie, aj keby to znamenalo väčší vstup samosprávy do bytovej politiky?',
   w:'Drahé bývanie zvyšuje tlak na mestá, aby nehľadali riešenie len cez územné plánovanie. Silnejší vstup mesta môže pomôcť mladým rodinám a profesiám, ktoré mesto potrebuje, no zároveň prináša vyššie finančné a organizačné nároky.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Developeri',
   q:'Má mesto od investorov tvrdšie vyžadovať príspevky na školy, cesty a verejný priestor pri väčších projektoch?',
   w:'Nová výstavba zvyšuje tlak na infraštruktúru a služby. Mesto môže od investorov požadovať väčšiu spoluúčasť, no tým zároveň riskuje drahšiu alebo pomalšiu výstavbu.',
   a:{hattas:'agree',uhrikova:'agree'}},

  {t:'Transparentnosť',
   q:'Má mesto zverejňovať zrozumiteľné odôvodnenia veľkých investícií a zákaziek ešte pred ich schválením?',
   w:'Samotné zverejnenie materiálov často nestačí na to, aby sa v nich obyvatelia vyznali. Lepšia transparentnosť môže zvýšiť dôveru, ale zároveň spomaliť časť rozhodovania.',
   a:{hattas:'agree',uhrikova:'agree'}},

  {t:'MHD',
   q:'Má mesto zlepšovať verejnú dopravu aj za cenu, že niektoré opatrenia znížia komfort individuálnej automobilovej dopravy?',
   w:'Ak má byť MHD atraktívnejšia, mesto často musí zasahovať do organizácie dopravy, preferencie autobusov či priestoru v uliciach. Ide o rozhodovanie medzi individuálnym pohodlím a systémovým riešením mobility.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Verejný priestor',
   q:'Má Nitra dôslednejšie chrániť mestskú zeleň a stromy aj vtedy, ak to skomplikuje niektoré investície alebo parkovanie?',
   w:'Stromy a zeleň znižujú prehrievanie mesta a zvyšujú kvalitu života. V praxi však ich ochrana často naráža na dopravné stavby, parkoviská a nové projekty.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Údržba mesta',
   q:'Má mesto posilniť výdavky na čistenie ulíc, údržbu verejných priestranstiev a odstraňovanie vrakov aj na úkor niektorých rozvojových projektov?',
   w:'Rozpočet Nitry zahŕňa aj výdavky na čistenie ciest, verejné priestranstvá, odťah nepojazdných vozidiel a ďalšie komunálne služby. Pre časť voličov sú práve tieto každodenné služby najlepším ukazovateľom kvality vedenia mesta.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Bezpečnosť',
   q:'Potrebuje Nitra viac viditeľnej mestskej polície vo verejnom priestore a pri dopravnom poriadku?',
   w:'Otázka bezpečnosti sa v komunálnej politike často spája s poriadkom v uliciach, parkovaním aj vymáhaním pravidiel. Jedni preferujú viac prevencie a sociálnej práce, iní dôraz na viditeľnú kontrolu a rýchly zásah.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Participácia',
   q:'Má mesto viac zapájať obyvateľov do rozhodovania o menších investíciách, aj keby to procesy spomalilo?',
   w:'Participácia môže zvýšiť dôveru a lepšie prispôsobiť menšie projekty miestnym potrebám. Zároveň však môže brzdiť rozhodovanie a znižovať akcieschopnosť vedenia mesta.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Kultúra a komunita',
   q:'Má mesto pokračovať v podpore kultúrnych a komunitných projektov aj v čase rozpočtového tlaku?',
   w:'Kultúra a komunitné aktivity nebývajú prvou prioritou pri napätom rozpočte, no formujú identitu mesta a kvalitu života. Otázka ukazuje, či ich volič vníma ako nadštandard, alebo súčasť základnej funkcie mesta.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Mestský majetok',
   q:'Má mesto pri nakladaní s majetkom postupovať opatrnejšie a menej vstupovať do spoločných projektov so súkromným sektorom?',
   w:'Partnerstvá so súkromným sektorom môžu urýchliť rozvoj, ale prinášajú aj reputačné a finančné riziká. Opatrnejší prístup chráni majetok mesta, no môže spomaliť niektoré projekty.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Digitalizácia',
   q:'Má Nitra rýchlejšie digitalizovať mestský úrad a čo najviac služieb presunúť online?',
   w:'Digitalizácia môže znížiť byrokraciu a ušetriť čas občanom aj úradníkom. Nie všetci obyvatelia však preferujú online kontakt a časť služieb si vyžaduje osobné vybavenie.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Komunikácia mesta',
   q:'Má primátor pravidelne zverejňovať prehľad splnených a nesplnených sľubov, aby boli výsledky vedenia ľahšie kontrolovateľné?',
   w:'Obyvatelia sa v komunálnej politike lepšie orientujú, keď vedia porovnať sľuby s výsledkami. Takýto účet zvyšuje zodpovednosť, ale aj tlak na vedenie mesta.',
   a:{hattas:'agree',uhrikova:'agree'}},

  {t:'Poradie priorít',
   q:'Má byť hlavnou úlohou vedenia Nitry najprv urobiť poriadok v parkovaní, cestách a údržbe, až potom otvárať ďalšie veľké témy?',
   w:'Parkovanie, cesty a čistota patria medzi najčastejšie verejne diskutované problémy mesta. Táto otázka testuje, či má samospráva riešiť najskôr základný servis mesta, alebo súbežne tlačiť aj širšie rozvojové témy.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Štýl vedenia',
   q:'Je pre teba dôležitejšie, aby primátor Nitry bol skôr dobrý manažér každodenných problémov než ambiciózny vizionár väčších projektov?',
   w:'Komunálna politika sa často láme medzi dôrazom na každodenný servis mesta a dôrazom na väčšie rozvojové projekty. Väčšina voličov chce kombináciu oboch, no kandidáti bývajú vnímaní viac jedným alebo druhým smerom.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Hodnotenie rozvoja',
   q:'Má mesto pri nových projektoch viac hodnotiť ich priamy úžitok pre obyvateľov než ich symbolický alebo reprezentatívny význam?',
   w:'Nie každý projekt, ktorý dobre vyzerá navonok, prináša rovnaký úžitok v každodennom živote obyvateľov. Táto otázka oddeľuje praktickejší a reprezentatívnejší pohľad na rozvoj mesta.',
   a:{hattas:'neutral',uhrikova:'agree'}},

  {t:'Sociálna citlivosť',
   q:'Má mesto cielene pomáhať ľuďom v bytovej a sociálnej núdzi aj vtedy, keď také opatrenia neprinášajú rýchly politický efekt?',
   w:'Takéto opatrenia nebývajú veľmi viditeľné, no môžu znižovať dlhodobé sociálne problémy a tlak na ďalšie verejné služby. Otázka ukazuje, akú váhu má mať sociálny rozmer v mestskej politike.',
   a:{hattas:'agree',uhrikova:'neutral'}},

  {t:'Stabilita rozpočtu',
   q:'Má mesto po roku 2026 skôr znižovať tlak na úvery a zadlženie než hľadať ďalšie zdroje na rýchlejšie investície?',
   w:'Po schválení vysokého rozpočtu a úveru sa otvára otázka, či má ďalším cieľom mesta byť finančné ukľudnenie, alebo pokračovanie vo vysokom investičnom tempe. Ide o rozdiel medzi opatrnosťou a ambíciou.',
   a:{hattas:'disagree',uhrikova:'agree'}},

  {t:'Celkový smer',
   q:'Má sa Nitra v najbližších rokoch sústrediť skôr na zlepšenie každodennej funkčnosti mesta než na výraznú zmenu jeho imidžu a smerovania?',
   w:'Za mnohými komunálnymi konfliktmi stojí otázka, či má mesto prioritne fungovať lepšie v bežných veciach, alebo sa zároveň silnejšie profilovať navonok cez väčšie zmeny a ambície.',
   a:{hattas:'neutral',uhrikova:'agree'}}
];

// ── Otázky: Predseda / Predsedníčka Nitrianskeho kraja ──
window.VAA_DATA.questions.nitra_vuc = [
  {t:'Cesty a mosty',
   q:'Má Nitriansky kraj dať v najbližších rokoch absolútnu prioritu opravám ciest II. a III. triedy, aj keby to spomalilo iné investície?',
   w:'Regionálne cesty patria medzi najviditeľnejšie kompetencie kraja. Opravy ciest sú preto pre veľa voličov základným meradlom výkonu župy, no zároveň konkurujú investíciám do škôl, sociálnych služieb a zdravotníctva.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Cesty a mosty',
   q:'Má kraj dávať prednosť bezpečnostne rizikovým úsekom a mostom pred novými rozvojovými dopravnými projektmi?',
   w:'Pri dopravnej infraštruktúre sa často rozhoduje medzi havarijnými opravami a projektmi, ktoré sú politicky atraktívnejšie. Táto otázka preveruje, či má mať prednosť bezpečnosť a základná funkčnosť.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Nemocnice',
   q:'Má kraj pokračovať v silnej finančnej podpore svojich nemocníc aj vtedy, ak to bude dlhodobo veľmi náročné na rozpočet?',
   w:'Regionálne nemocnice čelia tlaku na financovanie a dostupnosť personálu, pričom problémy regionálnych nemocníc sú viditeľné aj na celoštátnej úrovni. Pre časť voličov je podpora nemocníc absolútna priorita, iní viac zdôrazňujú potrebu tvrdšieho manažmentu.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Nemocnice',
   q:'Ak by si to vyžadovala situácia, mal by kraj pristúpiť aj k nepopulárnym zmenám v riadení nemocníc?',
   w:'Manažment nemocníc je citlivá politická téma, pretože sa dotýka pacientov, zamestnancov aj celých regiónov. Tvrdšie zásahy môžu stabilizovať systém, ale prinášajú vysoké politické aj sociálne náklady.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Zdravotníci',
   q:'Má kraj financovať silnejšie motivačné programy pre lekárov, sestry a ďalší personál, aby ich udržal vo svojich zariadeniach?',
   w:'Bez dostatku personálu nemôžu regionálne nemocnice dlhodobo fungovať kvalitne. Podpora zdravotníkov stojí peniaze, no bez nej sa zvyšuje riziko oslabovania dostupnosti zdravotnej starostlivosti.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj prioritne investovať do modernizácie stredných škôl a odborného vzdelávania podľa potrieb trhu práce?',
   w:'Kraj zodpovedá za stredné školy a zároveň rieši, ako udržať mladých ľudí v regióne. Väčšie prepojenie škôl s praxou môže zvýšiť zamestnateľnosť absolventov, ale vyžaduje dlhodobé a nákladné investície.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj investovať do rozšírenia kapacít zdravotníckych škôl a odborov, ak je dopyt po zdravotníckom personáli vysoký?',
   w:'Téma kapacít zdravotníckeho vzdelávania sa v Nitrianskom kraji objavuje aj pri plánovaní nových priestorov a rastu školy v Nitre. Otázka spája školstvo s praktickým problémom nedostatku ľudí v zdravotníctve.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj zachovať aj menšie školy v slabších regiónoch, aj keď sú z dlhodobého hľadiska menej efektívne?',
   w:'Menšie školy sú pre región dôležité sociálne aj dopravne, no ich prevádzka býva drahšia. Rozhoduje sa medzi dostupnosťou vzdelania a racionalizáciou siete škôl.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Verejná doprava',
   q:'Má kraj zachovať autobusové spojenia aj v menej vyťažených oblastiach, aj keď sú ekonomicky stratové?',
   w:'Pre menšie obce je verejná doprava často kľúčová pre dochádzanie do školy, práce aj k lekárovi. Zachovanie spojov však znamená vyššiu záťaž pre rozpočet kraja.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Verejná doprava',
   q:'Má kraj viac investovať do koordinácie autobusov, vlakov a integrovaných dopravných riešení?',
   w:'Lepšie prepojená doprava môže zjednodušiť cestovanie a znížiť závislosť od áut. Na druhej strane si vyžaduje organizáciu, technické riešenia a dlhodobé financovanie.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Sociálne služby',
   q:'Má Nitriansky kraj viac investovať do zariadení sociálnych služieb a starostlivosti o seniorov aj za cenu menšieho priestoru pre iné oblasti?',
   w:'Starnutie populácie vytvára dlhodobý tlak na domovy sociálnych služieb aj ďalšie formy starostlivosti. Ide o tichú, ale štrukturálne veľmi vážnu tému, ktorá bude v ďalších rokoch silnieť.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj skôr rozširovať vlastné zariadenia sociálnych služieb než sa spoliehať na neverejných poskytovateľov?',
   w:'Kraj si môže viac budovať vlastné kapacity, alebo kombinovať verejných, neverejných a cirkevných poskytovateľov. Každý model má iné finančné aj hodnotové dôsledky.',
   a:{varga:'neutral',becik:'agree'}},

  {t:'Rozpočet',
   q:'Má kraj v neistých časoch hospodáriť opatrnejšie a obmedziť nové ambiciózne projekty, ak by hrozilo vyššie zadlženie?',
   w:'Aj krajská samospráva musí vyvažovať rozvoj a finančnú stabilitu. Opatrnosť znižuje riziko budúcich problémov, ale môže spomaliť investície, ktoré časť regiónov očakáva.',
   a:{varga:'agree',becik:'disagree'}},

  {t:'Transparentnosť',
   q:'Má kraj zverejňovať zrozumiteľné odôvodnenia veľkých investícií a zmlúv ešte pred ich schválením?',
   w:'Regionálna politika býva pre verejnosť menej čitateľná než komunálna. Lepšia transparentnosť môže zvýšiť kontrolu aj dôveru, no zároveň predĺžiť časť rozhodovacích procesov.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Eurofondy',
   q:'Má byť pre kraj prioritou pripraviť čo najviac projektov na eurofondy, aj keď si to vyžiada vyššie spolufinancovanie z vlastného rozpočtu?',
   w:'Externé zdroje dokážu výrazne posunúť školy, nemocnice, cesty aj sociálne zariadenia. Zároveň však vyžadujú pripravené projekty, kvalitné riadenie a vlastné financie.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Regionálna rovnováha',
   q:'Má vedenie kraja garantovať vyrovnanejšie rozdelenie investícií medzi okresy, aj keby to nebolo vždy ekonomicky najefektívnejšie?',
   w:'Nitriansky kraj spája rozdielne regióny a pocit nerovnomerného rozvoja sa objavuje pravidelne. Táto otázka ukazuje, či má mať prioritu rovnováha medzi okresmi, alebo silnejšia koncentrácia tam, kde investície prinesú najrýchlejší efekt.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Vidiek a regióny',
   q:'Má kraj cielene podporovať služby a projekty v menších mestách a na vidieku, aby brzdil odchod mladých ľudí?',
   w:'Vyľudňovanie a slabšia perspektíva v menších sídlach patria medzi dlhodobé regionálne výzvy. Podpora vidieka býva drahšia a menej efektívna než sústredenie investícií do silnejších centier, no môže mať zásadný sociálny význam.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Životné prostredie',
   q:'Má kraj viac podporovať ekologickejšie projekty a nízkouhlíkové riešenia aj vtedy, ak ich časť voličov nepovažuje za prioritu?',
   w:'Kraj môže ovplyvniť najmä svoje budovy, dopravu a podporu projektov. Ide o spor medzi bezprostrednou užitočnosťou a dlhodobou udržateľnosťou.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Energetika',
   q:'Má kraj urýchliť energetické úspory vo svojich budovách, aj keď sa investície vrátia až o niekoľko rokov?',
   w:'Školy, nemocnice a sociálne zariadenia tvoria veľkú časť majetku kraja a zároveň veľké prevádzkové náklady. Energetické úspory sú menej viditeľné než nové stavby, ale môžu dlhodobo uvoľniť peniaze na služby.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Kultúra',
   q:'Má kraj pokračovať v podpore kultúrnych inštitúcií a regionálneho dedičstva aj v čase finančného tlaku?',
   w:'Kraj nezodpovedá len za dopravu, školy a sociálne služby, ale aj za kultúrne inštitúcie a identitu regiónu. Pri rozpočtovom tlaku býva kultúra zraniteľnejšia než technická infraštruktúra.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Cestovný ruch',
   q:'Má Nitriansky kraj viac investovať do cestovného ruchu a značky regiónu, aj keď výsledky takých projektov sa prejavia až neskôr?',
   w:'Turizmus môže priniesť pracovné miesta a podporiť menej rozvinuté časti kraja. Nevýhodou je, že výnos takýchto projektov býva menej priamy a ťažšie merateľný než pri opravách ciest či budov.',
   a:{varga:'agree',becik:'agree'}},

  {t:'Participácia',
   q:'Má kraj viac zapájať starostov, primátorov a verejnosť do tvorby priorít, aj keby bolo rozhodovanie pomalšie?',
   w:'Vyššia participácia môže zvýšiť legitimitu a lepšie zohľadniť potreby územia. Zároveň však môže oslabiť schopnosť vedenia kraja konať rýchlo a presadzovať jasný smer.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Kontrola výkonu',
   q:'Má predseda kraja pravidelne zverejňovať prehľad splnených a nesplnených sľubov a merateľných výsledkov?',
   w:'Regionálna politika býva pre voliča menej čitateľná než komunálna. Verejný účet výsledkov by mohol zvýšiť tlak na výkon, zodpovednosť a lepšiu kontrolu vedenia kraja.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Štýl vedenia',
   q:'Má byť župan skôr tvrdý správca rozpočtu a služieb než politický líder väčších vízií?',
   w:'Jeden typ regionálneho lídra sa sústreďuje na stabilitu, poriadok a každodenné fungovanie. Druhý kladie väčší dôraz na ambície, reformy a širšie strategické smerovanie kraja.',
   a:{varga:'agree',becik:'neutral'}},

  {t:'Vzťah k vláde',
   q:'Je pre kraj výhodnejšie, ak má župan silnejšie politické väzby na vládu, aj keď to môže oslabiť jeho nezávislosť?',
   w:'Dobré vzťahy s vládou môžu priniesť jednoduchší prístup k zdrojom a rýchlejšie vybavovanie projektov. Zároveň však môžu vyvolávať otázky, či kraj háji svoje záujmy dostatočne samostatne.',
   a:{varga:'disagree',becik:'agree'}}
];

