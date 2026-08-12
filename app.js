// ============================================
// DIALOGHI RADIO - Gestione Home (Beta 1.0.2)
// ============================================

// Caricamento messaggi di condivisione
fetch("contenuti/messaggi-condivisione.json")
    .then(response => response.json())
    .then(data => {
        window.messaggi = data;
    })
    .catch(error => {
        console.error("Errore caricamento messaggi:", error);
    });

// ============================================
// 🌅 PENSIERO DEL GIORNO
// ============================================

const boxPensiero = document.getElementById("contenutoGiornaliero");

if (boxPensiero) {
    boxPensiero.style.opacity = "0";

    fetch("contenuti/pensieri.json")
        .then(response => response.json())
        .then(pensieri => {
            if (!pensieri || pensieri.length === 0) return;

            const indice = (new Date().getDate() - 1) % pensieri.length;
            const pensiero = pensieri[indice];
            window.pensieroGiorno = pensiero;

            boxPensiero.innerHTML = `
                <p>✨ <strong>Pensiero del giorno</strong></p>
                <p><em>"${pensiero.testo}"</em></p>
			<button class="bottone bottone-condividi" onclick="condividiPensiero()">
			📤 Condividi pensiero
			</button>
            `;

            setTimeout(() => {
                boxPensiero.style.transition = "opacity 1.5s";
                boxPensiero.style.opacity = "1";
            }, 300);
        })
        .catch(error => {
            console.error("Errore caricamento pensieri:", error);
            boxPensiero.innerHTML = "<p>Pensiero del giorno non disponibile.</p>";
            boxPensiero.style.opacity = "1";
        });
}

// ============================================
// 📻 MODALITÀ RADIO
// ============================================

const audioRadio = document.getElementById("audioRadio");
const statoRadio = document.getElementById("statoRadio");
const playRadio = document.getElementById("playRadio");
const stopRadio = document.getElementById("stopRadio");

if (audioRadio && statoRadio && playRadio && stopRadio) {
    playRadio.addEventListener("click", function () {
        if (audioRadio.paused) {
            audioRadio.play();
            playRadio.innerHTML = "⏸️ Pausa";
            statoRadio.innerHTML = "🔴 In onda... 📡";
            statoRadio.classList.add("radio-attiva");
        } else {
            audioRadio.pause();
            playRadio.innerHTML = "▶️ Play";
            statoRadio.innerHTML = "⏸️ In pausa";
            statoRadio.classList.remove("radio-attiva");
        }
    });

    stopRadio.addEventListener("click", function () {
        audioRadio.pause();
        audioRadio.currentTime = 0;
        audioRadio.load();

        playRadio.innerHTML = "▶️ Play";
        statoRadio.innerHTML = "";
        statoRadio.classList.remove("radio-attiva");
    });
	 // Quando l'audio termina naturalmente
    audioRadio.addEventListener("ended", function () {
        playRadio.innerHTML = "▶️ Play";
        statoRadio.innerHTML = "";
        statoRadio.classList.remove("radio-attiva");
    });
}

// ============================================
// 📱 CONDIVISIONI E UTILITY
// ============================================

function condividiApp() {
    const url = CONFIG.ambiente.url;
    const messaggio = window.messaggi?.home?.testo || "Ascolta Dialoghi Radio";

    condividiContenuto(messaggio, url);
}

function condividiContenuto(testo, url = window.location.href) {
    const dati = {
        title: "Dialoghi Radio",
        text: testo,
        url: url
    };

    if (navigator.share) {
        navigator.share(dati).catch(error => {
            console.log("Condivisione annullata:", error);
        });
    } else {
        const messaggioWhatsApp = encodeURIComponent(`${testo}\n\n${url}`);
        window.location.href = `https://wa.me/?text=${messaggioWhatsApp}`;
    }
}

// ============================================
// 🎧 CONDIVIDI SINGOLO EPISODIO
// ============================================

function condividiEpisodio(titolo, id) {

    const url =
        "https://www.spreaker.com/episode/" + id;

    let testo =
        window.messaggi?.episodio?.testo;

    if (!testo) {
        console.error("Messaggio episodio non trovato.");
        return;
    }

    testo =
        testo.replace("{titolo}", titolo);

    condividiContenuto(testo, url);
}
function condividiSorprendimi(titolo, id) {

    const url =
        "https://www.spreaker.com/episode/" + id;

    let testo =
        window.messaggi?.sorprendimi?.testo;

    if (!testo) {
        console.error("Messaggio Sorprendimi non trovato.");
        return;
    }

    testo =
        testo.replace("{titolo}", titolo);

    condividiContenuto(testo, url);
}
function condividiCategorie() {

    const url = window.location.href;

    const testo =
        window.messaggi?.categorie?.testo ||
        "📚 Scopri i percorsi, i temi e l'archivio ordinato di Dialoghi Radio.";

    condividiContenuto(testo, url);
}

function condividiPensiero() {
    if (!window.messaggi?.pensiero || !window.pensieroGiorno) {
        console.error("Dati del pensiero o dei messaggi non pronti.");
        return;
    }

    let testo = window.messaggi.pensiero.testo;
    testo = testo.replace("{pensiero}", window.pensieroGiorno.testo);

    condividiContenuto(testo, CONFIG.ambiente.url);
}

function condividiGuida() {
    const url = window.location.href;

    const testo =
        "Ti condivido la guida per scoprire come usare Dialoghi Radio.";

    condividiContenuto(testo, url);
}

// ============================================
// 🔔 GESTIONE VERSIONE ED EVENTI WINDOW
// ============================================

window.addEventListener("load", function () {
    const versioneApp = document.getElementById("versione-app");
    if (versioneApp && typeof CONFIG !== "undefined") {
        versioneApp.innerHTML = CONFIG.app.versione;
    }

    const versioneInfo = document.getElementById("versione-info");
    if (versioneInfo && typeof CONFIG !== "undefined") {
        versioneInfo.innerHTML = CONFIG.app.versione;
    }

    const dataAgg = document.getElementById("data-aggiornamento");
    if (dataAgg && typeof CONFIG !== "undefined") {
        dataAgg.innerHTML = `📻 App aggiornata il ${CONFIG.app.dataAggiornamento}`;
    }

    // Controllo aggiornamento versione salvata
    if (typeof CONFIG !== "undefined") {
        const versioneCorrente = CONFIG.app.versione;
        const versioneSalvata = localStorage.getItem("versioneApp");

        if (versioneSalvata && versioneSalvata !== versioneCorrente) {
            const avvisoContenitore = document.getElementById("avviso-versione");
            if (avvisoContenitore) {
                const avviso = document.createElement("div");
                avviso.innerHTML = `
                    <div style="background:#fff3cd; color:#856404; padding:15px; margin:15px; border-radius:10px; text-align:center;">
                        ✨ Nuova versione disponibile (${versioneCorrente})<br><br>
                        <button id="aggiornaApp" style="padding:8px 15px; border:none; border-radius:8px; background:#856404; color:white; font-weight:bold; cursor:pointer;">
                            Tocca per aggiornare
                        </button>
                    </div>
                `;
                avvisoContenitore.appendChild(avviso);

                document.getElementById("aggiornaApp")?.addEventListener("click", function () {
                    location.reload();
                });
            }
        }

        localStorage.setItem("versioneApp", versioneCorrente);
    }
});