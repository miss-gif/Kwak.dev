import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useVisitors } from "@/hooks/useVisitors";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  views: {
    label: "방문자 수",
  },
  desktop: {
    label: "데스크탑",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "모바일",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Component() {
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>("desktop");
  const [cookies, setCookie] = useCookies(["lastVisit"]);
  const { fetchVisitorCounts, totalCount, monthCount } = useVisitors(cookies, setCookie);

  useEffect(() => {
    const handleVisitors = async () => {
      // 방문자 데이터를 가져옴
      await fetchVisitorCounts();
    };
    handleVisitors();
  }, []);

  const total = {
    desktop: totalCount.desktopCount,
    mobile: totalCount.mobileCount,
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>방문자 통계</CardTitle>
          <CardDescription>지난 3개월 동안의 총 방문자 수 표시</CardDescription>
        </div>

        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col items-center justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="w-16 text-center text-xs text-muted-foreground">{chartConfig[chart].label}</span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={monthCount}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("ko", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ko", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
