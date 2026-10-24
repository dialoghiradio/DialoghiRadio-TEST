# Struttura progetto — Dialoghi Radio — Ambiente DR-TEST

⚠️ **Questo ambiente è dedicato alle prove e alla verifica prima del passaggio in produzione.**

**Repository:** `DialoghiRadio-TEST`

**Scopo:**

* testare nuove funzioni;
* verificare il comportamento su smartphone;
* provare contenuti e audio;
* raccogliere feedback dei tester;
* controllare la versione prima del passaggio in produzione.

---

## 📌 Stato del progetto

**Ambiente:** DR-TEST
**Versione in sviluppo:** Beta 1.0.3

L'ambiente DR-TEST rappresenta la versione di prova dell'app Dialoghi Radio.

Le nuove modifiche vengono prima verificate in questo ambiente e solo successivamente trasferite nella versione di produzione.

---

## 📄 Pagine HTML

| File                    | Descrizione                                                                                       | Stato    |
| ----------------------- | ------------------------------------------------------------------------------------------------- | -------- |
| `index.html`            | Pagina principale dell'app con Pensiero del giorno, News audio e accesso alle funzioni principali | ✅ Attiva |
| `ultime-puntate.html`   | Ultime puntate e accesso all'archivio completo                                                    | ✅ Attiva |
| `percorso-biblico.html` | Pagina dedicata al Percorso Biblico                                                               | ✅ Attiva |
| `categorie.html`        | Esplorazione dei contenuti organizzati per categorie                                              | ✅ Attiva |
| `contatti.html`         | Contatti, problemi, suggerimenti e recensioni                                                     | ✅ Attiva |
| `guida.html`            | Guida all'utilizzo dell'app                                                                       | ✅ Attiva |
| `comunita.html`         | Funzioni della Comunità e accesso alle attività collegate                                         | ✅ Attiva |

---

## ⚙️ File JavaScript

| File                  | Descrizione                                                                        | Stato    |
| --------------------- | ---------------------------------------------------------------------------------- | -------- |
| `app.js`              | Gestione Home, Pensiero del giorno, News audio, versione app e funzioni principali | ✅ Attivo |
| `ultime-puntate.js`   | Recupero delle puntate, player e gestione ascolti                                  | ✅ Attivo |
| `percorso-biblico.js` | Gestione dei contenuti del Percorso Biblico                                        | ✅ Attivo |
| `categorie.js`        | Gestione della pagina Esplora categorie                                            | ✅ Attivo |

---

## ⚙️ Configurazione e PWA

| File            | Descrizione                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| `config.js`     | Configurazione globale dell'app e parametri previsti per ambiente, contatti, Comunità, percorsi e servizi audio, secondo le impostazioni effettivamente utilizzate |
| `manifest.json` | Configurazione della Web App installabile (PWA)                                         |
| `stile.css`     | Stili grafici e layout dell'app                                                         |
| `icona.png`     | Icona principale di Dialoghi Radio                                                      |

---

## 🖼️ Immagini

### `immagini/`

Contiene gli **sfondi grafici utilizzati per le categorie dell'app**.

Questa cartella fa parte delle risorse dell'applicazione.

### `documentazione/immagini_guida/`

Contiene gli **screenshot dell'app utilizzati nella guida utente e nella documentazione**.

---

## 🎧 Audio

### `audio/notizie/`

Contiene gli audio locali utilizzati dalla sezione News.

Esempio:

```text
audio/
└── notizie/
    └── news001.mp3
```

Gli episodi principali di Dialoghi Radio vengono recuperati dal feed audio configurato nell'app. Il comportamento effettivo dipende dalla configurazione e deve essere verificato nell'ambiente DR-TEST.

---

## 📦 Contenuti dinamici

### `contenuti/`

Contiene i dati separati dal codice JavaScript.

| File                         | Descrizione                                      |
| ---------------------------- | ------------------------------------------------ |
| `pensieri.json`              | Archivio dei Pensieri del giorno                 |
| `messaggi-condivisione.json` | Testi utilizzati per le funzioni di condivisione |

La separazione dei contenuti dal codice permette di aggiornare i testi senza modificare direttamente la logica JavaScript.

---

## 🔗 Servizi audio esterni

| Servizio | Utilizzo                        |
| -------- | ------------------------------- |
| Spreaker | Hosting e feed degli episodi    |
| Castbox  | Archivio completo delle puntate |

---

## 🔄 Flussi principali

| Azione                         | Percorso                                |
| ------------------------------ | --------------------------------------- |
| Leggere il Pensiero del giorno | Home → Pensiero del giorno              |
| Ascoltare le ultime puntate    | Home → Vai all'ascolto → Ultime puntate |
| Ascoltare l'archivio completo  | Home → Vai all'ascolto → Castbox        |
| Ascoltare il Percorso Biblico  | Home → Percorso Biblico                 |
| Esplorare i contenuti          | Home → Categorie                        |
| Inviare un problema            | Home → Contatti e suggerimenti          |
| Inviare un suggerimento        | Home → Contatti e suggerimenti          |
| Lasciare una recensione        | Home → Contatti e suggerimenti          |
| Richiedere preghiera           | Home → Comunità → WhatsApp              |
| Preparare la conferenza        | Home → Comunità → Gruppo WhatsApp       |
| Entrare nella conferenza       | Home → Comunità → Chiamata telefonica   |
| Invitare nella Comunità        | Home → Comunità → Condivisione          |
| Condividere un episodio        | Episodio → Condividi                    |
| Condividere un percorso        | Percorso → Condividi                    |
| Condividere la guida           | Guida → Condividi                       |
| Condividere l'app              | Home → Condividi                        |

---

## 📚 Documentazione

La documentazione del progetto è organizzata nella cartella `documentazione/`.

| File                     | Descrizione                                     |
| ------------------------ | ----------------------------------------------- |
| `NOTE_INTERNE.md`        | Note interne sullo sviluppo e sulle verifiche   |
| `guida_installazione.md` | Installazione della Web App su Android e iPhone |
| `guida_utente.md`        | Utilizzo dell'app e spiegazione delle funzioni  |
| `registro_modifiche.md`  | Registro dettagliato delle modifiche            |
| `SUGGERIMENTI_FUTURI.md` | Idee, miglioramenti e sviluppi futuri           |
| `CATEGORIE_CONTENUTI.md` | Struttura delle categorie dei contenuti         |

---

## 🧪 Documentazione tester

La cartella:

```text
documentazione/tester/
```

contiene i materiali utilizzati durante la fase Beta.

| File                       | Descrizione                                 |
| -------------------------- | ------------------------------------------- |
| `messaggio_tester_beta.md` | Messaggio e istruzioni da inviare ai tester |
| `registro_tester_beta.md`  | Registro dei tester e dei feedback ricevuti |
| `risposte_email.txt`       | Raccolta delle risposte ricevute via email  |

---

## 📱 QR Code

La cartella:

```text
documentazione/QR_CODE/
```

contiene il **QR Code utilizzato per accedere all'ambiente DR-TEST**.

Il QR Code dell'ambiente di produzione sarà distinto e verrà utilizzato nella versione ufficiale dell'app.

---

## ⚖️ Documenti legali

Nella root del progetto sono presenti:

| File             | Descrizione                                      |
| ---------------- | ------------------------------------------------ |
| `copyright.html` | Pagina relativa al diritto d'autore del progetto |
| `privacy.html`   | Informativa sulla privacy dell'app               |
| `termini.html`   | Termini e condizioni di utilizzo dell'app        |

---

## 📋 Documentazione di progetto nella root

| File                    | Descrizione                                               |
| ----------------------- | --------------------------------------------------------- |
| `CHANGELOG.md`          | Cronologia sintetica delle versioni e degli aggiornamenti |
| `NOTE_PROGETTO.md`      | Stato generale, metodo di lavoro e note operative         |
| `STRUTTURA_PROGETTO.md` | Mappa della struttura del progetto                        |

---

## 🧪 File di prova

Nella root sono presenti alcuni file utilizzati per prove e sperimentazioni:

| File                   | Utilizzo                                   | Stato   |
| ---------------------- | ------------------------------------------ | ------- |
| `test-conferenza.html` | Prova della funzione conferenza telefonica | 🧪 Test |
| `prova-spreaker.html`  | Prove relative a Spreaker                  | 🧪 Test |
| `prova-audio.html`     | Prove di riproduzione audio                | 🧪 Test |

Questi file non fanno parte delle funzioni principali dell'app e vengono mantenuti per eventuali verifiche tecniche.

---

## 🚧 Funzioni in valutazione

| Funzionalità                                                     | Stato          |
| ---------------------------------------------------------------- | -------------- |
| Orari per le funzioni della Comunità                             | 🟡 Da valutare |
| Attivazione/disattivazione della Comunità tramite configurazione | 🟡 Da valutare |
| Gestione degli orari della conferenza tramite file separato      | 🟡 Da valutare |
| Notifiche per nuovi episodi                                      | 🟡 Futuro      |
| Statistiche anonime di utilizzo                                  | 🟡 Da valutare |
| Dirette Live                                                     | 🟡 Da valutare |
| Funzioni di accompagnamento personale                            | 🟡 Futuro      |

---

## 🔧 Note tecniche

* L'app è una Web App installabile (PWA).
* Il Pensiero del giorno viene caricato da `contenuti/pensieri.json`.
* I messaggi di condivisione sono separati nel file `contenuti/messaggi-condivisione.json`.
* Gli episodi vengono recuperati tramite feed audio.
* Il tracciamento degli episodi ascoltati utilizza la memoria locale del dispositivo.
* Non vengono raccolti dati personali attraverso il sistema di tracciamento degli ascolti.
* `config.js` centralizza le configurazioni che possono cambiare tra ambiente di test e produzione.
* Il QR Code presente in DR-TEST punta esclusivamente all'ambiente di prova.
* Il palinsesto H24 è un progetto separato, previsto per la Beta 1.0.4, ancora in fase di progettazione e sviluppo. Non è una funzione completata della Beta 1.0.3.

---

## 🔀 Metodo di lavoro

Il flusso previsto è:

```text
PC / Visual Studio Code
        ↓
Modifica
        ↓
DR-TEST
        ↓
Prova con Live Server
        ↓
Verifica smartphone
        ↓
Test funzionalità
        ↓
Feedback
        ↓
Correzioni
        ↓
Verifica conclusiva
        ↓
Approvazione esplicita
        ↓
Eventuale pubblicazione
        ↓
DR-PRODUZIONE
```

**Le modifiche non vengono trasferite in produzione finché la verifica in DR-TEST non è conclusa.**

---

# PARTE II — BETA 1.0.4 E PALINSESTO H24

## Stato della versione

**Versione:** Beta 1.0.4
**Ambiente:** DR-TEST locale
**Repository di destinazione:** `DialoghiRadio-TEST`
**Stato:** 🟡 versione in preparazione per il repository di test.

La Beta 1.0.4 comprende le modifiche apportate al progetto locale e una prima parte del palinsesto H24 già integrata nell'applicazione.

La versione precedente, Beta 1.0.3, rimane distinta dalla nuova versione.

## Palinsesto H24 parziale

Il palinsesto H24 è stato integrato parzialmente nella versione locale ed è stato utilizzato per oltre un mese, sia su computer sia su dispositivi mobili.

Durante questo periodo sono state effettuate sessioni di riproduzione continua di circa quattro ore, senza problemi riscontrati nell'esperienza d'uso descritta.

Questi risultati costituiscono un riscontro positivo sulla stabilità della versione attualmente utilizzata. Non equivalgono, tuttavia, a una verifica completa di tutte le 24 ore di programmazione né di tutte le funzionalità previste.

Il palinsesto deve pertanto essere descritto come **parzialmente implementato e sottoposto a test continuativi**, senza considerarlo già completato in ogni sua parte.

## Preparazione della versione per Git di test

La versione locale Beta 1.0.4 sarà preparata per il repository `DialoghiRadio-TEST`.

Prima della pubblicazione occorrerà:

* verificare i file effettivamente modificati;
* controllare la coerenza dei riferimenti alla versione;
* aggiornare la documentazione interessata;
* verificare il funzionamento dell'applicazione;
* effettuare eventuali interventi di sola formattazione del codice senza modificarne intenzionalmente la logica;
* controllare che le operazioni Git riguardino esclusivamente il repository di test.

La pubblicazione nel repository di test non comporta il passaggio automatico in produzione.

## Formattazione e conservazione del codice

Gli interventi di formattazione dovranno limitarsi al miglioramento della leggibilità del codice, senza modificare intenzionalmente le funzioni, la logica applicativa, i collegamenti, le configurazioni o il comportamento del palinsesto.

Dopo gli eventuali interventi sarà necessario verificare che l'applicazione continui a comportarsi come prima.

Qualsiasi correzione funzionale eventualmente necessaria dovrà essere valutata separatamente.

## Verifiche prima della pubblicazione

Prima di pubblicare la Beta 1.0.4 nel repository di test occorrerà controllare:

* le funzioni principali dell'applicazione;
* la riproduzione audio;
* le parti del palinsesto già implementate;
* il comportamento su computer e smartphone;
* gli eventuali errori introdotti durante la formattazione;
* la coerenza della documentazione.

Il progetto di produzione rimane separato. Un eventuale passaggio in produzione richiederà verifiche adeguate e autorizzazione esplicita.

---

❤️ **Dialoghi Radio**
