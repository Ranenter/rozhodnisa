// ══ DATA: TRNAVA ══
window.VAA_DATA = window.VAA_DATA || {};

// ── Kandidáti ──
window.VAA_DATA.candidates = window.VAA_DATA.candidates || {};
window.VAA_DATA.questions = window.VAA_DATA.questions || {};

// ── Kandidáti: Primátor Trnavy ──
window.VAA_DATA.candidates['trnava_primator'] = [
  {
    id: "nemcovska",
    name: "Eva Nemčovská",
    party: "Nezávislá / Lepšia Trnava",
    color: "#4caf50",
    url: "https://evanemcovska.sk/"
  },
  {
    id: "baros",
    name: "Branislav Baroš",
    party: "Trnava pre každého / KDH",
    color: "#2196F3",
    url: "https://trnavaprekazdeho.sk/brano-baros-trnava/"
  },
  {
    id: "horvathova",
    name: "Ľubica Horváthová",
    party: "Demokrati",
    color: "#fbc02d",
    url: "https://lubicahorvathova.sk/"
  },
  {
    id: "cajkova",
    name: "Andrea Čajková",
    party: "Trnava+",
    color: "#e91e63",
    url: "https://www.trnavaplus.sk/andrea-cajkova"
  }
];

// ── Kandidáti: Župan / VÚC Trnavský kraj ──
window.VAA_DATA.candidates['trnava_vuc'] = [
  {
    id: "viskupic",
    name: "Jozef Viskupič",
    party: "PS / Demokrati / Hnutie Slovensko / SaS / KDH / Maďarské fórum / OKS (úradujúci predseda)",
    color: "#64b5f6",
    url: "https://trnavskyzupan.sk"
  },
  {
    id: "lancaric",
    name: "Matej Lančarič",
    party: "Nezávislý – Za lepší Trnavský kraj",
    color: "#455A64",
    url: "https://matejlancaric.sk"
  },
  {
    id: "berenyi",
    name: "József Berényi",
    party: "Maďarská aliancia",
    color: "#1A6B8A",
    url: "https://madarska-aliancia.sk/jozsef-berenyi"
  },
  {
    id: "dohal",
    name: "Robert Dohál",
    party: "Nezávislý",
    color: "#2E7D32",
    url: ""
  },
  {
    id: "hambalek",
    name: "Peter Hambálek",
    party: "Smer-SD / Hlas-SD / SNS / Republika",
    color: "#C62828",
    url: ""
  }
];

// ── Otázky: Primátor Trnavy ──
window.VAA_DATA.questions.trnava_primator = [
  {
    t: "Smerovanie mesta",
    q: "Má Trnava pokračovať v doterajšom investičnom smerovaní mesta z posledných rokov?",
    w: "Mesto hospodári s rozpočtom okolo 114 miliónov eur ročne a jeho zadlženosť sa pohybuje okolo 28 %. Voľby rozhodnú, či nové vedenie udrží doterajší kurz veľkých obnov verejných priestorov, alebo priority výraznejšie prestaví — napríklad na drobné opravy a sídliská. Väčšia zmena smeru však môže spomaliť už rozbehnuté projekty.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "disagree",
      cajkova: "neutral"
    }
  },
  {
    t: "Bývanie",
    q: "Má Trnava stavať mestské nájomné byty aj za cenu zadlženia?",
    w: "Trnava má viac než 62 700 obyvateľov a bývanie je pre mnohé mladé rodiny drahé. Mestské nájomné byty by mohli pomôcť ľuďom zostať v meste, ale znamenali by úver alebo presun peňazí z iných projektov.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Má Trnava pokračovať v regulovanom platenom parkovaní vo väčšine mesta?",
    w: "Trnava má platené parkovanie rozdelené do 5 pásiem s rôznymi pravidlami a sadzbami. Proti súčasnej parkovacej politike vznikla petícia s viac než 19 000 podpismi, čo ukazuje, že ide o jednu z najspornejších tém v meste.",
    a: {
      nemcovska: "agree",
      baros: "neutral",
      horvathova: "disagree",
      cajkova: "neutral"
    }
  },
  {
    t: "Pešia zóna",
    q: "Má sa Štefánikova ulica zmeniť na pešiu zónu?",
    w: "Mesto pripravuje obnovu Štefánikovej ulice ako súčasť rozširovania pešieho charakteru historického centra. Projekt by zlepšil verejný priestor, ale zároveň by obmedzil prejazd áut, parkovanie a prístup pre časť prevádzok.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Študentské bývanie",
    q: "Má mesto financovať nové študentské bývanie aj za cenu menších investícií do športovísk?",
    w: "Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Dostupnejšie študentské bývanie môže pomôcť univerzitám aj mestskému životu, ale mestský rozpočet by potom mal menej peňazí na športoviská, ihriská a voľnočasovú infraštruktúru využívanú širšou verejnosťou.",
    a: {
      nemcovska: "disagree",
      baros: "neutral",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava",
    q: "Má Trnava ďalej budovať cyklotrasy aj na úkor áut a parkovania?",
    w: "Mesto uvádza cieľ vybudovať ucelenú sieť cyklotrás v rozsahu takmer 120 kilometrov. Cyklotrasy zlepšujú dopravu na bicykli, ale v uliciach často súťažia o priestor s parkovaním, autami a jazdnými pruhmi.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Participácia",
    q: "Majú mať obyvatelia dotknutej lokality právo zastaviť veľký mestský projekt, ak sa proti nemu postaví ich väčšina (napríklad v miestnom referende)?",
    w: "Trnava nemá samostatné mestské časti s vlastnými zastupiteľstvami; vôľu obyvateľov jednej lokality možno zistiť petíciou alebo miestnym referendom — ukázala to aj parkovacia petícia s vyše 19 000 podpismi, ktorá vyústila do referenda. Právo miestnej väčšiny zastaviť projekt by posilnilo ich vplyv, mohlo by však blokovať investície dôležité pre celé mesto a predĺžiť prípravu.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Majú mať rezidenti parkovanie vo svojej zóne zadarmo?",
    w: "Trnava má viac než 62 700 obyvateľov s trvalým pobytom. Rezidentské parkovanie sa týka veľkej časti domácností, najmä v hustejších zónach. Bezplatné parkovanie by pomohlo rezidentom, ale znížilo by príjmy mesta.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "agree",
      cajkova: "neutral"
    }
  },
  {
    t: "Školy",
    q: "Majú mať školy a škôlky prednosť pred veľkými projektmi v centre?",
    w: "Mesto Trnava zriaďuje 9 základných škôl a rieši aj spádové oblasti materských škôl. Investície do škôl a škôlok sa týkajú každodenného života rodín, ale súťažia o peniaze s obnovou ulíc, parkov a verejných priestorov.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Verejné priestory",
    q: "Má Trnava pokračovať vo veľkých obnovách parkov, námestí a ulíc?",
    w: "Mesto uvádza pripravované projekty za viac než 80 miliónov eur. Veľké obnovy môžu zlepšiť kvalitu života a vzhľad mesta, ale časť obyvateľov môže uprednostniť menšie opravy chodníkov, ciest, škôl alebo sídlisk.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Verejné priestory",
    q: "Má mesto udržať nízky poplatok za odpad, aj keď jeho zber a spracovanie stoja viac, než sa na poplatku vyberie?",
    w: "Trnavčania platia za komunálny odpad 38,33 € ročne — najnižší poplatok spomedzi všetkých krajských miest — a mesto vytriedi približne 49 % odpadu. Náklady na zber a spracovanie (okolo 4,65 milióna eur) však prevyšujú príjem z poplatku, rozdiel dopláca mesto z rozpočtu. Vyšší poplatok by pokryl reálne náklady a motivoval k triedeniu, no zaťažil by domácnosti.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "neutral",
      cajkova: "disagree"
    }
  },
  {
    t: "Kultúra",
    q: "Má mať kultúra garantovaných minimálne 2 % mestského rozpočtu?",
    w: "Pevná minimálna hranica by kultúrnym inštitúciám a podujatiam umožnila plánovať niekoľko rokov dopredu. Pri rozpočte mesta okolo 114 miliónov eur by 2 % predstavovali približne 2,3 milióna eur ročne, ktoré by nemohli byť použité na školy, cesty, sociálne služby alebo iné aktuálne priority.",
    a: {
      nemcovska: "agree",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Zeleň",
    q: "Má mesto ďalej investovať do fotovoltiky a energetických úspor na mestských budovách, aj keď sa vložené peniaze vrátia až po rokoch?",
    w: "Mesto má fotovoltické panely na všetkých základných školách a ďalších budovách a zaviedlo energetický manažment na sledovanie spotreby. Ďalšie investície do obnoviteľných zdrojov a zatepľovania znižujú účty za energie aj emisie, ich návratnosť je však dlhá a peniaze medzitým chýbajú pri rýchlejšie viditeľných projektoch.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "neutral",
      cajkova: "agree"
    }
  },
  {
    t: "Zeleň",
    q: "Majú pri rekonštrukciách ulíc pribúdať stromy aj na úkor parkovania?",
    w: "Mesto každoročne vysádza nové stromy, no výsadbu často limitujú siete, doprava a šírka ulíc. Viac stromov a tieňa pomáha počas horúčav, ale v úzkych uliciach môže znamenať menej parkovacích miest.",
    a: {
      nemcovska: "neutral",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Priemysel a bývanie",
    q: "Má mesto uprednostniť kvalitu bývania pred ďalším rozširovaním priemyslu, aj keď priemysel prináša pracovné miesta a príjmy?",
    w: "Stellantis je jeden z najväčších zamestnávateľov v meste a priemysel prináša pracovné miesta aj príjmy. Zároveň však zvyšuje dopravu, tlak na bývanie a zaťaženie okrajových častí mesta.",
    a: {
      nemcovska: "neutral",
      baros: "disagree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Kontrola investícií",
    q: "Má zastupiteľstvo schvaľovať každé navýšenie ceny veľkého projektu nad 10 %?",
    w: "Pri veľkých mestských projektoch môžu dodatky a nepredvídané práce zvýšiť konečnú cenu. Povinné nové schválenie zastupiteľstvom pri navýšení nad 10 % by posilnilo verejnú kontrolu, ale mohlo by spomaliť práce a zvýšiť riziko ďalších nákladov pri čakaní na rozhodnutie.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Parkovanie",
    q: "Má ísť väčšina výnosov z parkovania späť do dopravy a parkovania?",
    w: "Parkovanie prináša mestu miliónové príjmy. Peniaze môžu ísť na parkovacie kapacity, MHD, bezpečnejšie ulice alebo iné mestské výdavky. Otázka je, či majú byť viazané hlavne na dopravné riešenia.",
    a: {
      nemcovska: "disagree",
      baros: "agree",
      horvathova: "agree",
      cajkova: "neutral"
    }
  },
  {
    t: "Bývanie",
    q: "Má mesto obmedziť krátkodobé prenájmy bytov v obytných domoch?",
    w: "Trnava je turistické a univerzitné mesto. Trnavská univerzita uvádza priemer viac než 5 200 študentov v rokoch 2019 až 2024. Krátkodobé prenájmy môžu pomôcť turizmu, ale môžu znižovať počet bytov na bežné bývanie.",
    a: {
      nemcovska: "neutral",
      baros: "neutral",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Nočný život",
    q: "Má mesto viac podporovať večerný život v centre?",
    w: "Región Trnava zaznamenal za prvých sedem mesiacov roka viac než 37 800 návštevníkov a viac než 80 000 prenocovaní. Živé centrum môže pomôcť podnikom, kultúre a turizmu, ale môže priniesť viac hluku pre obyvateľov centra.",
    a: {
      nemcovska: "agree",
      baros: "agree",
      horvathova: "neutral",
      cajkova: "neutral"
    }
  },
  {
    t: "Sídliská vs. centrum",
    q: "Má ísť viac investícií zo centra do sídlisk a okrajových častí?",
    w: "Trnava pripravuje projekty za viac než 80 miliónov eur. Časť obyvateľov očakáva veľké mestské projekty v centre, iní chcú viac peňazí na vnútrobloky, chodníky, ihriská a každodenné problémy na sídliskách.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava",
    q: "Má Trnava ďalej budovať vyvýšené priechody a spomaľovacie prvky?",
    w: "Vyvýšené priechody, prahy a upravené križovatky môžu zvýšiť bezpečnosť chodcov. Niektorí vodiči ich však vnímajú ako zhoršenie plynulosti jazdy, vyšší hluk a vyššiu spotrebu.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Doprava a zamestnávatelia",
    q: "Majú veľkí zamestnávatelia prispievať na dopravné riešenia v meste?",
    w: "Automobilka Stellantis Slovakia sídli priamo v Trnave na Automobilovej ulici. Podľa dostupných údajov vytvára približne 3 700 priamych pracovných miest a ďalšie pracovné miesta u dodávateľov. Dochádzanie zamestnancov ovplyvňuje dopravu v meste.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Transparentnosť",
    q: "Má mesto vo verejných súťažiach hodnotiť aj kvalitu a životnosť, aj keď to zvýši počiatočnú cenu a riziko odvolaní neúspešných uchádzačov?",
    w: "Mesto ročne obstaráva stavby a služby za desiatky miliónov eur. Kritérium najnižšej ceny je jednoduché a ťažšie napadnuteľné, no môže viesť k vyšším nákladom na údržbu a kratšej životnosti. Zohľadnenie kvality a životnosti môže priniesť trvácnejší výsledok, zvyšuje však počiatočnú cenu aj priestor na odvolania, ktoré súťaž predlžujú.",
    a: {
      nemcovska: "neutral",
      baros: "agree",
      horvathova: "agree",
      cajkova: "agree"
    }
  },
  {
    t: "Verejné priestory",
    q: "Má mesto prednostne dofinancovať mestskú políciu a doplniť chýbajúcich príslušníkov, aj keď to znamená menej peňazí na iné služby?",
    w: "Organizačný poriadok mestskej polície ráta so 48 príslušníkmi pre nepretržitú službu a 26 pre parkovaciu, tieto stavy sa však dlhodobo nedarí naplniť — noví policajti len nahrádzajú odchody do dôchodku. Posilnenie hliadok by zvýšilo bezpečnosť a poriadok, znamenalo by však vyššie mzdové náklady na úkor iných priorít mesta.",
    a: {
      nemcovska: "agree",
      baros: "agree",
      horvathova: "neutral",
      cajkova: "disagree"
    }
  },
  {
    t: "Bývanie",
    q: "Má mesto rozšíriť kapacity zariadení a opatrovateľskej služby pre seniorov, aj za cenu vyšších prevádzkových nákladov?",
    w: "Mestské Zariadenie pre seniorov má kapacitu 130 miest a dve zariadenia opatrovateľskej služby ďalšie desiatky; záujem prevyšuje ponuku a mesto vedie poradovník čakateľov. Rozšírenie kapacít a domácej opatrovateľskej služby by pomohlo starnúcemu obyvateľstvu zostať v meste, znamenalo by však trvalé prevádzkové náklady konkurujúce iným výdavkom.",
    a: {
      nemcovska: "agree",
      baros: "disagree",
      horvathova: "agree",
      cajkova: "neutral"
    }
  }
];

// ── Otázky: Župan / VÚC Trnavský kraj ──
window.VAA_DATA.questions.trnava_vuc = [
  {
    t: "Smerovanie kraja",
    q: "Má kraj pokračovať v rozbehnutom investičnom programe (zdravotnícke centrá, nová knižnica, cyklotrasy) namiesto toho, aby priority prestavil na cesty, mosty a školy?",
    w: "Rozpočet kraja na rok 2026 má príjmy aj výdavky 320 miliónov eur, z toho 84 miliónov eur tvoria kapitálové výdavky. Kraj ich smeruje najmä do zdravotníckych a sociálnych zariadení, novej knižnice v Galante a cyklotrás. Kritici tvrdia, že prednosť majú mať opravy ciest, mostov a stredných škôl. Voľby rozhodnú aj o tom, či sa doterajší smer udrží, alebo sa priority výrazne prestavia.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "disagree", dohal: "neutral", hambalek: "disagree" }
  },
  {
    t: "Obchvaty",
    q: "Má kraj platiť z vlastného rozpočtu projektovú prípravu a výkup pozemkov pre obchvaty, ktoré má stavať štát?",
    w: "Obchvaty a cesty I. triedy patria štátu, ich príprava však roky viazne, napríklad pri Trnave. Kraj môže z vlastných peňazí zaplatiť projektovú dokumentáciu a výkup pozemkov, aby sa stavba pohla dopredu. Znamená to však, že kraj platí za úlohu štátu a menej mu zostane na cesty II. a III. triedy, ktoré sám vlastní.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "neutral", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Zdravotníctvo",
    q: "Má kraj dokončiť zdravotnícky kampus v Trnave, aj keď sa tým odložia zdravotnícke centrá a ambulancie v okresoch?",
    w: "Kraj pripravuje zdravotnícky kampus v Trnave a súčasne nové zdravotnícke centrum v Hlohovci. Kapitálové výdavky rozpočtu 2026 sú 84 miliónov eur a nedajú sa minúť dvakrát. Otázka je, či má prednosť veľký projekt v krajskom meste, alebo rozdrobenie peňazí do menších okresov, kde chýbajú lekári.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "disagree", dohal: "disagree", hambalek: "disagree" }
  },
  {
    t: "Veterné parky",
    q: "Má kraj podporiť veterné parky v štátom vytypovaných akceleračných zónach, ak s tým dotknuté obce súhlasia?",
    w: "Ministerstvo hospodárstva vytypovalo osem akceleračných zón pre veternú energiu, štyri z nich ležia v Trnavskom kraji: Prietržka – Sobotište, Gbely – Štefanov, Vrakúň – Dolný Štál a Okoč – Zemianska Olča. Vedenie kraja kritizovalo spôsob ich určenia a poukázalo na možný zásah do zdroja pitnej vody a chránených území. Zástancovia hovoria o čistej elektrine, energetickej bezpečnosti a príjmoch pre obce, odporcovia o zásahu do krajiny a tlaku na obyvateľov.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "disagree", dohal: "neutral", hambalek: "disagree" }
  },
  {
    t: "Sieť stredných škôl",
    q: "Má kraj rušiť odbory a triedy s dlhodobo nízkym záujmom, aj keď to zúži ponuku vzdelávania v menších mestách?",
    w: "Kraj je zriaďovateľom 44 stredných škôl, do ktorých chodí viac než 16-tisíc študentov. Počet žiakov klesá, prevádzka poloprázdnych tried však beží ďalej a berie peniaze z rovnakého balíka ako opravy školských budov a internátov. Zúženie siete znižuje náklady, ale v menších mestách obmedzuje výber školy blízko domova.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree", dohal: "disagree", hambalek: "disagree" }
  },
  {
    t: "Záchytné parkoviská",
    q: "Má kraj z vlastných peňazí stavať a prevádzkovať bezplatné záchytné parkoviská v Trnave a okresných mestách?",
    w: "V kampani zaznel sľub tisícky nových bezplatných parkovacích miest v Trnave a stoviek v každom okresnom meste. Záchytné parkoviská pomáhajú dochádzajúcim prestúpiť na vlak či autobus, ich výstavba a prevádzka by však išla z krajského rozpočtu — hoci pozemky a parkovaciu politiku majú v rukách mestá.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "neutral", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Žitný ostrov",
    q: "Má kraj v územnom pláne zablokovať nové priemyselné a logistické areály nad Žitným ostrovom, aj keď obce prídu o dane a pracovné miesta?",
    w: "Žitný ostrov je najväčšou zásobárňou podzemnej pitnej vody na Slovensku a leží celý v Trnavskom kraji. Záväzná časť územného plánu VÚC je nástroj, ktorým môže kraj takúto výstavbu obmedziť. Obce v okrese Dunajská Streda však o priemyselné zóny stoja pre dane a pracovné miesta.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree", dohal: "agree", hambalek: "disagree" }
  },
  {
    t: "Doprava pre študentov",
    q: "Má kraj zaviesť bezplatné prímestské autobusy pre študentov stredných škôl?",
    w: "Kraj objednáva prímestskú autobusovú dopravu a v rozpočte 2026 na ňu vyčlenil 28,3 milióna eur. Bezplatné cestovanie pre stredoškolákov by odbremenilo rodiny a podporilo dochádzanie do župných škôl, znamenalo by však ďalšie milióny eur ročne navyše — pri vyrovnanom rozpočte na úkor niečoho iného.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "disagree", dohal: "agree", hambalek: "agree" }
  },
  {
    t: "Tlmočnícke služby",
    q: "Má kraj zvýšiť platby za tlmočnícke služby pre nepočujúcich, aj keď už dnes financuje najväčší rozsah pomoci zo všetkých krajov?",
    w: "Kraj si v roku 2025 objednal viac než 14-tisíc hodín tlmočenia pre nepočujúcich, čo je najviac spomedzi všetkých krajov; 87 % z toho zabezpečuje asociácia TASPO. Tá koncom roka 2025 protestovala proti výške financovania, kraj odpovedal, že platí najväčší rozsah v najvyššej sadzbe a ponúkol rokovanie. Otázka je, či má kraj pridať ďalšie peniaze, alebo trvať na súčasnom rozsahu.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "agree", dohal: "agree", hambalek: "neutral" }
  },
  {
    t: "Letisko Piešťany",
    q: "Má kraj naďalej dotovať Letisko Piešťany a investovať doň krajské peniaze?",
    w: "Kraj je najväčším akcionárom Letiska Piešťany, ktoré má za sebou roky strát a v minulosti mu hrozila likvidácia. V rozpočte na rok 2026 kraj počíta aj s výstavbou integrovaného parkoviska pri letisku. Zástancovia hovoria o regionálnom rozvoji a cestovnom ruchu, odporcovia o dotovaní prevádzky, ktorú využíva zlomok obyvateľov.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "neutral", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Okresné nemocnice",
    q: "Má kraj prevziať a dofinancovať okresnú nemocnicu, ak by jej prevádzkovateľ obmedzil akútnu starostlivosť?",
    w: "Nemocnice v Dunajskej Strede, Galante, Skalici, Senici či Piešťanoch neprevádzkuje kraj, ale štát alebo súkromní prevádzkovatelia. Pre obyvateľov južných a záhorských okresov je dostupnosť nemocnice otázkou času dojazdu. Prevzatie nemocnice by kraju prinieslo trvalý náklad v desiatkach miliónov eur — a zodpovednosť, ktorú dnes nemá.",
    a: { viskupic: "neutral", lancaric: "disagree", berenyi: "agree", dohal: "agree", hambalek: "agree" }
  },
  {
    t: "Cyklotrasy",
    q: "Má kraj pokračovať v investíciách do cyklomagistrály a cyklotrás, aj keď tie isté peniaze chýbajú na opravy ciest III. triedy?",
    w: "Kraj stavia úsek Vážskej cyklomagistrály Siladice – Šulekovo a pokračuje v projekte Danube Bike. Do cestnej siete a cyklodopravy má v roku 2026 ísť spolu takmer 30,5 milióna eur. Cyklotrasy pomáhajú dochádzaniu aj turizmu, časť voličov ich však považuje za menej naliehavé než rozbité cesty tretej triedy.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree", dohal: "disagree", hambalek: "disagree" }
  },
  {
    t: "Skládka v Seredi",
    q: "Má kraj cez svoj územný plán zablokovať nové odpadové a priemyselné prevádzky v okolí Serede a Dolnej Stredy, kým sa nezačne sanácia skládky?",
    w: "Po Niklovej hute Sereď (výroba 1963 – 1994) zostala medzi Sereďou a Dolnou Stredou skládka lúženca, približne 6 miliónov ton odpadu s ťažkými kovmi, miestami vysoká desiatky metrov. Sanácia je vecou štátu a súkromného vlastníka a roky sa nepohla; obyvatelia žiadali riešenie aj petíciou. Kraj skládku sanovať nemôže, má však v rukách záväznú časť územného plánu — môže v okolí obmedziť ďalšie odpadové a priemyselné prevádzky, čím by však zablokoval aj investície a pracovné miesta.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "disagree", dohal: "agree", hambalek: "disagree" }
  },
  {
    t: "Jazyk menšín",
    q: "Majú krajské školy, sociálne zariadenia a úrad kraja povinne poskytovať služby a dokumenty aj v maďarčine v okresoch s maďarskou menšinou?",
    w: "V okresoch Dunajská Streda a Galanta žije početná maďarská menšina a kraj je zriaďovateľom tamojších stredných škôl, domovov sociálnych služieb aj kultúrnych inštitúcií. Povinná dvojjazyčnosť by uľahčila prístup k službám, znamenala by však náklady na preklady, tlmočenie a personál — a časť voličov ju vníma ako zbytočnú alebo politickú tému.",
    a: { viskupic: "neutral", lancaric: "disagree", berenyi: "agree", dohal: "neutral", hambalek: "disagree" }
  },
  {
    t: "Daň z vozidiel",
    q: "Má kraj znížiť daň z motorových vozidiel pre dopravcov a firmy, aj keď tým príde o príjmy na opravy ciest?",
    w: "Daň z motorových vozidiel je vlastnou daňou samosprávneho kraja a jej sadzby schvaľuje krajské zastupiteľstvo. Nižšia daň by pomohla dopravcom a firmám v regióne, ktorý je silne priemyselný a logistický. Kraj má však v roku 2026 na opravy ciest a mostov 31 miliónov eur a výpadok príjmu by musel niečím nahradiť.",
    a: { viskupic: "disagree", lancaric: "neutral", berenyi: "agree", dohal: "disagree", hambalek: "neutral" }
  },
  {
    t: "Jadro v Bohuniciach",
    q: "Má sa kraj postaviť za výstavbu nového jadrového bloku v Jaslovských Bohuniciach?",
    w: "Areál atómových elektrární v Jaslovských Bohuniciach leží v Trnavskom kraji. Vláda pripravuje výstavbu nového bloku s výkonom nad 1000 MW a odhadovanými nákladmi okolo 15 miliárd eur. Zástancovia hovoria o energetickej bezpečnosti a pracovných miestach v regióne, odporcovia o cene, jadrovom odpade a dopade na podzemné vody.",
    a: { viskupic: "neutral", lancaric: "agree", berenyi: "agree", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Stratové spoje",
    q: "Má kraj zrušiť autobusové spoje s trvalo nízkou obsadenosťou, aj keď niektoré obce zostanú úplne bez verejného spojenia?",
    w: "Kraj objednáva prímestskú autobusovú dopravu za 28,3 milióna eur ročne. Časť spojov vozí denne len jednotky cestujúcich, inde autobusy v špičke nestíhajú. Zrušenie málo využívaných spojov uvoľní peniaze na posilnenie vyťažených liniek, no obce, ktoré o spoje prídu, môžu zostať bez verejnej dopravy — najmä pre seniorov a študentov bez auta.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "disagree", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Solárne parky",
    q: "Má kraj cez svoj územný plán obmedziť veľké solárne parky na najkvalitnejšej poľnohospodárskej pôde, aj keď tým obce a vlastníci prídu o príjmy z prenájmu?",
    w: "Trnavský kraj má najúrodnejšiu pôdu na Slovensku hneď po Nitrianskom — poľnohospodárska pôda tvorí vyše 70 % jeho rozlohy. Solárne parky prinášajú čistú elektrinu a vlastníkom pôdy nájom, zaberajú však ornú pôdu na desaťročia. Kraj môže cez záväznú časť územného plánu ich umiestňovanie na najbonitnejšej pôde obmedziť — tým však zníži príjmy obcí aj vlastníkov a spomalí rozvoj obnoviteľných zdrojov.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "agree", dohal: "neutral", hambalek: "disagree" }
  },
  {
    t: "Dochádzanie do Bratislavy",
    q: "Má kraj prednostne tlačiť na integráciu s bratislavským dopravným systémom (jeden lístok na vlak, autobus a MHD v Bratislave), aj keď to znamená menej peňazí na spoje vnútri kraja?",
    w: "Veľká časť kraja dochádza za prácou a školou do Bratislavy. Systém, ktorý to pokrýva, je bratislavský (IDS BK) a objednáva ho štát, Bratislavský kraj a mesto Bratislava a už dnes doň patria napríklad Kúty, Sládkovičovo, Pusté Úľany či Galanta. Rozšírenie na celý Trnavský kraj by dochádzajúcim dalo jeden lístok na vlak, prímestský autobus aj MHD, kraj by však musel prispievať do systému, ktorý neriadi, a menej by zostalo na spojenia medzi okresmi.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree", dohal: "disagree", hambalek: "neutral" }
  },
  {
    t: "Úver a dlh",
    q: "Má kraj zobrať ďalší úver na zrýchlenie opráv mostov a škôl, keď je jeho zadlženosť už okolo 30 %?",
    w: "Zadlženosť kraja sa ku koncu roka 2025 očakávala na úrovni 29,8 %. Schodok kapitálového rozpočtu 2026 je krytý aj úverovými zdrojmi a peňažnými fondmi. Ďalší úver by zrýchlil opravy mostov, škôl a sociálnych zariadení, ale zúžil by priestor rozpočtu v ďalších rokoch.",
    a: { viskupic: "agree", lancaric: "neutral", berenyi: "disagree", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Dotácie a granty",
    q: "Má kraj zrušiť dotačné schémy a participatívny rozpočet a tieto peniaze presunúť na cesty a mosty?",
    w: "Kraj rozdeľuje peniaze cez dotačné schémy pre obce, kultúru a šport a cez participatívny rozpočet Tvoríme kraj, o ktorom hlasujú obyvatelia. Tieto výdavky sú v obciach viditeľné, tvoria však zlomok rozpočtu popri 31 miliónoch eur na cesty a mosty. Otázka je, či ich v úsporných časoch škrtnúť, alebo brániť.",
    a: { viskupic: "disagree", lancaric: "disagree", berenyi: "agree", dohal: "disagree", hambalek: "agree" }
  },
  {
    t: "Trnava verzus okresy",
    q: "Má kraj rozdeľovať investície do ciest a škôl podľa počtu obyvateľov okresov, aj keď to spomalí veľké projekty v krajskom meste?",
    w: "Kraj tvorí sedem okresov: Trnava, Dunajská Streda, Galanta, Hlohovec, Piešťany, Senica a Skalica. Veľké projekty v Trnave môžu slúžiť celému regiónu, ale ich financovanie odsúva opravy ciest a škôl inde. Pevný kľúč podľa počtu obyvateľov by rozdelenie spravil predvídateľným, zároveň by však znemožnil sústrediť peniaze na jednu veľkú investíciu.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "agree", dohal: "agree", hambalek: "agree" }
  },
  {
    t: "Spaľovňa odpadu",
    q: "Má kraj podporiť výstavbu regionálnej spaľovne odpadu s výrobou energie namiesto ďalšieho skládkovania, aj proti odporu okolitých obcí?",
    w: "Väčšina komunálneho odpadu v kraji dnes končí na skládkach, ktorých kapacity sa napĺňajú, a od roku 2035 musí Slovensko skládkovať najviac 10 % odpadu. Súkromní investori pripravujú v kraji zariadenia na energetické zhodnocovanie odpadu — pri Malženiciach (pôvodne pri Zavare) s kapacitou okolo 130-tisíc ton ročne a ďalšie pri Skalici — proti obom vznikli petície obyvateľov. Kraj ich môže cez územný plán a politickú podporu umožniť, alebo sa postaviť na stranu dotknutých obcí.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "disagree", dohal: "agree", hambalek: "agree" }
  },
  {
    t: "Vedenie župných organizácií",
    q: "Majú sa riaditelia župných škôl, sociálnych zariadení a kultúrnych inštitúcií vyberať výlučne otvoreným výberovým konaním s verejným vypočutím, bez straníckych nominácií?",
    w: "Kraj obsadzuje vedenie desiatok stredných škôl, domovov sociálnych služieb, galérií, knižníc a krajských podnikov. Otvorené výberové konania s verejným vypočutím by obmedzili politické nominácie, znížili by však možnosť župana rýchlo vymeniť ľudí, ktorí neplnia výsledky.",
    a: { viskupic: "disagree", lancaric: "agree", berenyi: "neutral", dohal: "agree", hambalek: "disagree" }
  },
  {
    t: "Vzťah k vláde",
    q: "Má predseda kraja verejne konfrontovať vládu, keď jej rozhodnutia poškodzujú kraj a hrozí, že kraj príde o štátne a európske peniaze?",
    w: "Kraj závisí od podielových daní a od štátnych rozhodnutí v doprave, školstve, zdravotníctve aj energetike. Ostrý verejný spor môže obhájiť záujmy kraja, ale aj skomplikovať prístup k dotáciám a spoluprácu na spoločných projektoch. Otázka je, či má župan tlačiť verejne, alebo vyjednávať potichu.",
    a: { viskupic: "agree", lancaric: "disagree", berenyi: "neutral", dohal: "agree", hambalek: "disagree" }
  }
];
