import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
      <input
        type="text"
        required
        placeholder="Username"
        // className="border-yellow-500 required:border-2"
        //className="invalid:bg-red-500" // required일 때 채워지지 않으면 invalid 상태가 됨
        className="placeholder-shown:bg-teal-50"
      />
      <input type="password" required placeholder="Password" />
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
