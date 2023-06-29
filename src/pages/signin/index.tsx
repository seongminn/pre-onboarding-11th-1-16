import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/apis/auth';
import useInput from '@/hooks/useInput';

const Signin = () => {
  const { value: credentials, onChange } = useInput({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    postSignin(credentials).then(() => {
      navigate('/todo');
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSignIn();
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <h1 className="title">로그인</h1>
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          type="text"
          value={credentials.email}
          onChange={onChange}
          placeholder="이메일을 입력해주세요!"
          data-testid="email-input"
        />
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요!"
          data-testid="password-input"
        />
        <button type="submit" disabled={disabled} data-testid="singin-button">
          제출
        </button>
      </form>
    </section>
  );
};

export default Signin;
