import AuthContainer from "./AuthContainer";

const SignUp = () => {
  return <AuthContainer {...SIGNUP_DATA} />;
};

export default SignUp;

const SIGNUP_DATA = {
  change: "Signin",
  title: "회원가입",
  text: "이미 계정이 있으세요?",
};
