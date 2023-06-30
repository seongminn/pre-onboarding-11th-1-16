import { VALIDATION } from '@/constants/validation';

export const AuthValidator = (email: string, password: string) => {
  const isValidateEmail = new RegExp(VALIDATION.AT).test(email);
  const isValidatePassword = password.length >= VALIDATION.MIN_LENGTH;

  return { isValidateEmail, isValidatePassword };
};
