import { Todo } from "../entities/todo";
import { TodoRepository } from "../repositories/TodoRepository";
export declare class UpdateTodoUseCase {
    private repository;
    constructor(repository: TodoRepository);
    execute(todo: Todo): Promise<Todo>;
}
