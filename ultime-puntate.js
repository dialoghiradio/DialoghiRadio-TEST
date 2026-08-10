// ============================================
// DIALOGHI RADIO - Gestione ultime puntate
// ============================================

// Indirizzo del feed RSS filtrato tramite Cloudflare Worker
const feed = CONFIG.audio.feed;

// Imposta link all'archivio Castbox se presente nell'HTML
const archivio = document.getElementById("tutte-puntate");
if (archivio) {
    archivio.href = CONFIG.audio.castbox;
}

// Inizializza il contatore degli ascolti all'avvio
aggiornaContatore();

// Recupera il feed RSS (no-cache per dati sempre aggiornati)
fetch(`${feed}?nocache=${new Date().getTime()}`)
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");
        const items = [...xml.querySelectorAll("item")];

        const lista = document.getElementById("episodi");
        if (!lista) {
            console.error("Contenitore 'episodi' non trovato");
            return;
        }

        // Pulisce il messaggio di caricamento iniziale
        lista.innerHTML = "";

        // Mostra le prime 10 puntate del feed
        items.slice(0, 10).forEach(ep => {
            const titolo = ep.querySelector("title")?.textContent || "Senza titolo";
            const link = ep.querySelector("link")?.textContent || "";

            // Estrae l'ID episodio dal link Spreaker
            const match = link.match(/(\d+)$/);
            if (!match) return;

            const id = match[1];
            const elemento = document.createElement("div");

            // Verifica lo stato dell'ascolto salvato
            const ascoltate = JSON.parse(localStorage.getItem("puntateAscoltate")) || [];
            const giaAscoltata = ascoltate.includes(id);

            // Costruisce la scheda della puntata
            const titoloEscaped = titolo.replace(/'/g, "\\'");
            elemento.innerHTML = `
                <h3>🎙 ${titolo}</h3>
                <iframe
                    src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
                    width="100%"
                    height="200"
                    frameborder="0"
                    allow="autoplay">
                </iframe>
                <button class="bottone ascoltato" data-id="${id}">
                    ${giaAscoltata ? "✅ Già ascoltata" : "☐ Già ascoltata"}
                </button>
				<button class="bottone bottone-condividi" onclick="condividiEpisodio('${titoloEscaped}', '${id}')">
				📤 Condividi
				</button>
                <hr>
            `;

            lista.appendChild(elemento);

            // Gestione interattiva del pulsante "Già ascoltata"
            const pulsante = elemento.querySelector(".ascoltato");
            pulsante.addEventListener("click", () => {
                let ascoltateAttuali = JSON.parse(localStorage.getItem("puntateAscoltate")) || [];

                if (ascoltateAttuali.includes(id)) {
                    ascoltateAttuali = ascoltateAttuali.filter(x => x !== id);
                    pulsante.textContent = "☐ Già ascoltata";
                } else {
                    ascoltateAttuali.push(id);
                    pulsante.textContent = "✅ Già ascoltata";
                }

                localStorage.setItem("puntateAscoltate", JSON.stringify(ascoltateAttuali));
                aggiornaContatore();
            });
        });
    })
    .catch(error => {
        console.error("Errore durante il caricamento del feed RSS:", error);
        const lista = document.getElementById("episodi");
        if (lista) {
            lista.innerHTML = "<p>Impossibile caricare le puntate al momento.</p>";
        }
    });

// ============================================
// FUNZIONI DI UTILITÀ
// ============================================

/**
 * Aggiorna il contatore visivo degli episodi ascoltati dall'utente
 */
function aggiornaContatore() {
    const boxContatore = document.getElementById("contatore-ascolti");
    if (boxContatore) {
        const ascoltate = JSON.parse(localStorage.getItem("puntateAscoltate")) || [];
        boxContatore.innerHTML = `🎧 Episodi già ascoltati: ${ascoltate.length}`;
    }
}

/**
 * Condivide il link dell'episodio
 */
function condividiEpisodio(titolo, id) {
    const url = "https://www.spreaker.com/episode/" + id;
    let testo = window.messaggi.episodio.testo;
    testo = testo.replace("{titolo}", titolo);

    if (typeof condividiContenuto === "function") {
        condividiContenuto(testo, url);
    } else {
        console.log("Condivisione:", testo, url);
    }
}