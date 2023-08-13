interface SignInData {
  email: string;
  password: string;
}

interface SignUpData extends SignInData {}

export type SignData = SignInData | SignUpData;

interface GetTodoData {}

interface DeleteTodoData {}

interface CreateTodoData {
  todo: string;
}

interface UpdateTodoData extends CreateTodoData {
  isCompleted: boolean;
}

export type TodoData =
  | GetTodoData
  | DeleteTodoData
  | CreateTodoData
  | UpdateTodoData;
