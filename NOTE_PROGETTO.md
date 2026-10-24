# NOTE_PROGETTO.md

# Progetto: Dialoghi Radio — Ambiente DR-TEST

**Versione di riferimento:** Beta 1.0.3
**Stato della versione:** sviluppo e verifica
**Repository di test:** `DialoghiRadio-TEST`

**Questo ambiente è dedicato allo sviluppo e alle prove. Le modifiche devono essere verificate prima di un eventuale trasferimento in produzione.

## 1. Scopo del progetto

L'ambiente DR-TEST viene utilizzato per:

* sviluppare e provare nuove funzioni;
* verificare le modifiche grafiche;
* effettuare prove su computer e smartphone;
* controllare le funzioni audio;
* verificare i collegamenti WhatsApp e telefonici;
* raccogliere i feedback dei tester;
* controllare la documentazione;
* verificare una versione prima dell'eventuale pubblicazione in produzione.

La versione di test e quella di produzione sono ambienti distinti.

**Regola fondamentale:** nessuna modifica deve essere considerata pronta per la
produzione finché non sono state completate le verifiche necessarie e non è stata approvata.

---

# PARTE I — BETA 1.0.3

## 2. Stato della Beta 1.0.3

La Beta 1.0.3 rappresenta l'evoluzione delle funzioni già presenti nella Beta 1.0.2.

Le aree di lavoro comprendono:

* guida utente;
* condivisione dei contenuti;
* sezione Comunità;
* collegamenti WhatsApp;
* accesso alla conferenza telefonica;
* categorie;
* contatti;
* configurazione centralizzata tramite `config.js`;
* organizzazione della documentazione;
* preparazione del ciclo di test.

La versione è ancora in fase di verifica. La stabilità dovrà essere confermata attraverso i controlli funzionali e le prove sui dispositivi.

---

### 2.1 Funzioni audio della Beta 1.0.3

Nell'ambiente DR-TEST, nella configurazione attualmente verificata, il pulsante Play riproduce il file audio `news001.mp3`.

Questa è la modalità di riproduzione attualmente prevista per il test e non costituisce un palinsesto H24.

**Il palinsesto H24 non fa parte della Beta 1.0.3.**

La riproduzione continua di una playlist e la programmazione dei contenuti
sono oggetto di un progetto di sviluppo separato, descritto nella Parte II di questo documento.

---

## 3. Metodo di lavoro

Lo sviluppo avviene nella cartella di test:

```text
DR-TEST
```

Il flusso di lavoro è:
1. modifica dei file;
2. avvio e prova dell'applicazione in ambiente locale;
3. verifica su computer;
4. verifica su smartphone;
5. controllo delle funzioni interessate;
6. correzione degli eventuali problemi;
7. test finale;
8. approvazione della versione;
9. preparazione del trasferimento in produzione;
10. eventuale pubblicazione nell'ambiente di produzione, soltanto dopo il completamento delle verifiche e l'approvazione esplicita.

Durante lo sviluppo possono essere utilizzati strumenti locali, come Live Server,
per verificare il comportamento dell'applicazione.

### 3.1 Separazione tra test e produzione

Il progetto DR-TEST e il progetto di produzione devono rimanere distinti.

Le modifiche sviluppate nell'ambiente di test non devono essere trasferite automaticamente in produzione.

Il trasferimento richiede:

* verifica della versione;
* controllo dei file interessati;
* verifica delle funzioni;
* backup;
* approvazione prima della pubblicazione.

Git e GitHub vengono utilizzati per il controllo delle versioni e la gestione dei repository. Le operazioni sui repository devono rispettare la separazione tra test e produzione.

---

## 4. Configurazione globale

Il progetto utilizza il file:

```text
config.js
```

Il file è destinato a centralizzare le configurazioni che possono cambiare tra l'ambiente di test e quello di produzione.

Tra le impostazioni previste figurano:

* collegamento WhatsApp per le richieste di preghiera;
* gruppo WhatsApp per la preparazione della conferenza;
* numero e codice per la conferenza telefonica;
* indirizzi email dei contatti;
* percorsi disponibili;
* versione dell'applicazione;
* data di aggiornamento;
* nome dell'ambiente;
* URL dell'ambiente;
* feed audio;
* collegamento Castbox.

La centralizzazione permette di gestire i parametri comuni in un unico punto, quando le pagine e le funzioni interessate utilizzano correttamente questa configurazione.

Prima di ogni eventuale pubblicazione in produzione, occorre verificare che le impostazioni siano aggiornate e coerenti con l'ambiente di destinazione.

---

## 5. Sezione Comunità

La sezione Comunità è presente nell'ambiente DR-TEST.

Comprende le seguenti funzioni, il cui comportamento dipende dalla configurazione attiva:

### 🙏 5.1 Richiesta di preghiera

Apre WhatsApp per permettere all'utente di inviare una richiesta personale.

### 👥 5.2 Preparazione della conferenza

Apre il gruppo WhatsApp dedicato alla preparazione dell'incontro.

### 📞 5.3 Entra nella conferenza

Avvia il collegamento telefonico alla conferenza.

### 📤 5.4 Invita nella Comunità

Permette di condividere l'invito alla Comunità.

La disponibilità e il corretto funzionamento di ciascuna funzione devono essere verificati nell'ambiente di test.

---

## 6. Colori delle funzioni Comunità

La distinzione grafica attuale è intenzionale:

* 🟢 funzioni WhatsApp;
* 🟠 funzione telefonica della conferenza;
* 🔵 ritorno alla Home.

La differenziazione visiva aiuta l'utente a riconoscere il tipo di azione che sta per eseguire.

---

## 7. Gestione della conferenza

Nell'ambiente DR-TEST, la funzione «Entra nella conferenza» è prevista per avviare il collegamento telefonico. La disponibilità effettiva dipende dalla configurazione attiva e deve essere verificata nell'ambiente di test.

È stata considerata la possibilità di evitare chiamate o messaggi fuori dagli orari previsti.

Le possibili soluzioni comprendono:

1. disabilitare temporaneamente i pulsanti della conferenza;
2. disabilitare l'intera sezione Comunità;
3. rendere la disponibilità della funzione dipendente da giorni e orari;
4. mantenere gli orari in un file di configurazione dedicato.

La decisione definitiva dipenderà dalle esigenze del progetto e dai risultati delle verifiche.

---

## 8. Condivisione dei contenuti

L'applicazione comprende funzioni di condivisione per diversi contenuti e sezioni.

Tra quelle previste figurano:

* condivisione dell'app;
* condivisione della guida;
* condivisione di un episodio;
* condivisione delle categorie;
* condivisione del Percorso Biblico;
* condivisione del Pensiero del giorno;
* condivisione della funzione «Sorprendimi»;
* condivisione della Comunità.

La disponibilità e il comportamento delle singole funzioni di condivisione devono essere verificati nella versione di DR-TEST in uso.

I testi possono essere centralizzati nel file:

```text
contenuti/messaggi-condivisione.json
```

Questa soluzione consente di modificare i testi senza intervenire direttamente nella logica JavaScript delle pagine.

---

## 9. Contatti

La pagina Contatti comprende le seguenti funzioni:

* ⚠️ Problema;
* 💡 Suggerimento;
* ⭐ Recensione.

I messaggi vengono gestiti tramite email.

Il corretto funzionamento dei collegamenti e l'invio delle comunicazioni devono essere verificati durante i test.

---

## 10. Guida utente

La guida utente illustra le principali sezioni e funzioni dell'applicazione.

Il testo introduttivo è:

> Scopri le diverse sezioni e come utilizzare l'app Dialoghi Radio.

È disponibile anche una funzione per condividere la guida.

La documentazione deve rimanere coerente con le funzioni effettivamente presenti nella versione pubblicata.

---

## 11. Categorie

La sezione Categorie organizza e presenta i contenuti per tema.

I file principali sono:

```text
categorie.html
categorie.js
```

La struttura delle categorie è documentata in:

```text
documentazione/CATEGORIE_CONTENUTI.md
```

Le categorie e i relativi collegamenti devono essere controllati durante i test.

---

## 12. Audio della versione attuale

### Beta 1.0.3

Nell'ambiente DR-TEST, nella configurazione attualmente verificata, il pulsante Play riproduce il file audio `news001.mp3`.

Questa descrizione riguarda la configurazione di test verificata e non implica che il file debba essere incluso nel palinsesto H24.

Il palinsesto H24 è un progetto separato previsto per la Beta 1.0.4. Le modalità con cui verrà integrato con l'attuale pulsante Play devono ancora essere definite e verificate.

L'eventuale integrazione del palinsesto H24 con il sistema di riproduzione attuale sarà definita durante lo sviluppo della Beta 1.0.4 e verificata prima di considerare completata la nuova versione.

### File audio locali

Gli audio locali utilizzati per le prove possono essere conservati nella cartella:

```text
audio/
```

Esempio di struttura:

```text
audio/
└── notizie/
    └── news001.mp3
```

La presenza di questi file non implica che siano utilizzati dal pulsante Play della Beta 1.0.3 o che debbano essere inclusi nel nuovo palinsesto.

### Passaggio alla Beta 1.0.4

La Beta 1.0.4 è destinata a introdurre il palinsesto H24, con una playlist continua e contenuti organizzati secondo le regole del nuovo sistema.

La riproduzione continua, la sincronizzazione del ciclo e la selezione del Rosario in base al giorno della settimana dovranno essere implementate e verificate prima di considerare completata la nuova versione.

Fino ad allora, il palinsesto H24 rimane un progetto in sviluppo.

---

## 13. Pensiero del giorno

Il Pensiero del giorno viene caricato dal file:

```text
contenuti/pensieri.json
```

La gestione dei contenuti è separata dalla logica JavaScript.

Questo permette di aggiornare i testi senza modificare direttamente il codice che gestisce la visualizzazione.

---

## 14. PWA
Dialoghi Radio è una Web App installabile sui dispositivi compatibili.

La configurazione dell'applicazione utilizza:

```text
manifest.json
```

Le istruzioni per l'installazione sono riportate nella guida dedicata.

Il comportamento dell'app installata deve essere verificato sui dispositivi supportati.

---

## 15. Backup

La protezione del progetto prevede copie di sicurezza e controllo delle versioni. La disponibilità e l'aggiornamento effettivo dei backup devono essere verificati periodicamente.

Le misure previste comprendono:

* copia locale del progetto sul PC;
* repository Git/GitHub dedicato all'ambiente di test;
* repository Git/GitHub separato per la produzione;
* copia di sicurezza su supporto USB.

Prima di un trasferimento in produzione deve essere eseguito un backup adeguato.

I backup e i repository dei due ambienti devono rimanere chiaramente distinguibili.

---

## 16. Repository di produzione

Il repository ufficiale della produzione è:

```text
https://github.com/dialoghiradio/DR
```

La cartella locale della produzione è indicata come:

```text
DR-PRODUZIONE
```

### Repository di test

Il repository utilizzato per lo sviluppo e le verifiche è:

```text
DialoghiRadio-TEST
```

### Comandi Git

I principali comandi di consultazione e gestione delle modifiche sono:

```bash
git status
git add .
git commit -m "descrizione modifica"
git push
```

**Attenzione:** questi comandi hanno effetti diversi. `git status` permette di controllare lo stato del repository; `git add`, `git commit` e `git push` modificano rispettivamente l'area di preparazione, lo storico locale e il repository remoto.

Prima di eseguire qualsiasi operazione, occorre verificare:

* quale repository è aperto;
* quali file sono stati modificati;
* quali modifiche si intendono registrare;
* quale repository remoto riceverebbe un eventuale `git push`.

Il repository GitHub viene utilizzato per:

* controllo delle versioni;
* consultazione dello storico delle modifiche;
* gestione delle modifiche;
* preparazione delle pubblicazioni;
* recupero delle versioni precedenti.

Le operazioni Git devono essere eseguite consapevolmente sul repository corretto.

**Il lavoro in DR-TEST non autorizza modifiche automatiche al repository di produzione.** Qualsiasi passaggio alla produzione richiede verifiche e approvazione esplicita.

---

## 17. Verifiche prima della pubblicazione

Prima del passaggio dalla Beta 1.0.3 alla produzione devono essere controllati:

* pagine principali;
* navigazione;
* funzioni audio effettivamente presenti;
* collegamenti esterni;
* WhatsApp;
* conferenza telefonica;
* contatti;
* condivisione;
* categorie;
* guida utente;
* PWA;
* visualizzazione su smartphone;
* eventuali errori JavaScript;
* versione e data;
* configurazione `config.js`;
* documentazione;
* backup.

La versione può essere considerata pronta soltanto dopo il completamento delle verifiche e l'approvazione esplicita. L'eventuale pubblicazione in produzione richiede una decisione specifica e non deve avvenire automaticamente.

---

# PARTE II — PROGETTO PALINSESTO H24

## 18. Stato del progetto H24

Il palinsesto H24 è un progetto di sviluppo distinto dalla Beta 1.0.3.

**Stato:** 🟡 progettazione e sviluppo.

L'obiettivo è realizzare una riproduzione audio continua, organizzata secondo una playlist e sincronizzata con un orario di riferimento.

Il progetto H24 non deve essere considerato una funzione già disponibile nella Beta 1.0.3.

## 19. Obiettivi del palinsesto

Gli obiettivi attualmente individuati comprendono:

* organizzare i contenuti in una playlist;
* ripetere il ciclo di riproduzione;
* utilizzare le 16:00 come riferimento del ciclo;
* selezionare il Rosario in base al giorno della settimana;
* visualizzare il contenuto in onda e quelli successivi;
* verificare il comportamento della riproduzione su computer e smartphone.

Questi sono obiettivi di progetto: il loro funzionamento deve essere verificato prima di dichiararli completati.

## 20. File coinvolti

I file individuati per lo sviluppo comprendono:

```text
app.js
contenuti/onair.json
contenuti/palinsesto.html
```

Il file `contenuti/onair.json` raccoglie la configurazione dei contenuti previsti per il palinsesto.

Il file `contenuti/palinsesto.html` è destinato alla pagina dedicata alla visualizzazione del palinsesto.

Le responsabilità effettive di ciascun file devono essere confermate durante la verifica tecnica.

## 21. Verifiche ancora necessarie

Prima di considerare il progetto H24 funzionante occorre verificare:

* sincronizzazione tra orario e contenuto previsto;
* selezione corretta dell'episodio;
* passaggio automatico tra gli episodi;
* comportamento del ciclo al raggiungimento della fine della playlist;
* selezione del Rosario in base al giorno;
* aggiornamento del contenuto in onda;
* visualizzazione dei contenuti successivi;
* funzionamento su computer e smartphone;
* comportamento in caso di errore nel caricamento di un episodio.

Fino al completamento dei test, il progetto rimane in sviluppo.

## 22. Libreria musicale

È stata raccolta una libreria di circa 112 brani musicali.

La modalità con cui questi brani verranno utilizzati nel palinsesto non è ancora stata definita.

Non è stato stabilito che debbano essere caricati singolarmente su un secondo account Spreaker o trasformati in episodi separati.

La gestione della musica sarà decisa dopo aver definito la struttura editoriale del palinsesto e le relative esigenze tecniche.

---

# PARTE III — DOCUMENTAZIONE E ORGANIZZAZIONE

## 23. Documentazione del progetto

La documentazione principale è organizzata nella cartella:

```text
documentazione/
```

Comprende, tra gli altri:

* `NOTE_INTERNE.md`;
* `guida_installazione.md`;
* `guida_utente.md`;
* `SUGGERIMENTI_FUTURI.md`;
* `CATEGORIE_CONTENUTI.md`;
* cartella `tester/`;
* cartella `immagini_guida/`;
* cartella `QR_CODE/`.

Nella cartella principale del progetto sono presenti anche documenti generali, tra cui:

* `NOTE_PROGETTO.md`;
* `STRUTTURA_PROGETTO.md`;
* `CHANGELOG.md`;
* `copyright.html`;
* `privacy.html`;
* `termini.html`.

L'elenco è indicativo e non costituisce una verifica aggiornata di tutti i file presenti. I nomi e i percorsi degli altri documenti devono corrispondere ai file effettivamente disponibili nel progetto.

---

## 24. Tester Beta

La documentazione dedicata ai tester si trova in:

```text
documentazione/tester/
```

Comprende:

* `messaggio_tester_beta.md`;
* `registro_tester_beta.md`;
* `risposte_email.txt`.
Il registro dei tester serve a raccogliere informazioni relative a:

* dispositivi utilizzati;
* installazioni;
* feedback;
* problemi;
* suggerimenti;
* verifiche effettuate.

Le informazioni raccolte devono essere utilizzate per migliorare la qualità della versione di test.

---

## 25. File di prova

Nella cartella principale del progetto sono presenti file destinati alle verifiche tecniche, tra cui:

```text
test-conferenza.html
prova-speaker.html
provaa-audio.html
```

Questi file sono strumenti di test e non devono essere considerati automaticamente pagine principali dell'applicazione.

La loro eventuale inclusione nella pubblicazione deve essere valutata separatamente.

---

## 26. QR Code

La cartella:

```text
documentazione/QR_CODE/
```

contiene il QR Code destinato all'accesso all'ambiente di prova.

Il QR Code della versione ufficiale deve rimanere distinto e deve essere utilizzato esclusivamente per la produzione.

Prima della pubblicazione occorre verificare che ciascun QR Code punti all'ambiente corretto.

---

## 27. Sviluppi futuri

Tra le idee e le funzioni che possono essere valutate in futuro figurano:

* gestione degli orari della Comunità;
* gestione degli orari della conferenza;
* attivazione e disattivazione delle funzioni Comunità;
* notifiche;
* statistiche anonime;
* dirette Live;
* ulteriori categorie;
* funzioni di accompagnamento personale;
* evoluzione del progetto «Accanto a Te».

Le proposte vengono raccolte nel documento:

```text
documentazione/SUGGERIMENTI_FUTURI.md
```

Lo stato di ciascuna proposta deve distinguere tra idea, valutazione, sviluppo, verifica e completamento.

---

## 28. Stato generale del progetto

### Beta 1.0.3

**Stato:** 🟡 sviluppo e verifica.


La versione deve completare i controlli funzionali, le prove sui dispositivi e la revisione della documentazione prima dell'eventuale passaggio in produzione.

### Palinsesto H24

**Stato:** 🟡 progettazione e sviluppo.

Il palinsesto è separato dalla Beta 1.0.3 e non deve essere dichiarato disponibile fino al completamento delle verifiche.

### Principio generale

> Prima si verifica il lavoro nell'ambiente DR-TEST, poi si valuta l'approvazione e soltanto successivamente si prepara l'eventuale pubblicazione in produzione.

---

# PARTE IV — BETA 1.0.4

## 29. Stato della Beta 1.0.4

La Beta 1.0.4 rappresenta l'evoluzione del progetto Dialoghi Radio nell'ambiente DR-TEST.

Questa versione comprende una prima parte del palinsesto H24, già integrata nell'applicazione locale e sottoposta a utilizzo continuativo.

**Stato:** 🟡 implementazione parziale e verifica continuativa.

L'obiettivo è consolidare le funzionalità già presenti, mantenendo separati gli sviluppi ancora da completare e le verifiche necessarie prima della pubblicazione nel repository di test.

## 30. Test effettuati sul palinsesto

Il palinsesto presente nella versione locale è stato utilizzato per oltre un mese, sia su computer sia su dispositivi mobili.

Durante questo periodo sono state effettuate sessioni di riproduzione continua della durata indicativa di circa quattro ore, senza problemi riscontrati nell'esperienza d'uso descritta.

I test effettuati costituiscono un riscontro positivo sulla stabilità della versione attualmente utilizzata.

Questa valutazione si riferisce alle prove effettivamente svolte e non costituisce una certificazione del funzionamento di tutte le funzioni, di tutti i dispositivi o di un'intera programmazione di 24 ore.

## 31. Stato delle funzionalità H24

Il palinsesto H24 è parzialmente implementato nella versione locale della Beta 1.0.4.

Le funzionalità già presenti devono essere distinte da quelle ancora da completare o verificare.

Prima di dichiarare completato il progetto sarà necessario controllare, in particolare:

* la sincronizzazione tra orario e contenuto previsto;
* la selezione del Rosario in base al giorno della settimana;
* il comportamento complessivo del ciclo di riproduzione;
* la visualizzazione del contenuto in onda e di quelli successivi;
* il funzionamento delle parti non ancora verificate;
* l'eventuale integrazione con le altre modalità di riproduzione dell'applicazione.

Le verifiche dovranno essere effettuate sulla versione effettivamente presente nel progetto, senza presumere che tutte le funzionalità previste siano già operative.

## 32. Preparazione del repository di test

La versione locale attuale è destinata a essere preparata per il repository GitHub `DialoghiRadio-TEST` come Beta 1.0.4.

Prima della pubblicazione occorrerà:

* controllare i file modificati;
* allineare la documentazione alla versione effettiva;
* verificare i riferimenti alla versione;
* controllare il codice senza introdurre modifiche funzionali non richieste;
* verificare il comportamento dell'applicazione dopo gli eventuali interventi di sola formattazione;
* effettuare le verifiche finali nell'ambiente di test.

La pubblicazione nel repository di test non equivale all'autorizzazione al passaggio in produzione.

## 33. Formattazione del codice

Durante la preparazione della Beta 1.0.4, gli eventuali interventi sui file di codice dovranno limitarsi alla formattazione e al miglioramento della leggibilità.

Non dovranno essere modificate intenzionalmente la logica applicativa, le funzioni, i collegamenti, le configurazioni o il comportamento del palinsesto.

Ogni intervento dovrà essere controllato per evitare modifiche accidentali al funzionamento. Se un file richiede una correzione funzionale, questa dovrà essere identificata e valutata separatamente, senza essere introdotta come semplice operazione di formattazione.

## 34. Separazione tra Beta 1.0.3 e Beta 1.0.4

La Beta 1.0.3 rimane la versione precedente del progetto.

La Beta 1.0.4 è la versione locale attualmente in preparazione per il repository di test e comprende una parte del palinsesto H24 già sottoposta a prove continuative.

La documentazione deve mantenere questa distinzione, senza attribuire alla Beta 1.0.3 funzionalità introdotte successivamente e senza dichiarare completato il palinsesto H24 prima delle verifiche necessarie.

### Principio operativo

> La Beta 1.0.4 viene preparata a partire dalla versione locale effettivamente testata. La documentazione viene aggiornata per descrivere lo stato reale del progetto, mentre il codice viene preservato nel funzionamento. La pubblicazione nel repository di test avverrà soltanto dopo il controllo dei file e con autorizzazione esplicita.

---

❤️ **Dialoghi Radio**
