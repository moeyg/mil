import React, {
  createContext,
  useRef,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { songsData } from '../assets/assets';

export interface Time {
  currentTime: {
    second: number;
    minute: number;
  };
  totalTime: {
    second: number;
    minute: number;
  };
}

interface PlayerContextType {
  audioRef: React.RefObject<HTMLAudioElement>;
  trackLength: React.RefObject<HTMLDivElement>;
  seekBar: React.RefObject<HTMLDivElement>;
  track: (typeof songsData)[0];
  setTrack: React.Dispatch<React.SetStateAction<(typeof songsData)[0]>>;
  playStatus: boolean;
  setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
  play: () => void;
  pause: () => void;
  playSelectedSong: (id: number) => void;
  previous: () => void;
  next: () => void;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined
);

const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const trackLength = useRef<HTMLDivElement>(null);
  const seekBar = useRef<HTMLDivElement>(null);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState<Time>({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      if (audioRef.current) {
        await audioRef.current.play();
      }
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id + 1]);
      if (audioRef.current) {
        await audioRef.current.play();
      }
      setPlayStatus(true);
    }
  };

  const playSelectedSong = async (id: number) => {
    await setTrack(songsData[id]);
    if (audioRef.current) {
      await audioRef.current.play();
    }
    setPlayStatus(true);
  };

  useEffect(() => {
    const updateSliderAndTime = () => {
      if (audioRef.current && seekBar.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        if (!isNaN(duration) && duration > 0) {
          seekBar.current.style.width = `${Math.floor(
            (currentTime / duration) * 100
          )}%`;

          setTime({
            currentTime: {
              second: Math.floor(currentTime % 60),
              minute: Math.floor(currentTime / 60),
            },
            totalTime: {
              second: Math.floor(duration % 60),
              minute: Math.floor(duration / 60),
            },
          });
        }
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateSliderAndTime);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateSliderAndTime);
      }
    };
  }, [audioRef, seekBar, setTime]);

  const contextValue: PlayerContextType = {
    audioRef,
    trackLength,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playSelectedSong,
    previous,
    next,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
