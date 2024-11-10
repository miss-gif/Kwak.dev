export const formatDate = (dateString: string) => {
  const today = new Date();
  const createdAt = new Date(dateString);

  const isSameDay = today.toDateString() === createdAt.toDateString();

  // 오늘 날짜와 같으면 시간만 표시, 다르면 날짜만 표시
  return isSameDay
    ? createdAt.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : createdAt.toLocaleDateString("ko-KR");
};
