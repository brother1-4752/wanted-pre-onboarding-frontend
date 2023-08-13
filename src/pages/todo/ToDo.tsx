import { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import fetchDataByAxios from '../../utils/fetchDataByAxios';
import useInput from '../../hooks/input/useInput';
import { ITodo } from '../../types/input';

function ToDo() {
  const [modifiedTodo, , onChangeModifiedTodo] = useInput('', 'modifiedTodo');
  const [todo, setTodo, onChangeTodo] = useInput('', 'todo');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [updateId, setUpdateId] = useState<number>();

  const fetchData = fetchDataByAxios();

  useEffect(() => {
    fetchData('get', 'todos')
      .then((response: any) => {
        if (response.status === 200) {
          setTodoList(response.data);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.length === 0) {
      alert('빈 칸입니다');
      return <></>;
    }

    fetchData('post', 'todos', { todo })
      .then((response: any) => {
        if (response.status === 201) {
          const newTodo: ITodo = {
            id: response.data.id,
            todo: response.data.todo,
            isCompleted: response.data.isCompleted,
            userId: response.data.userId,
          };
          setTodoList((prev) => [...prev, newTodo]);
          setTodo('');
        }
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteButton = (todoId: number) => {
    fetchData('delete', `todos/${todoId}`)
      .then((response: any) => {
        if (response.status === 204) {
          setTodoList((prev) => prev.filter((el, index) => el.id !== todoId));
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChageByCheckbox = (i: number) => {
    const TodoUpdatedByChecked = todoList.map((el, index) =>
      index === i
        ? {
            id: el.id,
            isCompleted: !el.isCompleted,
            todo: el.todo,
            userId: el.userId,
          }
        : el
    );
    setTodoList(TodoUpdatedByChecked);
  };

  const handleUpdateButton = (todoId: number) => {
    setUpdateId(todoId);
  };

  const handleUpdateSubmitButton = (todoId: number) => {
    const { isCompleted } = todoList.filter((el) => el.id === todoId)[0];

    setUpdateId(0);
    const data = { todo: modifiedTodo, isCompleted };

    fetchData('put', `todos/${todoId}`, data).then((response: any) => {
      if (response.status === 200) {
        const updatedTodo: ITodo = {
          id: response.data.id,
          todo: response.data.todo,
          isCompleted: response.data.isCompleted,
          userId: response.data.userId,
        };
        setTodoList((prev: ITodo[]) =>
          prev.map((el) => {
            if (el.id === todoId) {
              return updatedTodo;
            }
            return el;
          })
        );
      }
    });
  };

  return (
    <StyledTodoContainer>
      <h1>투두리스트</h1>
      <form onSubmit={handleSubmitTodo}>
        <input
          onChange={onChangeTodo}
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
              <input
                type="checkbox"
                onChange={() => handleChageByCheckbox(index)}
                checked={el.isCompleted}
              />
              {updateId === el.id ? (
                <input
                  type="text"
                  data-testid="modify-input"
                  onChange={onChangeModifiedTodo}
                  defaultValue={el.todo}
                />
              ) : (
                <span
                  style={{
                    textDecoration: el.isCompleted ? 'line-through' : 'none',
                  }}
                >
                  {el.todo}
                </span>
              )}
            </label>
            {updateId === el.id ? (
              <>
                <button
                  data-testid="submit-button"
                  onClick={() => handleUpdateSubmitButton(el.id)}
                >
                  제출
                </button>
                <button
                  data-testid="cancel-button"
                  onClick={() => setUpdateId(0)}
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <button
                  data-testid="modify-button"
                  onClick={() => handleUpdateButton(el.id)}
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  onClick={() => handleDeleteButton(el.id)}
                >
                  삭제
                </button>
              </>
            )}
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
