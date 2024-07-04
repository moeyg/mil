import arrow_right from './icons/arrow-right.svg';
import arrow_left from './icons/arrow-left.svg';
import arrow from './icons/arrow.svg';
import bell from './icons/bell.svg';
import clock from './icons/clock.svg';
import home from './icons/home.svg';
import like from './icons/like.svg';
import loop from './icons/loop.svg';
import miniPlayer from './icons/mini-player.svg';
import next from './icons/next.svg';
import pause from './icons/pause.svg';
import play from './icons/play.svg';
import playList from './icons/play-list.svg';
import plus from './icons/plus.svg';
import prev from './icons/prev.svg';
import search from './icons/search.svg';
import shuffle from './icons/shuffle.svg';
import stack from './icons/stack.svg';
import volume from './icons/volume.svg';
import zoom from './icons/zoom.svg';
import profile from './icons/profile.png';
import logo from './icons/logo.svg';

import megaHits from './albums/mega-hits.png';
import trendingGlobal from './albums/trending-global.png';
import trendingKorea from './albums/trending-korea.png';
import top50 from './albums/top50.png';
import top100 from './albums/top100.png';
import viral50 from './albums/viral50.png';

import album_onAndOn from './albums/onAndOn.jpg';
import album_nostalgia from './albums/nostalgia.jpg';
import album_alright from './albums/alright.jpg';
import album_underrated from './albums/underrated.jpg';
import album_pretty_afternoon from './albums/pretty_afternoon.jpg';
import album_calling_out_your_name from './albums/calling_out_your_name.jpg';
import album_time_with_you from './albums/time_with_you.jpg';
import album_sugar_plumbin from './albums/sugar_plumbin.jpg';
import album_waves from './albums/waves.jpg';
import album_twenty_five from './albums/twenty_five.jpg';
import album_talk_about from './albums/talk_about.jpg';
import album_WTP from './albums/WTP.jpg';
import album_getaway from './albums/getaway.jpg';

import song_onAndOn from './songs/onAndOn.mp3';
import song_nostalgia from './songs/nostalgia.mp3';
import song_alright from './songs/alright.mp3';
import song_underrated from './songs/underrated.mp3';
import song_pretty_afternoon from './songs/pretty_afternoon.mp3';
import song_calling_out_your_name from './songs/calling_out_your_name.mp3';
import song_time_with_you from './songs/time_with_you.mp3';
import song_sugar_plumbin from './songs/sugar_plumbin.mp3';
import song_waves from './songs/waves.mp3';
import song_twenty_five from './songs/twenty_five.mp3';
import song_talk_about from './songs/talk_about.mp3';
import song_WTP from './songs/WTP.mp3';
import song_getaway from './songs/getaway.mp3';

interface AlbumsData {
  id: number;
  name: string;
  image: string;
  desc: string;
  bgColor: string;
  likes: string;
  duration: string;
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
  miniPlayer: string;
  next: string;
  pause: string;
  playList: string;
  play: string;
  plus: string;
  prev: string;
  search: string;
  shuffle: string;
  stack: string;
  volume: string;
  zoom: string;
  profile: string;
  logo: string;
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
  miniPlayer,
  next,
  pause,
  playList,
  play,
  plus,
  prev,
  search,
  shuffle,
  stack,
  volume,
  zoom,
  profile,
  logo,
};

export const albumsData: AlbumsData[] = [
  {
    id: 0,
    name: 'Viral 50 Global',
    image: viral50,
    desc: 'Viral 50 Global',
    bgColor: '#00BF63',
    likes: '4, 345, 050',
    duration: '3h 30min',
  },
  {
    id: 1,
    name: 'Top 100 Global',
    image: top100,
    desc: 'Top 100 Global',
    bgColor: '#3533CD',
    likes: '4, 723, 270',
    duration: '7h 45min',
  },
  {
    id: 2,
    name: 'Top 50 Global',
    image: top50,
    desc: 'Top 50 Global',
    bgColor: '#004AAD',
    likes: '9, 885, 123',
    duration: '3h 57min',
  },
  {
    id: 3,
    name: 'Trending Global',
    image: trendingGlobal,
    desc: 'Trending Global',
    bgColor: '#101820',
    likes: '7, 124, 185',
    duration: '2h 30min',
  },
  {
    id: 4,
    name: 'Trending Korea',
    image: trendingKorea,
    desc: 'Trending Korea',
    bgColor: '#0047A0',
    likes: '1, 983, 888',
    duration: '3h 43min',
  },
  {
    id: 5,
    name: 'Mega Hits',
    image: megaHits,
    desc: 'Mega Hits',
    bgColor: '#773795',
    likes: '4, 345, 050',
    duration: '7h 37min',
  },
];

export const songsData: SongsData[] = [
  {
    id: 0,
    name: "What's The Problem?",
    image: album_WTP,
    file: song_WTP,
    desc: 'OSKI',
    duration: '2:28',
  },
  {
    id: 1,
    name: 'Time With You',
    image: album_time_with_you,
    file: song_time_with_you,
    desc: 'Tollef, RVLE',
    duration: '2:36',
  },
  {
    id: 2,
    name: "Sugar Plumbin'",
    image: album_sugar_plumbin,
    file: song_sugar_plumbin,
    desc: 'Reece Taylor',
    duration: '2:07',
  },
  {
    id: 3,
    name: 'Getaway',
    image: album_getaway,
    file: song_getaway,
    desc: 'Daniel Levi',
    duration: '4:02',
  },

  {
    id: 4,
    name: 'Alright',
    image: album_alright,
    file: song_alright,
    desc: 'Avi Snow, Sync',
    duration: '3:15',
  },
  {
    id: 5,
    name: 'Underrated',
    image: album_underrated,
    file: song_underrated,
    desc: 'Zushi & Vanko',
    duration: '3:42',
  },
  {
    id: 6,
    name: 'Pretty afternoon',
    image: album_pretty_afternoon,
    file: song_pretty_afternoon,
    desc: 'Andrah',
    duration: '2:38',
  },
  {
    id: 7,
    name: 'Calling Out Your Name',
    image: album_calling_out_your_name,
    file: song_calling_out_your_name,
    desc: 'MANIA, Tom Wigley, Lottie Jones',
    duration: '3:54',
  },
  {
    id: 8,
    name: 'On & On',
    image: album_onAndOn,
    file: song_onAndOn,
    desc: 'Cartoon, Jéja',
    duration: '3:28',
  },
  {
    id: 9,
    name: 'Waves',
    image: album_waves,
    file: song_waves,
    desc: 'AC13',
    duration: '4:28',
  },
  {
    id: 10,
    name: 'Nostalgia',
    image: album_nostalgia,
    file: song_nostalgia,
    desc: 'Janji & Johnning',
    duration: '2:56',
  },
  {
    id: 11,
    name: 'twenty five',
    image: album_twenty_five,
    file: song_twenty_five,
    desc: 'if found, Luma',
    duration: '3:18',
  },
  {
    id: 12,
    name: 'Talk about',
    image: album_talk_about,
    file: song_talk_about,
    desc: '21RoR',
    duration: '2:15',
  },
];
