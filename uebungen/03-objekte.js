console.log('Objekte')
console.log('=======')

 // Bislang speichern wir Werte in Variablen. 
 // Bsp.: let vorname = "Hans"
 // Jede Variable nimmt genau einen Wert auf. In dem Beispiel ist der Wert "Hans".
 // In der realen Welt gibt es Objekte, über die mehrere Werte abgespeichert werden sollen.
 // Bsp.: Schüler/innen im Schulverwaltungsprogramm.
 // Interessierende Eigenschaften: Vorname, Nachname, Geburtsdatum, Geburtsort, Klasse, Anschrift, ...
 // Bislang haben wir das so gelöst: 
 // let vorname = "Hans"
 // let klasse = "GW23A"
 // let ...
 // Problem: Die Eigenschaften stehenin keinem Zusammenhang.
 // Um den Zusammenhang zwischen einzelnen Werten herzustellen, gibt es Klassen und Objekte.
// Zunächst legt der Programmierer zur Entwicklungszeit die Baupläne (Klassen) fest, nach denen Objekte zur
// Laufzeit erstellt werden. Und das geht so: 

class Schueler{
    constructor(){
        this.Vorname
        this.Nachname
        this.Klasse
    }
}

// Die Objekte werden nun aus dem Bauplan (=Klasse) wie folgt erzeugt:

let schueler = new Schueler()
schueler.Vorname="Hans"
schueler.Nachname="Meyer"
schueler.Klasse="GW23A"

// Die Werte können wieder augegeben werden:

console.log("Nachname: " + schueler.Nachname + ", Vorname: "+schueler.Vorname)

let schueler2 = new Schueler()
schueler2.Nachname = "Müller"
schueler2.Vorname = "Pit"
schueler2.Klasse = "GW23A"

console.log("Nachname: " + schueler2.Nachname + ", Vorname: " + schueler2.Nachname)

// Um aus dem Bauplan (=Klasse) ein konkretes objekt zuerzeugen, sind 3 Schritte notwendig:
// 1. DEKLARATION:      let schueler
//                      Bei der Deklaration wird bekanntgegeben, dass es ein Objekt namens schueler geben soll.
// 2. INSTANZIIERUNG:   = new Schueler()
//                      Bei der Instanziierung werden Speicherzellen im Arbeitsspeicher reserviert, um Eigen-
//                      schaften aufzunehmen.
// 3. INITIALISIERUNG:  schueler.Nachname = "Schmidt"
//                      Bei der Initialisierung werden konkrete Werte in die Speicherzellen geschrieben.

console.log("Aufgabe 1")
// Für eine Autovermietung sollen Autos verwaltet werden. 
// Erstellt den Bauplan, um dann drei Objekte zu instanziieren.

class Auto{
    constructor(){
        this.Marke
        this.Baujahr
        this.Farbe
    }
}


// Aus dem Bauplan werden nun drei Objekte deklariert und instanziiert.

let borAb123 = new Auto();
let borXy876 = new Auto();
let bohQz253 = new Auto ();

// Initialisierung
 borAb123.Marke = "Audi"
 borAb123.Baujahr = 2023 // Zahlen ohne Anführungszeichen
 borAb123.Farbe = "schwarz"

console.log("Marke: " + borAb123.Marke + ", Baujahr: " + borAb123.Baujahr + ", Farbe: " + borAb123.Farbe)

console.log("Aufgabe 2")
// Deklaiere, instanziiere und initialisiere ein Objekt der realen Welt der eigenen Wahl.

class Fahrrad{
    constructor(){
        this.Marke
        this.Größe
        this.Farbe
    }
}

let fahrrad1 = new Fahrrad()

fahrrad1.Marke="KTM"
fahrrad1.Größe="28 Zoll"
fahrrad1.Farbe="weiß"

console.log("Marke: "+ fahrrad1.Marke+ ", Größe: " + fahrrad1.Größe+ ", Farbe: " +fahrrad1.Farbe)