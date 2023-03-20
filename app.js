const player = document.getElementById('playy');
const next = document.getElementById('next');
const back = document.getElementById('back');

const audio = document.getElementById('audio');
const songIMG = document.getElementById('id_musicas');
const titolo = document.getElementById('id_name_musica');

let musicas_ = ['musicas/[YT2mp3.info] - JVSTIN - CLANDESTINA ( TikTok Remix ) (320kbps).mp3', 
'musicas/[YT2mp3.info] - METAMORPHOSIS (320kbps).mp3'
];

let imagens_ = ['imagens/Capturar.png', 'hqdefault.png'];

let nomes_musicas = ['CLANDESTINA', 'METAMORPHIS'];

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

function trocar_icone() { // cara isso ficou muito bom!!
      document.getElementById('playy').src = "imagens/pause.png"; 
      if(player.src = "imagens/pause.png") {
            player.src = "imagens/play.png";
      }
};

let i = 0;
next.addEventListener('click', function(){
      i++;
      audio.src = musicas_[i];
      titolo.innerHTML = nomes_musicas[i];
      songIMG.src = imagens_[i];

      if (i >= musicas_.length) {
           i = 0;
           audio.src = musicas_[i];
           titolo.innerHTML = nomes_musicas[i];
           songIMG.src = imagens_[i];
      }
      trocar_icone();
      audio.pause(); 
});

back.addEventListener('click', function(){
      i--;
      audio.src = musicas_[i];
      titolo.innerHTML = nomes_musicas[i];
      songIMG.src = imagens_[i];

      if (i <= musicas_.length) {
           i = 0;
           audio.src = musicas_[i];
           titolo.innerHTML = nomes_musicas[i];
           songIMG.src = imagens_[i];
      }
      trocar_icone();
      audio.pause();
});

function initPlayer(){
      audio.src = musicas_[0];
      songIMG.src = imagens_[0];
      titolo.innerHTML = nomes_musicas[0];
}