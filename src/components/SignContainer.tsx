import styled from 'styled-components';

const SignInContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  .sign__title {
    width: 500px;
    height: 100%;
    line-height: 30px;
    font-size: 24px;

    color: white;
    background-color: #18c37d;
    border-radius: 15px 0 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .sign__form {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .sign__inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;

      .sign__input {
        width: 80%;
        margin-bottom: 5px;
      }
    }

    .sign__button {
        width: 90px;
        height: 25px;
        background-color: #18c37d;
        color: white;
        border: none;
        border-radius: 10px;
        margin-right: 28px;
    }
  }
`;

export default SignInContainer;
