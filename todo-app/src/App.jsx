import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (!todoTitle.trim()) return;
    if (editIndex !== null) {
      const updateTodo = todoList.map((item) => (
        item.id === editIndex ? { ...item, title: todoTitle } : item
      ))
      setTodoList(updateTodo)
    } else {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodoTitle('')
    }
  };
  const handleDeleteTodo = (id) => {
    const deleteTodo = todoList.filter((todo) => id !== todo.id);
    setTodoList(deleteTodo);
  };

  const handleEditTodo = (todo) => {
    setEditIndex(todo.id);
    setTodoTitle(todo.title);
  };
  const handleToggleTodo = (id) => {
    const toggle = todoList.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    setTodoList(toggle)
  }
  return (
    <div className="border max-w-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 my-12">
<h1 className="py-4 text-center text-xl sm:text-2xl md:text-3xl font-bold">
  Todo App
</h1>
      <TodoInput
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        addTodo={handleAddTodo}
      />
      <TodoList
        todoList={todoList}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};

export default App;
