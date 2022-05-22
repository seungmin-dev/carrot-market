interface ListStreamProps {
  key: number;
  children: React.ReactNode;
}

export default function ListSteam({ key, children }: ListStreamProps) {
  return (
    <div key={key} className="px-4 pt-4">
      <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
      <h3 className="mt-2 text-lg font-medium text-gray-700">{children}</h3>
    </div>
  );
}
