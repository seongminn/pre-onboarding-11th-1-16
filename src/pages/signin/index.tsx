import axios from 'axios';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      axios
        .post(
          'https://www.pre-onboarding-selection-task.shop/auth/signin',
          {
            email,
            password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((response) => {
          const token = response.data.access_token;

          localStorage.setItem('token', token);
          navigate('/todo');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    [email, password, navigate],
  );

  return (
    <section>
      <form onSubmit={handleSignIn}>
        <h1 className="title">로그인</h1>
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력해주세요!"
          data-testid="email-input"
        />
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요!"
          data-testid="password-input"
        />
        <button type="submit" data-testid="singin-button">
          제출
        </button>
      </form>
    </section>
  );
};

export default Signin;
