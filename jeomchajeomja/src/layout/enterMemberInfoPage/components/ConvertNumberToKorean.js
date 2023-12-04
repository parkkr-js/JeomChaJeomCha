function ConvertNumberToKorean(numberStr) {
  const koreanNumbers = {
    0: "영",
    1: "일",
    2: "이",
    3: "삼",
    4: "사",
    5: "오",
    6: "육",
    7: "칠",
    8: "팔",
    9: "구",
  };

  return numberStr
    .split("")
    .map((num) => koreanNumbers[num] || num)
    .join("");
}
export default ConvertNumberToKorean;
