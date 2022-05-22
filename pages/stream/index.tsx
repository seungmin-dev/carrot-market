import { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import ListSteam from "../../components/listStream";

const Stream: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
      <div className="space-y-4 divide-y-2 px-4 ">
        {[1, 2, 3, 4].map((_, i) => (
          <ListSteam key={i}>Sample Live Stream</ListSteam>
        ))}
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </Button>
      </div>
    </Layout>
  );
};

export default Stream;
