"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoUseCase = void 0;
const uuid_1 = require("uuid");
class CreateTodoUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = {
                id: (0, uuid_1.v4)(),
                title,
                description,
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            return this.repository.create(todo);
        });
    }
}
exports.CreateTodoUseCase = CreateTodoUseCase;
