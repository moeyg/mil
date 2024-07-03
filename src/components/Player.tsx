import React from 'react';
import { icons, songsData } from '../assets/assets';

const Player: React.FC = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img
          className='w-12'
          src={songsData[0].image}
          alt={songsData[0].name}
        />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-5'>
          <img className='w-5 cursor-pointer' src={icons.shuffle} alt='셔플' />
          <img
            className='w-5 cursor-pointer'
            src={icons.prev}
            alt='이전 노래'
          />
          <img className='w-5 cursor-pointer' src={icons.play} alt='재생' />
          <img
            className='w-5 cursor-pointer'
            src={icons.next}
            alt='다음 노래'
          />
          <img
            className='w-5 cursor-pointer'
            src={icons.loop}
            alt='반복 재생'
          />
        </div>
        <div className='flex items-center gap-5'>
          <p>{songsData[0].duration}</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-0 bg-indigo-600 rounded-full' />
          </div>
          <p>{songsData[0].duration}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-5' src={icons.playList} alt='플레이 리스트' />
        <img className='w-5' src={icons.volume} alt='음량' />
        <div className='w-14 bg-slate-50 h-1 rounded'></div>
        <img className='w-5' src={icons.miniPlayer} alt='미니 플레이' />
        <img className='w-5' src={icons.zoom} alt='확대' />
      </div>
    </div>
  );
};

export default Player;
