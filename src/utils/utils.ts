/**
 * 주어진 문자열의 첫 글자를 대문자로 변환합니다.
 *
 * @param string - 변환할 문자열
 * @returns 첫 글자가 대문자인 문자열
 */
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
