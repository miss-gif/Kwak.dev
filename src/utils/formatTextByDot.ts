// 문자열을 "."를 기준으로 분리하고, 각 문장을 trim 처리한 후, 빈 문장을 제거하고 "."와 줄바꿈을 추가해 다시 결합하는 함수

export function formatTextByDot(input: string): string {
  return input
    .split(".") // "."를 기준으로 문자열을 분리
    .map((sentence) => sentence.trim()) // 각 문장을 trim 처리
    .filter((sentence) => sentence !== "") // 빈 문장은 제거
    .join(".\n"); // "."와 줄바꿈을 추가해 다시 결합
}
