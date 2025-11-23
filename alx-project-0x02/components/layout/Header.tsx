import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";

const Header = () => {
  const imagePath = "/images/Case Minimalistic.png";
  const logoPath = "/images/logo.png";
  const searchPath = "/images/Magnifer.png";
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between fixed top-0 left-0">
      <h2 className="text-xl font-semibold"></h2>
      <nav className="flex items-center gap-6">
        <Link href="/home" className="text-gray-700 hover:text-primary">
          Home
        </Link>

        <Link href="/about" className="text-gray-700 hover:text-primary">
          About
        </Link>
        <Link href="/posts" className="text-gray-700 hover:text-primary">
          Posts
        </Link>
        <Link href="/users" className="text-gray-700 hover:text-primary">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
