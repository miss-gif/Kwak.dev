interface TimelineEventProps {
  date: string;
  description: string;
}

const TimelineEvent = ({ date, description }: TimelineEventProps) => (
  <div className="flex w-full items-center space-x-4">
    <div className="h-4 w-4 rounded-full bg-blue-500"></div>
    <div className="pl-6">
      <span className="text-lg font-semibold text-blue-500">{date}</span>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

// 전체 타임라인 컴포넌트
const Timeline = () => {
  // 연혁 데이터를 배열로 관리
  const events = [
    { date: "2021년 1월", description: "회사 설립 및 초기 팀 구성 완료" },
    { date: "2021년 6월", description: "첫 번째 제품 출시 및 시장 반응 확보" },
    { date: "2022년 3월", description: "시리즈 A 투자 유치 및 개발팀 확장" },
    { date: "2023년 8월", description: "두 번째 제품 출시 및 해외 시장 진출" },
    { date: "2024년 5월", description: "최신 기술 적용한 혁신 제품 출시 예정" },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="space-y-8 border-l-4 border-blue-500">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
