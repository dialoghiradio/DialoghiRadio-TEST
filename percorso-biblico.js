// ============================================
// DIALOGHI RADIO - Caricamento Percorso Biblico
// ============================================

const feed = CONFIG.audio.feed;

// ============================================
// 📖 CARICAMENTO PERCORSO BIBLICO
// ============================================

fetch(feed)
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");
        const items = [...xml.querySelectorAll("item")];

        const bibbia = document.getElementById("percorso-biblico");
        if (!bibbia) {
            console.error("Contenitore 'percorso-biblico' non trovato");
            return;
        }

        // Pulisce il messaggio di caricamento iniziale
        bibbia.innerHTML = "";

        let episodiTrovati = 0;

        items.forEach(ep => {
            const titoloElemento = ep.querySelector("title");
            const linkElemento = ep.querySelector("link");

            if (!titoloElemento || !linkElemento) return;

            const titolo = titoloElemento.textContent;
            const link = linkElemento.textContent;

            // Filtra solo gli episodi del Percorso Biblico
            if (!titolo.includes("[Percorso Biblico]")) return;

            // Recupera ID Spreaker dall'URL
            const match = link.match(/(\d+)$/);
            if (!match) {
                console.warn("ID episodio non trovato per il link:", link);
                return;
            }

            const id = match[1];
            const titoloPulito = titolo.replace("[Percorso Biblico]", "").trim();

            // Crea il blocco HTML dell'episodio
            const elemento = document.createElement("div");
            elemento.innerHTML = `
                <h3>📖 ${titoloPulito}</h3>
                <iframe
                    src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
                    width="100%"
                    height="200"
                    frameborder="0"
                    allow="autoplay">
                </iframe>
                <hr>
            `;

            bibbia.appendChild(elemento);
            episodiTrovati++;
        });

        // Se nessun episodio è stato trovato
        if (episodiTrovati === 0) {
            bibbia.innerHTML = "<p>Nessun episodio del Percorso Biblico trovato al momento.</p>";
        }
    })
    .catch(error => {
        console.error("Errore durante il caricamento del percorso biblico:", error);
        const contenitore = document.getElementById("percorso-biblico");
        if (contenitore) {
            contenitore.innerHTML = "<p>Impossibile caricare il percorso biblico al momento.</p>";
        }
    });

// ============================================
// 📤 CONDIVIDI PERCORSO BIBLICO
// ============================================

function condividiPercorso() {

    if (!window.messaggi || !window.messaggi.percorso) {
        console.error("Messaggi di condivisione del percorso non trovati");
        return;
    }

    const testo = window.messaggi.percorso.testo;

    if (typeof condividiContenuto === "function") {
        condividiContenuto(
            testo,
            CONFIG.percorsi.biblico.url
        );
    } else {
        console.log(
            "Condivisione percorso:",
            testo,
            CONFIG.percorsi.biblico.url
        );
    }
}