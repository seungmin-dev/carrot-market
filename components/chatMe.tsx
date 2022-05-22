interface ChatMeProps {
  children: React.ReactNode;
}

export default function ChatMe({ children }: ChatMeProps) {
  return (
    <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
      <div className="h-8 w-8 rounded-full bg-slate-400" />
      <div className="w-1/2 rounded-md border border-gray-400 p-2 text-sm text-gray-700">
        {children}
      </div>
    </div>
  );
}
