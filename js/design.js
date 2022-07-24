

document.getElementById('temah').setAttribute('checked', 'checked')

  function pm(){
      date = new Date();
      h = date.getHours();
      waktu = "AM";
      if(h > 12){
        h = h - 12;
        waktu = "PM";
    }
    var naon = waktu;

    document.getElementById('pm').innerText = naon;
    document.getElementById('pm').textContent = naon;
  }
 




  var c = 0;
  function clik(){
    if(c == 0){
    document.getElementById('bok').style.display = "block"
    document.getElementById('themeSwitch').style.display =  "block"
    c = 1
    }
    else{
      document.getElementById('bok').style.display = "none"
      document.getElementById('themeSwitch').style.display = "none"
      c = 0
    }
  }
  function musik(){
    if(c == 0){
    document.getElementById('musik').style.display = "block"
    c = 1
    }
    else{
      document.getElementById('musik').style.display = "none"
      c = 0
    }
  }
  function gantitema(){
    if(c == 0){
    document.getElementById('tema').style.display =  "block"
    c = 1
    }
    else{
      document.getElementById('tema').style.display = "none"
      c = 0
    }
  }


  
  

  function saran(){
    var search = document.getElementById("saran").value;
    var url = "https://api.whatsapp.com/send?phone=6281574999858&text="+search
    if(search==""){
        alert("isi dulu tong")
        document.getElementById('link')
    }
    else{
        window.location.href = url;
    }
}
function sarantutup(){
  if(c == 0){
  document.getElementById('saranbox').style.display = "block"
  c = 1
  }
  else{
    document.getElementById('saranbox').style.display = "none"
    c = 0
  }
}
function makelink(){
  var search = document.getElementById("cari").value;
  var suc = document.getElementById("cari").value;
  var url = "https://www.google.com/search?q="+search
  var youtube = "https://youtube.com"
  var facebook = "https://facebook.com"
  var instagram = "https://instagram.com"
  var nekopoi = "https://nekopoi.care"
  var github = "https://github.com"
  var terjemah = "https://translate.google.com/"
  var home = "index.html"
  if(search==""){
      alert("isi dulu tong")
      document.getElementById('link')
  }
  else if(search=="youtube" && suc=="ucup"){
      window.location.href = youtube;
  }
  else if(search=="Youtube"){
    window.location.href = youtube;
  }
  else if(search=="Terjemah"){
    window.location.href = terjemah;
  }
  else if(search=="Translate"){
    window.location.href = terjemah;
  }
  else if(search=="terjemah"){
    window.location.href = terjemah;
  }
  else if(search=="translate"){
    window.location.href = terjemah;
  }
  else if(search=="Nekopoi"){
    alert('sebaiknya anda memakai VPN')
    window.location.href = nekopoi
  }
  else if(search=="nekopoi"){
    alert('sebaiknya anda memakai VPN')
    window.location.href = nekopoi
  }
  else if(search=="musik"){
    document.getElementById('musik').style.display = "block"
  }
    else if(search=="Musik"){
    document.getElementById('musik').style.display = "block"
  }
  else if(search=="facebook"){
      window.location.href = facebook;
  }
  else if(search=="Facebook"){
    window.location.href = facebook;
  }
  else if(search=="dafa"){
      window.location.href = "https://www.facebook.com/dafa.prasetya.31?ref=bookmarks";
  }
  else if(search=="Instagram"){
      window.location.href = instagram;
  }
  else if(search=="Github"){
    window.location.href = github;
  }
  else if(search=="particle effect"){
    window.location.href = "https://github.com/VincentGarreau/particles.js/";
  }
  else if(search=="Kontol"){
    alert("kasar lu, KELUAR!")
    window.location.href = home;
  }
  else if(search=="Ganti"){
    document.getElementById('tema').style.display =  "none"
  }
  else if(search=="Ganti "){
    document.getElementById('tema').style.display =  "block"
  }
  else if(search=="Fitur"){
    document.getElementById('bok').style.display =  "block"
  }
  else if(search=="Saran"){
    document.getElementById('saranbox').style.display =  "block"
  }
  else{
      window.location.href = url;
  }
}

document.addEventListener("click", function(kkk){
  const body = document.getElementById('luv')
  body.addEventListener('click', function(kkk){
    let x = kkk.offsetX
    let y = kkk.offsetY

    let ripples = document.createElement('span')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples)
    setTimeout(() => {
      ripples.remove()
    },2000)
  })
})
ingat();
  function inget(){
    date = new Date();
    jam = date.getHours()
    waktu = "haiii"
    

 
    if(jam == 0){
      waktu = "hai"
    }

    if(jam >= 1){
      waktu = "Kok belum tidur sih?"
    }
    if(jam >= 5){
      waktu = "Pagiii"
    }
    if(jam == 6){
      waktu = "Morning"
    }
    if(jam >= 8){
      waktu = "Masih Pagi kan?"
    }
    if(jam >= 10){
      waktu = "--"
    }
    if(jam >= 12){
      waktu = "Siangg"
    }
    if(jam >= 13){
      waktu = "--"
    }
    if(jam == 15){
      waktu = "--"
    }
    if(jam >= 16){
      waktu = "--"
    }
    if(jam >= 18){
      waktu = "sore"
    }
    if(jam == 19){
      waktu = "--"

    }
    if(jam >= 20){
      waktu = "--"
    }
    if(jam >= 22){
      waktu = "--"
    }
    if(jam == 23){
      waktu = "--"
    }


    var oon = waktu
    var jjam = jam
    document.getElementById("test").innerText = jjam;
    document.getElementById("test").textContent = jjam;
    document.getElementById("inget").innerText = oon;
    ///document.getElementById("inget").textContent = oon;
}
inget();


var p = 'prstya'
const quotes = [
  {
    "quote": "Haii",
    "source": "--"
  },
  {
    "quote": "Kek gini alay ga sih?",
    "source": "--"
    },
  {
    "quote": "hehe",
    "source": "--"
  },
  {
    "quote": "coba refresh",
    "source": "--"
  },
]
  
function randomQuote(){
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `${random.quote}`;
  source.innerText = random.source;
}
  
setInterval(randomQuote, 2000);



function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  else if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s; 
  
  var time = h + ":" + m + ":" + s ;

  

  

  document.getElementById("jam").innerText = time;
  document.getElementById("jam").textContent = time;
}
setInterval(showTime, 1000);
showTime();

function dafaprstya() {
  
  document.getElementById('dafaprasetya').innerHTML = '>-<';
  if (window.performance) {
    console.info("REFRES");
  }
  console.info(performance.navigation.type);
  
}
dafaprstya();


function ingat(){
  date = new Date();
  jam = date.getHours()
  waktu = "malam cintaqu"

  if(jam == 0){
    waktu = "Lidia Putri"
  }
  if(jam == 22){
    waktu = "Lidiaa"
  }
  else{
    waktu = "Lidiaa"
  }


  var oon = waktu
  document.getElementById("pengingat").innerText = oon;
  document.getElementById("pengingat").textContent = oon;
}
function ppp(){
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  var prstya = document.getElementById("dafaprasetya")
  var penging = document.getElementById("pengingat")
  var pmdw = document.getElementById("pmdanwaktu")
  var dd = document.getElementById("tema")
  var jj = document.getElementById("inget")
  var audio = document.getElementById("audio")
  audio.volume = 0.2
  var ketik = 'typing 2s steps(25, end), blink-caret .5s step-end infinite'
  var q = document.getElementById('loper')
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    document.getElementById('dafaprasetya').innerHTML = '';
    document.getElementById('aurora').style.display = 'none'
    document.getElementById("jam").style.display = 'none'
    document.getElementById("ea").style.display = 'none'
    document.getElementById("judul").style.display = 'none'
    document.getElementById('temah').disabled = true
    jj.style.display = 'none'
    prstya.style.display = 'none'
    penging.style.display = 'none'
    audio.pause()
    q.style.display = 'block'
      document.getElementById('temah').disabled = true
      audio.pause()
      sleep(3000).then(() => {
        
        
        document.getElementById('temah').setAttribute('checked', 'checked')
        
        
        
        
        
      });
      ///menghilang
      sleep(3500).then(() => {
        document.getElementById('temah').disabled = true
        
        document.getElementById('aurora').style.animation = 'fadeout 2.5s'
        document.getElementById("jam").style.animation = 'fadeout 2.5s'
        document.getElementById("ea").style.animation = 'fadeout 2.5s'
        document.getElementById("judul").innerText = '...'
        prstya.style.animation = 'fadeout 2.5s'
        jj.style.animation = 'fadeout 2.5s'
        penging.style.animation = 'fadeout 2.5s'
        
        
        
        
      });
      //hi
      sleep(6000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.display = 'block'

        penging.style.animation = ketik
        penging.style.fontFamily = 'quote'
        document.getElementById("judul").innerText = 'Hai'
        penging.innerHTML = 'Hi'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
        
      });
      sleep(8000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      
      sleep(9000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'typing 2s steps(25, end), blink-caret .5s step-end infinite'
        document.getElementById("judul").innerText = 'Kalau kamu liat ini'
        penging.innerHTML = 'Kalau kamu liat ini'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      sleep(13000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      //gw mau ngucapin
      sleep(14000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadein 1s'
        document.getElementById("judul").innerText = 'kamu nurut banget sih'
        penging.innerHTML = 'Kamu boleh sebut aku alay'
        penging.style.width = '800px'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      sleep(18000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      //happy birthday
      sleep(19000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = ketik
        document.getElementById("judul").innerText = 'Sekarang..'
        penging.innerHTML = 'Atau Cringe'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      sleep(22000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      //and
      sleep(23000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = ketik
        document.getElementById("judul").innerText = '....'
        penging.innerHTML = 'Tapi'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      sleep(24000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      //do1
      sleep(25000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = ketik
        document.getElementById("judul").innerText = '..'
        penging.innerHTML = 'Aku cuman mau bilang'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      sleep(28000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      //do2
      sleep(29000).then(() => {
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = ketik
        penging.innerHTML = '..'
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      sleep(30000).then(() => {
        penging.style.display = 'block'
        document.getElementById('aurora').style.display = 'none'
        document.getElementById("jam").style.display = 'none'
        document.getElementById("ea").style.display = 'none'
        penging.style.animation = 'fadeout 1s'
        
        jj.style.display = 'none'
        prstya.style.display = 'none'
        penging.style.whiteSpace = 'nowrap'
        
        
        
      });
      
      //tobemy
      sleep(32000).then(() => {
        document.getElementById("judul").innerText = 'Birthday'
        penging.innerHTML = 'I Love You'
        jj.style.display = 'none'
        prstya.style.display = 'block'
        penging.style.display = 'block'
        var styleElem = document.head.appendChild(document.createElement("style"));

        styleElem.innerHTML = "#pengingat:active::before {content: 'Pacaran Yu!';}";
        prstya.style.whiteSpace = 'nowrap'
        penging.style.animation = ketik
        
        
        
      });
      
      
      sleep(39000).then(() => {
        jj.onclick = function event() {
          jj.style.animation = 'glic 1s steps(100) infinite'
          setTimeout(function(){ jj.style.animation = 'none' }, 3000);
        } 
        prstya.onclick = function event() {
          prstya.style.animation = 'glic 1s steps(100) infinite'
          setTimeout(function(){ prstya.style.animation = 'none' }, 3000);
        } 
        penging.onclick = function event() {
          penging.style.animation = 'glic 1s steps(100) infinite'
          setTimeout(function(){ penging.style.animation = 'none' }, 3000);
        }    
        q.onclick = function event() {
          q.style.animation = 'glic 1s steps(100) infinite'
          setTimeout(function(){ q.style.animation = 'none' }, 3000);
        }     
        
        
      });
    }
    
    
  
}  
ppp();
