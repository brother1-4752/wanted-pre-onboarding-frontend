import AuthContainer from "./AuthContainer";

const SignIn = () => {
  return <AuthContainer isSignin={true} {...SIGNIN_DATA} />;
};

export default SignIn;

const SIGNIN_DATA = {
  change: "Signup",
  title: "로그인",
  text: "회원가입 하러 가기",
};
