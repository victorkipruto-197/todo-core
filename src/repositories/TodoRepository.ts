import { Todo } from "../entities/todo";


export interface TodoRepository {
  create(todo: Todo): Promise<Todo>;
  update(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Todo | null>;
  findAll(): Promise<Todo[]>;
}
