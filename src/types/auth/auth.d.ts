// 초기 유저 로그인 시 필요한 정보
export interface InitUserLoginProps {
  initialEmail?: string;
  initialPassword?: string;
}

// 유저 로그인 시 필요한 정보
export interface UserLoginProps {
  email: string;
  password: string;
}
