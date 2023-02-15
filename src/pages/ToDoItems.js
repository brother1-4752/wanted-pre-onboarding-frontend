import styled from "styled-components";

const ToDoItems = ({ todo }) => {
  return (
    <ItemsBox>
      <LabelBox>
        <CompleteBox type="checkbox" />
        <Item>{todo}</Item>
      </LabelBox>
      <StateControllBox>
        <EditBtn>수정</EditBtn>
        <DeleteBtn>삭제</DeleteBtn>
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

export default ToDoItems;
