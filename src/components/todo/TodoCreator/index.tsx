import styled from '@emotion/styled';
import { FormEvent } from 'react';

import { createTodo } from '@/apis/todo';
import useInput from '@/hooks/useInput';
import useTodos from '@/hooks/useTodos';

const TodoCreator = () => {
  const { value, onChange, resetValue } = useInput({ todo: '' });
  const { dispatch } = useTodos();

  const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodo({ todo: value.todo }).then(({ data }) => {
      dispatch({ type: 'CREATE', todo: data });
      resetValue();
    });
  };

  return (
    <AddToDoForm onSubmit={handleCreateTodo} className="create-form">
      <h1>TO DO LIST</h1>
      <input
        name="todo"
        placeholder="새로운 투두를 입력해보세요!"
        value={value.todo}
        onChange={onChange}
        data-testid="new-todo-input"
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </AddToDoForm>
  );
};

const AddToDoForm = styled.form`
  display: flex;
  place-items: left;
  h1 {
    font-size: 1.6em;
    font-weight: bolder;
    color: rgb(65, 104, 177);
    padding-right: 30px;
  }
  input {
    width: 15%;
    border: 1px solid rgb(65, 104, 177);
    border-radius: 5px 0px 0px 5px;
    border-right: none;
    &::placeholder {
      padding-left: 2px;
    }
  }
  button {
    border: none;
    cursor: pointer;
    background-color: rgb(65, 104, 177);
    color: white;
    border-radius: 0px 5px 5px 0px;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: rgb(34, 55, 86);
    }
  }
`;

export default TodoCreator;
