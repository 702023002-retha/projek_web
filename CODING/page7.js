/* ===== CONFETTI LOVE ===== */

function confettiBurst(){
for(let i=0;i<30;i++){
let c=document.createElement("div")
c.innerHTML="💖"
c.style.position="fixed"
c.style.left="50%"
c.style.top="50%"
c.style.fontSize=(20+Math.random()*30)+"px"
c.style.pointerEvents="none"
c.style.transition="1.2s"

document.body.appendChild(c)

setTimeout(()=>{
c.style.transform=`translate(${(Math.random()-0.5)*600}px,
${(Math.random()-0.5)*500}px)`
c.style.opacity=0
},20)

setTimeout(()=>c.remove(),1200)
}
}
