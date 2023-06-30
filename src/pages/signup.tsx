import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/apis/auth';
import AuthForm from '@/components/AuthForm';
import { PATH } from '@/constants/path';
import useInput from '@/hooks/useInput';
<<<<<<< HEAD:src/pages/signup/index.tsx
import { Section } from '@/style/register';
=======
import { CredentialType, credentialValue } from '@/types/auth';
>>>>>>> upstream/main:src/pages/signup.tsx

const SignupPage = () => {
  const { value: credentials, onChange } = useInput<CredentialType>(credentialValue);
  const navigate = useNavigate();

  const handleSignup = () => {
    postSignup(credentials).then(() => {
      navigate(PATH.SIGNIN);
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleSignup();
  };

  return (
    <Section>
      <AuthForm
        title="회원가입"
        email={credentials.email}
        password={credentials.password}
        onChange={onChange}
        onSubmit={onSubmit}
        testId="signup-button"
      />
    </Section>
  );
};

export default SignupPage;
