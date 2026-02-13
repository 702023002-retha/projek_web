function back(){
location.href="index.html"
}

/* ===== DECOR ===== */

const bg=document.getElementById("bgDecor")

/* broken hearts */

for(let i=0;i<18;i++){
let h=document.createElement("div")
h.className="sadHeart"
h.innerHTML="🥺"
h.style.left=Math.random()*100+"vw"
h.style.fontSize=(30+Math.random()*70)+"px"
h.style.animationDuration=(8+Math.random()*10)+"s"
h.style.animationDelay=Math.random()*6+"s"
bg.appendChild(h)
}

/* rain sparkle */

for(let i=0;i<40;i++){
let r=document.createElement("div")
r.className="rain"
r.style.left=Math.random()*100+"vw"
r.style.animationDuration=(3+Math.random()*4)+"s"
r.style.animationDelay=Math.random()*2+"s"
bg.appendChild(r)
}
