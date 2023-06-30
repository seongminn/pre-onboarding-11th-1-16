import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/apis/auth';
import AuthForm from '@/components/AuthForm';
import useInput from '@/hooks/useInput';

const Signin = () => {
  const { value: credentials, onChange } = useInput({
    email: '',
    password: '',
  });
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
      <AuthForm
        title="로그인"
        email={credentials.email}
        password={credentials.password}
        onChange={onChange}
        onSubmit={onSubmit}
        testId="signin-button"
      />
    </section>
  );
};

export default Signin;
