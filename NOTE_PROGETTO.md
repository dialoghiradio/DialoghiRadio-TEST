# NOTE_PROGETTO.md

# Progetto: Dialoghi Radio — Ambiente DR-TEST

⚠️ **Questo ambiente è dedicato alle prove.**

**Repository:** `DialoghiRadio-TEST`

## Scopo

L'ambiente DR-TEST viene utilizzato per:

* testare nuove funzioni;
* verificare le modifiche grafiche;
* effettuare prove su smartphone;
* verificare le funzioni audio;
* verificare i collegamenti WhatsApp e telefonici;
* raccogliere feedback dai tester;
* controllare la versione prima del passaggio in produzione.

Le modifiche vengono sviluppate e verificate prima in DR-TEST.

Solo dopo la verifica finale vengono trasferite nella versione di produzione.

---

# Stato attuale

**Versione:** Beta 1.0.3

**Ambiente:** DR-TEST

**Stato:** 🟡 Sviluppo / verifica finale

La Beta 1.0.3 comprende l'evoluzione delle funzioni già presenti nella Beta 1.0.2, con particolare attenzione a:

* guida utente;
* condivisione dei contenuti;
* sezione Comunità;
* collegamenti WhatsApp;
* accesso alla conferenza telefonica;
* categorie;
* contatti;
* configurazione centralizzata tramite `config.js`;
* organizzazione della documentazione;
* preparazione del nuovo ciclo di test.

---

# Metodo di lavoro

La cartella di prova è:

```text
DR-TEST
```

Il flusso di lavoro è:

```text
Modifica file
      ↓
Prova in DR-TEST
      ↓
Live Server
      ↓
Verifica PC
      ↓
Verifica smartphone
      ↓
Controllo funzioni
      ↓
Eventuali correzioni
      ↓
Test finale
      ↓
Versione stabile
      ↓
Trasferimento in DR-PRODUZIONE
      ↓
Git / GitHub
```

**Regola principale:**

> Nessuna modifica viene considerata pronta per la produzione finché non è stata verificata in DR-TEST.

---

# Configurazione globale

È stato introdotto il file:

```text
config.js
```

Il file centralizza le configurazioni che possono cambiare tra ambiente di test e produzione.

Attualmente contiene:

* collegamento WhatsApp per richieste di preghiera;
* gruppo WhatsApp per preparazione conferenza;
* numero e codice per la conferenza telefonica;
* email dei contatti;
* percorsi disponibili;
* versione dell'app;
* data aggiornamento;
* nome dell'ambiente;
* URL dell'ambiente;
* feed audio;
* collegamento Castbox.

Questo sistema permette di evitare di modificare manualmente più pagine quando cambia un collegamento o un parametro.

---

# Sezione Comunità

La sezione Comunità è stata sviluppata in DR-TEST.

Funzioni attualmente previste:

### 🙏 Richiesta di preghiera

Apre WhatsApp per permettere all'utente di inviare una richiesta personale.

### 👥 Preparazione conferenza

Apre il gruppo WhatsApp dedicato alla preparazione dell'incontro.

### 📞 Entra nella conferenza

Avvia il collegamento telefonico alla conferenza.

### 📤 Invita nella Comunità

Permette di condividere l'invito alla Comunità.

---

# Colori delle funzioni Comunità

La distinzione grafica attuale è intenzionale:

* 🟢 funzioni WhatsApp;
* 🟠 funzione telefonica della conferenza;
* 🔵 ritorno alla Home.

In questo modo l'utente può riconoscere immediatamente il tipo di azione che sta per eseguire.

---

# Gestione della conferenza

La funzione di conferenza è attualmente disponibile tramite chiamata telefonica.

È stata considerata la possibilità di evitare chiamate o messaggi fuori dagli orari previsti.

Possibili soluzioni future:

1. disabilitare temporaneamente i pulsanti della conferenza;
2. disabilitare l'intera sezione Comunità;
3. collegare la disponibilità della funzione a giorni e orari;
4. mantenere gli orari in un file di configurazione separato.

La decisione definitiva verrà presa dopo la verifica dell'utilizzo reale della funzione.

---

# Condivisione

Sono state sviluppate diverse funzioni di condivisione.

Tra quelle già previste:

* condivisione dell'app;
* condivisione della guida;
* condivisione di un episodio;
* condivisione delle categorie;
* condivisione del Percorso Biblico;
* condivisione del Pensiero del giorno;
* condivisione della funzione "Sorprendimi";
* condivisione della Comunità.

I testi possono essere centralizzati nel file:

```text
contenuti/messaggi-condivisione.json
```

Questo permette di modificare i messaggi senza dover intervenire direttamente nella logica delle pagine.

---

# Contatti

La pagina Contatti è attiva.

Sono disponibili:

* ⚠️ Problema;
* 💡 Suggerimento;
* ⭐ Recensione.

I messaggi vengono gestiti tramite email.

La funzione è stata verificata e considerata funzionante.

---

# Guida utente

La guida utente è stata aggiornata.

Il testo introduttivo attuale è:

> Scopri le diverse sezioni e come utilizzare l'app Dialoghi Radio.

La guida contiene le indicazioni necessarie per orientarsi nelle principali funzioni dell'app.

È presente anche la funzione di condivisione della guida.

---

# Categorie

La sezione Categorie è attiva.

Sono presenti:

```text
categorie.html
categorie.js
```

La funzione permette di organizzare e presentare i contenuti per tema.

La struttura delle categorie viene documentata anche nel file:

```text
documentazione/CATEGORIE_CONTENUTI.md
```

---

# Audio

Gli audio locali di prova si trovano nella cartella:

```text
audio/notizie/
```

Esempio:

```text
audio/
└── notizie/
    └── news001.mp3
```

Gli episodi principali vengono recuperati tramite il feed audio configurato in `config.js`.

L'archivio completo è disponibile tramite Castbox.

---

# Pensiero del giorno

Il Pensiero del giorno viene caricato automaticamente dal file:

```text
contenuti/pensieri.json
```

La gestione è separata dal codice JavaScript.

Questo permette di modificare i contenuti senza modificare la logica dell'app.

---

# PWA

Dialoghi Radio è una Web App installabile.

La configurazione della PWA utilizza:

```text
manifest.json
```

L'app può essere installata sui dispositivi compatibili.

Le istruzioni di installazione sono documentate nella guida dedicata.

---

# Backup

Il progetto viene protetto attraverso:

* copia locale sul PC;
* repository Git/GitHub per la versione di produzione;
* copia di sicurezza su supporto USB.

Prima del passaggio a una nuova versione stabile deve essere eseguito un backup.

---

# Git e produzione

La versione di produzione è separata dall'ambiente DR-TEST.

Repository ufficiale:

```text
https://github.com/dialoghiradio/DR
```

Cartella locale di produzione:

```text
DR-PRODUZIONE
```

Comandi principali:

```bash
git status
git add .
git commit -m "descrizione modifica"
git push
```

Il repository GitHub viene utilizzato per:

* pubblicazione;
* controllo delle versioni;
* storico dei commit;
* backup della versione funzionante.

---

# Regola per il passaggio in produzione

Prima di trasferire una versione da DR-TEST a produzione devono essere verificati:

* tutte le pagine principali;
* navigazione;
* audio;
* collegamenti esterni;
* WhatsApp;
* conferenza telefonica;
* contatti;
* condivisione;
* categorie;
* guida;
* PWA;
* visualizzazione su smartphone;
* eventuali errori JavaScript;
* versione e data;
* configurazione `config.js`.

Solo dopo la verifica completa la versione può essere considerata pronta per DR-PRODUZIONE.

---

# Documentazione

La documentazione è organizzata nella cartella:

```text
documentazione/
```

Sono presenti, tra gli altri:

* `NOTE_INTERNE.md`;
* `guida_installazione.md`;
* `guida_utente.md`;
* `SUGGERIMENTI_FUTURI.md`;
* `CATEGORIE_CONTENUTI.md`;
* cartella `tester/`;
* cartella `immagini_guida/`;
* cartella `QR_CODE/`.

Nella root rimangono invece i documenti generali di progetto:

* `NOTE_PROGETTO.md`;
* `STRUTTURA_PROGETTO.md`;
* `CHANGELOG.md`;
* `COPYRIGHT`;
* `PRIVACY`;
* `TERMINI_UTILIZZO`.

---

# Tester Beta

La documentazione dei tester si trova in:

```text
documentazione/tester/
```

Contiene:

* `messaggio_tester_beta.md`;
* `registro_tester_beta.md`;
* `risposte_email.txt`.

Il registro viene utilizzato per raccogliere:

* dispositivi utilizzati;
* installazioni;
* feedback;
* problemi;
* suggerimenti;
* verifiche effettuate.

---

# File di prova

Nella root sono presenti alcuni file utilizzati per verifiche tecniche:

```text
test-conferenza.html
prova-speaker.html
provaa-audio.html
```

Questi file sono strumenti di test e non costituiscono pagine principali dell'app.

---

# Ambiente DR-TEST

Il QR Code presente in:

```text
documentazione/QR_CODE/
```

è destinato all'accesso all'ambiente di prova.

Il QR Code della versione ufficiale sarà separato e utilizzato esclusivamente per la produzione.

---

# Sviluppi futuri

Tra le funzioni ancora da valutare:

* gestione degli orari della Comunità;
* gestione degli orari della conferenza;
* eventuale attivazione/disattivazione delle funzioni Comunità;
* notifiche;
* statistiche anonime;
* dirette Live;
* ulteriori categorie;
* funzioni di accompagnamento personale;
* evoluzione del progetto "Accanto a Te".

Le idee vengono raccolte nel documento:

```text
documentazione/SUGGERIMENTI_FUTURI.md
```

---

# Stato finale della Beta 1.0.3

La Beta 1.0.3 viene considerata in fase di:

🟡 **verifica finale**

Prima del passaggio in produzione devono essere completati:

* verifica generale delle funzioni;
* verifica smartphone;
* verifica dei collegamenti;
* controllo della documentazione;
* aggiornamento del registro tester;
* aggiornamento del `CHANGELOG.md`;
* backup;
* controllo finale della versione.

Dopo queste verifiche sarà possibile preparare il passaggio a:

```text
DR-PRODUZIONE
```

---

❤️ **Dialoghi Radio**
