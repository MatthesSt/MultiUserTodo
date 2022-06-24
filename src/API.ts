import { addDoc, collection, doc, DocumentData, getDocs, getFirestore, QueryDocumentSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { currentUser } from './router';
import type { Todo, TodoList } from '@/types';

export async function login(email: string, password: string): Promise<void> {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password);
}

export async function logout(): Promise<void> {
  const auth = getAuth();
  await signOut(auth);
  currentUser.value = null;
}

export async function register(email: string, password: string): Promise<void> {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(getFirestore(), 'users', userCredential.user.uid), {
    email,
  });
}

export async function updateTodoList(list: TodoList): Promise<void> {
  console.log(list);
  // TODO:
}
export async function addTodoList(list: TodoList): Promise<void> {
  console.log(list);
  // TODO:
}
export async function getTodoLists(): Promise<TodoList[]> {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(getFirestore(), 'lists'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(doc => doc.data()).map(list => ({ ...list, todos: Object.values(list.todos) } as TodoList));
}
