# MIL: Music Is Life ♪

<div align="center">
  <br />
    <img src="" width=80%>
  <br />
</div>

## Service Link

> [MIL: Music Is Life](https://mil-gamma.vercel.app/)

<br>

## Information

가상의 음원 사이트 MIL(Music Is Life) 에서 음원 감상을 즐길 수 있는 웹 어플리케이션 입니다. 🎧 <br>
프로젝트에 사용된 음원은 [NCS](https://ncs.io/)에서 다운로드 받았습니다. (🎶 <a href="#music-copyright">음원 저작권</a>) <br>
웹 디자인은 Spotify를 참고하여 제작하였습니다. <br>
(제 귀에) 좋은 음원만 선정했으니 즐겁게 들어주시길 바랍니다! 🫠

<br>

## Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

  <br>

## <a name="features">Features</a>

### 음원 재생

- 사용자는 음원을 선택해 재생할 수 있습니다.
- 다음 버튼과 이전 버튼을 활용하여 음원을 이동할 수 있습니다.
- 음원 타임라인을 클릭하여 원하는 지점으로 이동할 수 있습니다.

### 플레이리스트

- 앨범을 클릭하여 앨범 안의 음원을 재생할 수 있습니다.
- 음원 목록에서 원하는 음원을 선택하여 재생할 수 있습니다.

### 동적 UI 업데이트

- 뒤로가기 버튼을 활용하여 이전 페이지로 이동할 수 있습니다.
- 기기의 화면 크기에 따라 달라지는 반응형 모델을 구현했습니다.

<br>

## <a name="trouble-shooting">Trouble Shooting</a>

### ⚡️ seekBar가 정상적으로 음원의 진행 상황을 반영하지 못 하는 이슈

#### 1️⃣ 초기 구현

- `useEffect`를 사용하여 `setTimeout`으로 seekBar와 시간을 업데이트하였다. <br>
- 음원의 `currentTime`과 `duration`을 기반으로 슬라이더 너비와 시간 정보를 계산하였다.
- <b>실패 이유 ✅</b>:
  - `audioRef.current`와 `seekBar.current`가 `null` 일 때 처리하지 않있다.
  - `setTimeout`을 사용하여 반복적으로 슬라이더와 시간을 업데이트 하는 방식이 비효율적이다.
  - `audioRef.current.duration`이 `NaN`일 수 있는 경우를 처리하지 않았다.

#### 2️⃣ 개선된 접근 방법

- `audioRef.current`와 `seekBar.current`가 `null`인지 확인하였다.
- `setInterval`을 사용하여 1초마다 슬라이더와 시간을 업데이트하였다.
- `duration` 값이 `NaN` 또는 `0` 이하일 경우를 처리하였다.
- <b>실패 이유 ✅</b>:
  - `setInterval`은 오디오 재생이 아닌 시간 간격으로 슬라이더와 시간을 업데이트하므로, 재생 중이 아닌 경우에도 타이머가 작동하였다. <br>
  - `setInterval`을 사용한 반복적 업데이트는 비효율적이고, 필요하지 않을 때도 CPU 리소스를 소비하였다.

#### 4️⃣ 최종 성공 접근 방법

- `audioRef.current`와 `seekBar.current`가 `null`인지 확인하였다.
- 오디오의 `timeupdate` 이벤트 리스너를 사용하여 슬라이더와 시간을 업데이트하였다.
- `duration` 값이 `NaN` 또는 `0` 이하일 경우를 처리하였다.
- `useEffect`를 사용하여 컴포넌트가 언마운트 될 때 이벤트 리스너를 제거하였다.
- <b>성공 이유 ✅</b>:
  - `timeupdate` 이벤트는 오디오의 재생 중에만 슬라이더와 시간을 업데이트하므로, 불필요한 반복 작업을 피할 수 있었다.
  - `null` 체크와 `NaN` 처리로 오류를 방지하였다.
  - `useEffect`의 정리 함수로 이벤트 리스너를 제거하여 메모리 누수를 방지하였다.

<br>

## <a name="quick-start">Usage</a>

**깃 클론**

```bash
git clone https://github.com/moeyg/weather-app
cd weather-app
```

**필요한 패키지 설치**

```bash
npm install
npm create vite@latest
```

**실행**

```bash
npm run dev
```

**브라우저 실행**

```bash
Local: http://localhost:5173/
```

<br>

## <a name="copyright">Music Copyright</a>

    1.
    Song: Cartoon, Jéja - On & On (feat. Daniel Levi) [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/onandon
    Watch: http://youtu.be/K4DyBUG242c

    2.
    Song: Janji & Johnning - Nostalgia [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/JJ_Nostalgia
    Watch: http://ncs.lnk.to/JJ_NostalgiaAT/youtube

    3.
    Song: Avi Snow, Sync - Alright [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/Alright
    Watch: http://ncs.lnk.to/AlrightAT/youtube

    4.
    Song: Zushi & Vanko - Underrated (Feat. Sunny Lukas) [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/Underrated
    Watch: http://ncs.lnk.to/UnderratedAT/youtube

    5.
    Song: Andrah - pretty afternoon [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/prettyafternoon
    Watch: http://ncs.lnk.to/prettyafternoonAT/youtube

    6.
    Song: MANIA & Tom Wigley - Calling Out Your Name (ft. Lottie Jones) [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/COYN
    Watch: http://ncs.lnk.to/COYNAT/youtube

    7.
    Song: Tollef - Time With You (feat. RVLE) [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/TWU
    Watch: AT/youtube

    8.
    Song: AC13 - Waves Ft. Comma Dee [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/waves
    Watch: http://ncs.lnk.to/wavesAT/youtube

    9.
    Song: Reece Taylor - Sugar Plumbin' [NCS Release]
    Music provided by NoCopyrightSounds Free Download/Stream: http://ncs.io/sugarplumbin
    Watch: http://ncs.lnk.to/sugarplumbinAT/youtube

    10.
    Song: if found x Luma - twenty five [NCS Release]
    Music provided by NoCopyrightSounds Free Download
    Stream: http://ncs.io/TwentyFive Watch: http://youtu.be/

    11.
    Song: 21RoR - Talk About [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/TalkAbout
    Watch: http://ncs.lnk.to/TalkAboutAT/youtube

    12.
    Song: OSKI - What's The Problem? [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/WTP
    Watch: http://ncs.lnk.to/WTPAT/youtube

    13.
    Song: Daniel Levi - Getaway [NCS Release]
    Music provided by NoCopyrightSounds
    Free Download/Stream: http://ncs.io/Getaway
    Watch: http://ncs.io/GetawayAT/youtube
