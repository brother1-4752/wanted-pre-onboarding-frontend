import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export type InputReturnTypes<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  (e: ChangeEvent<HTMLInputElement>) => void,
  boolean | undefined
];

export type InputTypes = 'email' | 'password';
