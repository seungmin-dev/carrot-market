import { NextPage } from "next";
import Layout from "../../components/layout";
import ListItem from "../../components/listItem";

const loved: NextPage = () => {
  return (
    <Layout canGoBack title="❤️ 목록" hasTabBar>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ListItem key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default loved;
