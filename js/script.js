let songs = ["Ed Sheeran - Shape Of You.mp3","Imagine Dragons - Rise up.mp3", "NF - Let You Down.mp3","Toploader - Dancing in the Moonlight.mp3"];
let bacground = ["img/Poster1.jpg","img/Poster2.jpg","img/Poster1.jpg", "img/Poster2.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;   

window.onload = playSong;  

function playSong(){
    
    song.src = songs[currentSong]; 
    
    songTitle.textContent = songs[currentSong]; 
    
    song.play();    
}

function playOrPauseSong(){
    
    if(song.paused){
        song.play();
        $("#play img").attr("src","img/Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","img/Play.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    
    var position = song.currentTime / song.duration;
    
    fillBar.style.width = position * 100 +'%';
});


function nextSong(){
    
    currentSong++;
    if(currentSong > 3){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","img/Pause.png");
    $("#image img").attr("src",bacground[currentSong]);
    $("#bg img").attr("src",bacground[currentSong]);
}

function preSong(){
    
    currentSong--;
    if(currentSong < 0){
        currentSong = 3;
    }
    playSong();
    $("#play img").attr("src","img/Pause.png");
    $("#image img").attr("src",bacground[currentSong]);
    $("#bg img").attr("src",bacground[currentSong]);
}