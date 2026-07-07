// ── Volebná kalkulačka 2026 — SPIŠSKÁ NOVÁ VES ──
// Upravujte len tento súbor pre otázky a kandidátov mesta SPIŠSKÁ NOVÁ VES.
// Štruktúra otázky: {t:'Téma', q:'Text otázky?', w:'Vysvetlenie.', a:{id1:'agree'|'neutral'|'disagree', ...}}

window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.candidates['snv_primator'] = [
  {id:'ilasova',  name:'Judita Iľašová',  party:'Progresívne Slovensko / SaS',                         color:'#3a86ff', url:'https://progresivne.sk'},
  {id:'demecko',  name:'Dávid Demečko',   party:'Hlas-SD / Smer-SD / Sme rodina / Republika',               color:'#e63946', url:'https://strana-hlas.sk'},
  {id:'akram',    name:'Adnan Akram',     party:'Nezávislý',                                            color:'#06d6a0', url:'https://addyakram.sk'},
  {id:'godus',    name:'Lukáš Goduš',    party:'Nezávislý',                                            color:'#f4a261', url:'https://www.lukasgodus.sk/'},
  {id:'uhrin',    name:'Miroslav Uhrin',  party:'Nezávislý',                                            color:'#8338ec', url:'https://www.facebook.com/miroslav.uhrin.snv/'}
];

// ── Otázky: Primátor / Primátorka ──
window.VAA_DATA.questions = window.VAA_DATA.questions || {};
window.VAA_DATA.questions.snv_primator = [
  {
    t:'Infraštruktúra',
    q:'Majú mať opravy ciest a chodníkov prednosť pred veľkými novými projektmi?',
    w:'Rozpočet mesta na rok 2026 je takmer 60 miliónov eur, z toho kapitálové výdavky sú približne 10,3 milióna eur. Každé väčšie rozhodnutie preto znamená výber medzi opravou bežnej infraštruktúry a novými investíciami.',
    a:{ilasova:'agree', demecko:'agree', akram:'agree', godus:'agree', uhrin:'agree'}
  },
  {
    t:'Infraštruktúra',
    q:'Má mesto každý rok zverejniť plán opráv ciest po jednotlivých uliciach?',
    w:'Verejný plán by ukázal, ktoré ulice sa majú opravovať, kedy a za koľko. Na konci roka by sa dalo jednoducho porovnať, čo mesto sľúbilo a čo skutočne opravilo.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'agree'}
  },
  {
    t:'Železnica',
    q:'Má primátor tlačiť na vládu, aby určila jasný termín modernizácie trate pri SNV?',
    w:'Modernizácia železničnej trate pri Spišskej Novej Vsi je jedna z najväčších dopravných tém regiónu. Ak sa termíny posúvajú, mesto môže prísť o kvalitné spojenie na roky. Primátor síce trať neriadi, ale môže vytvárať verejný tlak na vládu, ŽSR a dopravcov.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Železnica',
    q:'Má mesto žiadať náhradné vlakové riešenia počas veľkých výluk?',
    w:'Pri dlhých železničných výlukách môžu obyvatelia prísť o rýchle spojenie do Košíc, Popradu alebo Bratislavy. Náhradné autobusy pomáhajú, ale často sú pomalšie. Mesto nemá priamu kompetenciu nad vlakmi, no môže žiadať lepšie dočasné riešenia.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Práca a poriadok',
    q:'Má mesto pri dlhodobo nezamestnaných uprednostniť prácu pred pokutami?',
    w:'Pracovné programy môžu pomôcť ľuďom mimo trhu práce a zároveň zlepšiť údržbu mesta. Pokuty a kontroly sú rýchlejšie viditeľné, ale samy osebe neriešia nezamestnanosť ani chudobu.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'neutral', uhrin:'disagree'}
  },
  {
    t:'Práca a poriadok',
    q:'Má mesto vytvoriť pracovné tímy z dlhodobo nezamestnaných?',
    w:'Takéto tímy by mohli pomáhať s čistením, zeleňou a drobnou údržbou. Mesto by však muselo zabezpečiť vedenie, financovanie, pracovné návyky a kontrolu kvality.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'neutral', uhrin:'neutral'}
  },
  {
    t:'Sociálna pomoc',
    q:'Má mesto dávať prednosť pomoci všetkým chudobným pred projektmi pre konkrétne skupiny?',
    w:'Niektoré projekty cielia na konkrétne komunity, iné pomáhajú všetkým ľuďom v núdzi bez rozdielu. Univerzálna pomoc môže byť menej stigmatizujúca, cielené projekty zase vedia riešiť špecifické problémy.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'neutral', uhrin:'disagree'}
  },
  {
    t:'Bezpečnosť',
    q:'Má mesto posilniť mestskú políciu a kamerový systém?',
    w:'Viac hliadok a kamier môže zvýšiť pocit bezpečia v centre, parkoch aj na sídliskách. Zároveň ide o trvalé výdavky na ľudí, techniku, údržbu a prevádzku.',
    a:{ilasova:'neutral', demecko:'agree', akram:'neutral', godus:'neutral', uhrin:'agree'}
  },
  {
    t:'Bezpečnosť',
    q:'Má mesto posilniť hliadky v lokalitách s opakovanými problémami?',
    w:'Cielené hliadky môžu pomôcť tam, kde sa problémy opakujú. Na druhej strane môžu zvyšovať napätie, ak budú obyvatelia niektorých ulíc cítiť, že mesto ich označuje za problém.',
    a:{ilasova:'neutral', demecko:'agree', akram:'neutral', godus:'neutral', uhrin:'agree'}
  },
  {
    t:'Parkovanie',
    q:'Má mesto upraviť parkovanie v centre tak, aby sa tam ľahšie parkovalo rezidentom?',
    w:'Regulácia môže pomôcť ľuďom, ktorí v centre bývajú, a znížiť dlhodobé státie áut. Zároveň môže skomplikovať krátke návštevy úradov, obchodov a služieb, čo je v menšom meste citlivý kompromis.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'neutral'}
  },
  {
    t:'Doprava',
    q:'Má mesto uprednostniť peších a cyklistov pred autami v centre?',
    w:'Viac priestoru pre peších a cyklistov môže zlepšiť bezpečnosť a kvalitu centra. Zároveň to môže spomaliť prejazd autom a znížiť počet parkovacích miest.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto pri zákazkách uprednostniť kvalitu pred najnižšou cenou?',
    w:'Pri rozpočte takmer 60 miliónov eur a kapitálových výdavkoch nad 10 miliónov eur je dôležité, aby zákazky neboli hodnotené len podľa najnižšej ceny. Kvalita však môže znamenať vyššie počiatočné náklady.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Transparentnosť',
    q:'Má mesto zverejňovať ceny a meškania veľkých projektov?',
    w:'Pri kapitálových výdavkoch približne 10,3 milióna eur by obyvatelia mali vidieť pôvodný rozpočet, konečnú cenu, termín dokončenia a dôvody zmien. Takáto kontrola zvyšuje dôveru, ale môže byť politicky nepríjemná.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Participácia',
    q:'Majú obyvatelia rozhodovať o časti mestského rozpočtu?',
    w:'Aj 1 % z rozpočtu mesta na rok 2026 by bolo približne 600 000 eur. Participatívny rozpočet dáva ľuďom priamy vplyv na menšie projekty, no môže zvýhodniť populárne nápady pred menej viditeľnými opravami.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Participácia',
    q:'Má mesto konzultovať veľké plány s obyvateľmi ešte pred schválením?',
    w:'Skoré konzultácie môžu odhaliť problémy skôr, než je projekt hotový. Zároveň môžu rozhodovanie spomaliť a priniesť konflikt medzi odborným návrhom, politikmi a verejnosťou.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Kúpalisko',
    q:'Má kúpalisko zaviesť prísnejšie pravidlá a kapacitné limity?',
    w:'Letné kúpalisko je súčasťou mestského športového areálu STEZ, ktorý zahŕňa aj krytú plaváreň, športovú halu, saunu a ďalšie prevádzky. Prísnejšie pravidlá môžu zlepšiť poriadok a hygienu, ale obmedzia časť návštevníkov.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'agree'}
  },
  {
    t:'Kultúra',
    q:'Má mesto viac investovať do kultúry aj na úkor opráv?',
    w:'Kultúrne podujatia robia centrum živším a podporujú komunitný život. Ak však mesto zvýši výdavky na kultúru, môže mať menej peňazí na cesty, chodníky, sídliská alebo športoviská.',
    a:{ilasova:'disagree', demecko:'agree', akram:'agree', godus:'disagree', uhrin:'neutral'}
  },
  {
    t:'Turizmus',
    q:'Má mesto viac investovať do turizmu a Slovenského raja?',
    w:'Spišská Nová Ves sa prezentuje ako vstupná brána do Slovenského raja. Turizmus môže priniesť návštevníkov a príjmy pre služby, no časť obyvateľov môže uprednostniť peniaze na každodenné problémy v meste.',
    a:{ilasova:'disagree', demecko:'agree', akram:'neutral', godus:'disagree', uhrin:'neutral'}
  },
  {
    t:'ZOO a rodiny',
    q:'Má mesto viac investovať do ZOO a rodinného turizmu?',
    w:'ZOO, kúpalisko a športové areály sú viditeľné mestské atrakcie pre rodiny aj návštevníkov. Investície do nich môžu podporiť cestovný ruch, ale súťažia o peniaze s cestami, školami a sídliskami.',
    a:{ilasova:'neutral', demecko:'agree', akram:'neutral', godus:'neutral', uhrin:'neutral'}
  },
  {
    t:'Ekonomika',
    q:'Má mesto viac lákať investorov s vyššou pridanou hodnotou?',
    w:'Takíto investori môžu priniesť lepšie platené pracovné miesta a udržať mladých ľudí v regióne. Zároveň nemusia ponúkať dosť práce pre ľudí s nižšou kvalifikáciou alebo dlhodobo nezamestnaných.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Sociálne',
    q:'Má mesto dať viac peňazí na pracovné programy pre ľudí bez práce?',
    w:'Pracovné programy môžu pomôcť ľuďom získať návyky a príjem, zároveň môžu zlepšiť údržbu mesta. Vyžadujú však pravidelné financovanie a výsledky sa nemusia ukázať hneď.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'disagree'}
  },
  {
    t:'Sídliská',
    q:'Má ísť viac investícií do sídlisk ako do centra?',
    w:'Centrum prináša viditeľné mestské projekty a reprezentuje mesto navonok. Sídliská však riešia každodenné problémy s chodníkmi, parkovaním, zeleňou a ihriskami. Otázka je, kam má ísť väčšia časť nových investícií.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Financie',
    q:'Má sa mesto zadlžiť, aby rýchlejšie opravilo cesty a spustilo projekty?',
    w:'Rozpočet na rok 2026 počíta s celkovým objemom takmer 60 miliónov eur a kapitálovými výdavkami okolo 10,3 milióna eur. Úver môže urýchliť opravy a projekty, ale zvýši záväzky mesta na ďalšie roky.',
    a:{ilasova:'neutral', demecko:'agree', akram:'neutral', godus:'disagree', uhrin:'disagree'}
  },
  {
    t:'Financie',
    q:'Má mesto znížiť poplatok za odpad pre seniorov a nízkopríjmové rodiny?',
    w:'Znížený poplatok môže pomôcť ľuďom s nižšími príjmami, najmä seniorom a rodinám. Pre mesto by to však znamenalo nižšie príjmy alebo potrebu presunúť náklady na iných obyvateľov.',
    a:{ilasova:'agree', demecko:'disagree', akram:'agree', godus:'agree', uhrin:'neutral'}
  },
  {
    t:'Mestský podnik',
    q:'Má mesto viac využívať MEPOS namiesto súkromných firiem?',
    w:'Mestský podnik môže lepšie reagovať na lokálne potreby a dávať mestu väčšiu kontrolu nad údržbou. Súkromné firmy môžu byť rýchlejšie alebo lacnejšie, ale mesto má nad nimi menšiu priamu kontrolu.',
    a:{ilasova:'agree', demecko:'neutral', akram:'agree', godus:'neutral', uhrin:'neutral'}
  }
];
