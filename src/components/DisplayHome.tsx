import React from 'react';
import Navigation from './Navigation';
import { albumsData, songsData } from '../assets/assets';
import AlbumList from './AlbumList';
import SongList from './SongList';

const DisplayHome: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className='mb-4'>
        <h1 className='mt-7 mb-2 font-bold text-2xl'>
          이해할만해 이해할만해 아주 완벽히 이해할만해 🔥
        </h1>
        <div className='flex overflow-auto'>
          {albumsData.map((album) => (
            <AlbumList
              key={album.id}
              id={album.id}
              name={album.name}
              image={album.image}
              desc={album.desc}
            />
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='mt-7 mb-2 font-bold text-2xl'>
          아가씨, 이제 음악 감상 시간이에요. 🎧
        </h1>
        <div className='flex overflow-auto'>
          {songsData.map((song) => (
            <SongList
              key={song.id}
              id={song.id}
              name={song.name}
              image={song.image}
              desc={song.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
