import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";

const Header = () => {
  const imagePath = "/images/Case Minimalistic.png";
  const logoPath = "/images/logo.png";
  const searchPath = "/images/Magnifer.png";
  return (
    <header className="w-full bg-white shadow p-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold">My App</h2>

      <nav className="flex items-center gap-6">
        <Link href="/home" className="text-gray-700 hover:text-primary">
          Home
        </Link>

        <Link href="/about" className="text-gray-700 hover:text-primary">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
