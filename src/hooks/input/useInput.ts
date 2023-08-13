import { ChangeEvent, useState } from 'react';
import { InputReturnTypes, InputTypes } from '../../types/input';
import validateInput from '../../utils/validateInput';

const useInput = <T>(
  initialValue: T,
  inputType: InputTypes
): InputReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  const isValidated = validateInput(value, inputType);

  return [value, setValue, onChangeHandler, isValidated];
};

export default useInput;
