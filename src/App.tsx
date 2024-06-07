import { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { Todo } from "./lib/definiton";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: true,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  const changeChecklist = (id: number) => {
    console.log(id);
    const newData: Todo[] = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodos(newData);
  };

  const addTodo = (todoTitle: string) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updateTodos = todos.concat(newTodo);
    setTodos(updateTodos);
  };

  const deleteTodo = (id: number) => {
    const newData: Todo[] = todos.filter((item) => item.id !== id);
    setTodos(newData);
  };

  return (
    <div className="artboard phone-3 mx-auto">
      <h1 className="text-center font-bold text-2xl mb-2">My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo: Todo) => (
        <div className="mb-4" key={todo.id}>
          <TodoItem
            deleteTodo={deleteTodo}
            changeChecklist={changeChecklist}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
