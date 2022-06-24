export const TYPESCRIPT_FIX = 'typescriptfix';
type id = string;
export interface Todo {
  id: id;
  name: string;
  priority: number;
  done: boolean;
  //   expGain
}
export interface TodoList {
  name: string;
  id: id;
  creatorId: id;
  todos: Todo[];
  //   authorizedUsers: id[];
}

export interface User {
  email: string;
  groups: id[];
}
export interface Group {
  id: id;
  name: string;
  members: GroupMember[];
  todoList: TodoList;
}
export interface GroupMember {
  id: id;
  points: number;
}
