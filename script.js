import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgpVJlgArNzH1NpeiDPp2mYoD_WxVamN4",
  authDomain: "love-transmission-system.firebaseapp.com",
  projectId: "love-transmission-system",
  storageBucket: "love-transmission-system.appspot.com",
  messagingSenderId: "497546095508",
  appId: "1:497546095508:web:a8c41ba1e33f572b13bd81",
  measurementId: "G-Z8QJ67EERF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const arrival = new Date("2026-05-08T04:30:00+08:00");

const messages = {
  22: {
    audio: "audio/22.m4a",
    img: "images/22.jpg",
    cz: "Dobré ráno moje nejkrásnější a nejmilovanější Chloe. Extrémně hodně tě miluju, doufám, že to víš. Tohle je první zpráva v tomhle novém systému. Ještě tu musím pár věcí doladit, ale většina věcí by snad měla fungovat. Když budeš chtít, můžeš sem taky nahrát nějaké zprávy. Už mám za sebou první test dnešního dne a myslím, že to nebylo nejhorší, ale ani nejlepší teda. hehe. Doufám, že ty máš krásný, úspěšný den. Hodně na tebe myslím. Jsi ta nejúžasnější a nejlepší holka na světě, jsem šťastný, že tě mám. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, my most beautiful and loved Chloe. I love you so, so much, I hope you know that. This is the first message in this new system. I still have a few things to adjust, but most of it should be working. If you want, you can post some messages here, too. I’ve already taken my first test of the day, and I think it wasn’t the worst, but not the best either. Hehe. I hope you’re having a lovely, successful day. I’m thinking of you a lot. You’re the most amazing and best girl in the world. I’m so happy to have you. I love you so, so, so much, your koala husband, Rob."
  },
};

function daysRemaining(){return Math.floor((arrival - new Date())/(1000*60*60*24));}

function buildGrid(){
  const grid = document.getElementById("grid");
  const today = daysRemaining();

  const total = 22;
  const columns = 6;
  const remainder = total % columns;

  for(let i=22;i>=1;i--){

    if(i === remainder && remainder !== 0){
      const missing = columns - remainder;
      const leftPad = Math.floor(missing/2);

      for(let j=0;j<leftPad;j++){
        let spacer=document.createElement("div");
        spacer.style.visibility="hidden";
        grid.appendChild(spacer);
      }
    }

    let div=document.createElement("div");
    div.classList.add("day");
    div.innerHTML=i;
    if(i-1>=today){div.classList.add("unlocked"); div.onclick=()=>openMessage(i);}
    else{div.classList.add("locked");}
    grid.appendChild(div);
  }
}

function openMessage(day){
  let m = messages[day]; if(!m) return;
  const firstMessageDate=new Date(arrival); firstMessageDate.setDate(firstMessageDate.getDate()-21);
  const messageDate=new Date(firstMessageDate); messageDate.setDate(firstMessageDate.getDate()+(21-day));
  const formattedDate=messageDate.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});
  let imgHtml=m.img?`<img src="${m.img}">`:"";
  document.getElementById("popupContent").innerHTML=`
<pre>
--------------------
Date: ${formattedDate}
--------------------
</pre>

${imgHtml}

<audio controls>
<source src="${m.audio}">
</audio>

<b>CZECH</b><p>${m.cz}</p>
<hr>
<b>ENGLISH</b><p>${m.en}</p>

<div class="replySection">
<h4>reply to this lovely message :3</h4>
<textarea id="replyText"></textarea>
<input type="file" id="replyFile">
<button id="sendReplyButton" onclick="sendReply(${day})">send</button>
</div>

<pre>
--------------------
replies
--------------------
</pre>
<div id="replyList"></div>
`;
  document.getElementById("popup").classList.remove("hidden");
  loadReplies(day);
}

function closePopup(){document.getElementById("popup").classList.add("hidden");}

async function sendReply(day){
  const text = document.getElementById("replyText").value;
  const fileInput = document.getElementById("replyFile");
  const id = Date.now().toString();
  if(fileInput.files.length>0){
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onloadend = async ()=>{
      await setDoc(doc(db,"days",String(day),"replies",id),{audio:reader.result,time:Date.now()});
      fileInput.value="";
    };
    reader.readAsDataURL(file);
  } else if(text.trim()!==""){
    await setDoc(doc(db,"days",String(day),"replies",id),{text:text,time:Date.now()});
    document.getElementById("replyText").value="";
  }
}

function loadReplies(day){
  const repliesRef = collection(db,"days",String(day),"replies");
  onSnapshot(repliesRef,(snapshot)=>{
    const list = document.getElementById("replyList"); 
    list.innerHTML="";
    snapshot.forEach(doc=>{
      const r = doc.data(); 
      let html = "";
      const timeOptions = { hour: '2-digit', minute: '2-digit' };
      if(r.text){ 
        html += `<p>${r.text}</p><small>${new Date(r.time).toLocaleDateString()} ${new Date(r.time).toLocaleTimeString([], timeOptions)}</small>`; 
      }
      if(r.audio){ 
        html += `<audio controls><source src="${r.audio}"></audio><small>${new Date(r.time).toLocaleDateString()} ${new Date(r.time).toLocaleTimeString([], timeOptions)}</small>`; 
      }
      const div = document.createElement("div"); 
      div.className = "reply"; 
      div.innerHTML = html;
      list.appendChild(div);
    });
  });
}

function updateHeaderCountdown(){
  const header = document.getElementById("header");
  const diff = arrival - new Date();
  if(diff<=0){header.textContent=`\n-------------------------------\n LOVE TRANSMISSION SYSTEM v2.0\n-------------------------------\n\n0 days 0 hours 0 minutes\n`;return;}
  const days=Math.floor(diff/(1000*60*60*24));
  const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
  header.textContent=`\n-------------------------------\n LOVE TRANSMISSION SYSTEM v2.0\n-------------------------------\n\n${days} days ${hours} hours ${minutes} minutes\n`;
}

function showTransmission(){
  const key="transmissionSeen2";
  if(!localStorage.getItem(key)){
    document.getElementById("specialTransmission").classList.remove("hidden");
  }
}

function closeTransmission(){
  localStorage.setItem("transmissionSeen2","yes");
  document.getElementById("specialTransmission").classList.add("hidden");
}

updateHeaderCountdown();
setInterval(updateHeaderCountdown,60000);
buildGrid();

showTransmission()

function updatePlane(){
  const totalDays = 22;
  const remaining = daysRemaining();

  const progress = Math.min(1, Math.max(0, (totalDays - remaining) / totalDays));

  const plane = document.getElementById("plane");
  const track = document.querySelector(".track");

  const max = track.offsetWidth - 16;

  plane.style.left = (progress * max) + "px";
}

updatePlane();

window.closePopup = closePopup
window.openMessage = openMessage
window.sendReply = sendReply
window.showTransmission=showTransmission;
window.closeTransmission=closeTransmission;
