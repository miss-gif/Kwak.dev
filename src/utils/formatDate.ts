// 날짜 포맷 함수
export const formatDate = (dateInput: any) => {
  let createdAt: Date;

  // dateInput이 Timestamp일 경우 처리 (Firebase Timestamp)
  if (dateInput?.toDate) {
    createdAt = dateInput.toDate();
  } else {
    createdAt = new Date(dateInput);
  }

  const today = new Date();
  const isSameDay = today.toDateString() === createdAt.toDateString();

  // 오늘 날짜와 같으면 시간만 표시, 다르면 날짜만 표시
  return isSameDay
    ? createdAt.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : createdAt.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
};
