interface ChatYouProps {
  children: React.ReactNode;
}

export default function ChatYou({ children }: ChatYouProps) {
  return (
    <div className="flex items-start space-x-2">
      <div className="h-8 w-8 rounded-full bg-slate-400" />
      <div className="w-1/2 rounded-md border border-gray-400 p-2 text-sm text-gray-700">
        {children}
      </div>
    </div>
  );
}
