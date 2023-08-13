import { Link } from 'react-router-dom';
import HomeContainer from './Home.styled';

function Home() {
  return (
    <HomeContainer>
      <h1 className="home__title">
        원티드 프리온보딩
        <br /> 사전과제
      </h1>

      <div className="home__links">
        <Link className="home__link" to="signin">
          로그인
        </Link>
        <Link className="home__link" to="signup">
          회원가입
        </Link>
      </div>
    </HomeContainer>
  );
}

export default Home;
