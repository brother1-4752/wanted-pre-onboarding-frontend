import React, { useState } from "react";
import styled from "styled-components";

const ToDoItems = ({
  id,
  isCompleted,
  todo,
  deleteToDoItem,
  updateToDoItem,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(todo);

  const handleDelete = () => {
    deleteToDoItem(id);
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleCompleteCheck = () => {
    if (!isCompleted) {
      updateToDoItem(id, todo, !isCompleted, "완료");
    } else {
      updateToDoItem(id, todo, !isCompleted, "작업재개");
    }
  };

  const handleEditInput = (e) => {
    setEditContent(e.target.value);
  };

  const handleEditSubmit = () => {
    if (editContent.length === 0) {
      alert("한글자 이상 입력이 필요합니다.");
      return;
    }

    if (editContent === todo) {
      toggleIsEdit();
      return;
    }

    updateToDoItem(id, editContent, isCompleted, "수정완료");
    toggleIsEdit();
  };

  const handleEditCancel = () => {
    setIsEdit(false);
    setEditContent(todo);
  };

  const handleEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      document.getElementById("edit-button").click();
    }
    return;
  };

  return (
    <ItemsBox>
      <LabelBox>
        {isEdit ? (
          <EditBox
            type="text"
            data-testid="modify-input"
            value={editContent}
            onChange={handleEditInput}
            onKeyDown={handleEnterSubmit}
          />
        ) : (
          <>
            <CompleteBox
              type="checkbox"
              defaultChecked={isCompleted}
              onClick={handleCompleteCheck}
            />
            <Item>{todo}</Item>
          </>
        )}
      </LabelBox>
      <StateControllBox>
        {isEdit ? (
          <>
            <EditBtn
              data-testid="submit-button"
              id="edit-button"
              onClick={handleEditSubmit}
            >
              제출
            </EditBtn>
            <DeleteBtn data-testid="cancel-button" onClick={handleEditCancel}>
              취소
            </DeleteBtn>
          </>
        ) : (
          <>
            <EditBtn data-testid="modify-button" onClick={toggleIsEdit}>
              수정
            </EditBtn>
            <DeleteBtn data-testid="delete-button" onClick={handleDelete}>
              삭제
            </DeleteBtn>
          </>
        )}
      </StateControllBox>
    </ItemsBox>
  );
};

const ItemsBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
`;

const LabelBox = styled.label`
  display: flex;
  align-items: center;
`;

const EditBox = styled.input`
  position: relative;
  width: 90%;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #636e72;
  border-radius: 5px;
  outline: none;
`;

const CompleteBox = styled.input``;

const Item = styled.p`
  width: 100%;
  margin-left: 10px;
`;

const StateControllBox = styled.div`
  display: flex;
  align-items: center;
`;

const EditBtn = styled.button`
  width: 45px;
  height: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeleteBtn = styled(EditBtn)`
  margin-left: 5px;
`;

export default React.memo(ToDoItems);
