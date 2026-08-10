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

### ✅ Ascolto

Verificata la pagina:

```text
ultime-puntate.html
```

con:

* ultime puntate;
* player audio;
* gestione degli episodi ascoltati;
* memoria locale;
* collegamento all'archivio Castbox.

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

Documentazione verificata/aggiornata:

* `NOTE_PROGETTO.md`
* `STRUTTURA_PROGETTO.md`
* `CHANGELOG.md`
* `COPYRIGHT`
* `guida_utente.md`
* `guida_installazione.md`
* `SUGGERIMENTI_FUTURI.md`

Documentazione tester:

* `messaggio_tester_beta.md`
* `registro_tester_beta.md`
* `risposte_email.txt`

---

## 💾 Backup

Prima del congelamento della versione:

* copia progetto salvata sul PC;
* copia progetto salvata su supporto USB;
* verifica della versione DR-TEST;
* controllo dei file principali.

---

# Storico versioni

## Beta 1.0.0

**Data congelamento:** Luglio 2026

Prima versione Beta considerata stabile.

### Verifiche effettuate

✅ Pagine HTML:

* Home;
* Ultime puntate;
* Percorso Biblico;
* Contatti;
* Guida utente.

✅ File JavaScript:

* `app.js`;
* `ultime-puntate.js`;
* `percorso-biblico.js`.

La versione Beta 1.0.0 è stata considerata stabile.

---

## Beta 1.0.2

**Periodo:** Luglio 2026

Principali modifiche:

* Pensiero del giorno dinamico;
* introduzione di `contenuti/pensieri.json`;
* gestione Home aggiornata;
* separazione della gestione dell'ascolto;
* miglioramenti alla gestione JavaScript;
* aggiornamento della guida;
* miglioramenti grafici e di navigazione.

---

## Beta 1.0.3

**Periodo:** Agosto 2026

Versione attualmente in sviluppo e verifica in DR-TEST.

Principali attività:

* configurazione globale tramite `config.js`;
* sviluppo della sezione Comunità;
* collegamenti WhatsApp;
* accesso alla conferenza telefonica;
* funzioni di condivisione;
* file `messaggi-condivisione.json`;
* aggiornamento della guida;
* aggiornamento della sezione Categorie;
* aggiornamento della documentazione;
* preparazione del nuovo ciclo di test.

---

## Stato finale previsto

La Beta 1.0.3 potrà essere considerata stabile solo dopo:

* verifica completa delle pagine;
* verifica delle funzioni;
* verifica smartphone;
* controllo dei collegamenti;
* controllo `config.js`;
* controllo della documentazione;
* backup finale.

Solo successivamente sarà possibile procedere al passaggio:

```text
DR-TEST
   ↓
DR-PRODUZIONE
   ↓
GitHub
```

---

🔒 **Documento ad uso interno del progetto.**

❤️ **Dialoghi Radio**
