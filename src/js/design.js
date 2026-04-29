const designImages = import.meta.glob("../assets/images/design/*", {
    eager: true,
    query: "?url",
    import: "default",
});

const getDesignImage = (fileName) => {
    return designImages[`../assets/images/design/${fileName}`];
};

export const designProjects = [
    {
        id: "design-01",
        type: "photoshop",
        title: "작업 01",
        desc: "GPT 이미지 생성과 Photoshop 편집을 활용해 따뜻한 베이지 톤의 브랜드 무드를 담은 라이프스타일 제품 상세 페이지 형식으로 완성한 디자인 작업입니다.",
        notionUrl: "https://www.notion.so/34f51f8c416680aabcd0ec5a081bddf3?source=copy_link",
        image: getDesignImage("design-new-01.png"),
        imageAlt: "작업 01 대표 이미지",
    },
    {
        id: "design-02",
        type: "photoshop",
        title: "작업 02",
        desc: "Photoshop을 활용해 줄무늬 배경과 그림자 효과를 더하고, 따뜻한 베이지 톤으로 완성한 인테리어 상담 이벤트 배너 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c416680b2b8fcc84059b5a026?source=copy_link",
        image: getDesignImage("design-new-02.png"),
        imageAlt: "작업 02 대표 이미지",
    },
    {
        id: "design-03",
        type: "photoshop",
        title: "작업 03",
        desc: "Photoshop의 Object Selection Tool, 클리핑 마스크, 브러시와 블러 효과를 활용한 그라데이션 음영으로 완성한 그릭요거트 프로모션 포스터 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c41668004a3e7d108453480ec?source=copy_link",
        image: getDesignImage("design-new-03.png"),
        imageAlt: "작업 03 대표 이미지",
    },
    {
        id: "design-04",
        type: "photoshop",
        title: "작업 04",
        desc: "Photoshop의 Object Selection Tool로 말차 관련 이미지를 배치하고, 격자무늬 패턴과 하단 삼각형 포인트를 더한 말차 제품 소개 카드 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c4166808aa34ac47c05de6dfb?source=copy_link",
        image: getDesignImage("design-01.png"),
        imageAlt: "작업 04 대표 이미지",
    },
    {
        id: "design-05",
        type: "photoshop",
        title: "작업 05",
        desc: "Photoshop을 활용해 음식 이미지를 폴라로이드 카드 형식으로 배치하고, 베이지 배경과 포인트 컬러로 완성한 모던 다이닝 리뷰 이벤트 배너 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c416680968d25c1dc51c4c7d8?source=copy_link",
        image: getDesignImage("design-02.png"),
        imageAlt: "작업 05 대표 이미지",
    },
    {
        id: "design-06",
        type: "photoshop",
        title: "작업 06",
        desc: "Photoshop을 활용해 흑백 이미지와 강한 대비를 중심으로 구성하고, 반투명 할인 정보 박스와 제품 카드로 완성한 아이웨어 이벤트 배너 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c41668047bfc0fac675645d03?source=copy_link",
        image: getDesignImage("design-03.png"),
        imageAlt: "작업 06 대표 이미지",
    },
    {
        id: "design-07",
        type: "photoshop",
        title: "작업 07",
        desc: "Photoshop을 활용해 밤하늘 배경과 중앙 프레임 레이아웃으로 구성한 별빛 관측 행사 포스터 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c4166805988cbc418c153604d?source=copy_link",
        image: getDesignImage("design-04.png"),
        imageAlt: "작업 07 대표 이미지",
    },
    {
        id: "design-08",
        type: "photoshop",
        title: "작업 08",
        desc: "Photoshop의 Field Blur와 Object Selection Tool을 활용해 부드러운 손 이미지와 수분감 있는 오브젝트를 합성하고, 얇은 타이포로 가벼운 스킨의 이미지를 표현한 남성 스킨 브랜드 포스터 디자인입니다.",
        notionUrl: "https://www.notion.so/35051f8c416680278aeceff829d5c321?source=copy_link",
        image: getDesignImage("design-05.png"),
        imageAlt: "작업 08 대표 이미지",
    },
    {
        id: "design-09",
        type: "photoshop",
        title: "작업 09",
        desc: "기존 백제예술대학교 사이트를 Photoshop으로 리디자인한 작업으로, PC와 모바일 화면을 함께 구성하고 골드와 다크 톤의 컬러 스타일을 활용해 예술대학교의 차분하고 고급스러운 분위기를 표현했습니다.",
        notionUrl: "https://www.notion.so/35051f8c4166802a965cf16fa7026edc?source=copy_link",
        compareImages: {
            before: [
                {
                    label: "원사이트 메인 페이지",
                    src: getDesignImage("design-06-before-01.png"),
                    alt: "작업 09 리디자인 전 웹 디자인",
                },
                {
                    label: "원사이트 학과소개 페이지",
                    src: getDesignImage("design-06-before-02.png"),
                    alt: "작업 09 리디자인 전 모바일 디자인",
                },
            ],
            after: [
                {
                    label: "리디자인 후 메인 페이지(웹)",
                    src: getDesignImage("design-06-after-01.png"),
                    alt: "작업 09 리디자인 후 웹 디자인",
                },
                {
                    label: "리디자인 후 학과소개 페이지(웹)",
                    src: getDesignImage("design-06-after-02.png"),
                    alt: "작업 09 리디자인 후 모바일 디자인",
                },
                {
                    label: "리디자인 후 메인 페이지(모바일)",
                    src: getDesignImage("design-06-after-03.png"),
                    alt: "작업 09 리디자인 후 모바일 디자인 02",
                },
                {
                    label: "리디자인 후 학과소개 페이지(모바일)",
                    src: getDesignImage("design-06-after-04.png"),
                    alt: "작업 09 리디자인 후 모바일 디자인 03",
                },
            ],
        },
    },
    {
        id: "design-10",
        type: "photoshop",
        title: "작업 10",
        desc: "이솝 제품 이미지를 활용해 제작한 퍼퓸 사이트 디자인으로, 브라운 톤의 차분한 분위기와 여백 중심의 레이아웃을 통해 감각적인 브랜드 무드를 표현한 PC·모바일 작업입니다.",
        notionUrl: "https://www.notion.so/Perfume-Library-34e51f8c4166801f84cdf3c14c6c3d75?source=copy_link",
        siteUrl: "https://miso6619-sketch.github.io/Perfume-Library/",
        images: [
            {
                label: "웹 디자인",
                src: getDesignImage("design-07-01.png"),
                alt: "작업 10 웹 디자인",
            },
            {
                label: "모바일 디자인",
                src: getDesignImage("design-07-02.png"),
                alt: "작업 10 모바일 디자인",
            },
        ],
    },
    {
        id: "design-11",
        type: "figma",
        title: "작업 11",
        desc: "Figma를 활용해 제작한 모델 매칭 사이트 디자인으로, 흑백 이미지와 미니멀한 레이아웃을 중심으로 모델 아카이브와 브랜드 매칭 서비스의 분위기를 표현한 모바일 디자인 작업입니다.",
        notionUrl: "https://www.notion.so/SEEN-ARCHIVE-35051f8c4166802283e1f13e8dd9bf6b?source=copy_link",
        protoUrl:
            "https://www.figma.com/proto/u5g1AtC5perOeMKQU65hkJ/%EC%94%AC%EC%95%84%EC%B9%B4%EC%9D%B4%EB%B8%8C?node-id=3-97&p=f&t=dSQv5t2ANpi1lRNx-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A96&starting-point-node-id=3%3A97",
        uiImage: {
            src: getDesignImage("design-08-ui.png"),
            alt: "작업 11 UI 스타일 가이드",
        },
        images: [
            {
                label: "Intro",
                src: getDesignImage("design-08-01.png"),
                alt: "작업 11 홈 화면",
            },
            {
                label: "Main",
                src: getDesignImage("design-08-02.png"),
                alt: "작업 11 상세 화면",
            },
        ],
    },
    {
        id: "design-12",
        type: "figma",
        title: "작업 12",
        desc: "Figma를 활용해 제작한 댄스 클래스 모바일 앱 디자인으로, 장르별 콘텐츠 탐색과 스튜디오 상세 정보, 예약 흐름을 중심으로 구성하고 프로토타입 화면 전환까지 제작한 초기 앱 UI 작업입니다.",
        notionUrl: "https://www.notion.so/UPVIBE-35051f8c41668049a27fd2b88ee58716?source=copy_link",
        protoUrl:
            "https://www.figma.com/proto/ieAUjllDRg3EJ5LiPfEf64/%EC%86%8C%EC%85%9C%EC%BB%A4%EB%A8%B8%EC%8A%A4?node-id=78-401&t=Dgb965qot4smoR9g-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=32%3A2",
        uiImage: {
            src: getDesignImage("design-09-ui.png"),
            alt: "작업 12 UI 스타일 가이드",
        },
        images: [
            {
                label: "Main",
                src: getDesignImage("design-09-01.png"),
                alt: "작업 12 인트로 화면",
            },
            {
                label: "팔로우",
                src: getDesignImage("design-09-02.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "스튜디오 상세",
                src: getDesignImage("design-09-03.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "예약하기",
                src: getDesignImage("design-09-04.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "스튜디오 상세",
                src: getDesignImage("design-09-05.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "예약하기",
                src: getDesignImage("design-09-06.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "스튜디오 상세",
                src: getDesignImage("design-09-07.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "예약하기",
                src: getDesignImage("design-09-08.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "스튜디오 상세",
                src: getDesignImage("design-09-09.png"),
                alt: "작업 12 메인 화면",
            },
            {
                label: "예약하기",
                src: getDesignImage("design-09-10.png"),
                alt: "작업 12 메인 화면",
            },
        ],
    },
    {
        id: "design-13",
        type: "figma",
        title: "작업 13",
        desc: "팀 프로젝트로 제작한 외국어 학습 앱 디자인으로, 화면 구성 정리와 사용자 흐름 개선, 프로토타입 연결을 중심으로 작업했습니다. 캐릭터와 게임형 요소를 활용해 친근한 학습 경험을 제공하도록 구성했습니다.",
        notionUrl: "https://www.notion.so/MOVO-35051f8c416680c28cd1c976dc0c746d?source=copy_link",
        protoUrl:
            "https://www.figma.com/proto/kQMkAPNAlCIx1wcAsVHlsG/%EC%95%84%EC%9F%88~-?node-id=30-3&p=f&t=fj5rflxRSciFXzZw-1&scaling=scale-down&content-scaling=fixed&page-id=11%3A35&starting-point-node-id=30%3A3&show-proto-sidebar=1",
        uiImage: {
            src: getDesignImage("design-10-ui.png"),
            alt: "작업 13 UI 스타일 가이드",
        },
        images: [
            {
                label: "Intro",
                src: getDesignImage("design-10-01.png"),
                alt: "작업 13 대표 화면",
            },
            {
                label: "로그인",
                src: getDesignImage("design-10-02.png"),
                alt: "작업 13 UI 화면",
            },
            {
                label: "언어 선택1",
                src: getDesignImage("design-10-03.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "언어 선택2",
                src: getDesignImage("design-10-04.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "언어 선택3",
                src: getDesignImage("design-10-05.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "언어 선택4",
                src: getDesignImage("design-10-06.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "Main",
                src: getDesignImage("design-10-07.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "빈칸 채우기1",
                src: getDesignImage("design-10-08.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "빈칸 채우기2",
                src: getDesignImage("design-10-09.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "빈칸 채우기3",
                src: getDesignImage("design-10-10.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "게임 학습1",
                src: getDesignImage("design-10-11.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "게임 학습2",
                src: getDesignImage("design-10-12.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "게임 학습3",
                src: getDesignImage("design-10-13.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "상황별 표현1",
                src: getDesignImage("design-10-14.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "상황별 표현2",
                src: getDesignImage("design-10-15.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "상황별 표현3",
                src: getDesignImage("design-10-16.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "상황별 표현4",
                src: getDesignImage("design-10-17.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "성취도 평가1",
                src: getDesignImage("design-10-18.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "성취도 평가2",
                src: getDesignImage("design-10-19.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "성취도 평가3",
                src: getDesignImage("design-10-20.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "성취도 평가4",
                src: getDesignImage("design-10-21.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "프로필 생성1",
                src: getDesignImage("design-10-22.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "프로필 생성2",
                src: getDesignImage("design-10-23.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "프로필 생성3",
                src: getDesignImage("design-10-24.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "프로필 생성4",
                src: getDesignImage("design-10-25.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "프로필 생성5",
                src: getDesignImage("design-10-26.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "프로필 생성6",
                src: getDesignImage("design-10-27.png"),
                alt: "작업 13 플로우 화면",
            },
            {
                label: "마이 페이지",
                src: getDesignImage("design-10-28.png"),
                alt: "작업 13 플로우 화면",
            },
        ],
    },
    {
        id: "design-14",
        type: "figma",
        viewType: "modal",
        title: "작업 14",
        desc: "Figma를 활용해 제작한 ZUMBAHOLICS 명함 디자인으로, 컬러 스플래시 그래픽과 1회 무료 체험권 요소를 더해 활기찬 브랜드 이미지와 프로모션 기능을 함께 표현했습니다.",
        notionUrl: "https://www.notion.so/ZUMBAHOLICS-35051f8c4166800da35cf4939fc39408?source=copy_link",
        protoUrl:
            "https://www.figma.com/proto/mrQuGaFS995cHFj5MljSKJ/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=1-2&t=xizkXo8PubHZFrId-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        images: [
            {
                label: "할인 명함 디자인 1 앞면",
                src: getDesignImage("design-11-01.png"),
                alt: "작업 14 명함 디자인 1 앞면",
            },
            {
                label: "할인 명함 디자인 1 뒷면",
                src: getDesignImage("design-11-02.png"),
                alt: "작업 14 명함 디자인 1 뒷면",
            },
            {
                label: "할인 명함 디자인 2",
                src: getDesignImage("design-11-03.png"),
                alt: "작업 14 명함 디자인 2",
            },
        ],
    },
    {
        id: "design-15",
        type: "figma",
        title: "작업 15",
        desc: "팀 프로젝트로 제작한 산타 반응형 웹사이트 디자인으로, Figma와 Photoshop을 활용해 모바일·웹 화면을 구성하고 ChatGPT로 제작한 캐릭터와 배경 이미지를 활용해 동화적인 등산 서비스 분위기를 표현했습니다.",
        notionUrl: "https://www.notion.so/34751f8c416680ba87c7c07b4a3eef47?source=copy_link",
        siteUrl: "https://santa-app-jw6k.vercel.app/",
        webProtoUrl:
            "https://www.figma.com/proto/dUnib1YG0IA9kqPS85tFZQ/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=1-2629&p=f&t=eUBexhhkY8TCjy1p-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=1%3A2629&show-proto-sidebar=1",
        mobileProtoUrl:
            "https://www.figma.com/proto/dUnib1YG0IA9kqPS85tFZQ/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=12-567&p=f&t=negar4Tgi71irPmq-1&scaling=min-zoom&content-scaling=fixed&page-id=11%3A198&starting-point-node-id=12%3A567",
        uiImage: {
            src: getDesignImage("design-12-ui.png"),
            alt: "작업 15 UI 스타일 가이드",
        },
        webImages: [
            {
                label: "Main",
                src: getDesignImage("design-12-web-01.png"),
                alt: "작업 15 웹 메인 화면",
            },
            {
                label: "산찾기",
                src: getDesignImage("design-12-web-02.png"),
                alt: "작업 15 웹 산찾기 화면",
            },
            {
                label: "커뮤니티",
                src: getDesignImage("design-12-web-03.png"),
                alt: "작업 15 웹 커뮤니티 화면",
            },
            {
                label: "핫스팟, 포토존",
                src: getDesignImage("design-12-web-04.png"),
                alt: "작업 15 웹 핫스팟 포토존 화면",
            },
            {
                label: "안전수칙",
                src: getDesignImage("design-12-web-05.png"),
                alt: "작업 15 웹 안전수칙 화면",
            },
            {
                label: "FAQ",
                src: getDesignImage("design-12-web-06.png"),
                alt: "작업 15 웹 FAQ 화면",
            },
            {
                label: "마이페이지",
                src: getDesignImage("design-12-web-07.png"),
                alt: "작업 15 웹 마이페이지 화면",
            },
        ],
        images: [
            {
                label: "메뉴",
                src: getDesignImage("design-12-01.png"),
                alt: "작업 15 모바일 메뉴 화면",
            },
            {
                label: "Main",
                src: getDesignImage("design-12-02.png"),
                alt: "작업 15 모바일 메인 화면",
            },
            {
                label: "산찾기",
                src: getDesignImage("design-12-03.png"),
                alt: "작업 15 모바일 산찾기 화면",
            },
            {
                label: "산정보",
                src: getDesignImage("design-12-04.png"),
                alt: "작업 15 모바일 산정보 화면",
            },
            {
                label: "코스정보",
                src: getDesignImage("design-12-05.png"),
                alt: "작업 15 모바일 코스정보 화면",
            },
            {
                label: "커뮤니티",
                src: getDesignImage("design-12-06.png"),
                alt: "작업 15 모바일 커뮤니티 화면",
            },
            {
                label: "핫스팟, 포토존",
                src: getDesignImage("design-12-07.png"),
                alt: "작업 15 모바일 핫스팟 포토존 화면",
            },
            {
                label: "안전수칙",
                src: getDesignImage("design-12-08.png"),
                alt: "작업 15 모바일 안전수칙 화면",
            },
            {
                label: "FAQ",
                src: getDesignImage("design-12-09.png"),
                alt: "작업 15 모바일 FAQ 화면",
            },
            {
                label: "마이페이지",
                src: getDesignImage("design-12-10.png"),
                alt: "작업 15 모바일 마이페이지 화면",
            },
        ],
    },
];