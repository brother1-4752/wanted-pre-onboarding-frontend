import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function ToDo() {
  const token = localStorage.getItem('access_token');

  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState<string>('');

  useEffect(() => {
    (async () => {
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
          setTodoList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
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

      const newTodo: ITodo = {
        id: response.data.id,
        todo: response.data.todo,
        isCompleted: response.data.isCompleted,
        userId: response.data.userId,
      };

      setTodoList((prev) => [...prev, newTodo]);
      setTodo('');
    } catch (error: any) {
      alert(error.response.data.message[0]);
    }
  };

  const handleChangeByTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDeleteButton = (todoId: number) => {
    (async () => {
      try {
        await axios.delete(
          `https://www.pre-onboarding-selection-task.shop/todos/${todoId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    })();
    
    setTodoList((prev) => prev.filter((el, index) => el.id !== todoId));
  };

  return (
    <StyledTodoContainer>
      <h1>투두리스트</h1>
      <form onSubmit={handleToDoSubmit}>
        <input
          onChange={handleChangeByTodo}
          data-testid="new-todo-input"
          value={todo}
          type="text"
        />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>

      <ul>
        {todoList.map((el, index) => (
          <li key={el.id}>
            <label>
              <input type="checkbox" />
              <span>{el.todo}</span>
            </label>
            <button data-testid="update-button">수정</button>
            <button
              data-testid="delete-button"
              onClick={() => handleDeleteButton(el.id)}
            >
              삭제
            </button>
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
