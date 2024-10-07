console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

// Das ist der Bauplan,aus dem im Folgenden die Würfel-Objkete erzeugt werden sollen.
// Ohne diese Klassendefinition können keine Objekte instanziiert werden.

class Wuerfel{constructor(){  this.Laenge
                            this.Breite
                            this.Hoehe  
                            this.Volumen }
                            // Die Funktion BerechneVolumen soll das Volumen berechnen
                            BerechneVolumen(){
                                this.Volumen=this.Laenge*this.Breite*this.Hoehe
                            }}

 // Deklaration (= Bakanntmachung), Instanziierung (= Speicherzellen reservieren)
let wuerfel1=new Wuerfel();

// Initialisierung

wuerfel1.Laenge=100
wuerfel1.Breite=100
wuerfel1.Hoehe=100
wuerfel1.Volumen = wuerfel1.Laenge*wuerfel1.Breite*wuerfel1.Hoehe

let volumen=wuerfel1.Laenge*wuerfel1.Breite*wuerfel1.Hoehe

console.log('Bei einer Länge von ' +wuerfel1.Laenge+ ' cm, einer Höhe von ' +wuerfel1.Hoehe+ ' cm und einer Höhe von ' +wuerfel1.Hoehe+ ' cm beträgt das Volumen des Würfels '+volumen+ ' cm3')

// NEU:Man kann die Berechnung auch zu einer Funktion innerhalb der Klasse abbilden.
// Dazu muss in die Klasse unterhalb des Constructors die Funktion BerechneVolumen() eingebaut werden.
// Alternative Berechnung mit der Funktion BerechneVolumen():

wuerfel1.BerechneVolumen();
console.log('Das Volumen beträgt: ' +wuerfel1.Volumen);


// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(volumen>=1000){console.log('Das Volumen des Würfels beträgt 1000 oder mehr Quadratzentimeter.')}



// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.

let wurzelAusVolumen=Math.sqrt(volumen)
console.log('Die Wurzel aus dem Volumen beträgt: '+wurzelAusVolumen+ ' cm. Dies ist ungefähr die Kantenlänge des Würfels')


// Um die 3. Würzel zu ziehen, kann die Funktion Math.pow verwendet werden.
wuerfel1.Kantenlaenge=(Math.pow(wuerfel.Volumen,1/3))
console.log('Die Kantenlänge beträgt: ' +wuerfel1.Kantenlaenge+ ' cm.')

console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class
class Zeugnis{constructor(){    this.Mathe
                                this.Englisch
                                this.Deutsch
                                this.Sport
                                this.Biologie
                                this.Religion
                                this.Niederländisch
                                this.Physik             }}


// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.
let zeugnisHans=new Zeugnis()

zeugnisHans.Mathe=2;
zeugnisHans.Englisch=2;
zeugnisHans.Deutsch=2;
zeugnisHans.Sport=2;
zeugnisHans.Biologie=2;
zeugnisHans.Religion=2;
zeugnisHans.Niederländisch=2;
zeugnisHans.Physik=2;


// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.
console.log('Hans hat folgende Noten: Mathe '+zeugnisHans.Mathe+' Englisch '+zeugnisHans.Englisch+ ' Deutsch '+zeugnisHans.Deutsch+' Sport '+zeugnisHans.Sport+' Biologie '+zeugnisHans.Biologie)
console.log('Religion '+zeugnisHans.Religion+ ' Niederländisch '+zeugnisHans.Niederländisch+ ' Physik '+zeugnisHans.Physik)

// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.

let durchschnittsnote= (zeugnisHans.Mathe + zeugnisHans.Englisch + zeugnisHans.Deutsch + zeugnisHans.Sport+ zeugnisHans.Biologie + zeugnisHans.Religion + zeugnisHans.Niederländisch + zeugnisHans.Physik)/8

console.log(' Hans hat die Durchschnittsnote: '+durchschnittsnote)



// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.


let durchschnittsnoteLisa=3
let durchschnittsnoteTom=4
let durchschnittsnoteMax=5

let x =Math.min(durchschnittsnote, durchschnittsnoteLisa, durchschnittsnoteTom, durchschnittsnoteMax)

if(x=durchschnittsnote){console.log('Hans hatmit die beste Durchschnittsnote und zwar: '+x)}
else{console.log('Hanshat nicht die beste Durchschnittsnote')}

// console.log('Die beste Durchschnittsnote ist: '+x)
//!!!!!!!!!!!!!!!!!!!!!

console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 
class Zeitung{constructor(){this.Rabatt
                            this.NettoRechnungsbetrag
                            this.MwStProzentsatz
                            this.BruttoRechnungsbetrag
                            this.Skonto
                            this.Zahlungsbetrag
                            this.MwSt           }}


let zeitung = new Zeitung()


// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

let produktart="Zeitung"

zeitung.NettoRechnungsbetrag=370

if(produktart==="Zeitung" || produktart ==="Lebensmittel" || produktart==="Buch"){zeitung.MwStProzentsatz=7}
else{zeitung.MwStProzentsatz=19}



console.log('Der Nettorechnungsbetrag beträgt: '+zeitung.NettoRechnungsbetrag+ ' Euro und der MwStProzentsatz beträgt: '+zeitung.MwStProzentsatz+ ' Prozent')

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

zeitung.MwSt=zeitung.NettoRechnungsbetrag*zeitung.MwStProzentsatz/100

console.log('Die Mehrwertsteuer der Zeitung beträgt: '+zeitung.MwSt+ ' Euro.')



// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

zeitung.BruttoRechnungsbetrag = zeitung.NettoRechnungsbetrag+zeitung.MwSt

console.log('Der Brutto-Rechnungsbetrag beträgt: '+zeitung.BruttoRechnungsbetrag+ ' Euro')

// 3e) NUR KLAUSURSCHREIBER   /////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

let skonto;

if(zeitung.BruttoRechnungsbetrag<900){skonto=2}
if(zeitung.BruttoRechnungsbetrag<800){skonto=1.9}
if(zeitung.BruttoRechnungsbetrag<700){skonto=1.8}
if(zeitung.BruttoRechnungsbetrag<600){skonto=1.7}
if(zeitung.BruttoRechnungsbetrag<500){skonto=1.6}
if(zeitung.BruttoRechnungsbetrag<400){skonto=1.5}
if(zeitung.BruttoRechnungsbetrag<300){skonto=1.4}
if(zeitung.BruttoRechnungsbetrag<200){skonto=1.1}
if(zeitung.BruttoRechnungsbetrag<100){skonto=1}


console.log('Der Skontobetrag beträgt: '+skonto+ ' Euro')


console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.

class Auto{constructor(){this.Name
                        this.Leistung
                        this.Geschwindigkeit
                        this.Preis
                        this.Verbrauch}}

let borAb123 = new Auto()
let borBa456= new Auto()

borAb123.Name="Audi"
borAb123.Leistung= 1200
borAb123.Geschwindigkeit=200
borAb123.Preis=10000
borAb123.Verbrauch=100

borBa456.Name="BMW"
borBa456.Leistung=1100
borBa456.Geschwindigkeit=190
borBa456.Preis=20000
borBa456.Verbrauch=200

// 4b) // NUR KLAUSURSCHREIBER  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.

// if(borAb123.Preis<borBa456.Preis && borAb123.Verbrauch < borBa456.Verbrauch){console.log('Es soll Auto borAb123 werden')}
 //else{if(borAb123.Preis=borBa456.Preis && borAb123.Verbrauch=borBa456.Verbrauch){if(borAb123.Gerschwindigkeit>borBa456.Geschwindigkeit){console.log('Es wird Auto borAb123')}}
 //else{if(borAb123.Geschwindigkeit=borBa456.Geschwindigkeit){if(borAb123.Leistung>borBa456.Leistung){console.log('Es wird Auto borAb123')}}}
//else{console.log('Es wird Auto borBa456')}}