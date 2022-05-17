import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <ul className="list-disc marker:text-teal-500">
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
      <input
        type="file"
        className="bg-slate-200 file:cursor-pointer file:rounded-md file:border-0 file:bg-purple-400 file:transition-colors file:hover:text-purple-900"
      />
      <p className="first-letter:text-9xl first-line:font-bold first-letter:hover:text-teal-500">
        Lorem Ipsum
      </p>
    </div>
  );
};

export default Home;
