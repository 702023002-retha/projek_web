let chosen = "";

function choose(val){
    chosen = val;
    document.getElementById("popupText").innerText =
        "Pilihan kamu: " + val + " 💖";
    document.getElementById("popup").style.display = "flex";
}

function closePop(){
    document.getElementById("popup").style.display = "none";
}

function nextPage(){
    const d = document.getElementById("date").value;
    const t = document.getElementById("time").value;

    if(!chosen){
        alert("Pilih dulu date plan-nya ya 💌");
        return;
    }

    if(!d || !t){
        alert("Isi tanggal & jam dulu ya sayang ⏰");
        return;
    }

    window.location.href = "page6.html";
}

function choose(option) {
    localStorage.setItem("dateOption", option);
    const popupText = document.getElementById("popupText");
    popupText.innerText = `Kamu pilih: ${option} 💗`;
    document.getElementById("popup").style.display = "flex";
}

function closePop() {
    document.getElementById("popup").style.display = "none";
}

function nextPage() {
    // Ambil tanggal & jam
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Simpan ke localStorage
    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    // Redirect ke page6
    window.location.href = "page6.html";
}

