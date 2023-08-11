import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import axios from 'axios';

import useInput from '../../hooks/input/useInput';

function SignUp() {
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
  const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://www.pre-onboarding-selection-task.shop/auth/signup',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 201) {
        alert('회원가입에 성공했습니다. \n로그인 화면으로 이동합니다.');
        navigate('/signin');
      }
      console.log(response);
    } catch (error: any) {
      alert(error.response.data.message);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1>회원가입</h1>

      <form onSubmit={handleSignUpSubmit}>
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
          data-testid="signup-button"
          disabled={isConfirmed ? false : true}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUp;
