import React from 'react';
import Navigation from './Navigation';
import { useParams } from 'react-router-dom';
import { albumsData, icons, songsData } from '../assets/assets';

const DisplayAlbum: React.FC = () => {
  const { id } = useParams<string>();
  const albumID = Number(id);
  const albumData = albumsData[albumID];

  console.log(albumData);

  return (
    <>
      <Navigation />
      <div className='mt-10 flex gap-8 flex-col items-center sm:flex-row sm:items-end'>
        <img className='w-60' src={albumData.image} alt={albumData.name} />
        <div className='flex flex-col'>
          <p>플레이리스트</p>
          <h2 className='text-4xl font-bold mb-4 md:text-7xl'>
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-2 flex items-center gap-2'>
            <img className='inline-block w-5' src={icons.logo} alt='로고' />
            <strong>MIL</strong>
          </p>
          <p className='mt-1 flex items-center gap-2'>
            <img
              className='inline-block w-5'
              src={icons.like}
              alt='좋아요 수'
            />
            <strong>{albumData.likes} Likes</strong>
          </p>
          <p className='mt-1 flex items-center gap-2'>
            <img
              className='inline-block w-5'
              src={icons.clock}
              alt='재생 시간'
            />
            <strong>{albumData.duration}</strong>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] items-center'>
        <p>
          <b className='mr-4'>#</b>제목
        </p>
        <p>앨범</p>
        <p className='hidden md:block'>추가된 날짜</p>
        <img
          className='m-auto w-4 opacity-70'
          src={icons.clock}
          alt='재생 시간'
        />
      </div>
      <hr />
      {songsData.map((song, index) => (
        <div
          key={index}
          className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 items-center text-[#a7a7a7] hover:[#ffffff2b]'
        >
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
            <img
              className='hidden md:inline w-10 mr-3'
              src={song.image}
              alt={song.name + 'by' + song.desc}
            />
            {song.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden md:block'>5 days ago</p>
          <p className='text-[15px] text-center'>{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
