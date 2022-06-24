import { defineStore, Pinia } from 'pinia';
import * as API from '@/API';
import type { Todo, TodoList } from '@/types';
import { currentUser } from '@/router';

// the first argument is a unique id of the store across your application
export const useTodos = defineStore('todo', {
  state: () => {
    return {
      todoLists: [] as TodoList[],
      error: '',
    };
  },
  getters: {},
  actions: {
    async getLists() {
      try {
        this.todoLists = await API.getTodoLists();
        this.error = '';
      } catch (e) {
        this.error = "couldn't fetch todoLists";
      }
    },
    createNewList(listName: string) {
      let newList = {
        name: listName,
        id: Math.random() + '',
        creatorId: currentUser.value!.uid,
        todos: [],
      };
      try {
        API.addTodoList(newList);
        this.todoLists.push(newList);
      } catch (e) {
        this.error = "couldn't create list";
      }
    },
    addTodo(name: string, priority: number, list: TodoList) {
      let todo = {
        name,
        priority,
        done: false,
        id: Math.random() + '',
      };
      try {
        API.updateTodoList(list);
        list.todos.push(todo);
      } catch (e) {
        this.error = "couldn't add todo";
      }
    },
    deleteTodo(todoId: string, list: TodoList) {
      try {
        API.updateTodoList(list);
        list.todos = list.todos.filter(t => t.id != todoId);
      } catch (e) {
        this.error = "couldn't delete todo";
      }
    },
    updateList(list: TodoList) {
      console.log(list);
      // TODO:
    },
  },
});
