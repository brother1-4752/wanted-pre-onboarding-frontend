import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function ToDo() {
  const loadedTodoList = () => {
    const storedTodos = localStorage.getItem('todoList');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todoList, setTodoList] = useState<ITodo[]>(loadedTodoList);
  const [todo, setTodo] = useState<string>('');

  // const [isDone, setIsDone] = useState<boolean>(false);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get(
          'https://www.pre-onboarding-selection-task.shop/todos',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          console.log(response.data);
          setTodoList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, []);

  const handleToDoSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://www.pre-onboarding-selection-task.shop/todos',
        { todo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      setTodo('')
    } catch (error: any) {
      alert(error.response.data.message[0]);
    }
  };

  const handleChangeByTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const handleChageByCheckbox = (i: number) => {
    // setIsDone((prev) => !prev);
    const a = todoList.map((el, index) =>
      index === i
        ? {
            id: el.id,
            isCompleted: !el.isCompleted,
            todo: el.todo,
            userId: el.userId,
          }
        : el
    );
    setTodoList(a);
  };

  return (
    <StyledTodoContainer>
      <h1>투두리스트</h1>
      <form onSubmit={handleToDoSubmit}>
        <input
          type="text"
          data-testid="new-todo-input"
          value={todo}
          onChange={handleChangeByTodo}
        />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>

      <ul>
        {todoList.map((el, index) => (
          <li key={el.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleChageByCheckbox(index)}
              />
              <span>{el.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </li>
        ))}
      </ul>
    </StyledTodoContainer>
  );
}

const StyledTodoContainer = styled.div`
  width: 300px;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ToDo;
