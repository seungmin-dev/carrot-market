import { NextPage } from "next";
import Layout from "../../components/layout";
import ListItem from "../../components/listItem";

const bought: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar title="구매목록">
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ListItem key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default bought;
