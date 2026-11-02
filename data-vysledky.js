// ══ VÝSLEDKY VOLIEB 2026 ══
// Výsledky primátorov, predsedov krajov a starostov 4 mestských častí (voľby 24. 10. 2026).
// Zdroj čísel: Štatistický úrad SR, prevzaté z článkov uvedených pri každej voľbe (zdroje).
// Kraje: ostatní kandidáti sú zlúčení do riadku "ostatni".
// metriky = rozpočty, dlh a počet poslancov, ktoré stránka už mala pred voľbami (kandidati.html).
// Sľuby na sledovanie sú v súbore data/data-sluby.js.
window.VYSLEDKY = {
  aktualizovane: '2026-11-02',
  volby: []
};
window.VYSLEDKY.volby = [
 {
  "key": "bratislava_primator",
  "nazov": "Bratislava",
  "typ": "primator",
  "mesto": "bratislava",
  "ucast": 47.4,
  "volici": 196611,
  "zapisani": 415017,
  "kandidati": [
   {
    "meno": "Matúš Vallo",
    "hlasy": 121846,
    "pct": 64.36
   },
   {
    "meno": "Jozef Ráž",
    "hlasy": 61183,
    "pct": 32.32
   },
   {
    "meno": "Zuzana Šubová",
    "hlasy": 3451,
    "pct": 1.82
   },
   {
    "meno": "Ľubomír Geci",
    "hlasy": 1502,
    "pct": 0.79
   }
  ],
  "vitaz": {
   "meno": "Matúš Vallo",
   "rod": "m",
   "overene": false,
   "strana": "Team Bratislava / PS / SaS / Demokrati",
   "foto": "/assets/candidates/bratislava-vallo.webp"
  },
  "ostatni": {
   "pocet": 2,
   "hlasy": 1312,
   "pct": 0.69,
   "odstupeni": true
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/obec/582000/bratislava"
   },
   {
    "nazov": "Topky",
    "url": "https://www.topky.sk/cl/2005799/9524409/Komunalne-volby-2026---Bratislava--kandidati-na-primatora--poslanci-a-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 761,
   "rozNa": 1601,
   "dlh": 46,
   "odhad": false,
   "zdroj": "Schválený rozpočet HM SR Bratislavy 2026",
   "poslanci": 45,
   "poslanciOdhad": false
  }
 },
 {
  "key": "kosice_primator",
  "nazov": "Košice",
  "typ": "primator",
  "mesto": "kosice",
  "ucast": 37.11,
  "kandidati": [
   {
    "meno": "Ladislav Lörinc",
    "hlasy": 27364,
    "pct": 39.89
   },
   {
    "meno": "Jaroslav Polaček",
    "hlasy": 14766,
    "pct": 21.52
   },
   {
    "meno": "Martin Mudrák",
    "hlasy": 12816,
    "pct": 18.68
   },
   {
    "meno": "Lenka Kovačevičová",
    "hlasy": 8513,
    "pct": 12.41
   },
   {
    "meno": "Alexander Riabov",
    "hlasy": 3177,
    "pct": 4.63
   },
   {
    "meno": "Ladislav Lőrincz",
    "hlasy": 1397,
    "pct": 2.03
   },
   {
    "meno": "Miroslav Sabol",
    "hlasy": 378,
    "pct": 0.55
   },
   {
    "meno": "Alexander Székely",
    "hlasy": 181,
    "pct": 0.26
   }
  ],
  "vitaz": {
   "meno": "Ladislav Lörinc",
   "rod": "m",
   "overene": true,
   "strana": "Košická strana",
   "foto": "/assets/candidates/kosice-lorinc.webp"
  },
  "zdroje": [
   {
    "nazov": "Košičák",
    "url": "https://www.kosicak.sk/clanky/14741/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-kosickeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 438,
   "rozNa": 1921,
   "dlh": 35,
   "odhad": false,
   "zdroj": "Schválený rozpočet mesta Košice 2026",
   "poslanci": 51,
   "poslanciOdhad": false
  }
 },
 {
  "key": "presov_primator",
  "nazov": "Prešov",
  "typ": "primator",
  "mesto": "presov",
  "ucast": 44.19,
  "volici": 30396,
  "zapisani": 68781,
  "kandidati": [
   {
    "meno": "František Oľha",
    "hlasy": 12125,
    "pct": 40.69
   },
   {
    "meno": "Pavel Hagyari",
    "hlasy": 7187,
    "pct": 24.12
   },
   {
    "meno": "Rastislav Mochnacký",
    "hlasy": 3964,
    "pct": 13.3
   },
   {
    "meno": "Artúr Benes",
    "hlasy": 2545,
    "pct": 8.54
   },
   {
    "meno": "Martin Eštočák",
    "hlasy": 2027,
    "pct": 6.8
   },
   {
    "meno": "Svetlana Pavlovičová",
    "hlasy": 1948,
    "pct": 6.53
   }
  ],
  "vitaz": {
   "meno": "František Oľha",
   "rod": "m",
   "overene": false,
   "strana": "Demokrati / PS / DS-ODS",
   "foto": "/assets/candidates/presov-olha.webp"
  },
  "zdroje": [
   {
    "nazov": "Prešovák",
    "url": "https://www.presovak.sk/clanky/15978/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-presovskeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 155,
   "rozNa": 1761,
   "dlh": 39,
   "odhad": false,
   "zdroj": "Schválený rozpočet mesta Prešov 2025",
   "poslanci": 31,
   "poslanciOdhad": false
  }
 },
 {
  "key": "zilina_primator",
  "nazov": "Žilina",
  "typ": "primator",
  "mesto": "zilina",
  "ucast": 42.98,
  "kandidati": [
   {
    "meno": "Peter Fiabáne",
    "hlasy": 11854,
    "pct": 41.22
   },
   {
    "meno": "Rastislav Johanes",
    "hlasy": 8203,
    "pct": 28.52
   },
   {
    "meno": "Peter Cibulka",
    "hlasy": 6348,
    "pct": 22.07
   },
   {
    "meno": "Miroslav Sokol",
    "hlasy": 921,
    "pct": 3.2
   },
   {
    "meno": "Michal Milo",
    "hlasy": 834,
    "pct": 2.9
   },
   {
    "meno": "Anton Kozlík",
    "hlasy": 439,
    "pct": 1.52
   },
   {
    "meno": "Ivan Magát",
    "hlasy": 116,
    "pct": 0.4
   },
   {
    "meno": "Bohumil Kostolný",
    "hlasy": 39,
    "pct": 0.13,
    "odstupil": true
   }
  ],
  "vitaz": {
   "meno": "Peter Fiabáne",
   "rod": "m",
   "overene": true,
   "strana": "Nezávislý",
   "foto": "/assets/candidates/zilina-fiabane.webp"
  },
  "zdroje": [
   {
    "nazov": "Žilinák",
    "url": "https://www.zilinak.sk/clanky/43635/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-zilinskeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 165,
   "rozNa": 1964,
   "dlh": 28,
   "odhad": true,
   "zdroj": "Záverečný účet mesta Žilina 2024, odhad pre 2025",
   "poslanci": 31,
   "poslanciOdhad": false
  }
 },
 {
  "key": "bystrica_primator",
  "nazov": "Banská Bystrica",
  "typ": "primator",
  "mesto": "bystrica",
  "ucast": 44.47,
  "kandidati": [
   {
    "meno": "Ján Nosko",
    "hlasy": 12629,
    "pct": 46.78
   },
   {
    "meno": "Diana Javorčíková",
    "hlasy": 11591,
    "pct": 42.94
   },
   {
    "meno": "Matúš Molitoris",
    "hlasy": 1875,
    "pct": 6.94
   },
   {
    "meno": "Marian Kotleba",
    "hlasy": 769,
    "pct": 2.84
   },
   {
    "meno": "Tomáš Sobota",
    "hlasy": 102,
    "pct": 0.37,
    "odstupil": true
   },
   {
    "meno": "Ondrej Vereš",
    "hlasy": 25,
    "pct": 0.09,
    "odstupil": true
   }
  ],
  "vitaz": {
   "meno": "Ján Nosko",
   "rod": "m",
   "overene": true,
   "strana": "Nezávislý / Smer-SD / Hlas-SD",
   "foto": "/assets/candidates/bb-nosko.webp"
  },
  "zdroje": [
   {
    "nazov": "Bystričák",
    "url": "https://www.bystricak.sk/clanky/13553/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-banskobystrickeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 130,
   "rozNa": 1757,
   "dlh": 32,
   "odhad": true,
   "zdroj": "Záverečný účet mesta Banská Bystrica 2024, odhad pre 2025",
   "poslanci": 31,
   "poslanciOdhad": true
  }
 },
 {
  "key": "nitra_primator",
  "nazov": "Nitra",
  "typ": "primator",
  "mesto": "nitra",
  "ucast": 41.0,
  "volici": 27101,
  "zapisani": 66075,
  "kandidati": [
   {
    "meno": "Marek Hattas",
    "hlasy": 13459,
    "pct": 50.66
   },
   {
    "meno": "Igor Kršiak",
    "hlasy": 10379,
    "pct": 39.1
   },
   {
    "meno": "Marek Illéš",
    "hlasy": 1685,
    "pct": 6.3
   },
   {
    "meno": "Zuzana Uhríková",
    "hlasy": 1041,
    "pct": 3.9
   }
  ],
  "vitaz": {
   "meno": "Marek Hattas",
   "rod": "m",
   "overene": false,
   "strana": "Tím kraj Nitra / PS / SaS / KDH / Demokrati / Hnutie Slovensko",
   "foto": "/assets/candidates/nitra-hattas.webp"
  },
  "zdroje": [
   {
    "nazov": "Topky",
    "url": "https://www.topky.sk/cl/2005799/9525965/Komunalne-volby-2026---Nitra--kandidati-na-primatora--poslanci-a-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 115,
   "rozNa": 1716,
   "dlh": 25,
   "odhad": true,
   "zdroj": "Záverečný účet mesta Nitra 2024, odhad pre 2025",
   "poslanci": 31,
   "poslanciOdhad": true
  }
 },
 {
  "key": "trnava_primator",
  "nazov": "Trnava",
  "typ": "primator",
  "mesto": "trnava",
  "ucast": 42.0,
  "volici": 22740,
  "zapisani": 54190,
  "kandidati": [
   {
    "meno": "Eva Nemčovská",
    "hlasy": 13411,
    "pct": 60.47
   },
   {
    "meno": "Branislav Baroš",
    "hlasy": 6848,
    "pct": 30.9
   },
   {
    "meno": "Martin Pullmann",
    "hlasy": 826,
    "pct": 3.7
   },
   {
    "meno": "Andrea Čajková",
    "hlasy": 744,
    "pct": 3.4
   },
   {
    "meno": "Jozef Obselka",
    "hlasy": 267,
    "pct": 1.2
   }
  ],
  "vitaz": {
   "meno": "Eva Nemčovská",
   "rod": "f",
   "overene": false,
   "strana": "Nezávislá / Lepšia Trnava",
   "foto": "/assets/candidates/trnava-nemcovska.webp"
  },
  "zdroje": [
   {
    "nazov": "Topky",
    "url": "https://www.topky.sk/cl/2005799/9525073/Komunalne-volby-2026---Trnava--kandidati-na-primatora--poslanci-a-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 114,
   "rozNa": 1818,
   "dlh": 28,
   "odhad": true,
   "zdroj": "Rozpočet mesta Trnava 2026; dlh podľa INEKO 2024 (odhad)",
   "poslanci": 31,
   "poslanciOdhad": true
  }
 },
 {
  "key": "trencin_primator",
  "nazov": "Trenčín",
  "typ": "primator",
  "mesto": "trencin",
  "ucast": 39.66,
  "kandidati": [
   {
    "meno": "Ján Forgáč",
    "hlasy": 12413,
    "pct": 69.17
   },
   {
    "meno": "Miloš Mičega",
    "hlasy": 4203,
    "pct": 23.42
   },
   {
    "meno": "Danica Birošová",
    "hlasy": 873,
    "pct": 4.86
   },
   {
    "meno": "Michal Bratranec",
    "hlasy": 455,
    "pct": 2.53
   }
  ],
  "vitaz": {
   "meno": "Ján Forgáč",
   "rod": "m",
   "overene": false,
   "strana": "Nezávislý",
   "foto": "/assets/candidates/trencin-forgac.webp"
  },
  "zdroje": [
   {
    "nazov": "Trenčínak",
    "url": "https://www.trencinak.sk/clanky/14284/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-trencianskeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 58,
   "rozNa": 1055,
   "dlh": 30,
   "odhad": true,
   "zdroj": "ODHAD – nahradiť oficiálnym rozpočtom mesta Trenčín; dlh podľa INEKO (odhad)",
   "poslanci": 25,
   "poslanciOdhad": false
  }
 },
 {
  "key": "martin_primator",
  "nazov": "Martin",
  "typ": "primator",
  "mesto": "martin",
  "ucast": 39.33,
  "kandidati": [
   {
    "meno": "Michal Uherčík",
    "hlasy": 6546,
    "pct": 39.06
   },
   {
    "meno": "Milan Ftorek",
    "hlasy": 3627,
    "pct": 21.64
   },
   {
    "meno": "Ján Danko",
    "hlasy": 3511,
    "pct": 20.95
   },
   {
    "meno": "Pavol Zemko",
    "hlasy": 1669,
    "pct": 9.96
   },
   {
    "meno": "Igor Hubáček",
    "hlasy": 453,
    "pct": 2.7
   },
   {
    "meno": "Matej Turzo",
    "hlasy": 424,
    "pct": 2.53
   },
   {
    "meno": "Renáta Habrunová",
    "hlasy": 233,
    "pct": 1.39
   },
   {
    "meno": "Jozef Petráš",
    "hlasy": 151,
    "pct": 0.9
   },
   {
    "meno": "Marek Belák",
    "hlasy": 143,
    "pct": 0.85,
    "odstupil": true
   }
  ],
  "vitaz": {
   "meno": "Michal Uherčík",
   "rod": "m",
   "overene": true,
   "strana": "SaS / PS / KDH / Hnutie Slovensko / Demokrati / OKS",
   "foto": "/assets/candidates/martin-uhercik.webp"
  },
  "zdroje": [
   {
    "nazov": "Žilinák",
    "url": "https://www.zilinak.sk/clanky/43635/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-zilinskeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 72,
   "rozNa": 1440,
   "dlh": 35,
   "odhad": true,
   "zdroj": "Odhad 2026 (rozpočet mesta Martin 2024 = 68,9 mil. €, rastúci trend); prepočet na 49 997 obyv.; dlh podľa INEKO (odhad)",
   "poslanci": 25,
   "poslanciOdhad": false
  }
 },
 {
  "key": "poprad_primator",
  "nazov": "Poprad",
  "typ": "primator",
  "mesto": "poprad",
  "ucast": 41.01,
  "kandidati": [
   {
    "meno": "Jozef Králik",
    "hlasy": 8088,
    "pct": 49.91
   },
   {
    "meno": "Anton Danko",
    "hlasy": 7167,
    "pct": 44.22
   },
   {
    "meno": "Mikuláš Bobák",
    "hlasy": 587,
    "pct": 3.62
   },
   {
    "meno": "Roderik Ledecký",
    "hlasy": 192,
    "pct": 1.18
   },
   {
    "meno": "Patrik Františka",
    "hlasy": 170,
    "pct": 1.04
   }
  ],
  "vitaz": {
   "meno": "Jozef Králik",
   "rod": "m",
   "overene": true,
   "strana": "Nezávislý",
   "foto": "/assets/candidates/poprad-kralik.webp"
  },
  "zdroje": [
   {
    "nazov": "Prešovák",
    "url": "https://www.presovak.sk/clanky/15978/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-presovskeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 76,
   "rozNa": 1520,
   "dlh": 8,
   "odhad": false,
   "zdroj": "Rozpočet mesta Poprad 2025",
   "poslanci": 19,
   "poslanciOdhad": true
  }
 },
 {
  "key": "michalovce_primator",
  "nazov": "Michalovce",
  "typ": "primator",
  "mesto": "michalovce",
  "ucast": 34.51,
  "kandidati": [
   {
    "meno": "Miroslav Dufinec",
    "hlasy": 4410,
    "pct": 45.4
   },
   {
    "meno": "Miroslav Vidovenec",
    "hlasy": 2993,
    "pct": 30.81
   },
   {
    "meno": "Dušan Goda",
    "hlasy": 820,
    "pct": 8.44
   },
   {
    "meno": "Erik Sibal",
    "hlasy": 661,
    "pct": 6.8
   },
   {
    "meno": "Juraj Čarný",
    "hlasy": 543,
    "pct": 5.59
   },
   {
    "meno": "Eva Copáková",
    "hlasy": 209,
    "pct": 2.15
   },
   {
    "meno": "Jozef Bobík",
    "hlasy": 76,
    "pct": 0.78,
    "odstupil": true
   }
  ],
  "vitaz": {
   "meno": "Miroslav Dufinec",
   "rod": "m",
   "overene": false,
   "strana": "Smer-SD / Hlas-SD / SNS / Sme rodina / SMS",
   "foto": "/assets/candidates/michalovce-dufinec.webp"
  },
  "zdroje": [
   {
    "nazov": "Košičák",
    "url": "https://www.kosicak.sk/clanky/14741/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-kosickeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 47,
   "rozNa": 1300,
   "dlh": 20,
   "odhad": false,
   "zdroj": "Rozpočet mesta Michalovce 2025",
   "poslanci": 25,
   "poslanciOdhad": true
  }
 },
 {
  "key": "snv_primator",
  "nazov": "Spišská Nová Ves",
  "typ": "primator",
  "mesto": "snv",
  "ucast": 40.83,
  "kandidati": [
   {
    "meno": "Dávid Demečko",
    "hlasy": 4176,
    "pct": 37.48
   },
   {
    "meno": "Adnan Akram",
    "hlasy": 3294,
    "pct": 29.56
   },
   {
    "meno": "Pavol Bečarik",
    "hlasy": 2286,
    "pct": 20.51
   },
   {
    "meno": "Lukáš Goduš",
    "hlasy": 639,
    "pct": 5.73
   },
   {
    "meno": "Ľubica Bednárová",
    "hlasy": 313,
    "pct": 2.8
   },
   {
    "meno": "Miroslav Uhrin",
    "hlasy": 281,
    "pct": 2.52
   },
   {
    "meno": "Judita Iľašová",
    "hlasy": 152,
    "pct": 1.36,
    "odstupil": true
   }
  ],
  "vitaz": {
   "meno": "Dávid Demečko",
   "rod": "m",
   "overene": false,
   "strana": "Hlas-SD / Smer-SD / Sme rodina / Republika / Konzervatívci – Kresťanská únia",
   "foto": "/assets/candidates/snv-demecko.webp"
  },
  "zdroje": [
   {
    "nazov": "Košičák",
    "url": "https://www.kosicak.sk/clanky/14741/kolko-hlasov-ziskali-vsetci-kandidati-na-primatora-v-okresnych-mestach-kosickeho-kraja-kompletne-vysledky"
   }
  ],
  "metriky": {
   "rozpocet": 60,
   "rozNa": 1622,
   "dlh": 30,
   "odhad": true,
   "zdroj": "Rozpočet mesta Spišská Nová Ves 2026; dlh podľa INEKO 2024 (odhad)",
   "poslanci": 19,
   "poslanciOdhad": true
  }
 },
 {
  "key": "bratislava_vuc",
  "nazov": "Bratislavský kraj (BSK)",
  "typ": "vuc",
  "mesto": "bratislava",
  "ucast": 46.5,
  "kandidati": [
   {
    "meno": "Juraj Droba",
    "hlasy": 188732,
    "pct": 70.96
   },
   {
    "meno": "Rastislav Gajarský",
    "hlasy": 30695,
    "pct": 11.54
   },
   {
    "meno": "Zuzana Krajčovičová",
    "hlasy": 25556,
    "pct": 9.6
   }
  ],
  "vitaz": {
   "meno": "Juraj Droba",
   "rod": "m",
   "overene": false,
   "strana": "Team Bratislava / PS / SaS / Demokrati",
   "foto": "/assets/candidates/bratislava-droba.webp"
  },
  "ostatni": {
   "pocet": 4,
   "hlasy": 20958,
   "pct": 7.86
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/1/bratislavsky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 720,
   "rozNa": 978,
   "dlh": 31,
   "odhad": true,
   "zdroj": "BSK rozpočet 2025, odhad pre 2026",
   "poslanci": 56,
   "poslanciOdhad": false
  }
 },
 {
  "key": "trnava_vuc",
  "nazov": "Trnavský kraj (TTSK)",
  "typ": "vuc",
  "mesto": "trnava",
  "ucast": 44.4,
  "kandidati": [
   {
    "meno": "Jozef Viskupič",
    "hlasy": 103083,
    "pct": 54.04
   },
   {
    "meno": "József Berényi",
    "hlasy": 39790,
    "pct": 20.86
   },
   {
    "meno": "Peter Hambálek",
    "hlasy": 22263,
    "pct": 11.67
   }
  ],
  "vitaz": {
   "meno": "Jozef Viskupič",
   "rod": "m",
   "overene": true,
   "strana": "PS / SaS / KDH / Demokrati / Hnutie Slovensko / OKS / Magyar Fórum",
   "foto": "/assets/candidates/trnava-viskupic.webp"
  },
  "ostatni": {
   "pocet": 4,
   "hlasy": 25585,
   "pct": 13.4
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/2/trnavsky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 320,
   "rozNa": 514,
   "dlh": 30,
   "odhad": false,
   "zdroj": "Schválený rozpočet TTSK 2026 (vrátane fin. operácií); zadlženosť k 31. 12. 2025",
   "poslanci": 40,
   "poslanciOdhad": false
  }
 },
 {
  "key": "trencin_vuc",
  "nazov": "Trenčiansky kraj (TSK)",
  "typ": "vuc",
  "mesto": "trencin",
  "ucast": 47.5,
  "kandidati": [
   {
    "meno": "Jaroslav Baška",
    "hlasy": 119827,
    "pct": 57.44
   },
   {
    "meno": "Natália Svítková",
    "hlasy": 81400,
    "pct": 39.02
   },
   {
    "meno": "Daniel Galas",
    "hlasy": 4787,
    "pct": 2.29
   }
  ],
  "vitaz": {
   "meno": "Jaroslav Baška",
   "rod": "m",
   "overene": false,
   "strana": "Smer-SD / Hlas-SD / SNS / Republika",
   "foto": "/assets/candidates/trencin-baska.webp"
  },
  "ostatni": {
   "pocet": 1,
   "hlasy": 2595,
   "pct": 1.24
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/3/trenciansky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 290,
   "rozNa": 512,
   "dlh": 30,
   "odhad": true,
   "zdroj": "ODHAD – nahradiť oficiálnym rozpočtom TSK; zadlženosť (odhad)",
   "poslanci": 44,
   "poslanciOdhad": false
  }
 },
 {
  "key": "nitra_vuc",
  "nazov": "Nitriansky kraj (NSK)",
  "typ": "vuc",
  "mesto": "nitra",
  "ucast": 45.3,
  "kandidati": [
   {
    "meno": "Branislav Becík",
    "hlasy": 115058,
    "pct": 50.47
   },
   {
    "meno": "Henrich Varga",
    "hlasy": 65807,
    "pct": 28.86
   },
   {
    "meno": "Tibor Csenger",
    "hlasy": 23726,
    "pct": 10.4
   }
  ],
  "vitaz": {
   "meno": "Branislav Becík",
   "rod": "m",
   "overene": false,
   "strana": "Hlas-SD / Smer-SD / Republika",
   "foto": "/assets/candidates/nitra-becik.webp"
  },
  "ostatni": {
   "pocet": 4,
   "hlasy": 23370,
   "pct": 10.24
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/4/nitriansky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 302,
   "rozNa": 448,
   "dlh": 6,
   "odhad": false,
   "zdroj": "Schválený rozpočet NSK 2025",
   "poslanci": 57,
   "poslanciOdhad": true
  }
 },
 {
  "key": "zilina_vuc",
  "nazov": "Žilinský kraj (ŽSK)",
  "typ": "vuc",
  "mesto": "zilina",
  "ucast": 50.1,
  "kandidati": [
   {
    "meno": "Erika Jurinová",
    "hlasy": 134617,
    "pct": 52.06
   },
   {
    "meno": "Igor Choma",
    "hlasy": 66725,
    "pct": 25.8
   },
   {
    "meno": "Martin Kapitulík",
    "hlasy": 32721,
    "pct": 12.65
   }
  ],
  "vitaz": {
   "meno": "Erika Jurinová",
   "rod": "f",
   "overene": true,
   "strana": "Nezávislá / Hnutie Slovensko / KDH / Za ľudí / NOVA / SaS / PS / Demokrati / OKS / ODS / Konzervatívci",
   "foto": "/assets/candidates/zilina-jurinova.webp"
  },
  "ostatni": {
   "pocet": 4,
   "hlasy": 24482,
   "pct": 9.46
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/5/zilinsky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 375,
   "rozNa": 540,
   "dlh": 22,
   "odhad": true,
   "zdroj": "ŽSK rozpočet 2025, odhad",
   "poslanci": 56,
   "poslanciOdhad": false
  }
 },
 {
  "key": "bystrica_vuc",
  "nazov": "Banskobystrický kraj (BBSK)",
  "typ": "vuc",
  "mesto": "bystrica",
  "ucast": 46.2,
  "kandidati": [
   {
    "meno": "Ondrej Lunter",
    "hlasy": 135971,
    "pct": 64.81
   },
   {
    "meno": "Miroslav Suja",
    "hlasy": 31465,
    "pct": 14.99
   },
   {
    "meno": "Marian Kotleba",
    "hlasy": 19128,
    "pct": 9.11
   }
  ],
  "vitaz": {
   "meno": "Ondrej Lunter",
   "rod": "m",
   "overene": true,
   "strana": "Nezávislý / SaS / Hlas-SD / KDH / PS / Maďarská aliancia",
   "foto": "/assets/candidates/bb-lunter.webp"
  },
  "ostatni": {
   "pocet": 4,
   "hlasy": 23204,
   "pct": 11.04
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/6/banskobystricky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 340,
   "rozNa": 528,
   "dlh": 28,
   "odhad": true,
   "zdroj": "BBSK rozpočet 2025, odhad",
   "poslanci": 49,
   "poslanciOdhad": true
  }
 },
 {
  "key": "presov_vuc",
  "nazov": "Prešovský kraj (PSK)",
  "typ": "vuc",
  "mesto": "presov",
  "ucast": 49.9,
  "kandidati": [
   {
    "meno": "Milan Majerský",
    "hlasy": 138819,
    "pct": 48.77
   },
   {
    "meno": "Milan Mazurek",
    "hlasy": 100131,
    "pct": 35.18
   },
   {
    "meno": "Samuel Migaľ",
    "hlasy": 17240,
    "pct": 6.05
   }
  ],
  "vitaz": {
   "meno": "Milan Majerský",
   "rod": "m",
   "overene": true,
   "strana": "KDH / Hnutie Slovensko / SaS / Za ľudí / Konzervatívci-KÚ / PS",
   "foto": "/assets/candidates/presov-majersky.webp"
  },
  "ostatni": {
   "pocet": 8,
   "hlasy": 28404,
   "pct": 9.95
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/7/presovsky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 553,
   "rozNa": 683,
   "dlh": 30,
   "odhad": false,
   "zdroj": "Schválený rozpočet PSK 2026",
   "poslanci": 67,
   "poslanciOdhad": false
  }
 },
 {
  "key": "kosice_vuc",
  "nazov": "Košický kraj (KSK)",
  "typ": "vuc",
  "mesto": "kosice",
  "ucast": 42.5,
  "kandidati": [
   {
    "meno": "Rastislav Trnka",
    "hlasy": 76421,
    "pct": 32.0
   },
   {
    "meno": "Marián Porvažník",
    "hlasy": 73304,
    "pct": 30.7
   },
   {
    "meno": "Igor Šimko",
    "hlasy": 57682,
    "pct": 24.15
   }
  ],
  "vitaz": {
   "meno": "Rastislav Trnka",
   "rod": "m",
   "overene": false,
   "strana": "Nezávislý / Maďarská aliancia",
   "foto": "/assets/candidates/kosice-trnka.webp"
  },
  "ostatni": {
   "pocet": 3,
   "hlasy": 31366,
   "pct": 13.13
  },
  "zdroje": [
   {
    "nazov": "Postoj",
    "url": "https://www.postoj.sk/volby/komunalne-volby-2026/kraj/8/kosicky-kraj"
   }
  ],
  "metriky": {
   "rozpocet": 390,
   "rozNa": 500,
   "dlh": 32,
   "odhad": true,
   "zdroj": "KSK rozpočet 2025, odhad",
   "poslanci": 59,
   "poslanciOdhad": false
  }
 },
 {
  "key": "ba_stare_mesto",
  "nazov": "Bratislava-Staré Mesto",
  "typ": "starosta",
  "mesto": "bratislava",
  "ucast": 46.0,
  "volici": 19901,
  "zapisani": 43235,
  "kandidati": [
   {
    "meno": "Matej Vagač",
    "hlasy": 11588,
    "pct": 62.18
   },
   {
    "meno": "Zuzana Aufrichtová",
    "hlasy": 3692,
    "pct": 19.8
   },
   {
    "meno": "Miroslav Vetrík",
    "hlasy": 1949,
    "pct": 10.4
   },
   {
    "meno": "Petra Hitková",
    "hlasy": 1407,
    "pct": 7.5
   }
  ],
  "vitaz": {
   "meno": "Matej Vagač",
   "rod": "m",
   "overene": false,
   "strana": "PS / Team Bratislava / SaS / Demokrati",
   "foto": "/assets/candidates/bratislava-vagac.webp"
  },
  "zdroje": [
   {
    "nazov": "Topky",
    "url": "https://www.topky.sk/cl/2005799/9524411/Komunalne-volby-2026---Bratislava-Stare-Mesto--kandidati-na-starostu--poslanci-a-vysledky"
   }
  ]
 },
 {
  "key": "ba_petrzalka",
  "nazov": "Bratislava-Petržalka",
  "typ": "starosta",
  "mesto": "bratislava",
  "ucast": 46.4,
  "volici": 43896,
  "zapisani": 94606,
  "kandidati": [
   {
    "meno": "Ján Hrčka",
    "hlasy": 22665,
    "pct": 54.36
   },
   {
    "meno": "Daniel Klimovský",
    "hlasy": 14330,
    "pct": 34.4
   },
   {
    "meno": "Juraj Mravec",
    "hlasy": 4693,
    "pct": 11.2
   }
  ],
  "vitaz": {
   "meno": "Ján Hrčka",
   "rod": "m",
   "overene": false,
   "strana": "Nezávislý / Strana Krajina",
   "foto": "/assets/candidates/bratislava-hrcka.webp"
  },
  "zdroje": [
   {
    "nazov": "Topky",
    "url": "https://www.topky.sk/cl/2005799/9524439/Komunalne-volby-2026---Bratislava-Petrzalka--kandidati-na-starostu--poslanci-a-vysledky"
   }
  ]
 },
 {
  "key": "ke_stare_mesto",
  "nazov": "Košice-Staré Mesto",
  "typ": "starosta",
  "mesto": "kosice",
  "ucast": 37.88,
  "kandidati": [
   {
    "meno": "Igor Holéczy",
    "hlasy": 2690,
    "pct": 40.68
   },
   {
    "meno": "Igor Petrovčik",
    "hlasy": 1694,
    "pct": 25.62
   },
   {
    "meno": "Renáta Zolnaiová",
    "hlasy": 620,
    "pct": 9.37
   },
   {
    "meno": "Alena Zvarová Bašistová",
    "hlasy": 596,
    "pct": 9.01
   },
   {
    "meno": "Peter Škripko",
    "hlasy": 556,
    "pct": 8.4
   },
   {
    "meno": "Michal Djordjevič",
    "hlasy": 456,
    "pct": 6.89
   }
  ],
  "vitaz": {
   "meno": "Igor Holéczy",
   "rod": "m",
   "overene": false,
   "strana": "PS / Demokrati / Za ľudí / Maďarská aliancia",
   "foto": "/assets/candidates/kosice-holeczy.webp"
  },
  "zdroje": [
   {
    "nazov": "Košice:dnes",
    "url": "https://kosicednes.sk/kosice/igor-holeczy-bude-novym-starostom-mc-kosice-stare-mesto"
   }
  ]
 },
 {
  "key": "ke_zapad",
  "nazov": "Košice-Západ",
  "typ": "starosta",
  "mesto": "kosice",
  "ucast": 34.7,
  "volici": 10895,
  "zapisani": 31373,
  "kandidati": [
   {
    "meno": "Marcel Vrchota",
    "hlasy": 3317,
    "pct": 32.32
   },
   {
    "meno": "Patrícia Helfenová",
    "hlasy": 1433,
    "pct": 14.0
   },
   {
    "meno": "Andrej Sitkár",
    "hlasy": 1298,
    "pct": 12.6
   },
   {
    "meno": "Michal Starec",
    "hlasy": 1140,
    "pct": 11.1
   },
   {
    "meno": "Dominik Karaffa",
    "hlasy": 1113,
    "pct": 10.8
   },
   {
    "meno": "Peter Berinšter",
    "hlasy": 622,
    "pct": 6.1
   },
   {
    "meno": "Beáta Zemková",
    "hlasy": 558,
    "pct": 5.4
   },
   {
    "meno": "Filip Gaál",
    "hlasy": 475,
    "pct": 4.6
   },
   {
    "meno": "Zdenko Lipták",
    "hlasy": 305,
    "pct": 3.0
   }
  ],
  "vitaz": {
   "meno": "Marcel Vrchota",
   "rod": "m",
   "overene": false,
   "strana": "SaS / PS / Za ľudí / Hnutie Slovensko / Demokrati / DS-ODS",
   "foto": "/assets/candidates/kosice-vrchota.webp"
  },
  "zdroje": [
   {
    "nazov": "Topky",
    "url": "https://www.topky.sk/cl/2005799/9529411/Komunalne-volby-2026---Kosice-Zapad--kandidati-na-starostu--poslanci-a-vysledky"
   }
  ]
 }
];
