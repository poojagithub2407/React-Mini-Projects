const TodoList = ({ todoList, onEdit, onDelete, onToggle }) => {
     return (
          <div className="my-4">
               {todoList.map((todo) => (
                    <div
                         key={todo.id}
                         className="flex justify-between bg-blue-100 py-4 px-2 my-2"
                    >
                         <div>
                              <input
                                   type="checkbox"
                                   checked={todo.completed}
                                   onChange={() => onToggle(todo.id)}
                              />
                              <span className={`ml-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                                   {todo.title}
                              </span>

                         </div>
                         <div className="flex justify-center gap-3">
                              <button
                                   className={` ${todo.completed?'cursor-not-allowed ':''} underline  hover:text-blue-500`}
                                   onClick={() => onEdit(todo)}
                                   disabled={todo.completed}

                              >
                                   Edit
                              </button>
                              <button
                                   className={`${todo.completed?'cursor-not-allowed ':''} underline  hover:text-red-500`}
                                   onClick={() => onDelete(todo.id)}
                                   disabled={todo.completed}
                              >
                                   Delete
                              </button>
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default TodoList;
