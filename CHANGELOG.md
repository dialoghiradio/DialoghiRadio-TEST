# 📜 Cronologia Aggiornamenti — Dialoghi Radio

Tutte le modifiche rilevanti, i miglioramenti e le nuove funzionalità introdotte nell'applicazione **Dialoghi Radio**.

---

🚀 Beta 1.0.3 — Agosto 2026
📄 Documentazione & Organizzazione
Struttura progetto aggiornata
Revisione completa del file struttura_progetto.md
Migliorata la leggibilità e organizzazione delle sezioni
Note progetto
Creato il file note_progetto.md
Definizione chiara di:
obiettivi
architettura
logiche principali
ambiente di test
Documentazione tester
Inserito e strutturato il file messaggio_tester_beta.md
Definito messaggio standard per raccolta feedback
Aggiunta sezione domande guida per i tester
🧪 Miglioramenti fase Beta
Migliorata la gestione della fase di test:
separazione tra documentazione tecnica e comunicazione tester
maggiore chiarezza nelle istruzioni di installazione
organizzazione dei file nella cartella tester/
🔧 Manutenzione e Coerenza
Allineamento tra:
CHANGELOG.md
struttura progetto
documentazione interna
Migliorata la coerenza generale del progetto in vista della produzione

💡 Nota:
Questa versione non introduce nuove funzionalità per l’utente finale, ma consolida la struttura del progetto e la gestione della fase Beta.

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
 Progetto Accanto a Te
 Spazio interattivo per gli ascoltatori
 Notifiche push
 Menu laterale (Drawer)
 Streaming live H24
 Riproduzione audio in background

❤️ Dialoghi Radio
