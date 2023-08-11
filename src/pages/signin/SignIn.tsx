import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/input/useInput';
import { FormEvent } from 'react';
import axios from 'axios';

function SignIn() {
  const {
    handleEmailChange,
    handlePasswordChange,
    isConfirmed,
    email,
    password,
    setEmail,
    setPassword,
  } = useInput();
  const navigate = useNavigate();

  //onSubmit
  const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://www.pre-onboarding-selection-task.shop/auth/signin',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.access_token);
        alert('로그인에 성공했습니다. \n투두리스트 화면으로 이동합니다.');
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/todo');
      }
    } catch (error: any) {
      const errMsg = error.response.data.message;
      if (errMsg === 'Unauthorized') {
        alert('인증에 실패했습니다');
      }
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1>로그인</h1>

      <form onSubmit={handleSignInSubmit}>
        <input
          data-testid="email-input"
          type="email"
          id="email"
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          data-testid="password-input"
          type="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button
          type="submit"
          data-testid="signin-button"
          disabled={isConfirmed ? false : true}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default SignIn;
