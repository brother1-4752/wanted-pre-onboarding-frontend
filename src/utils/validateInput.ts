import { InputTypes } from '../types/input';

const validateInput = <T>(v: T, type: InputTypes) => {
  if (type === 'email') {
    if (typeof v === 'string' && v.includes('@')) {
      return true;
    }
    return false;
  }

  if (type === 'password') {
    if (typeof v === 'string' && v.length >= 8) {
      return true;
    }
    return false;
  }
};

export default validateInput;
