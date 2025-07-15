import { TodoRepository } from "../repositories/TodoRepository";
export declare class DeleteTodoUseCase {
    private repository;
    constructor(repository: TodoRepository);
    execute(id: string): Promise<void>;
}
