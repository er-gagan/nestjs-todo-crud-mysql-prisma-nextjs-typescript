// src/app/types/todo.ts
export interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}