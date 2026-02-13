const range = document.getElementById("loveRange");
const meter = document.getElementById("loveMeter");
const visual = document.getElementById("loveVisual");

range.oninput = () => {
    const val = range.value;
    meter.innerText = val + "%";
    drawLove(val);
};

function drawLove(val){
    visual.innerHTML = "";

    let heart = document.createElement("div");
    heart.innerText = "💗";

    // ukuran membesar sesuai persen
    let size = 40 + (val * 1.3);
    heart.style.fontSize = size + "px";

    // glow makin besar makin terang
    heart.style.filter = `drop-shadow(0 0 ${val/2}px rgba(255,80,140,.9))`;

    // animasi kedut
    heart.style.animation = "pulseLove 1.1s infinite";
    heart.style.transition = "all .3s ease";

    visual.appendChild(heart);
}

drawLove(50);


/* VALIDASI NEXT */

function nextPage(){
    const a = q1.value.trim();
    const b = q2.value.trim();
    const c = q3.value.trim();

    if(!a || !b || !c){
        alert("Isi semua jawaban dulu ya sayang 💌");
        return;
    }

    window.location.href = "page5.html";
}

function nextPage() {
    // Ambil data textarea
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;
    const lovePercent = document.getElementById("loveRange").value;

    // Simpan ke localStorage
    localStorage.setItem("q1", q1);
    localStorage.setItem("q2", q2);
    localStorage.setItem("q3", q3);
    localStorage.setItem("lovePercent", lovePercent);

    // Redirect ke page5
    window.location.href = "page5.html";
}

// Update loveMeter realtime
const loveRange = document.getElementById("loveRange");
const loveMeter = document.getElementById("loveMeter");
loveRange.addEventListener("input", function() {
    loveMeter.innerText = this.value + "%";
});
