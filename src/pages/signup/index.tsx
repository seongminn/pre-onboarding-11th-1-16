import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/apis/auth';
import AuthForm from '@/components/AuthForm';
import useInput from '@/hooks/useInput';
import { Section } from '@/style/register';

const Signup = () => {
  const { value: credentials, onChange } = useInput({
    email: '',
    password: '',
  });
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

export default Signup;
