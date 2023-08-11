import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [isValidatedByEmail, setIsValidatedByEmail] = useState(false);
  const [isValidatedByPassword, setIsValidatedByPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const em = e.target.value;
    if (em.includes('@')) {
      setIsValidatedByEmail(true);
    } else {
      setIsValidatedByEmail(false);
    }
    setEmail(em);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    if (pw.length >= 8) {
      setIsValidatedByPassword(true);
    } else {
      setIsValidatedByPassword(false);
    }
    setPassword(pw);
  };

  const isConfirmed = isValidatedByEmail && isValidatedByPassword;

  return {
    handleEmailChange,
    handlePasswordChange,
    isConfirmed,
    email,
    password,
    setEmail,
    setPassword,
  };
};

export default useInput;
