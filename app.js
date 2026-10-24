// ============================================
// DIALOGHI RADIO - Gestione Home (Beta 1.0.3)
// ============================================
// ============================================
// 🚧 CONTROLLO MODALITÀ TEST
// ============================================

if (
  typeof CONFIG !== "undefined" &&
  CONFIG.ambiente &&
  CONFIG.ambiente.nome === "test" &&
  CONFIG.ambiente.testAttivo === false
) {
  document.body.innerHTML = `
        <main style="
            max-width: 700px;
            margin: 80px auto;
            padding: 30px;
            text-align: center;
            font-family: sans-serif;
        ">
            <h1>📻 Dialoghi Radio</h1>

            <h2>🚧 Versione di test non più disponibile</h2>

            <p>
                Questa versione di Dialoghi Radio è stata utilizzata
                per la fase di test.
            </p>

            <p>
                I test sono terminati.
                Per continuare a utilizzare Dialoghi Radio,
                spostati sulla versione ufficiale.
            </p>

            <a
                href="${CONFIG.ambiente.produzioneUrl}"
                class="bottone"
                style="
                    display: inline-block;
                    margin-top: 20px;
                    text-decoration: none;
                "
            >
                📻 Vai a Dialoghi Radio
            </a>
        </main>
    `;

  throw new Error("DR-TEST disattivato: utilizzare la versione di produzione.");
}
// Caricamento messaggi di condivisione
fetch("contenuti/messaggi-condivisione.json")
  .then((response) => response.json())
  .then((data) => {
    window.messaggi = data;
  })
  .catch((error) => {
    console.error("Errore caricamento messaggi:", error);
  });

// ============================================
// 🌅 PENSIERO DEL GIORNO
// ============================================

const boxPensiero = document.getElementById("contenutoGiornaliero");

if (boxPensiero) {
  boxPensiero.style.opacity = "0";

  fetch("contenuti/pensieri.json")
    .then((response) => response.json())
    .then((pensieri) => {
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
    .catch((error) => {
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
  stopRadio.addEventListener("click", function () {
    audioRadio.pause();
    audioRadio.currentTime = 0;
    audioRadio.load();

    playRadio.innerHTML = "▶️ Play";
    statoRadio.innerHTML = "";
    statoRadio.classList.remove("radio-attiva");
    if (contenutoOnAir) {
      contenutoOnAir.innerHTML = `
			▶️ Premi Play per entrare nell'ascolto.
		`;
    }

    if (prossimiOnAir) {
      prossimiOnAir.innerHTML = "";
    }
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
    url: url,
  };

  if (navigator.share) {
    navigator.share(dati).catch((error) => {
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
  const url = "https://www.spreaker.com/episode/" + id;

  let testo = window.messaggi?.episodio?.testo;

  if (!testo) {
    console.error("Messaggio episodio non trovato.");
    return;
  }

  testo = testo.replace("{titolo}", titolo);

  condividiContenuto(testo, url);
}
function condividiSorprendimi(titolo, id) {
  const url = "https://www.spreaker.com/episode/" + id;

  let testo = window.messaggi?.sorprendimi?.testo;

  if (!testo) {
    console.error("Messaggio Sorprendimi non trovato.");
    return;
  }

  testo = testo.replace("{titolo}", titolo);

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

  const testo = "Ti condivido la guida per scoprire come usare Dialoghi Radio.";

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

        document
          .getElementById("aggiornaApp")
          ?.addEventListener("click", function () {
            location.reload();
          });
      }
    }

    localStorage.setItem("versioneApp", versioneCorrente);
  }
});
// ============================================
// 🔴 ON AIR — ACCANTO A TE
// ============================================

const contenutoOnAir = document.getElementById("contenutoOnAir");

const prossimiOnAir = document.getElementById("prossimiOnAir");

const audioRadioOnAir = document.getElementById("audioRadio");

if (contenutoOnAir && audioRadioOnAir) {
  let playlistOnAir = [];
  let indiceOnAir = 0;

  fetch("contenuti/onair.json")
    .then((response) => response.json())
    .then((contenuti) => {
      const oraInizioCiclo = contenuti.oraInizioCiclo;

      //playlistOnAir =
      //    contenuti.playlist.filter(
      //        contenuto =>
      //            contenuto.attivo === true
      //    );

      // ========================================
      // GIORNO DELLA SETTIMANA
      // ========================================

      const giorniSettimana = [
        "domenica",
        "lunedi",
        "martedi",
        "mercoledi",
        "giovedi",
        "venerdi",
        "sabato",
      ];

      const oggi = giorniSettimana[new Date().getDay()];

      // ========================================
      // COSTRUISCE PLAYLIST ON AIR
      // ========================================

      playlistOnAir = contenuti.playlist.filter((contenuto) => {
        // Contenuti normali
        if (contenuto.tipo !== "preghiere") {
          return contenuto.attivo === true;
        }

        // Rosario:
        // viene scelto automaticamente in base al giorno
        return contenuto.giorno === oggi;
      });

      //console.log(
      //    "ROSARIO DEL GIORNO:",
      //    oggi,
      //    playlistOnAir.find(
      //        contenuto =>
      //            contenuto.tipo === "preghiere"
      //    )
      //);

      if (playlistOnAir.length === 0) {
        contenutoOnAir.textContent = "🔴 ON AIR non disponibile al momento.";
        return;
      }

      // ========================================
      // CALCOLA LA PROSSIMA ANCORA
      // ========================================

      function calcolaProssimaAncora() {
        // ORA DI INIZIO DEL CICLO - TEST

        const adesso = new Date();

        const [oreCiclo, minutiCiclo] = oraInizioCiclo.split(":").map(Number);

        const inizioCiclo = new Date(adesso);

        inizioCiclo.setHours(oreCiclo, minutiCiclo, 0, 0);

        // Se siamo prima delle 18:00,
        // consideriamo il ciclo iniziato ieri
        if (adesso < inizioCiclo) {
          inizioCiclo.setDate(inizioCiclo.getDate() - 1);
        }

        const secondiTrascorsi = Math.floor((adesso - inizioCiclo) / 1000);

        // Durata totale della playlist
        const durataTotale = playlistOnAir.reduce(
          (totale, contenuto) => totale + contenuto.durataSecondi,
          0,
        );

        // Posizione attuale nel ciclo
        const posizione = secondiTrascorsi % durataTotale;

        let tempoCumulato = 0;

        for (let i = 0; i < playlistOnAir.length; i++) {
          const contenuto = playlistOnAir[i];

          tempoCumulato += contenuto.durataSecondi;

          // L'episodio che contiene
          // la posizione attuale è già iniziato.
          // Quindi scegliamo il successivo.

          if (tempoCumulato > posizione) {
            const prossimoIndice = (i + 1) % playlistOnAir.length;

            console.log(
              "SINCRONIZZAZIONE:",
              adesso.toLocaleTimeString(),
              "→",
              playlistOnAir[prossimoIndice].titolo,
            );

            return prossimoIndice;
          }
        }

        return 0;
      }

      // ========================================
      // PREPARA CONTENUTO
      // ========================================

      function preparaContenuto(indice) {
        const contenuto = playlistOnAir[indice];

        if (contenuto.spreakerEpisodeId) {
          audioRadioOnAir.src = `https://api.spreaker.com/v2/episodes/${contenuto.spreakerEpisodeId}/play.mp3`;
        } else {
          audioRadioOnAir.src = contenuto.file;
        }

        audioRadioOnAir.load();

        const oraPartenza = new Date();

        contenutoOnAir.innerHTML = `
                    🔴 <strong>IN ONDA</strong><br>
                    🎧 ${contenuto.titolo}
                `;

        // ========================================
        // PROSSIMI DUE
        // ========================================

        if (prossimiOnAir) {
          let html = `
                        <div style="margin-top:10px;">
                            <strong>Prossimamente</strong>
                        </div>
                    `;

          let orarioPrevisto = new Date(
            oraPartenza.getTime() + contenuto.durataSecondi * 1000,
          );

          for (let i = 1; i <= 2; i++) {
            const prossimoIndice = (indice + i) % playlistOnAir.length;

            const prossimo = playlistOnAir[prossimoIndice];

            const ore = String(orarioPrevisto.getHours()).padStart(2, "0");

            const minuti = String(orarioPrevisto.getMinutes()).padStart(2, "0");

            html += `
                            <div>
                                ↓ ${ore}:${minuti}
                                — 🎧 ${prossimo.titolo}
                            </div>
                        `;

            orarioPrevisto = new Date(
              orarioPrevisto.getTime() + prossimo.durataSecondi * 1000,
            );
          }

          prossimiOnAir.innerHTML = html;
        }

        console.log(
          "ON AIR:",
          contenuto.titolo,
          "Partenza:",
          oraPartenza.toLocaleTimeString(),
        );
      }

      // ========================================
      // PRIMA APERTURA
      // ========================================

      indiceOnAir = calcolaProssimaAncora();

      preparaContenuto(indiceOnAir);

      // ========================================
      // PLAY RADIO
      // RICALCOLA SEMPRE L'ANCORA
      // ========================================
      if (playRadio) {
        playRadio.addEventListener("click", function () {
          // ========================================
          // PAUSA
          // ========================================

          if (!audioRadioOnAir.paused) {
            audioRadioOnAir.pause();

            playRadio.innerHTML = "▶️ Play";
            statoRadio.innerHTML = "⏸️ In pausa";
            statoRadio.classList.remove("radio-attiva");

            return;
          }

          // ========================================
          // PLAY
          // ========================================

          const nuovoIndice = calcolaProssimaAncora();

          if (nuovoIndice !== indiceOnAir) {
            indiceOnAir = nuovoIndice;

            preparaContenuto(indiceOnAir);
          }

          audioRadioOnAir
            .play()
            .then(() => {
              statoRadio.innerHTML = "🔴 In onda... 📡";

              statoRadio.classList.add("radio-attiva");

              playRadio.innerHTML = "⏸️ Pausa";
            })
            .catch((error) => {
              console.log("Riproduzione automatica bloccata:", error);
            });
        });
      }

      // ========================================
      // PASSAGGIO AUTOMATICO
      // ========================================

      audioRadioOnAir.addEventListener("ended", function () {
        indiceOnAir++;

        if (indiceOnAir >= playlistOnAir.length) {
          indiceOnAir = 0;
        }

        preparaContenuto(indiceOnAir);

        audioRadioOnAir
          .play()
          .then(() => {
            if (statoRadio) {
              statoRadio.innerHTML = "🔴 In onda... 📡";

              statoRadio.classList.add("radio-attiva");
            }

            if (playRadio) {
              playRadio.innerHTML = "⏸️ Pausa";
            }
          })
          .catch((error) => {
            console.log("Riproduzione automatica bloccata dal browser:", error);
          });
      });
    })
    .catch((error) => {
      console.error("Errore caricamento ON AIR:", error);

      contenutoOnAir.textContent = "🔴 ON AIR non disponibile.";
    });
}
