// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Todo } from './types/todo';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (title: string, description?: string) => {
    try {
      const newTodo = await createTodo({ title, description });
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleUpdateTodo = async (id: number, updatedTodo: Partial<Todo>) => {
    try {
      await updateTodo(id, updatedTodo);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
      );
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
        <AddTodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}