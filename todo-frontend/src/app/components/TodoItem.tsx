// src/app/components/TodoItem.tsx
'use client';

import { Todo } from '../types/todo';
import { useState } from 'react';
import { FiEdit, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

interface TodoItemProps {
    todo: Todo;
    onUpdate: (id: number, todo: Partial<Todo>) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const [editDescription, setEditDescription] = useState(todo.description || '');

    const handleUpdate = () => {
        onUpdate(todo.id, {
            title: editTitle,
            description: editDescription,
        });
        setIsEditing(false);
    };

    const handleToggleComplete = () => {
        onUpdate(todo.id, { completed: !todo.completed });
    };

    return (
        <div className={`p-4 border rounded-lg ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}>
            {isEditing ? (
                <div className="space-y-2">
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Description (optional)"
                    />
                    <div className="flex space-x-2">
                        <button
                            onClick={handleUpdate}
                            className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                            <FiCheck />
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-3 py-1 bg-red-500 text-white rounded"
                        >
                            <FiX />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={handleToggleComplete}
                                className="h-5 w-5"
                            />
                            <h3 className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                {todo.title}
                            </h3>
                        </div>
                        {todo.description && (
                            <p className={`mt-1 text-gray-600 ${todo.completed ? 'line-through' : ''}`}>
                                {todo.description}
                            </p>
                        )}
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="p-1 text-blue-500 hover:text-blue-700"
                        >
                            <FiEdit />
                        </button>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="p-1 text-red-500 hover:text-red-700"
                        >
                            <FiTrash2 />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}