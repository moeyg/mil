import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

interface SongListProps {
  id: number;
  name: string;
  image: string;
  desc: string;
}

const SongList: React.FC<SongListProps> = ({ id, name, image, desc }) => {
  const { playSelectedSong } = useContext(PlayerContext) as {
    playSelectedSong: (id: number) => void;
  };

  return (
    <div
      onClick={() => playSelectedSong(id)}
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
    >
      <img className='rounded' src={image} alt={name + 'album'} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default SongList;
