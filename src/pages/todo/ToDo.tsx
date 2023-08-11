import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

function ToDo() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);

  const handleToDoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodoList((prev) => [...prev, todo]);
    console.log(todoList);
    setTodo('');
  };

  const handleChangeByTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  return (
    <StyledTodoContainer>
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

      {todoList.map((v) => (
        <li key={v}>
          <label>
            <input
              type="checkbox"
              onClick={(e) => setIsDone((prev) => !prev)}
            />
            <span>{v}</span>
          </label>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </li>
      ))}

      {/* <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>TODO 2</span>
          </label>
        </li>
      </ul> */}
    </StyledTodoContainer>
  );
}

const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ToDo;
