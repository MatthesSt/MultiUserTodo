import { addDoc, collection, doc, DocumentData, getDocs, getFirestore, QueryDocumentSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { currentUser } from './router';
import type { todo, todoList } from '@/types';

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

export async function addTodo(list: todoList): Promise<void> {
  console.log(list);
  const id = getAuth().currentUser?.uid;
  if (id)
    await setDoc(doc(getFirestore(), 'lists', id), {
      ...list,
    });
}
export async function updateTodo(todo: todo): Promise<void> {
  console.log(todo);
  const id = getAuth().currentUser?.uid;
  if (id)
    await updateDoc(doc(getFirestore(), 'lists', id), {
      [`todos[${todo.id}]`]: todo,
    });
}
export async function getTodoLists(): Promise<todoList[]> {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(getFirestore(), 'lists'));
  querySnapshot.forEach(doc => {
    docs.push(doc);
  });
  return docs.map(doc => ({ ...(doc.data() as todoList), id: doc.id }));
}
