/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import ReactDOM from 'react-dom/client'
import './index.css'


function TheButtons({ song, buttonKey, src, func }){
  return(<>
      <button key={song} onClick={func(buttonKey, song)} className="drum-pad">{buttonKey}
      <audio className="clip" src={src} id={buttonKey}/></button>
  </>)
}
function Ass() {
  const [playing, setPlaying] =useState("no music");

const handleClick=(key, song)=>{
  
 return()=>{document.getElementById(key).play();
  setPlaying(song)};
 
}
const songArray =[{
  song: "song Q",
  id: "Q",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
  
},{
  song: "song W",
  id: "W",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
  
},{
  song: "song E",
  id: "E",
  src:"Akon_ft_Michael_Jackson_Hold_My_Han.mp3"
},{
  song: "song A",
  id: "A",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
  
},{
  song: "song S",
  id: "S",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
  
},{
  song: "song D",
  id: "D",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
  
},{
  song: "song Z",
  id: "Z",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
  
},{
  song: "song X",
  id: "X",
  src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
  
},{
  song: "song C",
  id: "C",
  src:"https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
  
  
}];


return(<>
{setTimeout((alert("hit any button in the drum machine")), 2000)}
  <h1>DRUM MACHINE</h1>
  <div id="drum-machine">
  <div id="board">
      {songArray.map((ex)=>(
          <TheButtons song={ex.song} buttonKey={ex.id} src={ex.src} func={handleClick}/>
      ))}
  </div>
  <div id="display">
<p>you are now playing {playing}</p>
  </div>
  </div>
</>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ass/>
  </React.StrictMode>,
)
