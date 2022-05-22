import type { NextPage } from "next";
import ChatMe from "../../components/chatMe";
import ChatYou from "../../components/chatYou";

const ChatDetail: NextPage = () => {
  return (
    <div className="space-y-4 py-10 px-4 last:mb-6">
      <ChatYou>
        <p>Hi how much are you selling them for?</p>
      </ChatYou>
      <ChatMe>
        <p>I want ￦20,000</p>
      </ChatMe>
      <ChatYou>
        <p>미쳤어</p>
      </ChatYou>
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
  );
};

export default ChatDetail;
