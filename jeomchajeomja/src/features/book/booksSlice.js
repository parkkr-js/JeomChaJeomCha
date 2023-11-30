import { createSlice } from "@reduxjs/toolkit";

const Books = [
  {
    id: 0,
    title: "(중등) 쎈 중등 수학 1-1",
    price: 20000,
    publisher: "행복 나눔 재단",
    publicationYear: "2022년",
    author: "이홍섭",
    translationYear: "2023년",
    publishDate: "2022년 06월 15일",
    referenceGrade: "고등학교 1학년",
    pages: "2,998쪽 (약 4권)",
    referenceSemester: "학기 공통",
    bigContent: [
      "1. 시험에 나오는 모든 문제를 이 한 권에",
      "2. 모든 문제를 A, B, C 3단계 난이도로 구성",
    ],
    smallContent: [
      "전국 중학교의 학교 시험 기출 문제를 수집하고 분석하여 유형별로 총정리했기 때문에 쎈 수학 한 권만으로도 중학교 수학 학습을 완벽하게 완성할 수 있습니다.",
      "쉬운 문제에서부터 어려운 문제까지 순서대로 도전하는 것이 합리적인 수학 학습법입니다. 쎈 수학은 모든 문제를 3단계로 나누어 수준별로 구성하고, 유형 뽀개기에서는 이를 다시 하, 중, 상의 난이도로 세분하여 체계적으로 수학 실력을 키울 수 있도록 만들었습니다.",
    ],
    bigIndex: ["I. 소인수분해", "II. 정수와 유리수", "III. 방정식"],
    smallIndex: [
      "1. 소인수분해\n2. 최대공약수와 최소공배수",
      "3. 정수와 유리수\n4. 유리수의 계산",
      "5. 문자와 식\n6. 일차방정식의 풀이\n7. 일차방정식의 활용",
    ],
  },
  {
    id: 1,
    title: "쎈 고등 수학(상)",
    price: 18000,
    publisher: "희망 나눔 재단",
    publicationYear: "2023년",
    author: "박지성",
    translationYear: "2023년",
    publishDate: "2023년 12월 15일",
    referenceGrade: "고등학교 3학년",
    pages: "1,298쪽",
    referenceSemester: "학기 공통",
    bigContent: [
      "1. 시험에 나오는 모든 문제를 이 한 권에",
      "2. 모든 문제를 A, B, C 3단계 난이도로 구성",
    ],
    smallContent: [
      "전국 고등학교 내신 기출 문제와 평가원ㆍ수능 기출 문제는 물론 수많은 기본서, 내신서, 수능서까지 분석하여 모든 수학 문제를 수집, 분류하여 강력한 유형 그물을 만들었기 때문에 쎈 한 권만으로도 충분한 문제 연습이 가능합니다.",
      "쉬운 문제에서부터 어려운 문제까지 순서대로 도전하는 것이 합리적인 수학 학습법입니다. 쎈 수학은 모든 문제를 3단계로 나누어 수준별로 구성하고, 유형 뽀개기에서는 이를 다시 하, 중, 상의 난이도로 세분하여 체계적으로 수학 실력을 키울 수 있도록 만들었습니다.",
    ],
    bigIndex: ["I. 다항식", "II. 방정식", "III. 부등식"],
    smallIndex: [
      "1. 다항식의 연산\n2. 나머지정리와 인수분해",
      "3. 복소수\n4. 이차방정식\n5. 이차방정식과 이차함수\n6. 여러 가지 방정식",
      "7. 일차부등식\n8. 이차부등식",
    ],
  },
  {
    id: 2,
    title: "수학의 정석(상)",
    price: 18000,
    publisher: "사랑 나눔 재단",
    publicationYear: "2022년",
    author: "김진서",
    translationYear: "2023년",
    publishDate: "2022년 02월 09일",
    referenceGrade: "고등학교 1학년",
    pages: "513쪽",
    referenceSemester: "1학기",
    bigContent: [
      "1. 개념 설명을 다른 교재들과 달리 줄글로 자세하게 풀어쓴 것이 특징",
      "2. 해법 망라형 참고서의 표준",
    ],
    smallContent: [
      "혼자서 공부하기에도 충분히 좋습니다. 수능과 내신, 논술 등 시험 종류를 가리지 않고 수학 실력 자체를 늘리기 좋습니다. 수학의 정석은 원래 수능을 대비하기 위해 만들어진 문제집이 아니라 수학의 원리를 익히기 위해 만들어진 '기본서'이기 때문에 이런 장점이 있는 것입니다. 실제로 수학의 정석은 고교 수학에서 다루는 내용을 얼마나 잘 이해시킬 수 있느냐에 초점을 맞춰서 서술하고 있습니다.",
      "시험에 출제 가능한 문제 유형 대다수를 수록하고 유형별 해법(정석)을 알려주므로, 기본 정석만 마스터해도 웬만한 난이도의 수학 문제들은 어렵지 않게 풀 수 있습니다.",
    ],
    bigIndex: ["I. 다항식", "II. 방정식", "III. 부등식"],
    smallIndex: [
      "1. 다항식의 연산\n2. 인수분해\n3. 항등식과 미정계수법\n4. 나머지정리",
      "5. 실수\n6. 복소수\n7. 일차ㆍ이차방정식\n8. 이차방정식의 판별식\n9. 이차방정식의 근과 계수의 관계\n10.이차방정식과 이차함수\n11.최대와 최소\n12.삼차방정식과 사차방정식\n13.연립방정식",
      "14. 일차부등식과 연립일차부등식\n15. 이차부등식과 연립이차부등식",
    ],
  },
  {
    id: 3,
    title: "수학의 정석(하)",
    price: 18000,
    publisher: "사랑 나눔 재단",
    publicationYear: "2022년",
    author: "백예은",
    translationYear: "2023년",
    publishDate: "2022년 09월 15일",
    referenceGrade: "고등학교 1학년",
    pages: "612쪽",
    referenceSemester: "2학기",
    bigContent: [
      "1. 개념 설명을 다른 교재들과 달리 줄글로 자세하게 풀어쓴 것이 특징",
      "2. 해법 망라형 참고서의 표준",
    ],
    smallContent: [
      "혼자서 공부하기에도 충분히 좋습니다. 수능과 내신, 논술 등 시험 종류를 가리지 않고 수학 실력 자체를 늘리기 좋습니다. 수학의 정석은 원래 수능을 대비하기 위해 만들어진 문제집이 아니라 수학의 원리를 익히기 위해 만들어진 '기본서'이기 때문에 이런 장점이 있는 것입니다. 실제로 수학의 정석은 고교 수학에서 다루는 내용을 얼마나 잘 이해시킬 수 있느냐에 초점을 맞춰서 서술하고 있습니다.",
      "시험에 출제 가능한 문제 유형 대다수를 수록하고 유형별 해법(정석)을 알려주므로, 기본 정석만 마스터해도 웬만한 난이도의 수학 문제들은 어렵지 않게 풀 수 있습니다.",
    ],
    bigIndex: ["I. 평면좌표계", "II. 집합", "III. 함수와 그래프"],
    smallIndex: [
      "16. 평면좌표\n17. 직선의 방정식\n18. 원의 방정식\n19. 도형의 이동",
      "20. 집합\n21. 집합의 연산법칙\n22. 명제와 조건\n23. 명제의 증명",
      "24. 함수\n25. 합성함수와 역함수\n26. 다항함수의 그래프\n27. 유리함수의 그래프\n28. 무리함수의 그래프",
    ],
  },
];

const initialState = {
  book: Books,
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
    removeBook: (state, action) => {
      state.book = state.book.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.book.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.book[index] = { ...state.book[index], ...action.payload.data };
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = book.actions;
export default book.reducer;
