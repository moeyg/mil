import React from 'react';
import { icons } from '../assets/assets';

const Navigation: React.FC = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-1'>
          <img
            className='w-8 p-2 cursor-pointer'
            src={icons.arrow_left}
            alt='왼쪽 이동'
          />
          <img
            className='w-8 p-2 cursor-pointer'
            src={icons.arrow_right}
            alt='오른쪽 이동'
          />
        </div>
        <div className='flex items-center gap-3'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Premium 가입하기
          </p>
          <p className='bg-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            앱 설치
          </p>
          <img
            className='w-10 h-10 rounded-full'
            src='./src/assets/icons/profile.png'
          />
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 rounded-2xl cursor-pointer'>
          전체
        </p>
        <p className='text-white px-4 rounded-2xl cursor-pointer'>앨범</p>
        <p className='text-white px-4 rounded-2xl cursor-pointer'>팟캐스트</p>
      </div>
    </>
  );
};

export default Navigation;
