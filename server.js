// Klassendefinition des Kunden

class Kunde{constructor(){this.Nachname
							this.Vorname
							this.Benutzername
							this.Kennwort
							// IstEIngeloggt ist ein Boolean
							// Der Wert ist entweder wahr oder falsch
							this.IstEingeloggt		}}


// Klassendefinition deklariert und instanziiert
let kunde = new Kunde()

// Kundenobkejt initialisieren

kunde.Nachname="Kiff"
kunde.Vorname="Pit"
kunde.Benutzername="pk"
kunde.Kennwort="123"
kunde.IstEingeloggt= false

// Klassendefinition Kundenberater

class Kundenberater{constructor(){	this.Nachname
									this.Vorname
									this.Telefonnummer
									this.Mail
									this.Bild					}}

// Kundenberaterobjekt deklarierern und instanziieren									

let kundenberater = new Kundenberater()

// Kundenberaterobejkt initialisieren

kundenberater.Nachname="Pass"
kundenberater.Vorname="Hildegard"
kundenberater.Telefonnummer="86543975"
kundenberater.Mail="h.pass@bank-borken.de"
kundenberater.Bild="pass.jpg"

'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.

const express = require('express');

// Der Body Parser ermöglicht es uns, Daten aus dem Kunden-Formular auf dem Server entgegenzunehmen.
// Der Body-Parser wird im Terminal mit dem Befehl 'npm install -g body-parser' installiert.

const bodyParser = require('body-parser');

// Die Anweisungen werden von oben nach unten abgearbeitet.Der Wert 3000 wird von rechts nach links 
// zugewisen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "--- wird zugewiesen an ..."

// Der Cookie-Parser ist für die Verarbeitung der Cookies unserer App zuständig.
// Mit dem cookie Parser können wir cookies setzen und auslesen und löschen.

const cookieParser=require('cookie-parser')

const PORT = 3000;

// Der Wert '0.0.0.0' wird zugewisen an eine Konstante namens HOST.
const HOST = '0.0.0.0';

// App

const app = express();

// Es wird der App bekanntgegeben, wo die Styles zu finden sind.
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Der Bodyparser wird in der App eingebunden.

app.use(bodyParser.urlencoded({extended: true}))

// Der cookie Parser wird in die App eingebunden
// Cookies können verschlüsselt im Browser abgelegt werden.
// Dadurch kann ein im Browser gespeichertes Kennwort nicht mehr ausgelesen werden.
// Nur unsere App kann den verschlüsselten Cookie verwenden.
// Dazu wird das secret 'geheim' benutzt.
app.use(cookieParser('geheim'))

// Die App.get wird angearbeitet, sobald die Index-Seite angesurft wird.
app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden.
	// 'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird.
	// res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette  an den 
	// Browser zu senden. Das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den Browser senden.

	
		// Wenn die Zugangsdaten korrekt sind,dann wird die angesurfte Seite gerendert
	res.render('index.ejs',{});})


	// Wenn im Browser die Adresse .../agb aufgerufen wird, wird der Server aufgefordert,
	// die angefragte Seite an den Browser zurückzugeben.
	// Der Server arbeitet dazu die Funktion app.get('agb)...ab.
	app.get('/agb',(req, res)=>{

		// Der Server gibt die gerenderte EJS-Seite an den
		// Browser zurück.
		res.render('agb.ejs',{});
	});

	app.get('/hilfe',(req, res)=>{
		res.render('hilfe.ejs',{});
	});

	app.get('/kontenuebersicht', (req, res) => {
		res.render('kontenuebersicht.ejs',{});
	});

app.get('/profil',(req, res)=>{
	res.render('profil.ejs',{});
});

app.get('/postfach',(req, res)=>{
	res.render('postfach.ejs',{});
});



// Sobald die Seite "Kredit beantragen" aufgerufen wird, wird die app.get abgearbeitet.
app.get('/kreditBeantragen', (req, res) => {
	res.render('kreditBeantragen.ejs',{
		Laufzeit: "",
		Zinssatz: "",		
		Betrag: "",
		Meldung: ""
	});
});


app.get('/ueberweisung',(req, res)=>{
	res.render('ueberweisung.ejs',{});
});

// Die Funktion app.get('/geldAnlegen...) wird abgearbeitet, wenn der Benutzer die Seite geldAnlegen
// im Browser ansurft.

app.get('/geldanlegen',(req, res)=>{

	// Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	// Dazu wird die Funktion render() aufgerufen.

	res.render('geldanlegen.ejs',{

		// In der GeldAnlegen.ejs gibt es die Variablen Betrag und Laufzeit.
		// Der Server übergibt fir folgenden Werte an den Browser.

		Betrag: 120,
		Laufzeit: 2,
		Meldung: ""
	})
});

// Die Funktion app.post('geldanlegen ...) wird abgearbeitet, wenn der Kunde auf dem Formular den absende Buttton klickt. 

app.post('/geldanlegen',(req, res)=>{

	// Die Werte, die der Kunde im Formular eingegeben hat, werden an den Server gesendet.
	// Der Wert der Varialen Betrag wird aus dem body der Kundenanfrage(rq) ausgewiesen und zugewisen an die lokae Variable 
	// namens Betrag.
	
	let betrag = req.body.Betrag;
	console.log('geldanlegen: Gewünschter Betrag: '+betrag+' Euro')
	
	let laufzeit = req.body.Laufzeit;
	console.log('geldanlegen: Gewünschte Laufzeit: '+laufzeit+' Jahre')
	
	let zinssatz = 0.1
	
	let zinsen = betrag * zinssatz;
	
	res.render('geldanlegen.ejs',{
			Betrag: betrag,
			Laufzeit: laufzeit,
			Meldung: "Ihre Zinsen betragen: " + zinsen
			});
	});


	// Die app.get wird abgearbeitet, wenn die Seite im Browser angesurft wird.
	app.get('/login',(req, res)=>{
		kunde.IstEingeloggt = false
		console.log("kunde.IstEingeloggt: "+ kunde.IstEingeloggt)
		res.render('login.ejs',{
			Meldung:"Bitte Benutzername und Kennwort eingeben."
		});
	});

// Die app.post wird abgearbeitet, wenn das Formular auf der Seite abgesendet wird.
	app.post('/login',(req, res)=>{

		// Der Benutzername wird vom Browser an den Server übergeben
		let benutzername = req.body.IdKunde;
		console.log('Benutzername: '+benutzername)
		
		// Das Kennwort wird vom Browser an den Server übergeben
		let kennwort = req.body.Kennwort;
		console.log('Kennwort: '+kennwort)
		
		// Es muss geprüft werden, ob der Kunde mit diesem Benutzername das richtige 
		// Kennwort eingegeben hat.
		// Die Kontrollstruktur prüft auf die Korrektheit der Zugangsdaten.

		let meldung ="";

		if(kunde.Benutzername == benutzername && kunde.Kennwort == kennwort){
			console.log('Die Zugangsdaten wurden korrekt eingegeben')
			meldung= "Die Zugangsdaten wurden nicht korrekt eingegebn"		

			// Wenn die Eingabedaten korrekt sind, dann wird die index Seite gerendert
			res.render('index.ejs',{
				Meldung: meldung			
			});		
		}

			else{console.log('Die Zugangsdaten wurden nicht korrekt eingegeben')
				meldung= "Die Zugangsdaten wurden nicht korrekt eingegebn"
			}
		
			// Wenn die Zugangsdaten sicht korrekt sind, dann wird die login-Seite erneut gerendert
		res.render('login.ejs',{
				Meldung: meldung			
			});		
		});


		// Sobald der "Kredit berechnen"-Button gedrückt wird, wird die app.post abgearbeitet.
app.post('/kreditBeantragen', (req, res) => {

	// Der Server nimmt die Werte aus dem Browserformular entgegen:
	let zinsbetrag = req.body.Betrag;
	let laufzeit = req.body.Laufzeit;
	let zinssatz = req.body.Zinssatz;

	// Der Rückzahlungsbetrag wird berechnet
	let kredit = zinsbetrag * Math.pow(1+zinssatz/100,laufzeit);
	console.log("Rückzahlungsbetrag: " + kredit + " €.")

	// Die Funktion render() gibt die Werte an den Browser
	res.render('kreditBeantragen.ejs',{
		Laufzeit: laufzeit,
		Zinssatz: zinssatz,		
		Betrag: zinsbetrag,
		Meldung: "Rückzahlungsbetrag: " + kredit + " €."
	});
});



	// Mit listen() wird der Server angewiesen, auf den angegebenen Host und 
	// Port zu lauschen.
	app.listen(PORT, HOST);

	// Mit der Anweisung console.log() wird dem Server-Administrator auf der 
	// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
	// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt 
	// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den 
	// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht 
	// immer für eine Anweisung etwas zu tun.
	console.log(`Running on http://${HOST}:${PORT}`);
	
	// Mit der Funktion require wird die Datei in den runden Klammern eingelesen.
	// require('./uebungen/01-grundlagen.js');
	// require('./uebungen/02-boolean.js');
	// require('./uebungen/03-objekte.js');
	// require('./Klausuren/Klausur20240930.js');
	// require('./uebungen/04-funktionen.js');
	require('./uebungen/05-ueben.js')