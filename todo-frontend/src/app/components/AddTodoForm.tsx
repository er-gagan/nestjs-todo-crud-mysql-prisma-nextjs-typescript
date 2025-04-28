// src/app/components/AddTodoForm.tsx
'use client';

import { useState } from 'react';

interface AddTodoFormProps {
    onAdd: (title: string, description?: string) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title, description.trim() || undefined);
            setTitle('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="space-y-2">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description (optional)"
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Todo
                </button>
            </div>
        </form>
    );
}