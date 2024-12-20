import { Component } from "./Component";

// 총 결제 금액, 평균 결제 금액, 결제 수단, 결제 금액 분포
// 총 결제 횟수, 평균 결제 횟수,
// 총 방문자 수, 평균 방문자 수,
// 총 가입자 수, 평균 가입자 수,

// 시간의 흐름에 따른 변화를 보여주는 지표
// 총 결제 금액, 평균 결제 금액, 총 결제 횟수, 평균 결제 횟수:

// 선 그래프: 시간에 따른 변화 추세를 가장 명확하게 보여줍니다. 상승, 하락, 계절성 등을 한눈에 파악하기 용이합니다.
// 면적 그래프: 선 그래프와 유사하지만, 면으로 채워져 있어 누적된 값을 시각적으로 표현하기 좋습니다.
// 예시: 월별 매출 추이, 일별 결제 건수 변화
// 총 방문자 수, 평균 방문자 수, 총 가입자 수, 평균 가입자 수:

// 선 그래프: 위와 동일한 이유로 선 그래프가 적합합니다. 특히, 마케팅 캠페인 효과 분석이나 서비스 성장 추이를 파악하는 데 유용합니다.
// 예시: 월별 방문자 수 변화, 일별 가입자 증가 추이
// 데이터 분포를 보여주는 지표
// 결제 금액 분포:
// 히스토그램: 데이터가 어떤 범위에 얼마나 많이 분포되어 있는지 빈도를 막대기로 표현합니다. 결제 금액대별 고객 수를 파악하는 데 유용합니다.
// 박스 플롯: 최솟값, 1사분위수, 중앙값, 3사분위수, 최댓값을 한눈에 보여줍니다. 이상치를 확인하고 데이터 분포의 왜곡 정도를 파악하는 데 도움이 됩니다.
// 예시: 결제 금액대별 고객 수 분포, 결제 금액의 분산 정도
// 비율이나 구성비를 보여주는 지표
// 결제 수단:
// 파이 차트: 전체에 대한 각 부분의 비율을 원형으로 나타내어 시각적으로 직관적입니다. 각 결제 수단별 비중을 한눈에 파악하기 좋습니다.
// 막대 그래프: 파이 차트와 비슷한 정보를 제공하지만, 막대의 길이로 비교하기 쉬워 여러 범주 간 비교를 할 때 유용합니다.
// 예시: 결제 수단별 비중, 상품별 판매 비율

const UserStats = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default UserStats;
