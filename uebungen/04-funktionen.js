console.log('FUNKTIONEN')
console.log('==========')

// Funktionen führen Operationen aus.

let laenge = 3
let breite = 5

let flaecheninhalt = laenge*breite

console.log('Flächeninhalt: '+flaecheninhalt)

// Jetzt die Berechnung in einer Funktion: 

// Zuerst wird die Funktion erstellt:

function berechneFlaecheninhalt(laenge, breite){
    return laenge * breite
}

// In einem zweiten Schritt wird die Funktion aufgerufen:

console.log('Flächeninhalt: '+berechneFlaecheninhalt(10,10))

// Der Vorteil von Funktionen ist, dass die Berechnung im Rumpf nur einmal ausformuliert werden muss.
// Die Funktion kann dann an vielen Stellen aufgerufen werden.

// So werden Funktionen erstellt:

// 1. Das reservierte Wort function
// 2. Ein sprechender Name. D.h., der Name soll beschreiben, was die Funktion macht.
// 3. Runde Klammern am Ende nehmen Parameter entgegen. Parameter sind das, was die Funktion als 
//    Input zur Berechnung benötigt. Funktionen können mehrere oder keinen Parameter entgegennehmen.
// 4. In den geschweiften Klammern wird die Logik ausprogrammiert.
// 5. Mit dem reservierten Wort return wird das Ergebnis zurückgegeben.

console.log('Aufgabe 1')
console.log('---------')
// Berechne das Volumen eines Quaders mit einer Funktion.

function berechneVolumenQuader(laenge, breite, hoehe){return laenge*breite*hoehe}

console.log('Volumen des Quaders: '+berechneVolumenQuader(2,2,2)+ ' cm^3')



console.log('Aufgabe 2')
console.log('---------')
// Berechne den Bruttopreis aus den Nettopreis:

function berechneBruttopreis(nettopreis,mehrwertsteuersatz){return nettopreis+mehrwertsteuersatz*nettopreis}

console.log('Bruttopreis: '+berechneBruttopreis(100,0.19))



console.log('Aufgabe 3')
console.log('---------')
// Berechne die Schulnote aus der Abitur-Punktzahl.

// function punkteZuNote(punkte)
//{if(punkte==15)return '1+'
//else if(punkte==14)return "1"
//else if(punkte==13)return "1-"
//else if(punkte==12)return "2+"
//else if(punkte==11)return "2"
// else if{(punkte==10)return "2-"}}



let punkte = 10



// console.log('Schulnote: '+punkteZuNote)


console.log('Aufgabe 4')
console.log('---------')
// Funktionen können auch innerhalb von Klassen definiert werden.
// Beispiel: Kredit



class Kredit{constructor(){
    this.Laufzeit
    this.Betrag 
    this.Zinssatz

    berechneGesamtkostenAmEndeDerLaufzeit(){
        return this.Betrag*Math.pow((1+this.Zinssatz), this.Laufzeit)
    }
}}

let kredit = new Kredit()
kredit.Betrag=100
kredit.laufzeit=2
kredit.Zinssatz=0.1

console.log('Gesamtkosten: '+kredit.berechneGesamtkostenAmEndeDerLaufzeit())






















class Kredit {
    constructor(betrag, laufzeit, zinssatz) {
        this.betrag = betrag;          // Der ursprünglich geliehene Betrag
        this.laufzeit = laufzeit;      // Die Laufzeit des Kredits in Jahren
        this.zinssatz = zinssatz;      // Der jährliche Zinssatz in Prozent
    }

    berechneGesamtkostenAmEndeDerLaufzeit() {
        // Berechnung der Gesamtkosten am Ende der Laufzeit
        // Gesamtkosten = Betrag * (1 + Zinssatz/100) ^ Laufzeit
        const gesamtKosten = this.betrag * Math.pow((1 + this.zinssatz / 100), this.laufzeit);
        return gesamtKosten;
    }
}

// Beispiel für die Nutzung der Kreditklasse
const meinKredit = new Kredit(100, 1, 1); // Betrag: 100, Laufzeit: 1 Jahre, Zinssatz: 1%
console.log("Gesamtkosten am Ende der Laufzeit:", meinKredit.berechneGesamtkostenAmEndeDerLaufzeit());
