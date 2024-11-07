/**
 * Theme 인터페이스는 테마를 관리하는 데 사용됩니다.
 */
export interface Theme {
  toggleTheme: () => void;
  theme: string;
}
