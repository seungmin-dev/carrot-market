import { NextPage } from "next";
import ChatMe from "../../components/chatMe";
import ChatYou from "../../components/chatYou";
import Layout from "../../components/layout";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 px-4 ">
        <div className="px-4 pt-4">
          <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
          <h3 className="mt-2 text-2xl font-semibold text-gray-800">
            Sample live stream
          </h3>
        </div>
        <div className="mt-5 h-[55vh] space-y-4 overflow-y-scroll px-4">
          <ChatYou>
            <p>Hi how much are you selling them for?</p>
          </ChatYou>
          <ChatMe>
            <p>I want ￦20,000</p>
          </ChatMe>
          <div className="fixed inset-x-0 bottom-2 mx-auto w-full max-w-md">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button className="flex items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
