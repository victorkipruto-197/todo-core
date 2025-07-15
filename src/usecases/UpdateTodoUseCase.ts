import { Todo } from "../entities/todo";
import { TodoRepository } from "../repositories/TodoRepository";

export class UpdateTodoUseCase {
  constructor(private repository: TodoRepository) {}

  async execute(todo: Todo): Promise<Todo> {
    todo.updatedAt = new Date();
    return this.repository.update(todo);
  }
}
