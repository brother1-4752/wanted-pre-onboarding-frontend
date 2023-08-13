import { styled } from 'styled-components';

const StyledTodoContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  .todo__title {
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

  .todo__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .todo__form {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid black;
      margin-bottom: 30px;

      display: flex;
      justify-content: center;
      align-items: center;

      .todo__input--todo {
        width: 70%;
        height: 24px;
        margin-right: 5px;
        text-align: center;
      }
      .todo__button--add {
        padding: 6px 16px;
        background-color: #18c37d;
        color: white;
        border: none;
        border-radius: 10px;
      }
    }

    .todo__list {
      width: 80%;
      height: 80%;

      .todo__list--item {
        line-height: 30px;

        .todo__list--checkbox {
          margin-right: 5px;
        }

        .todo__list--spacing {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default StyledTodoContainer;
