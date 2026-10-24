# 📜 Cronologia Aggiornamenti — Dialoghi Radio

Tutte le modifiche rilevanti, i miglioramenti e le nuove funzionalità introdotte nell'applicazione **Dialoghi Radio**.

---

## 🚀 Beta 1.0.3 — Agosto 2026

### 📄 Documentazione e organizzazione

* Aggiornamento della struttura del progetto e della documentazione.
* Revisione delle note di progetto e delle informazioni sullo stato della Beta.
* Miglioramento dell'organizzazione dei documenti dedicati ai tester.
* Revisione delle istruzioni di installazione e della guida utente.
* Allineamento della documentazione sul funzionamento previsto delle principali sezioni dell'app.

### 🧪 Verifica della Beta

* Maggiore chiarezza nella distinzione tra ambiente DR-TEST e produzione.
* Revisione delle informazioni sulle funzioni disponibili e su quelle ancora da verificare.
* Organizzazione delle informazioni utili per la raccolta dei feedback e per i controlli sui dispositivi.

### 🔧 Manutenzione e coerenza

* Revisione della documentazione relativa alla struttura del progetto.
* Aggiornamento delle note interne e del registro delle modifiche.
* Chiarimento dello stato delle funzioni in valutazione e degli sviluppi futuri.
* Precisazione delle condizioni necessarie per l'eventuale passaggio in produzione.

**Nota:** la Beta 1.0.3 rimane soggetta a verifiche funzionali e prove sui dispositivi. Le modifiche documentali non implicano che tutte le funzioni siano state testate o che la versione sia pronta per la pubblicazione in produzione.

---

## 🚀 Beta 1.0.4 — Ottobre 2026

### 📻 Palinsesto H24 — Prima integrazione

* Integrazione parziale del palinsesto H24 nella versione locale di DR-TEST.
* Avvio di una fase di utilizzo continuativo per verificare il comportamento della riproduzione audio.
* Oltre un mese di utilizzo della versione locale, con sessioni di riproduzione di circa quattro ore.
* Prove effettuate sia su computer sia su dispositivi mobili, senza problemi riscontrati durante l'utilizzo descritto.

### 🧪 Verifica e stabilità

* Riscontro positivo sulla stabilità del palinsesto durante le sessioni di prova effettuate.
* Prosecuzione delle verifiche sulle funzionalità già implementate.
* Necessità di completare i controlli sulle parti del palinsesto non ancora verificate.

### 📄 Documentazione e preparazione al repository di test

* Aggiornamento delle note di progetto e della struttura per descrivere la Beta 1.0.4.
* Distinzione tra le funzionalità già presenti, quelle parzialmente implementate e quelle ancora da completare.
* Preparazione della documentazione per il trasferimento della versione locale nel repository `DialoghiRadio-TEST`.
* Prevista una fase di controllo e formattazione del codice, senza modifiche intenzionali alla logica o al funzionamento dell'applicazione.

**Nota:** la Beta 1.0.4 è in preparazione per il repository di test. I risultati descritti riguardano l'utilizzo locale effettuato e non costituiscono una certificazione completa del palinsesto H24. La pubblicazione nel repository di test e l'eventuale successivo passaggio in produzione richiedono verifiche specifiche e autorizzazione esplicita.

---

🚀 Beta 1.0.2 — Luglio 2026
🌅 Nuove Funzionalità
Pensiero del Giorno
Introduzione della sezione dinamica 🌅 Oggi su Dialoghi Radio nella Home.
Caricamento automatico dal file contenuti/pensieri.json.
Selezione automatica del contenuto in base alla data (aggiornamento giornaliero).
🛠️ Miglioramenti Tecnici & Refactoring
Correzione indice Pensiero
Allineato l’indice per far coincidere il primo elemento del JSON con il primo giorno del ciclo.
Gestione errori JavaScript (difensiva)
Inseriti controlli sugli elementi DOM (if (elemento)) per evitare errori nelle pagine secondarie.
Ottimizzazione estrazione ID Spreaker
Migliorata la regex per il recupero degli ID dagli URL degli episodi.
Separazione delle responsabilità
app.js → gestione Home, Pensiero del giorno e logiche principali.
ultime-puntate.js → gestione archivio e riproduzione episodi.
📁 Struttura Contenuti
Introdotto il file:
contenuti/pensieri.json
Obiettivo:
separare i dati dinamici dal codice JavaScript.

⚙️ Beta 1.0.1 — Luglio 2026
🎨 Interfaccia e Usabilità (UI/UX)
Rimossa la dicitura “Caricamento ultima puntata” dalla Home.
Riordinato il menu principale:
Contatti e suggerimenti spostato prima di Info.
Migliorata la chiarezza della sezione Guida Utente.

Aggiornate le istruzioni di installazione PWA:

Android (Chrome):

Installa
Crea scorciatoia
Aggiungi alla schermata Home

iOS (Safari):

Aggiungi alla schermata Home
💬 Feedback Tester Integrati
Migliorata la visibilità delle sezioni di ascolto.
Semplificata la procedura di invio feedback.

🎉 Beta 1.0.0 — Luglio 2026

Prima release Beta pubblica della PWA Dialoghi Radio.

🎙️ Funzionalità Principali
Integrazione Spreaker
Connessione al feed RSS per aggiornamento automatico delle puntate.
Ultime puntate
Caricamento dinamico delle ultime 10 puntate.
Tracciamento ascolti
Funzione ✅ Già ascoltata
Salvataggio tramite localStorage
Nessun dato personale raccolto
Sezioni tematiche
📖 Percorso Biblico
🎧 Ultime Puntate
PWA
Installabile su smartphone e desktop.
🎨 Grafica & Layout
Inserita icona ufficiale.
Layout ottimizzato per mobile.
Indicatori versione Beta visibili.
📞 Comunicazione
Creata la pagina:
💬 Contatti e suggerimenti
Link email con parametri precompilati.
📚 Documentazione e Gestione
Creata la guida utente (guida_utente.md)
Creato file idee future (SUGGERIMENTI_FUTURI.md)
Strutturato repository GitHub con versionamento e backup
🔮 Sviluppi Futuri (Roadmap)

* Progetto «Accanto a Te».
* Spazio interattivo per gli ascoltatori.
* Notifiche push.
* Menu laterale (Drawer).
* Riproduzione audio in background, da valutare.

**Palinsesto H24 — Beta 1.0.4:** progetto separato, attualmente in fase di progettazione e sviluppo. Non è una funzionalità completata della Beta 1.0.3.

❤️ Dialoghi Radio
