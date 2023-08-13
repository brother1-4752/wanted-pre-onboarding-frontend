import { FormEvent } from 'react';

import useInput from '../../hooks/input/useInput';
import { useNavigate } from 'react-router-dom';

import SignInContainer from '../../components/SignContainer';
import fetchDataByAxios from '../../utils/fetchDataByAxios';
import axios, { AxiosError, AxiosResponse } from 'axios';

function SignIn() {
  const [email, setEmail, onChangeEmail, validatedByEmail] = useInput(
    '',
    'email'
  );
  const [password, setPassword, onChangePassword, validatedByPassword] =
    useInput('', 'password');
  const navigate = useNavigate();
  const fetchData = fetchDataByAxios();

  const isConfirmed = validatedByEmail && validatedByPassword;

  const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = (await fetchData('post', 'auth/signin', {
        email,
        password,
      })) as AxiosResponse;

      if (response.status === 200) {
        alert('로그인에 성공했습니다. \n투두리스트 화면으로 이동합니다.');
        localStorage.setItem('access_token', response.data.access_token);
        navigate('/todo');
      } else {
        alert(response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.log(axiosError.response?.data);
      }
      setEmail('');
      setPassword('');
    }
  };

  return (
    <SignInContainer>
      <h1 className="sign__title">로그인</h1>

      <form className="sign__form" onSubmit={handleSignInSubmit}>
        <div className="sign__inputs">
          <input
            className="sign__input"
            data-testid="email-input"
            type="email"
            id="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
            required
          />
          <input
            className="sign__input"
            data-testid="password-input"
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <button
          className="sign__button"
          type="submit"
          data-testid="signin-button"
          disabled={isConfirmed ? false : true}
          style={{ backgroundColor: isConfirmed ? '#18c37d' : 'gray' }}
        >
          로그인
        </button>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
