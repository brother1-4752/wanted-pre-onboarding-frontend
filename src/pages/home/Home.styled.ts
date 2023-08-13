import { styled } from 'styled-components';

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  .home__title {
    width: 500px;
    height: 100%;
    line-height: 30px;
    font-size: 24px;

    border-right: 1px solid black;
    color: black;
    background-color: #18c37d;
    border-radius: 15px 0 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .home__links {
    width: 100%;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .home__link {
      width: 160px;
      line-height: 40px;
      text-align: center;
      text-decoration: none;
      color: white;

      background-color: #18c37d;
      border-radius: 10px;

      &:hover {
        color: black;
      }
    }
  }
`;

export default HomeContainer;
