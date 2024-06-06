import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="artboard phone-3 mx-auto">
      <h1 className="text-center font-bold text-2xl mb-2">My Todo List</h1>
      <TodoForm />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
