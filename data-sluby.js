// ══ SĽUBY POD LUPOU ══
// Sledovanie, či zvolení primátori a predsedovia krajov konajú podľa postojov,
// ktoré uviedli v kalkulačke (alebo ktoré sme odhadli z verejných zdrojov).
//
// Všetky postoje majú automaticky stav "Sledujeme". Sem zapisuj len zmeny.
//
// AKO PRIDAŤ ZMENU (skopíruj riadok a uprav):
//   'kosice_primator': {
//     3: { stav: 'plni', datum: '2027-02-10', text: 'Zastupiteľstvo schválilo...', odkaz: 'https://...' },
//   },
//
//   kľúč voľby  = napr. 'kosice_primator', 'zilina_vuc' (rovnaký ako v data-vysledky.js)
//   číslo       = poradie otázky v kalkulačke, prvá otázka je 1
//   stav        = 'sledujeme' | 'plni' (plní sa) | 'splnene' | 'rozpor' (koná proti postoju)
//   datum       = dátum, kedy sa stav zmenil (RRRR-MM-DD)
//   text        = jedna veta, čo sa stalo
//   odkaz       = zdroj (uznesenie, hlasovanie, rozpočet, článok)
//
window.SLUBY = {
  aktualizovane: '2026-11-02',
  stavy: {
  }
};
