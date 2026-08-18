// ── Volebná kalkulačka 2026 — BANSKÁ BYSTRICA + BANSKOBYSTRICKÝ KRAJ ──
// Aktualizované 18. 8. 2026. Kandidáti sú verejne ohlásení; lehota na podanie kandidátnych listín ešte neuplynula.

window.VAA_DATA = window.VAA_DATA || {};
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

window.VAA_DATA.candidates['bystrica_primator'] = [
  {id:'sobota',name:'Tomáš Sobota',party:'Nezávislý / KDH a KÚ',color:'#275C9A',url:'https://tsobota.sk/'},
  {id:'javorcikova',name:'Diana Javorčíková',party:'Bystrica sa spája / PS / SaS / Demokrati / Banskobystrická alternatíva',color:'#1E4E9D',url:'https://dianajavorcikova.sk/'},
  {id:'molitoris',name:'Matúš Molitoris',party:'Nezávislý',color:'#6B5B95',url:'https://molitoris.sk/'}
];

window.VAA_DATA.candidates['bystrica_vuc'] = [
  {id:'lunter',name:'Ondrej Lunter',party:'Nezávislý / úradujúci predseda',color:'#2E8B57',url:'https://ondrejlunter.sk'},
  {id:'suja',name:'Miroslav Suja',party:'Republika',color:'#795548',url:'https://www.hnutie-republika.sk/predstavitelia/miroslav-suja/'},
  {id:'malatinec',name:'Roman Malatinec',party:'Strana vidieka',color:'#8B6F47',url:'https://stranavidieka.sk/'}
];

window.VAA_DATA.questions.bystrica_primator = [
  {t:'Rezidentské parkovanie',
   q:'Má Banská Bystrica rozšíriť regulované rezidentské parkovanie aj na Fončordu a Sásovú?',
   w:'Od januára 2026 mesto samo prevádzkuje platené parkovanie v centre; rezident platí za prvé vozidlo 20 € ročne a za druhé 100 €. Rozšírenie regulácie zvýhodní miestnych rezidentov, ale obmedzí časť bezplatného parkovania.',
   a:{sobota:'neutral',javorcikova:'agree',molitoris:'agree'}},

  {t:'Príjmy z parkovania',
   q:'Má mesto dávať príjmy z parkovania prednostne do nových parkovacích miest namiesto MHD, chodníkov a cyklodopravy?',
   w:'Od roku 2026 parkovné vyberá priamo mesto, takže príjmy môže vracať do dopravy podľa vlastných priorít. Viac nových miest pomôže vodičom, ale rovnaké peniaze potom chýbajú na MHD, chodníky či cyklodopravu.',
   a:{sobota:'agree',javorcikova:'disagree',molitoris:'agree'}},

  {t:'Doprava',
   q:'Má mesto uprednostniť plynulosť automobilovej dopravy pred ďalším vyhradzovaním priestoru pre MHD a cyklodopravu?',
   w:'Pri hlavných ťahoch, parkovaní aj okolí Rooseveltovej nemocnice sa mesto delí o obmedzený uličný priestor. Viac priestoru pre autá môže zlepšiť plynulosť, ale sťažuje vytváranie preferencie MHD a bezpečných cyklotrás.',
   a:{sobota:'agree',javorcikova:'disagree',molitoris:'agree'}},

  {t:'Verejná doprava',
   q:'Má mesto zvýšiť dotáciu MHD, ak by to umožnilo častejšie spoje na hlavných linkách?',
   w:'Častejšie spoje skracujú čakanie a robia MHD použiteľnejšou aj bez auta. Vyžadujú však viac výkonov, vodičov a vozidiel, takže by pravidelne zvyšovali výdavky mesta na dopravu.',
   a:{sobota:'neutral',javorcikova:'agree',molitoris:'neutral'}},

  {t:'Cyklodoprava',
   q:'Má mesto budovať oddelené cyklotrasy aj tam, kde musí zrušiť parkovacie miesta alebo jazdný pruh?',
   w:'Súvislá cyklotrasa potrebuje bezpečný priestor, ktorý sa v zastavaných uliciach často nedá vytvoriť bez zásahu do parkovania alebo jazdných pruhov. Výsledkom je bezpečnejšia cyklodoprava, ale menej priestoru pre autá.',
   a:{sobota:'disagree',javorcikova:'agree',molitoris:'disagree'}},

  {t:'Cesty a chodníky',
   q:'Má mesto odložiť nové veľké projekty, kým výrazne nezníži investičný dlh na cestách, chodníkoch a schodiskách?',
   w:'V roku 2026 mesto spúšťa obnovu ciest, chodníkov a parkovania za viac než 7 mil. €. Sústredenie na existujúcu infraštruktúru zrýchli opravy, ale môže odsunúť nové rozvojové projekty a využitie externých zdrojov.',
   a:{sobota:'agree',javorcikova:'disagree',molitoris:'agree'}},

  {t:'Rozpočet',
   q:'Má mesto obmedziť nové investície, ak by si na ne muselo brať ďalšie úvery?',
   w:'Rozpočet Banskej Bystrice na rok 2026 je približne 150 mil. € a mesto chce do konca roka 2027 preinvestovať asi 50 mil. €. Úver môže projekty urýchliť, ale vytvára splátky a menší priestor v budúcich rozpočtoch.',
   a:{sobota:'agree',javorcikova:'disagree',molitoris:'agree'}},

  {t:'Bývanie',
   q:'Má si Banská Bystrica stanoviť cieľ postaviť najmenej 200 nových mestských nájomných bytov v ďalšom volebnom období?',
   w:'Mesto pripravuje 80 nájomných bytov na Hlbokej ulici, na projektovú dokumentáciu vyčlenilo 150 000 € a ďalší projekt pripravuje na Ďumbierskej. Cieľ 200 bytov by ponuku výrazne rozšíril, ale vyžadoval by pozemky, externé zdroje aj vlastné peniaze mesta.',
   a:{sobota:'neutral',javorcikova:'agree',molitoris:'agree'}},

  {t:'Investori a pracovné miesta',
   q:'Má mesto ponúkať investorom zvýhodnené mestské pozemky, ak vytvoria väčší počet dobre platených pracovných miest?',
   w:'Banská Bystrica mala v roku 2025 približne 72 500 obyvateľov a dlhodobo ich stráca. Zvýhodnenie investora môže priniesť pracovné miesta a pomôcť udržať mladých, ale mesto sa vzdá časti trhovej hodnoty svojho majetku.',
   a:{sobota:'agree',javorcikova:'neutral',molitoris:'agree'}},

  {t:'Výstavba',
   q:'Má mesto obmedziť veľké bytové projekty v existujúcich štvrtiach, ak by výrazne zvýšili intentizu dopravy a tlak na parkovanie?',
   w:'Nové byty zvyšujú ponuku bývania a počet obyvateľov, no väčšie projekty môžu priniesť stovky nových áut a vyšší tlak na školy, parkovanie či verejný priestor. Prísnejšie limity chránia existujúce štvrte, ale spomalia bytovú výstavbu.',
   a:{sobota:'agree',javorcikova:'neutral',molitoris:'disagree'}},

  {t:'Kontrola projektov',
   q:'Má vedenie mesta potrebovať nový súhlas zastupiteľstva, ak sa cena veľkého projektu počas realizácie zvýši o viac než 10 %?',
   w:'Mesto chce do konca roka 2027 preinvestovať približne 50 mil. €. Povinné nové hlasovanie pri zdražení nad 10 % posilní kontrolu poslancov, ale pri nepredvídaných prácach môže projekt spomaliť. Hranica 10 % je návrh otázky, nie dnešné pravidlo.',
   a:{sobota:'agree',javorcikova:'agree',molitoris:'agree'}},

  {t:'Zeleň',
   q:'Má mesto chrániť existujúce stromy aj vtedy, keď tým zdražie alebo skomplikuje dopravný či stavebný projekt?',
   w:'Pri pripravovanej obnove Mestského parku sa počíta aj s výsadbou približne 330 nových drevín a viac než kilometra živého plota. Ochrana vzrastlých stromov môže meniť trasovanie a cenu stavby, kým výrub s náhradnou výsadbou dáva projektu väčšiu voľnosť.',
   a:{sobota:'disagree',javorcikova:'agree',molitoris:'neutral'}},

  {t:'Centrum a sídliská',
   q:'Má mesto viac investovať do centra Banskej Bystrice aj za cenu pomalšej obnovy ciest, chodníkov, parkovísk a verejných priestorov na sídliskách?',
   w:'Mesto pripravuje komplexnú obnovu Námestia slobody a zároveň obnovu ciest, chodníkov a parkovacích miest za viac než 7 mil. € na viacerých uliciach. Vyššia priorita centra znamená menšiu investičnú kapacitu pre podobné lokálne projekty.',
   a:{sobota:'disagree',javorcikova:'neutral',molitoris:'disagree'}},

  {t:'Školy a šport',
   q:'Má mesto odložiť novú multifunkčnú športovú halu, ak nevie financovať opravy škôl, škôlok a ihrísk?',
   w:'Mesto v roku 2026 realizuje rozsiahle školské investície a zároveň sa v kampani objavil návrh novej multifunkčnej haly. Hala môže slúžiť športu a podujatiam, no pri obmedzenom rozpočte súťaží s obnovou každodenných zariadení pre deti.',
   a:{sobota:'agree',javorcikova:'agree',molitoris:'agree'}},

  {t:'Bezpečnosť',
   q:'Má mesto zvýšiť počet mestských policajtov a kamerový dohľad, aj keby menej peňazí zostalo na sociálnu prevenciu?',
   w:'Viac policajtov a kamier môže zvýšiť dohľad vo verejnom priestore a rýchlosť zásahov. Ide však o trvalé personálne a prevádzkové náklady, ktoré konkurujú terénnej práci, práci s mládežou a ďalšej sociálnej prevencii.',
   a:{sobota:'agree',javorcikova:'disagree',molitoris:'agree'}},

  {t:'Kultúra',
   q:'Má mesto garantovať kultúre najmenej 2 % bežných výdavkov, aj keby tým menej zostalo na cesty a šport?',
   w:'Celkový rozpočet mesta na rok 2026 je približne 150 mil. €. Pevná 2-percentná hranica by chránila kultúru pred škrtmi, ale zároveň by časť bežných výdavkov nemohla byť podľa aktuálnej potreby presunutá na dopravu, šport či iné služby.',
   a:{sobota:'disagree',javorcikova:'agree',molitoris:'disagree'}},

  {t:'Participatívny rozpočet',
   q:'Majú obyvatelia priamo rozhodovať o 1 % bežných výdavkov mesta cez participatívny rozpočet?',
   w:'V ročníku 2025/2026 rozhodovalo 1 145 obyvateľov o participatívnom rozpočte vo výške 40 000 €. Zvýšenie na 1 % bežných výdavkov by obyvateľom dalo násobne väčší vplyv, ale túto časť rozpočtu by už nerozdeľovalo vedenie a zastupiteľstvo.',
   a:{sobota:'agree',javorcikova:'agree',molitoris:'agree'}},

  {t:'Plážové kúpalisko',
   q:'Má mesto získať Plážové kúpalisko späť pod svoju priamu kontrolu, aj keby ukončenie súčasného nájmu a obnova stáli milióny eur?',
   w:'Plážové kúpalisko patrí mestu, ale od roku 2007 je prenajaté súkromnému prevádzkovateľovi na 30 rokov. Priama kontrola by mestu umožnila rozhodovať o prevádzke a obnove, no predčasné riešenie nájmu a modernizácia môžu stáť milióny eur.',
   a:{sobota:'neutral',javorcikova:'agree',molitoris:'agree'}},

  {t:'Námestie slobody',
   q:'Má mať obnova Námestia slobody prednosť pred menšími investíciami na sídliskách?',
   w:'Mesto už ukončilo architektonickú súťaž na komplexnú revitalizáciu Námestia slobody. Zároveň pripravuje desiatky menších investícií do ciest, chodníkov, škôl, športovísk a parkovania, takže veľká obnova centra súťaží o peniaze aj kapacity s mestskými časťami.',
   a:{sobota:'disagree',javorcikova:'neutral',molitoris:'disagree'}},

  {t:'Mestský majetok',
   q:'Má mesto predávať nepotrebný majetok a použiť peniaze na investície, aj keď by ho mohlo dlhodobo prenajímať?',
   w:'Predaj budovy alebo pozemku prinesie väčšiu sumu okamžite a odstráni náklady na správu. Dlhodobý prenájom zachová majetok vo vlastníctve mesta a môže prinášať príjem mnoho rokov, ale neposkytne veľký kapitál naraz.',
   a:{sobota:'neutral',javorcikova:'disagree',molitoris:'agree'}},

  {t:'Podnikanie a inovácie',
   q:'Má mesto vytvoriť vlastnú agentúru na prilákanie investorov, aj keby to znamenalo nové trvalé výdavky mesta?',
   w:'V kampani sa objavil cieľ podporiť vznik najmenej 50 nových startupov do roku 2030 cez aktívnejšiu mestskú podporu podnikania. Vlastná agentúra môže priniesť investície a pracovné miesta, ale vytvára nové personálne a prevádzkové náklady.',
   a:{sobota:'disagree',javorcikova:'agree',molitoris:'agree'}},

  {t:'Poradie opráv',
   q:'Má mesto určovať poradie opráv chodníkov a ciest podľa technického stavu aj vtedy, keď poslanci alebo obyvatelia žiadajú inú prioritu?',
   w:'V roku 2026 mesto spúšťa obnovu miestnych ciest, chodníkov a parkovania za viac než 7 mil. €; výber úsekov vychádzal z technického stavu, odborných podkladov aj požiadaviek obyvateľov. Pevnejšie dátové poradie obmedzí politické zásahy, ale aj možnosť preskočiť lokálny problém.',
   a:{sobota:'agree',javorcikova:'agree',molitoris:'agree'}},

  {t:'Školy a voľný čas',
   q:'Má mesto uprednostniť rekonštrukcie existujúcich škôl pred výstavbou nových športových a voľnočasových zariadení?',
   w:'Mesto má v roku 2026 rozbehnuté obnovy škôl približne za 14,4 mil. €; modernizácia štyroch školských areálov stojí 4,62 mil. €. Ďalšie investície do existujúcich škôl zlepšia ich stav, ale nechajú menej priestoru na nové samostatné športové a voľnočasové zariadenia.',
   a:{sobota:'agree',javorcikova:'agree',molitoris:'agree'}},

  {t:'Verejný priestor',
   q:'Má mesto zaviesť záväzný dizajn manuál pre ulice, námestia, reklamu a mestský mobiliár, aj keby obmedzil voľnosť súkromných prevádzok a investorov?',
   w:'Banská Bystrica pripravuje manuál verejných priestorov, ktorý má zjednotiť pravidlá pre mobiliár, reklamu a vzhľad ulíc. Záväzné pravidlá môžu zlepšiť kvalitu priestoru, ale obmedzia individuálne riešenia vlastníkov, prevádzok a investorov.',
   a:{sobota:'agree',javorcikova:'agree',molitoris:'disagree'}},

  {t:'Investičné priority',
   q:'Má mesto pri veľkých investíciách uprednostniť projekty s najvyšším merateľným prínosom pred rovnomerným rozdelením peňazí medzi mestské časti?',
   w:'Banská Bystrica chce do konca roka 2027 preinvestovať približne 50 mil. €. Projekt využívaný tisíckami ľudí môže priniesť väčší celkový efekt, no dôsledné hodnotenie podľa počtu používateľov či úspor môže znevýhodniť menšie mestské časti.',
   a:{sobota:'agree',javorcikova:'neutral',molitoris:'agree'}}
];

window.VAA_DATA.questions.bystrica_vuc = [
  {t:'Financovanie opráv ciest',
   q:'Má kraj presunúť ďalších 10 miliónov eur z nových projektov do opráv ciest a mostov?',
   w:'BBSK spravuje približne 2 500 km ciest II. a III. triedy a viac než 1 000 mostov. Ďalších 10 mil. € by opravy zrýchlilo, ale rovnaké peniaze by chýbali pri školách, sociálnych službách či nových rozvojových projektoch.',
   a:{lunter:'agree',suja:'agree',malatinec:'agree'}},

  {t:'Havarijné mosty a cesty',
   q:'Majú mať mosty a cesty v najhoršom technickom stave vždy prednosť pred novými dopravnými projektmi?',
   w:'Na bežné výdavky spojené s cestami má BBSK v rozpočte 2026 približne 19,5 mil. € a ďalšie rekonštrukcie financuje investične. Priorita najhoršieho technického stavu zvyšuje bezpečnosť, ale môže odsunúť nové spojenie s väčším dopravným prínosom.',
   a:{lunter:'agree',suja:'agree',malatinec:'agree'}},

  {t:'Spoje do malých obcí',
   q:'Má kraj zachovať autobusové spoje do malých obcí aj tam, kde ich pravidelne využíva len málo cestujúcich?',
   w:'BBSK dáva v roku 2026 na verejnú dopravu približne 47 mil. €. Riedko využívané spoje sú drahšie na cestujúceho, ale pre malé obce môžu byť jediným spojením so školou, prácou či lekárom.',
   a:{lunter:'agree',suja:'agree',malatinec:'agree'}},

  {t:'Dotácie na autobusy',
   q:'Má kraj zvýšiť dotácie na autobusy, ak tým zlepší spoje aj v menej vyťažených oblastiach?',
   w:'Verejná doprava stojí BBSK v roku 2026 približne 47 mil. €. Vyššia dotácia môže udržať alebo zahustiť spoje na vidieku, ale rovnaké peniaze potom chýbajú pri cestách, školách či sociálnych službách.',
   a:{lunter:'agree',suja:'neutral',malatinec:'agree'}},

  {t:'Zdravotníctvo',
   q:'Má kraj otvárať ďalšie vlastné ambulancie aj napriek tomu, že ich prevádzkovanie nie je jeho základnou zákonnou úlohou?',
   w:'BBSK už prevádzkuje 12 vlastných ambulancií a v roku 2025 otvoril ďalšie pediatrické, všeobecné aj špecializované pracoviská. Zlepšujú dostupnosť lekárov, ale kraj tým preberá personálne a prevádzkové náklady nad rámec svojej základnej úlohy.',
   a:{lunter:'agree',suja:'agree',malatinec:'agree'}},

  {t:'Zdravotnícke školy',
   q:'Má kraj výraznejšie zvýšiť počet miest na zdravotníckych školách aj na úkor kapacít iných študijných odborov?',
   w:'Tri krajské zdravotnícke školy môžu v školskom roku 2026/27 prijať 232 prvákov na odbor praktická sestra, o 40 viac než rok predtým. Viac miest môže zmierniť nedostatok sestier, ale školské kapacity a peniaze sú obmedzené.',
   a:{lunter:'agree',suja:'agree',malatinec:'agree'}},

  {t:'Sociálne služby',
   q:'Má kraj presúvať ďalšie zariadenia sociálnych služieb na mestá alebo neziskové organizácie, ak tým výrazne ušetrí?',
   w:'BBSK presunul tri zariadenia sociálnych služieb na neziskové organizácie a mesto Brezno; v rozpočte 2026 očakáva úsporu približne 4 mil. € ročne. Úspora uvoľní peniaze na iné služby, kraj však stráca časť priamej kontroly.',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Sociálna starostlivosť',
   q:'Má kraj investovať viac do komunitnej a domácej starostlivosti namiesto ďalšieho rozširovania veľkých pobytových zariadení?',
   w:'BBSK pokračuje v deinštitucionalizácii sociálnych služieb; komunitný model už funguje v Ladomerskej Vieske a ďalšie projekty vznikajú v Pohorelej a Červenej Skale. Menšie služby približujú život domácemu prostrediu, ale nie sú vhodné pre každého klienta.',
   a:{lunter:'agree',suja:'neutral',malatinec:'agree'}},

  {t:'Stredné školy',
   q:'Má kraj pokračovať v spájaní menších stredných škôl do väčších kampusov, ak sa tým ušetrí na ich prevádzke?',
   w:'Už uskutočnené spájanie stredných škôl do kampusov má podľa BBSK priniesť úsporu viac než 2 mil. € ročne. Väčšie školy môžu efektívnejšie využívať budovy a vybavenie, no niektorým žiakom sa môže zhoršiť dostupnosť školy alebo výber odboru.',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Odborné vzdelávanie',
   q:'Má kraj obmedziť odbory s dlhodobo slabým uplatnením a presunúť viac miest do odborov, po ktorých je dopyt na trhu práce?',
   w:'BBSK má 13 okresov a päť z nich patrí medzi najmenej rozvinuté na Slovensku. Prispôsobenie odborov trhu práce môže zvýšiť uplatnenie absolventov, ale zúži výber študentov a potreby ekonomiky sa môžu časom meniť.',
   a:{lunter:'agree',suja:'neutral',malatinec:'neutral'}},

  {t:'Digitálne vzdelávanie',
   q:'Má kraj rozširovať centrum TUMO aj do ďalších častí kraja, aj keby tým menej peňazí zostalo na tradičné školské vybavenie?',
   w:'Prvé centrum TUMO v Banskej Bystrici má kapacitu približne 1 200 až 1 500 mladých týždenne a kraj uvažuje o ďalšom centre na juhu. Digitálne vzdelávanie môže zvýšiť šance mladých, ale vyžaduje nové investície a prevádzkové náklady.',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Eurofondy',
   q:'Má kraj prispôsobovať svoje investície eurofondovým výzvam, aj keď by bez nich dal prednosť iným projektom?',
   w:'Rozpočet BBSK na rok 2026 počíta približne so 117 mil. € z eurofondov. Externé zdroje umožňujú realizovať oveľa viac investícií, ale podmienky výziev môžu ovplyvniť, čo a kedy kraj postaví.',
   a:{lunter:'agree',suja:'disagree',malatinec:'agree'}},

  {t:'Úvery',
   q:'Má kraj ďalej využívať úvery na spolufinancovanie veľkých investícií, aj keď tým zvýši svoje budúce splátky?',
   w:'BBSK hospodári v roku 2026 s rozpočtom približne 457 mil. €; úver a vytvorené úspory majú spolu pokryť asi 30 mil. € investičných potrieb. Úver zrýchli projekty, ale vytvára splátky pre ďalšie rozpočty.',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Finančná rezerva',
   q:'Má kraj držať svoju vysokú finančnú rezervu aj vtedy, keď by sa tieto peniaze dali okamžite použiť na cesty a služby?',
   w:'BBSK si v rozpočte 2026 vytvoril rezervu 11 mil. € pre prípad horšieho vývoja príjmov. Rezerva znižuje finančné riziko, ale rovnaké peniaze by sa dali použiť na opravy, školy alebo sociálne služby už dnes.',
   a:{lunter:'disagree',suja:'disagree',malatinec:'neutral'}},

  {t:'Regionálna rovnováha',
   q:'Má kraj presunúť väčší podiel nových investícií do najmenej rozvinutých okresov aj vtedy, keď inde majú projekty väčší počet používateľov?',
   w:'Z 13 okresov BBSK patrí medzi najmenej rozvinuté päť: Lučenec, Poltár, Revúca, Rimavská Sobota a Veľký Krtíš. Vyššia podpora môže znižovať regionálne rozdiely, ale znamená menej peňazí pre projekty s väčším počtom používateľov inde.',
   a:{lunter:'neutral',suja:'agree',malatinec:'agree'}},

  {t:'Technologické centrá',
   q:'Má kraj investovať do nových technologických centier pre firmy aj za cenu menších investícií do ciest, škôl či sociálnych služieb?',
   w:'V kraji sa diskutuje o vzniku piatich technologických centier zameraných napríklad na strojárstvo, drevárstvo či potravinárstvo. Môžu podporiť inovácie a pracovné miesta, ale vyžadujú peniaze a personál, ktoré nemožno použiť inde.',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Kultúra',
   q:'Má kraj pokračovať vo veľkých rekonštrukciách kultúrnych budov aj vtedy, keď má vysoký investičný dlh na cestách a mostoch?',
   w:'Na kultúru má BBSK v roku 2026 približne 11,8 mil. € bežných výdavkov. Rekonštrukcia Divadla J. G. Tajovského stála vyše 2,5 mil. €, pričom väčšinu pokryl Plán obnovy; aj externé projekty však potrebujú prípravu a spolufinancovanie kraja.',
   a:{lunter:'neutral',suja:'disagree',malatinec:'disagree'}},

  {t:'Cestovný ruch',
   q:'Má kraj zvyšovať investície do turistickej infraštruktúry aj tam, kde ju využívajú najmä turisti a nie miestni obyvatelia?',
   w:'Na regionálny rozvoj a cestovný ruch má BBSK v roku 2026 približne 4,6 mil. €. Turistická infraštruktúra môže priniesť pracovné miesta a tržby službám, ale časť nákladov nesie kraj aj tam, kde ju miestni využívajú málo.',
   a:{lunter:'agree',suja:'disagree',malatinec:'neutral'}},

  {t:'Nemocnica Lučenec',
   q:'Má kraj ponechať areál nemocnice v Lučenci v dlhodobom nájme súkromnému prevádzkovateľovi, ak tým zabezpečí kontinuitu zdravotnej starostlivosti?',
   w:'Zastupiteľstvo BBSK v júli 2026 riešilo transformáciu zmluvy o správe a nájme nemocničného areálu v Lučenci s cieľom zachovať kontinuitu zdravotnej starostlivosti. Súkromný prevádzkovateľ nesie časť rizika, kraj však má menšiu priamu kontrolu. Okrem toho, chce skupina Agel tiež kúpiť nemocnicu v Lučenci,',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Kontrola projektov',
   q:'Ak veľký krajský projekt zdražie o viac než 10 %, majú o jeho pokračovaní znovu hlasovať poslanci?',
   w:'BBSK hospodári v roku 2026 s rozpočtom približne 457 mil. € a realizuje desiatky veľkých investícií. Nové hlasovanie pri náraste nad 10 % zvýši kontrolu nad peniazmi, ale pri nečakaných stavebných prácach môže projekt zdržať. Hranica 10 % je návrh otázky.',
   a:{lunter:'disagree',suja:'agree',malatinec:'agree'}},

  {t:'Krajský majetok',
   q:'Má kraj radšej predať nevyužívané budovy a pozemky a peniaze investovať, než ich dlhodobo prenajímať?',
   w:'Predaj prinesie väčšiu sumu okamžite a odstráni náklady na správu. Prenájom ponechá budovy a pozemky vo vlastníctve kraja a môže prinášať príjem mnoho rokov, ale neposkytne veľký kapitál naraz.',
   a:{lunter:'agree',suja:'disagree',malatinec:'neutral'}},

  {t:'Energetické úspory',
   q:'Má kraj uprednostniť energeticky úspornejšiu rekonštrukciu budovy aj vtedy, keď je investícia na začiatku drahšia?',
   w:'BBSK modernizuje školy, kultúrne budovy aj sociálne zariadenia s cieľom znižovať spotrebu energie. Pri Divadle J. G. Tajovského išla väčšina investície nad 2,5 mil. € do energetickej obnovy; vyšší vstupný náklad môže znížiť účty v ďalších rokoch.',
   a:{lunter:'agree',suja:'disagree',malatinec:'agree'}},

  {t:'Právo obcí',
   q:'Má mať obec právo odmietnuť veľký krajský projekt na svojom území, aj keď je dôležitý pre celý región?',
   w:'Kraj môže plánovať cestu, školu či sociálne zariadenie, ktoré slúži ľuďom z viacerých obcí. Právo miestnej samosprávy projekt odmietnuť chráni jej obyvateľov, ale môže zastaviť investíciu dôležitú pre širší región.',
   a:{lunter:'disagree',suja:'agree',malatinec:'agree'}},

  {t:'Investičné priority',
   q:'Má kraj uprednostniť projekty s najvyšším merateľným prínosom pred rovnomerným rozdelením investícií medzi okresy?',
   w:'BBSK má 13 okresov s výrazne rozdielnou veľkosťou a ekonomickou situáciou; päť patrí medzi najmenej rozvinuté. Projekty s najvyšším počtom používateľov môžu priniesť väčší celkový efekt, ale menšie a slabšie okresy by mohli dostávať investície menej často.',
   a:{lunter:'agree',suja:'disagree',malatinec:'disagree'}},

  {t:'Základné služby',
   q:'Má kraj odložiť nové veľké projekty, ak nemá dosť peňazí na základné služby a údržbu?',
   w:'Rozpočet BBSK na rok 2026 je približne 457 mil. €; na školstvo ide asi 118 mil. €, sociálne služby 48 mil. €, verejnú dopravu 47 mil. € a na bežné výdavky ciest približne 19,5 mil. €. Nové projekty prinášajú rozvoj, ale vytvárajú aj ďalšie náklady.',
   a:{lunter:'neutral',suja:'agree',malatinec:'agree'}}
];
