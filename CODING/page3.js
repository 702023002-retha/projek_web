const gallery = document.querySelectorAll(".card");
const container = document.querySelector(".loveParticles");
const nextBtn = document.getElementById("nextBtn");

// Animasi muncul foto satu per satu
gallery.forEach((card, index)=>{
    setTimeout(()=>{
        card.classList.add("show");
    }, index*800);
});

// Hearts springkel di background
for(let i=0;i<50;i++){
    const p = document.createElement("div");
    p.classList.add("loveParticle");
    p.innerText = "💖";
    p.style.left = Math.random()*100 + "%";
    p.style.fontSize = (10 + Math.random()*12) + "px";
    p.style.animationDuration = (4 + Math.random()*6) + "s";
    p.style.animationDelay = Math.random()*5 + "s";
    container.appendChild(p);
}

// Next button
function goNext(){
    window.location.href = "page4.html";
}
