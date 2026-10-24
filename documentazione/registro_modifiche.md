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

La configurazione centralizza i collegamenti principali utilizzati dalle funzioni che leggono correttamente i valori da `config.js`. Il comportamento deve essere verificato per ogni funzione interessata.

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

La funzione utilizza il collegamento WhatsApp previsto dalla configurazione dell'app. La corrispondenza con il valore definito in `config.js` va verificata nell'ambiente DR-TEST.

Il canale viene mantenuto separato dalle altre funzioni della Comunità.

---

## Conferenza telefonica

Aggiunto l'accesso diretto alla conferenza telefonica.

Il pulsante utilizza un collegamento telefonico con numero e codice di accesso preimpostati.

La funzione permette all'utente di entrare nella conferenza direttamente dal dispositivo.

**Stato:** funzione verificata e funzionante nell'ambiente DR-TEST. La gestione della disponibilità in base a giorni e orari resta da definire.

---

## Gestione WhatsApp e conferenza

È stata definita una distinzione tra le funzioni della Comunità:

* 🟢 WhatsApp → richiesta di preghiera / messaggi;
* 🟠 Conferenza → ingresso alla chiamata telefonica.

Questa distinzione aiuta a identificare il tipo di azione associata a ciascun pulsante.

---

## Condivisione

Sono state definite le funzioni di condivisione relative alle principali sezioni dell'app. La verifica del loro funzionamento deve essere considerata separatamente per ciascuna funzione.

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

Questa separazione consente di modificare i messaggi senza intervenire direttamente nel codice JavaScript, per le funzioni che utilizzano correttamente i testi definiti nel file JSON.

---

## Guida utente

Aggiornata la descrizione della pagina **Guida utente**.

Testo attuale:

> Scopri le diverse sezioni e come utilizzare l’app.

La guida è stata verificata dopo la modifica.

È stata segnalata l'opportunità di migliorare la visibilità della guida, affinché gli utenti possano individuarla più facilmente.

---

## Contatti

La sezione Contatti è stata completata con possibilità di inviare:

* ⚠️ segnalazioni di problemi;
* 💡 suggerimenti;
* ⭐ recensioni.

I messaggi vengono inviati tramite email.

**Stato:** funzione verificata e funzionante nell'ambiente DR-TEST. La classificazione delle email nella Posta in arrivo o nella cartella Spam dipende anche dal servizio email del destinatario.

---

## Info

La funzione **Info** è stata verificata.

Il pulsante è funzionante e la riga relativa alla sezione Info viene pertanto considerata completata.

---

## Archivio Castbox

Verificato nell'ambiente DR-TEST il collegamento all'archivio completo delle puntate tramite Castbox.

**Stato:** collegamento verificato e funzionante.

La verifica riguarda l'apertura del collegamento. Non implica necessariamente che siano stati controllati tutti gli episodi presenti nell'archivio.

L'eventuale condivisione diretta dell'archivio potrà essere valutata separatamente, in base all'utilità per gli utenti.

---

## Funzione Appuntamento / Conferenza

Il collegamento alla conferenza telefonica è stato verificato e risulta funzionante nell'ambiente DR-TEST. Rimane da definire completamente la gestione della disponibilità della conferenza in base a giorni e orari.

È stata considerata la possibilità di:

* attivare/disattivare i pulsanti della conferenza;
* disabilitare temporaneamente l'intera sezione Comunità;
* collegare la disponibilità della conferenza a giorni e orari;
* gestire gli orari tramite un file di configurazione separato.

L'obiettivo è evitare che l'utente possa utilizzare o visualizzare funzioni legate alla conferenza fuori dagli orari previsti.

**Stato:** da definire.

---

## Documentazione

Aggiornata la documentazione del progetto, con revisione delle note di progetto, della struttura, del changelog e dei documenti dedicati ai tester.

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

Il passaggio in produzione potrà avvenire soltanto dopo il completamento delle verifiche previste e previa autorizzazione esplicita.

---

## Gestione delle modifiche in Git — Beta 1.0.3

Le modifiche della Beta 1.0.3 vengono sviluppate e verificate nell'ambiente DR-TEST.

Prima di registrare o pubblicare le modifiche nel repository di test, occorre controllare lo stato dei file e verificare che le modifiche siano coerenti con la versione in lavorazione.

Il passaggio alla produzione DR è un'operazione separata e potrà essere valutato soltanto dopo il completamento delle verifiche e l'approvazione esplicita.

**Stato:** verifiche in corso. Nessuna pubblicazione in produzione autorizzata da questa nota.

---

# Beta 1.0.4 — Progetto palinsesto H24

**Ambiente:** DR-TEST
**Stato:** progettazione e sviluppo, verifiche da completare.

Il palinsesto H24 è un progetto separato dalla Beta 1.0.3, destinato alla futura Beta 1.0.4.

L'obiettivo è organizzare la riproduzione continua dei contenuti audio di Dialoghi Radio attraverso una programmazione strutturata nell'arco delle 24 ore.

## File coinvolti

* `contenuti/onair.json` — configurazione dei contenuti audio, delle durate e degli identificativi degli episodi Spreaker.
* `contenuti/palinsesto.html` — pagina dedicata alla visualizzazione del palinsesto.
* `app.js` — file dell'applicazione coinvolto nello sviluppo.

## Funzioni previste

* organizzazione dei contenuti in una programmazione continua;
* sincronizzazione del ciclo con l'orario di riferimento delle 16:00;
* selezione del Rosario in base al giorno della settimana;
* visualizzazione del contenuto in onda e dei contenuti successivi.

## Verifiche da completare

* sincronizzazione tra orario e contenuto riprodotto;
* passaggio automatico tra gli episodi;
* riproduzione su smartphone e computer;
* selezione giornaliera del Rosario;
* verifica complessiva del palinsesto.

Il palinsesto H24 non è ancora considerato collaudato o stabile. Il suo completamento e l'eventuale pubblicazione saranno valutati dopo le verifiche e l'approvazione.

Il lavoro deve rimanere nell'ambiente DR-TEST fino all'autorizzazione esplicita al passaggio successivo.

---

# Beta 1.0.4 — Preparazione per Git di test

**Periodo:** ottobre 2026
**Ambiente:** DR-TEST locale
**Repository di destinazione:** `DialoghiRadio-TEST`
**Stato:** preparazione della versione e verifiche.

## Stato del palinsesto H24

La Beta 1.0.4 comprende una prima parte del palinsesto H24 integrata nell'applicazione locale.

La versione è stata utilizzata per oltre un mese, sia su computer sia su dispositivi mobili, con sessioni di riproduzione continua di circa quattro ore e senza problemi riscontrati durante l'utilizzo descritto.

L'esperienza maturata costituisce un riscontro positivo sulla stabilità della versione locale. Non rappresenta una certificazione completa di tutte le funzionalità del palinsesto né di una programmazione continuativa di 24 ore.

Il palinsesto rimane parzialmente implementato e le funzionalità non ancora verificate dovranno essere controllate separatamente.

## Preparazione del codice

Prima della pubblicazione nel repository di test è prevista una fase di controllo e formattazione dei file di codice.

Gli interventi dovranno limitarsi alla leggibilità e alla formattazione, senza modificare intenzionalmente la logica applicativa o il comportamento delle funzioni già presenti.

Dopo gli interventi sarà necessario verificare che l'applicazione continui a funzionare come prima.

Eventuali correzioni funzionali saranno valutate separatamente e non dovranno essere introdotte come semplici modifiche di formattazione.

## Preparazione della documentazione

La documentazione viene aggiornata per distinguere chiaramente:

* la precedente Beta 1.0.3;
* la Beta 1.0.4 attualmente presente nell'ambiente locale;
* le funzionalità H24 già integrate;
* le parti ancora da completare o verificare;
* i test effettivamente effettuati.

Le descrizioni dovranno riflettere lo stato reale del progetto, senza dichiarare completate funzioni non ancora verificate.

## Pubblicazione nel repository di test

La versione locale Beta 1.0.4 sarà preparata per il repository GitHub `DialoghiRadio-TEST`.

Prima della pubblicazione occorrerà verificare i file modificati, la coerenza della documentazione e il funzionamento dell'applicazione.

La pubblicazione nel repository di test dovrà rimanere distinta da qualsiasi intervento sul repository di produzione.

**Stato:** preparazione in corso. La pubblicazione richiede il controllo finale dei file e l'autorizzazione esplicita.

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

Eseguiti test su dispositivo mobile per verificare il comportamento della riproduzione audio.

### Risultati dei test

* riproduzione audio mantenuta dopo aver ridotto a icona l'app;
* riproduzione audio mantenuta con lo schermo spento;
* possibilità di utilizzare altre applicazioni durante l'ascolto.

**Esito:** entrambe le prove sono riuscite sul dispositivo utilizzato per il test.

Il risultato documenta il comportamento osservato durante le prove effettuate e non costituisce una garanzia di funzionamento identico su tutti i dispositivi o sistemi operativi.

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
