console.log("Booleans");
console.log("========");

console.log("Boolsche Werte sind Wahrheitswerte, die wahr (true) oder falsch (false) annehmen können.");

// Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 1");

if(true){
    console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist false.")}

    // Weil in dieser Aufgabe die Prüfung immer wahr ist if(true), wird immer die Anweisung hinter if ausgeführt. 
    // Die Anweisung hinter else kommt niemals zur Ausführung.

console.log("Aufgabe 2");

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 7

// Hier wird mit einem Prüfoperator auf wahr oder falsch geprüft.

// Prüfoperatoren: 
// ==   : Prüfung auf Gleichheit im Wert Bsp.: if (1 == '1') true
// ===  : Prüfung auf Gleichheit im Wert und im Typ Bsp.: if (1 === '1') false
// >    : größer als
// <    : kleiner als
// >=   : größer oder gleich
// <=   : kleiner oder gleich


if(a>6){console.log("Das ist wahr")}
else{console.log("Das ist falsch")}

console.log("Aufgabe 3")

// Wenn die Schülerin 16 oder jünger ist, muss sie "Fahrrad fahren".
// Wenn sie 17 ist, darf sie "begleitet fahren".
// Wenn sie 18 ist, darf sie "fahren"
// Voraussetzung für das Fahren mit dem Auto ist der Führerschein.

let alter = 18; 
let fuehrerschein = true;

if(alter <= 16 || fuehrerschein === false){ // Wenn die Schülerin 16 ist oder keinen Führerschein hat oder beides, dann Fahrrad fahren.
    console.log("Die Schülerin muss Fahrrad fahren.")}
if(alter === 17 && fuehrerschein === true){ // Wenn 17 und Führerschein, dann begleitet fahren.
    console.log("Die Schülerin darf begleitet fahren.")}
if(alter >17 && fuehrerschein === true){// Wenn älter 17 und Führerschein, dann fahren.
    console.log("Die Schülerin darf fahren.")}


// Andere Lösung
if(fuehrerschein){ // Führerschein ist bereits true oder false. Es bedarf keines Vergleichsoperators.

    if(alter === 17){console.log("begleitet fahren")}
    else{console.log("fahren")}

}else{console.log("Fahrrad fahren")
}

console.log('Aufgabe 4')
// Zahlen können in Javascript true oder false sein.

let zahl = 0;

if (zahl) { console.log('Die Zahl ' +zahl+ ' nimmt den boolschen Wert true an.')
} else {console.log('Die Zahl ' +zahl+ ' nimmt den boolschen Wert false an.')}

// Positive Zahlen sind true.
// Die Ziffer Null ist false.
// Negative Zahlen sind true.

console.log('Aufgabe 5')

// Auf einem Sparkonto soll bei einem positiven Kontostand auf der Konsole stehen: "Zinsen berechenen"
// Wenn kein Guthaben existiert: "keine Zinsen"

let kontostand = 10;

if(kontostand){ // Auf den Prüfoperator kann verzichtet werden, da Zahlen bereits true oder false sind.
    console.log('Zinsen berechnen für Kontostand ' +kontostand)}
else{console.log('keine Zinsen, da Kontostand 0')}

console.log('Aufgabe 6')
// Wenn die Temperatur positiv ist, soll auf der Konsole stehen: "nach draußen gehen"
// Wenn die Temperatur 0°C beträgt: "drinnen bleiben"

let temperatur = 10;

if(temperatur){
    console.log('Bei ' +temperatur+ '°C nach draußen gehen')}
else{console.log('Bei ' +temperatur+ '°C drinnen bleiben.')}

console.log('Aufgabe6.1')
// In der Bundesliga gibt es Punkte für Spiele.
// Sieg:            3 Punkte
// Unentschieden:   1 Punkt
// Niederlage:      0 Punkte

let spielausgang = "niederlage";
let mannschaft = "Deutschland";

if(spielausgang == 'sieg'){
    console.log('Es gibt 3 Punkte.')}

if(spielausgang == 'unentschieden'){
    console.log('Es gibt 1 Punkt.')}

if(spielausgang == 'niederlage'){
    console.log('Es gibt 0 Punkte.')}