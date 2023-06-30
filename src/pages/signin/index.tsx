import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/apis/auth';
import AuthForm from '@/components/auth/AuthForm';
import { PATH } from '@/constants/path';
import useInput from '@/hooks/useInput';
import { CredentialType, credentialValue } from '@/types/auth';

const SigninPage = () => {
  const { value: credentials, onChange } = useInput<CredentialType>(credentialValue);
  const navigate = useNavigate();

  const handleSignIn = () => {
    postSignin(credentials).then(() => {
      navigate(PATH.TODO, { replace: true });
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

export default SigninPage;
