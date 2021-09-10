import React, {useState, useEffect} from 'react';
import '../css/Speaker.css'
import speaker from '../asset/speaker.png'

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };


const Speaker = () => {

const [playing, toggle] = useAudio('/music.mp3');


  return (
    <div className = 'speaker'>
        <img  onClick={toggle} src={speaker}  />
        
    </div>
  );
}

export default Speaker;