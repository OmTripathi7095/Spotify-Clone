let songIndex=1
let playing = false;
let Name=document.getElementById("SongName")
let duration=Array.from(document.getElementsByClassName("duration"))
let songCover=Array.from(document.getElementsByClassName("songCover"))
let myProgressBar= document.getElementById("range")
let x=0
let preloader=document.getElementById("preloader")
window.addEventListener("DOMContentLoaded",()=>{
    myProgressBar.value=0
   
})
let songs=[
    {SongName:"Changes",filePath:"/songs/1.mp3",coverPath:"/covers/1.jpg"},
    {SongName:"Jocelyn Flores",filePath:"/songs/2.mp3",coverPath:"/covers/2.jpg"},
    {SongName:"Everybody Dies In...",filePath:"/songs/3.mp3",coverPath:"/covers/3.jpg"},
    {SongName:"Ex Bitch",filePath:"/songs/4.mp3",coverPath:"/covers/4.jpg"},
    {SongName:"Hope",filePath:"/songs/5.mp3",coverPath:"/covers/5.jpg"},
    {SongName:"Look At Me",filePath:"/songs/6.mp3",coverPath:"/covers/6.jpg"},
    {SongName:"Moonlight",filePath:"/songs/7.mp3",coverPath:"/covers/7.jpg"},
    {SongName:"Revenge",filePath:"/songs/8.mp3",coverPath:"/covers/8.jpg"},
    {SongName:"Sad",filePath:"/songs/9.mp3",coverPath:"/covers/9.jpg"}
]
songCover.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].SongName;
    
})
let audioElement = new Audio('/songs/1.mp3')
audioElement.src=`/songs/${songIndex}.mp3`

Name.innerText=songs[songIndex-1].SongName;
pauseBtn.addEventListener('click',()=>{                                     //pauseBtn
   if(playing)
   {
    audioElement.pause()
    pauseBtn.classList.add('fa-circle-play')
    pauseBtn.classList.remove('fa-circle-pause')
    playing=false;
   }
   else{
    audioElement.play()
    pauseBtn.classList.remove('fa-circle-play')
    pauseBtn.classList.add('fa-circle-pause')
    playing=true
   }
})

audioElement.addEventListener('timeupdate',()=>{  
                          //seekerProgress
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

myProgressBar.value=progress
})
myProgressBar.addEventListener('change',()=>{                                                   //seekerProgressonCLick
   audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songCover')).forEach((item) => {  item.addEventListener('click',(e)=>{
     songIndex=(e.target.id);
     console.log(songIndex)
    if(playing)
    {   
        audioElement.src=`/songs/${songIndex}.mp3`
        Name.innerText=songs[songIndex-1].SongName;

        audioElement.play()
        }
    else{
        audioElement.src=`/songs/${songIndex}.mp3`
        
        Name.innerText=songs[songIndex-1].SongName;
     audioElement.play()
     pauseBtn.classList.remove('fa-circle-play')
     pauseBtn.classList.add('fa-circle-pause')
     playing=true
    }
    
    
})})
document.getElementById("nextBtn").addEventListener("click",()=>{
    
    if(songIndex==9)
    {
        audioElement.src=`/songs/${songIndex}.mp3`
        Name.innerText=songs[songIndex-1].SongName;
        audioElement.play()
        pauseBtn.classList.remove('fa-circle-play')
 pauseBtn.classList.add('fa-circle-pause')
    }
    else{
        songIndex=parseInt(songIndex)+1
        audioElement.src=`/songs/${songIndex}.mp3`
        Name.innerText=songs[songIndex-1].SongName;
        audioElement.play()
        pauseBtn.classList.remove('fa-circle-play')
        pauseBtn.classList.add('fa-circle-pause')
     }
    
})
document.getElementById("backBtn").addEventListener("click",()=>{
    
    if(songIndex==1)
    {
        audioElement.src=`/songs/${songIndex}.mp3`
        Name.innerText=songs[songIndex-1].SongName;
        audioElement.play()
        pauseBtn.classList.remove('fa-circle-play')
 pauseBtn.classList.add('fa-circle-pause')
    }
    else{
        songIndex-=1
        audioElement.src=`/songs/${songIndex}.mp3`
        Name.innerText=songs[songIndex-1].SongName;
        audioElement.play()
        pauseBtn.classList.remove('fa-circle-play')
        pauseBtn.classList.add('fa-circle-pause')
     }
    
})

  window.addEventListener("load",()=>{
    preloader.style.visibility= "hidden"
})

   





