import { Todo } from "../entities/todo";
import { TodoRepository } from "../repositories/TodoRepository";
export declare class CreateTodoUseCase {
    private repository;
    constructor(repository: TodoRepository);
    execute(title: string, description?: string): Promise<Todo>;
}
