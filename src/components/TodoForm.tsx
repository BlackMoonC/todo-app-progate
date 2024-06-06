type Props = {};

export default function TodoForm({}: Props) {
  return (
    <>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Submit
        </button>
      </div>
    </>
  );
}
