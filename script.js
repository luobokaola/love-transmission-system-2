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

const arrival = new Date("2026-04-01T11:40:00+08:00");

const messages = {
  21: {
    audio: "audio/21.m4a",
    img: "images/21.jpg",
    cz: "Ahoj moje koalí ženuško, vím, že jsi ode mě chtěla slyšet hlasovku v Češtině, rozhodl jsem se, že ti ode dneška každý den, až do doby než se zase potkáme budu posílat jednu hlasovku. Celkem je to 21 dní. Už se nemůžu dočkat, strašně mi chybíš... Chci aby to co nejrychleji uteklo a doufám, že ti tohle pomůže se cítit blíž, i když jsme hodně daleko. Na konec bych chtěl zmínit jednu věc co na tobě miluju, je to tvůj smích, chybí mi chvíle kdy jsme se spolu smáli. Díky, že mě vždycky podporuješ, jsi nejlepší. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hello, my dear koala wifey, I know you wanted to hear my voice in Czech, so I have decided that from today until we meet again, I will send you one voice message every day. That's 21 days in total. I can't wait, I miss you so much... I want this time to pass as quickly as possible, and I hope this will help you feel closer to me, even though we are far apart. Finally, I would like to mention one thing I love about you, and that is your laughter. I miss the moments when we laughed together. Thank you for always supporting me. You are the best. I love you very, very much, your koala husband, Rob."
  },
  20: {
    audio: "audio/20.m4a",
    img: "images/20.jpg",
    cz: "Ahoj Chloe, moc tě miluju. Zrovna se chystám na hodinu Čínštiny, docela se těším. Hodně se taky těším na to až si budeme moct povídat v Čínštině, musím ale ještě nějakou dobu pilně studovat abych byl dost dobrej. Dneska jsem si už pustil pár videí v Čínštině, ale pořád je pro mě těžký někdy rozumět. Nevím proč, ale dneska jsem taky hodně vzpomínal na naší poslední jízdu na kolečkových bruslích, hrozně moc bych dneska s tebou chtěl jít dneska bruslit s tebou. Až přiletím tak musíme jít! Dneska je to míň než 3 týdny, už se nemůžu dočkat až tě budu moct zase obejmout. Jsem na tebe ještě pořád moc hrdej za včerejšek, zvládla jsi toho fakt hodně, a vím, že pro mě děláš fakt dost. Doufám, že tě ta nová práce bude hodně bavit. Jsi moje nejúžasnější koalí ženuška. Moc moc moc tě miluju, tvůj manžel Rob.",
    en: "Hi Chloe, I love you so much. I'm just getting ready for my Chinese class, and I'm really looking forward to it. I'm also really looking forward to when we can talk in Chinese, but I still have to study hard for a while to get good enough. I've already watched a few videos in Chinese today, but it's still a little bit hard for me to understand sometimes. I don't know why, but today I also thought a lot about the last time we rollerskated together. I would really love to go rollerskating with you today. We have to go when I arrive! It's less than three weeks now, and I can't wait to hug you again. I'm still very proud of you for yesterday. You really accomplished a lot, and I know you do so much for me. I hope you enjoy your new job. You are my most amazing koala wifey. I love you very, very much, your husband Rob."
  },
  19: {
    audio: "audio/19.m4a",
    img: "images/19.jpg",
    cz: "Ahoj bb, moc mi chybíš. Teď mi skončil poslední předmět tohohle týdne a jdu na oběd a začínají mi 3 dny volna, ještě pořád moc nevím, co budu dělat, asi bych chtěl jít zkusit ty ryby zítra. Ale ať už to bude cokoliv, vím, že při tom budu myslet na tebe. Vždycky když tu vidím něco hezkého nebo zajímavého, tak bych ti to hned nejradši ukázal. Dneska už to je jen 19 dní než přijedu, konečně číslo, které začíná jedničkou a ne dvojkou. Už se nemůžu dočkat až s tebou budu moct zase trávit čas, ať už zábavou nebo učením v knihovně a sledováním videí o motorech, hlavní je, že budu s tebou. Doufám, že si teď užiješ ten víkend se svojí kamarádkou a že si trochu odpočineš od školy a starostí. Pošli mi nějaké pěkné fotky prosím:) Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi bb, I miss you so much. I just finished my last class for the week and am going to lunch, and then I have three days off. I'm still not sure what I'm going to do, but I think I'd like to try fishing tomorrow. But whatever I do, I know I'll be thinking of you. Whenever I see something beautiful or interesting here, I want to show it to you right away. Today, there are only 19 days left until I arrive, finally a number that starts with a one and not a two. I can't wait to spend time with you again, whether it's having fun while playing or studying in the library and watching videos about engines, the main thing is that I'll be with you. I hope you enjoy the weekend with your friend and that you get some rest from school and worries. Please send me some nice photos :) I love you very, very much, your koala husband Rob."
  },
  18: {
    audio: "audio/18.m4a",
    img: "images/18.jpg",
    cz: "Dobré ráno Chloe, nejvíc tě miluju. Když teď nahrávám tuhle zprávu tak sedím v naší oblíbené kleci. Dneska jsem se konečně docela hezky a dlouho vyspal a cítím se dobře. Doufám, že ty si užíváš hezký den v Suzhou. Pořád moc rád vzpomínám na naše výlety po Číně, na všechny ty věci, co jsme spolu prožili a na všechny ty momenty, kdy jsme se nemohli přestat smát a vím, že v budoucnu máme před sebou ještě spoustu společných výletů po celém světě. Už jen 18 dní, teda vlastně 17 a něco něco. Na tvoje objetí až přijedu se těším víc než na cokoliv jiného. Moc moc moc tě miluju, tvůj koalí muž Rob.",
    en: "Good morning, Chloe, I love you more than anything. As I’m recording this message, I’m sitting in our favorite cage. I finally got a good, long sleep today and I feel great. I hope you’re enjoying a nice day in Suzhou. I still love remembering our trips around China, all the things we’ve experienced together, and all those moments when we couldn’t stop laughing, and I know that in the future we have so many more trips around the world ahead of us. Only 18 days left, well, actually 17 and a little bit. I’m looking forward to your hug when I arrive more than anything else. I love you so, so, so much, your koala husband Rob."
  },
  17: {
    audio: "audio/17.m4a",
    img: "images/17.jpg",
    cz: "Milá Chloe bb, na světě není, co by se vyrovnalo mé lásce k tobě. Jsem strašně rád, že jsi moje přítelkyně (ženuška) ale zároveň i nejlepší kamarádka. Dneska má v Singapuru pršet, tak snad mě to donutí dokončit úkoly, co mám. Doufám, že ty máš hezký den a že ses hezky vyspinkala. Nejvíc se dneska ale stejně těším na hovor s tebou, jako každý den. Jsem rozhodně ten nejšťastnější kluk na světě, mám tu nejkrásnější, nejmilejší a nejchytřejší ženu... Už to je jen míň než 17 dní, chybí mi sledování seriálu, hraní overcooked v jedné posteli vedle sebe. Moc mi chybíš a moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Dear Chloe bb, there’s nothing in the world that compares to my love for you. I’m so happy that you’re my girlfriend (wifey) but also my best friend. It’s supposed to rain in Singapore today, so hopefully that will force me to finish my assignments. I hope you’re having a nice day and that you slept well. But what I’m looking forward to most today is talking to you, just like every day. I’m definitely the happiest guy in the world, I have the most beautiful, sweetest, and smartest wifey… It’s less than 17 days now, and I miss watching series and playing Overcooked in the same bed next to each other. I miss you so much and I love you so, so, so much, your koala husband Rob."  
  },
  16: {
    audio: "audio/16.m4a",
    img: "images/16.jpg",
    cz: "Ahoj Chloe, jako vždycky mi hodně chybíš. Každý den ráno vstávám a těším se, že to je zase o den míň než tě uvidím. Dneska bych si chtěl jít odpoledne nebo večer zaplavat, ale má pršet, tak doufám, že bazén bude otevřený. Doufám, že ty máš a budeš mít taky hezký den. Dneska do příspěvku přikládám jako obrázek náš vtipnej vánoční stromek/kytku, byl jsem strašně moc rád, že jsem mohl Vánoce oslavit s tebou, moc jsem si to užil. Díky, že mě vždycky ve všem podporuješ a já se vždycky maximálně snažím a budu snažit dělat to samé, hrozně mi na tobě zaleží, opravdu pro mě znamenáš všechno. Dneska už to je míň než 16 dní, v životě jsem nikdy nejspíš neodpočíval nic tak moc jako tohle. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi Chloe, as always, I miss you so much. Every morning when I wake up, I look forward to the fact that it’s one day closer to seeing you. I’d like to go for a swim this afternoon or evening, but it’s supposed to rain, so I hope the pool will be open. I hope you’re having, and will continue to have, a lovely day too. Today I’m attaching a picture of our funny Christmas tree/plant to this post. I was so happy to be able to celebrate Christmas with you; I really enjoyed it. Thank you for always supporting me in everything; I always try my absolute best and will continue to make the same effort. I care so much about you, you really mean everything to me. It’s less than 16 days now, I’ve probably never looked forward to anything in my life as much as this. I love you so, so, so much, your koala husband, Rob."  
  },
  15: {
    audio: "audio/15.m4a",
    img: "images/15.jpg",
    cz: "Dobré ráno Chloe, strašně moc tě miluju. Dneska je to týden od té doby co jsem s tebou naposledy viděl, ale mně to přijde jako mnohem delší doba. Zároveň je to už ale jenom 14 dní a něco málo než tě zase uvidím, což tak hrozné není. Dneska moc plánu nemám, mám jednu přednášku s prezentací a chci si zavolat s mojí ženuškou. Doufám, že ty si užíváš hezký den. Dnešní fotku nejspíš znáš, ale znamená pro mě hodně. Je to fotka poštovní schránky těsně po tom, co jsem do ní dal dopis pro tebe. Kdybych jen tehdy věděl, že spolu jen o necelý měsíc později začneme chodit a že se staneš mojí nejlepší ženuškou že spolu budeme mít tolik úžasných zážitků... Jsme opravdu ten nejlepší pár. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, Chloe, I love you so much. Today it's been over a week since I last saw you in person, but it feels like much longer. At the same time, though, it's only 14 days and a little bit until I see you again, which isn't so bad. I don’t have much planned for today; I have one lecture with a presentation, and I want to call my wifey (you). I hope you’re having a nice day. You probably recognize today’s photo, but it means a lot to me. It’s a picture of the mailbox right after I put a letter for you in it. If only I had known then that less than a month later we’d start dating, that you’d become my best wifey, and that we’d have so many amazing adventures together... We really are the best couple. I love you so, so, so much, your koala husband, Rob."  
  },
  14: {
    audio: "audio/14.m4a",
    img: "images/14.jpg",
    cz: "Ahoj Chloe, hrozně moc tě miluju a zároveň mi hrozně moc chybíš. Mám tu nejkrásnější přítelkyni na celém světě. Doufám, že ses dobře vyspala, stejně jako já. Dneska nám tu podle všeho bude zase pršet, tak doufám, že u vás to bude lepší. Taky doufám, že budeš mít moc hezký den a že se ti všechno úspěšně povede. Za 14 dní už budeme zase spolu, moc se těším. Doufám, že to uteče jako voda. Dnešní fotka je z pro nás oba známého místa, pamatuju si, ještě i z doby než jsme spolu chodili, když jsem se tam často večer s tebou loučil, vždycky se mi vůbec nechtělo a vím, že tobě taky ne. Čekal jsem alespoň než se ti povede naskenovat obličej, a že to někdy trvalo, a nakonec než zmizíš úplně za roh místnosti. V té kameře na dveřích jsi vypadala vždycky strašně krásně. Jsi opravdu ta nejkrásnější a nejúžasnější holka na světě. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi Chloe, I love you so much and I miss you so much. I have the most wonderful girlfriend in the whole world. I hope you slept well, just like I did. It looks like it’s going to rain here again today, so I hope the weather is better where you are. I also hope you have a wonderful day and that everything goes well for you. In two weeks we’ll be together again, I’m really looking forward to it. I hope the time between now and then flies quickly. Today’s photo is from a place we both know well; I remember it even from before we were dating, when I’d often say goodbye to you there in the evening, I never wanted to leave, and I know you didn’t either. I’d wait at least until you managed to scan your face—and that sometimes took a while—and finally until you disappeared completely around the corner of the room. You always looked so incredibly beautiful in that camera on the door. You really are the most beautiful and amazing girl in the world. I love you so, so, so much, your koala husband, Rob."  
  },
  13: {
    audio: "audio/13.m4a",
    img: "images/13.jpg",
    cz: "Dobré ráno moje milovaná Chloe. Strašně moc tě miluju. Zrovna si konečně dávám prát svoje prádlo a k dnešní příspěvku přikládám tematickou fotku. Je to z toho dne, kdy jsi mi přes tvoje předplatné pustila pračku, ale někdo nám to ukradl a použil pro sebe. Pořád jsem hrozně vděčný za to, jak jsi mi v Číně se vším radila a pomáhala. Dneska tu v Singapuru máme po dlouhé době úplně modré nebe a podle předpovědi by ani nemělo pršet. Za pár chvil mi bude zase začínat hodina Čínštiny na kterou se jako obvykle i docela těším, jsem moc rád, že tady můžu studovat tvůj rodný jazyk a že si v něm jednou snad budeme moct i povídat. Doufám, jako každý den, máš hezký den a hodně úspěšný den. Hodně moc mi chybíš a už se nemůžu dočkat až tě za 12 dní a něco málo zase uvidím a obejmu. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, my love Chloe. I love you so, so much. I’m finally doing my laundry right now, and I’m attaching a related photo to today’s post. It’s from the day you let me use the washing machine through your subscription, but someone stole it from us and used it for themselves. I’m still so grateful for how you guided and helped me with everything in China. Today here in Singapore, we have a completely blue sky for the first time in a long while, and according to the forecast, it shouldn’t even rain. In a few moments, my Chinese class will start again, which I’m actually looking forward to as usual. I’m so glad I can study your native language here and that maybe one day we’ll even be able to talk in it. I hope, as I do every day, that you’re having a nice day and a very successful one. I miss you so, so much, and I can’t wait to see you and hug you again in 12 days and a little bit. I love you so, so, so much, your koala husband, Rob."  
  },
  12: {
    audio: "audio/12.m4a",
    img: "images/12.jpg",
    cz: "Ahoj moje koalí ženuško Chloe, nejvíc tě miluju. Doufám, že ti den začal dobře, já už mám za sebou mojí hodinu matiky a hovor s mojí nejoblíbenější osobou na světě (s tebou). Moc mi chybíš. Posílám ti ze Singapuru alespoň virtuální objetí a spoustu lásky. Dnešní fotka je z jednoho z mých nejoblíbenějších dnů, moc si vždycky užívám s tebou trávit čas ať už to je každodenní věc nebo společné poznávání věcí nových jako ta keramika. Keramika s tebou mě hodně bavila, myslím, že jsme měli spoustu zábavy, až přijedu tak bychom mohli zkusit zase něco nového, co ty na to? Už to je jen jedenáct dní, to není zas tak hrozné, v neděli to už bude jen jednociferné číslo, to zvládneme. Díky, že jsi vždycky ta nejšikovnější a nejsilnější koala, jsme ten nejlepší pár na světě! Díky, že při mně vždy stojíš v dobrém i zlém a já se vždycky budu snažit dělat to samé a zlepšovat se. Moc moc moc moc moc tě miluju, tvůj koalí manžel Rob. <3",
    en: "Hi, my cute koala wifey Chloe, I love you more than anything. I hope your day started off well; I’ve already finished my math class and had a call with my favorite person in the world (you). I miss you so much. I’m sending you at least a virtual hug and lots of love from Singapore. Today’s photo is from one of my favorite days; I always really enjoy spending time with you, whether it’s just everyday stuff or discovering new things together, like that pottery class. I really enjoyed the pottery class with you; I think we had a lot of fun. When I get back, we could try something new again, what do you think? It’s only 11 days left now, that’s not so bad. By Sunday, it’ll be a single-digit number, we can make it. Thanks for always being the most talented and strongest koala; we’re the best couple in the world! Thank you for always standing by me both through good times and hard times, and I’ll always try to do the same and keep improving. I love you so, so, so, so, so much, your koala husband Rob. <3"  
  },
  11: {
    audio: "audio/11.m4a",
    img: "images/11.jpg",
    cz: "Dobré ráno bb, strašně moc tě miluju a hodně mi chybíš. Konečně nám zase začal víkend, doufám, že si budeš moct pořádně odpočinout. Přesto, že to muselo být online, jsem si včera si moc užil sledování našeho seriálu, ale musím říct, že bych tě teď hrozně rád obejmul. Taky mi moc chybí ranní zvuky ospalé koaly, už se na ně za těch 10 dní nemůžu dočkat. Dalších pár dní tu v Singapuru máme mít docela velké horko, v pondělí má být 35 stupňů, tak doufám, že se tu nerozpustím. Doufám, že ty ses dneska hezky vyspinkala a že máš jako každý den hezký, slunečný a úspěšný den. Jsi moje superžena! Dnešní fotka asi tušíš odkud je, naše oblíbená muslimská restaurace v Pekingu. Ještě pořád si pamatuju, jak nám když jsme dojedli dali jogurt za hodnocení a my ho pak dali do improvizované lednice za okno. Doufám, že se tam někdy budeme moct vrátit, Peking se mi moc líbil. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, bb, I love you the most and I miss you a lot. The weekend is finally here again, and I hope you’ll be able to really relax. Even though we had to watch it online, I really enjoyed watching our show yesterday, but I have to say, I’d love to give you a big hug right now. I also really miss the morning sleepy koala noise, I can’t wait to hear it again in 10 days. It’s supposed to be pretty hot here in Singapore for the next few days, 35 degrees on Monday, so I hope I don’t melt here. I hope you slept well today and that you’re having a nice, sunny, and successful day, just like every day. You’re my superwoman! You can probably guess where today’s photo is from - our favorite Muslim restaurant in Beijing. I still remember how, after we finished eating, they gave us yogurt as a reward for our review, and we then put it in a homemade fridge outside the window. I hope we’ll be able to go back there someday, I really liked Beijing. I love you so, so, so much, your koala husband, Rob."  
  },
  10: {
    audio: "audio/10.m4a",
    img: "images/10.jpg",
    cz: "Ahoj moje nejlepší ženuško Chloe, nejvíc tě miluju. Doufám, že ses dobře vyspinkala a že budeš mít nejkrásnější a nejúspěšnější nový den. Konečně jsme na jednociferném čísle, za 9 dní a něco málo budu zase u tebe a budu tě opět moct obejmout a trávit s tebou čas. Jupí jupí jupí. Dnešní fotku mám hodně rád, je to asi první fotka s yellow jet, kterou jsem sem zatím nahrál. Pamatuju jak moc jsme se nasmáli když jsem řídil, ze zadního sedadla a video z toho si do teď rád pouštím. Yellow jet mi taky moc chybí, doufám, že se má dobře, jestli jí dneska uvidíš, tak jí ode mě pozdravuj a vyřiď, že za pár dní budu zpátky. Ať se připraví, že s ní opět budeme trávit hodně času na cestách. V Singapuru dneska klasicky velké teplo, ale neprší, takže docela hezký den, doufám, že v Hangzhou je dneska hezký kvetoucí jarní den. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi, my best wifey Chloe, I love you the most. I hope you slept well and that you have the most beautiful and successful new day. We’re finally down to single digits, in 9 days and a little bit, I’ll be back with you and able to hug you again and spend time with you. Yay, yay, yay. I really like today’s photo, it’s probably the first photo with the Yellow Jet that I’ve uploaded here so far. I remember how much we laughed when I was driving, from the back seat, and I still love watching the video of that. I miss Yellow Jet a lot too. I hope she’s doing well. If you see her today, say hi from me and tell her I’ll be back in a few days. Tell her to get ready, we’ll be spending a lot of time on the road with her again. It’s traditionally very hot in Singapore today, but it’s not raining, so it’s a pretty nice day. I hope it’s a beautiful, blooming spring day in Hangzhou today. I love you so, so, so much, your koala husband, Rob."  
  },
  9: {
    audio: "audio/9.m4a",
    img: "images/9.jpg",
    cz: "Dobré ráno moje milovaná ženuško Chloe. Miluju tě nejvíc na světě. Ty ještě pořád nejspíš spíš, doufám, že máš hezké sny a že se vyspíš do růžova. Je to zase o den míň než se uvidíme, už skoro jen týden, to zvládneme! Jsme ten nejlepší pár na světě. Včera jsem si moc užil večerní odpočinek s tebou a sledování našeho seriálu. Už se nemůžu dočkat až tohle budeme moct dělat, ale offline. Dneska přidávám fotku našeho prvního společného durianu a na dlouhou dobu nejspíš i posledního, myslím, že tolik durian za tak krátkou dobu ještě hodně dlouho nepřekonám. Nedivil bych se, kdyby jeho vůně byla v mém pokoji doteď. Moc si ale vždycky užívám objevování nových chutí a dalších zajímavých zážitků s tebou. Už se těším až konečně budu moct ochutnat to moje dlouho očekávané stinky tofu. No, třeba příště. Nakonec doufám že budeš mít dneska ten nejkrásnější a nejúspěšnější den. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, my lovely wife Chloe. I love you more than anything in the world. You’re probably still asleep; I hope you’re having sweet dreams and getting a good night’s rest. It’s one day closer to when we’ll see each other, and it’s almost just a week now, we can do this! We’re the best couple in the world. I really enjoyed relaxing with you last night and watching our show. I can’t wait until we can do this again, but in person. Today I’m posting a photo of our first durian together, and probably our last for a long time. I don’t think I’ll be able to eat that much durian in such a short time again for a very long while. I wouldn’t be surprised if its smell were still in my room right now. But I always really enjoy discovering new flavors and other interesting experiences with you. I’m already looking forward to finally getting to taste that long-awaited stinky tofu of mine. Well, maybe next time. Finally, I hope you have the most beautiful and successful day today. I love you so, so, so much, your koala husband, Rob."  
  },
  8: {
    audio: "audio/8.m4a",
    img: "images/8.jpg",
    cz: "Ahoj moje nejlepší ženuško Chloe, nejvíc tě miluju a moc hodně mi chybíš. Doufám, že máš zatím hezký, slunečný a úspěšný den. Jsi moje úžasná super žena. Já se po včerejší výpravě vyspal poměrně dobře. A teď se snažím udělat nějaké věci do školy. Dneska už je to jenom 7 dní a něco málo, 7 dní to je týden, to není hodně. Konečně. To zvládneme. Už se nemůžu dočkat až tě zase uvidím. Dneska sem přikládám fotku místa, z kterého máme hodně velkou spoustu společných zážitků. Od první návštěvy, securiťáka který klepal na dveře, spousta povídání, odpočinku, šlofíků, asi tak tuna manga a dalšího ovoce, plánování našich výletů, no je to pro nás hodně důležité místo a jsem strašně rád, že jsem ho mohl sdílet s tebou. Znamenáš pro mě všechno. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi, my beautiful wifey Chloe, I love you the most and miss you so much. I hope you’re having a nice, sunny, and successful day so far. You’re my amazing, superhero wifey. I slept pretty well after yesterday’s adventure. And now I’m trying to get some schoolwork done. Today, it’s only 7 days and a little bit, 7 days is a week, which isn’t that long. Finally. We can do this. I can’t wait to see you again. Today I’m attaching a photo of a place where we’ve shared so many wonderful memories together. From our first visit, the security guard knocking on the door, lots of chatting, relaxing, naps, about a ton of mangoes and other fruit, planning our trips, well, it’s a very important place for us, and I’m so glad I got to share it with you. You mean everything to me. I love you so, so, so much, your koala husband, Rob."  
  },
  7: {
    audio: "audio/7.m4a",
    img: "images/7.jpg",
    cz: "Dobré ráno Chloe, strašně mi chybíš a nejvíc tě miluju. Snad ses dneska hezky a dlouho vyspinkala. Za míň než týden už budeme spolu a já tě konečně budu moct zase obejmout. Strašně moc se nemůžu dočkat. Moc nevím, co máš dneska v plánu, ale doufám, že budeš mít krásný den, že se ti všechno bude dařit, že si i odpočineš a že si později dneska budeme moct alespoň chvíli zavolat a popovídat. Jsi úžasná, moc tě obdivuju. Dnešní fotka možná není tak zajímavá, ale stejně jsem jí chtěl sem vložit. Je to fotka z předmětu, díky kterému mám teď tu nejlepší ženu na světě. Předmět samotný moc přínosný obsahem nebyl, ale do života mi přinesl někoho, kdo teď pro mě znamená všechno. Jsem strašně rád, že jsme se tam mohli potkat, sedět spolu a povídat, společně si stěžovat na úkoly, no a nakonec se stát tím nejlepším párem na světě. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, Chloe. I miss you so much and love you the most. I hope you slept well and long today. In less than a week, we’ll be together, and I’ll finally be able to hug you again. I can’t wait. I’m not sure what you have planned for today, but I hope you have a wonderful day, that everything goes well for you, that you get some rest, and that we can at least call and chat for a little while later today. You’re amazing, I admire you so much. Today’s photo might not be that interesting, but I wanted to post it here anyway. It’s a photo from the class that’s the reason I now have the best wifey in the world. The class itself wasn’t very informative, but it brought someone into my life who now means everything to me. I’m so glad we got to meet there, sit together and chat, complain about homework together, and eventually become the best couple in the world. I love you so, so, so much, your koala husband, Rob."  
  },
  6: {
    audio: "audio/6.m4a",
    img: "images/6.jpg",
    cz: "Ahoj moje nejlepší ženuško Chloe, miluju tě nejvíc na světě a moc mi chybíš. Doufám, že se ti dneska bude dařit a že si odpoledne dost odpočineš a už se moc těším až si zase zavoláme. Dneska už je to jenom 5 dní a něco málo, doufám, že těch pár posledních dnů už uteče hodně rychle, už chci být s tebou. Dneska tu máme jako obvykle poměrně teplo, doufám, že v Hangzhou máte hezký jarní den. Za chvíli mám poslední hodinu Čínštiny před tím, než tě zase uvidím, konečně. Ráno jsem si vzpomněl na jeden z našich společných zážitků, který mám strašně moc rád, bohužel z něj nemám žádnou úplně dobrou fotku, tak sem dávám alespoň tuhle trochu rozmazanou. Asi tušíš, ze kdy to je. Večerní jízda kolem krásně osvětleného náměstí Nebeského klidu na modrých kolech s mojí nejkrásnější a nejlepší přítelkyní je něco, na co určitě nikdy nezapomenu. Byl to hodně dobrý trik na návštěvu i přesto že už jsme ten den nemohli sehnat lístek. Díky. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi, my best wifey Chloe, I love you more than anything in the world and I miss you so much. I hope you have a successful day today and that you get plenty of rest this afternoon, I’m really looking forward to when we talk again. It’s only 5 days and a little bit left now; I hope these last few days fly by really fast, I just want to be with you. It’s pretty warm here today, as usual; I hope you’re having a nice spring day in Hangzhou. In a little while, I have my last Chinese class before I finally get to see you again. This morning, I remembered one of our adventures together that I really love; unfortunately, I don’t have a very good photo of it, so I’m posting this slightly blurry one at least. You can probably guess when this was taken. An evening ride around the beautifully lit Tiananmen Square on the blue bikes with my most beautiful and best girlfriend is something I’ll definitely never forget. It was a really great trick to visit, even though we couldn’t get tickets that day. Thank you. I love you so, so, so much, your koala husband, Rob."  
  },
  5: {
    audio: "audio/5.m4a",
    img: "images/5.jpg",
    cz: "Ahoj moje milovaná ženuško Chloe, strašně moc tě miluju a dost mi chybíš. Nahrávám tuhle zprávu později než obvykle, už jsem snědl oběd a nejspíš si později dám krátkého šlofíka. Náš dnešní hovor mi o hodně zlepšil náladu, jsme ten nejlepší pár. Vím, že se opakuju, ale chci abys to věděla. Vždycky se o tebe postarám, vždycky tě budu podporovat a vždycky budu stát na tvojí straně. Díky že jsi se mnou trpělivá. Abych udělal dnešní Singapurský report, tak dneska tu máme opět velké horko, pršet ale naštěstí nemá. Plány žádné moc velké nemám, ale zvažoval jsem si udělat odpoledne alespoň malý výlet mimo kampus. Můj oběd jsi viděla a mám k němu krátký příběh. Pan prodavač se mi hodně silně snažil prodat smaženou rybu, co měli. Už když jsem řekl, že chci takeaway tak se zeptal jestli rybu, já řekl, že ne. Pak jsem si objednal tu zeleninu, vejce a on mi nabídnul rybu znova, pak jsem se ho zeptal jestli jedno maso chutná dobře a on řekl, že ne, že ta ryba je nejlepší. Nakonec jsem ale stejně odmítnul. Neměl jsem na tu rybu teď moc chuť, ale prodavač byl legrační. Z dnešní fotkou jsem chtěl počkat na jeden z posledních dnů, ale myslím, že na dnešek je ideální. Jak už jsi uhádla když jsme si psali, je to fotka z pláže v Mallace. A ty asi víš, že pro mě hodně znamená. Jsem opravdu rád, že tě mám Chloe. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi, my loving wife Chloe, I love you so much and I miss you greatly. I’m recording this message later than usual, I’ve already had lunch and I’ll probably take a quick nap later. Our call today really brightened my day, we’re the best couple. I know I’m repeating myself, but I want you to know this. I’ll always take care of you, I’ll always support you, and I’ll always be on your side. Thanks for being patient with me. As for today’s Singapore report, it’s really hot here again today, but luckily it’s not supposed to rain. I don’t have any big plans, but I was thinking of taking at least a short trip off campus this afternoon. You saw my lunch, and I have a short story about it. The shopkeeper was really pushing me to buy the fried fish they had. As soon as I said I wanted takeout, he asked if I wanted fish, and I said no. Then I ordered the vegetables and eggs, and he offered me the fish again. I asked him if one of the meats tasted good, and he said no, but that the fish was the best. In the end, though, I turned it down anyway. I wasn’t really in the mood for fish right now, but the shopkeeper was funny. I wanted to wait until one of the last few days to post today’s photo, but I think it’s perfect for today. As you guessed when we were texting, it’s a photo from the beach in Malacca. And you probably know that it means a lot to me. I’m really glad to have you, Chloe. I love you so, so, so much, your koala husband, Rob."  
  },
  4: {
    audio: "audio/4.m4a",
    img: "images/4.jpg",
    cz: "Dobré ráno moje nejkrásnější a nejúžasnější ženuško Chloe, nejvíc tě miluju. Jsem moc rád, že jsi bezpečně dorazila na místo a že ses i dobře vyspinkala. Doufám, že budeš moct strávit hezký a klidný čas se svojí rodinou a že budeš mít krásný den. Dneska už to jsou jenom 3 dny a něco málo než přijedu. To už uteče rychle. Těším se víc než na cokoliv jiného. Na dnešní fotku jsem ve své galerii narazil tak náhodou, ale moc se mi líbí, tak jsem se rozhodl jí dneska nahrát. Je to ruka mé nejoblíbenější osoby na světě a za ní krásná krajina, kterou jsme spolu mohli navštívit. I když jsme v noci trochu mrzli na hotelu, strašně moc jsem si náš výlet užil a máme z něj velkou spoustu vtipných zážitků. Ruka na fotce už mi moc chybí a nemůžu se dočkat až jí za pár dní zase budu moct držet. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good morning, my most beautiful and wonderful wifey Chloe, I love you the most. I'm so glad you arrived safely and that you got a good night's sleep. I hope you get to spend some nice, peaceful time with your family and that you have a beautiful day. Today, there are only 3 days and a little bit left until I arrive. It’ll fly by quickly. I’m looking forward to it more than anything else. I stumbled upon today’s photo in my gallery by coincidence, but I really like it, so I decided to upload it today. It’s the hand of my absolute favorite person in the world, with the beautiful landscape behind it that we were able to visit together. Even though we were a little cold at the hotel at night, I enjoyed our trip so much, and we have tons of funny memories from it. I really miss the hand in the photo, and I can’t wait to hold it again in a few days. I love you so, so, so much, your koala husband, Rob."  
  },
  3: {
    audio: "audio/3.m4a",
    img: "images/3.jpg",
    cz: "Ahoj Chloe, miluju tě nejvíc na světě a jako každý den mi hodně chybíš. Přeju ti ať si můžeš užít další hezký a klidný den se svojí rodinou. Už se moc těším až si dneska zase zavoláme a povyprávíš mi všechny ty tvoje bláznivé sny. Nám tu v Singapuru má zase pršet a už teď je nebe docela tmavé, takže kromě úkolu moc velké plány nemám. Spolubydlící teď rychle všechno uklízí a připravuje pokoj na rodinou návštěvu, tak jsem si svoje věci taky trochu sklidil. Nejradši bych ty dva dny a něco málo přeskočil a už byl v tvém objetí. Už se opravdu opravdu nemůžu dočkat. Dnešní fotka je z naší evropské večeře ve vánoční Šanghaji. Vzpomínám na to moc hezky (včetně toho jak jsem další den zapomněl svoje trenky na hotelu) a už se těším až v budoucnu spolu vyzkoušíme spousty dalších jídel a dalších věcí z mé rodné části světa. Jsi ta nejúžasnější a nejkrásnější holka na světě, jsem strašně šťastný, že tě mám. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Hi Chloe, I love you more than anything in the world, and I miss you so much, just like every day. I hope you get to enjoy another happy and peaceful day with your family. I’m really looking forward to talking to you again today and hearing all about your crazy dreams. It’s supposed to rain again here in Singapore, and the sky is already pretty dark, so I don’t have much planned besides my assignments. My roommate is quickly cleaning everything up and getting the room ready for a family visit, so I tidied up my stuff a bit too. I’d love to skip these next two days and a bit and be in your arms already. I really, really can’t wait. Today’s photo is from our European dinner in Shanghai during Christmas. I have such lovely memories of it (including how I forgot my underwear at the hotel the next day), and I’m already looking forward to trying lots of other dishes and things from my home part of the world together in the future. You’re the most amazing and beautiful girl in the world, and I’m so incredibly happy to have you. I love you so, so, so much, your koala husband, Rob."  
  },
  2: {
    audio: "audio/2.m4a",
    img: "images/2.jpg",
    cz: "Dobré odpoledne moje nejkrásnější a nejúžasnější ženuško Chloe. Miluju tě a hodně mi chybíš. Celý den myslím jen na tebe. Dopoledne jsem se nasnídal a vyrazil do supermarketu, kde jsem koupil pár věcí. Snědl jsem oběd a dokonce už i marakuju, co jsem koupil, byla moc dobrá. Teď upřímně nemám moc energie, takže si dám nejspíš krátký odpočinek. Doufám, že cesta vlakem jde hladce. Za jeden den a něco málo už tě budu moct zase obejmout. Opravdu se nemůžu dočkat. Jsme ten nejlepší pár na světě, bez pochyby. Jsem strašně vděčný, že tě mám a slibuju, že tu vždycky budu pro tebe. Moc moc moc tě miluju, tvůj koalí manžel Rob.",
    en: "Good afternoon, my most beautiful and amazing wife, Chloe. I love you and I miss you so much. All day long, I’ve been thinking only of you. This morning I had breakfast and headed to the supermarket, where I bought a few things. I ate lunch and even had the passion fruit I bought, it was really good. Right now, I don't have much energy, so I'll probably take a short nap. I hope your train ride is going smoothly. In just a day and a little bit, I'll be able to hug you again. I really can't wait. We’re the best couple in the world, no doubt about it. I’m so very grateful to have you and I promise I’ll always be here for you. I love you so, so, so much, your koala husband, Rob."  
  },
  1: {
    audio: "audio/1.m4a",
    img: "images/1.jpg",
    cz: "Ahoj, moje nejmilovanější Chloe. Strašně moc mi chybíš a nejvíc tě miluju. Doufám, že máš hezký, úspěšný den. Je to míň než jeden den než budeme zase spolu. Už si balím svoje věci, budu mít poslední přednášku a pak už pomalu vyrazím na letiště. Zvládli jsme to, jsme ten nejlepší pár na světě. Je to taky poslední den, kdy sem nahrávám zprávu. Doufám, že ti moje hlasovky alespoň třeba jednou trochu zlepšili náladu. Poslední fotku, jak už jsem ti říkal, bych rád vyfotil a nahrál až po tom co přijedu, až zase budu moct držet tvoji ruku. Už se nemůžu dočkat. Znamenáš pro mě všechno Chloe. Moc moc moc tě miluju, tvůj koalí manžel Rob. Bye bye",
    en: "Hello, my loveliest Chloe. I miss you so much and love you the most. I hope you’re having a beautiful, successful day. It’s less than a day until we’re with each other again. I’m already packing my things, I’ll have my last lecture and then I’ll slowly head to the airport. We made it, we’re the best couple in the world. It’s also the last day I’m recording a voice message here. I hope my voice messages have at least cheered you up a little bit, even just once. As I’ve already told you, I’d like to take and upload the last photo only after I arrive, when I can hold your hand again. I can’t wait. You mean everything to me, Chloe. I love you so, so, so much, your koala husband, Rob. Bye bye"  
  },
};

function daysRemaining(){return Math.floor((arrival - new Date())/(1000*60*60*24));}

function buildGrid(){
  const grid = document.getElementById("grid");
  const today = daysRemaining();
  for(let i=21;i>=1;i--){
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
<h4>reply to rob (he loves you the most)</h4>
<textarea id="replyText"></textarea>
<input type="file" id="replyFile">
<button id="sendReplyButton" onclick="sendReply(${day})">send</button>
</div>

<pre>
--------------------
chloe replies
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

function launchConfetti(){
  const canvas=document.getElementById("confetti");
  const ctx=canvas.getContext("2d");
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  let pieces=[];
  for(let i=0;i<150;i++){pieces.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:5+Math.random()*5,speed:2+Math.random()*3});}
  function update(){ctx.clearRect(0,0,canvas.width,canvas.height);pieces.forEach(p=>{ctx.fillRect(p.x,p.y,p.size,p.size);p.y+=p.speed;if(p.y>canvas.height)p.y=0;});requestAnimationFrame(update);}
  update();
}

function updateHeaderCountdown(){
  const header = document.getElementById("header");
  const diff = arrival - new Date();
  if(diff<=0){header.textContent=`\n-------------------------------\n LOVE TRANSMISSION SYSTEM v1.0\n-------------------------------\n\n0 days 0 hours 0 minutes\n`;return;}
  const days=Math.floor(diff/(1000*60*60*24));
  const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
  header.textContent=`\n-------------------------------\n LOVE TRANSMISSION SYSTEM v1.0\n-------------------------------\n\n${days} days ${hours} hours ${minutes} minutes\n`;
}

function showTransmission(){
  const key="transmissionSeen";
  if(!localStorage.getItem(key)){
    document.getElementById("specialTransmission").classList.remove("hidden");
  }
}

function closeTransmission(){
  localStorage.setItem("transmissionSeen","yes");
  document.getElementById("specialTransmission").classList.add("hidden");
}

updateHeaderCountdown();
setInterval(updateHeaderCountdown,60000);
buildGrid();

window.closePopup = closePopup
window.openMessage = openMessage
window.sendReply = sendReply
window.closeTransmission=closeTransmission;
