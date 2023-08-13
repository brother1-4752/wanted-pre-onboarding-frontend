import { FormEvent } from 'react';
import axios from 'axios';

import useInput from '../../hooks/input/useInput';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail, onChangeEmail, validatedByEmail] = useInput(
    '',
    'email'
  );
  const [password, setPassword, onChangePassword, validatedByPassword] =
    useInput('', 'password');
  const navigate = useNavigate();

  const isConfirmed = validatedByEmail && validatedByPassword;

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
          onChange={onChangeEmail}
          required
        />
        <input
          data-testid="password-input"
          type="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
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
