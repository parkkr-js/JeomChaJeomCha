import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 700;
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot);
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff2) format('woff2'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff) format('woff'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.ttf) format('truetype');
       font-display: swap;
}
@font-face {
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 400;
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot);
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff2) format('woff2'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
       font-display: swap;
}
@font-face {
  font-family: 'Nanum Gothic';
  font-style: normal;
  font-weight: 800;
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.eot);
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.eot?#iefix) format('embedded-opentype'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.woff2) format('woff2'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.woff) format('woff'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.ttf) format('truetype');
       font-display: swap;
}
body {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
}
`;

export const theme = {
  typography: {
    header0: {
      fontFamily: "Nanum Gothic",
      fontWeight: "extraBold",
      fontSize: "65px",
      letterSpacing: "0px",
    },
    header1: {
      fontFamily: "Nanum Gothic",
      fontWeight: "bold",
      fontSize: "48px",
      letterSpacing: "0px",
    },
    subtitle1: {
      fontFamily: "Nanum Gothic",
      fontWeight: "bold",
      fontSize: "25px",
      letterSpacing: "0px",
    },
    subtitle1Regular: {
      fontFamily: "Nanum Gothic",
      fontWeight: "regular",
      fontSize: "25px",
      letterSpacing: "0px",
    },
    body1Bold: {
      fontFamily: "Nanum Gothic",
      fontWeight: "bold",
      fontSize: "20px",
      letterSpacing: "0px",
    },
    body1Regular: {
      fontFamily: "Nanum Gothic",
      fontWeight: "regular",
      fontSize: "20px",
      letterSpacing: "0px",
    },
    body2: {
      fontFamily: "Nanum Gothic",
      fontWeight: "bold",
      fontSize: "14px",
      letterSpacing: "0px",
    },
    button1: {
      fontFamily: "Nanum Gothic",
      fontWeight: "bold",
      fontSize: "24px",
      letterSpacing: "0px",
    },
  },
  colors: {
    backgroundWhite: "#FFFFFF",
    black: "#000000",
  },
};
