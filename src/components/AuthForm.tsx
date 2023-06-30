import { ChangeEvent, FormEvent } from 'react';

import { AUTH_MESSAGE } from '@/constants/validation';
import { AuthValidator } from '@/utils/validator';

interface AuthFormProps {
  title: string;
  email: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  testId: string;
}

const AuthForm = (props: AuthFormProps) => {
  const { title, email, password, onChange, onSubmit, testId } = props;

  const { isValidateEmail, isValidatePassword } = AuthValidator(email, password);

  return (
    <form onSubmit={onSubmit} className="form">
      <h1 className="title">{title}</h1>
      <label htmlFor="email" className="form-label">
        이메일
      </label>
      <input
        name="email"
        type="text"
        value={email}
        onChange={onChange}
        placeholder="이메일을 입력해주세요!"
        data-testid="email-input"
      />
      <p className={`form-log ${!isValidateEmail && 'error'}`}>
        {!isValidateEmail ? AUTH_MESSAGE.EMAIL_ERROR : AUTH_MESSAGE.EMAIL_SUCCESS}
      </p>

      <label htmlFor="password" className="form-label">
        비밀번호
      </label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        placeholder="비밀번호를 입력해주세요!"
        data-testid="password-input"
      />
      <p className={`form-log ${!isValidatePassword && 'error'}`}>
        {!isValidatePassword ? AUTH_MESSAGE.PASSWORD_ERROR : AUTH_MESSAGE.PASSWORD_SUCCESS}
      </p>

      <button data-testid={testId} disabled={!isValidateEmail || !isValidatePassword}>
        제출
      </button>
    </form>
  );
};

export default AuthForm;
