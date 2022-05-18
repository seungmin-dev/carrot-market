import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen place-content-center gap-10 space-y-5 bg-slate-400 py-20 px-10 lg:grid-cols-2 xl:grid-cols-3">
      <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl dark:bg-black dark:text-white sm:bg-red-200 md:bg-teal-200 lg:bg-indigo-200 xl:bg-purple-200 2xl:bg-yellow-200">
        <span className="text-3xl font-semibold">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="my-1 flex justify-between odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$100</span>
        </div>
        <div
          className="mx-auto mt-5 w-1/2 rounded-xl bg-blue-500 p-3 text-center text-white
        transition-all hover:bg-teal-500 hover:text-black focus:text-red-400 active:bg-yellow-500"
        >
          Checkout
        </div>
      </div>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-xl xl:pb-32">
        <div className="bg-blue-500 p-6 pb-14 portrait:bg-purple-400 landscape:bg-yellow-500">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-zinc-400 transition-colors group-hover:bg-red-100" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Peter Parker</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-10 shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>✨ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💞</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="text-lg font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="flex aspect-square w-10 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-10 items-center justify-center rounded-lg bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-lg bg-[#846183] py-2 px-8 text-center text-xs text-white">
              {/* JIT(Just-In-Time) Compiler 덕분에 tailwindcss에서 제공하지 않는 크기(픽셀 값 등), 색깔 등을 내 임의로 설정할 수 있음 */}
              {/* 코드를 감시하면서 사용자가 임의로 추가한 클래스들을 새로 생성해서 컴파일해줌 */}
              {/* bg-[url('/*.png')] 처럼 이미지도 가능 */}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
