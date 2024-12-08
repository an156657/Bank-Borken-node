/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.

const express = require('express');

// Der Body Parser ermöglicht es uns, Daten aus dem Kunden-Formular auf dem Server entgegenzunehmen.
// Der Body-Parser wird im Terminal mit dem Befehl 'npm install -g body-parser' installiert.

const bodyParser = require('body-parser');

// Die Anweisungen werden von oben nach unten abgearbeitet.Der Wert 3000 wird von rechts nach links 
// zugewisen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "--- wird zugewiesen an ..."

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

app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden.
	// 'Hello ...' ist der Wert, der an die Anweisung send() übergeben wird.
	// res.send('Hello remote world!\n');

	// Das res-Objekt kann noch mehr als nur eine Zeichenkette  an den 
	// Browser zu senden. Das res-Objekt kann mit der Funktion render()
	// eine HTML-Datei an den Browser senden.
	res.render('index.ejs',{});
});

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

app.get('/kreditbeantragen',(req, res)=>{
	res.render('kreditbeantragen.ejs',{});
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

	app.get('/login',(req, res)=>{
		res.render('login.ejs',{});
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
