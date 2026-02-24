<?php
//prüfen ob Datei nicht größer als * Zeilen
define('MAX_LENGTH', 1000);

// https://de.wikipedia.org/wiki/Liste_der_Kfz-Kennzeichen_in_Deutschland Tabelle in libro office excel kopieren
// CSV Datei. Feldtrenner ";" Texttrenner "'" Zellinhalt wie angezeigt speichern
$handle = fopen("numberplate-22-07-2020.csv", "r");
$array = [];


for ($i = 0; $i <= MAX_LENGTH; $i++) {

    // Eine Zeile einlesen und löschen
    $daten = fgetcsv($handle, MAX_LENGTH, ';');

    // wenn die Tabelle Titel hat dann überspringen
    if (strpos($daten[0], 'Abk.') !== false || strpos($daten[0], 'Bearbeiten') !== false) {
        continue;
    }

    // wenn die Datei keine Zeilen hat dann Schleife beenden
    if (!$daten) {
        break;
    }

    // "Debug" - wenn Zeile html Elementen <ul> und <li> hat
    if (empty($daten[1])) {
        echo $i . 'error';
    }

    // "Debug" - wenn Zeile html Elementen <ul> und <li> hat
    if (!isset($daten[2])) {
        echo $i . ' - ';
    }

    // wenn Abkürzung fehlt dann letzte Zeile vom Array holen und neue Daten hinzufügen
    if (empty($daten[0])) {
        $lastLine = array_pop($array);
        $lastLine['kreis'] .= ' / ' . $daten[1];
        $array[] = $lastLine;
        continue;
    }

    // sonst einfach zum Array hinzufügen
    $array[] = [
        'abr' => $daten[0],
        'kreis' => $daten[1],
        'kurz' => $daten[2],
        'bundesland' => $daten[3],
    ];

}


print_r(json_encode($array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
