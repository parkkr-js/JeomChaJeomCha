import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Nanum Myeongjo';
  src: url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
       font-display: swap;
}

@font-face {
  font-family: 'Nanum Gothic';
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot);
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff2) format('woff2'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff) format('woff'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.ttf) format('truetype');
       font-display: swap;
}

@font-face {
  font-family: 'Nanum Gothic';
  /* font-style: normal;
  font-weight: 800; */
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.eot);
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.eot?#iefix) format('embedded-opentype'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.woff2) format('woff2'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.woff) format('woff'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-ExtraBold.ttf) format('truetype');
       font-display: swap;
}
@font-face {
  font-family: 'Nanum Gothic';
  /* font-style: normal;
  font-weight: 800; */
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot);
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff2) format('woff2'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
       url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
       font-display: swap;
}
body {
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
}
`;

export const theme = {
  fontSizes: {
    header0: "65px",
    header1: "50px",
    subtitle1: "30px",
    body1: "20px",
    body2: "14px",
    button1: "24px",
  },
  fontWeights: {
    header0: "800",
    header1: "700",
    subtitle1: "700",
    subtitle1_reg: "400",
    body1: "700",
    body1_reg: "400",
    body2: "700",
    body2_reg: "400",
    button1: "700",
  },
  letterSpacing: "0px",
  colors: {
    black: "#000000",
    white: "#FFFFFF",
  },
};
