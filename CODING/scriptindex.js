let pin=""

function press(n){
if(pin.length<6){
pin+=n
render()
}
}

function del(){
pin=pin.slice(0,-1)
render()
}

function render(){
document.getElementById("display").textContent =
"•".repeat(pin.length) + " ".repeat(6-pin.length)
}

function check(){
if(pin==="021005"){
location.href="page2.html"
}else{
location.href="wrong.html"
}
}

/* ===== DECOR BACKGROUND ===== */

const bg=document.createElement("div")
bg.id="bgDecor"
document.body.appendChild(bg)

/* HEART CONFETTI BESAR ABSTRAK */

const hearts=["💗","💗","💖","💖","💕","💘","💝"]

for(let i=0;i<22;i++){
let h=document.createElement("div")
h.className="bigHeart"
h.innerHTML=hearts[Math.floor(Math.random()*hearts.length)]

h.style.left=Math.random()*100+"vw"

/* ukuran acak besar */
h.style.fontSize=(40+Math.random()*90)+"px"

/* kecepatan beda */
h.style.animationDuration=(12+Math.random()*12)+"s"

/* delay random */
h.style.animationDelay=Math.random()*8+"s"

bg.appendChild(h)
}

/* SPARKLE ABSTRAK */

for(let i=0;i<50;i++){
let s=document.createElement("div")
s.className="sparkle"
s.style.left=Math.random()*100+"vw"
s.style.top=Math.random()*90+"vh"
s.style.animationDelay=Math.random()*3+"s"
bg.appendChild(s)
}
