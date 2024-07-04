import React from 'react';

interface SongListProps {
  id: number;
  name: string;
  image: string;
  desc: string;
}

const SongList: React.FC<SongListProps> = ({ id, name, image, desc }) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name + 'album'} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default SongList;
