import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import API from "../api";

const ToDoList = () => {
  const [taskInput, setTaskInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const navigate = useNavigate();

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const getToDoList = () => {
    fetch(`${API.TODOS}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setToDoList(data);
        } else {
          alert("ToDo Item를 가져오지 못했습니다.");
        }
      });
  };

  const createToDoItem = () => {
    if (taskInput.length === 0) {
      alert("한글자 이상 입력이 필요합니다.");
      return;
    }

    fetch(`${API.TODOS}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: taskInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.todo) {
          alert("ToDo Item 등록완료");
          getToDoList();
          setTaskInput("");
        } else {
          alert("ToDo Item 등록에 실패했습니다.");
        }
      });
  };

  const deleteToDoItem = useCallback((id) => {
    fetch(`${API.TODOS}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((res) => {
      if (res.status === 204) {
        alert("ToDo Item 삭제 완료");
        getToDoList();
      } else {
        alert("ToDo Item 삭제 실패");
      }
    });
  }, []);

  const updateToDoItem = useCallback((id, todo, isCompleted, status) => {
    fetch(`${API.TODOS}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todo, isCompleted: isCompleted }),
    }).then((res) => {
      if (res.status === 200) {
        alert(`TODO는 ${status}`);
        getToDoList();
      } else {
        alert("ToDo Item 수정 실패");
      }
    });
  }, []);

  const handleEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("add-button").click();
    }
    return;
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("우선 로그인을 진행해주세요.");
      navigate("/signin");
    }
    getToDoList();
  }, []);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "투두 리스트";
  }, []);

  return (
    <App>
      <MainBox>
        <MainHeader>
          <Title>ToDoList</Title>
        </MainHeader>
        <BodyBox>
          <AddToDos
            data-testid="new-todo-input"
            type="text"
            placeholder="새로운 할 일을 추가해보세요."
            value={taskInput}
            onChange={handleTaskInput}
            onKeyDown={handleEnterSubmit}
          />
          <AddBtn
            data-testid="new-todo-add-button"
            id="add-button"
            onClick={createToDoItem}
          >
            추가하기
          </AddBtn>
        </BodyBox>
        <ListBox>
          {toDoList.map((toDo) => (
            <ToDoItem
              key={toDo.id}
              {...toDo}
              deleteToDoItem={deleteToDoItem}
              updateToDoItem={updateToDoItem}
            />
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

const Title = styled.h1`
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
  border: 1px solid #3366ff;
  border-radius: 8px;
  &:focus {
    border: 1.5px solid #3366ff;
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
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const ListBox = styled.ul`
  padding: 10px;
  border: 1px solid #3366ff;
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
    background: rgba(128, 128, 128, 0.3); /*스크롤바 뒷 배경 색상*/
  }
`;

export default ToDoList;
