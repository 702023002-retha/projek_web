function scheduleCall(){
    const d = document.getElementById("date").value;
    const t = document.getElementById("time").value;

    if(!d || !t){
        alert("Isi tanggal & jam dulu ya sayang ⏰");
        return;
    }

    // Update popup text sesuai jadwal call
    document.getElementById("popupText").innerText =
        `Yay! Kita QTime Call pada ${d} jam ${t} 💖`;
    
    // Tampilkan popup
    document.getElementById("popup").style.display = "flex";

    // Ubah tombol popup menjadi Next Surprised
    const btn = document.getElementById("popupBtn");
    btn.innerText = "Next Surprised 💖";
    btn.onclick = function(){
        window.location.href = "page7.html";
    }
}

// Tetap sediakan fungsi closePop kalau mau hide popup (opsional)
function closePop(){
    document.getElementById("popup").style.display = "none";
}

function scheduleCall() {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Simpan ke localStorage
    localStorage.setItem("callDate", date);
    localStorage.setItem("callTime", time);

    // Tampilkan popup
    const popupText = document.getElementById("popupText");
    popupText.innerText = "Semua data sudah tersimpan! 💖";
    document.getElementById("popup").style.display = "flex";
}

//line//
// === page6.js ===

// Fungsi schedule call + langsung print
function scheduleCall() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!date || !time) {
    alert("Isi tanggal dan jam dulu 💌");
    return;
  }

  // Simpan data call
  localStorage.setItem("callDate", date);
  localStorage.setItem("callTime", time);

  // Ambil data page4 & page5
  const loveQ1 = localStorage.getItem("q1") || "";
  const loveQ2 = localStorage.getItem("q2") || "";
  const loveQ3 = localStorage.getItem("q3") || "";
  const loveMeter = localStorage.getItem("loveMeter") || "";
  const date5 = localStorage.getItem("date5") || "";
  const time5 = localStorage.getItem("time5") || "";
  const option = localStorage.getItem("option") || "";

  // Buat konten print
  const printContent = `
    <html>
    <head>
      <title>Seberapa Sayang Kamu 💗</title>
      <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        h1 { color: #ff69b4; }
        h2 { margin-top: 20px; color: #ff1493; }
        p { margin: 5px 0; }
        .section { margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <h1>Seberapa Sayang Kamu 💗</h1>
      <div class="section">
        <h2>Love Meter: ${loveMeter}</h2>
        <p>Hal paling kamu suka dari aku: ${loveQ1}</p>
        <p>Momen kita yang paling berkesan: ${loveQ2}</p>
        <p>Harapan kamu buat hubungan kita: ${loveQ3}</p>
      </div>
      <div class="section">
        <h2>Plan First Date Kita 💞</h2>
        <p>Pilihan romantis: ${option}</p>
        <p>Tanggal: ${date5}</p>
        <p>Jam: ${time5}</p>
      </div>
      <div class="section">
        <h2>QTime Call 💖</h2>
        <p>Tanggal Call: ${date}</p>
        <p>Jam Call: ${time}</p>
      </div>
    </body>
    </html>
  `;

  // Buka jendela baru untuk print
  const printWindow = window.open("", "_blank");
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.focus();

  // Tunggu sebentar biar printWindow ready, baru print
  setTimeout(() => {
    printWindow.print();

    // Setelah print/close, tampilkan popup dengan tombol Next Surprised
    document.getElementById("popupText").innerText = "PDF berhasil dicetak! 💖";
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupBtn").onclick = () => {
      window.location.href = "page7.html"; // Ganti dengan link page 7
    };
  }, 500);
}

// Fungsi menutup popup (jika perlu)
function closePop() {
  document.getElementById("popup").style.display = "none";
}
