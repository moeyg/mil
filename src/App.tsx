import React, { useContext, RefObject } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';
import { songsData } from './assets/assets';

const App: React.FC = () => {
  const { audioRef, track } = useContext(PlayerContext) as {
    audioRef: RefObject<HTMLAudioElement>;
    track: (typeof songsData)[0];
  };

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
