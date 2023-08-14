import { FormEvent, useEffect, useState } from 'react';
import StyledTodoContainer from './ToDo.styled';

import fetchDataByAxios from '../../utils/fetchDataByAxios';
import useInput from '../../hooks/input/useInput';
import { ITodo } from '../../types/input';
import ToDoList from './ToDoList';

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
      <h1 className="todo__title">투두리스트</h1>
      <div className="todo__wrapper">
        <form className="todo__form" onSubmit={handleSubmitTodo}>
          <input
            className="todo__input--todo"
            onChange={onChangeTodo}
            data-testid="new-todo-input"
            value={todo}
            type="text"
            placeholder="할 일을 입력하세요."
          />
          <button
            className="todo__button--add"
            type="submit"
            data-testid="new-todo-add-button"
          >
            추가
          </button>
        </form>

        <ToDoList
          handleUpdateSubmitButton={handleUpdateSubmitButton}
          handleChageByCheckbox={handleChageByCheckbox}
          onChangeModifiedTodo={onChangeModifiedTodo}
          handleDeleteButton={handleDeleteButton}
          handleUpdateButton={handleUpdateButton}
          useUpdateId={[updateId, setUpdateId]}
          todoList={todoList}
        />
      </div>
    </StyledTodoContainer>
  );
}

export default ToDo;
