interface ButtonFloatingProps {
  children: React.ReactNode;
}

export default function ButtonFloating({ children }: ButtonFloatingProps) {
  return (
    <button className="fixed bottom-24 right-5 cursor-pointer rounded-full bg-orange-400 p-3 text-lg font-semibold text-white shadow-xl transition-colors hover:bg-orange-500">
      {children}
    </button>
  );
}
