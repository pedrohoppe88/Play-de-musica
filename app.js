const player = document.getElementById('playy');
const next = document.getElementById('next');
const back = document.getElementById('back');

const audio = document.getElementById('audio');
const songIMG = document.getElementById('id_musicas');
const titolo = document.getElementById('titoloMusica');

let musicas_ = ['musicas/[YT2mp3.info] - JVSTIN - CLANDESTINA ( TikTok Remix ) (320kbps).mp3', 
'musicas/[YT2mp3.info] - METAMORPHOSIS (320kbps).mp3'
];

let imagenss = ['imagens/Capturar.png', 'hqdefault.png'];

initPlayer();

player.addEventListener('click', function() {
      if(audio.paused) {
            audio.play();
            document.getElementById('playy').src = "imagens/pause.png";
      }else {
            audio.pause();
            document.getElementById('playy').src = "imagens/play.png";
      }
});

let i = 0;
next.addEventListener('click', function(){
      i++;
      audio.src = musicas_[i];

      if (i >= musicas_.length) {
           i = 0;
           audio.src = musicas_[i];
      }
      audio.play(); 
});

back.addEventListener('click', function(){
      i--;
      audio.src = musicas_[i];

      if (i <= musicas_.length) {
           i = 0;
           audio.src = musicas_[i];
      }
      audio.play(); 
});

function initPlayer(){
      audio.src = musicas_[0];
      songIMG.src = imagenss[0];
}


