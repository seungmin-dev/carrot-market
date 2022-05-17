import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2">
      <input
        type="text"
        required
        placeholder="Username"
        className="peer rounded-md border border-gray-400 p-1"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-500">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block peer-valid:text-teal-500">
        Awesome Username !
      </span>
      <input
        type="submit"
        value="Login"
        className="rounded-lg border-2 border-gray-400 bg-white"
      />
    </form>
  );
};

export default Home;
