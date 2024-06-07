import { useState } from "react";

type Props = {
  addTodo: (title: string) => void;
};

export default function TodoForm({ addTodo }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(
      "🚀 ~ handleChangeTitle ~ currentTarget:",
      event.currentTarget.value
    );
    setTitle(event.currentTarget.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-between mb-4">
        <input
          onChange={(e) => handleChangeTitle(e)}
          name="title"
          value={title}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button
          type="submit"
          className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Submit
        </button>
      </form>
    </>
  );
}
