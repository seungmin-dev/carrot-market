import type { NextPage } from "next";
import Button from "../components/button";
import Layout from "../components/layout";
import ListItem from "../components/listItem";

const Home: NextPage = () => {
  return (
    <Layout hasTabBar title="홈">
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ListItem key={i} />
        ))}
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
