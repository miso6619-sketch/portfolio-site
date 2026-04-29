import santa01 from "../assets/video/HomePage.mp4";
import santa02 from "../assets/video/SearchPage.mp4";
import santa03 from "../assets/video/CommunityPage.mp4";
import santa04 from "../assets/video/PlacePage.mp4";
import santa05 from "../assets/video/SafePage.mp4";
import santa06 from "../assets/video/move-santa.gif";
import santa07 from "../assets/video/FaqPage.mp4";

import y2kGame from "../assets/video/y2k-game.mp4";
import deepfake from "../assets/video/deepfake.mp4";

import class01 from "../assets/video/class-01.mp4";
import class02 from "../assets/video/class-02.mp4";
import class03 from "../assets/video/class-03.mp4";

export const videoSectionLinks = {
  web: {
    siteUrl: "https://santa-app-jw6k.vercel.app/",
    notionUrl: "https://www.notion.so/34751f8c416680ba87c7c07b4a3eef47?source=copy_link",
  },
  concept: {
    notionUrl: "https://www.notion.so/Y2K-35051f8c41668040bd68d3fc76cfc76d?source=copy_link",
  },
  campaign: {
    notionUrl: "https://www.notion.so/REAL-or-FAKE-35051f8c4166809fabf2fc5d9f726efa?source=copy_link",
    siteUrl: "https://miso6619-sketch.github.io/privacy-campaign/",
  },
};

export const videoSections = {
  web: [
    {
      id: 1,
      title: "01",
      desc: "메인 페이지 헤더용 영상",
      src: santa01,
      type: "video",
    },
    {
      id: 2,
      title: "02",
      desc: "산찾기 페이지 헤더용 영상",
      src: santa02,
      type: "video",
    },
    {
      id: 3,
      title: "03",
      desc: "등산 커뮤니티 페이지 헤더용 영상",
      src: santa03,
      type: "video",
    },
    {
      id: 4,
      title: "04",
      desc: "산 주위 핫스팟, 포토존 소개 페이지 헤더용 영상",
      src: santa04,
      type: "video",
    },
    {
      id: 5,
      title: "05",
      desc: "안전수칙 헤더용 영상",
      src: santa05,
      type: "video",
    },
    {
      id: 6,
      title: "06",
      desc: "안전수칙 페이지용 투명 배경 캐릭터 애니메이션 gif",
      src: santa06,
      type: "image",
    },
    {
      id: 7,
      title: "07",
      desc: "FAQ 페이지 헤더용 영상",
      src: santa07,
      type: "video",
    },
  ],

  concept: [
    {
      id: 1,
      title: "Y2K 게임 영상",
      desc: "아이돌 '키키' 무드 기반의 옷갈아입히기 게임 영상",
      src: y2kGame,
      type: "video",
    },
  ],

  campaign: [
    {
      id: 1,
      title: "개인정보보호 캠페인 영상",
      desc: "딥페이크와 개인정보보호를 주제로 한 영상",
      src: deepfake,
      type: "video",
    },
  ],

  classwork: [
    {
      id: 1,
      title: "카페 무드 영상 편집",
      desc: "Premiere Pro를 활용해 제작한 카페 무드 영상으로, 커피머신 소리와 커피가 떨어지는 효과음을 더해 카페 분위기에 몰입할 수 있도록 구성한 클래스워크 작업입니다.",
      src: class01,
      type: "video",
      notionUrl: "https://www.notion.so/35051f8c4166805991e6e650370b3a33?source=copy_link",
    },
    {
      id: 2,
      title: "리스테린 광고 콘셉트 영상 편집",
      desc: "Premiere Pro를 활용해 제작한 리스테린 광고 콘셉트 텍스트 모션 영상으로, Position, Opacity, Scale 값을 조절해 텍스트만으로 광고 분위기를 표현한 클래스워크 작업입니다.",
      src: class02,
      type: "video",
      notionUrl: "https://www.notion.so/35051f8c41668015b7c2c73edc735813?source=copy_link",
    },
    {
      id: 3,
      title: "트림 패스 효과 활용 영상",
      desc: "After Effects를 활용해 제작한 초반 모션 그래픽 연습 영상으로, Trim Paths 효과와 Position, Scale, Opacity 값을 조절하며 선이 그려지는 듯한 움직임을 표현한 클래스워크 작업입니다.",
      src: class03,
      type: "video",
      notionUrl: "https://www.notion.so/35051f8c416680f4b5e7ef7bf3552918?source=copy_link",
    },
  ],
};