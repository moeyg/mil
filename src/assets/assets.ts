import arrow_right from './icons/arrow-right.svg';
import arrow_left from './icons/arrow-left.svg';
import arrow from './icons/arrow.svg';
import bell from './icons/bell.svg';
import clock from './icons/clock.svg';
import home from './icons/home.svg';
import like from './icons/like.svg';
import loop from './icons/loop.svg';
import mic from './icons/mic.svg';
import miniPlayer from './icons/mini-player.svg';
import next from './icons/next.svg';
import pause from './icons/pause.svg';
import play from './icons/play.svg';
import playList from './icons/play-list.svg';
import plus from './icons/plus.svg';
import prev from './icons/prev.svg';
import queue from './icons/queue.svg';
import search from './icons/search.svg';
import shuffle from './icons/shuffle.svg';
import speaker from './icons/speaker.svg';
import stack from './icons/stack.svg';
import volume from './icons/volume.svg';
import zoom from './icons/zoom.svg';

import megaHits from './albums/mega-hits.svg';
import trendingGlobal from './albums/trending-global.svg';
import trendingKorea from './albums/trending-korea.svg';
import top50 from './albums/top50.svg';
import top100 from './albums/top100.svg';
import viral50 from './albums/viral50.svg';

import album_amalgam from './albums/amalgam.svg';
import album_inThisLife from './albums/in-this-life.svg';
import album_betterDay from './albums/better-day.svg';
import album_mood1 from './albums/mood-1.svg';
import album_islandBreeze from './albums/island-breeze.svg';
import album_flow from './albums/flow.svg';
import album_onceInParis from './albums/once-in-paris.svg';
import album_noPlaceToGo from './albums/no-place-to-go.svg';
import album_joyrideJamboree from './albums/joyride-jamboree.svg';

import song_amalgam from './songs/amalgam.mp3';
import song_inThisLife from './songs/in-this-life.mp3';
import song_betterDay from './songs/better-day.mp3';
import song_mood1 from './songs/mood-1.mp3';
import song_islandBreeze from './songs/island-breeze.mp3';
import song_flow from './songs/flow.mp3';
import song_onceInParis from './songs/once-in-paris.mp3';
import song_noPlaceToGo from './songs/no-place-to-go.mp3';
import song_joyrideJamboree from './songs/joyride-jamboree.mp3';

interface AlbumsData {
  id: number;
  name: string;
  image: string;
  desc: string;
  bgColor: string;
}

interface SongsData {
  id: number;
  name: string;
  image: string;
  file: string;
  desc: string;
  duration: string;
}

interface Icons {
  arrow_left: string;
  arrow_right: string;
  arrow: string;
  bell: string;
  clock: string;
  home: string;
  like: string;
  loop: string;
  mic: string;
  miniPlayer: string;
  next: string;
  pause: string;
  playList: string;
  play: string;
  plus: string;
  prev: string;
  queue: string;
  search: string;
  shuffle: string;
  speaker: string;
  stack: string;
  volume: string;
  zoom: string;
}

export const icons: Icons = {
  arrow_left,
  arrow_right,
  arrow,
  bell,
  clock,
  home,
  like,
  loop,
  mic,
  miniPlayer,
  next,
  pause,
  playList,
  play,
  plus,
  prev,
  queue,
  search,
  shuffle,
  speaker,
  stack,
  volume,
  zoom,
};

export const albumsData: AlbumsData[] = [
  {
    id: 0,
    name: 'Top 50 Global',
    image: top50,
    desc: 'Top 50 Global',
    bgColor: '#004AAD',
  },
  {
    id: 1,
    name: 'Top 100 Global',
    image: top100,
    desc: 'Top 100 Global',
    bgColor: '#737373',
  },
  {
    id: 2,
    name: 'Trending Korea',
    image: trendingKorea,
    desc: 'Trending Korea',
    bgColor: '#0047A0',
  },
  {
    id: 3,
    name: 'Trending Global',
    image: trendingGlobal,
    desc: 'Trending Global',
    bgColor: '#101820',
  },
  {
    id: 4,
    name: 'Mega Hits',
    image: megaHits,
    desc: 'Mega Hits',
    bgColor: '#773795',
  },
  {
    id: 5,
    name: 'Viral 50 Global',
    image: viral50,
    desc: 'Your weekly update of the most played tracks',
    bgColor: '#FFA592',
  },
];

export const songsData: SongsData[] = [
  {
    id: 0,
    name: 'AMALGAM',
    image: album_amalgam,
    file: song_amalgam,
    desc: 'Rockot',
    duration: '4:14',
  },
  {
    id: 1,
    name: 'In this life',
    image: album_inThisLife,
    file: song_inThisLife,
    desc: 'Wooster27',
    duration: '2:58',
  },
  {
    id: 2,
    name: 'Mood 1',
    image: album_mood1,
    file: song_mood1,
    desc: 'AVIANSHo9',
    duration: '2:35',
  },
  {
    id: 3,
    name: 'Island Breeze',
    image: album_islandBreeze,
    file: song_islandBreeze,
    desc: 'Top-Flow',
    duration: '1:30',
  },
  {
    id: 4,
    name: 'Flow',
    image: album_flow,
    file: song_flow,
    desc: 'Loksii',
    duration: '2:11',
  },
  {
    id: 5,
    name: 'Better Day',
    image: album_betterDay,
    file: song_betterDay,
    desc: 'penguinmusic',
    duration: '1:30',
  },
  {
    id: 6,
    name: 'Once In Paris',
    image: album_onceInParis,
    file: song_onceInParis,
    desc: 'Pumpupthemind',
    duration: '2:12',
  },
  {
    id: 7,
    name: 'No Place To Go',
    image: album_noPlaceToGo,
    file: song_noPlaceToGo,
    desc: 'SergePavkinMusic',
    duration: '5:37',
  },
  {
    id: 7,
    name: 'Joyride Jamboree',
    image: album_joyrideJamboree,
    file: song_joyrideJamboree,
    desc: 'Neura-Flow',
    duration: '1:09',
  },
];
