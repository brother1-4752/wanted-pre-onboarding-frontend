import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthContainer = ({ title, text, change, isSignin }) => {
  const navigate = useNavigate();

  const handleSwitchChange = () => {
    navigate(`/${change}`);
  };

  return (
    <App>
      <MainBox>
        <MainHeader>
          <HeaderTitle>원티드 프리온보딩 선발과제</HeaderTitle>
        </MainHeader>
        <BodyBox>
          <BodyTitle>
            <BodyTitleContent>{title}</BodyTitleContent>
          </BodyTitle>
          <AuthBox>
            <AuthInput
              data-testid="email-input"
              type="email"
              placeholder="Email"
            />
            <AuthInput
              data-testid="password-input"
              type="password"
              placeholder="Password"
            />
            <AuthButton data-testid={isSignin ? "signinBtn" : "signupBtn"}>
              {title}
            </AuthButton>
            <SwitchText>
              {text} <Switch onClick={handleSwitchChange}>{change}</Switch>
            </SwitchText>
          </AuthBox>
        </BodyBox>
      </MainBox>
    </App>
  );
};

const App = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`;

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
`;

const MainHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const BodyBox = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
`;

const BodyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  padding-top: 30px;
`;

const BodyTitleContent = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

const AuthBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  padding: 0 40px;
`;

const AuthInput = styled.input`
  padding: 0 10px;
  height: 15%;
  &:focus {
    outline: none;
    border: 1.5px solid rgba(0, 0, 0, 0.8);
    ::placeholder {
      color: transparent;
    }
  }
  border-radius: 5px;
`;

const AuthButton = styled.button`
  height: 20%;
  color: #fff;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(0.99);
  }
  border-radius: 5px;
`;

const SwitchText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #888c8d;
`;

const Switch = styled.span`
  color: black;
  font-size: 12px;
  cursor: pointer;
`;

export default AuthContainer;
