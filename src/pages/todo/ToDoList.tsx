import { ChangeEvent, Dispatch } from 'react';
import { ITodo } from '../../types/input';

type Props = {
  todoList: ITodo[];
  handleDeleteButton: (todoId: number) => void;
  handleChageByCheckbox: (todoId: number) => void;
  handleUpdateButton: (todoId: number) => void;
  handleUpdateSubmitButton: (todoId: number) => void;
  useUpdateId: [
    updateId: number | undefined,
    setUpdateId: Dispatch<React.SetStateAction<number | undefined>>
  ];
  onChangeModifiedTodo: (event: ChangeEvent<HTMLInputElement>) => void;
};

function ToDoList({
  todoList,
  useUpdateId,
  handleDeleteButton,
  handleChageByCheckbox,
  handleUpdateButton,
  handleUpdateSubmitButton,
  onChangeModifiedTodo,
}: Props) {
  return (
    <ul className="todo__list">
      {todoList.map((el, index) => (
        <li className="todo__list--item" key={el.id}>
          <label>
            <input
              className="todo__list--checkbox"
              type="checkbox"
              onChange={() => handleChageByCheckbox(index)}
              checked={el.isCompleted}
            />
            {useUpdateId[0] === el.id ? (
              <input
                className="todo__list--spacing"
                type="text"
                data-testid="modify-input"
                onChange={onChangeModifiedTodo}
                defaultValue={el.todo}
              />
            ) : (
              <span
                className="todo__list--spacing"
                style={{
                  textDecoration: el.isCompleted ? 'line-through' : 'none',
                }}
              >
                {el.todo}
              </span>
            )}
          </label>
          {useUpdateId[0] === el.id ? (
            <>
              <button
                data-testid="submit-button"
                onClick={() => handleUpdateSubmitButton(el.id)}
              >
                제출
              </button>
              <button
                data-testid="cancel-button"
                onClick={() => useUpdateId[1](0)}
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
  );
}

export default ToDoList;
