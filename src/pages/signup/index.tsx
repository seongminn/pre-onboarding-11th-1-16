import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/apis/auth';
import useInput from '@/hooks/useInput';

const Signup = () => {
  const { value: credentials, onChange } = useInput({
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    postSignup(credentials).then(() => {
      navigate('/signin');
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSignup();
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <h1 className="title">회원가입</h1>
        <label htmlFor="email" className="form-label">
          이메일
        </label>
        <input
          id="email"
          type="text"
          className="form-input"
          value={credentials.email}
          onChange={onChange}
          placeholder="이메일을 입력해주세요!"
          data-testid="email-input"
        />
        <label htmlFor="password" className="form-label">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          className="form-input"
          value={credentials.password}
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요!"
          data-testid="password-input"
        />
        <button type="submit" disabled={disabled} data-testid="signup-button">
          제출
        </button>
      </form>
    </section>
  );
};

export default Signup;
