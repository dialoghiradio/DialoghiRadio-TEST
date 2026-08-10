# SUGGERIMENTI_FUTURI.md

# Suggerimenti futuri — Dialoghi Radio

Raccolta delle idee, dei suggerimenti dei tester e dei possibili miglioramenti emersi durante lo sviluppo di Dialoghi Radio.

Le funzioni già realizzate vengono mantenute come riferimento storico e non vengono più considerate sviluppi futuri.

---

# Esperienza di ascolto

## Riproduzione in background

Feedback iniziale dei tester:

> L'app si sente benissimo, unica pecca che se esci dall'app non continua a sentire a differenza di Spreaker.

### Verifica effettuata

La riproduzione in background è risultata funzionante su dispositivo mobile.

È possibile:

* ridurre a icona Dialoghi Radio;
* spegnere lo schermo;
* utilizzare altre applicazioni durante l'ascolto.

### Stato

🟢 **Funzione verificata**

Possibili attività future:

* continuare a monitorare la compatibilità con diversi dispositivi;
* migliorare ulteriormente l'esperienza audio.

---

# Accoglienza e atmosfera

## Musica di apertura

Proposta:

> All'apertura dell'app riprodurre un canto, ad esempio Ave Maria, come momento di accoglienza.

### Valutazione

Il suggerimento nasce dal desiderio di creare un'esperienza più spirituale e coinvolgente.

### Possibile sviluppo

* valutare una sezione dedicata a preghiere, canti o momenti spirituali;
* evitare la riproduzione automatica obbligatoria all'apertura;
* considerare una scelta volontaria dell'utente.

### Nota

Una musica automatica all'avvio potrebbe risultare poco adatta in alcuni contesti:

* luoghi pubblici;
* telefono silenzioso;
* preferenze personali dell'utente.

Eventuali funzioni audio di accoglienza dovranno quindi mantenere semplicità e libertà di scelta.

---

## Immagini e atmosfera

Possibili sviluppi:

* immagini variabili nella Home;
* eventuali musiche di accompagnamento;
* ambientazione più accogliente all'apertura.

Da mantenere come principio:

* evitare riproduzioni automatiche invasive;
* mantenere stabile l'icona dell'app;
* preferire la scelta dell'utente.

---

# Home e comunicazioni

## Stato attuale

La Home dispone già di:

* data del giorno;
* saluto dinamico;
* messaggio di accoglienza;
* versione dell'app;
* data dell'ultimo aggiornamento;
* Pensiero del giorno;
* News audio.

Il Pensiero del giorno viene caricato tramite:

```text id="k4n7a3"
contenuti/pensieri.json
```

---

## Bacheca avvisi / nuove pubblicazioni

### Possibile sviluppo futuro

Valutare una sezione dedicata agli avvisi di Dialoghi Radio.

Possibili utilizzi:

* evidenziare nuove pubblicazioni;
* comunicare aggiornamenti importanti;
* segnalare eventi;
* informare gli ascoltatori su nuove funzioni;
* centralizzare le comunicazioni dell'app.

### Possibile gestione

La funzione potrebbe utilizzare un file di configurazione o contenuti separati dal codice.

**Stato:** 🟡 Da valutare

---

# Organizzazione dei contenuti

## Categorie

La funzione Categorie è stata realizzata.

Sono presenti:

```text id="2q3o8p"
categorie.html
categorie.js
```

La struttura delle categorie è documentata in:

```text id="7r1c2m"
documentazione/CATEGORIE_CONTENUTI.md
```

### Stato

🟢 **Funzione attiva**

---

## Esplora contenuti

La sezione Categorie costituisce la base per una futura funzione più completa di esplorazione dei contenuti.

### Possibili sviluppi

* ricerca per argomento;
* filtro dei contenuti;
* collegamento diretto alle puntate;
* ricerca per tema;
* visualizzazione dei percorsi correlati.

### Stato

🟡 **Possibile evoluzione**

---

# Comunità e partecipazione

## Sezione Comunità

La sezione Comunità è stata realizzata nell'ambiente DR-TEST.

Funzioni disponibili:

* 🙏 Richiesta di preghiera;
* 👥 Preparazione conferenza;
* 📞 Entra nella conferenza;
* 📤 Invita nella Comunità.

### Collegamenti

Le funzioni vengono gestite tramite `config.js`.

### Stato

🟢 **Funzione attiva in DR-TEST**

---

## Incontro telefonico

La funzione di accesso alla conferenza telefonica è stata realizzata.

Funzionamento:

* l'utente seleziona il pulsante;
* viene avviata la chiamata;
* il sistema utilizza il numero e il codice configurati.

### Stato

🟢 **Funzione attiva in DR-TEST**

### Possibile evoluzione

Per evitare chiamate o messaggi fuori dagli orari previsti, valutare:

* disabilitazione temporanea del pulsante;
* disabilitazione dell'intera sezione Comunità;
* gestione automatica dei giorni e degli orari;
* file separato per la programmazione degli incontri.

🟡 **Da definire**

---

## Preparazione conferenza

La preparazione dell'incontro viene gestita tramite gruppo WhatsApp.

### Stato

🟢 **Funzione attiva in DR-TEST**

---

## Richieste di preghiera

La richiesta di preghiera viene gestita tramite WhatsApp.

### Stato

🟢 **Funzione attiva in DR-TEST**

---

## Invito alla Comunità

È disponibile la funzione di condivisione della Comunità.

### Stato

🟢 **Funzione attiva in DR-TEST**

---

# Dirette Live

Possibile sviluppo futuro:

Inserire nell'app un accesso diretto alle dirette di Dialoghi Radio.

Possibili utilizzi:

* momenti di riflessione;
* incontri con gli ascoltatori;
* approfondimenti;
* eventi speciali.

### Da valutare

* piattaforma da utilizzare;
* modalità di partecipazione;
* eventuale integrazione con la Home;
* eventuale palinsesto.

**Stato:** 🟡 Da valutare

---

# Accompagnamento personale

## Obiettivo

Offrire agli ascoltatori un modo semplice per condividere:

* dubbi sui contenuti;
* pensieri personali;
* richieste di preghiera;
* intenzioni per persone care.

## Modalità possibili

* collegamento diretto a WhatsApp;
* invio di un vocale;
* modulo contatti;
* raccolta tramite email;
* eventuale sistema interno futuro di messaggi vocali.

### Valutazione

La funzione deve mantenere un rapporto personale e umano.

L'obiettivo non è creare una semplice chat, ma favorire:

* ascolto;
* vicinanza;
* accompagnamento;
* condivisione.

### Possibili collegamenti futuri

* Accanto a Te;
* Domande di vita vera;
* Archivio Preghiere.

**Stato:** 🟡 Da sviluppare

---

# Statistiche utilizzo app

Possibile sviluppo futuro:

valutare un sistema anonimo per conoscere:

* numero indicativo di utenti attivi;
* sezioni maggiormente utilizzate;
* contenuti più ascoltati;
* andamento generale dell'utilizzo.

### Attenzione

Qualsiasi sistema di statistiche dovrà essere valutato nel rispetto della privacy e senza raccogliere dati personali non necessari.

**Stato:** 🟡 Da valutare

---

# Condivisione

La funzione di condivisione è stata sviluppata.

Sono disponibili funzioni per condividere, dove previsto:

* app;
* episodi;
* categorie;
* Percorso Biblico;
* guida;
* Pensiero del giorno;
* Comunità;
* funzione "Sorprendimi".

I testi sono centralizzati in:

```text id="x1a2qk"
contenuti/messaggi-condivisione.json
```

### Stato

🟢 **Funzione attiva in DR-TEST**

### Possibili sviluppi

* migliorare ulteriormente i testi;
* aggiungere nuove modalità di condivisione;
* rendere i messaggi personalizzabili in base al contenuto.

---

# Gestione degli orari della Comunità

Questa è una delle principali evoluzioni da definire.

## Obiettivo

Evitare che le funzioni di Comunità e conferenza generino chiamate o messaggi in orari non opportuni.

## Possibili soluzioni

### Soluzione A — Disabilitazione manuale

Disabilitare i pulsanti quando la Comunità non è disponibile.

### Soluzione B — Disabilitazione automatica

Utilizzare giorni e orari predefiniti.

### Soluzione C — Configurazione separata

Creare un file dedicato agli orari, ad esempio:

```text id="v1q8jk"
orari-comunita.js
```

oppure un file dati:

```text id="d3s7la"
contenuti/orari-comunita.json
```

La soluzione definitiva verrà scelta dopo aver verificato l'utilizzo reale della Comunità.

**Stato:** 🟡 Da definire

---

# Possibili sviluppi editoriali

## Accanto a Te

Progetto dedicato all'accompagnamento personale e spirituale.

Possibili collegamenti:

* richieste di preghiera;
* testimonianze;
* domande personali;
* accompagnamento.

**Stato:** 🟡 Progetto futuro

---

## Archivio Preghiere

Possibile raccolta organizzata di preghiere e intenzioni.

**Stato:** 🟡 Idea

---

## Domande di vita vera

Possibile sezione dedicata alle domande degli ascoltatori e alle riflessioni.

**Stato:** 🟡 Idea

---

# Principio generale del progetto

Ogni nuova funzione deve rispettare lo stile di Dialoghi Radio:

* semplicità;
* facilità di utilizzo;
* ascolto immediato;
* attenzione all'esperienza dell'utente;
* rispetto della privacy;
* nessuna funzione invasiva;
* libertà di scelta dell'utente.

Una nuova funzione deve essere introdotta solo se porta un reale beneficio all'esperienza degli ascoltatori.

---

# Stato roadmap

| Funzione                   | Stato                |
| -------------------------- | -------------------- |
| Riproduzione in background | 🟢 Verificata        |
| Pensiero del giorno        | 🟢 Attiva            |
| Categorie                  | 🟢 Attiva            |
| Condivisione               | 🟢 Attiva            |
| Comunità                   | 🟢 Attiva in DR-TEST |
| Richiesta di preghiera     | 🟢 Attiva in DR-TEST |
| Preparazione conferenza    | 🟢 Attiva in DR-TEST |
| Conferenza telefonica      | 🟢 Attiva in DR-TEST |
| Invito Comunità            | 🟢 Attiva in DR-TEST |
| Orari Comunità             | 🟡 Da definire       |
| Bacheca avvisi             | 🟡 Da valutare       |
| Dirette Live               | 🟡 Da valutare       |
| Statistiche anonime        | 🟡 Da valutare       |
| Accompagnamento personale  | 🟡 Da sviluppare     |
| Accanto a Te               | 🟡 Progetto futuro   |
| Archivio Preghiere         | 🟡 Idea              |
| Domande di vita vera       | 🟡 Idea              |

---

❤️ **Dialoghi Radio**
