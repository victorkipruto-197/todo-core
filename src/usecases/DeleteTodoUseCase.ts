import { TodoRepository } from "../repositories/TodoRepository";

export class DeleteTodoUseCase {
  constructor(private repository: TodoRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
