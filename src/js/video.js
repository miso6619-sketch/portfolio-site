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
    notionUrl: "https://www.notion.so/콘셉트섹션노션링크",
  },
  campaign: {
    notionUrl: "https://www.notion.so/캠페인섹션노션링크",
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
      desc: "키키 무드 기반의 옷갈아입히기 게임 영상",
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
      title: "클래스워크 01",
      desc: "수업 중 제작한 영상 작업",
      src: class01,
      type: "video",
      notionUrl: "https://www.notion.so/클래스워크01",
    },
    {
      id: 2,
      title: "리스테린 광고 느낌 영상",
      desc: "광고 무드와 컷 편집 중심으로 제작한 수업 작업",
      src: class02,
      type: "video",
      notionUrl: "https://www.notion.so/클래스워크02",
    },
    {
      id: 3,
      title: "트림 패스 효과 활용 영상",
      desc: "Trim Paths 효과를 활용해 제작한 수업 작업",
      src: class03,
      type: "video",
      notionUrl: "https://www.notion.so/클래스워크03",
    },
  ],
};