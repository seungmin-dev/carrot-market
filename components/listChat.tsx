interface ListChatProps {
  key: number;
}

export default function ListChat({ key }: ListChatProps) {
  return (
    <div
      key={key}
      className="mb-2 flex cursor-pointer items-center space-x-3 px-4 py-2"
    >
      <div className="h-12 w-12 rounded-full bg-slate-300" />
      <div>
        <p className="font-medium text-gray-700">Steve Jebs</p>
        <p className="text-sm font-medium text-gray-500">See you tomorrow</p>
      </div>
    </div>
  );
}
