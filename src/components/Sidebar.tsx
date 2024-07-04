import React from 'react';
import { icons } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div
          onClick={() => navigate('/')}
          className='flex item-center gap-3 pl-4 cursor-pointer'
        >
          <img className='w-6' src={icons.home} alt='홈' />
          <strong className='font-bold'>홈</strong>
        </div>
        <div className='flex item-center gap-3 pl-4 cursor-pointer'>
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
          <h1>음악은 유일하게 허락하는 마약이니까 💙</h1>
          <p className='font-light'>이게 바로 지금의 나다.</p>
          <button className='font-normal px-4 py-1.5 bg-white text=[15px] text-black rounded-full mt-4'>
            플레이리스트 만들기
          </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>궁금하죠?</h1>
          <p className='font-light'>
            제가 묵찌빠로 유학까지 다녀왔단 사실이요. 👊
          </p>
          <button className='font-normal px-4 py-1.5 bg-white text=[15px] text-black rounded-full mt-4'>
            팟캐스트 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
