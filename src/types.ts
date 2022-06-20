type id = string;
export interface todo {
  id: id;
  name: string;
  priority: number;
  done: boolean;
  //   expGain
}
export interface todoList {
  name: string;
  id: id;
  creatorId: id;
  todos: {
    [todoId: string]: todo;
  };
  //   authorizedUsers: id[];
}
export const typescriptFix = 1;
