import styled from "styled-components";
import ToDoItems from "./ToDoItems";

const ToDoList = () => {
  return (
    <App>
      <MainBox>
        <MainHeader>
          <HeaderTitle>ToDoList</HeaderTitle>
        </MainHeader>
        <BodyBox>
          <AddToDos
            data-testid="new-todo-input"
            type="text"
            placeholder="새로운 할 일을 추가해보세요."
          />
          <AddBtn data-testid="new-todo-add-button" type="submit">
            추가하기
          </AddBtn>
        </BodyBox>
        <ListBox>
          {toDoList.map((toDo) => (
            <ToDoItems key={toDo.id} {...toDo} />
          ))}
        </ListBox>
      </MainBox>
    </App>
  );
};

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

const MainBox = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 60%;
  width: 45%;
  min-width: 500px;
  height: 75vh;
`;

const MainHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const BodyBox = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

const AddToDos = styled.input`
  position: relative;
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  &:focus {
    border: 1.5px solid rgba(0, 0, 0, 0.8);
    ::placeholder {
      color: transparent;
    }
  }
  &::placeholder {
    text-align: center;
  }
  font-size: 18px;
`;

const AddBtn = styled.button`
  position: absolute;
  right: 10px;
  //   bottom: 50%;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const ListBox = styled.ul`
  padding: 10px;
  border: 1px solid #888c8d;
  border-radius: 5px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.8); /* 스크롤바의 색상 */
    border-radius: 10px;
    height: 50px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(128, 128, 128, 0.2); /*스크롤바 뒷 배경 색상*/
  }
`;

export default ToDoList;

const toDoList = [
  { id: 1, todo: "할일 1" },
  { id: 2, todo: "할일 2" },
  { id: 3, todo: "할일 3" },
  { id: 4, todo: "할일 4" },
  { id: 5, todo: "할일 5" },
];
