import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";

const Header = () => {
  const imagePath = "/images/Case Minimalistic.png";
  const logoPath = "/images/logo.png";
  const searchPath = "/images/Magnifer.png";
  return (
    <header className="w-full bg-primary shadow p-4 flex items-center justify-between fixed top-0 left-0">
      <h2 className="text-xl font-semibold text-white">
        <Link
          href="/"
          className="text-white hover:text-accent transition-colors duration-200"
        >
          SoloForge
        </Link>
      </h2>

      <nav className="flex items-center gap-6">
        <Link
          href="/home"
          className="text-white hover:text-accent transition-colors duration-200"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="text-white hover:text-accent transition-colors duration-200"
        >
          About
        </Link>

        <Link
          href="/posts"
          className="text-white hover:text-accent transition-colors duration-200"
        >
          Posts
        </Link>

        <Link
          href="/users"
          className="text-white hover:text-accent transition-colors duration-200"
        >
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
