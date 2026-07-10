// ══ DATA: TRNAVA ══
window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor Trnavy ──
window.VAA_DATA.candidates['trnava_primator'] = [
  {id:'nemcovska', name:'Eva Nemčovská', party:'Nezávislá / Lepšia Trnava', color:'#4caf50', url:'https://evanemcovska.sk/'},
  {id:'baros', name:'Branislav Baroš', party:'Trnava pre každého / KDH', color:'#2196F3', url:'https://trnavaprekazdeho.sk/brano-baros-trnava/'},
  {id:'horvathova', name:'Ľubica Horváthová', party:'Demokrati', color:'#fbc02d', url:'https://lubicahorvathova.sk/'},
  {id:'cajkova', name:'Andrea Čajková', party:'Trnava+', color:'#e91e63', url:'https://www.trnavaplus.sk/andrea-cajkova'}
];

// ── Kandidáti: Župan / VÚC Trnavský kraj ──
// POZN: Viskupič, Berényi, Lančarič – postoje sú ODHADNUTÉ (verified:false pre data.json)
window.VAA_DATA.candidates['trnava_vuc'] = [
  {id:'viskupic', name:'Jozef Viskupič', party:'PS / Demokrati / Hnutie Slovensko / SaS / KDH / Maďarské fórum / OKS (úradujúci predseda)', color:'#64b5f6', url:'https://trnavskyzupan.sk'},
  {id:'lancaric', name:'Matej Lančarič', party:'Nezávislý – Za lepší Trnavský kraj', color:'#455A64', url:'https://matejlancaric.sk'},
  {id:'berenyi', name:'József Berényi', party:'Maďarská aliancia', color:'#1A6B8A', url:''}
];

// ── Otázky: Primátor Trnavy ──
window.VAA_DATA.questions.trnava_primator = [
  {
    t:'Parkovanie',
    q:'Má Trnava pokračovať v regulovanom platenom parkovaní vo väčšine mesta?',
    w:'Trnava má platené parkovanie rozdelené do 5 pásiem s rôznymi pravidlami a sadzbami. Proti súčasnej parkovacej politike vznikla petícia s viac než 19 000 podpismi, čo ukazuje, že ide o jednu z najspornejších tém v meste.',
    a:{nemcovska:'agree', baros:'neutral', horvathova:'disagree', cajkova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má ísť väčšina výnosov z parkovania späť do dopravy a parkovania?',
    w:'Parkovanie prináša mestu miliónové príjmy. Peniaze môžu ísť na parkovacie kapacity, MHD, bezpečnejšie ulice alebo iné mestské výdavky. Otázka je, či majú byť viazané hlavne na dopravné riešenia.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Majú mať rezidenti parkovanie vo svojej zóne zadarmo?',
    w:'Trnava má viac než 62 700 obyvateľov s trvalým pobytom. Rezidentské parkovanie sa týka veľkej časti domácností, najmä v hustejších zónach. Bezplatné parkovanie by pomohlo rezidentom, ale znížilo by príjmy mesta.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto zvýhodniť parkovanie pre návštevy rezidentov a malé prevádzky?',
    w:'Parkovacia politika ovplyvňuje aj rodinné návštevy, remeselníkov, služby a malé podniky v centre. Keďže platené parkovanie funguje vo viacerých pásmach, aj malé zmeny pravidiel môžu mať veľký dopad na dostupnosť centra.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'neutral'}
  },
  {
    t:'Pešia zóna',
    q:'Má sa Štefánikova ulica zmeniť na pešiu zónu?',
    w:'Mesto pripravuje obnovu Štefánikovej ulice ako súčasť rozširovania pešieho charakteru historického centra. Projekt by zlepšil verejný priestor, ale zároveň by obmedzil prejazd áut, parkovanie a prístup pre časť prevádzok.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Smerovanie mesta',
    q:'Má Trnava pokračovať v smere nastavenom počas éry Petra Bročku?',
    w:'Mesto uvádza pripravované projekty v hodnote viac než 80 miliónov eur. Voľby preto rozhodnú aj o tom, či má nové vedenie pokračovať v doterajšom investičnom smere, alebo má priority mesta výraznejšie zmeniť.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'disagree', cajkova:'neutral'}
  },
  {
    t:'Mestský majetok',
    q:'Má mesto zverejňovať jasné pravidlá nájmov mestských priestorov?',
    w:'Mestské priestory môžu slúžiť podnikaniu, službám, kultúre alebo verejnoprospešným aktivitám. Pri rozpočte mesta okolo 114 miliónov eur je dôležité, aby bolo jasné, ako sa mestský majetok využíva a za akých podmienok sa prenajíma.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má Trnava stavať mestské nájomné byty aj za cenu zadlženia?',
    w:'Trnava má viac než 62 700 obyvateľov a bývanie je pre mnohé mladé rodiny drahé. Mestské nájomné byty by mohli pomôcť ľuďom zostať v meste, ale znamenali by úver alebo presun peňazí z iných projektov.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má mesto obmedziť krátkodobé prenájmy bytov v obytných domoch?',
    w:'Trnava je turistické a univerzitné mesto. Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Krátkodobé prenájmy môžu pomôcť turizmu, ale môžu znižovať počet bytov na bežné bývanie.',
    a:{nemcovska:'neutral', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Doprava',
    q:'Má Trnava ďalej budovať cyklotrasy aj na úkor áut a parkovania?',
    w:'Mesto uvádza cieľ vybudovať ucelenú sieť cyklotrás v rozsahu takmer 120 kilometrov. Cyklotrasy zlepšujú dopravu na bicykli, ale v uliciach často súťažia o priestor s parkovaním, autami a jazdnými pruhmi.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Doprava',
    q:'Má mesto uprednostniť plynulosť áut pred cyklotrasami a pešími zónami?',
    w:'Niektoré dopravné riešenia pomáhajú autám, iné chodcom, cyklistom alebo kvalite verejného priestoru. Pri projektoch za desiatky miliónov eur je dôležité určiť, čo má mať prednosť, keď nie je možné vyhovieť všetkým.',
    a:{nemcovska:'disagree', baros:'agree', horvathova:'neutral', cajkova:'disagree'}
  },
  {
    t:'Doprava',
    q:'Má Trnava ďalej budovať vyvýšené priechody a spomaľovacie prvky?',
    w:'Vyvýšené priechody, prahy a upravené križovatky môžu zvýšiť bezpečnosť chodcov. Niektorí vodiči ich však vnímajú ako zhoršenie plynulosti jazdy, vyšší hluk a vyššiu spotrebu.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Doprava a zamestnávatelia',
    q:'Majú veľkí zamestnávatelia prispievať na dopravné riešenia v meste?',
    w:'Automobilka Stellantis Slovakia sídli priamo v Trnave na Automobilovej ulici. Podľa dostupných údajov vytvára približne 3 700 priamych pracovných miest a ďalšie pracovné miesta u dodávateľov. Dochádzanie zamestnancov ovplyvňuje dopravu v meste.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Komunikácia',
    q:'Má mesto robiť pravidelné stretnutia v každej časti Trnavy?',
    w:'Trnava má viac než 62 700 obyvateľov a viacero častí s rozdielnymi problémami. Pravidelné stretnutia by mohli zlepšiť komunikáciu s obyvateľmi, ale znamenali by viac času, administratívy a verejných záväzkov.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Participácia',
    q:'Má mesto častejšie využívať miestne referendá pri veľkých sporoch?',
    w:'Petíciu za referendum o parkovacej politike podpísalo viac než 19 000 Trnavčanov. Referendá môžu dať obyvateľom priamy hlas, ale môžu aj spomaliť rozhodovanie a zjednodušiť zložité mestské témy.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou?',
    w:'Trnava pripravuje projekty v hodnote viac než 80 miliónov eur. Pri takýchto investíciách môže byť dôležitá nielen najnižšia cena, ale aj životnosť, servisné náklady a kvalita. Vyššia kvalita však môže znamenať vyššie počiatočné výdavky.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Univerzity',
    q:'Má mesto viac podporovať Trnavu ako univerzitné mesto?',
    w:'Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Podpora študentov, internátov, dopravy a služieb môže posilniť život v meste, ale časť obyvateľov z nej nemusí mať priamy úžitok.',
    a:{nemcovska:'disagree', baros:'neutral', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Školy',
    q:'Majú mať školy a škôlky prednosť pred veľkými projektmi v centre?',
    w:'Mesto Trnava zriaďuje 9 základných škôl a rieši aj spádové oblasti materských škôl. Investície do škôl a škôlok sa týkajú každodenného života rodín, ale súťažia o peniaze s obnovou ulíc, parkov a verejných priestorov.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Zeleň',
    q:'Majú pri rekonštrukciách ulíc pribúdať stromy aj na úkor parkovania?',
    w:'Mesto každoročne vysádza nové stromy, no výsadbu často limitujú siete, doprava a šírka ulíc. Viac stromov a tieňa pomáha počas horúčav, ale v úzkych uliciach môže znamenať menej parkovacích miest.',
    a:{nemcovska:'neutral', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Verejné priestory',
    q:'Má Trnava pokračovať vo veľkých obnovách parkov, námestí a ulíc?',
    w:'Mesto uvádza pripravované projekty za viac než 80 miliónov eur. Veľké obnovy môžu zlepšiť kvalitu života a vzhľad mesta, ale časť obyvateľov môže uprednostniť menšie opravy chodníkov, ciest, škôl alebo sídlisk.',
    a:{nemcovska:'agree', baros:'disagree', horvathova:'neutral', cajkova:'agree'}
  },
  {
    t:'Nočný život',
    q:'Má mesto viac podporovať večerný život v centre?',
    w:'Región Trnava zaznamenal za prvých sedem mesiacov roka viac než 37 800 návštevníkov a viac než 80 000 prenocovaní. Živé centrum môže pomôcť podnikom, kultúre a turizmu, ale môže priniesť viac hluku pre obyvateľov centra.',
    a:{nemcovska:'agree', baros:'agree', horvathova:'neutral', cajkova:'neutral'}
  },
  {
    t:'Priemysel a bývanie',
    q:'Má Trnava obmedziť priemysel, ak zhoršuje život v obytných častiach?',
    w:'Stellantis je jeden z najväčších zamestnávateľov v meste a priemysel prináša pracovné miesta aj príjmy. Zároveň však zvyšuje dopravu, tlak na bývanie a zaťaženie okrajových častí mesta.',
    a:{nemcovska:'neutral', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Kultúra a turizmus',
    q:'Má mať kultúra a turizmus pevný ročný rozpočet?',
    w:'Cestovný ruch v regióne rastie: za prvých sedem mesiacov roka bolo evidovaných viac než 37 800 návštevníkov a 80 000 prenocovaní. Stabilný rozpočet by pomohol plánovať kultúru a turizmus, ale znížil by flexibilitu pri iných výdavkoch.',
    a:{nemcovska:'agree', baros:'neutral', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto zverejňovať konečné ceny a meškania veľkých projektov?',
    w:'Pri pripravovaných projektoch za viac než 80 miliónov eur je dôležité, aby obyvatelia videli pôvodný rozpočet, konečnú cenu, termín dokončenia a dôvody zmien. Takáto kontrola zvyšuje transparentnosť, ale môže byť politicky nepríjemná.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  },
  {
    t:'Sídliská vs. centrum',
    q:'Má ísť viac investícií zo centra do sídlisk a okrajových častí?',
    w:'Trnava pripravuje projekty za viac než 80 miliónov eur. Časť obyvateľov očakáva veľké mestské projekty v centre, iní chcú viac peňazí na vnútrobloky, chodníky, ihriská a každodenné problémy na sídliskách.',
    a:{nemcovska:'neutral', baros:'agree', horvathova:'agree', cajkova:'agree'}
  }
];

// ── Otázky: Župan / VÚC Trnavský kraj ──
window.VAA_DATA.questions.trnava_vuc = [
  {t:'Cesty a mosty', q:'Má kraj stopnúť menej dôležité projekty, aby dal viac peňazí do ciest a mostov?', w:'Rozpočet Trnavského kraja na rok 2026 má príjmy aj výdavky približne 320 miliónov eur. Kapitálové výdavky sú približne 84 miliónov eur a na opravu ciest a mostov má ísť 31 miliónov eur. Otázka je, či má kraj obmedziť menej nutné investície a sústrediť peniaze na dopravnú infraštruktúru, ktorú ľudia používajú každý deň.', a:{viskupic:'agree', lancaric:'agree', berenyi:'agree'}},
  {t:'Audit kraja', q:'Má nový župan zadať nezávislý audit veľkých projektov súčasného vedenia kraja?', w:'Trnavský kraj hospodári s rozpočtom približne 320 miliónov eur a kapitálovými výdavkami približne 84 miliónov eur. Pri takom objeme investícií do ciest, mostov, škôl, sociálnych služieb a kultúry je dôležité vedieť, ktoré projekty meškajú, predražujú sa alebo neprinášajú očakávaný efekt. Audit by zvýšil kontrolu, ale môže byť vnímaný aj ako politický útok na súčasné vedenie.', a:{viskupic:'disagree', lancaric:'agree', berenyi:'neutral'}},
  {t:'Verejná doprava', q:'Má kraj garantovať dopravnú obslužnosť každej obce aj vtedy, keď budú niektoré spoje dlhodobo stratové?', w:'Regionálne autobusy sú dôležité najmä pre ľudí bez auta, študentov a seniorov. V niektorých obciach je spojenie slabé mimo špičky, večer alebo cez víkendy. Garantované minimum spojov by pomohlo ľuďom bez auta, ale zvýšilo by náklady kraja na dopravnú obslužnosť.', a:{viskupic:'agree', lancaric:'agree', berenyi:'agree'}},
  {t:'Veterné parky', q:'Má kraj blokovať veterné parky aj vtedy, keď štát tvrdí, že ich potrebuje pre energetickú bezpečnosť?', w:'Pilotná zóna pre rozvoj veternej energie – Západ počíta s výstavbou samostatných veterných elektrární s maximálnym počtom 69 kusov a výkonom približne 430 MW. Zástancovia hovoria o čistej elektrine a energetickej bezpečnosti, odporcovia o zásahu do krajiny, hluku a tlaku na obce. Otázka je, či má kraj stáť najmä za dotknutými obcami, alebo hľadať kompromis so štátom.', a:{viskupic:'agree', lancaric:'neutral', berenyi:'agree'}},
  {t:'Školy verzus cesty', q:'Má kraj odložiť časť opráv ciest, aby dal viac peňazí do škôl a internátov?', w:'Rozpočet kraja na rok 2026 počíta s 31 miliónmi eur na opravy ciest a mostov. Kraj zároveň plánuje investície do vzdelávania, internátov a obnovy škôl. Otázka je, či majú mať školy prednosť aj vtedy, keď to spomalí opravy dopravnej infraštruktúry.', a:{viskupic:'agree', lancaric:'neutral', berenyi:'neutral'}},
  {t:'Župné organizácie', q:'Má nový župan vymeniť vedenia župných organizácií, ak neplnia jasné výsledky?', w:'Kraj riadi školy, kultúrne inštitúcie, sociálne zariadenia a ďalšie organizácie. Výmena vedenia môže priniesť nový výkon a zodpovednosť, ale aj politizáciu úradov a stratu skúseností. Otázka je, či má župan robiť tvrdšie personálne zmeny alebo chrániť stabilitu systému.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'disagree'}},
  {t:'Veľkí investori', q:'Má kraj odmietnuť investora, ktorý neprispeje na dopravu, školy alebo bývanie?', w:'Veľkí investori prinášajú pracovné miesta, ale zároveň zvyšujú tlak na cesty, autobusy, školy, bývanie a služby. Tvrdé podmienky môžu ochrániť obyvateľov pred nákladmi, ktoré by inak niesli obce a kraj. Na druhej strane môžu investora odradiť a pracovné miesta môžu vzniknúť inde.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Mosty', q:'Má kraj najprv opraviť mosty v horšom stave, aj keď sa tým odložia opravy ciest?', w:'Mosty patria medzi priority rozpočtu Trnavského kraja. Zlý stav mosta môže obmedziť alebo úplne prerušiť spojenie obcí, zatiaľ čo opravy ciest vníma širší počet vodičov každý deň. Kraj preto musí rozhodovať, či najprv riešiť najrizikovejšie mostné objekty alebo viac kilometrov bežných ciest.', a:{viskupic:'agree', lancaric:'neutral', berenyi:'agree'}},
  {t:'Zlučovanie škôl', q:'Má kraj zrušiť alebo zlúčiť slabšie stredné školy, aj keď to poškodí menšie mestá?', w:'Zlučovanie škôl môže znížiť náklady a umožniť lepšie vybavenie odborných učební. Pre menšie mestá však strata školy znamená horšiu dostupnosť, slabší verejný život a väčšie dochádzanie žiakov. Otázka je, či má kraj uprednostniť efektívnejšiu sieť škôl alebo dostupnosť v regiónoch.', a:{viskupic:'neutral', lancaric:'disagree', berenyi:'disagree'}},
  {t:'Integrovaná doprava', q:'Má kraj rozšíriť jeden lístok pre autobusy, vlaky a mestskú dopravu aj mimo Trnavy?', w:'Integrovaná doprava umožňuje cestovať jednoduchšie medzi mestom, obcami, autobusmi, vlakmi a MHD. Pre cestujúcich je výhodou jeden systém a lepšie prestupy. Pre kraj to však znamená náročnejšiu koordináciu s mestami, dopravcami a železnicou.', a:{viskupic:'agree', lancaric:'agree', berenyi:'agree'}},
  {t:'Trnava verzus okresy', q:'Má kraj presunúť časť investícií z okolia Trnavy do vzdialenejších okresov?', w:'Trnava je sídlo kraja a prirodzene priťahuje inštitúcie, školy, kultúru aj investície. Župa však spravuje celé územie vrátane okresov Dunajská Streda, Galanta, Hlohovec, Piešťany, Senica a Skalica. Presun peňazí mimo okolia Trnavy môže pomôcť vyrovnať rozdiely v kraji, ale spomalí projekty tam, kde je najväčšia koncentrácia krajských inštitúcií a dochádzky.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Sociálne služby', q:'Má kraj uprednostniť domácu opatrovateľskú starostlivosť pred výstavbou ďalších veľkých zariadení pre seniorov?', w:'Domáca starostlivosť umožňuje seniorom zostať vo vlastnom prostredí a môže byť lacnejšia než pobytové zariadenie. Na druhej strane, nie každú situáciu možno riešiť doma a rodiny často žiadajú nové kapacity domovov sociálnych služieb.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Poľnohospodárska pôda', q:'Má kraj odmietať logistické a priemyselné projekty na kvalitnej poľnohospodárskej pôde?', w:'Poľnohospodárska pôda tvorí približne 69,3 % rozlohy Trnavského kraja a stupeň zornenia je najvyšší zo všetkých krajov SR. Priemyselné parky a logistika môžu priniesť prácu a dane, ale zaberajú kvalitnú pôdu, ktorá sa po zastavaní ťažko vracia späť do poľnohospodárstva.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Financie', q:'Má kraj odložiť časť nových projektov, ak by ich financovanie znamenalo rast dlhodobých záväzkov?', w:'Rozpočet kraja na rok 2026 je prezentovaný ako vyrovnaný. Veľké opravy škôl, mostov a sociálnych zariadení sa však nedajú urobiť naraz. Úver alebo iné dlhodobé záväzky by zrýchlili opravy, ale znížili rozpočtový priestor v ďalších rokoch.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Zdravotníctvo', q:'Má kraj zvýhodniť okresy s nedostatkom lekárov aj za cenu, že menej peňazí pôjde do silnejších centier?', w:'Nie všetky okresy kraja majú rovnakú dostupnosť ambulancií a špecialistov. Cielená podpora slabších okresov by mohla znížiť regionálne rozdiely, ale zároveň by znamenala menší priestor na rozvoj tam, kde je zdravotná sieť už silnejšia.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Cyklodoprava', q:'Má kraj míňať viac peňazí na cyklotrasy, keď sú v zlom stave cesty a mosty?', w:'Kraj má v roku 2026 vyčlenených približne 31 miliónov eur na opravu ciest a mostov. Regionálne cyklotrasy môžu pomôcť dochádzaniu aj cestovnému ruchu, ale časť voličov ich vníma ako menej naliehavé než rozbité cesty, mosty alebo autobusová doprava.', a:{viskupic:'agree', lancaric:'neutral', berenyi:'neutral'}},
  {t:'Nemocnice mimo Trnavy', q:'Má kraj kritizovať štát aj vlastných politických partnerov, ak ohrozia nemocnice v menších okresoch?', w:'V kraji sú ústavné zdravotnícke zariadenia aj mimo Trnavy, napríklad v Dunajskej Strede, Galante, Piešťanoch, Hlohovci, Skalici či Senici. Pre obyvateľov menších okresov je dostupnosť nemocnice otázkou času dojazdu. Otázka je, či má župan otvorene tlačiť aj na politicky nepríjemných partnerov, ak ide o zdravotnú dostupnosť.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Noví investori', q:'Má kraj aktívne lákať ďalších veľkých investorov, aj keď región už naráža na dopravu, bývanie a služby?', w:'Trnava a okolie patria medzi silné priemyselné centrá. Veľkí investori prinášajú pracovné miesta, ale zároveň zvyšujú tlak na cesty, autobusy, školy, bývanie a zdravotníctvo. Kraj môže pomáhať najmä cez dopravu, stredné školy a územnú koordináciu, ale ďalší rast môže zhoršiť každodenný život v najviac zaťažených lokalitách.', a:{viskupic:'agree', lancaric:'neutral', berenyi:'neutral'}},
  {t:'Školy v menších mestách', q:'Má kraj zachovať stredné školy v menších mestách aj pri nižšom počte žiakov?', w:'Stredná škola v menšom meste často drží mladých ľudí v regióne a podporuje miestnu ekonomiku. Na druhej strane, menšie školy môžu byť drahšie na prevádzku a nemusia vedieť ponúknuť rovnaké vybavenie ako väčšie školy. Rozhodnutie je konflikt medzi dostupnosťou a efektivitou.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Granty a podujatia', q:'Má kraj obmedziť menšie granty a podujatia, aby zostalo viac peňazí na cesty a mosty?', w:'Kraj podporuje menšie projekty, podujatia, kultúru, šport a komunitné aktivity. Tieto peniaze sú viditeľné v obciach, ale pri rozbitých cestách a mostoch môže časť voličov očakávať tvrdšie sústredenie rozpočtu na základnú infraštruktúru. Otázka je, či má kraj škrtať menšie podpory v prospech veľkých opráv.', a:{viskupic:'disagree', lancaric:'neutral', berenyi:'disagree'}},
  {t:'Žitný ostrov', q:'Má kraj sprísniť pravidlá pre výstavbu a hospodárenie na Žitnom ostrove aj za cenu obmedzenia niektorých investorov a farmárov?', w:'Žitný ostrov patrí medzi najdôležitejšie zásoby podzemnej vody na Slovensku. Prísnejšia ochrana vody by znížila environmentálne riziká, no mohla by obmedziť časť podnikateľských a poľnohospodárskych zámerov v území.', a:{viskupic:'agree', lancaric:'agree', berenyi:'agree'}},
  {t:'Jadrová energetika', q:'Má kraj podporiť plán vlády postaviť nový jadrový blok v Jaslovských Bohuniciach?', w:'Areál Atómových elektrární Bohunice sa nachádza v Trnavskom kraji a jeho existujúce bloky dodávajú približne štvrtinu spotreby elektriny na Slovensku. Vláda pripravuje výstavbu nového bloku s výkonom viac než 1000 MW s odhadovanými nákladmi približne 15 miliárd eur. Zástancovia hovoria o energetickej bezpečnosti, regionálnych pracovných miestach a znížení emisií, odporcovia o cene, jadrovom odpade a dopade na podzemné vody.', a:{viskupic:'neutral', lancaric:'neutral', berenyi:'agree'}},
  {t:'Transparentnosť', q:'Má kraj zverejňovať konečné ceny, meškania a dodatky pri veľkých projektoch v prehľadnej verejnej tabuľke?', w:'Kraj investuje desiatky miliónov eur do ciest, škôl, sociálnych zariadení a kultúry. Verejný prehľad by uľahčil kontrolu projektov, ale zvýšil by tlak na úrad a dodávateľov pri každom meškaní alebo zmene ceny.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'agree'}},
  {t:'Kultúra', q:'Má kraj chrániť menšie regionálne kultúrne inštitúcie aj vtedy, keď sú drahšie na prevádzku než väčšie centrá?', w:'Menšie galérie, knižnice, osvetové strediská a kultúrne zariadenia držia verejný život aj mimo krajského mesta. Ich prevádzka však býva drahšia na jedného návštevníka než vo väčších centrách.', a:{viskupic:'agree', lancaric:'neutral', berenyi:'agree'}},
  {t:'Samosprávy', q:'Má kraj viac viazať dotácie pre obce a mestá na jasné merateľné výsledky?', w:'Kraj podporuje rôzne miestne projekty v doprave, kultúre, školstve aj komunitnom živote. Prísnejšie podmienky by mohli zvýšiť efektivitu, ale menšie samosprávy by mohli mať problém splniť všetky požiadavky.', a:{viskupic:'neutral', lancaric:'agree', berenyi:'neutral'}}
];
