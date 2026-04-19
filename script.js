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
  21: {
    audio: "audio/21.m4a",
    img: "images/21.jpg",
    cz: "Ahoj zlatíčko, miluju tě nejvíc na světě a dost mi, jako každý den, chybíš. Doufám, že ti den začal hezky a že bude hezky a úspěšně i pokračovat. Je to zase o den míň než budeme spolu. Já dneska moc plánů nemám, nějaké věci do školy, odpoledne bych si chtěl zavolat se svojí nejlepší ženuškou, už se nemůžu dočkat, a večer si možná půjdu zaběhat nebo nějaký sport... Jako včera na tebe hodně myslím. Dokud já budu existovat, budeš milovaná. Mám teď zásobu spousty různých fotek z mojí poslední návštěvy, takže dneska, na začátek, přikládám fotku mého nejoblíbenějšího jídla v Číně hehehe.  Jsem rád, že už je to pryč z mého todo listu. Teď už tam jsou jen samé krásné věci. Znamenáš pro mě všechno Chloe. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hello my little sweetie, I love you more than anything in the world, and I miss you a lot, just like every day. I hope your day started well and that it continues to be a beautiful and successful one. It’s one day closer to us being together again. I don’t have many plans today, just some school stuff. This afternoon, I’d like to call my best wifey, I can’t wait. And tonight, I might go for a run or do some kind of sport... Like yesterday, I’m thinking of you a lot. As long as I exist, you'll be loved. I have a bunch of different photos from my last visit now, so today, to start things off, I’m attaching a photo of my favorite food in China, hehehe.  I’m glad that’s off my to-do list. Now there are only nice things left on it. You mean everything to me, Chloe. I love you so, so, so much, your koala husband, Rob."
  },
  20: {
    audio: "audio/20.m4a",
    img: "images/20.jpg",
    cz: "Dobré ráno moje sluníčko, miluju tě. Doufám, že ses krásně vyspinkala. Když tohle nahrávám, tak pravděpodobně ještě spíš. Moc hodně mi chybíš:(. Dneska je to konečně už jenom 19 dní, číslo začínající jedničkou a ne dvojkou, taky je konečně víkend. Moc plánů nemám, ale určitě si musím vyprat nějaké oblečení a rád bych si zařídil ty víza. Dneska přidávám starší fotku, je to náš oblíbený autobus po cestě do Mallaky, s tím promyšleným heslem na wifi. Na tuhle jízdu, hlavně ze začátku nikdy nezapomenu. Jsme ten nejlepší pár na světě! Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, my sunshiny girl, I love you. I hope you had a restful sleep. By the time I’m posting this, you’re probably still asleep. I miss you so much :(. Today, it’s finally down to just 19 days, a number starting with a one instead of a two, and it’s finally the weekend. I don’t have many plans, but I definitely need to do some laundry, and I’d like to get that visa figured out. Today I’m posting an older photo, it’s our favorite bus on the way to Malacca, with that clever Wi-Fi password. I’ll never forget that ride, especially the beginning. We’re the best couple in the world! I love you so, so, so much, your koala husband, Rob."
  },
  19: {
    audio: "audio/19.m4a",
    img: "images/19.jpg",
    cz: "Ahoj můj miláčku Chloe, strašně hodně moc tě miluju a chybíš mi... Mám tu nejlepší, nejkrásnější a nejúžasnější ženušku v celém vesmíru. Já jsem před chvilkou vstával, doufám, že ty se vyspinkáš hezky do růžova. Dneska tu je zase zataženo a teď už i prší, stejně jako dalších asi 10 dní. Dnešní fotka je opět víc aktuální, z našeho posledního společného bruslení. Už se moc moc nemůžu dočkat až zase spolu půjdeme a třeba mě naučíš nějaké nové tríčky. Minule mě to bavilo a ty jsi byla ta nejlepší učitelka, stejně jako když mi pomáháš s mojí Čínštinou. Moc tě obdivuju, včetně tvého vystoupení včera. Dneska bych ještě tenhle systém, když budu mít čas, trochu předělat a usnadnit ti taky něco nahrát, když bys měla čas a chuť. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hello, my darling Chloe, I love you so, so much and I miss you... I have the best, most beautiful, and most amazing wife in the entire universe. I just got up a little while ago, I hope you’re sleeping like a baby. It’s cloudy again today and now it’s even raining, just like it will for the next 10 days or so. Today’s photo is more recent again, from our last roller skating together. I can’t wait for us to go again, and maybe you’ll teach me some new tricks again. I had so much fun last time, and you were the best teacher, just like when you help me with my Chinese. I admire you so much, including your performance yesterday. Today, if I have time, I’d like to improve this system a bit and make it easier for you to upload something, too, if you have the time and feel like it. I love you so, so, so much, your koala husband, Rob."
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
  const totalDays = 29;
  const remaining = daysRemaining();

  const progress = Math.min(1, Math.max(0, (totalDays - remaining) / totalDays));

  const tracks = document.querySelectorAll(".track");
  const planes = document.querySelectorAll(".plane");

  if(planes.length === 0) return;

  planes.forEach((plane, index) => {
    if(!tracks[index]) return;
    const max = tracks[index].offsetWidth - 16;
    plane.style.left = (progress * max) + "px";
  });
}

updatePlane();

window.closePopup = closePopup
window.updatePlane = updatePlane
window.openMessage = openMessage
window.sendReply = sendReply
window.showTransmission=showTransmission;
window.closeTransmission=closeTransmission;
