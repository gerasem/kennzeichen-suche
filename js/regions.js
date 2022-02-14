const regions = [
    {
        "abr": "A",
        "kreis": "Stadt Augsburg (AA–ZZ 100–999 und 5000–9999)* / Landkreis Augsburg (sonst)*",
        "kurz": "Augsburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "AA",
        "kreis": "Ostalbkreis",
        "kurz": "AAlen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "AB",
        "kreis": "Stadt Aschaffenburg (sonst)* / Landkreis Aschaffenburg (AA–ZZ 100–9999)*",
        "kurz": "AschaffenBurg",
        "bundesland": "Bayern"
    },
    {
        "abr": "ABG",
        "kreis": "Landkreis Altenburger Land",
        "kurz": "AltenBurG",
        "bundesland": "Thüringen"
    },
    {
        "abr": "ABI",
        "kreis": "Landkreis Anhalt-Bitterfeld",
        "kurz": "Anhalt, BItterfeld",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "AC",
        "kreis": "Städteregion Aachen",
        "kurz": "AaChen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "AE",
        "kreis": "Vogtlandkreis",
        "kurz": "AuErbach",
        "bundesland": "Sachsen"
    },
    {
        "abr": "AH",
        "kreis": "Kreis Borken",
        "kurz": "AHaus",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "AIB",
        "kreis": "Landkreis München (Q 10–9999) / Landkreis Rosenheim (sonst)",
        "kurz": "AIBling",
        "bundesland": "Bayern"
    },
    {
        "abr": "AIC",
        "kreis": "Landkreis Aichach-Friedberg",
        "kurz": "AIChach",
        "bundesland": "Bayern"
    },
    {
        "abr": "AK",
        "kreis": "Landkreis Altenkirchen (Westerwald)",
        "kurz": "AltenKirchen",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "ALF",
        "kreis": "Landkreis Hildesheim",
        "kurz": "ALFeld",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "ALZ",
        "kreis": "Landkreis Aschaffenburg",
        "kurz": "ALZenau",
        "bundesland": "Bayern"
    },
    {
        "abr": "AM",
        "kreis": "Stadt Amberg",
        "kurz": "AMberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "AN",
        "kreis": "Stadt Ansbach (sonst)* / Landkreis Ansbach (AA–ZZ 100–999)*",
        "kurz": "ANsbach",
        "bundesland": "Bayern"
    },
    {
        "abr": "ANA",
        "kreis": "Erzgebirgskreis",
        "kurz": "ANnAberg",
        "bundesland": "Sachsen"
    },
    {
        "abr": "ANG",
        "kreis": "Landkreis Uckermark",
        "kurz": "ANGermünde",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "ANK",
        "kreis": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
        "kurz": "ANKlam",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "AÖ",
        "kreis": "Landkreis Altötting",
        "kurz": "AltÖtting",
        "bundesland": "Bayern"
    },
    {
        "abr": "AP",
        "kreis": "Landkreis Weimarer Land",
        "kurz": "APolda",
        "bundesland": "Thüringen"
    },
    {
        "abr": "APD",
        "kreis": "Landkreis Weimarer Land",
        "kurz": "APolDa",
        "bundesland": "Thüringen"
    },
    {
        "abr": "ARN",
        "kreis": "Ilm-Kreis",
        "kurz": "ARNstadt",
        "bundesland": "Thüringen"
    },
    {
        "abr": "ART",
        "kreis": "Kyffhäuserkreis",
        "kurz": "ARTern",
        "bundesland": "Thüringen"
    },
    {
        "abr": "AS",
        "kreis": "Landkreis Amberg-Sulzbach",
        "kurz": "Amberg, Sulzbach",
        "bundesland": "Bayern"
    },
    {
        "abr": "ASL",
        "kreis": "Salzlandkreis",
        "kurz": "ASchersLeben",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "ASZ",
        "kreis": "Erzgebirgskreis",
        "kurz": "Aue, SchwarZenberg",
        "bundesland": "Sachsen"
    },
    {
        "abr": "AT",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "AltenTreptow",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "AU",
        "kreis": "Erzgebirgskreis",
        "kurz": "AUe",
        "bundesland": "Sachsen"
    },
    {
        "abr": "AUR",
        "kreis": "Landkreis Aurich",
        "kurz": "AURich",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "AW",
        "kreis": "Landkreis Ahrweiler",
        "kurz": "AhrWeiler",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "AZ",
        "kreis": "Landkreis Alzey-Worms",
        "kurz": "AlZey",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "AZE",
        "kreis": "Landkreis Anhalt-Bitterfeld",
        "kurz": "Anhalt-ZErbst",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "B",
        "kreis": "Stadt Berlin / Berlin, Senat und Abgeordnetenhaus / Diplomaten",
        "kurz": "Berlin",
        "bundesland": "Berlin"
    },
    {
        "abr": "BA",
        "kreis": "Stadt Bamberg / Landkreis Bamberg",
        "kurz": "BAmberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "BAD",
        "kreis": "Stadt Baden-Baden",
        "kurz": "BADen-Baden",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BAR",
        "kreis": "Landkreis Barnim",
        "kurz": "BARnim",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "BB",
        "kreis": "Landkreis Böblingen",
        "kurz": "BöBlingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BBG",
        "kreis": "Salzlandkreis",
        "kurz": "BernBurG",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "BBL",
        "kreis": "Brandenburg, Landesregierung, Landtag und Polizei[2]",
        "kurz": "BrandenBurgische Landesregierung",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "BC",
        "kreis": "Landkreis Biberach",
        "kurz": "BiberaCh",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BCH",
        "kreis": "Neckar-Odenwald-Kreis",
        "kurz": "BuCHen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BD",
        "kreis": "Deutscher Bundestag, Bundesrat, Bundespräsidialamt, Bundesregierung, Bundesministerien, Bundesfinanzverwaltung (z. B. Zoll) und Bundesverfassungsgericht[2]",
        "kurz": "BundesDienst[3]",
        "bundesland": "bundesweit"
    },
    {
        "abr": "BE",
        "kreis": "Kreis Warendorf",
        "kurz": "BEckum",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BED",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "Brand-ErbisDorf",
        "bundesland": "Sachsen"
    },
    {
        "abr": "BER",
        "kreis": "Landkreis Barnim",
        "kurz": "BERnau",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "BF",
        "kreis": "Kreis Steinfurt",
        "kurz": "BurgsteinFurt",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BGD",
        "kreis": "Landkreis Berchtesgadener Land",
        "kurz": "BerchtesGaDen",
        "bundesland": "Bayern"
    },
    {
        "abr": "BGL",
        "kreis": "Landkreis Berchtesgadener Land",
        "kurz": "BerchtesGadener Land",
        "bundesland": "Bayern"
    },
    {
        "abr": "BH",
        "kreis": "Ortenaukreis (F 7000–7999, N 8000–8999, O 2000–2999, OF 1–6999, OG 9000–9999, OK 3000–3999 und OP 1–4999) / Landkreis Rastatt (sonst)",
        "kurz": "BüHl",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BI",
        "kreis": "Stadt Bielefeld",
        "kurz": "BIelefeld",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BID",
        "kreis": "Landkreis Marburg-Biedenkopf",
        "kurz": "BIeDenkopf",
        "bundesland": "Hessen"
    },
    {
        "abr": "BIN",
        "kreis": "Landkreis Mainz-Bingen",
        "kurz": "BINgen",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "BIR",
        "kreis": "Landkreis Birkenfeld",
        "kurz": "BIRkenfeld",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "BIT",
        "kreis": "Eifelkreis Bitburg-Prüm",
        "kurz": "BITburg",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "BIW",
        "kreis": "Landkreis Bautzen",
        "kurz": "BIschofsWerda",
        "bundesland": "Sachsen"
    },
    {
        "abr": "BK",
        "kreis": "Rems-Murr-Kreis (N 1-Z 99 A–Z 1000–9999 und AA–PZ 1–99)* / Landkreis Schwäbisch Hall (A 1-M 99 ohne B, F, G und I, RA 1-ZZ 99 ohne B, F, G, I, O und Q, TA 1000-ZZ 9999) / Landkreis Börde (AA–ZZ 100–999, AA-SZ 1000-9999)",
        "kurz": "BacKnang",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BKS",
        "kreis": "Landkreis Bernkastel-Wittlich",
        "kurz": "BernKaStel",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "BL",
        "kreis": "Zollernalbkreis",
        "kurz": "BaLingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BLB",
        "kreis": "Kreis Siegen-Wittgenstein",
        "kurz": "BerLeBurg",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BLK",
        "kreis": "Burgenlandkreis",
        "kurz": "BurgenLandKreis",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "BM",
        "kreis": "Rhein-Erft-Kreis",
        "kurz": "BergheiM",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BN",
        "kreis": "Stadt Bonn / Diplomaten",
        "kurz": "BonN",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BNA",
        "kreis": "Landkreis Leipzig",
        "kurz": "BorNA",
        "bundesland": "Sachsen"
    },
    {
        "abr": "BO",
        "kreis": "Stadt Bochum",
        "kurz": "BOchum",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BÖ",
        "kreis": "Landkreis Börde",
        "kurz": "BÖrde",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "BOG",
        "kreis": "Landkreis Straubing-Bogen",
        "kurz": "BOGen",
        "bundesland": "Bayern"
    },
    {
        "abr": "BOH",
        "kreis": "Kreis Borken",
        "kurz": "BOcHolt",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BOR",
        "kreis": "Kreis Borken",
        "kurz": "BORken",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BOT",
        "kreis": "Stadt Bottrop",
        "kurz": "BOTtrop",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BP",
        "kreis": "Bundespolizei",
        "kurz": "BundesPolizei",
        "bundesland": "bundesweit"
    },
    {
        "abr": "BRA",
        "kreis": "Landkreis Wesermarsch",
        "kurz": "BRAke",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "BRB",
        "kreis": "Stadt Brandenburg an der Havel",
        "kurz": "BRandenBurg",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "BRG",
        "kreis": "Landkreis Jerichower Land",
        "kurz": "BuRG",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "BRK",
        "kreis": "Landkreis Bad Kissingen",
        "kurz": "BRücKenau",
        "bundesland": "Bayern"
    },
    {
        "abr": "BRL",
        "kreis": "Landkreis Goslar",
        "kurz": "BRaunLage",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "BRV",
        "kreis": "Landkreis Rotenburg (Wümme)",
        "kurz": "BRemerVörde",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "BS",
        "kreis": "Stadt Braunschweig (sonst) / Polizeidirektion Braunschweig (PD 100–9999)",
        "kurz": "BraunSchweig",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "BSB",
        "kreis": "Landkreis Osnabrück",
        "kurz": "BerSenBrück",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "BSK",
        "kreis": "Landkreis Oder-Spree",
        "kurz": "BeeSKow",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "BT",
        "kreis": "Stadt Bayreuth / Landkreis Bayreuth",
        "kurz": "BayreuTh",
        "bundesland": "Bayern"
    },
    {
        "abr": "BTF",
        "kreis": "Landkreis Anhalt-Bitterfeld",
        "kurz": "BitTerFeld",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "BÜD",
        "kreis": "Wetteraukreis",
        "kurz": "BÜDingen",
        "bundesland": "Hessen"
    },
    {
        "abr": "BUL",
        "kreis": "Landkreis Amberg-Sulzbach (B, F und G 1–999) / Landkreis Schwandorf (sonst)",
        "kurz": "BUrgLengenfeld",
        "bundesland": "Bayern"
    },
    {
        "abr": "BÜR",
        "kreis": "Kreis Paderborn",
        "kurz": "BÜRen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "BÜS",
        "kreis": "Gemeinde Büsingen am Hochrhein (Gemeinde im Landkreis Konstanz, deutsche Exklave in der Schweiz) (A und Z 1–999)",
        "kurz": "BÜSingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BÜZ",
        "kreis": "Landkreis Rostock",
        "kurz": "BÜtZow",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "BW",
        "kreis": "Wasserstraßen- und Schifffahrtsverwaltung des Bundes",
        "kurz": "Bundes-Wasserstraßen- und Schifffahrtsverwaltung",
        "bundesland": "bundesweit"
    },
    {
        "abr": "BWL",
        "kreis": "Baden-Württemberg, Landesregierung, Landtag und Polizei[2]",
        "kurz": "Baden-Württembergischer Landtag",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "BYL",
        "kreis": "Bayern, Landesregierung und Landtag",
        "kurz": "BaYerischer Landtag",
        "bundesland": "Bayern"
    },
    {
        "abr": "BZ",
        "kreis": "Landkreis Bautzen",
        "kurz": "BautZen",
        "bundesland": "Sachsen"
    },
    {
        "abr": "C",
        "kreis": "Stadt Chemnitz",
        "kurz": "Chemnitz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "CA",
        "kreis": "Landkreis Oberspreewald-Lausitz",
        "kurz": "CAlau",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "CAS",
        "kreis": "Kreis Recklinghausen",
        "kurz": "CAStrop",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "CB",
        "kreis": "Stadt Cottbus",
        "kurz": "CottBus",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "CE",
        "kreis": "Landkreis Celle",
        "kurz": "CElle",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "CHA",
        "kreis": "Landkreis Cham",
        "kurz": "CHAm",
        "bundesland": "Bayern"
    },
    {
        "abr": "CLP",
        "kreis": "Landkreis Cloppenburg",
        "kurz": "CLopPenburg",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "CLZ",
        "kreis": "Landkreis Goslar",
        "kurz": "CLausthal-Zellerfeld",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "CO",
        "kreis": "Stadt Coburg und Landkreis Coburg (→ Zweckverband Zulassungsstelle Coburg)",
        "kurz": "COburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "COC",
        "kreis": "Landkreis Cochem-Zell",
        "kurz": "COChem",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "COE",
        "kreis": "Kreis Coesfeld",
        "kurz": "COEsfeld",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "CR",
        "kreis": "Landkreis Schwäbisch Hall",
        "kurz": "CRailsheim",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "CUX",
        "kreis": "Landkreis Cuxhaven",
        "kurz": "CUXhaven",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "CW",
        "kreis": "Landkreis Calw",
        "kurz": "CalW",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "D",
        "kreis": "Stadt Düsseldorf",
        "kurz": "Düsseldorf",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "DA",
        "kreis": "Landkreis Darmstadt-Dieburg und Stadt Darmstadt",
        "kurz": "DArmstadt",
        "bundesland": "Hessen"
    },
    {
        "abr": "DAH",
        "kreis": "Landkreis Dachau",
        "kurz": "DAcHau",
        "bundesland": "Bayern"
    },
    {
        "abr": "DAN",
        "kreis": "Landkreis Lüchow-Dannenberg",
        "kurz": "DANnenberg",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "DAU",
        "kreis": "Landkreis Vulkaneifel",
        "kurz": "DAUn",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "DBR",
        "kreis": "Landkreis Rostock",
        "kurz": "DoBeRan",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "DD",
        "kreis": "Stadt Dresden (sonst) / Polizei Sachsen (Q 1000–9999)",
        "kurz": "DresDen",
        "bundesland": "Sachsen"
    },
    {
        "abr": "DE",
        "kreis": "Stadt Dessau-Roßlau",
        "kurz": "DEssau",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "DEG",
        "kreis": "Landkreis Deggendorf",
        "kurz": "DEGgendorf",
        "bundesland": "Bayern"
    },
    {
        "abr": "DEL",
        "kreis": "Stadt Delmenhorst",
        "kurz": "DELmenhorst",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "DGF",
        "kreis": "Landkreis Dingolfing-Landau",
        "kurz": "DinGolFing",
        "bundesland": "Bayern"
    },
    {
        "abr": "DH",
        "kreis": "Landkreis Diepholz",
        "kurz": "DiepHolz",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "DI",
        "kreis": "Landkreis Darmstadt-Dieburg",
        "kurz": "DIeburg",
        "bundesland": "Hessen"
    },
    {
        "abr": "DIL",
        "kreis": "Lahn-Dill-Kreis ohne die Stadt Wetzlar",
        "kurz": "DILlkreis",
        "bundesland": "Hessen"
    },
    {
        "abr": "DIN",
        "kreis": "Kreis Wesel",
        "kurz": "DINslaken",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "DIZ",
        "kreis": "Rhein-Lahn-Kreis",
        "kurz": "DIeZ",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "DKB",
        "kreis": "Landkreis Ansbach",
        "kurz": "DinKelsBühl",
        "bundesland": "Bayern"
    },
    {
        "abr": "DL",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "DöbeLn",
        "bundesland": "Sachsen"
    },
    {
        "abr": "DLG",
        "kreis": "Landkreis Dillingen an der Donau",
        "kurz": "DilLinGen",
        "bundesland": "Bayern"
    },
    {
        "abr": "DM",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "DemMin",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "DN",
        "kreis": "Kreis Düren",
        "kurz": "DüreN",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "DO",
        "kreis": "Stadt Dortmund",
        "kurz": "DOrtmund",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "DON",
        "kreis": "Landkreis Donau-Ries",
        "kurz": "DONauwörth",
        "bundesland": "Bayern"
    },
    {
        "abr": "DU",
        "kreis": "Stadt Duisburg",
        "kurz": "DUisburg",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "DUD",
        "kreis": "Landkreis Göttingen ohne die Stadt Göttingen",
        "kurz": "DUDerstadt",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "DÜW",
        "kreis": "Landkreis Bad Dürkheim",
        "kurz": "DÜrkheim an der Weinstraße",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "DW",
        "kreis": "Landkreis Sächsische Schweiz-Osterzgebirge",
        "kurz": "DippoldisWalde",
        "bundesland": "Sachsen"
    },
    {
        "abr": "DZ",
        "kreis": "Landkreis Nordsachsen",
        "kurz": "DelitZsch",
        "bundesland": "Sachsen"
    },
    {
        "abr": "E",
        "kreis": "Stadt Essen",
        "kurz": "Essen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "EA",
        "kreis": "Stadt Eisenach",
        "kurz": "EisenAch",
        "bundesland": "Thüringen"
    },
    {
        "abr": "EB",
        "kreis": "Landkreis Nordsachsen",
        "kurz": "EilenBurg",
        "bundesland": "Sachsen"
    },
    {
        "abr": "EBE",
        "kreis": "Landkreis Ebersberg",
        "kurz": "EBErsberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "EBN",
        "kreis": "Landkreis Haßberge",
        "kurz": "EBerN",
        "bundesland": "Bayern"
    },
    {
        "abr": "EBS",
        "kreis": "Landkreis Bayreuth (N–Z 1–999) / Landkreis Forchheim (sonst) / Landkreis Kulmbach (A–M 1–999)",
        "kurz": "EBermannStadt",
        "bundesland": "Bayern"
    },
    {
        "abr": "ECK",
        "kreis": "Kreis Rendsburg-Eckernförde",
        "kurz": "ECKernförde",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "ED",
        "kreis": "Landkreis Erding",
        "kurz": "ErDing",
        "bundesland": "Bayern"
    },
    {
        "abr": "EE",
        "kreis": "Landkreis Elbe-Elster",
        "kurz": "Elbe, Elster",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "EF",
        "kreis": "Stadt Erfurt",
        "kurz": "ErFurt",
        "bundesland": "Thüringen"
    },
    {
        "abr": "EG",
        "kreis": "Landkreis Rottal-Inn",
        "kurz": "EGgenfelden",
        "bundesland": "Bayern"
    },
    {
        "abr": "EH",
        "kreis": "Landkreis Oder-Spree",
        "kurz": "EisenHüttenstadt",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "EI",
        "kreis": "Landkreis Eichstätt",
        "kurz": "EIchstätt",
        "bundesland": "Bayern"
    },
    {
        "abr": "EIC",
        "kreis": "Landkreis Eichsfeld",
        "kurz": "EIChsfeld",
        "bundesland": "Thüringen"
    },
    {
        "abr": "EIL",
        "kreis": "Landkreis Mansfeld-Südharz",
        "kurz": "EIsLeben",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "EIN",
        "kreis": "Landkreis Northeim",
        "kurz": "EINbeck",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "EIS",
        "kreis": "Saale-Holzland-Kreis",
        "kurz": "EISenberg",
        "bundesland": "Thüringen"
    },
    {
        "abr": "EL",
        "kreis": "Landkreis Emsland",
        "kurz": "EmsLand",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "EM",
        "kreis": "Landkreis Emmendingen",
        "kurz": "EMmendingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "EMD",
        "kreis": "Stadt Emden",
        "kurz": "EMDen",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "EMS",
        "kreis": "Rhein-Lahn-Kreis",
        "kurz": "EMS",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "EN",
        "kreis": "Ennepe-Ruhr-Kreis",
        "kurz": "ENnepe",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "ER",
        "kreis": "Stadt Erlangen",
        "kurz": "ERlangen",
        "bundesland": "Bayern"
    },
    {
        "abr": "ERB",
        "kreis": "Odenwaldkreis",
        "kurz": "ERBach",
        "bundesland": "Hessen"
    },
    {
        "abr": "ERH",
        "kreis": "Landkreis Erlangen-Höchstadt",
        "kurz": "ERlangen, Höchstadt",
        "bundesland": "Bayern"
    },
    {
        "abr": "ERK",
        "kreis": "Kreis Heinsberg",
        "kurz": "ERKelenz",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "ERZ",
        "kreis": "Erzgebirgskreis",
        "kurz": "ERZgebirge",
        "bundesland": "Sachsen"
    },
    {
        "abr": "ES",
        "kreis": "Landkreis Esslingen",
        "kurz": "ESslingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "ESB",
        "kreis": "Landkreis Amberg-Sulzbach (B, F, G, I, O und Q 1–999) / Landkreis Bayreuth (AT, BT, CT, DT, … YT und ZT 1–99) / Landkreis Neustadt an der Waldnaab (sonst) / Landkreis Nürnberger Land (N 1–999)",
        "kurz": "ESchenBach",
        "bundesland": "Bayern"
    },
    {
        "abr": "ESW",
        "kreis": "Werra-Meißner-Kreis",
        "kurz": "ESchWege",
        "bundesland": "Hessen"
    },
    {
        "abr": "EU",
        "kreis": "Kreis Euskirchen",
        "kurz": "EUskirchen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "EW",
        "kreis": "Landkreis Barnim",
        "kurz": "EbersWalde",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "F",
        "kreis": "Stadt Frankfurt am Main",
        "kurz": "Frankfurt",
        "bundesland": "Hessen"
    },
    {
        "abr": "FB",
        "kreis": "Wetteraukreis",
        "kurz": "FriedBerg",
        "bundesland": "Hessen"
    },
    {
        "abr": "FD",
        "kreis": "Landkreis Fulda",
        "kurz": "FulDa",
        "bundesland": "Hessen"
    },
    {
        "abr": "FDB",
        "kreis": "Landkreis Aichach-Friedberg",
        "kurz": "FrieDBerg",
        "bundesland": "Bayern"
    },
    {
        "abr": "FDS",
        "kreis": "Landkreis Freudenstadt",
        "kurz": "FreuDenStadt",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "FEU",
        "kreis": "Landkreis Ansbach",
        "kurz": "FEUchtwangen",
        "bundesland": "Bayern"
    },
    {
        "abr": "FF",
        "kreis": "Stadt Frankfurt (Oder)",
        "kurz": "FrankFurt",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "FFB",
        "kreis": "Landkreis Fürstenfeldbruck",
        "kurz": "FürstenFeldBruck",
        "bundesland": "Bayern"
    },
    {
        "abr": "FG",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "FreiberG",
        "bundesland": "Sachsen"
    },
    {
        "abr": "FI",
        "kreis": "Landkreis Elbe-Elster",
        "kurz": "FInsterwalde",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "FKB",
        "kreis": "Landkreis Waldeck-Frankenberg",
        "kurz": "FranKenBerg",
        "bundesland": "Hessen"
    },
    {
        "abr": "FL",
        "kreis": "Stadt Flensburg",
        "kurz": "FLensburg",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "FLÖ",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "FLÖha",
        "bundesland": "Sachsen"
    },
    {
        "abr": "FN",
        "kreis": "Bodenseekreis",
        "kurz": "FriedrichshafeN",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "FO",
        "kreis": "Landkreis Forchheim",
        "kurz": "FOrchheim",
        "bundesland": "Bayern"
    },
    {
        "abr": "FOR",
        "kreis": "Landkreis Spree-Neiße",
        "kurz": "FORst",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "FR",
        "kreis": "Stadt Freiburg im Breisgau (AA–MZ 100–999 und NA–ZZ 100–9999)* / Landkreis Breisgau-Hochschwarzwald (sonst)*",
        "kurz": "FReiburg",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "FRG",
        "kreis": "Landkreis Freyung-Grafenau",
        "kurz": "FReyung, Grafenau",
        "bundesland": "Bayern"
    },
    {
        "abr": "FRI",
        "kreis": "Landkreis Friesland",
        "kurz": "FRIesland",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "FRW",
        "kreis": "Landkreis Märkisch-Oderland",
        "kurz": "FReienWalde",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "FS",
        "kreis": "Landkreis Freising",
        "kurz": "FreiSing",
        "bundesland": "Bayern"
    },
    {
        "abr": "FT",
        "kreis": "Stadt Frankenthal (Pfalz)",
        "kurz": "FrankenThal",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "FTL",
        "kreis": "Landkreis Sächsische Schweiz-Osterzgebirge",
        "kurz": "FreiTaL",
        "bundesland": "Sachsen"
    },
    {
        "abr": "FÜ",
        "kreis": "Stadt Fürth (AA–ZZ 100–999)* / Landkreis Fürth (sonst)*",
        "kurz": "FÜrth",
        "bundesland": "Bayern"
    },
    {
        "abr": "FÜS",
        "kreis": "Landkreis Ostallgäu",
        "kurz": "FÜSsen",
        "bundesland": "Bayern"
    },
    {
        "abr": "FW",
        "kreis": "Landkreis Oder-Spree",
        "kurz": "FürstenWalde",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "FZ",
        "kreis": "Schwalm-Eder-Kreis",
        "kurz": "FritZlar",
        "bundesland": "Hessen"
    },
    {
        "abr": "G",
        "kreis": "Stadt Gera",
        "kurz": "Gera",
        "bundesland": "Thüringen"
    },
    {
        "abr": "GA",
        "kreis": "Altmarkkreis Salzwedel",
        "kurz": "GArdelegen",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "GAN",
        "kreis": "Landkreis Northeim",
        "kurz": "GANdersheim",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "GAP",
        "kreis": "Landkreis Garmisch-Partenkirchen",
        "kurz": "GArmisch-Partenkirchen",
        "bundesland": "Bayern"
    },
    {
        "abr": "GC",
        "kreis": "Landkreis Zwickau",
        "kurz": "GlauChau",
        "bundesland": "Sachsen"
    },
    {
        "abr": "GD",
        "kreis": "Ostalbkreis",
        "kurz": "GmünD",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "GDB",
        "kreis": "Landkreis Nordwestmecklenburg",
        "kurz": "GaDeBusch",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "GE",
        "kreis": "Stadt Gelsenkirchen",
        "kurz": "GElsenkirchen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GEL",
        "kreis": "Kreis Kleve",
        "kurz": "GELdern",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GEO",
        "kreis": "Landkreis Haßberge (A und B 1000–9999) / Landkreis Schweinfurt (sonst)",
        "kurz": "GErOlzhofen",
        "bundesland": "Bayern"
    },
    {
        "abr": "GER",
        "kreis": "Landkreis Germersheim",
        "kurz": "GERmersheim",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "GF",
        "kreis": "Landkreis Gifhorn",
        "kurz": "GiFhorn",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "GG",
        "kreis": "Kreis Groß-Gerau",
        "kurz": "Groß-Gerau",
        "bundesland": "Hessen"
    },
    {
        "abr": "GHA",
        "kreis": "Landkreis Leipzig",
        "kurz": "GeitHAin",
        "bundesland": "Sachsen"
    },
    {
        "abr": "GHC",
        "kreis": "Landkreis Wittenberg",
        "kurz": "GräfenHainiChen",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "GI",
        "kreis": "Landkreis Gießen",
        "kurz": "GIeßen",
        "bundesland": "Hessen"
    },
    {
        "abr": "GK",
        "kreis": "Kreis Heinsberg",
        "kurz": "GeilenKirchen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GL",
        "kreis": "Rheinisch-Bergischer Kreis",
        "kurz": "GLadbach",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GLA",
        "kreis": "Kreis Recklinghausen",
        "kurz": "GLAdbeck",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GM",
        "kreis": "Oberbergischer Kreis",
        "kurz": "GumMersbach",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GMN",
        "kreis": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
        "kurz": "GrimMeN",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "GN",
        "kreis": "Main-Kinzig-Kreis ohne die Stadt Hanau",
        "kurz": "GelnhauseN",
        "bundesland": "Hessen"
    },
    {
        "abr": "GNT",
        "kreis": "Landkreis Jerichower Land",
        "kurz": "GeNThin",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "GÖ",
        "kreis": "Landkreis Göttingen / Stadt Göttingen (sonst)* / übriger Landkreis (AA–ZZ 100–9999 ohne PD)*",
        "kurz": "GÖttingen",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "GOA",
        "kreis": "Rhein-Hunsrück-Kreis",
        "kurz": "GOAr",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "GOH",
        "kreis": "Rhein-Lahn-Kreis",
        "kurz": "GOarsHausen",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "GP",
        "kreis": "Landkreis Göppingen",
        "kurz": "GöpPingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "GR",
        "kreis": "Landkreis Görlitz",
        "kurz": "GöRlitz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "GRA",
        "kreis": "Landkreis Freyung-Grafenau",
        "kurz": "GRAfenau",
        "bundesland": "Bayern"
    },
    {
        "abr": "GRH",
        "kreis": "Landkreis Meißen",
        "kurz": "GRoßenHain",
        "bundesland": "Sachsen"
    },
    {
        "abr": "GRI",
        "kreis": "Landkreis Rottal-Inn (B, I, O und Q 100–999)",
        "kurz": "GRIesbach",
        "bundesland": "Bayern"
    },
    {
        "abr": "GRM",
        "kreis": "Landkreis Leipzig",
        "kurz": "GRimMa",
        "bundesland": "Sachsen"
    },
    {
        "abr": "GRZ",
        "kreis": "Landkreis Greiz",
        "kurz": "GReiZ",
        "bundesland": "Thüringen"
    },
    {
        "abr": "GS",
        "kreis": "Landkreis Goslar",
        "kurz": "GoSlar",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "GT",
        "kreis": "Kreis Gütersloh",
        "kurz": "GüTersloh",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GTH",
        "kreis": "Landkreis Gotha",
        "kurz": "GoTHa",
        "bundesland": "Thüringen"
    },
    {
        "abr": "GÜ",
        "kreis": "Landkreis Rostock",
        "kurz": "GÜstrow",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "GUB",
        "kreis": "Landkreis Spree-Neiße",
        "kurz": "GUBen",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "GUN",
        "kreis": "Landkreis Weißenburg-Gunzenhausen",
        "kurz": "GUNzenhausen",
        "bundesland": "Bayern"
    },
    {
        "abr": "GV",
        "kreis": "Rhein-Kreis Neuss",
        "kurz": "GreVenbroich",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "GVM",
        "kreis": "Landkreis Nordwestmecklenburg",
        "kurz": "GreVesMühlen",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "GW",
        "kreis": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
        "kurz": "GreifsWald",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "GZ",
        "kreis": "Landkreis Günzburg",
        "kurz": "GünZburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "H",
        "kreis": "Region Hannover / Stadt Hannover (AA–ZZ 100–999, BA–BZ und FA–GZ 1000–9999)* / übrige Region (sonst)*",
        "kurz": "Hannover",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HA",
        "kreis": "Stadt Hagen",
        "kurz": "HAgen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HAB",
        "kreis": "Landkreis Bad Kissingen",
        "kurz": "HAmmelBurg",
        "bundesland": "Bayern"
    },
    {
        "abr": "HAL",
        "kreis": "Stadt Halle (Saale)",
        "kurz": "HALle",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "HAM",
        "kreis": "Stadt Hamm",
        "kurz": "HAMm",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HAS",
        "kreis": "Landkreis Haßberge",
        "kurz": "HASsfurt",
        "bundesland": "Bayern"
    },
    {
        "abr": "HB",
        "kreis": "Stadt Bremen, Senat und Bürgerschaft (sonst) / Stadt Bremerhaven (A–Z 1000–9999)",
        "kurz": "Hansestadt Bremen",
        "bundesland": "Bremen"
    },
    {
        "abr": "HBN",
        "kreis": "Landkreis Hildburghausen",
        "kurz": "HildBurghauseN",
        "bundesland": "Thüringen"
    },
    {
        "abr": "HBS",
        "kreis": "Landkreis Harz",
        "kurz": "HalBerStadt",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "HC",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "HainiChen",
        "bundesland": "Sachsen"
    },
    {
        "abr": "HCH",
        "kreis": "Landkreis Freudenstadt (YQ, QY, YV, VY und ZQ 100 bis 999) / Zollernalbkreis (sonst)",
        "kurz": "HeCHingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "HD",
        "kreis": "Stadt Heidelberg (sonst)* / Rhein-Neckar-Kreis (AA–ZZ 100–9999)*",
        "kurz": "HeiDelberg",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "HDH",
        "kreis": "Landkreis Heidenheim",
        "kurz": "HeiDenHeim",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "HDL",
        "kreis": "Landkreis Börde",
        "kurz": "HalDensLeben",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "HE",
        "kreis": "Landkreis Helmstedt",
        "kurz": "HElmstedt",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HEB",
        "kreis": "Landkreis Nürnberger Land",
        "kurz": "HErsBruck",
        "bundesland": "Bayern"
    },
    {
        "abr": "HEF",
        "kreis": "Landkreis Hersfeld-Rotenburg",
        "kurz": "HErsFeld",
        "bundesland": "Hessen"
    },
    {
        "abr": "HEI",
        "kreis": "Kreis Dithmarschen",
        "kurz": "HEIde",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "HEL",
        "kreis": "Hessen, Landesregierung und Landtag",
        "kurz": "HEssischer Landtag",
        "bundesland": "Hessen"
    },
    {
        "abr": "HER",
        "kreis": "Stadt Herne",
        "kurz": "HERne",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HET",
        "kreis": "Landkreis Mansfeld-Südharz",
        "kurz": "HETtstedt",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "HF",
        "kreis": "Kreis Herford",
        "kurz": "HerFord",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HG",
        "kreis": "Hochtaunuskreis",
        "kurz": "HomburG",
        "bundesland": "Hessen"
    },
    {
        "abr": "HGN",
        "kreis": "Landkreis Ludwigslust-Parchim",
        "kurz": "HaGeNow",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "HGW",
        "kreis": "Stadt Greifswald (große kreisangehörige Stadt im Landkreis Vorpommern-Greifswald)",
        "kurz": "Hansestadt GreifsWald",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "HH",
        "kreis": "Freie und Hansestadt Hamburg, Senat und Bürgerschaft",
        "kurz": "Hansestadt Hamburg",
        "bundesland": "Hamburg"
    },
    {
        "abr": "HHM",
        "kreis": "Burgenlandkreis",
        "kurz": "HoHenMölsen",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "HI",
        "kreis": "Landkreis Hildesheim",
        "kurz": "HIldesheim",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HIG",
        "kreis": "Landkreis Eichsfeld",
        "kurz": "HeilIGenstadt",
        "bundesland": "Thüringen"
    },
    {
        "abr": "HIP",
        "kreis": "Landkreis Roth",
        "kurz": "HIlPoltstein",
        "bundesland": "Bayern"
    },
    {
        "abr": "HK",
        "kreis": "Landkreis Heidekreis",
        "kurz": "HeideKreis",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HL",
        "kreis": "Stadt Lübeck",
        "kurz": "Hansestadt Lübeck",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "HM",
        "kreis": "Landkreis Hameln-Pyrmont",
        "kurz": "HaMeln",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HMÜ",
        "kreis": "Landkreis Göttingen ohne die Stadt Göttingen",
        "kurz": "Hann. MÜnden",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HN",
        "kreis": "Stadt Heilbronn (sonst)* / Landkreis Heilbronn (AA–MZ 100–9999 und NA–ZZ 100–999)*",
        "kurz": "HeilbronN",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "HO",
        "kreis": "Stadt Hof (sonst)* / Landkreis Hof (AA–ZZ 100–9999)*",
        "kurz": "HOf",
        "bundesland": "Bayern"
    },
    {
        "abr": "HOG",
        "kreis": "Landkreis Kassel",
        "kurz": "HOfGeismar",
        "bundesland": "Hessen"
    },
    {
        "abr": "HOH",
        "kreis": "Landkreis Haßberge",
        "kurz": "HOfHeim",
        "bundesland": "Bayern"
    },
    {
        "abr": "HOL",
        "kreis": "Landkreis Holzminden",
        "kurz": "HOLzminden",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "HOM",
        "kreis": "Saarpfalz-Kreis ohne die Stadt St. Ingbert",
        "kurz": "HOMburg",
        "bundesland": "Saarland"
    },
    {
        "abr": "HOR",
        "kreis": "Landkreis Freudenstadt",
        "kurz": "HORb",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "HÖS",
        "kreis": "Landkreis Erlangen-Höchstadt",
        "kurz": "HÖchStadt",
        "bundesland": "Bayern"
    },
    {
        "abr": "HOT",
        "kreis": "Landkreis Zwickau",
        "kurz": "HOhensTein",
        "bundesland": "Sachsen"
    },
    {
        "abr": "HP",
        "kreis": "Kreis Bergstraße",
        "kurz": "HepPenheim",
        "bundesland": "Hessen"
    },
    {
        "abr": "HR",
        "kreis": "Schwalm-Eder-Kreis",
        "kurz": "HombeRg",
        "bundesland": "Hessen"
    },
    {
        "abr": "HRO",
        "kreis": "Stadt Rostock",
        "kurz": "Hansestadt ROstock",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "HS",
        "kreis": "Kreis Heinsberg",
        "kurz": "HeinSberg",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HSK",
        "kreis": "Hochsauerlandkreis",
        "kurz": "HochSauerlandKreis",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HST",
        "kreis": "Stadt Stralsund (große kreisangehörige Stadt im Landkreis Vorpommern-Rügen)",
        "kurz": "Hansestadt STralsund",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "HU",
        "kreis": "Stadt Hanau (Sonderstatusstadt im Main-Kinzig-Kreis) / Main-Kinzig-Kreis (übriges Kreisgebiet)",
        "kurz": "HanaU",
        "bundesland": "Hessen"
    },
    {
        "abr": "HV",
        "kreis": "Landkreis Stendal",
        "kurz": "HaVelberg",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "HVL",
        "kreis": "Landkreis Havelland",
        "kurz": "HaVelLand",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "HWI",
        "kreis": "Stadt Wismar (große kreisangehörige Stadt im Landkreis Nordwestmecklenburg)",
        "kurz": "Hansestadt WIsmar",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "HX",
        "kreis": "Kreis Höxter",
        "kurz": "HöXter",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "HY",
        "kreis": "Landkreis Bautzen",
        "kurz": "HoYerswerda",
        "bundesland": "Sachsen"
    },
    {
        "abr": "HZ",
        "kreis": "Landkreis Harz",
        "kurz": "HarZ",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "IGB",
        "kreis": "Stadt St. Ingbert (Mittelstadt im Saarpfalz-Kreis)",
        "kurz": "InGBert",
        "bundesland": "Saarland"
    },
    {
        "abr": "IK",
        "kreis": "Ilm-Kreis",
        "kurz": "Ilm-Kreis",
        "bundesland": "Thüringen"
    },
    {
        "abr": "IL",
        "kreis": "Ilm-Kreis",
        "kurz": "ILmenau",
        "bundesland": "Thüringen"
    },
    {
        "abr": "ILL",
        "kreis": "Landkreis Neu-Ulm",
        "kurz": "ILLertissen",
        "bundesland": "Bayern"
    },
    {
        "abr": "IN",
        "kreis": "Stadt Ingolstadt",
        "kurz": "INgolstadt",
        "bundesland": "Bayern"
    },
    {
        "abr": "IZ",
        "kreis": "Kreis Steinburg",
        "kurz": "ItZehoe",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "J",
        "kreis": "Stadt Jena",
        "kurz": "Jena",
        "bundesland": "Thüringen"
    },
    {
        "abr": "JE",
        "kreis": "Landkreis Wittenberg",
        "kurz": "JEssen",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "JL",
        "kreis": "Landkreis Jerichower Land",
        "kurz": "Jerichower Land",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "JÜL",
        "kreis": "Kreis Düren",
        "kurz": "JÜLich",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "K",
        "kreis": "Stadt Köln",
        "kurz": "Köln",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "KA",
        "kreis": "Stadt Karlsruhe (AA–MZ 100–999 und NA–ZZ 100–9999)* / Landkreis Karlsruhe (sonst)*",
        "kurz": "KArlsruhe",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "KB",
        "kreis": "Landkreis Waldeck-Frankenberg",
        "kurz": "KorBach",
        "bundesland": "Hessen"
    },
    {
        "abr": "KC",
        "kreis": "Landkreis Kronach",
        "kurz": "KronaCh",
        "bundesland": "Bayern"
    },
    {
        "abr": "KE",
        "kreis": "Stadt Kempten (Allgäu)",
        "kurz": "KEmpten",
        "bundesland": "Bayern"
    },
    {
        "abr": "KEH",
        "kreis": "Landkreis Kelheim",
        "kurz": "KElHeim",
        "bundesland": "Bayern"
    },
    {
        "abr": "KEL",
        "kreis": "Ortenaukreis",
        "kurz": "KEhL",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "KEM",
        "kreis": "Landkreis Bayreuth (AT, BT, CT, DT, … YT und ZT 1–99) / Landkreis Tirschenreuth (sonst)",
        "kurz": "KEMnath",
        "bundesland": "Bayern"
    },
    {
        "abr": "KF",
        "kreis": "Stadt Kaufbeuren",
        "kurz": "KauFbeuren",
        "bundesland": "Bayern"
    },
    {
        "abr": "KG",
        "kreis": "Landkreis Bad Kissingen",
        "kurz": "KissinGen",
        "bundesland": "Bayern"
    },
    {
        "abr": "KH",
        "kreis": "Landkreis Bad Kreuznach",
        "kurz": "KreuznacH",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "KI",
        "kreis": "Stadt Kiel",
        "kurz": "KIel",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "KIB",
        "kreis": "Donnersbergkreis",
        "kurz": "KIrchheimBolanden",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "KK",
        "kreis": "Kreis Viersen",
        "kurz": "Kempen, Krefeld",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "KL",
        "kreis": "Stadt Kaiserslautern (sonst)* / Landkreis Kaiserslautern (AA–ZZ 100–999)*",
        "kurz": "KaisersLautern",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "KLE",
        "kreis": "Kreis Kleve",
        "kurz": "KLEve",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "KLZ",
        "kreis": "Altmarkkreis Salzwedel",
        "kurz": "KLötZe",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "KM",
        "kreis": "Landkreis Bautzen",
        "kurz": "KaMenz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "KN",
        "kreis": "Landkreis Konstanz ohne die Gemeinde Büsingen am Hochrhein",
        "kurz": "KoNstanz",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "KO",
        "kreis": "Stadt Koblenz",
        "kurz": "KOblenz",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "KÖN",
        "kreis": "Landkreis Rhön-Grabfeld",
        "kurz": "KÖNigshofen",
        "bundesland": "Bayern"
    },
    {
        "abr": "KÖT",
        "kreis": "Landkreis Anhalt-Bitterfeld",
        "kurz": "KÖThen",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "KÖZ",
        "kreis": "Landkreis Cham",
        "kurz": "KÖtZting",
        "bundesland": "Bayern"
    },
    {
        "abr": "KR",
        "kreis": "Stadt Krefeld",
        "kurz": "KRefeld",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "KRU",
        "kreis": "Landkreis Günzburg",
        "kurz": "KRUmbach",
        "bundesland": "Bayern"
    },
    {
        "abr": "KS",
        "kreis": "Landkreis Kassel und Stadt Kassel",
        "kurz": "KasSel",
        "bundesland": "Hessen"
    },
    {
        "abr": "KT",
        "kreis": "Landkreis Kitzingen",
        "kurz": "KiTzingen",
        "bundesland": "Bayern"
    },
    {
        "abr": "KU",
        "kreis": "Landkreis Kulmbach",
        "kurz": "KUlmbach",
        "bundesland": "Bayern"
    },
    {
        "abr": "KÜN",
        "kreis": "Hohenlohekreis",
        "kurz": "KÜNzelsau",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "KUS",
        "kreis": "Landkreis Kusel",
        "kurz": "KUSel",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "KW",
        "kreis": "Landkreis Dahme-Spreewald",
        "kurz": "Königs Wusterhausen",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "KY",
        "kreis": "Landkreis Ostprignitz-Ruppin",
        "kurz": "KYritz",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "KYF",
        "kreis": "Kyffhäuserkreis",
        "kurz": "KYFfhäuser",
        "bundesland": "Thüringen"
    },
    {
        "abr": "L",
        "kreis": "Stadt Leipzig (A–T und AA–TZ) / Landkreis Leipzig (U–Z und UA–ZZ)",
        "kurz": "Leipzig",
        "bundesland": "Sachsen"
    },
    {
        "abr": "LA",
        "kreis": "Stadt Landshut (sonst)* / Landkreis Landshut (AA–ZZ 100–999 und 5000–9999)*",
        "kurz": "LAndshut",
        "bundesland": "Bayern"
    },
    {
        "abr": "LAN",
        "kreis": "Landkreis Dingolfing-Landau",
        "kurz": "LANdau",
        "bundesland": "Bayern"
    },
    {
        "abr": "LAU",
        "kreis": "Landkreis Nürnberger Land",
        "kurz": "LAUf",
        "bundesland": "Bayern"
    },
    {
        "abr": "LB",
        "kreis": "Landkreis Ludwigsburg",
        "kurz": "LudwigsBurg",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "LBS",
        "kreis": "Saale-Orla-Kreis",
        "kurz": "LoBenStein",
        "bundesland": "Thüringen"
    },
    {
        "abr": "LBZ",
        "kreis": "Landkreis Ludwigslust-Parchim",
        "kurz": "LüBZ",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "LC",
        "kreis": "Landkreis Dahme-Spreewald",
        "kurz": "LuCkau",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "LD",
        "kreis": "Stadt Landau in der Pfalz",
        "kurz": "LanDau",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "LDK",
        "kreis": "Lahn-Dill-Kreis ohne die Stadt Wetzlar",
        "kurz": "Lahn-Dill-Kreis",
        "bundesland": "Hessen"
    },
    {
        "abr": "LDS",
        "kreis": "Landkreis Dahme-Spreewald",
        "kurz": "Landkreis Dahme-Spreewald",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "LEO",
        "kreis": "Landkreis Böblingen",
        "kurz": "LEOnberg",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "LER",
        "kreis": "Landkreis Leer",
        "kurz": "LEeR",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "LEV",
        "kreis": "Stadt Leverkusen",
        "kurz": "LEVerkusen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "LF",
        "kreis": "Landkreis Altötting (C 1–999, E 1–500, I, J, M, O, Q und V 1–999) / Landkreis Berchtesgadener Land (sonst) / Landkreis Traunstein (B, F und G 1–999, DH 1–100, FZ, GH und KQ 1–999, LU 1–200, RW 1–999, TK 1–100, TS 1–999, VW 200–400 sowie WW, XX und ZZ 1–999)",
        "kurz": "LauFen",
        "bundesland": "Bayern"
    },
    {
        "abr": "LG",
        "kreis": "Landkreis Lüneburg",
        "kurz": "LüneburG",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "LH",
        "kreis": "Kreis Coesfeld / Kreis Unna",
        "kurz": "LüdingHausen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "LI",
        "kreis": "Landkreis Lindau (Bodensee)",
        "kurz": "LIndau",
        "bundesland": "Bayern"
    },
    {
        "abr": "LIB",
        "kreis": "Landkreis Elbe-Elster",
        "kurz": "LIeBenwerda",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "LIF",
        "kreis": "Landkreis Lichtenfels",
        "kurz": "LIchtenFels",
        "bundesland": "Bayern"
    },
    {
        "abr": "LIP",
        "kreis": "Kreis Lippe",
        "kurz": "LIPpe",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "LL",
        "kreis": "Landkreis Landsberg am Lech",
        "kurz": "Landsberg am Lech",
        "bundesland": "Bayern"
    },
    {
        "abr": "LM",
        "kreis": "Landkreis Limburg-Weilburg",
        "kurz": "LiMburg",
        "bundesland": "Hessen"
    },
    {
        "abr": "LN",
        "kreis": "Landkreis Dahme-Spreewald",
        "kurz": "LübbeN",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "LÖ",
        "kreis": "Landkreis Lörrach",
        "kurz": "LÖrrach",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "LÖB",
        "kreis": "Landkreis Görlitz",
        "kurz": "LÖBau",
        "bundesland": "Sachsen"
    },
    {
        "abr": "LOS",
        "kreis": "Landkreis Oder-Spree",
        "kurz": "Landkreis Oder-Spree",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "LP",
        "kreis": "Kreis Soest",
        "kurz": "LiPpstadt",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "LR",
        "kreis": "Ortenaukreis",
        "kurz": "LahR",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "LRO",
        "kreis": "Landkreis Rostock",
        "kurz": "Landkreis ROstock",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "LSA",
        "kreis": "Sachsen-Anhalt, Landesregierung, Landtag und Polizei[2]",
        "kurz": "Land Sachsen-Anhalt",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "LSN",
        "kreis": "Sachsen, Landesregierung und Landtag",
        "kurz": "Landtag SachseN",
        "bundesland": "Sachsen"
    },
    {
        "abr": "LSZ",
        "kreis": "Unstrut-Hainich-Kreis",
        "kurz": "LangenSalZa",
        "bundesland": "Thüringen"
    },
    {
        "abr": "LU",
        "kreis": "Stadt Ludwigshafen am Rhein",
        "kurz": "LUdwigshafen",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "LÜN",
        "kreis": "Kreis Unna",
        "kurz": "LÜNen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "LUP",
        "kreis": "Landkreis Ludwigslust-Parchim",
        "kurz": "LUdwigslust, Parchim",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "LWL",
        "kreis": "Landkreis Ludwigslust-Parchim",
        "kurz": "LudWigsLust",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "M",
        "kreis": "Stadt München (AA–ZZ 100–9999)* / Landkreis München (sonst)*",
        "kurz": "München",
        "bundesland": "Bayern"
    },
    {
        "abr": "MA",
        "kreis": "Stadt Mannheim",
        "kurz": "MAnnheim",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "MAB",
        "kreis": "Erzgebirgskreis",
        "kurz": "MArienBerg",
        "bundesland": "Sachsen"
    },
    {
        "abr": "MAI",
        "kreis": "Landkreis Kelheim (sonst) / Landkreis Landshut (B, F, G, I, O und Q 1–9999)",
        "kurz": "MAInburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "MAK",
        "kreis": "Landkreis Wunsiedel im Fichtelgebirge",
        "kurz": "MArKtredwitz",
        "bundesland": "Bayern"
    },
    {
        "abr": "MAL",
        "kreis": "Landkreis Landshut (B, F, G, I, O und Q 1–9999) / Landkreis Straubing-Bogen (sonst)",
        "kurz": "MALlersdorf",
        "bundesland": "Bayern"
    },
    {
        "abr": "MB",
        "kreis": "Landkreis Miesbach",
        "kurz": "MiesBach",
        "bundesland": "Bayern"
    },
    {
        "abr": "MC",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "MalChin",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "MD",
        "kreis": "Stadt Magdeburg",
        "kurz": "MagDeburg",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "ME",
        "kreis": "Kreis Mettmann",
        "kurz": "MEttmann",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MED",
        "kreis": "Kreis Dithmarschen",
        "kurz": "MElDorf",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "MEG",
        "kreis": "Schwalm-Eder-Kreis",
        "kurz": "MElsunGen",
        "bundesland": "Hessen"
    },
    {
        "abr": "MEI",
        "kreis": "Landkreis Meißen",
        "kurz": "MEIßen",
        "bundesland": "Sachsen"
    },
    {
        "abr": "MEK",
        "kreis": "Erzgebirgskreis",
        "kurz": "Mittlerer ErzgebirgsKreis",
        "bundesland": "Sachsen"
    },
    {
        "abr": "MEL",
        "kreis": "Landkreis Osnabrück",
        "kurz": "MELle",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "MER",
        "kreis": "Saalekreis",
        "kurz": "MERseburg",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "MET",
        "kreis": "Landkreis Rhön-Grabfeld",
        "kurz": "MEllrichstadT",
        "bundesland": "Bayern"
    },
    {
        "abr": "MG",
        "kreis": "Stadt Mönchengladbach",
        "kurz": "MönchenGladbach",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MGH",
        "kreis": "Main-Tauber-Kreis",
        "kurz": "MerGentHeim",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "MGN",
        "kreis": "Landkreis Schmalkalden-Meiningen",
        "kurz": "MeininGeN",
        "bundesland": "Thüringen"
    },
    {
        "abr": "MH",
        "kreis": "Stadt Mülheim an der Ruhr",
        "kurz": "MülHeim",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MHL",
        "kreis": "Unstrut-Hainich-Kreis",
        "kurz": "MüHLhausen",
        "bundesland": "Thüringen"
    },
    {
        "abr": "MI",
        "kreis": "Kreis Minden-Lübbecke",
        "kurz": "MInden",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MIL",
        "kreis": "Landkreis Miltenberg",
        "kurz": "MILtenberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "MK",
        "kreis": "Märkischer Kreis",
        "kurz": "Märkischer Kreis",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MKK",
        "kreis": "Main-Kinzig-Kreis ohne die Stadt Hanau",
        "kurz": "Main-Kinzig-Kreis",
        "bundesland": "Hessen"
    },
    {
        "abr": "ML",
        "kreis": "Landkreis Mansfeld-Südharz",
        "kurz": "Mansfelder Land",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "MM",
        "kreis": "Stadt Memmingen",
        "kurz": "MemMingen",
        "bundesland": "Bayern"
    },
    {
        "abr": "MN",
        "kreis": "Landkreis Unterallgäu",
        "kurz": "MiNdelheim",
        "bundesland": "Bayern"
    },
    {
        "abr": "MO",
        "kreis": "Kreis Wesel",
        "kurz": "MOers",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MOD",
        "kreis": "Landkreis Ostallgäu",
        "kurz": "MarktOberDorf",
        "bundesland": "Bayern"
    },
    {
        "abr": "MOL",
        "kreis": "Landkreis Märkisch-Oderland",
        "kurz": "Märkisch-OderLand",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "MON",
        "kreis": "Städteregion Aachen / Kreis Düren",
        "kurz": "MONschau",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MOS",
        "kreis": "Neckar-Odenwald-Kreis",
        "kurz": "MOSbach",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "MQ",
        "kreis": "Saalekreis",
        "kurz": "Merseburg, Querfurt",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "MR",
        "kreis": "Landkreis Marburg-Biedenkopf",
        "kurz": "MaRburg",
        "bundesland": "Hessen"
    },
    {
        "abr": "MS",
        "kreis": "Stadt Münster",
        "kurz": "MünSter",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "MSE",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "Mecklenburgische SEenplatte",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "MSH",
        "kreis": "Landkreis Mansfeld-Südharz",
        "kurz": "Mansfeld, SüdHarz",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "MSP",
        "kreis": "Landkreis Main-Spessart",
        "kurz": "Main, SPessart",
        "bundesland": "Bayern"
    },
    {
        "abr": "MST",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "Mecklenburg-STrelitz",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "MTK",
        "kreis": "Main-Taunus-Kreis",
        "kurz": "Main-Taunus-Kreis",
        "bundesland": "Hessen"
    },
    {
        "abr": "MTL",
        "kreis": "Landkreis Leipzig",
        "kurz": "MuldenTaL",
        "bundesland": "Sachsen"
    },
    {
        "abr": "MÜ",
        "kreis": "Landkreis Mühldorf am Inn",
        "kurz": "MÜhldorf",
        "bundesland": "Bayern"
    },
    {
        "abr": "MÜB",
        "kreis": "Landkreis Bayreuth (A–M 100–999 und N–Z 1–99) / Landkreis Hof (sonst)",
        "kurz": "MÜnchBerg",
        "bundesland": "Bayern"
    },
    {
        "abr": "MÜR",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "MÜRitz",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "MVL",
        "kreis": "Mecklenburg-Vorpommern, Landesregierung, Landtag und Polizei[2]",
        "kurz": "Mecklenburg-Vorpommerscher Landtag",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "MW",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "MittWeida",
        "bundesland": "Sachsen"
    },
    {
        "abr": "MY",
        "kreis": "Landkreis Mayen-Koblenz",
        "kurz": "MaYen",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "MYK",
        "kreis": "Landkreis Mayen-Koblenz",
        "kurz": "MaYen, Koblenz",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "MZ",
        "kreis": "Stadt Mainz (AA–KY 100–9999 und LA–ZZ 100–999)* / Landkreis Mainz-Bingen (sonst)",
        "kurz": "MainZ",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "MZG",
        "kreis": "Landkreis Merzig-Wadern",
        "kurz": "MerZiG",
        "bundesland": "Saarland"
    },
    {
        "abr": "N",
        "kreis": "Stadt Nürnberg (A–Z 1000–9999 und AA–ZZ 100–9999)* / Landkreis Nürnberger Land (A–Z 1–999)*",
        "kurz": "Nürnberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "NAB",
        "kreis": "Landkreis Amberg-Sulzbach (B, F und G 1–999) / Landkreis Schwandorf (sonst)",
        "kurz": "NABburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "NAI",
        "kreis": "Landkreis Hof",
        "kurz": "NAIla",
        "bundesland": "Bayern"
    },
    {
        "abr": "NAU",
        "kreis": "Landkreis Havelland",
        "kurz": "NAUen",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "NB",
        "kreis": "Stadt Neubrandenburg (große kreisangehörige Stadt im Landkreis Mecklenburgische Seenplatte)",
        "kurz": "NeuBrandenburg",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "ND",
        "kreis": "Landkreis Neuburg-Schrobenhausen",
        "kurz": "Neuburg an der Donau",
        "bundesland": "Bayern"
    },
    {
        "abr": "NDH",
        "kreis": "Landkreis Nordhausen",
        "kurz": "NorDHausen",
        "bundesland": "Thüringen"
    },
    {
        "abr": "NE",
        "kreis": "Rhein-Kreis Neuss",
        "kurz": "NEuss",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "NEA",
        "kreis": "Landkreis Neustadt an der Aisch-Bad Windsheim",
        "kurz": "NEustadt an der Aisch",
        "bundesland": "Bayern"
    },
    {
        "abr": "NEB",
        "kreis": "Burgenlandkreis",
        "kurz": "NEBra",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "NEC",
        "kreis": "Stadt Coburg und Landkreis Coburg (→ Zweckverband Zulassungsstelle Coburg)",
        "kurz": "NEustadt bei Coburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "NEN",
        "kreis": "Landkreis Schwandorf",
        "kurz": "NEuNburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "NES",
        "kreis": "Landkreis Rhön-Grabfeld",
        "kurz": "NEustadt an der Saale",
        "bundesland": "Bayern"
    },
    {
        "abr": "NEW",
        "kreis": "Landkreis Neustadt an der Waldnaab",
        "kurz": "NEustadt an der Waldnaab",
        "bundesland": "Bayern"
    },
    {
        "abr": "NF",
        "kreis": "Kreis Nordfriesland",
        "kurz": "NordFriesland",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "NH",
        "kreis": "Landkreis Sonneberg",
        "kurz": "NeuHaus",
        "bundesland": "Thüringen"
    },
    {
        "abr": "NI",
        "kreis": "Landkreis Nienburg/Weser",
        "kurz": "NIenburg",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "NK",
        "kreis": "Landkreis Neunkirchen",
        "kurz": "NeunKirchen",
        "bundesland": "Saarland"
    },
    {
        "abr": "NL",
        "kreis": "Niedersachsen, Landesregierung und Landtag",
        "kurz": "Niedersächsischer Landtag",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "NM",
        "kreis": "Landkreis Neumarkt in der Oberpfalz",
        "kurz": "NeuMarkt",
        "bundesland": "Bayern"
    },
    {
        "abr": "NMB",
        "kreis": "Burgenlandkreis",
        "kurz": "NauMBurg",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "NMS",
        "kreis": "Stadt Neumünster",
        "kurz": "NeuMünSter",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "NÖ",
        "kreis": "Landkreis Donau-Ries",
        "kurz": "NÖrdlingen",
        "bundesland": "Bayern"
    },
    {
        "abr": "NOH",
        "kreis": "Landkreis Grafschaft Bentheim",
        "kurz": "NOrdHorn",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "NOL",
        "kreis": "Landkreis Görlitz",
        "kurz": "Niederschlesische OberLausitz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "NOM",
        "kreis": "Landkreis Northeim",
        "kurz": "NOrtheiM",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "NOR",
        "kreis": "Landkreis Aurich",
        "kurz": "NORden",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "NP",
        "kreis": "Landkreis Ostprignitz-Ruppin",
        "kurz": "NeurupPin",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "NR",
        "kreis": "Landkreis Neuwied",
        "kurz": "Neuwied am Rhein",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "NRW",
        "kreis": "Nordrhein-Westfalen, Landesregierung, Landtag und Polizei[2]",
        "kurz": "NordRhein-Westfalen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "NT",
        "kreis": "Landkreis Esslingen",
        "kurz": "NürTingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "NU",
        "kreis": "Landkreis Neu-Ulm",
        "kurz": "Neu-Ulm",
        "bundesland": "Bayern"
    },
    {
        "abr": "NVP",
        "kreis": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
        "kurz": "NordVorPommern",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "NW",
        "kreis": "Stadt Neustadt an der Weinstraße",
        "kurz": "Neustadt an der Weinstraße",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "NWM",
        "kreis": "Landkreis Nordwestmecklenburg ohne die Stadt Wismar",
        "kurz": "NordWestMecklenburg",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "NY",
        "kreis": "Landkreis Görlitz",
        "kurz": "NieskY",
        "bundesland": "Sachsen"
    },
    {
        "abr": "NZ",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "NeustrelitZ",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "OA",
        "kreis": "Landkreis Oberallgäu",
        "kurz": "OberAllgäu",
        "bundesland": "Bayern"
    },
    {
        "abr": "OAL",
        "kreis": "Landkreis Ostallgäu",
        "kurz": "OstALlgäu",
        "bundesland": "Bayern"
    },
    {
        "abr": "OB",
        "kreis": "Stadt Oberhausen",
        "kurz": "OBerhausen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "OBB",
        "kreis": "Landkreis Miltenberg",
        "kurz": "OBernBurg",
        "bundesland": "Bayern"
    },
    {
        "abr": "OBG",
        "kreis": "Landkreis Stendal",
        "kurz": "OsterBurG",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "OC",
        "kreis": "Landkreis Börde",
        "kurz": "OsChersleben",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "OCH",
        "kreis": "Landkreis Würzburg",
        "kurz": "OCHsenfurt",
        "bundesland": "Bayern"
    },
    {
        "abr": "OD",
        "kreis": "Kreis Stormarn",
        "kurz": "OlDesloe",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "OE",
        "kreis": "Kreis Olpe",
        "kurz": "OlpE",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "OF",
        "kreis": "Landkreis Offenbach und Stadt Offenbach am Main",
        "kurz": "OFfenbach",
        "bundesland": "Hessen"
    },
    {
        "abr": "OG",
        "kreis": "Ortenaukreis",
        "kurz": "OffenburG",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "OH",
        "kreis": "Kreis Ostholstein",
        "kurz": "OstHolstein",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "OHA",
        "kreis": "Landkreis Göttingen",
        "kurz": "Osterode am HArz",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "ÖHR",
        "kreis": "Hohenlohekreis",
        "kurz": "ÖHRingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "OHV",
        "kreis": "Landkreis Oberhavel",
        "kurz": "OberHaVel",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "OHZ",
        "kreis": "Landkreis Osterholz",
        "kurz": "OsterHolZ",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "OK",
        "kreis": "Landkreis Börde",
        "kurz": "OhreKreis",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "OL",
        "kreis": "Stadt Oldenburg (AA–ZZ 100–999)* / Landkreis Oldenburg (sonst)*",
        "kurz": "OLdenburg",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "OP",
        "kreis": "Stadt Leverkusen",
        "kurz": "OPladen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "OPR",
        "kreis": "Landkreis Ostprignitz-Ruppin",
        "kurz": "OstPrignitz, Ruppin",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "OS",
        "kreis": "Stadt Osnabrück (sonst)* / Landkreis Osnabrück (AA–ZZ 100–999)*",
        "kurz": "OSnabrück",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "OSL",
        "kreis": "Landkreis Oberspreewald-Lausitz",
        "kurz": "OberSpreewald, Lausitz",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "OVI",
        "kreis": "Landkreis Schwandorf",
        "kurz": "OberVIechtach",
        "bundesland": "Bayern"
    },
    {
        "abr": "OVL",
        "kreis": "Vogtlandkreis",
        "kurz": "OberVogtLand",
        "bundesland": "Sachsen"
    },
    {
        "abr": "OZ",
        "kreis": "Landkreis Nordsachsen",
        "kurz": "OschatZ",
        "bundesland": "Sachsen"
    },
    {
        "abr": "P",
        "kreis": "Stadt Potsdam",
        "kurz": "Potsdam",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "PA",
        "kreis": "Stadt Passau (A–Z 1–9999) / Landkreis Passau (AA–ZZ 1–999)",
        "kurz": "PAssau",
        "bundesland": "Bayern"
    },
    {
        "abr": "PAF",
        "kreis": "Landkreis Pfaffenhofen an der Ilm",
        "kurz": "PfAFfenhofen",
        "bundesland": "Bayern"
    },
    {
        "abr": "PAN",
        "kreis": "Landkreis Rottal-Inn",
        "kurz": "PfArrkircheN",
        "bundesland": "Bayern"
    },
    {
        "abr": "PAR",
        "kreis": "Landkreis Kelheim (Q, Y, BB und CC 1–999) / Landkreis Neumarkt in der Oberpfalz (sonst)",
        "kurz": "PARsberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "PB",
        "kreis": "Kreis Paderborn",
        "kurz": "PaderBorn",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "PCH",
        "kreis": "Landkreis Ludwigslust-Parchim",
        "kurz": "ParCHim",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "PE",
        "kreis": "Landkreis Peine",
        "kurz": "PEine",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "PEG",
        "kreis": "Landkreis Bayreuth (B–Z 1–999) / Landkreis Forchheim (sonst) / Landkreis Nürnberger Land (A 1–999)",
        "kurz": "PEGnitz",
        "bundesland": "Bayern"
    },
    {
        "abr": "PF",
        "kreis": "Stadt Pforzheim (AA–MZ 100–999 und NA–ZZ 100–9999)* / Enzkreis (sonst)*",
        "kurz": "PForzheim",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "PI",
        "kreis": "Kreis Pinneberg",
        "kurz": "PInneberg",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "PIR",
        "kreis": "Landkreis Sächsische Schweiz-Osterzgebirge",
        "kurz": "PIRna",
        "bundesland": "Sachsen"
    },
    {
        "abr": "PL",
        "kreis": "Vogtlandkreis",
        "kurz": "PLauen",
        "bundesland": "Sachsen"
    },
    {
        "abr": "PLÖ",
        "kreis": "Kreis Plön",
        "kurz": "PLÖn",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "PM",
        "kreis": "Landkreis Potsdam-Mittelmark",
        "kurz": "Potsdam, Mittelmark",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "PN",
        "kreis": "Saale-Orla-Kreis",
        "kurz": "PößNeck",
        "bundesland": "Thüringen"
    },
    {
        "abr": "PR",
        "kreis": "Landkreis Prignitz",
        "kurz": "PRignitz",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "PRÜ",
        "kreis": "Eifelkreis Bitburg-Prüm",
        "kurz": "PRÜm",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "PS",
        "kreis": "Stadt Pirmasens (A–Z 1–9999) / Landkreis Südwestpfalz (AA–ZZ 1–999)",
        "kurz": "PirmaSens",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "PW",
        "kreis": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
        "kurz": "PaseWalk",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "PZ",
        "kreis": "Landkreis Uckermark",
        "kurz": "PrenZlau",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "QFT",
        "kreis": "Saalekreis",
        "kurz": "QuerFurT",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "QLB",
        "kreis": "Landkreis Harz",
        "kurz": "QuedLinBurg",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "R",
        "kreis": "Stadt Regensburg (AA–MM 1–999 und MN–ZZ 1000–9999)* / Landkreis Regensburg (sonst)*",
        "kurz": "Regensburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "RA",
        "kreis": "Landkreis Rastatt",
        "kurz": "RAstatt",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "RC",
        "kreis": "Vogtlandkreis",
        "kurz": "ReiChenbach",
        "bundesland": "Sachsen"
    },
    {
        "abr": "RD",
        "kreis": "Kreis Rendsburg-Eckernförde",
        "kurz": "RenDsburg",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "RDG",
        "kreis": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
        "kurz": "Ribnitz-DamGarten",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "RE",
        "kreis": "Kreis Recklinghausen",
        "kurz": "REcklinghausen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "REG",
        "kreis": "Landkreis Regen",
        "kurz": "REGen",
        "bundesland": "Bayern"
    },
    {
        "abr": "REH",
        "kreis": "Landkreis Hof (sonst) / Landkreis Wunsiedel im Fichtelgebirge (A, E, F, H, J, M, N, P, R, S, V und X 1–999, AA, FF, GG, OO und ZZ 100–999 sowie AU 900–999)",
        "kurz": "REHau",
        "bundesland": "Bayern"
    },
    {
        "abr": "REI",
        "kreis": "Landkreis Berchtesgadener Land",
        "kurz": "REIchenhall",
        "bundesland": "Bayern"
    },
    {
        "abr": "RG",
        "kreis": "Landkreis Meißen",
        "kurz": "Riesa, Großenhain",
        "bundesland": "Sachsen"
    },
    {
        "abr": "RH",
        "kreis": "Landkreis Roth",
        "kurz": "RotH",
        "bundesland": "Bayern"
    },
    {
        "abr": "RI",
        "kreis": "Landkreis Schaumburg",
        "kurz": "RInteln",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "RID",
        "kreis": "Landkreis Kelheim",
        "kurz": "RIeDenburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "RIE",
        "kreis": "Landkreis Meißen",
        "kurz": "RIEsa",
        "bundesland": "Sachsen"
    },
    {
        "abr": "RL",
        "kreis": "Landkreis Mittelsachsen",
        "kurz": "RochLitz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "RM",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "Röbel/Müritz",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "RN",
        "kreis": "Landkreis Havelland",
        "kurz": "RatheNow",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "RO",
        "kreis": "Stadt Rosenheim (sonst)* / Landkreis Rosenheim (AA–ZZ 100–9999)*",
        "kurz": "ROsenheim",
        "bundesland": "Bayern"
    },
    {
        "abr": "ROD",
        "kreis": "Landkreis Cham (sonst) / Landkreis Schwandorf (B 1–500, F 1–700, G 50–400 und I 100–1000)",
        "kurz": "RODing",
        "bundesland": "Bayern"
    },
    {
        "abr": "ROF",
        "kreis": "Landkreis Hersfeld-Rotenburg",
        "kurz": "ROtenburg an der Fulda",
        "bundesland": "Hessen"
    },
    {
        "abr": "ROK",
        "kreis": "Donnersbergkreis",
        "kurz": "ROcKenhausen",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "ROL",
        "kreis": "Landkreis Kelheim (A bis Z)* / Landkreis Landshut (sonst)*",
        "kurz": "ROttenburg an der Laaber",
        "bundesland": "Bayern"
    },
    {
        "abr": "ROS",
        "kreis": "Landkreis Rostock",
        "kurz": "ROStock",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "ROT",
        "kreis": "Landkreis Ansbach",
        "kurz": "ROthenburg ob der Tauber",
        "bundesland": "Bayern"
    },
    {
        "abr": "ROW",
        "kreis": "Landkreis Rotenburg (Wümme)",
        "kurz": "ROtenburg (Wümme)",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "RP",
        "kreis": "Rhein-Pfalz-Kreis",
        "kurz": "Rhein-Pfalz",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "RPL",
        "kreis": "Rheinland-Pfalz, Landesregierung, Landtag und Polizei[2]",
        "kurz": "Rheinland-Pfälzischer Landtag",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "RS",
        "kreis": "Stadt Remscheid",
        "kurz": "RemScheid",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "RSL",
        "kreis": "Stadt Dessau-Roßlau",
        "kurz": "RosSLau",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "RT",
        "kreis": "Landkreis Reutlingen",
        "kurz": "ReuTlingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "RU",
        "kreis": "Landkreis Saalfeld-Rudolstadt",
        "kurz": "RUdolstadt",
        "bundesland": "Thüringen"
    },
    {
        "abr": "RÜD",
        "kreis": "Rheingau-Taunus-Kreis",
        "kurz": "RÜDesheim",
        "bundesland": "Hessen"
    },
    {
        "abr": "RÜG",
        "kreis": "Landkreis Vorpommern-Rügen",
        "kurz": "RÜGen",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "RV",
        "kreis": "Landkreis Ravensburg",
        "kurz": "RaVensburg",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "RW",
        "kreis": "Landkreis Rottweil",
        "kurz": "RottWeil",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "RZ",
        "kreis": "Kreis Herzogtum Lauenburg",
        "kurz": "RatZeburg",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "S",
        "kreis": "Stadt Stuttgart",
        "kurz": "Stuttgart",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "SAB",
        "kreis": "Landkreis Trier-Saarburg",
        "kurz": "SAarBurg",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "SAD",
        "kreis": "Landkreis Schwandorf",
        "kurz": "SchwAnDorf",
        "bundesland": "Bayern"
    },
    {
        "abr": "SAL",
        "kreis": "Saarland, Landesregierung, Landtag und Polizei[2]",
        "kurz": "SAarländischer Landtag",
        "bundesland": "Saarland"
    },
    {
        "abr": "SAN",
        "kreis": "Landkreis Hof (W–Z 1–999) / Landkreis Kronach (S–V 1–9999 und AA–IZ 1–999) / Landkreis Kulmbach (A–R 1–9999 und JA–ZZ 1–999)",
        "kurz": "StAdtsteiNach",
        "bundesland": "Bayern"
    },
    {
        "abr": "SAW",
        "kreis": "Altmarkkreis Salzwedel",
        "kurz": "SAlzWedel",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SB",
        "kreis": "Regionalverband Saarbrücken ohne die Stadt Völklingen",
        "kurz": "SaarBrücken",
        "bundesland": "Saarland"
    },
    {
        "abr": "SBG",
        "kreis": "Landkreis Vorpommern-Greifswald",
        "kurz": "StrasBurG",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "SBK",
        "kreis": "Salzlandkreis",
        "kurz": "SchöneBecK",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SC",
        "kreis": "Stadt Schwabach",
        "kurz": "SChwabach",
        "bundesland": "Bayern"
    },
    {
        "abr": "SCZ",
        "kreis": "Saale-Orla-Kreis",
        "kurz": "SChleiZ",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SDH",
        "kreis": "Kyffhäuserkreis",
        "kurz": "SonDersHausen",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SDL",
        "kreis": "Landkreis Stendal",
        "kurz": "StenDaL",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SDT",
        "kreis": "Landkreis Uckermark",
        "kurz": "SchweDT",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "SE",
        "kreis": "Kreis Segeberg",
        "kurz": "SEgeberg",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "SEB",
        "kreis": "Landkreis Sächsische Schweiz-Osterzgebirge",
        "kurz": "SEBnitz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "SEE",
        "kreis": "Landkreis Märkisch-Oderland",
        "kurz": "SEElow",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "SEF",
        "kreis": "Landkreis Neustadt an der Aisch-Bad Windsheim",
        "kurz": "SchEinFeld",
        "bundesland": "Bayern"
    },
    {
        "abr": "SEL",
        "kreis": "Landkreis Wunsiedel im Fichtelgebirge",
        "kurz": "SELb",
        "bundesland": "Bayern"
    },
    {
        "abr": "SFB",
        "kreis": "Landkreis Oberspreewald-Lausitz",
        "kurz": "SenFtenBerg",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "SFT",
        "kreis": "Salzlandkreis",
        "kurz": "StaßFurT",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SG",
        "kreis": "Stadt Solingen",
        "kurz": "SolinGen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "SGH",
        "kreis": "Landkreis Mansfeld-Südharz",
        "kurz": "SanGerHausen",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SH",
        "kreis": "Schleswig-Holstein, Landesregierung, Landtag und Polizei[2]",
        "kurz": "Schleswig-Holstein",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "SHA",
        "kreis": "Landkreis Schwäbisch Hall",
        "kurz": "Schwäbisch HAll",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "SHG",
        "kreis": "Landkreis Schaumburg",
        "kurz": "StadtHaGen",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "SHK",
        "kreis": "Saale-Holzland-Kreis",
        "kurz": "Saale-Holzland-Kreis",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SHL",
        "kreis": "Stadt Suhl",
        "kurz": "SuHL",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SI",
        "kreis": "Kreis Siegen-Wittgenstein",
        "kurz": "SIegen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "SIG",
        "kreis": "Landkreis Sigmaringen",
        "kurz": "SIGmaringen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "SIM",
        "kreis": "Rhein-Hunsrück-Kreis",
        "kurz": "SIMmern",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "SK",
        "kreis": "Saalekreis",
        "kurz": "SaaleKreis",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SL",
        "kreis": "Kreis Schleswig-Flensburg",
        "kurz": "SchLeswig",
        "bundesland": "Schleswig-Holstein"
    },
    {
        "abr": "SLE",
        "kreis": "Kreis Düren / Kreis Euskirchen",
        "kurz": "SchLEiden",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "SLF",
        "kreis": "Landkreis Saalfeld-Rudolstadt",
        "kurz": "SaaLFeld",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SLG",
        "kreis": "Landkreis Ravensburg",
        "kurz": "SauLGau",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "SLK",
        "kreis": "Salzlandkreis",
        "kurz": "SalzLandKreis",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "SLN",
        "kreis": "Landkreis Altenburger Land",
        "kurz": "SchmölLN",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SLS",
        "kreis": "Landkreis Saarlouis",
        "kurz": "SaarLouiS",
        "bundesland": "Saarland"
    },
    {
        "abr": "SLÜ",
        "kreis": "Main-Kinzig-Kreis ohne die Stadt Hanau",
        "kurz": "SchLÜchtern",
        "bundesland": "Hessen"
    },
    {
        "abr": "SLZ",
        "kreis": "Wartburgkreis",
        "kurz": "SaLZungen",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SM",
        "kreis": "Landkreis Schmalkalden-Meiningen",
        "kurz": "SchMalkalden",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SMÜ",
        "kreis": "Landkreis Augsburg",
        "kurz": "SchwabMÜnchen",
        "bundesland": "Bayern"
    },
    {
        "abr": "SN",
        "kreis": "Stadt Schwerin",
        "kurz": "SchweriN",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "SO",
        "kreis": "Kreis Soest",
        "kurz": "SOest",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "SOB",
        "kreis": "Landkreis Neuburg-Schrobenhausen",
        "kurz": "SchrOBenhausen",
        "bundesland": "Bayern"
    },
    {
        "abr": "SOG",
        "kreis": "Landkreis Weilheim-Schongau",
        "kurz": "SchOnGau",
        "bundesland": "Bayern"
    },
    {
        "abr": "SOK",
        "kreis": "Saale-Orla-Kreis",
        "kurz": "Saale-Orla-Kreis",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SÖM",
        "kreis": "Landkreis Sömmerda",
        "kurz": "SÖMmerda",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SON",
        "kreis": "Landkreis Sonneberg",
        "kurz": "SONneberg",
        "bundesland": "Thüringen"
    },
    {
        "abr": "SP",
        "kreis": "Stadt Speyer",
        "kurz": "SPeyer",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "SPB",
        "kreis": "Landkreis Spree-Neiße",
        "kurz": "SPremBerg",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "SPN",
        "kreis": "Landkreis Spree-Neiße",
        "kurz": "SPree, Neiße",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "SR",
        "kreis": "Landkreis Straubing-Bogen (AA–ZZ 1–999) / Stadt Straubing (A–Z 1–9999)",
        "kurz": "StRaubing",
        "bundesland": "Bayern"
    },
    {
        "abr": "SRB",
        "kreis": "Landkreis Märkisch-Oderland",
        "kurz": "StRausBerg",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "SRO",
        "kreis": "Saale-Holzland-Kreis",
        "kurz": "StadtROda",
        "bundesland": "Thüringen"
    },
    {
        "abr": "ST",
        "kreis": "Kreis Steinfurt",
        "kurz": "STeinfurt",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "STA",
        "kreis": "Landkreis Starnberg",
        "kurz": "STArnberg",
        "bundesland": "Bayern"
    },
    {
        "abr": "STB",
        "kreis": "Landkreis Ludwigslust-Parchim",
        "kurz": "STernBerg",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "STD",
        "kreis": "Landkreis Stade",
        "kurz": "STaDe",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "STE",
        "kreis": "Landkreis Lichtenfels",
        "kurz": "STaffelstEin",
        "bundesland": "Bayern"
    },
    {
        "abr": "STL",
        "kreis": "Erzgebirgskreis",
        "kurz": "STolLberg",
        "bundesland": "Sachsen"
    },
    {
        "abr": "SU",
        "kreis": "Rhein-Sieg-Kreis",
        "kurz": "SiegbUrg",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "SUL",
        "kreis": "Landkreis Amberg-Sulzbach",
        "kurz": "SULzbach",
        "bundesland": "Bayern"
    },
    {
        "abr": "SÜW",
        "kreis": "Landkreis Südliche Weinstraße",
        "kurz": "SÜdliche Weinstraße",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "SW",
        "kreis": "Stadt Schweinfurt (sonst)* / Landkreis Schweinfurt (AA–ZZ 100–9999)*",
        "kurz": "SchWeinfurt",
        "bundesland": "Bayern"
    },
    {
        "abr": "SWA",
        "kreis": "Rheingau-Taunus-Kreis",
        "kurz": "SchWAlbach",
        "bundesland": "Hessen"
    },
    {
        "abr": "SY",
        "kreis": "Landkreis Diepholz",
        "kurz": "SYke",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "SZ",
        "kreis": "Stadt Salzgitter",
        "kurz": "SalZgitter",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "SZB",
        "kreis": "Erzgebirgskreis",
        "kurz": "SchwarZenBerg",
        "bundesland": "Sachsen"
    },
    {
        "abr": "TBB",
        "kreis": "Main-Tauber-Kreis",
        "kurz": "TauBerBischofsheim",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "TDO",
        "kreis": "Landkreis Nordsachsen",
        "kurz": "Torgau, Delitzsch, Oschatz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "TE",
        "kreis": "Kreis Steinfurt",
        "kurz": "TEcklenburg",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "TET",
        "kreis": "Landkreis Rostock",
        "kurz": "TETerow",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "TF",
        "kreis": "Landkreis Teltow-Fläming",
        "kurz": "Teltow, Fläming",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "TG",
        "kreis": "Landkreis Nordsachsen",
        "kurz": "TorGau",
        "bundesland": "Sachsen"
    },
    {
        "abr": "THL",
        "kreis": "Thüringen, Landesregierung und Landtag",
        "kurz": "THüringer Landtag",
        "bundesland": "Thüringen"
    },
    {
        "abr": "THW",
        "kreis": "Bundesanstalt Technisches Hilfswerk",
        "kurz": "Technisches HilfsWerk",
        "bundesland": "bundesweit"
    },
    {
        "abr": "TIR",
        "kreis": "Landkreis Tirschenreuth",
        "kurz": "TIRschenreuth",
        "bundesland": "Bayern"
    },
    {
        "abr": "TO",
        "kreis": "Landkreis Nordsachsen",
        "kurz": "Torgau, Oschatz",
        "bundesland": "Sachsen"
    },
    {
        "abr": "TÖL",
        "kreis": "Landkreis Bad Tölz-Wolfratshausen",
        "kurz": "TÖLz",
        "bundesland": "Bayern"
    },
    {
        "abr": "TP",
        "kreis": "Landkreis Uckermark",
        "kurz": "TemPlin",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "TR",
        "kreis": "Landkreis Trier-Saarburg und Stadt Trier",
        "kurz": "TRier",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "TS",
        "kreis": "Landkreis Traunstein",
        "kurz": "TraunStein",
        "bundesland": "Bayern"
    },
    {
        "abr": "TT",
        "kreis": "Bodenseekreis",
        "kurz": "TeTtnang",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "TÜ",
        "kreis": "Landkreis Tübingen",
        "kurz": "TÜbingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "TUT",
        "kreis": "Landkreis Tuttlingen",
        "kurz": "TUTtlingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "ÜB",
        "kreis": "Bodenseekreis / Landkreis Ravensburg",
        "kurz": "ÜBerlingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "UE",
        "kreis": "Landkreis Uelzen",
        "kurz": "UElzen",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "UEM",
        "kreis": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
        "kurz": "UEckerMünde",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "UFF",
        "kreis": "Landkreis Neustadt an der Aisch-Bad Windsheim",
        "kurz": "UFFenheim",
        "bundesland": "Bayern"
    },
    {
        "abr": "UH",
        "kreis": "Unstrut-Hainich-Kreis",
        "kurz": "Unstrut, Hainich",
        "bundesland": "Thüringen"
    },
    {
        "abr": "UL",
        "kreis": "Stadt Ulm (sonst)* / Alb-Donau-Kreis (AA–MZ 100–999, NA–ZZ 100–9999 )*",
        "kurz": "ULm",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "UM",
        "kreis": "Landkreis Uckermark",
        "kurz": "UckerMark",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "UN",
        "kreis": "Kreis Unna",
        "kurz": "UNna",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "USI",
        "kreis": "Hochtaunuskreis",
        "kurz": "USIngen",
        "bundesland": "Hessen"
    },
    {
        "abr": "V",
        "kreis": "Vogtlandkreis",
        "kurz": "Vogtland",
        "bundesland": "Sachsen"
    },
    {
        "abr": "VAI",
        "kreis": "Landkreis Ludwigsburg",
        "kurz": "VAIhingen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "VB",
        "kreis": "Vogelsbergkreis",
        "kurz": "VogelsBerg",
        "bundesland": "Hessen"
    },
    {
        "abr": "VEC",
        "kreis": "Landkreis Vechta",
        "kurz": "VEChta",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "VER",
        "kreis": "Landkreis Verden",
        "kurz": "VERden",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "VG",
        "kreis": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
        "kurz": "Vorpommern, Greifswald",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "VIB",
        "kreis": "Landkreis Landshut (ohne B, G, I, O und Q 1–9999) / Landkreis Mühldorf a.Inn (G 1–9999) / Landkreis Rottal-Inn (B, I, O und Q 1–999)",
        "kurz": "VIlsBiburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "VIE",
        "kreis": "Kreis Viersen",
        "kurz": "VIErsen",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "VIT",
        "kreis": "Landkreis Regen",
        "kurz": "VIechTach",
        "bundesland": "Bayern"
    },
    {
        "abr": "VK",
        "kreis": "Stadt Völklingen (Mittelstadt im Regionalverband Saarbrücken)",
        "kurz": "VölKlingen",
        "bundesland": "Saarland"
    },
    {
        "abr": "VOH",
        "kreis": "Landkreis Neustadt an der Waldnaab",
        "kurz": "VOHenstrauß",
        "bundesland": "Bayern"
    },
    {
        "abr": "VR",
        "kreis": "Landkreis Vorpommern-Rügen ohne die Stadt Stralsund",
        "kurz": "Vorpommern, Rügen",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "VS",
        "kreis": "Schwarzwald-Baar-Kreis",
        "kurz": "Villingen-Schwenningen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "W",
        "kreis": "Stadt Wuppertal",
        "kurz": "Wuppertal",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WA",
        "kreis": "Landkreis Waldeck-Frankenberg",
        "kurz": "WAldeck",
        "bundesland": "Hessen"
    },
    {
        "abr": "WAF",
        "kreis": "Kreis Warendorf",
        "kurz": "WArendorF",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WAK",
        "kreis": "Wartburgkreis",
        "kurz": "WArtburgKreis",
        "bundesland": "Thüringen"
    },
    {
        "abr": "WAN",
        "kreis": "Stadt Herne",
        "kurz": "WANne",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WAR",
        "kreis": "Kreis Höxter",
        "kurz": "WARburg",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WAT",
        "kreis": "Stadt Bochum",
        "kurz": "WATtenscheid",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WB",
        "kreis": "Landkreis Wittenberg",
        "kurz": "WittenBerg",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "WBS",
        "kreis": "Landkreis Eichsfeld",
        "kurz": "WorBiS",
        "bundesland": "Thüringen"
    },
    {
        "abr": "WDA",
        "kreis": "Landkreis Zwickau",
        "kurz": "WerDAu",
        "bundesland": "Sachsen"
    },
    {
        "abr": "WE",
        "kreis": "Stadt Weimar",
        "kurz": "WEimar",
        "bundesland": "Thüringen"
    },
    {
        "abr": "WEL",
        "kreis": "Landkreis Limburg-Weilburg",
        "kurz": "WEiLburg",
        "bundesland": "Hessen"
    },
    {
        "abr": "WEN",
        "kreis": "Stadt Weiden in der Oberpfalz",
        "kurz": "WEideN",
        "bundesland": "Bayern"
    },
    {
        "abr": "WER",
        "kreis": "Landkreis Augsburg (A–Z 7000–9999 und YA–YZ 1–999) / Landkreis Dillingen an der Donau (sonst)",
        "kurz": "WERtingen",
        "bundesland": "Bayern"
    },
    {
        "abr": "WES",
        "kreis": "Kreis Wesel",
        "kurz": "WESel",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WF",
        "kreis": "Landkreis Wolfenbüttel",
        "kurz": "WolFenbüttel",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WG",
        "kreis": "Landkreis Ravensburg",
        "kurz": "WanGen",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "WHV",
        "kreis": "Stadt Wilhelmshaven",
        "kurz": "WilhelmsHaVen",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WI",
        "kreis": "Stadt Wiesbaden",
        "kurz": "WIesbaden",
        "bundesland": "Hessen"
    },
    {
        "abr": "WIL",
        "kreis": "Landkreis Bernkastel-Wittlich",
        "kurz": "WIttLich",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "WIS",
        "kreis": "Landkreis Nordwestmecklenburg",
        "kurz": "WISmar",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "WIT",
        "kreis": "Ennepe-Ruhr-Kreis",
        "kurz": "WITten",
        "bundesland": "Nordrhein-Westfalen"
    },
    {
        "abr": "WIZ",
        "kreis": "Werra-Meißner-Kreis",
        "kurz": "WItZenhausen",
        "bundesland": "Hessen"
    },
    {
        "abr": "WK",
        "kreis": "Landkreis Ostprignitz-Ruppin",
        "kurz": "WittstocK",
        "bundesland": "Brandenburg"
    },
    {
        "abr": "WL",
        "kreis": "Landkreis Harburg",
        "kurz": "Winsen (Luhe)",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WLG",
        "kreis": "Landkreis Vorpommern-Greifswald ohne die Stadt Greifswald",
        "kurz": "WoLGast",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "WM",
        "kreis": "Landkreis Weilheim-Schongau",
        "kurz": "WeilheiM",
        "bundesland": "Bayern"
    },
    {
        "abr": "WMS",
        "kreis": "Landkreis Börde",
        "kurz": "WolMirStedt",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "WN",
        "kreis": "Rems-Murr-Kreis",
        "kurz": "WaiblingeN",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "WND",
        "kreis": "Landkreis St. Wendel",
        "kurz": "WeNDel",
        "bundesland": "Saarland"
    },
    {
        "abr": "WO",
        "kreis": "Stadt Worms",
        "kurz": "WOrms",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "WOB",
        "kreis": "Stadt Wolfsburg",
        "kurz": "WOlfsBurg",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WOH",
        "kreis": "Landkreis Kassel",
        "kurz": "WOlfHagen",
        "bundesland": "Hessen"
    },
    {
        "abr": "WOL",
        "kreis": "Landkreis Freudenstadt (A bis E 9000–9999) / Ortenaukreis (sonst)",
        "kurz": "WOLfach",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "WOR",
        "kreis": "Landkreis Bad Tölz-Wolfratshausen (sonst) / Landkreis München (F und O 10–9999) / Landkreis Starnberg (B und G 10–9999)",
        "kurz": "WOlfRatshausen",
        "bundesland": "Bayern"
    },
    {
        "abr": "WOS",
        "kreis": "Landkreis Freyung-Grafenau",
        "kurz": "WOlfStein",
        "bundesland": "Bayern"
    },
    {
        "abr": "WR",
        "kreis": "Landkreis Harz",
        "kurz": "WernigeRode",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "WRN",
        "kreis": "Landkreis Mecklenburgische Seenplatte ohne die Stadt Neubrandenburg",
        "kurz": "WaReN",
        "bundesland": "Mecklenburg-Vorpommern"
    },
    {
        "abr": "WS",
        "kreis": "Landkreis Mühldorf a.Inn (Q 1–9999, QA bis QZ 1–9999) / Landkreis Rosenheim (sonst)",
        "kurz": "WasSerburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "WSF",
        "kreis": "Burgenlandkreis",
        "kurz": "WeisSenFels",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "WST",
        "kreis": "Landkreis Ammerland",
        "kurz": "WesterSTede",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WSW",
        "kreis": "Landkreis Görlitz",
        "kurz": "WeisSWasser",
        "bundesland": "Sachsen"
    },
    {
        "abr": "WT",
        "kreis": "Landkreis Waldshut",
        "kurz": "WaldshuT",
        "bundesland": "Baden-Württemberg"
    },
    {
        "abr": "WTL",
        "kreis": "Landkreis Osnabrück",
        "kurz": "WitTLage",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WTM",
        "kreis": "Landkreis Wittmund",
        "kurz": "WitTMund",
        "bundesland": "Niedersachsen"
    },
    {
        "abr": "WÜ",
        "kreis": "Stadt Würzburg (AA–NZ 100–9999 und OA–ZZ 100–999)* / Landkreis Würzburg (sonst)*",
        "kurz": "WÜrzburg",
        "bundesland": "Bayern"
    },
    {
        "abr": "WUG",
        "kreis": "Landkreis Weißenburg-Gunzenhausen",
        "kurz": "WeißenbUrG",
        "bundesland": "Bayern"
    },
    {
        "abr": "WÜM",
        "kreis": "Landkreis Cham",
        "kurz": "WaldMÜnchen (mit einem Buchstabendreher)",
        "bundesland": "Bayern"
    },
    {
        "abr": "WUN",
        "kreis": "Landkreis Wunsiedel im Fichtelgebirge",
        "kurz": "WUNsiedel",
        "bundesland": "Bayern"
    },
    {
        "abr": "WUR",
        "kreis": "Landkreis Leipzig",
        "kurz": "WURzen",
        "bundesland": "Sachsen"
    },
    {
        "abr": "WW",
        "kreis": "Westerwaldkreis",
        "kurz": "WesterWald",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "WZ",
        "kreis": "Stadt Wetzlar (Sonderstatusstadt im Lahn-Dill-Kreis)",
        "kurz": "WetZlar",
        "bundesland": "Hessen"
    },
    {
        "abr": "WZL",
        "kreis": "Landkreis Börde",
        "kurz": "WanZLeben",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "X",
        "kreis": "Internationale Hauptquartiere (NATO)",
        "kurz": "willkürlich gewählt",
        "bundesland": "bundesweit"
    },
    {
        "abr": "Y",
        "kreis": "Bundeswehr",
        "kurz": "„Y“ wurde genommen, da es bei Gründung der Bundeswehr noch frei war. „BW“ o. Ä. war bereits vergeben. (BW = Bundes-Wasserstraßen-Verwaltung)",
        "bundesland": "bundesweit"
    },
    {
        "abr": "Z",
        "kreis": "Landkreis Zwickau",
        "kurz": "Zwickau",
        "bundesland": "Sachsen"
    },
    {
        "abr": "ZE",
        "kreis": "Landkreis Anhalt-Bitterfeld",
        "kurz": "ZErbst",
        "bundesland": "Sachsen-Anhalt"
    },
    {
        "abr": "ZEL",
        "kreis": "Landkreis Cochem-Zell",
        "kurz": "ZELl",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "ZI",
        "kreis": "Landkreis Görlitz",
        "kurz": "ZIttau",
        "bundesland": "Sachsen"
    },
    {
        "abr": "ZIG",
        "kreis": "Schwalm-Eder-Kreis",
        "kurz": "ZIeGenhain",
        "bundesland": "Hessen"
    },
    {
        "abr": "ZP",
        "kreis": "Erzgebirgskreis",
        "kurz": "ZschoPau",
        "bundesland": "Sachsen"
    },
    {
        "abr": "ZR",
        "kreis": "Landkreis Greiz",
        "kurz": "ZeulenRoda",
        "bundesland": "Thüringen"
    },
    {
        "abr": "ZW",
        "kreis": "Stadt Zweibrücken (sonst) / Landkreis Südwestpfalz (AA–ZZ 1–99)",
        "kurz": "ZWeibrücken",
        "bundesland": "Rheinland-Pfalz"
    },
    {
        "abr": "ZZ",
        "kreis": "Burgenlandkreis",
        "kurz": "ZeitZ",
        "bundesland": "Sachsen-Anhalt"
    }
]