// ============================================
// DIALOGHI RADIO - Gestione Categorie & Player
// ============================================

const CATEGORIE = [
    "Domande di vita vera",
    "Buongiorno",
    "Pillola di Luce",
    "Accanto a Te",
    "Percorso Biblico",
    "Sorriso quotidiano",
    "Archivio Preghiere",
    "Alla scuola dell’Amore",
    "Scenette",
    "Riflessioni di Fede"
];

let episodiGlobali = [];

// ============================================
// 📻 INIZIALIZZAZIONE FEED ED EVENTI
// ============================================

const feedUrl = typeof CONFIG !== "undefined" ? CONFIG.audio.feed : "https://billowing-silence-9fc4.teisasa3.workers.dev/";

fetch(`${feedUrl}?nocache=${new Date().getTime()}`)
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(str, "text/xml");
        const items = [...xml.querySelectorAll("item")];
        episodiGlobali = items;

        // Gestione Pulsante "Sorprendimi"
        const pulsanteCasuale = document.getElementById("sorprendimi");
        if (pulsanteCasuale) {
            pulsanteCasuale.addEventListener("click", () => gestisciSorprendimi(items));
        }

        // Listener Selettore Categoria
        const selettore = document.getElementById("selettore");
        if (selettore) {
            selettore.addEventListener("change", function () {
                const categoria = this.value;
                localStorage.setItem("ultimaCategoria", categoria);
                mostraEpisodi(categoria);
                cambiaSfondoCategoria(categoria);
            });
        }

        // Caricamento iniziale stato/categoria salvata
        const ultimaCategoria = localStorage.getItem("ultimaCategoria");
        if (ultimaCategoria && selettore) {
            selettore.value = ultimaCategoria;
            mostraEpisodi(ultimaCategoria);
            cambiaSfondoCategoria(ultimaCategoria);
        } else {
            sfondoNeutro();
            mostraEpisodi("tutte");
        }
    })
    .catch(error => {
        const risultato = document.getElementById("risultato");
        if (risultato) risultato.innerHTML = "Errore durante il caricamento del feed.";
        console.error("Errore Feed:", error);
    });

// ============================================
// 🎲 LOGICA "SORPRENDIMI"
// ============================================

function gestisciSorprendimi(items) {
    const ascoltate = JSON.parse(localStorage.getItem("puntateAscoltate")) || [];
    const categoriaEl = document.getElementById("categoria-casuale");
    const categoriaScelta = categoriaEl ? categoriaEl.value : "tutte";

    const episodiCategoria = items.filter(ep => {
        const titolo = ep.querySelector("title")?.textContent || "";
        return categoriaScelta === "tutte" || titolo.includes(`[${categoriaScelta}]`);
    });

    const ascoltateCategoria = episodiCategoria.filter(ep => {
        const link = ep.querySelector("link")?.textContent || "";
        const match = link.match(/(\d+)$/);
        return match && ascoltate.includes(match[1]);
    });

    const disponibili = episodiCategoria.filter(ep => {
        const link = ep.querySelector("link")?.textContent || "";
        const match = link.match(/(\d+)$/);
        return match && !ascoltate.includes(match[1]);
    });

    if (disponibili.length === 0) {
        alert("Hai già ascoltato tutte le puntate disponibili in questa categoria!");
        return;
    }

    const casuale = disponibili[Math.floor(Math.random() * disponibili.length)];
    const titolo = casuale.querySelector("title")?.textContent || "";
    const link = casuale.querySelector("link")?.textContent || "";
    const match = link.match(/(\d+)$/);

    if (!match) return;
    const id = match[1];

    const rapportoEl = document.getElementById("rapporto-casuale");
    if (rapportoEl) {
        rapportoEl.innerHTML = `
            Categoria: <b>${categoriaScelta}</b><br><br>
            Episodi totali: <b>${episodiCategoria.length}</b><br>
            ✅ Già ascoltati: <b>${ascoltateCategoria.length}</b><br>
            🌱 Ancora da scoprire: <b>${disponibili.length}</b><br><br>
        `;
    }

   caricaPlayer(id, titolo, "casuale");

const playerEl = document.getElementById("casuale-player");

if (playerEl) {

    const condividi = document.createElement("button");

	condividi.className = "bottone bottone-condividi";
    condividi.textContent = "📤 Condividi questo episodio";

    condividi.style.marginTop = "10px";

    condividi.addEventListener("click", function () {
      condividiSorprendimi(titolo, id);
    });

    playerEl.appendChild(condividi);
}
}

// ============================================
// 🎧 PLAYER E MOSTRA EPISODI
// ============================================

function caricaPlayer(id, titolo, origine = "") {
    const titoloEl = document.getElementById("casuale-titolo");
    const playerEl = document.getElementById("casuale-player");

    if (!titoloEl || !playerEl) return;

    const messaggio = origine === "casuale" 
        ? "Questo episodio è stato scelto casualmente dal sistema." 
        : "Stai ascoltando un episodio selezionato dall'archivio.";

    const prefisso = origine === "casuale" ? "✨ <b>Scelta per te</b>" : "📚 <b>Dall'archivio</b>";

    titoloEl.innerHTML = `${prefisso}<br>🎙 ${titolo}`;
    playerEl.innerHTML = `
        <div>${messaggio}</div><br>
        <iframe
            src="https://widget.spreaker.com/player?episode_id=${id}&theme=light"
            width="100%"
            height="200"
            frameborder="0"
            allow="autoplay">
        </iframe>
    `;
}

function mostraEpisodi(categoria) {
    const risultato = document.getElementById("risultato");
    const titoloRisultato = document.getElementById("titolo-risultato");

    if (!risultato) return;

    const filtrati = categoria === "tutte" 
        ? episodiGlobali 
        : episodiGlobali.filter(ep => {
            const titolo = ep.querySelector("title")?.textContent || "";
            return titolo.includes(`[${categoria}]`);
        });

    if (titoloRisultato) {
        titoloRisultato.innerHTML = `📋 Episodi trovati: ${filtrati.length}`;
    }

    let html = "";
    filtrati.forEach(ep => {
        const titolo = ep.querySelector("title")?.textContent || "";
        const link = ep.querySelector("link")?.textContent || "";

        html += `
            <div class="categoria episodio-cliccabile" data-id="${link}">
                🎙 ${titolo}
            </div>
        `;
    });

    risultato.innerHTML = html;

    // Aggiunta Event Listener ai singoli episodi della lista
    document.querySelectorAll(".episodio-cliccabile").forEach(elemento => {
        elemento.addEventListener("click", function () {
            const link = this.dataset.id;
            const match = link.match(/(\d+)$/);

            if (!match) {
                console.log("ID Spreaker non trovato");
                return;
            }

            const id = match[1];
            let ascoltate = JSON.parse(localStorage.getItem("puntateAscoltate")) || [];

            if (!ascoltate.includes(id)) {
                ascoltate.push(id);
                localStorage.setItem("puntateAscoltate", JSON.stringify(ascoltate));
            }

            caricaPlayer(id, this.textContent, "lista");
        });
    });
}

// ============================================
// 🎨 GESTIONE SFONDI DINAMICI
// ============================================

function sfondoNeutro() {
    const risultato = document.getElementById("risultato");
    if (!risultato) return;

    risultato.style.backgroundImage = "url('immagini/sfondo-neutro.jpg')";
    risultato.style.backgroundSize = "cover";
    risultato.style.backgroundPosition = "center";
}

function cambiaSfondoCategoria(categoria) {
    const risultato = document.getElementById("risultato");
    if (!risultato) return;

    const sfondi = {
        "Domande di vita vera": "sfondo-domande.jpg",
        "Buongiorno": "sfondo-buongiorno.jpg",
        "Pillola di Luce": "sfondo-luce.jpg",
        "Accanto a Te": "sfondo-accanto.jpg",
        "Percorso Biblico": "sfondo-bibbia.jpg",
        "Sorriso quotidiano": "sfondo-sorriso.jpg",
        "Archivio Preghiere": "sfondo-preghiera.jpg",
        "Alla scuola dell’Amore": "sfondo-allascuola.jpg",
        "Scenette": "sfondo-scenette.jpg",
        "Riflessioni di Fede": "sfondo-riflessioni.jpg"
    };

    const img = sfondi[categoria] || "sfondo-neutro.jpg";

    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundImage = `url('immagini/${img}')`;
    overlay.style.backgroundSize = "cover";
    overlay.style.backgroundPosition = "center";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.5s ease";

    risultato.style.position = "relative";
    risultato.appendChild(overlay);

    setTimeout(() => {
        overlay.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        risultato.style.backgroundImage = overlay.style.backgroundImage;
        if (risultato.contains(overlay)) {
            risultato.removeChild(overlay);
        }
    }, 500);
}