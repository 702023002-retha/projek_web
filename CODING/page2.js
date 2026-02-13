const text = `
Aku bersyukur banget dipertemukan sama kamu.
Kamu itu rumah paling hangat buat aku.
Kalau dunia ribut, aku mau tetap di sisi kamu.
Aku pilih kamu — setiap hari.
`;

const music = document.getElementById("loveMusic"); // elemen audio

function openLetter(){
    document.getElementById("envBox").classList.add("open");

    confettiBurst();

    // mulai musik saat surat dibuka
    music.currentTime = 0;
    music.play();

    setTimeout(()=>{
        document.getElementById("afterOpen").style.display="block";
        typeText();
    },900);
}

/* TYPE EFFECT */
function typeText(){
    let i=0;
    let out="";
    let el=document.getElementById("typing");

    let t=setInterval(()=>{
        out+=text[i];
        el.innerHTML=out;
        i++;
        if(i>=text.length) clearInterval(t);
    },95);
}

/* CONFETTI LOVE */
function confettiBurst(){
    for(let i=0;i<30;i++){
        let c=document.createElement("div");
        c.innerHTML="💖";
        c.style.position="fixed";
        c.style.left="50%";
        c.style.top="50%";
        c.style.fontSize=(20+Math.random()*30)+"px";
        c.style.pointerEvents="none";
        c.style.transition="1.2s";

        document.body.appendChild(c);

        setTimeout(()=>{
            c.style.transform=`translate(${(Math.random()-0.5)*600}px,
            ${(Math.random()-0.5)*500}px)`;
            c.style.opacity=0;
        },20);

        setTimeout(()=>c.remove(),1200);
    }
}

/* NEXT PAGE */
function next(){
    // hentikan musik sebelum pindah halaman
    music.pause();
    music.currentTime = 0;

    location.href="page3.html";
}
