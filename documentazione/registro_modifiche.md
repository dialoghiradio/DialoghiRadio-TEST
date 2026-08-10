# Registro modifiche - Dialoghi Radio

---

# Beta 1.0.3

**Periodo:** agosto 2026

**Stato:** in sviluppo / test

---

## Configurazione globale

Creato e utilizzato il file:

`config.js`

per centralizzare alcune impostazioni dell'applicazione.

La configurazione comprende:

* collegamento WhatsApp per le richieste di preghiera;
* collegamento al gruppo WhatsApp della Comunità;
* numero e codice della conferenza telefonica;
* indirizzo email per i contatti;
* collegamento al Percorso Biblico;
* versione dell'app;
* ambiente di test;
* feed audio;
* collegamento all'archivio Castbox.

La configurazione permette di modificare i collegamenti principali senza intervenire direttamente nei diversi file HTML o JavaScript.

---

## Nuova sezione Comunità

Aggiunta la sezione dedicata alla **Comunità**.

La sezione è pensata per favorire:

* richieste di preghiera;
* partecipazione;
* preparazione alla conferenza;
* condivisione tra gli ascoltatori.

Sono stati predisposti collegamenti dedicati alle diverse modalità di partecipazione.

---

## Richieste di preghiera

Aggiunto il collegamento WhatsApp per inviare una richiesta di preghiera.

La funzione utilizza il collegamento configurato in `config.js`.

Il canale viene mantenuto separato dalle altre funzioni della Comunità.

---

## Conferenza telefonica

Aggiunto l'accesso diretto alla conferenza telefonica.

Il pulsante utilizza un collegamento telefonico con numero e codice di accesso preimpostati.

La funzione permette all'utente di entrare nella conferenza direttamente dal dispositivo.

**Stato:** funzionante, ma ancora da valutare per la gestione degli orari.

---

## Gestione WhatsApp e conferenza

È stata definita una distinzione tra le funzioni della Comunità:

* 🟢 WhatsApp → richiesta di preghiera / messaggi;
* 🟠 Conferenza → ingresso alla chiamata telefonica.

Questa distinzione permette di rendere immediatamente riconoscibile il tipo di azione associata al pulsante.

---

## Condivisione

Sono state definite e/o verificate le funzioni di condivisione relative alle principali sezioni dell'app.

Funzioni previste:

* condivisione dell'app;
* condivisione di un episodio;
* condivisione delle categorie;
* condivisione di un percorso;
* condivisione del Pensiero del giorno;
* condivisione della funzione "Sorprendimi".

La condivisione utilizza messaggi dedicati e collegamenti alle relative sezioni.

---

## Messaggi di condivisione

Creato il file:

`contenuti/messaggi-condivisione.json`

per separare i testi utilizzati dalle funzioni di condivisione dal codice dell'app.

Questo permette di modificare i messaggi senza dover intervenire direttamente nel codice JavaScript.

---

## Guida utente

Aggiornata la descrizione della pagina **Guida utente**.

Testo attuale:

> Scopri le diverse sezioni e come utilizzare l’app.

La guida è stata verificata dopo la modifica.

---

## Contatti

La sezione Contatti è stata completata con possibilità di inviare:

* ⚠️ segnalazioni di problemi;
* 💡 suggerimenti;
* ⭐ recensioni.

I messaggi vengono inviati tramite email.

**Stato:** funzionante.

---

## Info

La funzione **Info** è stata verificata.

Il pulsante è funzionante e la riga relativa alla sezione Info viene pertanto considerata completata.

---

## Archivio Castbox

Verificato il collegamento all'archivio completo delle puntate tramite Castbox.

La funzione è operativa.

La condivisione dell'archivio potrà essere valutata separatamente in base all'utilità per gli utenti.

---

## Funzione Appuntamento / Conferenza

La funzione relativa all'appuntamento o alla conferenza rimane l'unico elemento ancora da definire completamente.

È stata considerata la possibilità di:

* attivare/disattivare i pulsanti della conferenza;
* disabilitare temporaneamente l'intera sezione Comunità;
* collegare la disponibilità della conferenza a giorni e orari;
* gestire gli orari tramite un file di configurazione separato.

L'obiettivo è evitare che l'utente possa utilizzare o visualizzare funzioni legate alla conferenza fuori dagli orari previsti.

**Stato:** da definire.

---

## Documentazione

Aggiornata e verificata la documentazione del progetto.

La documentazione comprende:

* struttura del progetto;
* note interne;
* registro delle modifiche;
* changelog;
* copyright;
* suggerimenti futuri;
* guida utente;
* guida installazione;
* documentazione dedicata ai tester.

La cartella `documentazione/tester/` contiene:

* `messaggio_tester_beta.md`;
* `registro_tester_beta.md`;
* `risposte_email.txt`.

---

## Ambiente di test

Le modifiche della Beta 1.0.3 vengono sviluppate nell'ambiente:

`DialoghiRadio-TEST`

Prima del passaggio in produzione verranno effettuate:

* verifica su smartphone;
* verifica dei collegamenti;
* verifica dei pulsanti;
* verifica dei messaggi di condivisione;
* verifica della Comunità;
* verifica della conferenza;
* controllo finale della documentazione.

---

## Passaggio a Git di test

Al termine della definizione delle ultime funzioni verrà effettuato uno step della versione Beta 1.0.3 nell'ambiente di test.

Il passaggio in produzione sarà effettuato solo dopo la verifica finale.

---

# Beta 1.0.2

**Periodo:** luglio 2026

---

## Gestione Home

Sperimentata inizialmente una nuova area:

🌅 Oggi su Dialoghi Radio

con caricamento dinamico del Pensiero del giorno.

La denominazione "Oggi su Dialoghi Radio"
è stata successivamente rimossa durante l'evoluzione
dell'interfaccia Home.

Il Pensiero del giorno è rimasto disponibile
come elemento principale della Home.

---

## Gestione contenuti

Creato archivio:

`contenuti/pensieri.json`

per separare i testi dal codice
e migliorare la gestione dei contenuti dinamici.

---

## Miglioramenti tecnici

Aggiornato `app.js` con gestione sicura
dei contenitori HTML presenti nelle pagine.

---

## Miglioramenti interfaccia e usabilità

Aggiornata la navigazione della sezione ascolto.

Modifiche effettuate:

* rinominato il percorso di accesso in:

  📻 Vai all'ascolto

* migliorata la distinzione tra:

  📚 Archivio completo

  🎧 Ultimi episodi

* aggiornati i testi della guida utente;

* migliorate le informazioni per l'utilizzo dell'app.

---

## Verifica riproduzione in background

Eseguito test su dispositivo mobile.

Risultato:

* l'audio continua dopo aver ridotto a icona l'app;
* l'ascolto prosegue anche con schermo spento;
* è possibile utilizzare altre applicazioni durante la riproduzione.

La funzione risulta disponibile nella versione attuale.

---

## Miglioramenti documentazione

Aggiornati:

* guida utente;
* informazioni sull'app;
* istruzioni per aggiornamento e svuotamento cache.

---

# Beta 1.0.0

**Periodo:** luglio 2026

---

## Migliorie principali

### Riorganizzazione ascolto episodi

Sono state apportate modifiche alla sezione dedicata all'ascolto.

Modifiche effettuate:

* aggiornato il collegamento dalla Home;

* rinominato il pulsante principale in:

  🎧 Ascolta Dialoghi Radio

* aggiunto accesso all'archivio completo degli episodi tramite Castbox;

* riorganizzata la pagina ascolto con due possibilità:

  * 📚 Archivio completo
  * 🎧 Ultimi episodi

---

## Stato versione Beta 1.0.0

**Data:** luglio 2026

La versione Beta 1.0.0 di Dialoghi Radio
è stata completata e congelata come versione stabile
di riferimento.

Eventuali nuove modifiche o nuove funzionalità saranno sviluppate
in versioni successive senza modificare questa versione di riferimento.

---

❤️ Dialoghi Radio
