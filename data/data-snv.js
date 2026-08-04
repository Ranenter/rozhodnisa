// ── Volebná kalkulačka 2026 — SPIŠSKÁ NOVÁ VES ──
// Upravujte len tento súbor pre otázky a kandidátov mesta SPIŠSKÁ NOVÁ VES.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['snv_primator'] = [
  {id:'ilasova',   name:'Judita Iľašová',   party:'Progresívne Slovensko / SaS',                            color:'#3a86ff', url:'https://progresivne.sk'},
  {id:'demecko',   name:'Dávid Demečko',    party:'Hlas-SD / Smer-SD / Sme rodina / Republika',             color:'#e63946', url:'https://strana-hlas.sk'},
  {id:'akram',     name:'Adnan Akram',      party:'Nezávislý',                                               color:'#06d6a0', url:'https://addyakram.sk'},
  {id:'godus',     name:'Lukáš Goduš',      party:'Nezávislý',                                               color:'#f4a261', url:'https://www.lukasgodus.sk/'},
  {id:'uhrin',     name:'Miroslav Uhrin',   party:'Nezávislý',                                               color:'#8338ec', url:'https://miroslavuhrin.sk/'},
  {id:'bednarova', name:'Ľubica Bednárová', party:'Nezávislá kandidátka',                                    color:'#ff8f00', url:''}
];

// ── Otázky: Primátor / Primátorka ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.snv_primator = [
  {
    t:'Infraštruktúra',
    q:'Má sa mesto zaviazať, že na opravy ciest a chodníkov vyčlení každý rok pevne stanovený podiel z rozpočtu, aj keď sa tým obmedzí financovanie iných oblastí?',
    w:'Pevný podiel z rozpočtu by mestu každý rok zaručil peniaze na cesty a chodníky a uľahčil plánovanie opráv. Zároveň by však ubral peniaze z iných oblastí, napríklad zo škôl, športu či sociálnych služieb.',
    a:{ilasova:'neutral', demecko:'agree', akram:'agree', godus:'disagree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Infraštruktúra',
    q:'Má mesto každý rok zverejniť plán opráv ciest po jednotlivých uliciach?',
    w:'Verejný plán by ukázal, ktoré ulice sa majú opravovať, kedy a za koľko. Na konci roka by obyvatelia mohli porovnať plán so skutočne vykonanými opravami.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Železnica',
    q:'Má primátor verejne vystúpiť proti vláde, ak štát opäť odloží modernizáciu trate pri Spišskej Novej Vsi?',
    w:'Modernizáciu trate riadi štát a ŽSR, nie mesto. Primátor môže rokovať bez verejného konfliktu alebo proti ďalšiemu odkladu otvorene vystúpiť.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'agree', uhrin:'agree', bednarova:'agree'}
  },
  {
    t:'Práca a poriadok',
    q:'Má mesto vytvoriť platené pracovné tímy pre dlhodobo nezamestnaných, aj keď budú drahšie než zákazka pre súkromnú firmu?',
    w:'Mestské pracovné tímy by mohli pomáhať s čistením, zeleňou a drobnou údržbou. Mesto by však muselo zabezpečiť vedenie, vybavenie a kontrolu kvality.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'neutral', uhrin:'agree', bednarova:'agree'}
  },
  {
    t:'Sociálna pomoc',
    q:'Má mesto presunúť časť peňazí z projektov určených rómskej menšine do pomoci všetkým nízkopríjmovým domácnostiam?',
    w:'Projekty pre rómsku menšinu môžu cielene riešiť bývanie, vzdelávanie, zamestnanosť a problémy v konkrétnych lokalitách. Pomoc podľa príjmu by bola dostupná všetkým chudobným domácnostiam, ale menej by sa sústredila na špecifické príčiny sociálneho vylúčenia.',
    a:{ilasova:'disagree', demecko:'agree', akram:'disagree', godus:'neutral', uhrin:'agree', bednarova:'neutral'}
  },
  {
    t:'Bezpečnosť',
    q:'Má mesto prijať ďalších mestských policajtov a posilniť pešie hliadky, aj keby menej peňazí zostalo na sociálnu a komunitnú prácu?',
    w:'Viac policajtov môže rýchlejšie reagovať na porušovanie poriadku v centre, parkoch a problémových lokalitách. Sociálna a komunitná práca rieši príčiny problémov, ale výsledky bývajú pomalšie.',
    a:{ilasova:'agree', demecko:'agree', akram:'neutral', godus:'neutral', uhrin:'agree', bednarova:'neutral'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto zaviesť rezidentské parkovanie, pri ktorom bude prvé auto domácnosti lacné, ale za druhé a tretie sa bude platiť výrazne viac?',
    w:'Takýto systém zvýhodňuje domácnosti s jedným autom a obmedzuje dlhodobé obsadzovanie ulíc viacerými vozidlami jednej domácnosti. Vyššie poplatky však môžu zasiahnuť rodiny, ktoré viac áut potrebujú.',
    a:{ilasova:'neutral', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'neutral', bednarova:'neutral'}
  },
  {
    t:'Doprava a verejný priestor',
    q:'Má mesto v centre zrušiť časť parkovacích miest, aby vytvorilo širšie chodníky, cyklotrasy a viac zelene?',
    w:'Verejný priestor v centre je obmedzený. Viac priestoru pre peších, bicykle a stromy môže zvýšiť bezpečnosť a kvalitu centra, ale zníži počet miest pre autá.',
    a:{ilasova:'agree', demecko:'disagree', akram:'neutral', godus:'neutral', uhrin:'disagree', bednarova:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou?',
    w:'Najlacnejšia ponuka nemusí mať najdlhšiu životnosť ani najnižšie náklady na údržbu. Vyššia váha kvality však môže znamenať vyššiu počiatočnú cenu.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto zverejňovať ceny a meškania veľkých projektov?',
    w:'Obyvatelia by videli pôvodný rozpočet, konečnú cenu, plánovaný termín a dôvody zmien. Zverejňovanie zvyšuje kontrolu, ale môže odhaliť chyby v príprave alebo riadení projektu.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Participácia',
    q:'Majú obyvatelia rozhodovať o 1 % mestského rozpočtu?',
    w:'Jedno percento z rozpočtu približne 60 miliónov eur predstavuje okolo 600 000 eur. Obyvatelia by hlasovali o menších projektoch, no populárne nápady môžu dostať prednosť pred odbornými alebo menej viditeľnými potrebami.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Participácia',
    q:'Má mesto konzultovať veľké plány s obyvateľmi ešte pred schválením?',
    w:'Skoré konzultácie môžu odhaliť problémy pred schválením projektu. Zároveň môžu rozhodovanie spomaliť a vytvoriť konflikt medzi odborným návrhom, poslancami a verejnosťou.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Kultúra',
    q:'Má mesto garantovať kultúre najmenej 2 % bežných výdavkov, teda približne 965 000 eur ročne, aj keby menej peňazí zostalo na cesty a športoviská?',
    w:'Dve percentá bežných výdavkov mesta predstavujú podľa rozpočtu na rok 2026 približne 965 000 eur. Garantované minimum by uľahčilo plánovanie kultúrnych organizácií a podujatí, ale znížilo by flexibilitu pri naliehavých opravách.',
    a:{ilasova:'agree', demecko:'neutral', akram:'neutral', godus:'disagree', uhrin:'neutral', bednarova:'neutral'}
  },
  {
    t:'Turizmus',
    q:'Má mesto financovať pravidelnú turistickú dopravu zo stanice do Slovenského raja, aj keď bude časť spojov stratová?',
    w:'Spišská Nová Ves sa prezentuje ako vstupná brána do Slovenského raja. Priame spojenie by mohlo pomôcť návštevníkom, hotelom a reštauráciám, ale mesto by muselo doplácať aj na slabo využívané spoje.',
    a:{ilasova:'agree', demecko:'agree', akram:'neutral', godus:'disagree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'ZOO',
    q:'Má mesto obmedziť ďalší rozvoj ZOO a presunúť viac peňazí do služieb, ktoré obyvatelia využívajú každý deň?',
    w:'Spišskonovoveská ZOO je mestská atrakcia pre rodiny a návštevníkov. Ďalšie investície a nové chovné zariadenia však súťažia o peniaze s cestami, školami, športoviskami a sídliskami.',
    a:{ilasova:'neutral', demecko:'disagree', akram:'neutral', godus:'agree', uhrin:'neutral', bednarova:'neutral'}
  },
  {
    t:'Ekonomika',
    q:'Má mesto lákať skôr firmy s lepšie platenými miestami, aj keď ponúknu menej práce pre ľudí s nižšou kvalifikáciou?',
    w:'Lepšie platené miesta môžu v meste udržať vzdelaných mladých ľudí. Takéto firmy však väčšinou vytvoria menej pracovných miest a menej práce pre ľudí s nižšou kvalifikáciou, ktorých je v regióne veľa.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'neutral', uhrin:'neutral', bednarova:'neutral'}
  },
  {
    t:'Sídliská',
    q:'Má mesto presunúť väčšiu časť nových investícií z centra do chodníkov, parkovania, zelene a ihrísk na sídliskách?',
    w:'Projekty v centre reprezentujú mesto a podporujú služby a návštevnosť. Väčšina obyvateľov však každodenne rieši stav chodníkov, parkovania, vnútroblokov a ihrísk na sídliskách.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Financie',
    q:'Má si mesto vziať nový úver na rýchlejšie opravy ciest a chodníkov, aj keď tým obmedzí rozpočty v ďalších rokoch?',
    w:'Úver umožní urobiť viac opráv skôr, ale mesto bude v ďalších rokoch platiť istinu a úroky. Nové zadlženie preto zrýchli dnešné investície na úkor časti budúcich rozpočtov.',
    a:{ilasova:'neutral', demecko:'agree', akram:'neutral', godus:'disagree', uhrin:'disagree', bednarova:'neutral'}
  },
  {
    t:'Odpady',
    q:'Má mesto znížiť poplatok za odpad seniorom a nízkopríjmovým rodinám, aj keby ho ostatným obyvateľom muselo mierne zvýšiť?',
    w:'Úľava by pomohla domácnostiam s nižšími príjmami. Náklady na odpad však musia byť zaplatené, takže výpadok by pokryl rozpočet mesta alebo ostatní poplatníci.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Mestský podnik',
    q:'Má mesto zadávať údržbu ciest, zelene a verejných priestorov prednostne MEPOS-u, aj keď súkromná firma ponúkne nižšiu cenu?',
    w:'MEPOS je sociálny podnik v stopercentnom vlastníctve mesta. Mesto nad ním má priamu kontrolu a podnik vytvára aj sociálne pracovné miesta. Súkromná firma však môže ponúknuť nižšiu cenu alebo špecializovanejšiu službu.',
    a:{ilasova:'agree', demecko:'agree', akram:'agree', godus:'neutral', uhrin:'agree', bednarova:'agree'}
  },
  {
    t:'Bývanie',
    q:'Má mesto stavať nové nájomné byty aj za cenu ďalšieho zadlženia?',
    w:'Mestské byty môžu pomôcť mladým rodinám, pracovníkom škôl a služieb aj ľuďom, ktorí nedosiahnu na komerčné bývanie. Výstavba však vyžaduje úver, mestské pozemky alebo presun peňazí z iných investícií.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Školy',
    q:'Majú mať rekonštrukcie škôl prednosť pred veľkými investíciami do športu a turizmu?',
    w:'Mesto financuje školské budovy aj športové a turistické zariadenia. Pri obmedzenom rozpočte musí rozhodnúť, či majú mať každodenné potreby škôl prednosť pred viditeľnejšími projektmi.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Šport',
    q:'Má mesto uprednostniť menšie športoviská na sídliskách pred jedným veľkým športovým projektom?',
    w:'Menšie ihriská a športoviská využívajú obyvatelia jednotlivých štvrtí každý deň. Veľký projekt môže priniesť významné podujatia a reprezentovať mesto, ale sústredí peniaze do jedného zariadenia.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'agree', uhrin:'neutral', bednarova:'agree'}
  },
  {
    t:'Mestský majetok',
    q:'Má mesto predať nepotrebný majetok najvyššej ponuke, aj keď ho miestne združenie chce využívať na komunitné účely?',
    w:'Najvyššia ponuka prinesie mestu okamžitý príjem a znižuje riziko zvýhodňovania. Komunitné využitie môže mať dlhodobý verejný prínos, aj keď mestu prinesie menej peňazí.',
    a:{ilasova:'disagree', demecko:'agree', akram:'disagree', godus:'neutral', uhrin:'neutral', bednarova:'disagree'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto postaviť parkovací dom aj za cenu nového úveru a plateného parkovania v jeho okolí?',
    w:'Parkovací dom môže uvoľniť ulice a zvýšiť počet miest bez ďalšieho zaberania verejného priestoru. Je však drahý a bez plateného parkovania v okolí môže zostať málo využívaný.',
    a:{ilasova:'neutral', demecko:'agree', akram:'neutral', godus:'neutral', uhrin:'agree', bednarova:'neutral'}
  }
];
