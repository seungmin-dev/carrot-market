import { NextPage } from "next";
import Layout from "../../components/layout";
import ListChat from "../../components/listChat";

const Chat: NextPage = () => {
  return (
    <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1].map((i) => (
          <ListChat key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default Chat;
