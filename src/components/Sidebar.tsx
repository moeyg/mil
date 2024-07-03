import React from 'react';
import { icons } from '../assets/assets';

const Sidebar: React.FC = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex item-center gap-3 pl-3 cursor-pointer'>
          <img className='w-6' src={icons.home} alt='홈' />
          <strong className='font-bold'>홈</strong>
        </div>
        <div className='flex item-center gap-3 pl-3 cursor-pointer'>
          <img className='w-6' src={icons.search} alt='검색' />
          <strong className='font-bold'>검색</strong>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={icons.stack} alt='뮤직 아카이브' />
            <strong className='font-semibold'>나의 라이브러리</strong>
          </div>

          <div className='flex items-center gap-3'>
            <img className='w-5' src={icons.arrow} alt='' />
            <img className='w-5' src={icons.plus} alt='' />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>첫 번째 플레이리스트 만드세요.</h1>
          <p className='font-light'>어렵지 않아요. 저희가 도와드릴게요.</p>
          <button className='font-normal px-4 py-1.5 bg-white text=[15px] text-black rounded-full mt-4'>
            플레이리스트 만들기
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>팔로우 할 팟 캐스트를 찾아보세요.</h1>
          <p className='font-light'>새로운 에피소드 소식을 알려드릴게요.</p>
          <button className='font-normal px-4 py-1.5 bg-white text=[15px] text-black rounded-full mt-4'>
            팟캐스트 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
