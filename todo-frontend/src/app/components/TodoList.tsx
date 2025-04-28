// src/app/components/TodoList.tsx
'use client';

import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onUpdate: (id: number, todo: Partial<Todo>) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {
    return (
        <div className="space-y-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}