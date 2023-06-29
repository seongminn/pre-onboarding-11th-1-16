import { ChangeEvent, FormEvent } from 'react';

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
      <button data-testid={testId}>제출</button>
    </form>
  );
};

export default AuthForm;
