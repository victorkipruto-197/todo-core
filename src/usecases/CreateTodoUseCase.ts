import { Todo } from "../entities/todo";
import { TodoRepository } from "../repositories/TodoRepository";
import { v4 as uuidv4 } from "uuid";

export class CreateTodoUseCase {
  constructor(private repository: TodoRepository) {}

  async execute(title: string, description?: string): Promise<Todo> {
    const todo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    return this.repository.create(todo);
  }
}
