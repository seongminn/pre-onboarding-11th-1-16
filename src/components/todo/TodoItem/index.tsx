import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useState } from 'react';

import useInput from '@/hooks/useInput';
import { Todo, UpdateTodo } from '@/types/todo';

interface TodoItemProps {
  todoInfo: Todo;
  handleUpdateTodo: (id: number, todo: UpdateTodo) => void;
  handleDeleteTodo: (todo: Todo) => void;
}

interface ModeProps extends TodoItemProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

const TodoItem = (props: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <ToDo>
      {isEdit ? (
        <EditMode {...props} setIsEdit={setIsEdit} />
      ) : (
        <NormalMode {...props} setIsEdit={setIsEdit} />
      )}
    </ToDo>
  );
};

export default TodoItem;

const NormalMode = (props: ModeProps) => {
  const { todoInfo, handleUpdateTodo, handleDeleteTodo, setIsEdit } = props;
  const { id, todo, isCompleted } = todoInfo;

  return (
    <>
      <label>
        <CheckBox
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <span>{todo}</span>
      </label>
      <Button onClick={() => setIsEdit(true)} data-testid="modify-button">
        수정
      </Button>
      <Button onClick={() => handleDeleteTodo(todoInfo)} data-testid="delete-button">
        삭제
      </Button>
    </>
  );
};

const EditMode = (props: ModeProps) => {
  const { todoInfo, handleUpdateTodo, setIsEdit } = props;
  const { id, todo, isCompleted } = todoInfo;

  const { value, onChange } = useInput({ todo });

  const onClickUpdateButton = () => {
    handleUpdateTodo(id, { todo: value.todo, isCompleted });

    setIsEdit(false);
  };

  return (
    <>
      <label>
        <CheckBox
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <input name="todo" defaultValue={todo} onChange={onChange} data-testid="modify-input" />
      </label>
      <Button onClick={onClickUpdateButton} data-testid="submit-button">
        제출
      </Button>
      <Button onClick={() => setIsEdit(false)} data-testid="cancel-button">
        취소
      </Button>
    </>
  );
};

const Button = styled.button`
  border: none;
  padding: 3px 5px;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgb(65, 104, 177);
  color: white;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgb(34, 55, 86);
  }
`;
const CheckBox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid rgb(65, 104, 177);
  border-radius: 20%;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: rgb(65, 104, 177);
  }
`;
const ToDo = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  margin: 10px 0px;
  border-bottom: 1px solid rgb(65, 104, 177);
  place-items: left center;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  span {
    padding: 3px 10px 0px;
    text-align: center;
  }
  button:first-of-type {
    margin-right: 5px;
  }
`;
