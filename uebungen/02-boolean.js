console.log("Booleans");
console.log("========")

console.log("Boolsche Werte sind Wahrheitswerte, die wahr (true) oder falsch (false) annehmen können.")

// Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 1")

if(true){
    console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist false.")}

console.log("Aufgabe 2")

// In Erweiterung von Aufgabe 1 soll der Ausdruck dynamisch entweder true oder false sein.

let a = 5
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
