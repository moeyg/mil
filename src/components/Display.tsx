import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display: React.FC = () => {
  const displayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumID = isAlbum ? location.pathname.split('/').pop() : '';
  const backgroundColor = albumsData[Number(albumID)].bgColor;

  useEffect(() => {
    if (displayRef.current) {
      if (isAlbum) {
        displayRef.current.style.background = `linear-gradient(${backgroundColor}, #121212)`;
      } else {
        displayRef.current.style.background = `#121212`;
      }
    }
  });

  return (
    <div
      ref={displayRef}
      className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg-ml-0'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
