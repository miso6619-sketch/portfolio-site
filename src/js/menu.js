export const navItems = [
  {
    title: "홈",
    path: "/",
    children: [],
  },
  {
    title: "영상편집",
    path: "/video",
    children: [
      { title: "웹 영상", sectionId: "web-video" },
      { title: "콘셉트 영상", sectionId: "concept-video" },
      { title: "캠페인 영상", sectionId: "campaign-video" },
      { title: "클래스워크", sectionId: "class-video" },
    ],
  },
  {
    title: "웹페이지",
    path: "/web",
    children: [
      { title: "프로젝트 01", sectionId: "web-project-01" },
      { title: "프로젝트 02", sectionId: "web-project-02" },
      { title: "프로젝트 03", sectionId: "web-project-03" },
      { title: "프로젝트 04", sectionId: "web-project-04" },
    ],
  },
  {
    title: "디자인",
    path: "/design",
    children: [
      { title: "작업 01", sectionId: "design-01" },
      { title: "작업 02", sectionId: "design-02" },
      { title: "작업 03", sectionId: "design-03" },
      { title: "작업 04", sectionId: "design-04" },
    ],
  },
];