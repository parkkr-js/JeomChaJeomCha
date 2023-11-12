import { createSlice } from "@reduxjs/toolkit";

const Books = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
