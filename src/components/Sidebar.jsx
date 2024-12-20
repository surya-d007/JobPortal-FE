import Link from "next/link";

export default function Sidebar({ closeSidebar }) {
  const handleOptionClick = () => {
    closeSidebar(); // Close the sidebar when an option is clicked
  };

  return (
    <div className="h-full p-4">
      <h2 className="text-lg font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            onClick={handleOptionClick}
            className="hover:text-gray-300"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            onClick={handleOptionClick}
            className="hover:text-gray-300"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            onClick={handleOptionClick}
            className="hover:text-gray-300"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}
