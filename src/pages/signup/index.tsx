import axios from 'axios';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [validationError, setValidationError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = useCallback(
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
          'https://www.pre-onboarding-selection-task.shop/auth/signup',
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
          console.log(response);
          if (response.status === 201) {
            alert('회원가입이 완료되었습니다!');
            navigate('/signin');
          }
        })
        .catch((error) => {
          setSignUpError(error.response.data);
          console.log(error.response);
        });
    },
    [email, password, navigate],
  );

  return (
    <section>
      <form onSubmit={handleSignUp}>
        <h1 className="title">회원가입</h1>
        <label htmlFor="email" className="form-label">
          이메일
        </label>
        <input
          id="email"
          type="text"
          className="form-input"
          value={email}
          onChange={onChangeEmail}
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
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호를 입력해주세요!"
          data-testid="password-input"
        />
        <button type="submit" disabled={disabled} data-testid="signup-button">
          제출
        </button>
        {signUpError && <div>{signUpError}</div>}
        {validationError && <div>{validationError}</div>}
      </form>
    </section>
  );
};

export default Signup;
