# Note interne — Dialoghi Radio

## Stato progetto

**Ambiente:** DR-TEST
**Versione:** Beta 1.0.3
**Data aggiornamento:** Agosto 2026
**Stato:** Sviluppo / test

La Beta 1.0.3 è attualmente in fase di verifica nell'ambiente DR-TEST prima del possibile passaggio in produzione.

---

## Beta 1.0.3 — Verifiche e funzioni aggiunte

### ✅ Configurazione globale

Aggiunto e verificato:

```text
config.js
```

Il file centralizza le principali configurazioni dell'app:

* collegamento WhatsApp per richiesta di preghiera;
* gruppo WhatsApp per preparazione conferenza;
* numero e codice della conferenza telefonica;
* email contatti;
* Percorso Biblico;
* versione e data aggiornamento;
* ambiente e URL;
* feed audio;
* Castbox.

---

### ✅ Sezione Comunità

Verificata la pagina:

```text
comunita.html
```

Funzioni attive:

* 🙏 Richiesta di preghiera → WhatsApp;
* 👥 Preparazione conferenza → WhatsApp;
* 📞 Entra nella conferenza → telefono;
* 📤 Invita nella Comunità → condivisione.

Colori utilizzati:

* 🟢 funzioni WhatsApp;
* 🟠 conferenza telefonica;
* 🔵 ritorno alla Home.

---

### ✅ Condivisione

Sono state aggiunte/verificate funzioni di condivisione per:

* app;
* episodio;
* categorie;
* Percorso Biblico;
* guida;
* Pensiero del giorno;
* Comunità;
* funzione "Sorprendimi".

I messaggi sono centralizzati in:

```text
contenuti/messaggi-condivisione.json
```

---

### ✅ Guida utente

Aggiornata la guida con le nuove funzioni dell'app.

Testo introduttivo:

> Scopri le diverse sezioni e come utilizzare l'app Dialoghi Radio.

Verificata anche la funzione:

```text
Condividi guida
```

---

### ✅ Categorie

Verificati:

```text
categorie.html
categorie.js
```

La sezione permette di organizzare i contenuti per categorie.

---

### ✅ Contatti

Verificata la pagina Contatti.

Funzioni disponibili:

* ⚠️ Problema;
* 💡 Suggerimento;
* ⭐ Recensione.

Le comunicazioni vengono inviate tramite email.

---

### ✅ Pensiero del giorno

Il Pensiero del giorno viene caricato automaticamente da:

```text
contenuti/pensieri.json
```

La selezione della frase avviene automaticamente in base alla data.

---

### 🔊 Ascolto

La pagina `ultime-puntate.html` è presente e funzionante nell'ambiente DR-TEST.

**Funzionamento attuale:**

* il player audio è disponibile;
* premendo Play viene riprodotto il file `news001.mp3`;
* la riproduzione è limitata al contenuto attualmente configurato per il test.

Il funzionamento di eventuali ulteriori episodi e la riproduzione continua secondo un palinsesto H24 non devono essere considerati già implementati o collaudati.

Il palinsesto H24 è un'attività separata, prevista per la Beta 1.0.4.

---

## File verificati

### JavaScript

* `app.js`
* `ultime-puntate.js`
* `percorso-biblico.js`
* `categorie.js`

### Configurazione

* `config.js`
* `manifest.json`

### Contenuti

* `contenuti/pensieri.json`
* `contenuti/messaggi-condivisione.json`

### Pagine principali

* Home
* Ultime puntate
* Percorso Biblico
* Categorie
* Contatti
* Guida
* Comunità

---

## 📱 Verifiche smartphone

Da verificare nella fase finale:

* installazione PWA;
* navigazione;
* riproduzione audio;
* condivisione;
* apertura WhatsApp;
* apertura gruppo WhatsApp;
* chiamata conferenza;
* visualizzazione dei pulsanti;
* funzionamento della guida.

La verifica deve essere effettuata su Android e iPhone quando disponibili.

---

## 🧪 File di prova

Presenti nella root:

* `test-conferenza.html`
* `prova-speaker.html`
* `provaa-audio.html`

Sono file utilizzati per prove tecniche e non costituiscono pagine principali dell'app.

---
## 📚 Documentazione

### Documenti generali del progetto

I seguenti documenti si trovano nella cartella principale del progetto:

* `NOTE_PROGETTO.md`
* `STRUTTURA_PROGETTO.md`
* `CHANGELOG.md`
* `copyright.html`
* `privacy.html`
* `termini.html`

### Documentazione nella cartella `documentazione/`

* `NOTE_INTERNE.md`
* `guida_utente.md`
* `guida_installazione.md`
* `SUGGERIMENTI_FUTURI.md`
* `CATEGORIE_CONTENUTI.md`
* `registro_modifiche.md`

### Documentazione per i tester

I documenti dedicati ai tester comprendono:

* `messaggio_tester_beta.md`
* `registro_tester_beta.md`
* `risposte_email.txt`

**Nota:** questo elenco descrive l'organizzazione della documentazione. La presenza di un file nell'elenco non implica che il suo contenuto sia stato verificato o aggiornato di recente.

---

## 💾 Backup

Prima del congelamento della versione:

* copia progetto salvata sul PC;
* copia progetto salvata su supporto USB;
* verifica della versione DR-TEST;
* controllo dei file principali.

## Sviluppo del palinsesto H24 — Beta 1.0.4

**Stato:** 🟡 Progettazione e sviluppo in DR-TEST.

Il palinsesto H24 è un'attività separata dalla Beta 1.0.3, destinata alla futura Beta 1.0.4.

L'obiettivo è organizzare la riproduzione continua dei contenuti audio di Dialoghi Radio attraverso una programmazione strutturata nell'arco delle 24 ore.

### File coinvolti

* `contenuti/onair.json`
* `contenuti/palinsesto.html`
* `app.js`

### Obiettivi del progetto

* organizzare i contenuti in una playlist continua;
* utilizzare le ore 16:00 come riferimento per il ciclo;
* selezionare il Rosario in base al giorno della settimana;
* mostrare il contenuto in onda e quelli successivi.

### Stato delle verifiche

La presenza dei file e l'avvio dello sviluppo non significano che il palinsesto sia completo o collaudato.

Restano da verificare la sincronizzazione degli episodi, il passaggio automatico tra i contenuti e il comportamento sui diversi dispositivi.

Il lavoro deve rimanere nell'ambiente DR-TEST. Nessuna modifica alla produzione DR deve essere effettuata prima del completamento delle verifiche e della relativa approvazione.

---

# Storico versioni

## Beta 1.0.0

**Data di riferimento:** luglio 2026
**Stato riportato nello storico:** versione considerata stabile.

### Verifiche documentate

Pagine HTML:

* Home;
* Ultime puntate;
* Percorso Biblico;
* Contatti;
* Guida utente.

File JavaScript:

* `app.js`;
* `ultime-puntate.js`;
* `percorso-biblico.js`.

La versione Beta 1.0.0 è stata considerata stabile secondo le verifiche registrate all'epoca.

---

## Beta 1.0.2

**Periodo:** luglio 2026

Principali modifiche registrate:

* Pensiero del giorno dinamico;
* introduzione di `contenuti/pensieri.json`;
* aggiornamento della gestione della Home;
* separazione della gestione dell'ascolto;
* miglioramenti alla gestione JavaScript;
* aggiornamento della guida;
* miglioramenti grafici e di navigazione.

---

## Beta 1.0.3

**Periodo:** agosto 2026
**Ambiente:** DR-TEST
**Stato:** sviluppo e verifica.

Principali attività della versione:

* configurazione globale tramite `config.js`;
* sviluppo della sezione Comunità;
* collegamenti WhatsApp;
* accesso alla conferenza telefonica;
* funzioni di condivisione;
* introduzione di `contenuti/messaggi-condivisione.json`;
* aggiornamento della guida;
* aggiornamento della sezione Categorie;
* aggiornamento della documentazione;
* preparazione del nuovo ciclo di test.

### Limite attuale dell'ascolto

Nell'ambiente DR-TEST, la pagina `ultime-puntate.html` funziona e il pulsante Play riproduce il file `news001.mp3`, attualmente configurato per il test.

Il palinsesto H24 non fa parte della Beta 1.0.3.

---

## Stato finale previsto — Beta 1.0.3

La Beta 1.0.3 potrà essere considerata stabile soltanto dopo il completamento delle verifiche previste nell'ambiente DR-TEST.

### Controlli da completare

* verifica delle pagine e delle funzioni incluse nella versione;
* verifica dei collegamenti;
* controllo della configurazione in `config.js`;
* controllo della visualizzazione e della navigazione su smartphone;
* revisione della documentazione;
* aggiornamento dello storico delle modifiche;
* preparazione di una copia di backup.

### Limiti della versione

Nella Beta 1.0.3, il pulsante Play riproduce il file audio attualmente configurato per il test, `news001.mp3`.

Il palinsesto H24 non fa parte di questa versione: è un progetto separato destinato alla Beta 1.0.4.

### Eventuale passaggio in produzione

Il passaggio da DR-TEST all'ambiente di produzione DR potrà essere valutato soltanto dopo il completamento delle verifiche e l'approvazione esplicita.

Nessuna pubblicazione o modifica della produzione deve essere eseguita automaticamente sulla base del solo completamento dei test.

---

🔒 **Documento ad uso interno del progetto.**

❤️ **Dialoghi Radio**
