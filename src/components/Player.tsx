import React, { useContext, RefObject } from 'react';
import { icons, songsData } from '../assets/assets';
import { Slider } from '@mui/material';
import { PlayerContext, Time } from '../context/PlayerContext';

const Player: React.FC = () => {
  const { trackLength, seekBar, play, pause, playStatus, track, time } =
    useContext(PlayerContext) as {
      trackLength: RefObject<HTMLDivElement>;
      seekBar: RefObject<HTMLDivElement>;
      play: () => void;
      pause: () => void;
      playStatus: boolean;
      track: (typeof songsData)[0];
      time: Time;
    };

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='w-[20%] hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt={track.name} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc}</p>
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
          {playStatus ? (
            <img
              onClick={pause}
              className='w-5 cursor-pointer'
              src={icons.pause}
              alt='일시정지'
            />
          ) : (
            <img
              onClick={play}
              className='w-5 cursor-pointer'
              src={icons.play}
              alt='재생'
            />
          )}
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
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={trackLength}
            className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'
          >
            <div
              ref={seekBar}
              className='h-1 border-none w-0 bg-[#056AF6] rounded-full'
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className='w-[13%] hidden lg:flex items-center gap-2'>
        <img
          className='w-5 cursor-pointer'
          src={icons.playList}
          alt='플레이 리스트'
        />
        <img className='w-5 cursor-pointer' src={icons.volume} alt='음량' />
        <Slider
          disabled
          size='small'
          defaultValue={50}
          aria-label='Default'
          valueLabelDisplay='auto'
        />
        <img
          className='w-5 cursor-pointer'
          src={icons.miniPlayer}
          alt='미니 플레이'
        />
        <img className='w-5 cursor-pointer' src={icons.zoom} alt='확대' />
      </div>
    </div>
  );
};

export default Player;
