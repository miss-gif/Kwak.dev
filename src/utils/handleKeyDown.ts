// ESC 키를 처리하는 이벤트 핸들러
export const handleEscKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  resetValue: (key: string) => void,
  key: string,
) => {
  if (e.key === "Escape") {
    resetValue(key);
  }
};
