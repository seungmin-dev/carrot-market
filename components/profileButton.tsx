interface ProfileButtonProps {
  children: React.ReactNode;
}
export default function ProfileButton({ children }: ProfileButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700">{children}</span>
    </div>
  );
}
