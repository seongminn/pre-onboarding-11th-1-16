import axios from 'axios';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const [disabled, setDisabled] = useState(false);
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

      if (!email.includes('@')) {
        setValidationError('유효한 이메일 주소를 입력해주세요.');
        setDisabled(true);

        return;
      }

      if (password.length < 8) {
        setValidationError('비밀번호는 최소 8자 이상이어야 합니다.');
        setDisabled(true);

        return;
      }

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
        <button type="submit" disabled={disabled} data-testid="singin-button">
          제출
        </button>
        {validationError && <div>{validationError}</div>}
      </form>
    </section>
  );
};

export default Signin;
