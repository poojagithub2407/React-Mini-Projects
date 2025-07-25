const TodoInput = ({ todoTitle, setTodoTitle, addTodo }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 my-4">
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder="Enter todo"
        className="border py-2 px-2 w-full sm:w-96 outline-none rounded"
      />
      <button 
        onClick={addTodo} 
        className="bg-blue-500 px-6 sm:px-8 py-2 text-white rounded transition transform duration-300 ease-in-out hover:bg-blue-800 hover:scale-105 w-full sm:w-auto"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
